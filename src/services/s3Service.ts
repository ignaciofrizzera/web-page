import { Song } from '@/types/Song'
import AWS from 'aws-sdk';

export class S3Service {
  private s3: AWS.S3;
  private bucket: string = "spotify-activity-data"
  private folder: string = "clean/"
    
  constructor() {
    this.s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
        region: process.env.AWS_REGION
    });
  }

  public async getFileContent(fileKey: string): Promise<Song[]> {
    const params: AWS.S3.GetObjectRequest = {Bucket: this.bucket, Key: fileKey};
    try {
      const songsContent: Song[] = [];
      const data = await this.s3.getObject(params).promise();
      if (data.Body) {
        const fileContent = JSON.parse(data.Body.toString()) // We parse the str into a JSON.
        for (const song of fileContent) {
          songsContent.push(new Song(song));
        }
      }
      return songsContent;
    } catch (err: any) {
      // log the error on the server-side
      // most likely i didn't listen to any song on the date if the file wasn't found
      console.log(`Failed to read file from S3: ${err.message}`);
      return [];
    }
  }
  
  private buildPath(date: Date): string {
    const isosDate = date.toISOString();
    const month = isosDate.split('-')[1];
    const year = date.getFullYear();
    const formattedDate = isosDate.split('T')[0];
    return `${this.folder}${year}/${month}/${formattedDate}.json`;
  }

  public async getData(): Promise<Song[]> {
    // get the played songs for the last 8 days
    const currDate = new Date()
    const songDataPromises: Promise<Song[]>[] = [];
    for (let i = 7; i > 0; i--) {
      const prevDate = new Date(new Date().setDate(currDate.getDate() - i));
      const currPath = this.buildPath(prevDate);
      songDataPromises.push(this.getFileContent(currPath));
    }
    const todayPath = this.buildPath(currDate);
    songDataPromises.push(this.getFileContent(todayPath));
    const data = await Promise.all(songDataPromises);
    return data.flat();
  }

  /**
   * Gets the total played songs in the current year.
   */
  // public async getYearData(year: string): Promise<Song[]> {
  //   const params: AWS.S3.ListObjectsV2Request = {
  //     Bucket: this.bucket, Prefix: `${this.folder}${year}/`
  //   };
  //   try {
  //     const songDataPromises: Promise<Song[]>[] = [];
  //     const yearlyFiles = await this.s3.listObjectsV2(params).promise();
  //     if (yearlyFiles.Contents) {
  //       for (const file of yearlyFiles.Contents) {
  //         if (file.Key) {
  //           songDataPromises.push(this.getFileContent(file.Key));
  //         }
  //       }
  //     }
  //     const yearlyData = await Promise.all(songDataPromises);
  //     return yearlyData.flat();
  //   } catch (err: any) {
  //     throw new Error(`Failed to list files from S3: ${err.message}`);
  //   }
  // }

}
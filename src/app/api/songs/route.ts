import { S3Service } from "@/services/s3Service";

export async function GET() {
  const year = new Date().getFullYear().toString();
  try {
    const s3Service = new S3Service();
    const yearData = await s3Service.getYearData(year);
    return Response.json(yearData);
  } catch (error) {
    console.error(error);
  }
}
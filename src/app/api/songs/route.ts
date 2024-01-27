import { S3Service } from "@/services/s3Service";

export async function GET() {
  try {
    const s3Service = new S3Service();
    const data = await s3Service.getData();
    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
}
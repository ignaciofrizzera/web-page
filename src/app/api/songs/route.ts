import { S3Service } from "@/services/s3Service";

// This actually disables caching.
export const fetchCache = 'force-no-store'
export const revalidate = 0 // 600 seconds were caching it forever.
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const s3Service = new S3Service();
    const data = await s3Service.getData();
    return Response.json(data);
  } catch (error) {
    console.error(error);
  }
}
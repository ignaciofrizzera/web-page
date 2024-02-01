import { S3Service } from "@/services/s3Service";
import { NextResponse } from "next/server";

// This actually does not disable caching.
export const fetchCache = 'force-no-store'
export const revalidate = 0
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const s3Service = new S3Service();
    const data = await s3Service.getData();
    const response = new NextResponse(JSON.stringify(data))
    response.headers.set('Cache-Control', 'no-store');
    return response;
  } catch (error) {
    console.error(error);
  }
}
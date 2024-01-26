import { S3Service } from "@/services/s3Service";

export async function GET() {
  const year = new Date().getFullYear().toString();
  try {
    const s3Service = new S3Service();
    const yearData = await s3Service.getYearData(year);
    return Response.json(yearData);
    // res.status(200).json(yearData); // Chain status and json for a fluent interface
  } catch (error) {
    console.error(error); // Log the actual error for server-side debugging
  }
}
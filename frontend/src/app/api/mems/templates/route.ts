// get data from local api
import { templatesData } from "@/app/data/templates";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(templatesData);
}

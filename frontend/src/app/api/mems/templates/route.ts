// get data from local api
import { templatesData } from "@/app/data/templates";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(templatesData);
}
// export async function POST(request) {
//   const { title, description, level, link } = await request.json();
//   const newCourse = {
//     id: Date.now(),
//     title,
//     description,
//     level,
//     link,
//   };
//   console.log(title, description, level, link, "request");
//   return NextResponse.redirect("/courses");
// }

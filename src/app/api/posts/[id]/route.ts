import { NextResponse } from "next/server";

const posts: any = [
  {
    id: 12,
    title: "Hello",
    description: "Amazing post",
  },
];

export async function GET(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json({
    post: posts.find((x: any) => x.id.toString() === params.id),
  });
}

export async function POST(request: Request, context: any) {
  const requestBody = await request.json();

  if (!requestBody.id || !requestBody.title || !requestBody.description) {
    return NextResponse.error();
  }

  posts.push({
    id: requestBody.id,
    title: requestBody.title,
    description: requestBody.description,
  });
  return NextResponse.json({
    posts
  });
}

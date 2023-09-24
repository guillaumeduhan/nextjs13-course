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

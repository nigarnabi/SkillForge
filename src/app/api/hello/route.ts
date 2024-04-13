// app/api/hello/route.ts

export async function POST(request: Request) {
  const body = await request.json;
  return Response.json({
    message: `You sent: ${body.name}`,
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "stranger";
  return Response.json({
    message: `Hello ${name}!`,
  });
}

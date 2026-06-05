export const onRequestGet: PagesFunction = async () => {
  return Response.json({
    ok: true,
    service: "cloudflare-pages",
    timestamp: new Date().toISOString()
  });
};


export async function post({ request }) {
  const data = await request.json();
  console.log('Nova denúncia:', data);
  // Valida token com CF API (fetch pra https://challenges.cloudflare.com/turnstile/v0/siteverify)
  // Se ok, envia email ou salva (futuro DB)
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
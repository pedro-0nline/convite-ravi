export default async function handler(request, context) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response('Bad Request', { status: 400 });
  }

  const adminPassword = Deno.env.get('ADMIN_PASSWORD');

  // Se a env var não estiver configurada, bloqueia acesso
  if (!adminPassword) {
    return new Response(JSON.stringify({ ok: false, error: 'Not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }

  const valid = body.password === adminPassword;

  // Delay em caso de falha (dificulta brute-force)
  if (!valid) await new Promise(r => setTimeout(r, 500));

  return new Response(JSON.stringify({ ok: valid }), {
    status: valid ? 200 : 401,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = { path: '/api/login' };
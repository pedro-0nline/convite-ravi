export default async function handler(request, context) {
  // Só expõe as variáveis públicas necessárias — nunca a senha do admin aqui
  const config = {
    supabaseUrl: Deno.env.get('SUPABASE_URL')    ?? '',
    supabaseKey: Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  };

  return new Response(JSON.stringify(config), {
    headers: {
      'Content-Type': 'application/json',
      // Não cacheia — sempre lê as vars atualizadas
      'Cache-Control': 'no-store',
    },
  });
}

export const config = { path: '/api/config' };

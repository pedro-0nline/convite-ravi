# 🦁 Guia de Configuração — Safari Party do Ravi

## O que você vai ganhar
- ✅ Confirmações salvas num banco de dados real (gratuito)
- ✅ Painel `/admin.html` protegido por senha só sua
- ✅ Ver nome, quantidade de pessoas e horário de cada confirmação
- ✅ Saber automaticamente quantos kg de carne comprar

---

## PASSO 1 — Criar o banco no Supabase (gratuito)

1. Acesse **https://supabase.com** → crie conta gratuita
2. **"New project"** → nome: `safari-ravi` → crie uma senha → aguarde ~1 min
3. Menu lateral → **SQL Editor** → cole e clique **Run ▶️**:

```sql
create table rsvps (
  id           bigint generated always as identity primary key,
  name         text not null,
  guests       int  not null default 1,
  confirmed_at timestamptz default now()
);
```

4. **Settings → API** → copie:
   - **Project URL** → `supabaseUrl`
   - **anon / public key** → `supabaseKey`

---

## PASSO 2 — Preencher o CONFIG nos arquivos

Abra `index.html` **e** `admin.html` num editor de texto e preencha:

```js
const CONFIG = {
  supabaseUrl:   'https://xxxxxxxxxxx.supabase.co',
  supabaseKey:   'eyJhbGciOi...',
  adminPassword: 'suasenhasecreta',   // ← escolha uma senha só sua
};
```

> Preencha **igual nos dois arquivos**.

---

## PASSO 3 — Colocar no ar com Netlify (gratuito)

1. Acesse **https://netlify.com** → crie conta
2. Arraste a **pasta `convite-ravi`** inteira para a área de deploy
3. URL gerada (exemplo):
   ```
   https://safari-ravi.netlify.app          ← convite dos convidados
   https://safari-ravi.netlify.app/admin.html  ← seu painel secreto
   ```

---

## Usando o painel admin

- Acesse `/admin.html` → digite a senha → entre
- Veja: confirmações, total de pessoas, **kg de carne necessários**, última confirmação
- Busque por nome, delete entradas erradas, clique ↻ para atualizar

---

## Modo demo (antes de configurar)

Sem o Supabase configurado, os dados ficam no `localStorage` do navegador.
Serve para testar — mas some se limpar o navegador. Configure o Supabase para dados permanentes.

---

🌿 Boa festa para o **Ravi**! 🦁

# 🎬 Cineprint

> Importe seu histórico do Netflix ou Letterboxd e descubra seu perfil cinematográfico — com visualizações interativas e insights gerados a partir dos seus dados reais.

![Cineprint preview](https://placehold.co/1200x600/0d0d0f/f0ede8?text=Cineprint+preview)

---

## Sobre o projeto

CinePersona processa o CSV de histórico do Netflix ou Letterboxd diretamente no navegador, cruza os dados com a [TMDB API](https://www.themoviedb.org/documentation/api) para enriquecer com gêneros, elenco e notas, e gera um perfil personalizado baseado nos seus hábitos de consumo.

Nenhum dado é enviado para um servidor — tudo roda no front-end.

### O que você descobre

- **Arquétipo de espectador** — um perfil bem-humorado baseado nos seus gêneros dominantes
- **Fingerprint de gêneros** — radar chart com sua distribuição entre drama, comédia, terror e mais
- **Linha do tempo de consumo** — quantos filmes/séries por mês ao longo de todo o histórico
- **Insights automáticos** — "você assistiu 11 filmes com Cillian Murphy e provavelmente não percebeu"
- **Diretores e atores recorrentes** — os nomes que aparecem mais no seu histórico

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS + shadcn/ui |
| Estado global | Zustand |
| Gráficos | Recharts |
| Parse de CSV | PapaParse |
| API externa | TMDB API |
| Animações | Framer Motion |
| Deploy | Vercel |

---

## Como usar

### Netflix

1. Acesse **netflix.com → Conta → Minha conta**
2. Role até **Meus dados** → clique em **Baixar seus dados pessoais**
3. Solicite os dados e aguarde o e-mail da Netflix (pode levar até 30 dias)
4. No arquivo baixado, encontre `ViewingActivity.csv`

### Letterboxd

1. Acesse **letterboxd.com → Configurações → Importar & Exportar**
2. Clique em **Exportar seus dados**
3. Use o arquivo `watched.csv` do zip gerado

---

## Acesse aqui:

    🚧 Ainda não disponível para execução 🚧

---

## Roadmap

- [x] Parse de CSV (Netflix e Letterboxd)
- [x] Enriquecimento via TMDB API
- [x] Sistema de arquétipos de espectador
- [x] Visualizações com Recharts
- [x] Responsividade mobile
- [x] Deploy na Vercel
- [ ] Autenticação OAuth (Google / GitHub) via Supabase
- [ ] Salvar e carregar perfis por usuário
- [ ] Comparar perfil com outros usuários

---

## Aprendizados

Este projeto foi desenvolvido como projeto de portfólio com foco em aprendizado. Principais conceitos aplicados:

- Processamento de arquivos CSV no front-end com PapaParse
- Cruzamento de dados entre duas fontes heterogêneas (CSV local + API REST)
- Gerenciamento de estado com Zustand
- Visualizações de dados responsivas com Recharts
- Rate limiting em requisições à API externa
- Boas práticas de TypeScript (tipos estritos, funções puras)

---

## Licença

MIT © [Camila](https://github.com/Milacs1402)

---

<p align="center">feito com 🎬 por <a href="https://github.com/Milacs1402">Camila</a></p>
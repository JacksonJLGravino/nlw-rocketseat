# ClipMaker

O ClipMaker transforma vídeos longos em cortes curtos, destacando momentos interessantes com a ajuda do Gemini. Envie um vídeo, aguarde a análise e assista ao trecho gerado diretamente na página.

## Funcionalidades

- Upload de vídeos pelo widget do Cloudinary.
- Geração de transcrição do vídeo pelo Cloudinary.
- Análise da transcrição com o Gemini 2.5 Flash para encontrar um trecho de 30 a 60 segundos.
- Reprodução do corte gerado na própria página.
- Interface responsiva com animações e suporte à preferência por movimento reduzido.

## Tecnologias

- HTML, CSS e JavaScript — sem etapa de build ou dependências locais.
- [Tailwind CSS](https://tailwindcss.com/) via CDN.
- [Lucide](https://lucide.dev/) para os ícones.
- [GSAP](https://gsap.com/) para as animações.
- [Cloudinary](https://cloudinary.com/) para upload, transcrição e processamento de vídeo.
- [Gemini API](https://ai.google.dev/gemini-api/docs) para análise da transcrição.

## Pré-requisitos

Para usar a aplicação, configure:

1. Uma conta Cloudinary com um upload preset habilitado para o widget e a transcrição automática de vídeos.
2. Uma chave da Gemini API com acesso ao modelo `gemini-2.5-flash`.
3. A configuração do Cloudinary no início do objeto `app`, no arquivo [`index.html`](./index.html):

   ```js
   cloudName: "seu_cloud_name",
   uploadPreset: "seu_upload_preset",
   ```

   O projeto vem com valores de exemplo/configuração no código. Substitua-os pelos dados da sua conta Cloudinary.

> **Segurança da chave:** a chave Gemini é informada na interface e usada diretamente pelo navegador. Ela não é salva pela aplicação, mas fica acessível ao usuário e às ferramentas de desenvolvimento durante a sessão. Restrinja a chave no Google Cloud e, para uso em produção, prefira fazer as chamadas à Gemini API por um backend que proteja o segredo.

## Executar localmente

Não é necessário instalar dependências. Na pasta do projeto, inicie um servidor HTTP:

```bash
python3 -m http.server 8000
```

Abra [http://localhost:8000](http://localhost:8000), informe sua chave Gemini e envie um vídeo. O widget está configurado para aceitar MP4, MOV, WebM e M4V, com limite de upload de 200 MB.

Também é possível abrir o `index.html` diretamente no navegador, mas o uso de um servidor local é recomendado para evitar restrições do navegador ao acessar recursos externos.

## Publicar no GitHub Pages

1. Envie `index.html` e este `README.md` para a raiz do repositório.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch principal e a pasta `/ (root)` e salve.
5. Aguarde a publicação e abra a URL informada pelo GitHub Pages.

O ClipMaker é uma aplicação estática; não há processo de build. Os serviços Cloudinary e Gemini precisam estar configurados e acessíveis para que o fluxo de geração funcione.
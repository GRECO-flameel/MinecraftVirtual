# Cartão Interativo em Realidade Aumentada

Projeto web de RA baseada em imagem: aponte a câmera para a árvore e aparece sobre ela um pequeno **mundo de blocos** em estilo voxel/pixel art
(chão de grama e terra, árvore, laguinho com areia, pedras e tábuas), montado com cubos texturizados.

**Tecnologias:** HTML + [A-Frame](https://aframe.io) (3D) + [MindAR](https://github.com/hiukim/mind-ar-js) (rastreamento de imagem). Sem servidor, sem instalação.

## Estrutura
```
index.html        → página inicial (instruções + imagem-alvo)
ar.html           → câmera com a realidade aumentada
assets/arvore.png   → imagem-alvo
assets/arvore.mind  → "impressão digital" da imagem, usada pelo rastreador
assets/blocos/      → texturas 16x16 dos blocos (grama, terra, tronco, folhas...)
```

## Publicar no GitHub Pages
1. Crie um repositório público (ex.: `realidade-aumentada`).
2. Envie todos os arquivos para a branch `main` (pela web: *Add file → Upload files*).
3. Em *Settings → Pages*, escolha **Deploy from a branch → main → / (root)** e salve.
4. Em 1–2 min o site fica em `https://SEU-USUARIO.github.io/realidade-aumentada/`.

> A câmera só funciona em **HTTPS** — por isso o GitHub Pages é ideal. Abrindo o arquivo direto do PC (`file://`) não funciona.

## Na apresentação
1. Projete o `index.html` no telão (a imagem-alvo aparece na página).
2. No celular, abra o mesmo link → **Abrir câmera AR** → permita a câmera.
3. Aponte para o telão: o mundo de blocos aparece em cima da árvore. Incline o celular para ver os lados.

## Usar sua própria imagem (opcional)
1. Acesse o compilador do MindAR: https://hiukim.github.io/mind-ar-js-doc/tools/compile
2. Envie sua imagem (de preferência com bastante detalhe e contraste) e baixe o `targets.mind`.
3. Substitua `assets/arvore.mind` pelo novo arquivo (mantendo o nome) e `assets/arvore.png` pela sua imagem.

## Testar no PC antes de subir
```
python -m http.server 8000
```
Abra `http://localhost:8000` (o navegador permite câmera em localhost) e aponte a webcam para a imagem no celular.

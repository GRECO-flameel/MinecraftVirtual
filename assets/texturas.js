// Texturas pixeladas 16x16 desenhadas por código (não precisam de arquivo de imagem).
// Usadas pelo portal no ar.html e pelo cenário do Nether no portal360.html.
(function () {
  // gerador de números aleatórios com semente: a textura sai sempre igual
  const aleatorio = s => () => (s = (s * 16807) % 2147483647) / 2147483647;

  const gerar = (cores, semente) => {
    const c = document.createElement('canvas');
    c.width = c.height = 16;
    const g = c.getContext('2d'), r = aleatorio(semente);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        g.fillStyle = cores[Math.floor(r() * cores.length)];
        g.fillRect(x, y, 1, 1);
      }
    }
    const T = AFRAME.THREE, tex = new T.CanvasTexture(c);
    tex.magFilter = tex.minFilter = T.NearestFilter; // visual "pixelado"
    tex.wrapS = tex.wrapT = T.RepeatWrapping;        // permite animar a textura (portal)
    tex.colorSpace = T.SRGBColorSpace;
    return tex;
  };

  window.TEXTURAS_GERADAS = {
    obsidiana:  () => gerar(['#0b0712', '#140c22', '#1c1230', '#2a1a45', '#3d2763'], 7),
    portal:     () => gerar(['#4a148f', '#5a1aa8', '#6f22c9', '#8a3ae0', '#a45cf0'], 11),
    netherrack: () => gerar(['#4f1919', '#5e1f1f', '#6f2626', '#7d2c2c', '#8a3a3a'], 3),
    lava:       () => gerar(['#e04a00', '#ff6a00', '#ff8c1a', '#ffb02e', '#ffd04a'], 5),
    glowstone:  () => gerar(['#c98f3a', '#f2b84b', '#ffd77a', '#ffe28f', '#fff0b0'], 9)
  };
})();

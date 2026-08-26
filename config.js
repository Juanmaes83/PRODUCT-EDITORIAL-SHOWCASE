window.ProductShowcaseConfig = {
  brand: {
    name: 'OBJECT / 01',
    foreground: '#151515',
    background: '#e9e9e5',
    accent: '#ff5a36'
  },
  motion: {
    duration: 1.15,
    copyCue: 0.46,
    productCue: 0.50,
    settleCue: 0.82,
    autoplayMs: 4200
  },
  categories: [
    {
      id: 'glasses',
      title: 'Glasses',
      kicker: 'Optical collection',
      description: 'A precise frame study built around proportion, light and restraint.',
      indexLabel: '01 / 02',
      product: {
        id: 'optical-01',
        name: 'Arc Optical 01',
        type: 'image',
        src: 'assets/glasses-optical.svg',
        alt: 'Black optical glasses',
        enter: { x: 34, y: -18, rotate: -9, scale: 1.03 },
        hero: { x: 0, y: 0, rotate: -2.5, scale: 1 },
        exit: { x: -44, y: 22, rotate: 12, scale: .88 }
      }
    },
    {
      id: 'sunglasses',
      title: 'Sunglasses',
      kicker: 'Sun collection',
      description: 'Dark lenses, architectural temples and a sharper summer silhouette.',
      indexLabel: '02 / 02',
      product: {
        id: 'sun-01',
        name: 'Arc Sun 01',
        type: 'image',
        src: 'assets/glasses-sun.svg',
        alt: 'Dark sunglasses',
        enter: { x: 46, y: -24, rotate: 11, scale: .9 },
        hero: { x: 0, y: 0, rotate: 3, scale: 1.04 },
        exit: { x: -50, y: 28, rotate: -11, scale: .86 }
      }
    }
  ]
};

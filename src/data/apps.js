export const apps = [
  {
    id: 'neo-blast',
    name: 'Neo Blast',
    shortDescription: 'Bulmaca blokları ile skor yap!',
    fullDescription: 'Neo Blast, bağımlılık yapan bir blok bulmaca oyunudur. Renkli blokları tahtaya yerleştir, satır ve sütunları tamamla, en yüksek skoru elde et! Basit kurallar, sonsuz eğlence. Stratejini geliştir ve liderlik tablosunda zirveye çık!',
    color: '#6c63ff',
    gradient: 'linear-gradient(135deg, #1a1a40 0%, #2d2d6d 50%, #4a4e9c 100%)',
    icon: null,
    screenPreview: '/images/neo-blast/ekran.png',
    background: '/images/neo-blast/oyunici1.png',
    screenshots: [
      '/images/neo-blast/ekran.png',
      '/images/neo-blast/oyunici1.png'
    ],
    features: [
      'Bağımlılık yapan oynanış',
      'Neon renkli bloklar',
      'Liderlik tablosu',
      'Sınırsız eğlence'
    ],
    storeLinks: {
      playStore: '#',
      appStore: '#'
    }
  },
  {
    id: 'desert-blast',
    name: 'Desert Blast',
    shortDescription: 'Antik Mısır hazinelerini keşfet!',
    fullDescription: 'Desert Blast, gizemli Mısır piramitlerinde geçen epik bir bulmaca macerası oyunudur. Klasik modda sınırsız oyna veya Hikaye modunda hazine bul! Antik sırları çöz, zorlu bulmacaları aş ve çölün derinliklerindeki gizli hazinelere ulaş!',
    color: '#f4a460',
    gradient: 'linear-gradient(135deg, #f4a460 0%, #cd853f 50%, #8b4513 100%)',
    icon: '/images/desert-blast/uygulamaicon.png',
    screenPreview: '/images/desert-blast/anaekran.png',
    background: '/images/desert-blast/arkaplan.png',
    screenshots: [
      '/images/desert-blast/anaekran.png'
    ],
    features: [
      'Klasik mod - Sınırsız oyna',
      'Hikaye modu - Hazine avı',
      'Büyüleyici Mısır grafikleri',
      'Zorlu bulmacalar'
    ],
    storeLinks: {
      playStore: '#',
      appStore: '#'
    }
  }
];

export const getAppById = (id) => apps.find(app => app.id === id);

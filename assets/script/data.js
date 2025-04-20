const propiedades = [
    { id: 1, tipo: 'venta', titulo: 'Apartamento de lujo en la ciudad' },
    { id: 2, tipo: 'venta', titulo: 'Casa en las afueras' },
    { id: 3, tipo: 'venta', titulo: 'Chalet en la montaña' },
    { id: 4, tipo: 'alquiler', titulo: 'Departamento moderno en el centro' },
    { id: 5, tipo: 'alquiler', titulo: 'Casa familiar en los suburbios' },
    { id: 6, tipo: 'alquiler', titulo: 'Estudio cerca de la playa' }
  ];
  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
      ubicacion: '789 Suburbia Road, Green Valley, CA 34567',
      habitaciones: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Casa rústica en las montañas',
      src: './assets/img/MONTAÑA.avif',
      descripcion: 'Una acogedora casa rústica con vistas espectaculares a las montañas.',
      ubicacion: '77 Linlcon Road, Hacienda Heights, CA 67665',
      habitaciones: 5,
      costo: 5200,
      smoke: false,
      pets: true
    },
    {
        nombre: 'Apartamento acogedor con balcón',
        src: './assets/img/BALCON.jpg',
        descripcion: 'Una acogedora casa rústica con vistas espectaculares a las montañas.',
        ubicacion: '321 Mountain Path, Summit Heights, CA 67890',
        habitaciones: 2,
        costo: 1700,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Casa de campo junto al río',
        src: './assets/img/RIO.jpg',
        descripcion: 'Una acogedora casa moderna con junto al río.',
        ubicacion: '4545 State Road, Sacramento, CA 98070',
        habitaciones: 3,
        costo: 2800,
        smoke: false,
        pets: true
      }
  ];

  const propiedades_venta = [
    {
      nombre: 'Casa de lujo con piscina',
      src: './assets/img/CASA DE LUJO CON PISCINA.jpg',
      descripcion: 'Hermosa casa con un gran jardín y piscina privada.',
      ubicacion: '567 Prestige Lane, Ciudad',
      habitaciones: 5,
      costo: 500000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento moderno con vista',
      src: './assets/img/APARTAMENTO MODERNO CON VISTA.jpg',
      descripcion: 'Apartamento céntrico con vista panorámica y acabados de lujo.',
      ubicacion: '789 Skyline Blvd, Centro',
      habitaciones: 3,
      costo: 350000,
      smoke: true,
      pets: false
    },
    {
      nombre: 'Chalet rústico en la montaña',
      src: './assets/img/CHALET.jpg',
      descripcion: 'Encantador chalet en la montaña con vistas espectaculares.',
      ubicacion: '234 Hilltop Lane, Montañas',
      habitaciones: 4,
      costo: 450000,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Casa familiar con jardín grande',
      src: './assets/img/FAMILIAR.jpg',
      descripcion: 'Ideal para familias, con un jardín amplio y áreas de recreación.',
      ubicacion: '876 Family Street, Suburbios',
      habitaciones: 4,
      costo: 380000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Departamento ejecutivo en zona empresarial',
      src: './assets/img/EJECUTIVO.jpg',
      descripcion: 'Moderno departamento en el distrito financiero.',
      ubicacion: '456 Business District, Centro',
      habitaciones: 2,
      costo: 320000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Villa de lujo en la playa',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      descripcion: 'Villa con acceso directo a la playa y diseño exclusivo.',
      ubicacion: 'Beachfront Road, Costa',
      habitaciones: 6,
      costo: 750000,
      smoke: true,
      pets: true
    }
  ];
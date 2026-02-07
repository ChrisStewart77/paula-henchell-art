export interface Painting {
  id: string;
  title: string;
  category: 'Landscapes' | 'Flowers' | 'Animals' | 'Birds' | 'Misc';
  price: number;
  image: string;
  description: string;
  dimensions: string;
  available: boolean;
}

export const paintings: Painting[] = [
  {
    id: '1',
    title: 'Mountain Sunrise',
    category: 'Landscapes',
    price: 450,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'A vibrant sunrise over mountain peaks, captured in rich oils.',
    dimensions: '16" x 20"',
    available: true,
  },
  {
    id: '2',
    title: 'Wild Roses',
    category: 'Flowers',
    price: 320,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    description: 'Delicate pink wild roses in full bloom.',
    dimensions: '12" x 16"',
    available: true,
  },
  {
    id: '3',
    title: 'Red Fox',
    category: 'Animals',
    price: 580,
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80',
    description: 'A curious red fox in its natural woodland habitat.',
    dimensions: '18" x 24"',
    available: true,
  },
  {
    id: '4',
    title: 'Cardinal in Winter',
    category: 'Birds',
    price: 380,
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80',
    description: 'A bright cardinal perched on a snowy branch.',
    dimensions: '12" x 16"',
    available: true,
  },
  {
    id: '5',
    title: 'Coastal Cliffs',
    category: 'Landscapes',
    price: 520,
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
    description: 'Dramatic coastal cliffs meeting the ocean at sunset.',
    dimensions: '20" x 24"',
    available: true,
  },
  {
    id: '6',
    title: 'Sunflowers',
    category: 'Flowers',
    price: 420,
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800&q=80',
    description: 'Bold, sunny sunflowers against a blue sky.',
    dimensions: '16" x 20"',
    available: true,
  },
];

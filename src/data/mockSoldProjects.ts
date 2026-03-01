import { Listing } from './mockData';
import { subDays, subMonths } from 'date-fns';

const IMAGES = [
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/albert-hyseni-jH9eDAc35jw-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/artists-eyes-TV2FoJrzUHo-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/badibanga-roger-rCeBNTHDEHk-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/boom-bucket-Ua0tem2F3dA-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/ingo-doerrie-bQ0FtTrcwwI-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/jan-hrdlicka-HFtjk0O9FCI-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/japhet-khendlo-jhV02moWVWo-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/rs-portjanow-yz9HkvfvKbA-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/leonie-clough-CH2yRJCocRg-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/markus-kammermann-k51jyAgVlQw-unsplash.webp",
  "https://pub-8fbdabcb7c874830af8edc90d34fa166.r2.dev/sven-eisenschmidt-aPSg3zv1dYE-unsplash.webp"
];

export interface SoldProject extends Listing {
  soldDate: Date;
}

export const MOCK_SOLD_PROJECTS: SoldProject[] = [
  {
    id: 'sold_001',
    title: 'Historic Copper Mine',
    type: 'Mining Project',
    commodity: ['Copper', 'Gold'],
    location: { country: 'Chile', region: 'Atacama' },
    stage: 'Care & Maintenance',
    price: { amount: 4500000, currency: 'USD', type: 'Fixed' },
    image: IMAGES[5],
    summary: 'Historic mine with existing infrastructure. Sold to mid-tier operator.',
    highlights: ['Infrastructure in place', 'Historic resource'],
    createdAt: subMonths(new Date(), 6),
    soldDate: subDays(new Date(), 15),
    seller: { name: 'Global Mining Corp', type: 'Company' }
  },
  {
    id: 'sold_002',
    title: 'Lithium Exploration Tenements',
    type: 'Claim',
    commodity: ['Lithium'],
    location: { country: 'Australia', region: 'Western Australia' },
    stage: 'Exploration',
    price: { amount: 850000, currency: 'AUD', type: 'Negotiable' },
    image: IMAGES[6],
    summary: 'Strategic tenement package in emerging lithium district.',
    highlights: ['Strategic location', 'High potential'],
    createdAt: subMonths(new Date(), 4),
    soldDate: subMonths(new Date(), 1),
    seller: { name: 'Sarah Jenkins', type: 'Broker' }
  }
];

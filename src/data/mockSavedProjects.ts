import { subDays, subHours } from 'date-fns';

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

export interface SavedProject {
  id: string;
  title: string;
  location: string;
  type: 'Mining Project' | 'Claim' | 'Royalty' | 'Renewable' | 'Offtake';
  status: 'For Sale' | 'Joint Venture' | 'Farm In' | 'Sold';
  stage: string;
  price: string;
  commodity: string;
  imageUrl: string;
  savedAt: Date;
}

export const MOCK_SAVED_PROJECTS: SavedProject[] = [
  {
    id: 'proj_001',
    title: 'High-Grade Gold Project',
    location: 'Western Australia, Australia',
    type: 'Mining Project',
    status: 'For Sale',
    stage: 'Exploration',
    price: 'POA',
    commodity: 'Gold',
    imageUrl: IMAGES[0],
    savedAt: subHours(new Date(), 2),
  },
  {
    id: 'proj_002',
    title: 'Copper-Gold Porphyry',
    location: 'Atacama, Chile',
    type: 'Mining Project',
    status: 'Joint Venture',
    stage: 'Pre-Feasibility',
    price: '$12M USD',
    commodity: 'Copper',
    imageUrl: IMAGES[1],
    savedAt: subDays(new Date(), 1),
  },
  {
    id: 'proj_003',
    title: 'Lithium Brine Asset',
    location: 'Salta, Argentina',
    type: 'Claim',
    status: 'For Sale',
    stage: 'Early Exploration',
    price: '$4.5M USD',
    commodity: 'Lithium',
    imageUrl: IMAGES[2],
    savedAt: subDays(new Date(), 3),
  },
  {
    id: 'proj_004',
    title: 'Rare Earth Elements Deposit',
    location: 'Quebec, Canada',
    type: 'Mining Project',
    status: 'Farm In',
    stage: 'Resource Definition',
    price: 'POA',
    commodity: 'Rare Earths',
    imageUrl: IMAGES[3],
    savedAt: subDays(new Date(), 5),
  },
  {
    id: 'proj_005',
    title: 'Solar Farm Development',
    location: 'Nevada, USA',
    type: 'Renewable',
    status: 'For Sale',
    stage: 'Permitting',
    price: '$8.2M USD',
    commodity: 'Solar',
    imageUrl: IMAGES[4],
    savedAt: subDays(new Date(), 7),
  }
];

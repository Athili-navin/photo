import { Service } from './types';

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#mission-vision' },
  { label: 'SERVICES', href: '#services' },
  { label: 'CONTACT', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capturing the eternal moments of your special day with cinematic elegance.',
    image: 'https://picsum.photos/id/1059/800/600',
  },
  {
    id: 'birthday',
    title: 'Birthday Photography',
    description: 'Vibrant and fun coverage for birthdays, anniversaries, and private parties.',
    image: 'https://picsum.photos/id/1011/800/600',
  },
  {
    id: 'event',
    title: 'Event Photography',
    description: 'Professional coverage for corporate events, seminars, and galas.',
    image: 'https://picsum.photos/id/1050/800/600',
  },
  {
    id: 'general',
    title: 'General Photography & Videography',
    description: 'Portraits, lifestyle, and videography services tailored to your needs.',
    image: 'https://picsum.photos/id/338/800/600',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Photography',
    description: 'High-quality architectural and interior photography to showcase properties.',
    image: 'https://picsum.photos/id/1048/800/600',
  },
];

export const ABOUT_IMAGES = [
  'https://picsum.photos/id/1039/400/400', // Nature/Road
  'https://picsum.photos/id/1015/400/400', // Ocean
  'https://picsum.photos/id/1036/400/400', // Mountains/Nature
  'https://picsum.photos/id/1022/400/400', // Darker texture/wood
];
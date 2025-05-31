export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'main' | 'side' | 'soup' | 'other';
  imageUrl?: string;
} 
export interface Project {
  id: number;
  slug: string;
  title: string;
  category: 'New Construction' | 'Upgradation' | 'Tender Works' | 'Private Works';
  brand: string;
  location: string;
  year: string;
  status: 'Completed' | 'Ongoing';
  valuation: string;
  duration: string;
  scope: string[];
  summary: string;
  image: string;
  gallery: string[];
  featured: boolean;
}

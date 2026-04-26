import inspiration1 from '../../assets/images/inspirations/inspiration.jpg'
import inspiration2 from '../../assets/images/inspirations/inspiration2.jpg'
import inspiration3 from '../../assets/images/inspirations/inspiration3.jpg'
import inspiration4 from '../../assets/images/inspirations/inspiration4.jpg'

export type Inspiration = {
  id: number;
  image: string;
  title: string;
  category: 'Bedroom' | 'Living' | 'Dining';
};

export const inspirations: Inspiration[] = [
  {
    id: 1,
    image: inspiration1,
    title: 'Inner Peace',
    category: 'Bedroom'
  },
  {
    id: 2,
    image: inspiration2,
    title: 'Modern Calm',
    category: 'Living'
  },
  {
    id: 3,
    image: inspiration3,
    title: 'Minimal Dining',
    category: 'Dining'
  },
  {
    id: 4,
    image: inspiration4,
    title: 'Warm Space',
    category: 'Bedroom'
  }
];
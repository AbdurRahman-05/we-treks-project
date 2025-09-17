import swizerlandImg from '../images/swizerland.jpg';
import darjeelingImage from '../images/dargeelinghome.png';
import darjeelingTrain from '../images/darjeeling train.png';
import love from '../images/love.png';
import dargClock from '../images/darg clock.png';
import darg from '../images/darg.png';
import thai from '../images/thai.jpeg';
import thai2 from '../images/thai2.jpg';
import mass from '../images/mass.jpg';
import thaiim from '../images/thaiim.jpg';
import thai3 from '../images/thai3.avif';
import swizer from '../images/swizer.jpg';
import swizer1 from '../images/swizer1.jpg';
import swizer2 from '../images/swizer2.jpg';

export interface TrekPackage {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  highlights: string  [];
  detailedDescription: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    altitude?: string;
    distance?: string;
  }[];
  inclusions: string[];
  exclusions: string[];
    bestTime: string;
  preparation: string[];
  gallery: string[];
  // New fields for Sandakphu Phalut Summit-2025 and future treks
  trekFee?: string;
  reportingDates?: string;
  contact?: string;
  trekLevel?: string;
  trekDuration?: string;
  highestAltitude?: string;
  suitableFor?: string;
  totalTrekDistance?: string;
  basecamp?: string;
  accommodationType?: string;
  pickupPoint?: string;
}

// Import your local images (adjust the paths as needed)


export const packages: TrekPackage[] = [
  {
    id: 1,
    title: 'Darjeeling',
    location: 'Darjeeling, India',
    price: '7999/- per person',
    rating: 4.7,
    image: darjeelingImage,
    description: 'Experience the breathtaking views of the Himalayas and the rich culture of Darjeeling on this scenic trek.',
    highlights: [
      'Tiger Hill Sunrise',
      'Darjeeling Himalayan Railway',
      'Batasia Loop & Gorkha War Memorial'
    ],
    detailedDescription: 'The Darjeeling trek offers a unique blend of natural beauty and cultural richness. Trek through lush tea gardens, visit ancient monasteries, and enjoy panoramic views of the Kanchenjunga range.',
    bestTime: 'March-May, September-November',
    preparation: [
      'Basic fitness',
      'Warm clothing',
      'Trekking shoes'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Sacred Views', description: 'Arrive in Darjeeling and acclimatize. Visit Observatory Hill & Mahakal Temple, a sacred hilltop shrine with great mountain views.' },
      { day: 2, title: 'Sunrise & Heritage Journey', description: 'An early trip to Tiger Hill for its spectacular sunrise over Kanchenjunga. Later, ride the "Toy Train" and visit the Batasia Loop & Gorkha War Memorial.' },
      { day: 3, title: 'Monasteries & Tea Estates', description: 'Visit Ghoom Monastery (Yiga Choeling), Darjeeling’s oldest Tibetan monastery. In the afternoon, take a guided tour of the Happy Valley Tea Estate.' },
      { day: 4, title: 'Wildlife & Mountaineering History', description: 'Explore the Padmaja Naidu Himalayan Zoological Park, home to red pandas and snow leopards, and the adjacent Himalayan Mountaineering Institute.' },
      { day: 5, title: 'Ropeway & Peace Pagoda', description: 'Take a ride on the Darjeeling Ropeway for breathtaking aerial views. Afterwards, visit the serene white Peace Pagoda on Jalapahar Hill.' },
      { day: 6, title: 'Scenic Gardens', description: 'Spend a relaxing day at the Rock Garden & Ganga Maya Park, enjoying the terraced gardens and waterfalls.' },
      { day: 7, title: 'Departure', description: 'Enjoy a final taste of Darjeeling before your departure.' }
    ],
    inclusions: [
      'All meals during trek',
      'Accommodation in lodges',
      'Guide and permits'
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance'
    ],
    gallery: [
      darjeelingTrain,
      love,
      dargClock,
      darg
    ],
  },
  {
    id: 2,
    title: 'Thailand Adventure',
    location: 'Thailand',
    price: '8999/- per person',
    rating: 4.7,
    image: thai,
    description: 'Explore the lush jungles, ancient temples, and vibrant culture of Thailand on this unforgettable trek.',
    highlights: [
      'Chiang Mai Temples',
      'Doi Inthanon National Park',
      'Hill Tribe Villages',
      'Elephant Nature Park',
      'Jungle Waterfalls',
      'Night Markets'
    ],
    detailedDescription: 'The Thailand Adventure trek takes you through the heart of Southeast Asia, combining natural beauty with rich cultural experiences. Trek through jungles, visit hill tribes, and discover the best of Thailand’s northern region.',
    bestTime: 'November-February',
    preparation: [
      'Comfortable walking shoes',
      'Lightweight clothing',
      'Insect repellent',
      'Basic fitness',
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Chiang Mai', description: 'Explore temples and night markets.' },
      { day: 2, title: 'Doi Inthanon Trek', description: 'Trek through Thailand’s highest national park.' },
      { day: 3, title: 'Hill Tribe Village Visit', description: 'Experience local culture and cuisine.' },
      { day: 4, title: 'Elephant Nature Park', description: 'Visit a sanctuary and learn about elephant conservation.' },
    ],
    inclusions: [
      'All meals during trek',
      'Local accommodation',
      'Guided tours',
      'Park entry fees',
      'Cultural experiences',
    ],
    exclusions: [
      'International flights',
      'Personal expenses',
      'Travel insurance',
      'Tips for guides',
    ],
    gallery: [
      thai2,
      mass,
      thaiim,
      thai3
    ],
  },
  {
    id: 4,
    title: 'Switzerland',
    location: 'Switzerland',
    price: '14999/- per person',
    rating: 4.9,
    image: swizer,
    description: 'Trek through the stunning Swiss Alps, with breathtaking mountain scenery and charming alpine villages.',
    highlights: [
      'Matterhorn Views',
      'Zermatt Village',
      'Alpine Meadows',
      'Glacial Lakes',
      'Swiss Cheese Farms',
      'Historic Mountain Railways'
    ],
    detailedDescription: 'The Switzerland Alps Trek is a dream for mountain lovers. Enjoy panoramic views, crisp alpine air, and the unique culture of Switzerland’s mountain regions.',
    bestTime: 'June-September',
    preparation: [
      'Mountain hiking boots',
      'Layered clothing',
      'Rain gear',
      'Good fitness',
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Zermatt', description: 'Explore the village and enjoy Matterhorn views.' },
      { day: 2, title: 'Alpine Meadow Trek', description: 'Hike through wildflower meadows and glacial lakes.' },
      { day: 3, title: 'Glacier Walk', description: 'Guided walk on a safe glacier route.' },
      { day: 4, title: 'Swiss Cheese Farm Visit', description: 'Tour a traditional farm and sample local cheese.' },
    ],
    inclusions: [
      'All meals during trek',
      'Mountain hut accommodation',
      'Professional guide',
      'Railway tickets',
      'Cultural experiences',
    ],
    exclusions: [
      'International flights',
      'Personal expenses',
      'Travel insurance',
      'Tips for guides',
    ],
    gallery: [
      swizer1,
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      swizer2,
      swizerlandImg
    ]
  }
];

// trekkingPackages.ts
// Contains only the trekking packages for the Trekking section
import { TrekPackage } from './packages';
import sandakphuImage from '../images/sandakpuhome.png';
import sandak1 from '../images/sandak1.png';
import sandak2 from '../images/sandak2.png';
import sandak3 from '../images/sandak3.png';
import sandak4 from '../images/sandak4.png';
import goechelaImage from '../images/goechelahome.png';

// trekkingPackages.ts
// Contains only the trekking packages for the Trekking section
import { TrekPackage } from './packages';

export const trekkingPackages: TrekPackage[] = [
  {
    id: 2,
    title: 'Sandakphu Phalut Summit trek',
    location: 'West Bengal, India',
    difficulty: 'Moderate',
    rating: 4.8,
    image: sandakphuImage,
    description: "The Sandakphu trek offers breathtaking views of the world's highest peaks, including Everest and Kanchenjunga, as you traverse through the scenic landscapes of the Himalayan ranges.",
    highlights: [
      'Views of Everest, Kanchenjunga, Choma Lahuri',
      'Traverse Nepal, Purvanchal, Sikkim ranges',
      'Unique landscapes and legendary peaks',
    ],

    bestTime: '16-May-2025, 23-May-2025',
    difficulty_details: 'Suitable for trekkers with basic fitness. Some steep climbs.',
    preparation: [
      'Basic fitness',
      'Warm clothing',
      'Trekking shoes',
    ],
    itinerary: [
      { day: 1, title: 'Drive from NJP / Bagdogra to Rimbick', description: '' },
      { day: 2, title: 'Trek from Srikola to Samanden', description: '' },
      { day: 3, title: 'Trek from Samanden to Molley', description: '' },
      { day: 4, title: 'Trek from Molley to Sabargram via Phalut', description: '' },
      { day: 5, title: 'Trek from Sabargram to Sandakphu', description: '' },
      { day: 6, title: 'Trek from Sandakphu to Gurdum', description: '' },
      { day: 7, title: 'Trek from Gurdum to Srikola. Drive from Srikola back to NJP Railway Station / Bagdogra Airport', description: '' },
    ],
    inclusions: [
      'All Foods',
      'Stay (tents and sharing beds)',
      'Forest Entry',
      'Well trained guide',
    ],
    exclusions: [
      'Travel Expenses',
      'Personal Equipment',
      'Cloakroom',
      'Offloading',
      'Trek Insurance',
      'Anything apart from inclusions',
    ],
    gallery: [
      sandak1,
      sandak2,
      sandak3,
      sandak4
    ],
    trekFee: '12250/-',
    reportingDates: '16-May-2025, 23-May-2025',
    contact: 'wetrekindia@gmail.com, 9566985698',
    trekLevel: 'Moderate',
    trekDuration: '7 days/6 nights',
    highestAltitude: '11,930 ft',
    suitableFor: 'Age: 15 to 60',
    totalTrekDistance: '68 kms',
    basecamp: 'Rimbick',
    accommodationType: 'Tea houses and tents',
    pickupPoint: 'NJP railway station and Bagdogra airport',
    detailedDescription: ''
  },
  {
    id: 3,
    title: 'Goechala Trek',
    location: 'Sikkim, India',
    difficulty: 'Challenging',
    rating: 4.9,
    image: goechelaImage,
    description: 'The Goechala Trek is a high-altitude adventure to the base of Mt. Kanchenjunga, the world’s third highest mountain.',
    highlights: [
      'Close-up views of Kanchenjunga',
      'Samiti Lake',
      'Diverse flora and fauna',
    ],
    detailedDescription: 'A trek for experienced hikers, Goechala offers dramatic scenery, alpine meadows, and a true Himalayan experience.',
    bestTime: 'April-May, September-November',
    difficulty_details: 'Requires good fitness and prior trekking experience.',
    preparation: [
      'High-altitude training',
      'Trekking gear',
      'Physical fitness',
    ],
    itinerary: [
      { day: 1, title: 'Yuksom to Sachen', description: 'Begin trek through forest.' },
      { day: 2, title: 'Sachen to Tshoka', description: 'Steep climb to Tshoka.' },
      { day: 3, title: 'Tshoka to Dzongri', description: 'Reach Dzongri for acclimatization.' },
      { day: 4, title: 'Dzongri to Goechala', description: 'Trek to Goechala viewpoint.' },
    ],
    inclusions: [
      'All meals during trek',
      'Camping equipment',
      'Experienced guide',
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
      'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg',
    ],
    trekFee: '14999/-',
    trekDuration: '4 days/3 nights'
  }
];

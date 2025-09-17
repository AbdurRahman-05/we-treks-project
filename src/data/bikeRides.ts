import assamMegaImg from '../images/assammega.jpg';
import bikeraide1 from '../images/bikreraide1.png';
import raide2 from '../images/raide2.png';
import raide3 from '../images/raide3.png';
import raide4 from '../images/raide4.png';

export const bikeRides = [
  {
    id: 4,
    title: 'Assam Megalaya Ride',
    location: 'Assam & Meghalaya, India',
    image: assamMegaImg,
    rating: 4.8,
    difficulty: 'Difficult',
    bestTime: 'June to September',
    duration: '7 Days',
    price: '₹49,250',
    detailedDescription: 'A thrilling 7-day bike expedition through the pristine landscapes of Assam and Meghalaya. This journey will take you through cascading waterfalls, mysterious caves, lush green national parks, and some of the most scenic roads in Northeast India. Experience the unique culture and hospitality of the local tribes with our expert guides.',
    difficulty_details: 'This ride is rated as difficult due to long riding hours, challenging road conditions in some areas, and unpredictable weather. Riders should have prior experience with long-distance motorcycle touring and be comfortable with varied terrains.',
    highlights: [
      'Ride through scenic landscapes of Assam and Meghalaya',
      'Visit famous waterfalls and caves',
      'Experience local tribal culture',
      'Jeep safari in Kaziranga National Park',
      'Expert guides and support team'
    ],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong', description: 'Arrive in Guwahati, meet the team, and ride to the beautiful city of Shillong. Check into the hotel and enjoy a relaxing evening.' },
      { day: 2, title: 'Shillong to Cherrapunji', description: 'Ride to Cherrapunji, visiting Umiam Lake and Tyrshi Waterfall en route. Explore the Wah Kaba Falls in the evening.' },
      { day: 3, title: 'Cherrapunji Exploration', description: 'Explore the wonders of Cherrapunji, including Phe Phe Fall, Krang Suri Waterfall, and the Mawsmai Cave.' },
      { day: 4, title: 'Cherrapunji to Kaziranga', description: 'A long riding day to the famous Kaziranga National Park, home to the one-horned rhinoceros.' },
      { day: 5, title: 'Kaziranga National Park', description: 'Enjoy a thrilling jeep safari in Kaziranga National Park and spot diverse wildlife.' },
      { day: 6, title: 'Kaziranga to Shillong', description: 'Ride back to Shillong and spend the evening at leisure, exploring the local markets.' },
      { day: 7, title: 'Shillong to Guwahati', description: 'The final leg of the journey, riding back to Guwahati for your departure.' },
    ],
    preparation: [
      'Valid motorcycle driving license and all vehicle documents.',
      'Good quality riding gear, including helmet, jacket, gloves, and boots.',
      'Physical fitness to endure long hours of riding.',
      'A positive attitude and a spirit of adventure.'
    ],
    gallery: [
      bikeraide1,
      raide2,
      raide3,
      raide4,
    ],
    inclusions: [
      'Motorcycle rental (usually a Royal Enfield Himalayan)',
      'Accommodation on a twin-sharing basis',
      'All meals (breakfast, lunch, and dinner)',
      'Experienced ride leader and support crew',
      'Inner Line Permits and other necessary permits',
      'First-aid kit and basic medical support'
    ],
    exclusions: [
      'Fuel for the motorcycle',
      'Any personal expenses, such as snacks, beverages, and tips',
      'Entry fees for monuments and parks',
      'Riding gear rental',
      'Anything not mentioned in the inclusions'
    ]
  }
];
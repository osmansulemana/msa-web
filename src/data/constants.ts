export interface ImageAssets {
  hero: string;
  training: string;
  youth: string;
  elite: string;
  keeper: string;
  coach: string;
  gallery1: string;
  gallery2: string;
  gallery3: string;
  gallery4: string;
}

export interface Program {
  title: string;
  age: string;
  description: string;
  image: string;
  features: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export const IMAGES: ImageAssets = {
  hero: '/img1.jpeg',
  training:
    'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2000&auto=format&fit=crop',
  youth:
    'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=800&auto=format&fit=crop',
  elite:
    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop',
  keeper: '/goalkeeper_union.png',
  coach: '/coach_mentoring.png',
  gallery1:
    'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800&auto=format&fit=crop',
  gallery2:
    'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=800&auto=format&fit=crop',
  gallery3:
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
  gallery4: '/goal_celebration.png',
};

export const PROGRAMS: Program[] = [
  {
    title: 'Junior Academy',
    age: 'Ages 6-10',
    description:
      'Building the foundation. Focus on ball mastery, coordination, and falling in love with the game.',
    image: IMAGES.youth,
    features: ['Fun-based learning', 'Basic technique', 'Small-sided games'],
  },
  {
    title: 'Elite Development',
    age: 'Ages 11-16',
    description:
      'Tactical awareness and advanced technical skills for competitive play. Prepare for the next level.',
    image: IMAGES.elite,
    features: [
      'Tactical workshops',
      'Strength & conditioning',
      'League matches',
    ],
  },
  {
    title: 'Goalkeeper Union',
    age: 'All Ages',
    description:
      'Specialized training for the most unique position on the field. Reflexes, positioning, and distribution.',
    image: IMAGES.keeper,
    features: ['1-on-1 coaching', 'Reaction training', 'Match analysis'],
  },
];

export const STATS: Stat[] = [
  { label: 'Active Players', value: '450+' },
  { label: 'Championships', value: '28' },
  { label: 'Elite Coaches', value: '15' },
  { label: 'Pro Signings', value: '12' },
];

export interface Coach {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const COACHES: Coach[] = [
  {
    name: 'David Silva',
    role: 'Head Academy Director',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=800&auto=format&fit=crop',
    bio: 'Former professional with 15 years experience. UEFA Pro License holder.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Elite Technical Coach',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Specializes in attacking phases and possession-based systems. UEFA A License.',
  },
  {
    name: 'Marcus Cole',
    role: 'Goalkeeper Specialist',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop',
    bio: 'Over 200 pro appearances. Dedicated to developing modern sweeper-keepers.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The transformation in my son's confidence and technical ability since joining MSA has been phenomenal. The coaching is truly elite.",
    author: 'James Thompson',
    role: 'Parent of U14 Player',
  },
  {
    quote:
      "MSA didn't just teach me how to be a better player, they taught me discipline and work ethic that helped me earn my pro contract.",
    author: 'Alex Rivera',
    role: 'MSA Alumni, Professional Player',
  },
  {
    quote:
      'The facilities and boarding environment provide the perfect structure for young athletes to balance their sports and academics.',
    author: 'Elena Petrova',
    role: 'Parent of U16 Boarding Student',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'Do you offer boarding facilities?',
    answer:
      'Yes, we provide fully-catered boarding facilities for athletes aged 13 and above, allowing them to focus entirely on their football and academic development.',
  },
  {
    question: 'How do the academic programs work alongside training?',
    answer:
      'We partner with local educational institutions to ensure our athletes follow a complete academic curriculum. Training schedules are designed around school hours.',
  },
  {
    question: 'How do I secure a spot in the academy?',
    answer:
      'Entry into the Elite development and boarding programs is typically through a trial process. However, our Junior Academy programs are open-enrollment based on availability.',
  },
  {
    question: 'Do you offer scholarships?',
    answer:
      'Yes, we have a limited number of merit-based and need-based scholarships awarded annually to exceptional talents who demonstrate dedication and strong character.',
  },
];

export interface ScheduleItem {
  day: string;
  time: string;
  activity: string;
  location: string;
}

export const SCHEDULES: Record<'junior' | 'elite' | 'keeper', ScheduleItem[]> =
  {
    junior: [
      {
        day: 'Monday',
        time: '16:00 - 17:30',
        activity: 'Ball Mastery',
        location: 'Pitch A',
      },
      {
        day: 'Wednesday',
        time: '16:00 - 17:30',
        activity: 'Small Sided Games',
        location: 'Pitch B',
      },
      {
        day: 'Saturday',
        time: '09:00 - 10:30',
        activity: 'Match Day',
        location: 'Main Stadium',
      },
    ],
    elite: [
      {
        day: 'Tuesday',
        time: '17:30 - 19:30',
        activity: 'Tactical Phase',
        location: 'Pitch A',
      },
      {
        day: 'Thursday',
        time: '17:30 - 19:30',
        activity: 'Strength & Conditioning',
        location: 'Gym / Pitch B',
      },
      {
        day: 'Saturday',
        time: '11:00 - 13:00',
        activity: 'League Match',
        location: 'Main Stadium',
      },
    ],
    keeper: [
      {
        day: 'Monday',
        time: '17:30 - 19:00',
        activity: 'Handling & Footwork',
        location: 'Keeper Zone',
      },
      {
        day: 'Wednesday',
        time: '17:30 - 19:00',
        activity: 'Shot Stopping',
        location: 'Keeper Zone',
      },
      {
        day: 'Friday',
        time: '16:00 - 17:30',
        activity: 'Distribution',
        location: 'Pitch A',
      },
    ],
  };

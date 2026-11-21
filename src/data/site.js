// Centralized content and image sources for MADCORE FITNESS.
// All photography features muscular male athletes / bodybuilders in premium gym settings.
const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: img('1605296867304-46d5465a13f1', 1920),
  aboutMain: img('1744551154623-4b5336e95c28', 1100),
  aboutSecondary: img('1611672585731-fa10603fb9e0', 900),
  aboutTertiary: img('1534367610401-9f5ed68180aa', 800),
  cta: img('1641337221253-fdc7237f6b61', 1600),
};

export const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Programs', target: 'programs' },
  { label: 'Trainers', target: 'trainers' },
  { label: 'Membership', target: 'membership' },
  { label: 'Contact', target: 'contact' },
];

export const stats = [
  { value: 2500, suffix: '+', label: 'Active Members' },
  { value: 15, suffix: '+', label: 'Expert Trainers' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

export const aboutFeatures = [
  {
    icon: 'bi-hdd-stack',
    title: 'Modern Equipment',
    text: 'Train with the latest industry-leading machines and free weights, built for every level.',
  },
  {
    icon: 'bi-patch-check',
    title: 'Certified Coaches',
    text: 'Learn from internationally certified trainers who live and breathe the craft.',
  },
  {
    icon: 'bi-calendar2-check',
    title: 'Flexible Membership',
    text: 'Plans that bend around your life — no locked-in contracts, no excuses.',
  },
  {
    icon: 'bi-stars',
    title: 'Premium Environment',
    text: 'A immaculate, motivating space designed to bring out your absolute best.',
  },
];

export const programCategories = [
  { id: 'all', label: 'All Programs' },
  { id: 'strength', label: 'Strength' },
  { id: 'cardio', label: 'Cardio' },
  { id: 'training', label: 'Training' },
  { id: 'specialty', label: 'Specialty' },
];

export const programs = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'strength',
    icon: 'bi-lightning-charge-fill',
    image: img('1653773869760-5b0f846231fb'),
    description:
      'Build raw, functional power with progressive overload and expertly structured lifting programs.',
    meta: 'All Levels · 60 Min',
  },
  {
    id: 'body-building',
    title: 'Body Building',
    category: 'strength',
    icon: 'bi-bar-chart-fill',
    image: img('1647456753452-e5d7cbf16df1'),
    description:
      'Sculpt serious muscle with targeted hypertrophy training, precision nutrition and recovery.',
    meta: 'Intermediate · 75 Min',
  },
  {
    id: 'cardio-fitness',
    title: 'Cardio Fitness',
    category: 'cardio',
    icon: 'bi-heart-pulse-fill',
    image: img('1571019614242-c5c5dee9f50b'),
    description:
      'Boost your engine, torch calories and build endurance with high-energy conditioning sessions.',
    meta: 'All Levels · 45 Min',
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    category: 'specialty',
    icon: 'bi-trophy-fill',
    image: img('1526506118085-60ce8714f8c5'),
    description:
      'Constantly varied, high-intensity functional movements that forge complete athletic performance.',
    meta: 'Advanced · 60 Min',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'training',
    icon: 'bi-person-badge',
    image: img('1581009146145-b5ef050c2e1e'),
    description:
      'One-on-one coaching completely tailored to your goals, your body and your schedule.',
    meta: '1 on 1 · 60 Min',
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    category: 'training',
    icon: 'bi-arrows-angle-expand',
    image: img('1519311965067-36d3e5f33d39'),
    description:
      'Move better, get stronger and prevent injury with real-world movement and mobility work.',
    meta: 'All Levels · 50 Min',
  },
];

export const trainers = [
  {
    name: 'Marcus Cole',
    role: 'Strength & Conditioning',
    experience: '12 Years Experience',
    image: img('1730732862433-ed5559fff5a9', 700),
    socials: {
      instagram: 'https://www.instagram.com/_mohamed_adel_zaki/',
      facebook: 'https://www.facebook.com/share/19m41aNVLL/',
      tiktok: 'https://www.tiktok.com/@mohamed.a.d.e.l…1',
    },
  },
  {
    name: 'Daniel Brooks',
    role: 'Cardio & HIIT Specialist',
    experience: '8 Years Experience',
    image: img('1598971639058-fab3c3109a00', 700),
    socials: {
      instagram: 'https://www.instagram.com/_mohamed_adel_zaki/',
      facebook: 'https://www.facebook.com/share/19m41aNVLL/',
      tiktok: 'https://www.tiktok.com/@mohamed.a.d.e.l…1',
    },
  },
  {
    name: 'David Reyes',
    role: 'Bodybuilding Coach',
    experience: '10 Years Experience',
    image: img('1647456788971-90ac7066de4b', 700),
    socials: {
      instagram: 'https://www.instagram.com/_mohamed_adel_zaki/',
      facebook: 'https://www.facebook.com/share/19m41aNVLL/',
      tiktok: 'https://www.tiktok.com/@mohamed.a.d.e.l…1',
    },
  },
  {
    name: 'James Carter',
    role: 'Functional Training',
    experience: '7 Years Experience',
    image: img('1566241142559-40e1dab266c6', 700),
    socials: {
      instagram: 'https://www.instagram.com/_mohamed_adel_zaki/',
      facebook: 'https://www.facebook.com/share/19m41aNVLL/',
      tiktok: 'https://www.tiktok.com/@mohamed.a.d.e.l…1',
    },
  },
];

export const plans = [
  {
    name: 'Basic',
    tagline: 'Start strong.',
    monthly: 29,
    yearly: 290,
    features: ['Gym Access', 'Basic Equipment', 'Locker Access'],
    popular: false,
  },
  {
    name: 'Standard',
    tagline: 'Build momentum.',
    monthly: 49,
    yearly: 490,
    features: ['Full Gym Access', 'Group Classes', 'Fitness Assessment'],
    popular: false,
  },
  {
    name: 'Premium',
    tagline: 'Go further.',
    monthly: 79,
    yearly: 790,
    features: [
      'All Standard Features',
      'Personal Training Sessions',
      'Nutrition Guidance',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    tagline: 'No limits.',
    monthly: 129,
    yearly: 1290,
    features: [
      'Unlimited Gym Access',
      'Personal Trainer',
      'Priority Booking',
      'VIP Facilities',
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Member since 2021',
    image: img('1500648767791-00dcc994a43e', 300),
    rating: 5,
    text: 'MADCORE completely changed my life. The coaching is world-class and the energy in this place is unreal. I have never felt stronger.',
  },
  {
    name: 'Youssef Nabil',
    role: 'Member since 2022',
    image: img('1547425260-76bcadfb4f2c', 300),
    rating: 5,
    text: 'I went from dreading the gym to loving every session. The trainers actually care about your progress and push you to be your best.',
  },
  {
    name: 'Omar Farouk',
    role: 'Member since 2020',
    image: img('1506794778202-cad84cf45f1d', 300),
    rating: 5,
    text: 'The facilities are incredible and the community is like family. Best decision I ever made for my health and confidence.',
  },
  {
    name: 'Mostafa Amr',
    role: 'Member since 2023',
    image: img('1568602471122-7832951cc4c5', 300),
    rating: 5,
    text: 'Personal training here is worth every penny. My strength, stamina and mindset have all transformed in just a few months.',
  },
  {
    name: 'Karim Adel',
    role: 'Member since 2019',
    image: img('1519085360753-af0119f7cbe7', 300),
    rating: 5,
    text: 'Premium in every sense. Clean, modern, motivating. The results speak for themselves — I am stronger than I have ever been.',
  },
];

export const gallery = [
  { image: img('1517836357463-d25dfeac3438', 900), title: 'Free Weights', category: 'Weights' },
  { image: img('1583454110551-21f2fa2afe61', 900), title: 'Barbell Training', category: 'Weights' },
  { image: img('1571902943202-507ec2618e8f', 900), title: 'Training Floor', category: 'Facility' },
  { image: img('1590487988256-9ed24133863e', 900), title: 'Weight Area', category: 'Facility' },
  { image: img('1540497077202-7c8a3999166f', 900), title: 'Premium Equipment', category: 'Facility' },
  { image: img('1599058917212-d750089bc07e', 900), title: 'Cardio Zone', category: 'Cardio' },
  { image: img('1554284126-aa88f22d8b74', 900), title: 'Dumbbell Rack', category: 'Weights' },
  { image: img('1636432246078-8dd088bd26fa', 900), title: 'Strength Work', category: 'Training' },
];

export const contactInfo = {
  phone: '01554672640',
  phoneHref: 'tel:+201554672640',
  whatsapp: 'https://wa.me/201554672640',
  email: 'mohamedadelzaki20@gmail.com',
  github: 'https://github.com/mmmohhameddd81-prog',
  linkedin: 'https://www.linkedin.com/in/mohamed-adel-153147332/',
  location: 'Your City, Egypt',
  hours: [
    { days: 'Saturday – Thursday', time: '8:00 AM – 11:00 PM' },
    { days: 'Friday', time: '2:00 PM – 10:00 PM' },
  ],
  socials: [
    { icon: 'bi-whatsapp', label: 'WhatsApp', url: 'https://wa.me/201554672640' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/mmmohhameddd81-prog' },
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-adel-153147332/' },
  ],
};

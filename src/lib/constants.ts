export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'work' | 'personal';
  mainImage: string;
  galleryImages: string[];
  url?: string;
  techStack: {
    name: string;
    icon: string;
    size: number;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Walletize',
    type: 'personal',
    description:
      'Walletize is a personal finance web app designed to help you track your income, spending, and the value of your assets and liabilities (net worth). I developed Walletize to provide users with a comprehensive tool for managing their finances, including support for multiple currencies. My mission is to empower individuals to take control of their financial life. By offering a user-friendly platform to monitor your income, expenses, and net worth, and supporting multiple currencies, I strive to make financial management accessible and straightforward for everyone.',
    mainImage: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/walletize-1.png',
    galleryImages: [
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/walletize-2.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/walletize-3.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/walletize-4.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/walletize-5.png',
    ],
    url: 'https://www.walletize.app',
    techStack: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', size: 20 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', size: 20 },
      { name: 'Motion', icon: '/icons/motion.svg', size: 24 },
      { name: 'Express.js', icon: '/icons/express.svg', size: 20 },
      { name: 'Prisma', icon: '/icons/prisma.svg', size: 20 },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', size: 20 },
      { name: 'Docker', icon: '/icons/docker.svg', size: 20 },
    ],
  },
  {
    id: '2',
    title: 'Indoipo',
    type: 'personal',
    description:
      'Indoipo is your source for information on Initial Public Offerings (IPOs) in Indonesia. Founded in 2023, I created Indoipo to help investors analyze IPOs in the Indonesian market. At Indoipo, my mission is simple: to provide the information you need to make wise investment decisions in the Indonesian IPO market. Understanding the complexities of IPOs, I aim to simplify the process by offering accurate and up-to-date information.',
    mainImage: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/indoipo-1.png',
    galleryImages: [
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/indoipo-2.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/indoipo-3.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/indoipo-4.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/indoipo-5.png',
    ],
    url: 'https://www.indoipo.com',
    techStack: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', size: 20 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', size: 20 },
      { name: 'Motion', icon: '/icons/motion.svg', size: 24 },
      { name: 'Prisma', icon: '/icons/prisma.svg', size: 20 },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', size: 20 },
      { name: 'Docker', icon: '/icons/docker.svg', size: 20 },
    ],
  },
  {
    id: '3',
    title: 'Crypto Ski Week - Unit Network',
    type: 'work',
    description:
      'A landing page for Crypto Ski Week - an annual gathering of digital asset and blockchain founders, investors, and thought leaders. It combines alpine adventures with discussions on blockchain and cryptocurrency, creating a unique experience for enthusiasts and professionals. The page is designed to be fully interactive and responsive, ensuring a seamless and engaging experience across all devices.',
    mainImage: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/crypto-ski-week-1.png',
    galleryImages: [
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/crypto-ski-week-2.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/crypto-ski-week-3.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/crypto-ski-week-4.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/crypto-ski-week-5.png',
    ],
    url: 'https://cryptoskiweek.com',
    techStack: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', size: 20 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', size: 20 },
      { name: 'Motion', icon: '/icons/motion.svg', size: 24 },
    ],
  },
  {
    id: '4',
    title: 'UnitPudgy Antarctica - Unit Network',
    type: 'work',
    description:
      "A landing page for UnitPudgy Antarctica - an expedition to Antarctica in January 2025 organized by Unit Network and Pudgy Penguins. This unique collaboration brings together the Pudgy Penguins community, known for fostering creativity and imagination through digital collectibles and merchandise, with Unit Network's tokenization technology. The expedition aims to strengthen community bonds while exploring one of Earth's most pristine environments. The page features information about both organizations, tokenization opportunities, and details about the 60+ global community events.",
    mainImage: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-pudgy-1.png',
    galleryImages: [
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-pudgy-2.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-pudgy-3.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-pudgy-4.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-pudgy-5.png',
    ],
    url: 'https://unit-pudgy.netlify.app/',
    techStack: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', size: 20 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', size: 20 },
      { name: 'Motion', icon: '/icons/motion.svg', size: 24 },
    ],
  },
  {
    id: '5',
    title: 'Unit Club',
    type: 'work',
    description:
      "A landing page for Unit Club - an exclusive, membership-based organization designed for accomplished individuals and emerging talents. The platform showcases the club's premium offerings including high-level networking opportunities, curated events, and bespoke experiences. Members gain access to an elite global network of leaders and innovators, along with exclusive resources and collaborative opportunities. The site emphasizes the club's commitment to fostering meaningful connections and facilitating growth within its carefully curated community.",
    mainImage: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-club-1.png',
    galleryImages: [
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-club-2.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-club-3.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-club-4.png',
      'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/unit-club-5.png',
    ],
    url: 'https://unitclub.org',
    techStack: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', size: 20 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', size: 20 },
      { name: 'Motion', icon: '/icons/motion.svg', size: 24 },
    ],
  },
];

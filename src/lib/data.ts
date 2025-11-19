export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  isStart?: boolean;
  isEnd?: boolean;
  isPresent?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    date: 'Present',
    title: 'Full Stack Developer',
    subtitle: 'Unit Network',
    isPresent: true,
  },
  {
    date: 'Oct 2024',
    title: 'Frontend Developer',
    subtitle: 'Unit Network',
    description: '(end position - 3 mo)',
    isEnd: true,
  },
  {
    date: 'Aug 2024',
    title: 'Frontend Developer',
    subtitle: 'Unit Network',
    description: '(start position)',
    isStart: true,
  },
  {
    date: 'Jul 2024',
    title: 'Graduated with a BSc CS',
    subtitle: 'Ciputra University',
    description: '(GPA 3.98)',
  },
  {
    date: 'Dec 2023',
    title: 'iOS Developer Intern',
    subtitle: 'Apple Developer Academy',
    description: '(end position - 10 mo)',
    isEnd: true,
  },
  {
    date: 'Nov 2023',
    title: '1st Place Mobile App Competition',
    subtitle: 'LO Kreatif 2023',
  },
  {
    date: 'May 2023',
    title: 'Swift Student Challenge Winner',
    subtitle: 'Apple WWDC 2023',
  },
  {
    date: 'Mar 2023',
    title: 'iOS Developer Intern',
    subtitle: 'Apple Developer Academy',
    description: '(start position)',
    isStart: true,
  },
  {
    date: 'Mar 2022',
    title: 'Freelance Full Stack Dev',
    subtitle: 'Citra Berkat School',
    description: '(end position - 5 mo)',
    isEnd: true,
  },
  {
    date: 'Oct 2021',
    title: 'Freelance Full Stack Dev',
    subtitle: 'Citra Berkat School',
    description: '(start position)',
    isStart: true,
  },
  {
    date: 'Aug 2020',
    title: 'Started CS Degree',
    subtitle: 'Ciputra University',
  },
  {
    date: 'May 2020',
    title: 'Created my first "Hello World"',
  },
];

export const aboutMeData = {
  image: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/me.jpg',
  paragraphs: [
    "Hi there! I'm a passionate software developer with a love for creating solutions to complex problems. Currently, I work as a Full Stack Developer at Unit Network. I graduated in 2024 with a Bachelor of Science in Computer Science (Informatics), achieving a GPA of 3.98 and being awarded Best Academic Performance for attaining the highest GPA in my batch.",
    "I have a deep love for developing applications, especially web apps. While I have also delved into mobile app development through the Apple Developer Academy and explored AI, my main focus is on full-stack development. I enjoy building projects that can make a tangible difference in people's lives.",
    "When I'm not coding, you can find me exploring new technologies. I'm a firm believer in continuous learning and always excited to discover new ways to solve problems by technology.",
  ],
};

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'Web' | 'Mobile' | 'Design' | 'AI/ML';
  status: 'Completed' | 'Ongoing' | 'Planning';
  technologies: string[];
  image: string;
  gallery: string[];
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  createdAt: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'Next-Gen E-commerce Platform',
    description: 'A comprehensive e-commerce solution built with modern technologies, featuring advanced analytics, AI-powered recommendations, and seamless payment integration. The platform handles millions of transactions daily and provides real-time inventory management.',
    shortDescription: 'Modern e-commerce platform with AI recommendations',
    category: 'Web',
    status: 'Completed',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    timeline: '6 months',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/scaletech/ecommerce',
    createdAt: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    slug: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent analytics platform that uses machine learning to provide actionable insights from complex datasets. Features real-time data visualization, predictive modeling, and automated report generation.',
    shortDescription: 'Machine learning analytics with predictive insights',
    category: 'AI/ML',
    status: 'Ongoing',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    timeline: '8 months',
    createdAt: '2024-02-01',
    featured: true
  },
  {
    id: '3',
    slug: 'mobile-fitness-app',
    title: 'FitTrack Mobile App',
    description: 'A comprehensive fitness tracking application with social features, workout planning, nutrition tracking, and progress analytics. Built with React Native for cross-platform compatibility.',
    shortDescription: 'Cross-platform fitness tracking with social features',
    category: 'Mobile',
    status: 'Completed',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    timeline: '4 months',
    liveUrl: 'https://apps.apple.com/app/fittrack',
    createdAt: '2023-11-20',
    featured: false
  },
  {
    id: '4',
    slug: 'brand-identity-system',
    title: 'TechCorp Brand Identity System',
    description: 'Complete brand identity redesign for a Fortune 500 technology company, including logo design, color palette, typography system, and comprehensive brand guidelines.',
    shortDescription: 'Complete brand identity redesign for Fortune 500 company',
    category: 'Design',
    status: 'Completed',
    technologies: ['Adobe Creative Suite', 'Figma', 'After Effects', 'Principle'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    timeline: '3 months',
    createdAt: '2023-09-10',
    featured: false
  },
  {
    id: '5',
    slug: 'blockchain-platform',
    title: 'Decentralized Finance Platform',
    description: 'A sophisticated DeFi platform enabling users to stake, swap, and earn yield on various cryptocurrencies. Built with advanced smart contracts and modern web technologies.',
    shortDescription: 'DeFi platform with staking and yield farming',
    category: 'Web',
    status: 'Ongoing',
    technologies: ['Solidity', 'Web3.js', 'Next.js', 'TypeScript', 'Hardhat'],
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    timeline: '10 months',
    createdAt: '2024-03-01',
    featured: true
  },
  {
    id: '6',
    slug: 'iot-smart-home',
    title: 'Smart Home IoT System',
    description: 'An integrated IoT ecosystem for smart home automation, featuring voice control, energy monitoring, security systems, and mobile app integration.',
    shortDescription: 'Complete IoT smart home automation system',
    category: 'AI/ML',
    status: 'Planning',
    technologies: ['Python', 'Arduino', 'React Native', 'AWS IoT', 'TensorFlow'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    timeline: '12 months',
    createdAt: '2024-04-01',
    featured: false
  }
];
export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const JOBS: Job[] = [
  // {
  //   id: 'CDG-101',
  //   title: 'Senior Product Designer',
  //   location: 'Remote / Pune',
  //   type: 'Full-time',
  //   department: 'Design',
  //   about: 'At Cudago, design is at the core of everything we do. As our Senior Product Designer, you will lead the user experience and interface design for our consumer app, provider app, and internal admin panels, creating seamless and beautiful experiences that simplify hyperlocal service booking.',
  //   responsibilities: [
  //     'Own the end-to-end design lifecycle, from user research and wireframing to high-fidelity UI and interactive prototyping.',
  //     'Design intuitive user flows for service discovery, scheduling, booking, real-time tracking, and payments.',
  //     'Build, scale, and maintain our design system across iOS, Android, and Web platforms.',
  //     'Collaborate with engineering to ensure implementation matches design specs and maintains a high quality bar.'
  //   ],
  //   requirements: [
  //     '3+ years of experience designing consumer-facing mobile and web products.',
  //     'Strong portfolio showing end-to-end design thinking, clean visual craft, and structured design systems.',
  //     'Fluency in Figma and prototyping tools.',
  //     'Strong communication skills and ability to thrive in a fast-paced environment.'
  //   ],
  //   benefits: [
  //     'Competitive compensation & performance bonuses',
  //     'Flexible work hours & remote-friendly culture',
  //     'Comprehensive health insurance',
  //     'Opportunity to shape a product from the ground up'
  //   ]
  // },
  // {
  //   id: 'CDG-102',
  //   title: 'Full Stack Engineer (React/Node)',
  //   location: 'Remote / Pune',
  //   type: 'Full-time',
  //   department: 'Engineering',
  //   about: 'We are looking for a versatile Full Stack Engineer to join our core engineering team. You will be building backend services, internal tooling, and client-facing interfaces that power Cudago\'s hyperlocal concierge service. You will have full ownership of features and directly impact the product roadmap.',
  //   responsibilities: [
  //     'Develop and maintain robust APIs using Node.js/Express/TypeScript.',
  //     'Build responsive, high-performance web applications using React and Tailwind CSS.',
  //     'Optimize data flow, caching, and background job scheduling for real-time services.',
  //     'Integrate third-party APIs for payments, map routing, authentication, and push notifications.'
  //   ],
  //   requirements: [
  //     '3+ years of production experience with modern JavaScript/TypeScript, React, Node.js.',
  //     'Experience with databases (SQL/PostgreSQL, NoSQL) and schema design.',
  //     'Familiarity with state management, web performance optimization, and responsive layouts.',
  //     'Understanding of RESTful services, serverless architectures, and basic cloud infrastructure.'
  //   ],
  //   benefits: [
  //     'Competitive compensation & equity options',
  //     'Flexible work hours & remote-friendly culture',
  //     'Comprehensive health insurance',
  //     'Latest hardware setup (MacBook Pro/Monitor support)'
  //   ]
  // },
  {
    id: 'CDG-103',
    title: 'Marketing Intern',
    location: 'Remote / Pune',
    type: 'Internship',
    department: 'Marketing',
    about: 'As a Marketing Intern, you will work closely with our growth team to expand Cudago\'s presence and engage our user community. This is a hands-on role where you will learn the ins and outs of early-stage startup marketing, organic growth, and content creation.',
    responsibilities: [
      'Help manage and grow Cudago\'s social media presence (Instagram, LinkedIn, Twitter).',
      'Draft engaging copy for newsletters, blog posts, and app notifications.',
      'Analyze marketing campaign metrics and report on user engagement and conversion.',
      'Conduct research on hyperlocal market trends and competitor strategies.'
    ],
    requirements: [
      'Currently enrolled in or recently graduated with a degree in Marketing, Communications, Business, or related fields.',
      'Excellent written and verbal communication skills with a creative mindset.',
      'Familiarity with social media management, basic design tools (like Canva), and analytics.',
      'Strong desire to learn, experiment, and move fast in a startup environment.'
    ],
    benefits: [
      'Industry-standard internship stipend',
      'Mentorship from experienced startup founders & growth leads',
      'Flexible work schedules around university hours',
      'Certificate of completion & potential full-time conversion offer'
    ]
  },
  {
    id: 'CDG-104',
    title: 'Development Intern',
    location: 'Remote / Pune',
    type: 'Internship',
    department: 'Engineering',
    about: 'Join us as a Development Intern and work alongside our senior engineering team. You will write production-grade code, solve real engineering challenges, and gain hands-on experience with modern tech stacks like React, TypeScript, Flutter, and Node.js.',
    responsibilities: [
      'Implement new features and UI components for Cudago\'s web apps and mobile dashboards.',
      'Write clean, testable, and reusable code following team guidelines.',
      'Investigate, debug, and fix software bugs reported by users or QA.',
      'Participate in code reviews, standups, and planning sessions.'
    ],
    requirements: [
      'Strong foundation in computer science fundamentals (data structures, algorithms).',
      'Proficiency in JavaScript/TypeScript, HTML/CSS, and basic React/Node.js or Flutter.',
      'Experience with Git and GitHub version control.',
      'Curiosity to learn new technologies and build products that make a real-world impact.'
    ],
    benefits: [
      'Industry-standard internship stipend',
      'Hands-on mentoring from senior software engineers',
      'Flexible work hours around class schedules',
      'Certificate of completion & potential full-time conversion offer'
    ]
  },
  {
    id: 'CDG-105',
    title: 'Operations Manager',
    location: 'Pune',
    type: 'Full-time',
    department: 'Operations',
    about: 'Cudago is a bridge between digital tech and real-world execution. As an Operations Manager, you will oversee day-to-day provider onboarding, customer support operations, quality assurance, and logistics in Pune to ensure flawless hyperlocal service delivery.',
    responsibilities: [
      'Onboard, verify, and train service providers to maintain Cudago\'s service quality standards.',
      'Manage customer escalations, support channels, and resolution metrics.',
      'Optimize supply allocation and dispatching during peak hours.',
      'Collect feedback from providers and customers to suggest product improvements.'
    ],
    requirements: [
      '2+ years of experience in operations, logistics, or customer support, preferably in a marketplace or on-demand service startup.',
      'Excellent communication, interpersonal, and negotiation skills.',
      'Ability to handle high-pressure scenarios and resolve conflicts calmly.',
      'Analytical skills to track operational KPIs and make data-driven decisions.'
    ],
    benefits: [
      'Competitive compensation package',
      'Dynamic, collaborative startup environment in Pune',
      'Health insurance',
      'Direct exposure to business-critical strategy and metrics'
    ]
  },
  // {
  //   id: 'CDG-106',
  //   title: 'Customer Success Lead',
  //   location: 'Pune',
  //   type: 'Full-time',
  //   department: 'Operations',
  //   about: 'We\'re looking for a Customer Success Lead to build and manage our customer happiness team. You will be the voice of Cudago, helping customers solve their queries, managing escalations, and setting standard operating procedures to turn every user experience into a success story.',
  //   responsibilities: [
  //     'Establish customer success workflows, response SLAs, and quality metrics.',
  //     'Directly address high-priority user inquiries and complaints with empathy and speed.',
  //     'Collaborate with the operations team to resolve service provider issues affecting customers.',
  //     'Track customer satisfaction (CSAT) scores and suggest product/process enhancements.'
  //   ],
  //   requirements: [
  //     '2+ years of experience in a customer success, customer experience, or support supervisor role.',
  //     'Strong empathy and passion for helping people and solving problems.',
  //     'Excellent verbal and written communication skills (English and Marathi/Hindi is a big plus).',
  //     'Comfortable using support desks, live chat software, and CRM tools.'
  //   ],
  //   benefits: [
  //     'Competitive compensation package',
  //     'Modern, collaboration-first workplace in Pune',
  //     'Health insurance & wellness benefits',
  //     'Career growth paths in a rapidly scaling startup'
  //   ]
  // }
];

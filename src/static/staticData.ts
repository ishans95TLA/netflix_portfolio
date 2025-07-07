import type {} from '../types';

export const profileBannerData = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
  },
  headline: "Ishan Sonavane", 
  resumeLink: {
    url: "/Ishan%20CV%20.pdf"
  },
  linkedinLink: "https://www.linkedin.com/in/ishan-sonavane-a02937110/",
  profileSummary: "AI Product Manager with 4+ years' experience building and launching B2C/B2B digital products. Proven track record in leading platform rebuilds, adopting AI across internal workflows, and shipping GenAI-powered features using multi-agent architectures."
};

export const workPermitData = {
  visaStatus: "Tier 2 Sponsored Visa",
  expiryDate: new Date("2027-12-31"),
  summary: "Fully authorized to work in the UK with sponsorship until 2027",
  additionalInfo: "Sponsored work authorization valid through 2027"
};

export const timelineData = [
  {
    timelineType: 'work' as const,
    name: "TLA",
    title: "AI Product Manager",
    techStack: "LangChain, CrewAI, N8n, GPT, Multi-agent systems",
    summaryPoints: [
      "Establishing dedicated AI R&D team from ground up including hiring and roadmap development",
      "Spearheaded rebuild of Askaprice platform with AI assistant and real-time stock checker",
      "Built AI-powered features using multi-agent architectures for structured vehicle data responses",
      "Delivered automations responsible for ~8% of company revenue",
      "Led company-wide AI adoption initiatives and custom GPT tool creation"
    ],
    dateRange: "2021 - Present"
  },
  {
    timelineType: 'work' as const,
    name: "IMPAG Consultancy",
    title: "Junior Scrum Master",
    techStack: "Agile, Scrum, Healthcare Tech",
    summaryPoints: [
      "Delivered online healthcare app driving engagement and streamlining digital consultations",
      "Facilitated Agile ceremonies ensuring smooth coordination between developers and stakeholders",
      "Defined user stories and acceptance criteria improving development velocity"
    ],
    dateRange: "November 2020 - August 2021"
  },
  {
    timelineType: 'education' as const,
    name: "Warwick University",
    title: "MSc Management",
    techStack: "Strategic Management, Leadership, Analytics",
    summaryPoints: [
      "Master's degree in Management",
      "Focus on strategic business operations",
      "Leadership and team management"
    ],
    dateRange: "2020 - 2021"
  },
  {
    timelineType: 'education' as const,
    name: "NMIMS University",
    title: "BTech + MBA Mechanical Engineering",
    techStack: "Engineering, Business Administration",
    summaryPoints: [
      "Dual degree in Engineering and Business",
      "Mechanical Engineering specialization",
      "Strong technical and business foundation"
    ],
    dateRange: "2013 - 2018"
  }
];

export const projectsData = [
  {
    title: "Singularity AI Platform",
    description: "Revolutionary all-in-one AI platform that democratizes access to cutting-edge AI models. Features intelligent routing system that automatically classifies queries and selects optimal AI models from OpenAI, Gemini, Anthropic, and other leading providers for maximum accuracy and efficiency.",
    techUsed: "Multi-model AI, Smart Routing, API Integration, React, Node.js",
    image: { url: "/images/singularity.png" }
  },
  {
    title: "Enterprise Email Automation Engine",
    description: "Comprehensive end-to-end email marketing automation system built with N8n, enabling intelligent research, dynamic content creation, performance optimization, and sophisticated A/B testing capabilities. Scales email campaigns while maintaining personalization and delivering measurable ROI.",
    techUsed: "N8n, Email Marketing, Automation, A/B Testing, Analytics",
    image: { url: "/images/email.png" }
  },
  {
    title: "Dash - Automotive AI Assistant",
    description: "Next-generation automotive recommendation chatbot powered by multi-agent architecture and trained on comprehensive UK passenger car dataset. Delivers lightning-fast, highly accurate vehicle recommendations by understanding user preferences and matching them with optimal car choices through advanced AI reasoning.",
    techUsed: "Multi-agent AI, Automotive Data, Machine Learning, Chatbot, NLP",
    image: { url: "/images/dash.png" }
  }
];

export const certificationsData = [
  {
    title: "Complete Agentic AI Engineer Course",
    issuer: "Ed Donner",
    issuedDate: "2024 (In Progress)",
    link: "#",
    iconName: "ai"
  },
  {
    title: "Multi Agent Systems with CrewAI",
    issuer: "DeepLearning.ai",
    issuedDate: "2024 (In Progress)",
    link: "#",
    iconName: "ai"
  },
  {
    title: "AI for Product Management",
    issuer: "Pendo",
    issuedDate: "2024",
    link: "#",
    iconName: "product"
  },
  {
    title: "Conversational AI",
    issuer: "Reforge",
    issuedDate: "2023",
    link: "#",
    iconName: "ai"
  },
  {
    title: "Diffusion Mastery: Flux, Stable Diffusion, Midjourney & More",
    issuer: "Udemy",
    issuedDate: "2024",
    link: "#",
    iconName: "ai"
  },
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    issuedDate: "2021",
    link: "#",
    iconName: "scrum"
  },
  {
    title: "Senior Product Manager",
    issuer: "Product School",
    issuedDate: "2022",
    link: "#",
    iconName: "product"
  }
];

export const contactMeData = {
  profilePicture: { url: "/images/ishan.jpg"},
  name: "Ishan Sonavane",
  title: "AI Product Manager",
  summary: "AI-focused product leader building next-generation digital products with proven expertise in GenAI implementation and multi-agent architectures.",
  companyUniversity: "TLA",
  linkedinLink: "https://www.linkedin.com/in/ishan-sonavane-a02937110/",
  email: "ishan.s258@gmail.com",
  phoneNumber: "07404704743"
};

export const skillsData = [
  {
    name: "Prompt Engineering",
    category: "AI/ML",
    description: "Optimizing AI model interactions and responses",
    icon: "ai"
  },
  {
    name: "Stable Diffusion",
    category: "AI/ML",
    description: "Advanced image generation and manipulation",
    icon: "ai"
  },
  {
    name: "Generative AI Images",
    category: "AI/ML",
    description: "Creating and editing images with AI",
    icon: "ai"
  },
  {
    name: "GPT Fine-tuning",
    category: "AI/ML",
    description: "Custom model training and optimization",
    icon: "ai"
  },
  {
    name: "AI Education Workshops",
    category: "AI/ML",
    description: "Teaching and training teams on AI implementation",
    icon: "ai"
  },
  {
    name: "LangChain",
    category: "AI/ML",
    description: "Building AI applications and workflows",
    icon: "ai"
  },
  {
    name: "CrewAI",
    category: "AI/ML", 
    description: "Multi-agent system development",
    icon: "ai"
  },
  {
    name: "Product Roadmaps",
    category: "Business",
    description: "Strategic product planning and timeline management",
    icon: "product"
  },
  {
    name: "Prioritization",
    category: "Business",
    description: "Feature and requirement prioritization frameworks",
    icon: "product"
  },
  {
    name: "Design Thinking",
    category: "Business",
    description: "User-centered problem solving methodology",
    icon: "product"
  },
  {
    name: "Cross-functional Collaboration",
    category: "Business",
    description: "Leading diverse teams and stakeholder management",
    icon: "product"
  },
  {
    name: "Product Management",
    category: "Business",
    description: "End-to-end product lifecycle management",
    icon: "product"
  },
  {
    name: "User Research",
    category: "Business",
    description: "Customer insights and market validation",
    icon: "product"
  },
  {
    name: "Data Analysis",
    category: "Business",
    description: "Product metrics and performance analysis",
    icon: "product"
  },
  {
    name: "N8n",
    category: "Automation",
    description: "Workflow automation and integration",
    icon: "automation"
  },
  {
    name: "Make.com",
    category: "Automation",
    description: "Visual automation platform integration",
    icon: "automation"
  },
  {
    name: "Zapier",
    category: "Automation",
    description: "App connectivity and workflow automation",
    icon: "automation"
  },
  {
    name: "Replit",
    category: "Automation",
    description: "Collaborative coding and deployment",
    icon: "automation"
  },
  {
    name: "Bolt",
    category: "Automation",
    description: "Development workflow automation",
    icon: "automation"
  },
  {
    name: "Cursor",
    category: "Automation",
    description: "AI-powered code editor and automation",
    icon: "automation"
  },
  {
    name: "API Integration",
    category: "Technical",
    description: "Connecting systems and services",
    icon: "api"
  },
  {
    name: "Wireframing",
    category: "Design",
    description: "Product design and user flow planning",
    icon: "design"
  },
  {
    name: "UI/UX Design",
    category: "Design",
    description: "User interface and experience design",
    icon: "design"
  },
  {
    name: "Agile/Scrum",
    category: "Methodology",
    description: "Project management and team coordination",
    icon: "scrum"
  }
];
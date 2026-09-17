export const TEAM_INFO = {
  name: "TEAM AVRON",
  tagline: "Biomedical Engineering • Research • Innovation",
  supportingStatement: "Building solutions to real-world healthcare challenges through biomedical engineering.",
  university: "Makerere University",
  location: "Kampala, Uganda",
  email: "avronteam@gmail.com",
  socials: {
    linkedin: "[LINKEDIN LINK TO BE ADDED]",
    twitter: "[TWITTER LINK TO BE ADDED]",
    instagram: "[INSTAGRAM LINK TO BE ADDED]",
  }
};

export const TEAM_MEMBERS = [
  {
    id: "member-1",
    name: "ANGEL RUTH NASSANGA",
    role: "TEAM LEAD",
    title: "Biomedical Engineering Student",
    interests: "Project Management, Medical Device Design, Systems Engineering",
    responsibilities: "Overseeing overall project progress, managing team communications, and ensuring project milestones are met.",
    bio: "Angel is a dedicated Biomedical Engineering student with a passion for leadership and systems design. She ensures the team stays focused, organized, and on track to deliver impactful healthcare solutions.",
    photoUrl: "./ANGEL.jpeg",
    linkedin: "#",
    email: "angelruthnassanga@gmail.com"
  },
  {
    id: "member-2",
    name: "EBAMU MISAKI",
    role: "RESEARCH LEAD",
    title: "Biomedical Engineering Student",
    interests: "Clinical Data Analysis, Healthcare Informatics, Evidence-based Medicine",
    responsibilities: "Leading literature reviews, designing research methodologies, and ensuring the scientific validity of the project.",
    bio: "Misaki specializes in clinical research and data-driven problem solving. He is committed to bridging the gap between clinical needs and engineering solutions through rigorous research and analysis.",
    photoUrl: "./MISAKI.jpeg",
    linkedin: "#",
    email: "ebamumisaki@gmail.com"
  },
  {
    id: "member-3",
    name: "NABUSIITA MERCY",
    role: "SECRETARY",
    title: "Biomedical Engineering Student",
    interests: "Technical Writing, Healthcare Policy, Biomedical Ethics",
    responsibilities: "Documenting meetings, managing project reports, organizing resources, and handling official documentation.",
    bio: "Mercy brings strong organizational and communication skills to the team. Her attention to detail ensures that all project documentation and administrative records are maintained at a professional standard.",
    photoUrl: "./MERCY.jpeg",
    linkedin: "#",
    email: "nabusiitam@gmail.com"
  },
  {
    id: "member-4",
    name: "TUSUUBIRA HOPE JIBRIL",
    role: "INNOVATION LEAD",
    title: "Biomedical Engineering Student",
    interests: "Prototyping, Embedded Systems, Healthcare Technologies",
    responsibilities: "Driving technical development, brainstorming engineering solutions, and leading the prototyping phase.",
    bio: "Jibril is a creative problem-solver focused on technology development. He leads the technical innovation of the project, turning research concepts into tangible, functional biomedical engineering prototypes.",
    photoUrl: "./JIBRIL.jpeg",
    linkedin: "#",
    email: "thopejibril@gmail.com"
  }
];

export const PROJECT_DETAILS = {
  title: "[PROJECT TITLE — TO BE ADDED]",
  problem: "[Describe the healthcare problem being addressed.]",
  need: "[Explain who is affected, why the problem matters and why a solution is needed.]",
  proposedSolution: "[Describe Team Avron's proposed solution.]",
  objectives: [
    "Identify and analyse the target healthcare problem.",
    "Review existing solutions and relevant literature.",
    "Define system and user requirements.",
    "Develop an appropriate biomedical engineering solution.",
    "Build and test a prototype where applicable.",
    "Evaluate the performance of the proposed solution."
  ],
  overallProgress: 0, // EDITABLE PERCENTAGE
  stages: {
    research: "IN PROGRESS",
    design: "NOT STARTED",
    development: "NOT STARTED",
    testing: "NOT STARTED",
    documentation: "NOT STARTED"
  }
};

export const PROJECT_JOURNEY = [
  {
    id: "stage-1",
    date: "AUGUST 2026",
    title: "Needs Finding",
    status: "COMPLETED" // COMPLETED, IN PROGRESS, NOT STARTED
  },
  {
    id: "stage-2",
    date: "SEPTEMBER 2026",
    title: "Literature Review & Problem Identification",
    status: "IN PROGRESS"
  },
  {
    id: "stage-3",
    date: "OCTOBER 2026",
    title: "Requirements & Concept Development",
    status: "NOT STARTED"
  },
  {
    id: "stage-4",
    date: "NOVEMBER 2026",
    title: "Prototype Development",
    status: "NOT STARTED"
  },
  {
    id: "stage-5",
    date: "DECEMBER 2026",
    title: "Testing & Evaluation",
    status: "NOT STARTED"
  },
  {
    id: "stage-6",
    date: "FINAL STAGE",
    title: "Presentation & Project Documentation",
    status: "NOT STARTED"
  }
];

export const RESOURCES = [
  { id: "res-1", title: "Project Proposal", type: "document" },
  { id: "res-2", title: "Literature Review", type: "document" },
  { id: "res-3", title: "Research Papers", type: "link" },
  { id: "res-4", title: "Design Documents", type: "document" },
  { id: "res-5", title: "Progress Reports", type: "document" },
  { id: "res-6", title: "Posters", type: "image" },
  { id: "res-7", title: "Presentations", type: "presentation" },
  { id: "res-8", title: "Final Report", type: "document" },
];

export const GALLERY = [
  {
    id: "img-1",
    url: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800",
    category: "Research",
    title: "[PLACEHOLDER - Research Image 1]",
    date: "Sept 2026",
    description: "Placeholder for research documentation."
  },
  {
    id: "img-2",
    url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    category: "Team",
    title: "[PLACEHOLDER - Team Meeting]",
    date: "Sept 2026",
    description: "Placeholder for team meeting."
  },
  {
    id: "img-3",
    url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    title: "[PLACEHOLDER - Design Phase]",
    date: "Oct 2026",
    description: "Placeholder for design schematics."
  },
  {
    id: "img-4",
    url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    category: "Prototype",
    title: "[PLACEHOLDER - Prototyping]",
    date: "Nov 2026",
    description: "Placeholder for prototype."
  },
  {
    id: "img-5",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    category: "Testing",
    title: "[PLACEHOLDER - Lab Testing]",
    date: "Dec 2026",
    description: "Placeholder for lab testing."
  },
  {
    id: "img-6",
    url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800",
    category: "Presentations",
    title: "[PLACEHOLDER - Presentation]",
    date: "Dec 2026",
    description: "Placeholder for project presentation."
  }
];

export const UPDATES = [
  {
    id: "update-1",
    title: "Team Avron Begins Needs-Finding Phase",
    date: "17 September 2026",
    category: "Research",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Team Avron has begun the needs-finding phase of our final-year Biomedical Engineering project. We are exploring real-world healthcare challenges...",
    fullArticle: "Team Avron has begun the needs-finding phase of our final-year Biomedical Engineering project. We are exploring real-world healthcare challenges and identifying opportunities where biomedical engineering can provide practical solutions.\n\n[EDITABLE EXAMPLE/UPDATE - REPLACE WITH ACTUAL CONTENT]",
    tags: ["Needs Finding", "Research", "Healthcare"]
  }
];

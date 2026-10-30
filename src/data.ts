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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  regNumber: string;
  interests: string;
  responsibilities: string;
  bio: string;
  photoUrl: string;
  linkedin: string;
  email: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "ANGEL RUTH NASSANGA",
    role: "TEAM LEAD",
    title: "Biomedical Engineering Student",
    regNumber: "24/U/09837/PS",
    interests: "Project Management, Medical Device Design, Systems Engineering",
    responsibilities: "Overseeing overall project progress, managing team communications, coordinating milestone deliverables, and ensuring project goals are met.",
    bio: "Angel is a dedicated Biomedical Engineering student with a passion for leadership and systems design. She ensures the team stays focused, organized, and on track to deliver impactful healthcare and assistive solutions.",
    photoUrl: "./ANGEL.jpeg",
    linkedin: "#",
    email: "angelruthnassanga@gmail.com"
  },
  {
    id: "member-2",
    name: "EBAMU MISAKI",
    role: "RESEARCH LEAD",
    title: "Biomedical Engineering Student",
    regNumber: "24/U/04643/PS",
    interests: "Clinical Data Analysis, Healthcare Informatics, Evidence-based Medicine",
    responsibilities: "Leading literature reviews, designing research methodologies, hazard characterization, and ensuring the scientific and clinical validity of the project.",
    bio: "Misaki specializes in clinical research and data-driven problem solving. He is committed to bridging the gap between clinical needs and engineering solutions through rigorous research and systematic analysis.",
    photoUrl: "./MISAKI.jpeg",
    linkedin: "#",
    email: "ebamumisaki@gmail.com"
  },
  {
    id: "member-3",
    name: "NABUSIITA MERCY",
    role: "SECRETARY",
    title: "Biomedical Engineering Student",
    regNumber: "24/U/0862",
    interests: "Technical Writing, Healthcare Policy, Biomedical Ethics, Regulatory Compliance",
    responsibilities: "Documenting meetings, managing project reports, organizing resources, drafting risk management files, and maintaining official documentation.",
    bio: "Mercy brings strong organizational and communication skills to the team. Her attention to detail ensures that all project documentation, ethical standards, and administrative records are maintained at a professional standard.",
    photoUrl: "./MERCY.jpeg",
    linkedin: "#",
    email: "nabusiitam@gmail.com"
  },
  {
    id: "member-4",
    name: "TUSUUBIRA HOPE JIBRIL",
    role: "INNOVATION LEAD",
    title: "Biomedical Engineering Student",
    regNumber: "24/U/26042/PSA",
    interests: "Prototyping, Embedded Systems, Sensor Integration, Assistive Technologies",
    responsibilities: "Driving technical development, hardware architecture, embedded firmware, sensor fusion, and leading the prototyping phase.",
    bio: "Jibril is a creative problem-solver focused on technology development. He leads the technical innovation of the project, turning research concepts into tangible, functional biomedical engineering prototypes.",
    photoUrl: "./JIBRIL.jpeg",
    linkedin: "#",
    email: "thopejibril@gmail.com"
  }
];

export const PROJECT_DETAILS = {
  title: "Assistive Hazard Detection for Visually Impaired Independent Mobility",
  shortTitle: "Assistive Mobility Hazard Detector",
  problem: "Visually impaired individuals navigating low-resource outdoor environments face severe safety hazards and barriers to independent mobility. Traditional mobility aids like the standard white cane only detect obstacles at ground level within immediate physical sweep and cannot alert users to head-level obstacles, sudden drop-offs, open drains, puddles, or fast-approaching dynamic hazards such as vehicles and cyclists. In low-resource settings characterized by uneven terrain, unpaved paths, irregular walkways, and high ambient daylight or noise, these limitations lead to frequent collisions, disorientation, physical injury, and a significant reduction in personal independence.",
  need: "Visually impaired individuals navigating low-resource outdoor environments need real-time detection of environmental hazards to support independent mobility.",
  proposedSolution: "Team Avron is developing an intelligent, multimodal assistive biomedical device tailored for low-resource outdoor environments. The system delivers multi-zone real-time hazard detection covering 0.3 m to 3.0 m across a ≥120° field of view, detecting both static hazards (from knee to head height) and fast-approaching dynamic objects. It converts environmental hazard data into intuitive, distinct tactile and auditory feedback that differentiates hazard categories and distance bands. Engineered for outdoor resilience (IP54 weather resistance), rapid response (≤300 ms alert latency), long endurance (≥8 hours continuous runtime), and strict biomedical safety compliance (ISO 14971-style risk management with biocompatible materials).",
  documentPdfUrl: "./documents/TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf",
  objectives: [
    "Quantify and document environmental hazards and navigation barriers faced by visually impaired individuals in low-resource outdoor settings.",
    "Design and develop a multi-sensor obstacle detection system sensing objects from 0.3 m to 3.0 m across a ≥120° horizontal field from knee to head level.",
    "Implement low-latency embedded firmware achieving a ≤300 ms response time with priority alerting for dynamic approaching hazards.",
    "Formulate intuitive multimodal haptic (vibration) and auditory feedback differentiating hazard types (ground drop-offs, head hazards) and proximity bands.",
    "Enforce ISO 14971-style risk management, safe low-voltage operation, skin-safe biocompatible contact materials, and IP54 dust/water protection.",
    "Evaluate device performance through structured user usability studies (targeting System Usability Scale SUS ≥ 70) and outdoor field trials."
  ],
  overallProgress: 35, // Current progress percentage
  stages: {
    research: "IN PROGRESS",
    design: "IN PROGRESS",
    development: "IN PROGRESS",
    testing: "NOT STARTED",
    documentation: "IN PROGRESS"
  }
};

export interface CriterionOfSuccess {
  id: number;
  title: string;
  metric: string;
  category: "Performance" | "Safety" | "Usability" | "Durability";
  description: string;
}

export const CRITERIA_OF_SUCCESS: CriterionOfSuccess[] = [
  {
    id: 1,
    title: "Obstacle Detection Reliability",
    metric: "≥ 90%",
    category: "Performance",
    description: "Detects static obstacles from knee to head height beyond white cane reach, with at least 90% obstacle detection reliability in outdoor conditions, tested across varied obstacle sizes and materials."
  },
  {
    id: 2,
    title: "Range of Detection",
    metric: "0.3 m – 3.0 m",
    category: "Performance",
    description: "Senses obstacles from 0.3 m to 3 m ahead. Short-range mode covers 0.3 m to 1.5 m and long-range mode extends to 3 m, with distance accuracy verified at set points."
  },
  {
    id: 3,
    title: "Real-Time Response Time",
    metric: "300 ms",
    category: "Performance",
    description: "Alert latency target of 300 ms from detection to user feedback. At a walking speed of about 1.2 m/s the user moves only about 0.36 m during this delay, leaving enough time to react."
  },
  {
    id: 4,
    title: "Documented Safety & Risk Control",
    metric: "ISO 14971",
    category: "Safety",
    description: "Maintains an ISO 14971-style risk management file with no unacceptable open risks. Required safety features include: low-voltage battery power, biocompatible, skin-safe contact materials, and low-battery alerts before shutdown."
  },
  {
    id: 5,
    title: "Field of Detection",
    metric: "≥ 120° Arc",
    category: "Performance",
    description: "Covers a horizontal arc of at least 120° in front of the user, so obstacles to the sides are detected without precise cane sweeping."
  },
  {
    id: 6,
    title: "Battery Life",
    metric: "≥ 8 Hours",
    category: "Durability",
    description: "Runs for at least 8 hours of continuous use on one charge, verified by a runtime test until the low-battery alert, which must trigger before shutdown."
  },
  {
    id: 7,
    title: "System Usability",
    metric: "SUS ≥ 70",
    category: "Usability",
    description: "System Usability Scale score of at least 70. When 7 to 10 people test the device, at least 7 must succeed in mounting, detaching, powering on, and switching modes unaided using tactile cues, with zero critical use errors."
  },
  {
    id: 8,
    title: "Weather Resistance",
    metric: "IP54 (Min IPX2)",
    category: "Durability",
    description: "Target of IP54 protection against dust and water splashes, with reliable operation in outdoor noise and daylight (minimum acceptable level IPX2)."
  },
  {
    id: 9,
    title: "Distinct Alerts by Hazard Type",
    metric: "Multimodal Haptic & Audio",
    category: "Usability",
    description: "Gives distinct vibration or sound patterns that differentiate: ground hazards (drop-offs, steps, puddles), trunk and head-level hazards, and distance bands (near, mid, and far)."
  },
  {
    id: 10,
    title: "Moving Hazard Alerting",
    metric: "Dynamic Priority Alert",
    category: "Performance",
    description: "Detects fast-approaching dynamic objects such as vehicles or pedestrians and gives a priority alert in time for the user to react safely."
  }
];

export const PROJECT_JOURNEY = [
  {
    id: "stage-1",
    date: "AUGUST 2026",
    title: "Needs Finding & Criteria Definition",
    status: "COMPLETED"
  },
  {
    id: "stage-2",
    date: "SEPTEMBER 2026",
    title: "Literature Review & Problem Identification",
    status: "COMPLETED"
  },
  {
    id: "stage-3",
    date: "OCTOBER 2026",
    title: "Requirements, Criteria of Success & Concept Development",
    status: "IN PROGRESS"
  },
  {
    id: "stage-4",
    date: "NOVEMBER 2026",
    title: "Sensor Integration & Prototype Development",
    status: "IN PROGRESS"
  },
  {
    id: "stage-5",
    date: "DECEMBER 2026",
    title: "Testing, Usability (SUS) & Validation",
    status: "NOT STARTED"
  },
  {
    id: "stage-6",
    date: "FINAL STAGE",
    title: "Risk File (ISO 14971), Final Documentation & Defense",
    status: "NOT STARTED"
  }
];

export const RESOURCES = [
  { 
    id: "res-0", 
    title: "Team Avron Criteria of Success & Need Specification", 
    type: "document",
    date: "October 2026",
    description: "Official specification defining our 10 measurable criteria of success, target metrics, and need statement.",
    fileUrl: "./documents/TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf"
  },
  { 
    id: "res-1", 
    title: "Project Proposal & Needs Assessment", 
    type: "document",
    date: "August 2026",
    description: "Overview of low-resource outdoor environmental hazard challenges for visually impaired individuals."
  },
  { 
    id: "res-2", 
    title: "Literature Review on Assistive Mobility Devices", 
    type: "document",
    date: "September 2026",
    description: "State-of-the-art review on electronic travel aids, sensor modalities, and limitations of existing white canes."
  },
  { 
    id: "res-3", 
    title: "Sensor Evaluation & Outdoor Benchmark Research", 
    type: "link",
    date: "October 2026",
    description: "Comparison of ultrasonic, LiDAR, and optical sensors in ambient daylight and weather conditions."
  },
  { 
    id: "res-4", 
    title: "ISO 14971 Risk Management & Safety Dossier", 
    type: "document",
    date: "Draft",
    description: "Identification and mitigation of electrical, biocompatibility, and operational risk factors."
  },
  { 
    id: "res-5", 
    title: "Multimodal Haptic & Auditory Feedback Protocols", 
    type: "document",
    date: "Draft",
    description: "Frequency and pulse pattern mapping for distinct ground, trunk, and head hazard discrimination."
  },
  { 
    id: "res-6", 
    title: "System Usability Scale (SUS) Evaluation Protocol", 
    type: "document",
    date: "Planning",
    description: "Testing methodology with 7-10 participants targeting SUS ≥ 70 and zero critical use errors."
  },
  { 
    id: "res-7", 
    title: "Project Milestone Presentation Deck", 
    type: "presentation",
    date: "October 2026",
    description: "Comprehensive progress slides prepared for faculty advisors and biomedical departmental review."
  }
];

export const GALLERY = [
  {
    id: "img-1",
    url: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800",
    category: "Research",
    title: "Outdoor Environment Analysis",
    date: "Sept 2026",
    description: "Investigating obstacle profiles and hazard scenarios in outdoor environments."
  },
  {
    id: "img-2",
    url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    category: "Team",
    title: "Criteria of Success Review",
    date: "Oct 2026",
    description: "Team Avron session defining quantitative engineering benchmarks and safety metrics."
  },
  {
    id: "img-3",
    url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    title: "Sensor Array Architecture",
    date: "Oct 2026",
    description: "Schematics for 120° horizontal field-of-view sensor alignment and alert triggers."
  },
  {
    id: "img-4",
    url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    category: "Prototype",
    title: "Haptic Feedback Integration",
    date: "Nov 2026",
    description: "Breadboard prototyping for real-time response (<300 ms) vibration cues."
  },
  {
    id: "img-5",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    category: "Testing",
    title: "Outdoor Daylight & Noise Testing",
    date: "Dec 2026",
    description: "Validation of obstacle detection reliability (≥90%) under outdoor conditions."
  },
  {
    id: "img-6",
    url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800",
    category: "Presentations",
    title: "Departmental Milestone Defense",
    date: "Dec 2026",
    description: "Biomedical engineering final project presentation and evaluation."
  }
];

export const UPDATES = [
  {
    id: "update-1",
    title: "Official Criteria of Success Document Finalized",
    date: "28 October 2026",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Team Avron has established 10 concrete, measurable criteria of success for our assistive hazard detection system.",
    fullArticle: "Team Avron has successfully finalized our official Criteria of Success and Need Statement for our final-year Biomedical Engineering project.\n\nOur device focuses on visually impaired individuals navigating low-resource outdoor environments who need real-time detection of environmental hazards to support independent mobility. Key targets include ≥90% obstacle detection reliability, 0.3 m to 3.0 m detection range, ≤300 ms alert response time, ≥120° detection field, ≥8 hours continuous battery life, IP54 weather protection, and ISO 14971-style safety risk control.",
    tags: ["Criteria of Success", "Biomedical Engineering", "Accessibility", "Research"]
  },
  {
    id: "update-2",
    title: "Needs-Finding & Problem Identification Concluded",
    date: "17 September 2026",
    category: "Research",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Team Avron concluded field observations analyzing challenges faced by visually impaired navigators in low-resource settings.",
    fullArticle: "During the initial phase of our research, Team Avron focused on understanding the daily challenges visually impaired people encounter in low-resource outdoor environments. The white cane remains an indispensable tool, but users frequently report obstacles at knee-to-head level, drop-offs, open ditches, and fast-moving obstacles as critical hazards requiring assistive intervention.",
    tags: ["Needs Finding", "Research", "Healthcare", "Field Observations"]
  }
];

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
  shortTitle: "Assistive Hazard Detection",
  institution: "Makerere University",
  department: "Department of Biomedical Sciences and Engineering",
  supervisors: "Dr. Robert Ssekitoleko & Ms. Nalwoga Racheal",
  problem: "Visually impaired individuals navigating low-resource outdoor environments face severe safety hazards and barriers to independent mobility. Traditional mobility aids like the standard white cane only detect obstacles at ground level within immediate physical sweep and cannot alert users to head-level obstacles, sudden drop-offs, open drains, puddles, or fast-approaching dynamic hazards such as vehicles and cyclists. In low-resource settings characterized by uneven terrain, unpaved paths, irregular walkways, and high ambient daylight or noise, these limitations lead to frequent collisions, disorientation, physical injury, and a significant reduction in personal independence.",
  need: "Visually impaired individuals navigating low-resource outdoor environments need real-time detection of environmental hazards to support independent mobility.",
  proposedSolution: "Team Avron is developing an intelligent, multimodal assistive biomedical device tailored for low-resource outdoor environments. The system delivers multi-zone real-time hazard detection covering 0.3 m to 3.0 m across a ≥120° field of view, detecting both static hazards (from knee to head height) and fast-approaching dynamic objects. It converts environmental hazard data into intuitive, distinct tactile and auditory feedback that differentiates hazard categories and distance bands. Engineered for outdoor resilience (IP54 weather resistance), rapid response (≤300 ms alert latency), long endurance (≥8 hours continuous runtime), and strict biomedical safety compliance (ISO 14971-style risk management with biocompatible materials).",
  documentPdfUrl: "./documents/TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf",
  technicalReportPdfUrl: "./documents/TEAM_AVRON_TECHNICAL_REPORT.pdf",
  managerialReportPdfUrl: "./documents/TEAM_AVRON_MANAGERIAL_REPORT.pdf",
  top3NeedsPdfUrl: "./documents/TEAM_AVRON_TOP_3_NEEDS.pdf",
  top10NeedsPdfUrl: "./documents/TEAM_AVRON_TOP_10_NEEDS.pdf",
  needs100PdfUrl: "./documents/TEAM_AVRON_100_NEEDS_ASSESSMENT.pdf",
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

export interface ResourceItem {
  id: string;
  title: string;
  type: 'document' | 'link' | 'presentation' | 'image';
  category: 'Official Reports' | 'Needs Assessment' | 'Engineering Criteria' | 'Protocols & Research';
  date: string;
  description: string;
  fileUrl?: string;
  downloadName?: string;
  badge?: string;
  pages?: string;
  fileSize?: string;
}

export const RESOURCES: ResourceItem[] = [
  { 
    id: "res-tech-report", 
    title: "Team Avron: Technical Report", 
    type: "document",
    category: "Official Reports",
    date: "October 2026",
    description: "Official 45-page Biomedical Engineering Technical Report detailing clinical immersion at Mulago, Kawempe, and Ruby hospitals, the 100-to-3 needs screening funnel, MAUT decision matrices, clinical stakeholder feedback, and engineering requirements.",
    fileUrl: "./documents/TEAM_AVRON_TECHNICAL_REPORT.pdf",
    downloadName: "TEAM_AVRON_TECHNICAL_REPORT.pdf",
    badge: "OFFICIAL TECHNICAL REPORT",
    pages: "45 Pages",
    fileSize: "1.1 MB"
  },
  { 
    id: "res-mgmt-report", 
    title: "Team Avron: Management Report", 
    type: "document",
    category: "Official Reports",
    date: "October 2026",
    description: "Official 37-page Project Management Report covering Work Breakdown Structure (WBS), Gantt scheduling, Earned Value Analysis (EVA), stakeholder engagement, team constitution, code of conduct, risk governance, and meeting minutes.",
    fileUrl: "./documents/TEAM_AVRON_MANAGERIAL_REPORT.pdf",
    downloadName: "TEAM_AVRON_MANAGERIAL_REPORT.pdf",
    badge: "OFFICIAL MANAGEMENT REPORT",
    pages: "37 Pages",
    fileSize: "809 KB"
  },
  { 
    id: "res-criteria", 
    title: "Criteria of Success & Need Specification", 
    type: "document",
    category: "Engineering Criteria",
    date: "October 2026",
    description: "Official engineering benchmark defining our 10 measurable criteria of success (≥90% detection reliability, ≤300ms latency, 0.3m–3.0m range, IP54 weather seal, SUS ≥ 70) and quantitative validation protocols.",
    fileUrl: "./documents/TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf",
    downloadName: "TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf",
    badge: "CRITERIA SPECIFICATION",
    pages: "3 Pages",
    fileSize: "206 KB"
  },
  { 
    id: "res-top3", 
    title: "Top 3 Priority Needs Report", 
    type: "document",
    category: "Needs Assessment",
    date: "September 2026",
    description: "In-depth clinical justification and comparative analysis for our top 3 shortlisted clinical needs: (1) Hazard Detection for Visually Impaired, (2) Non-invasive Hypoglycemia Screening, and (3) Low-cost Cardiac Surgery Simulation.",
    fileUrl: "./documents/TEAM_AVRON_TOP_3_NEEDS.pdf",
    downloadName: "TEAM_AVRON_TOP_3_NEEDS.pdf",
    badge: "TOP 3 SHORTLIST",
    pages: "3 Pages",
    fileSize: "80 KB"
  },
  { 
    id: "res-top10", 
    title: "Top 10 Needs Selection & MAUT Analysis", 
    type: "document",
    category: "Needs Assessment",
    date: "September 2026",
    description: "Multi-Attribute Utility Theory (MAUT) decision matrix and multi-factorial scoring (clinical impact, technical feasibility, low-resource viability, affordability) that selected the top ten clinical needs.",
    fileUrl: "./documents/TEAM_AVRON_TOP_10_NEEDS.pdf",
    downloadName: "TEAM_AVRON_TOP_10_NEEDS.pdf",
    badge: "MAUT DECISION MATRIX",
    pages: "1 Page",
    fileSize: "24 KB"
  },
  { 
    id: "res-100", 
    title: "Master Catalog of 100+ Refined Need Statements", 
    type: "document",
    category: "Needs Assessment",
    date: "September 2026",
    description: "Master reference list of 103 refined biomedical need statements across 4 core clinical disciplines, formulated during clinical immersion across Mulago National Referral, Kawempe Specialized Hospital, and Ruby Medical Center.",
    fileUrl: "./documents/TEAM_AVRON_100_NEEDS_ASSESSMENT.pdf",
    downloadName: "TEAM_AVRON_100_NEEDS_ASSESSMENT.pdf",
    badge: "100+ NEEDS MASTER LIST",
    pages: "5 Pages",
    fileSize: "70 KB"
  },
  { 
    id: "res-iso", 
    title: "ISO 14971 Risk Management & Safety Dossier", 
    type: "document",
    category: "Protocols & Research",
    date: "Draft",
    description: "Biomedical device risk identification evaluating electrical safety, user fall mitigation, acoustic alert thresholds, and biocompatible contact materials."
  },
  { 
    id: "res-sus", 
    title: "System Usability Scale (SUS) Evaluation Protocol", 
    type: "document",
    category: "Protocols & Research",
    date: "Planning",
    description: "Standardized evaluation protocol with 7–10 participants with visual impairments targeting SUS ≥ 70 and zero critical use errors."
  },
  { 
    id: "res-deck", 
    title: "Project Milestone Presentation Deck", 
    type: "presentation",
    category: "Protocols & Research",
    date: "October 2026",
    description: "Comprehensive progress slides prepared for faculty supervisors Dr. Robert Ssekitoleko and Ms. Nalwoga Racheal for departmental review."
  }
];

export interface GalleryItem {
  id: string;
  url: string;
  category: 'Meetings' | 'Team' | 'Research' | 'Design' | 'Prototype' | 'Testing' | 'Presentations';
  title: string;
  date: string;
  description: string;
  badge?: string;
  location?: string;
  attendees?: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "gallery-meeting-lab-interview",
    url: "./gallery/stakeholder_consultation_lab.jpeg",
    category: "Meetings",
    title: "Stakeholder Interview Meeting – Mulago Molecular Labs",
    date: "9 September 2026",
    badge: "Managerial Report Figure 4",
    location: "Mulago Molecular Biology Labs",
    attendees: "Mr. Raymond Kalema (Lab Technologist) & Team Avron (Angel Ruth, Mercy, Misaki, Hope)",
    description: "Clinical client interview meeting with Mr. Raymond Kalema, Laboratory Technologist at Mulago Molecular Biology Labs (documented as Figure 4 in the Managerial Report). Team members discussed diagnostic workflows, laboratory equipment operations, and mobility constraints in medical environments."
  },
  {
    id: "gallery-meeting-lab-notes",
    url: "./gallery/requirements_gathering_lab.jpeg",
    category: "Meetings",
    title: "Needs Documentation & Note-Taking Meeting",
    date: "9 September 2026",
    badge: "Clinical Immersion Minutes",
    location: "Mulago Molecular Biology Labs",
    attendees: "Team Avron & Mr. Raymond Kalema",
    description: "Team Avron actively recording minutes, documenting unmet clinical needs, and noting stakeholder workflow pain points during the in-person consultation meeting at Mulago Molecular Biology Labs."
  },
  {
    id: "gallery-meeting-lab-walkthrough",
    url: "./gallery/facility_equipment_walkthrough.jpeg",
    category: "Meetings",
    title: "Facility Walkthrough & Equipment Review Meeting",
    date: "9 September 2026",
    badge: "Site & Space Assessment",
    location: "Mulago Hospital Diagnostics Facility",
    attendees: "Mr. Raymond Kalema & Team Avron",
    description: "On-site clinical consultation and facility walkthrough with technologist Raymond Kalema inspecting sample storage units, ultra-low temperature freezer layouts, and physical navigation hazards."
  },
  {
    id: "gallery-meeting-ruby-online",
    url: "./gallery/team_virtual_sprint_meeting.jpeg",
    category: "Meetings",
    title: "Online Stakeholder Meeting – Allan Rodin Gidoi (Ruby Hospital)",
    date: "9 September 2026",
    badge: "Clinical Engineering Interview",
    location: "Google Meet (Virtual)",
    attendees: "Allan Rodin Gidoi (Biomedical Engineer, Ruby Hospital) & Team Avron",
    description: "Virtual stakeholder interview meeting conducted via Google Meet with Biomedical Engineer Allan Rodin Gidoi from Ruby Hospital Kampala. The session focused on medical device maintenance, spare parts sourcing, and low-resource healthcare needs."
  },
  {
    id: "gallery-meeting-online-progress",
    url: "./gallery/managerial_online_meeting_1.jpg",
    category: "Meetings",
    title: "Team Avron Weekly Virtual Progress Meeting",
    date: "October 2026",
    badge: "Managerial Report Figure 2",
    location: "Google Meet (Online)",
    attendees: "Ebamu Misaki, Angel Ruth Nassanga, Hope Jibril Tusubila, Mercy Nabusiita",
    description: "Weekly internal team progress and sprint coordination meeting held online via Google Meet (featuring Ebamu Misaki, Angel Ruth Nassanga, Hope Jibril, and Mercy Nabusiita) as documented in Section 3.3 (Figure 2) of the Managerial Report."
  },
  {
    id: "gallery-meeting-online-review",
    url: "./gallery/managerial_online_meeting_2.jpg",
    category: "Meetings",
    title: "Milestone Alignment & Problem Statement Review",
    date: "October 2026",
    badge: "Managerial Report Figure 2",
    location: "Google Meet (Online)",
    attendees: "Ebamu Misaki, Angel Ruth Nassanga, Hope Jibril Tusubila, Mercy Nabusiita",
    description: "Online milestone sync on Google Meet reviewing refined problem statements, criteria of success metrics, and presentation slide assignments as documented in Section 3.3 (Figure 2) of the Managerial Report."
  },
  {
    id: "gallery-meeting-comms-platform",
    url: "./gallery/managerial_team_communication.jpg",
    category: "Meetings",
    title: "Team Communication & Meeting Logistics Platform",
    date: "Semester 2026",
    badge: "Managerial Report Figure 3",
    location: "WhatsApp Official Coordination Group",
    attendees: "Team Avron Members & Project Leads",
    description: "Team Avron's primary coordination platform on WhatsApp used for scheduling meetings, sending calendar invitations, coordinating agendas, and sharing meeting minutes as documented in Section 3.5 (Figure 3) of the Managerial Report."
  },
  {
    id: "gallery-research-hmw-ideation-overview",
    url: "./gallery/hmw_ideation_overview.jpeg",
    category: "Research",
    title: "HMW Concept Generation & Ideation Workshop",
    date: "30/10/2026",
    badge: "HMW Ideation Session",
    location: "Design Cube, Makerere University College of Health Sciences",
    attendees: "Team Avron (Ebamu Misaki, Angel Ruth Nassanga, Mercy Nabusiita, Hope Jibril Tusubila)",
    description: "Hands-on ideation session held on 30/10/2026 in the Design Cube at Makerere University College of Health Sciences. Team Avron gathered around the design workbench mapping out 'How Might We' (HMW) challenge questions on large flipcharts to transition from problem statements into tangible assistive device concepts."
  },
  {
    id: "gallery-research-hmw-question-drafting",
    url: "./gallery/hmw_ideation_drafting.jpeg",
    category: "Research",
    title: "Drafting 'How Might We' (HMW) Core Questions",
    date: "30/10/2026",
    badge: "HMW Formulation",
    location: "Design Cube, Makerere University College of Health Sciences",
    attendees: "Mercy Nabusiita, Angel Ruth Nassanga, Hope Jibril Tusubila, Ebamu Misaki",
    description: "Team Avron systematically formulating and recording HMW challenge statements on poster paper. Topics focused on real-time obstacle alert modalities, wearable sensor positioning, power optimization, and weather-resistant enclosures for low-resource environments."
  },
  {
    id: "gallery-research-hmw-criteria-alignment",
    url: "./gallery/hmw_ideation_criteria.jpeg",
    category: "Research",
    title: "Criteria of Success & Technical Specs Alignment",
    date: "30/10/2026",
    badge: "Criteria Benchmarks",
    location: "Design Cube, Makerere University College of Health Sciences",
    attendees: "Hope Jibril Tusubila, Mercy Nabusiita, Angel Ruth Nassanga, Ebamu Misaki",
    description: "Aligning creative HMW concept generation with strict engineering Criteria of Success: 0.3 m to 3.0 m detection range, ≤300 ms haptic latency, ≥120° coverage, ≥8 hours battery life, and high detection reliability (≥90%) in diverse outdoor lighting and weather conditions."
  },
  {
    id: "gallery-research-hmw-architectural-debate",
    url: "./gallery/hmw_ideation_discussion.jpeg",
    category: "Research",
    title: "Concept Exploration & Design Trade-Offs",
    date: "30/10/2026",
    badge: "Concept Generation",
    location: "Design Cube, Makerere University College of Health Sciences",
    attendees: "Angel Ruth Nassanga, Mercy Nabusiita, Ebamu Misaki, Hope Jibril Tusubila",
    description: "Interactive debate and trade-off analysis evaluating different assistive device form factors: chest harness mount vs. smart belt vs. cane-clip attachment, prioritizing ergonomic comfort and intuitive directional vibration cues."
  },
  {
    id: "gallery-research-hmw-cube-workshop",
    url: "./gallery/hmw_ideation_synthesis.jpeg",
    category: "Research",
    title: "HMW Clustering in the MakCHS Design Cube",
    date: "30/10/2026",
    badge: "Design Cube MakCHS",
    location: "Design Cube, Makerere University College of Health Sciences",
    attendees: "Team Avron Members",
    description: "Sprint session inside the Makerere University College of Health Sciences (MakCHS) Design Cube lab facility, clustering ideation prompts into subsystem work packages: sensor array, microcontroller processing, haptic actuators, and battery charging."
  },
  {
    id: "gallery-research-hmw-concept-prioritization",
    url: "./gallery/hmw_ideation_prioritization.jpeg",
    category: "Research",
    title: "Concept Prioritization & Sprint Wrap-Up",
    date: "30/10/2026",
    badge: "Concept Prioritization",
    location: "Design Cube, Makerere University College of Health Sciences",
    attendees: "Ebamu Misaki, Angel Ruth Nassanga, Mercy Nabusiita, Hope Jibril Tusubila",
    description: "Synthesizing shortlisted concept architectures generated during the 30/10/2026 HMW sprint at MakCHS. Establishing milestones for CAD prototype drafting, circuit component selection, and upcoming supervisor review."
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

/**
 * Central site data for FEEM (Female Empowerment Initiative)
 * Contains all text, metadata, contacts, social links, events, and blog posts
 * from the original site.
 */

export const siteConfig = {
  name: "Female Empowerment Initiative",
  shortName: "FEEM",
  tagline: "For The Good Of All.",
  description: "Female Empowerment Initiative (FEEM) causes a positive impact in society through women both young and old, investing in education, reproductive health, and leadership.",
  url: "https://www.feeminitiative.org",
  logo: "/assets/images/feem-logo.webp",
  phone: "+233240390854",
  email: "feeminitiative766@gmail.com",
  location: "Ghana, West Africa",
  socials: {
    twitter: "https://x.com/feem_initiative/",
    linkedin: "https://www.linkedin.com/company/female-empowerment-feem-initiative/",
    tiktok: "https://www.tiktok.com/@female.empowermen70?_t=8sEVbffMgBs&_r=1",
    facebook: "#",
    instagram: "#"
  }
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "What We Do", path: "/what" },
  { name: "Programs", path: "/programs" },
  { name: "Resources", path: "/resources" },
  { name: "Gallery", path: "/gallery" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Donate", path: "/donate", isHighlight: true },
  { name: "Contact Us", path: "/contact" }
];

export const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "What We Do", path: "/what" },
  { name: "Programs & Activities", path: "/programs" },
  { name: "Resources & Research", path: "/resources" },
  { name: "Events & News", path: "/events" },
  { name: "Photo Gallery", path: "/gallery" },
  { name: "Impact Stories", path: "/stories" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Make a Donation", path: "/donate" },
  { name: "Become a Partner", path: "/partnership" },
  { name: "Contact Us", path: "/contact" }
];

export const coreValues = [
  {
    title: "Respect",
    image: "/assets/images/respect.webp",
    description: "We value the dignity, voice, and autonomy of every woman and girl we serve."
  },
  {
    title: "Accountability",
    image: "/assets/images/accountability.webp",
    description: "We operate with utmost transparency and responsibility to our community and partners."
  },
  {
    title: "Partnership",
    image: "/assets/images/partnership.webp",
    description: "We believe in collective power, joining hands with schools, communities, and global allies."
  },
  {
    title: "Humanity",
    image: "/assets/images/humanity.webp",
    description: "Empathy, care, and compassion form the core foundation of our social impact interventions."
  },
  {
    title: "Service",
    image: "/assets/images/service.webp",
    description: "Committed dedication to uplifting vulnerable households and creating sustainable pathways."
  },
  {
    title: "Leadership",
    image: "/assets/images/leaders.webp",
    description: "Nurturing bold, ethical leaders equipped with confidence to champion generational change."
  }
];

export const mentors = [
  {
    name: "Professor Penny Jane Burke",
    role: "Global Advisory Mentor",
    image: "/assets/images/mentors1.webp",
    description: "Global Innovation Chair of Equity and Director of the Centre of Excellence for Equity in Higher Education at the University of Newcastle, Australia. Renowned for pioneering equity frameworks globally."
  },
  {
    name: "Prof. David Teye Doku",
    role: "Public Health & Research Mentor",
    image: "/assets/images/mentors2.webp",
    description: "Professor of Public Health at the University of Cape Coast, Ghana. A leading researcher in adolescent health, epidemiology, and community interventions across West Africa."
  },
  {
    name: "Ms. Lauren St. Pierre",
    role: "Education & Mentorship Advisor",
    image: "/assets/images/mentors3.webp",
    description: "Dedicated educator, mentor, and global community advocate passionate about adolescent girl empowerment, educational access, and lifelong mentorship networks."
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: "importance-of-education-for-girls",
    title: "Empowering Girls Through Education: Breaking Cycles of Poverty",
    date: "March 20, 2024",
    image: "/assets/images/new-blog1.webp",
    excerpt: "Highlighting the importance of education for girls, exploring challenges faced globally such as cultural barriers, poverty, and lack of access.",
    content: "Education is a fundamental human right that opens doors to endless opportunities. When a girl receives quality education, the benefits ripple outward: maternal and infant mortality rates plummet, household economic security rises, and communities thrive. In Ghana, while significant progress has been made, adolescent girls in rural settings still grapple with economic bottlenecks, domestic burdens, and distance to senior high schools. FEEM actively addresses these barriers through mentorship, scholarships, and family sensitization dialogues."
  },
  {
    id: 2,
    slug: "menstrual-health-school-attendance",
    title: "Menstrual Dignity: Keeping Girls in School One Pad at a Time",
    date: "April 5, 2024",
    image: "/assets/images/new-blog2.webp",
    excerpt: "Discussing the impact of menstrual health on school attendance and participation, highlighting our Pads for Progress distribution programs.",
    content: "Period poverty continues to be a silent driver of school absenteeism across many communities in Ghana. Without access to affordable menstrual products, clean water, and private sanitation, girls miss several school days each month, eventually falling behind and dropping out. FEEM's Pads for Progress distributes free sanitary towels, delivers stigma-shattering reproductive health lessons, and advocates for tax-free menstrual products across Ghana."
  },
  {
    id: 3,
    slug: "nurturing-self-confidence-young-girls",
    title: "Building Self-Esteem: Unleashing Inner Conviction in Adolescent Girls",
    date: "April 15, 2024",
    image: "/assets/images/home2.webp",
    excerpt: "Focusing on initiatives that nurture self-confidence in young girls through testimonials from mentorship programs and leadership circles.",
    content: "Self-esteem is having a strong level of confidence and inner conviction in your abilities and worth. When girls struggle with low self-esteem, they become vulnerable to exploitation, coercion, and self-limiting beliefs. Through our Building Esteem school workshops, FEEM equips young women to discover their unique strengths, resist toxic peer pressures, speak confidently, and envision expansive futures."
  },
  {
    id: 4,
    slug: "challenging-gender-norms-grassroots",
    title: "Grassroots Champions: Challenging Gender Norms for True Equality",
    date: "May 2, 2024",
    image: "/assets/images/event2.webp",
    excerpt: "Examining grassroots efforts to challenge gender norms, promote equality, and share inspiring stories of community champions.",
    content: "Gender equality cannot be achieved from behind a desk; it requires patient, grassroots dialogue with mothers, traditional authorities, teachers, and boys. In communities across the Central and Upper East regions, FEEM convenes inter-generational townhalls where harmful stereotypes are deconstructed and the invaluable contributions of women are celebrated."
  }
];

export const eventsList = [
  {
    id: 1,
    title: "Empowering Her Future: Soap & Bead-Making Workshop",
    date: "March 20, 2024",
    location: "Ekon, Central Region",
    speaker: "Akos",
    image: "/assets/images/act1.webp",
    description: "Sparking creativity and practical vocational skills through soap and bead-making sessions—crafting opportunities and micro-livelihoods, one masterpiece at a time! 🧼📿"
  },
  {
    id: 2,
    title: "Annual Charity Outreach: Feo Community",
    date: "November 25, 2024",
    location: "Feo, Bongo District, Upper East Region",
    speaker: "FEEM Executive Team & Community Elders",
    image: "/assets/images/bongo.webp",
    description: "Annual field outreach delivering educational kits, school uniforms, and community health forums to vulnerable adolescent girls and young mothers in the Upper East Region."
  },
  {
    id: 3,
    title: "International Menstrual Hygiene Day Commemoration",
    date: "May 28, 2024",
    location: "Cape Coast Metropolitan Schools",
    speaker: "Dr. Health Advocates & Peer Educators",
    image: "/assets/images/event.webp",
    description: "A dynamic gathering uniting students, teachers, and health professionals for frank reproductive health discussions and mass distribution of menstrual hygiene kits."
  },
  {
    id: 4,
    title: "Pads for Progress Distribution Drive",
    date: "Quarterly Outreach",
    location: "Selected Basic & Junior High Schools",
    speaker: "FEEM Volunteer Corps",
    image: "/assets/images/img1.webp",
    description: "Supporting dignity and health—one pad at a time, empowering adolescent girls to attend school consistently throughout their menstrual cycle."
  },
  {
    id: 5,
    title: "Ending Early Marriages Advocacy Forum",
    date: "Ongoing Community Initiative",
    location: "Community Centers & Faith Sanctuaries",
    speaker: "Community Leaders & Gender Advocates",
    image: "/assets/images/img2.webp",
    description: "Advocating fiercely to protect girls' rights, keep them enrolled in secondary school, and build supportive community safety nets against child and early marriage."
  }
];


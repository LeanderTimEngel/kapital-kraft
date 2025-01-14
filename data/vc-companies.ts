export interface VCCompany {
  id: string;
  name: string;
  logo: string;
  description: string;
  location: string;
  founded?: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
  investmentFocus?: string[];
  teamSize?: string;
  portfolioSize?: string;
}

export const vcCompanies: VCCompany[] = [
  {
    id: "htgf",
    name: "High-Tech Gründerfonds",
    logo: "/logos/htgf.png",
    description: "Seed-Investor für innovative Technologieunternehmen",
    location: "Bonn, Deutschland",
    founded: "2005",
    website: "https://www.htgf.de/",
    linkedin: "https://www.linkedin.com/company/high-tech-grnderfonds/",
    twitter: "https://twitter.com/htgf",
    investmentFocus: ["Software", "Medizintechnik", "Chemie", "Industrielle Technologie"],
    teamSize: "50+",
    portfolioSize: "600+"
  },
  {
    id: "earlybird",
    name: "Earlybird Venture Capital",
    logo: "/logos/earlybird.png",
    description: "Europäischer Venture-Capital-Investor für Technologie-Innovatoren",
    location: "Berlin, München, Deutschland",
    founded: "1997",
    website: "https://earlybird.com/",
    linkedin: "https://www.linkedin.com/company/earlybird-venture-capital/",
    twitter: "https://twitter.com/EarlybirdVC",
    investmentFocus: ["Enterprise Software", "FinTech", "AI", "Mobility"],
    teamSize: "40+",
    portfolioSize: "200+"
  },
  {
    id: "projecta",
    name: "Project A Ventures",
    logo: "/logos/projecta.png",
    description: "Venture-Capital-Firma mit operativem Fokus",
    location: "Berlin, Deutschland",
    founded: "2012",
    website: "https://www.project-a.com/",
    linkedin: "https://www.linkedin.com/company/project-a-ventures/",
    twitter: "https://twitter.com/ProjectAcom",
    investmentFocus: ["Digital Platforms", "SaaS", "E-Commerce", "Infrastructure"],
    teamSize: "100+",
    portfolioSize: "70+"
  },
  {
    id: "lakestar",
    name: "Lakestar",
    logo: "/logos/lakestar.png",
    description: "Globaler Venture-Capital-Investor für Technologieunternehmen",
    location: "Zürich, Schweiz",
    founded: "2012",
    website: "https://www.lakestar.com/",
    linkedin: "https://www.linkedin.com/company/lakestar/",
    twitter: "https://twitter.com/LakestarVC",
    investmentFocus: ["FinTech", "PropTech", "Travel", "Digital Health"],
    teamSize: "30+",
    portfolioSize: "100+"
  },
  {
    id: "holtzbrinck",
    name: "Holtzbrinck Ventures",
    logo: "/logos/holtzbrinck.png",
    description: "Führender europäischer Frühphasen-Venture-Capital-Investor",
    location: "München, Deutschland",
    founded: "2000",
    website: "https://www.holtzbrinck-ventures.com/",
    linkedin: "https://www.linkedin.com/company/holtzbrinck-ventures/",
    twitter: "https://twitter.com/HVentures",
    investmentFocus: ["Consumer Internet", "SaaS", "Digital Media", "Mobile"],
    teamSize: "20+",
    portfolioSize: "160+"
  },
  {
    id: "acton",
    name: "Acton Capital",
    logo: "/logos/acton.png",
    description: "Venture-Capital-Firma mit Fokus auf wachstumsstarke Digitalunternehmen",
    location: "München, Deutschland",
    founded: "1999",
    website: "https://www.actoncapital.com/",
    linkedin: "https://www.linkedin.com/company/acton-capital-partners/",
    twitter: "https://twitter.com/ActonCapital",
    investmentFocus: ["Digital Marketplaces", "SaaS", "Consumer Internet", "Digital Health"],
    teamSize: "15+",
    portfolioSize: "80+"
  },
  {
    id: "btov",
    name: "btov Partners",
    logo: "/logos/btov.png",
    description: "Europäischer Venture-Capital-Investor mit Fokus auf digitale und industrielle Technologien",
    location: "Berlin, St. Gallen, Luxemburg",
    founded: "2000",
    website: "https://btov.vc/",
    linkedin: "https://www.linkedin.com/company/btov-partners/",
    twitter: "https://twitter.com/btovPartners",
    investmentFocus: ["Digital Tech", "Industrial Tech", "Life Sciences"],
    teamSize: "30+",
    portfolioSize: "120+"
  },
  {
    id: "speedinvest",
    name: "Speedinvest",
    logo: "/logos/speedinvest.png",
    description: "Paneuropäischer Frühphasen-Venture-Capital-Fonds",
    location: "Wien, Berlin, London, München, Paris",
    founded: "2011",
    website: "https://www.speedinvest.com/",
    linkedin: "https://www.linkedin.com/company/speedinvest/",
    twitter: "https://twitter.com/speedinvest",
    investmentFocus: ["FinTech", "Deep Tech", "Industrial Tech", "Health"],
    teamSize: "100+",
    portfolioSize: "250+"
  },
  {
    id: "cherry",
    name: "Cherry Ventures",
    logo: "/logos/cherry.png",
    description: "Frühphasen-Venture-Capital-Firma mit Fokus auf Europa",
    location: "Berlin, Deutschland",
    founded: "2013",
    website: "https://www.cherry.vc/",
    linkedin: "https://www.linkedin.com/company/cherry-ventures/",
    twitter: "https://twitter.com/cherryventures",
    investmentFocus: ["Consumer", "B2B", "Deep Tech"],
    teamSize: "20+",
    portfolioSize: "70+"
  },
  {
    id: "point9",
    name: "Point Nine",
    logo: "/logos/point9.png",
    description: "Frühphasen-Venture-Capital-Firma mit Fokus auf B2B SaaS und Marketplaces",
    location: "Berlin, Deutschland",
    founded: "2011",
    website: "https://www.point9.com/",
    linkedin: "https://www.linkedin.com/company/point-nine-capital/",
    twitter: "https://twitter.com/point9capital",
    investmentFocus: ["B2B SaaS", "Marketplaces", "Web3"],
    teamSize: "15+",
    portfolioSize: "150+"
  }
];


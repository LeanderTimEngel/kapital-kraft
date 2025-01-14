export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  type: string;
  logo: string;
  salary: string;
  posted: string;
  startDate: string;
  applyLink: string;
  companyId: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    companyId: "htgf",
    company: "High-Tech Gründerfonds",
    title: "Investmentanalyst",
    location: "Berlin, Deutschland",
    type: "Vollzeit",
    logo: "/logos/htgf.png",
    salary: "60.000€ - 80.000€",
    posted: "2025-01-02",
    startDate: "2025-03-01",
    applyLink: "https://www.htgf.de/de/karriere/"
  },
  {
    id: "2",
    companyId: "earlybird",
    company: "Earlybird Venture Capital",
    title: "Associate",
    location: "München, Deutschland",
    type: "Vollzeit",
    logo: "/logos/earlybird.png",
    salary: "70.000€ - 90.000€",
    posted: "2025-01-01",
    startDate: "2025-02-15",
    applyLink: "https://earlybird.com/jobs/"
  },
  {
    id: "3",
    companyId: "projecta",
    company: "Project A Ventures",
    title: "Praktikant",
    location: "Berlin, Deutschland",
    type: "Praktikum",
    logo: "/logos/projecta.png",
    salary: "1.500€ - 2.000€/Monat",
    posted: "2025-01-03",
    startDate: "2025-04-01",
    applyLink: "https://www.project-a.com/careers"
  },
  {
    id: "4",
    companyId: "lakestar",
    company: "Lakestar",
    title: "Principal",
    location: "Zürich, Schweiz",
    type: "Vollzeit",
    logo: "/logos/lakestar.png",
    salary: "120.000€ - 150.000€",
    posted: "2025-01-04",
    startDate: "2025-03-15",
    applyLink: "https://www.lakestar.com/careers"
  },
  {
    id: "5",
    companyId: "holtzbrinck",
    company: "Holtzbrinck Ventures",
    title: "Senior Investment Manager",
    location: "München, Deutschland",
    type: "Vollzeit",
    logo: "/logos/holtzbrinck.png",
    salary: "100.000€ - 130.000€",
    posted: "2025-01-05",
    startDate: "2025-04-01",
    applyLink: "https://www.holtzbrinck-ventures.com/careers"
  },
  {
    id: "6",
    companyId: "acton",
    company: "Acton Capital",
    title: "Investment Associate",
    location: "München, Deutschland",
    type: "Vollzeit",
    logo: "/logos/acton.png",
    salary: "65.000€ - 85.000€",
    posted: "2025-01-06",
    startDate: "2025-03-01",
    applyLink: "https://www.actoncapital.com/careers"
  },
  {
    id: "7",
    companyId: "btov",
    company: "btov Partners",
    title: "Venture Partner",
    location: "Berlin, Deutschland",
    type: "Vollzeit",
    logo: "/logos/btov.png",
    salary: "100.000€ - 140.000€",
    posted: "2025-01-07",
    startDate: "2025-05-01",
    applyLink: "https://btov.vc/careers/"
  },
  {
    id: "8",
    companyId: "speedinvest",
    company: "Speedinvest",
    title: "Investment Manager",
    location: "Wien, Österreich",
    type: "Vollzeit",
    logo: "/logos/speedinvest.png",
    salary: "80.000€ - 110.000€",
    posted: "2025-01-08",
    startDate: "2025-04-15",
    applyLink: "https://www.speedinvest.com/jobs"
  },
  {
    id: "9",
    companyId: "cherry",
    company: "Cherry Ventures",
    title: "Analyst",
    location: "Berlin, Deutschland",
    type: "Vollzeit",
    logo: "/logos/cherry.png",
    salary: "55.000€ - 75.000€",
    posted: "2025-01-09",
    startDate: "2025-03-01",
    applyLink: "https://www.cherry.vc/jobs"
  },
  {
    id: "10",
    companyId: "point9",
    company: "Point Nine",
    title: "Associate",
    location: "Berlin, Deutschland",
    type: "Vollzeit",
    logo: "/logos/point9.png",
    salary: "70.000€ - 90.000€",
    posted: "2025-01-10",
    startDate: "2025-05-01",
    applyLink: "https://www.point9.com/jobs"
  },
  {
    id: "11",
    companyId: "earlybird",
    company: "Earlybird Venture Capital",
    title: "Praktikant VC",
    location: "Berlin, Deutschland",
    type: "Praktikum",
    logo: "/logos/earlybird.png",
    salary: "1.800€ - 2.200€/Monat",
    posted: "2025-01-11",
    startDate: "2025-06-01",
    applyLink: "https://earlybird.com/jobs/"
  },
  {
    id: "12",
    companyId: "projecta",
    company: "Project A Ventures",
    title: "Senior Associate",
    location: "Berlin, Deutschland",
    type: "Vollzeit",
    logo: "/logos/projecta.png",
    salary: "90.000€ - 120.000€",
    posted: "2025-01-12",
    startDate: "2025-04-15",
    applyLink: "https://www.project-a.com/careers"
  },
  {
    id: "13",
    companyId: "lakestar",
    company: "Lakestar",
    title: "Investment Manager",
    location: "München, Deutschland",
    type: "Vollzeit",
    logo: "/logos/lakestar.png",
    salary: "100.000€ - 130.000€",
    posted: "2025-01-13",
    startDate: "2025-05-01",
    applyLink: "https://www.lakestar.com/careers"
  },
  {
    id: "14",
    companyId: "speedinvest",
    company: "Speedinvest",
    title: "Praktikant FinTech",
    location: "München, Deutschland",
    type: "Praktikum",
    logo: "/logos/speedinvest.png",
    salary: "1.600€ - 2.000€/Monat",
    posted: "2025-01-14",
    startDate: "2025-07-01",
    applyLink: "https://www.speedinvest.com/jobs"
  },
  {
    id: "15",
    companyId: "cherry",
    company: "Cherry Ventures",
    title: "Investment Manager",
    location: "Berlin, Deutschland",
    type: "Vollzeit",
    logo: "/logos/cherry.png",
    salary: "85.000€ - 115.000€",
    posted: "2025-01-15",
    startDate: "2025-04-01",
    applyLink: "https://www.cherry.vc/jobs"
  }
];


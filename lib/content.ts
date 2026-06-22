/**
 * Single source of truth for site copy and links.
 *
 * Factual content is derived from https://www.ebovir.ca/ (extracted June 2026).
 * Items that could NOT be confirmed on ebovir.ca are flagged with
 * `needsConfirmation: true` and use neutral placeholder wording.
 */

export const site = {
  name: "Ebovir Biotechnologie Inc.",
  shortName: "Ebovir",
  tagline: "The Precision Health Company",
  // Confirmed on ebovir.ca:
  legalTagline: "Your Partner in Precision Medicine for a Better Future",
  description:
    "Ebovir Biotechnologie Inc. is a precision-health biotechnology platform in the Greater Montreal area, connecting genetic science, molecular diagnostics, AI health intelligence, and personalized wellness.",
  founded: "2021",
} as const;

export const links = {
  eboGenesStore: "https://ebogenes.com",
  eboScience: "https://eboscience.com",
  eboMedAi: "https://www.e-ai.ca",
  ebovirSite: "https://www.ebovir.ca",
  contact: "/contact",
  science: "/our-science",
  company: "/our-company",
  platforms: "/platforms",
  businessAreas: "/business-areas",
  products: "/products",
  medicalCenter: "/medical-center",
  news: "/news",
  home: "/",
} as const;

/* ------------------------------------------------------------------ */
/* NAVIGATION — layered corporate structure                            */
/* A single source of truth for the top navigation: top-level items,   */
/* dropdown panels (with optional descriptions), and the Products &    */
/* Solutions three-column mega menu, grouped by audience.              */
/* ------------------------------------------------------------------ */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  icon?: string;
}
export interface NavColumn {
  title: string;
  items: NavLink[];
}
export interface NavNode {
  label: string;
  href: string;
  /** Panel layout: "list" = compact links, "rich" = links + descriptions, "cards" = 2x2 portal cards, "mega" = audience columns. */
  panel?: "list" | "rich" | "cards" | "mega";
  /** Horizontal alignment of the dropdown panel (defaults to left). */
  align?: "left" | "right";
  children?: NavLink[];
  columns?: NavColumn[];
}

export const mainNav: NavNode[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/our-company",
    panel: "list",
    children: [
      { label: "About EBOVIR", href: "/our-company" },
      { label: "Mission & Vision", href: "/our-company#mission-vision" },
      { label: "Facilities & Labs", href: "/our-company#facilities" },
      { label: "Leadership & Team", href: "/our-company#team" },
      { label: "Quality & Compliance", href: "/our-company#quality" },
    ],
  },
  {
    // Platforms = the four actual public-facing EBOVIR platforms / portals.
    label: "Platforms",
    href: "/platforms",
    panel: "cards",
    children: [
      {
        label: "EboGenes",
        href: "/platforms#ebogenes",
        description: "Genetic health & testing platform.",
        icon: "dna",
      },
      {
        label: "EboScience",
        href: "/platforms#eboscience",
        description: "Exosome biotechnology, skincare & wellness platform.",
        icon: "molecule",
      },
      {
        label: "EboMed AI",
        href: "/platforms#ebomed-ai",
        description: "AI health intelligence and genomic interpretation platform.",
        icon: "ai",
      },
      {
        label: "EBOVIR Lab",
        href: "/platforms#ebovir-lab",
        description: "Diagnostics, CRO services, and translational research platform.",
        icon: "lab",
      },
    ],
  },
  {
    // Business Areas = applied strategic business directions.
    label: "Business Areas",
    href: "/business-areas",
    panel: "rich",
    children: [
      {
        label: "Precision Diagnostics & Omics",
        href: "/business-areas#precision-diagnostics",
        description: "Testing, screening, and omics insights.",
      },
      {
        label: "AI Healthcare",
        href: "/business-areas#ai-healthcare",
        description: "AI interpretation and intelligent reports.",
      },
      {
        label: "Regenerative Medicine",
        href: "/business-areas#regenerative-medicine",
        description: "Cell research and regenerative biotechnology.",
      },
      {
        label: "RNA/LNP Drug Development",
        href: "/business-areas#rna-lnp",
        description: "RNA therapeutics and LNP delivery.",
      },
      {
        label: "Exosome & Aesthetic Biotechnology",
        href: "/business-areas#exosome-aesthetic",
        description: "Exosome ingredients and aesthetic applications.",
      },
      {
        label: "Premium Medical Center",
        href: "/business-areas#premium-medical",
        description: "Precision health and premium services.",
      },
    ],
  },
  {
    // Products & Solutions = concrete offerings and conversion paths.
    label: "Products & Solutions",
    href: "/products",
    panel: "mega",
    columns: [
      {
        title: "For Researchers & Industry",
        items: [
          { label: "EBOVIR Lab Services", href: "/our-science#services" },
          { label: "RNA/LNP Development", href: "/business-areas#rna-lnp" },
          { label: "Exosome Ingredients", href: "/products" },
          { label: "Research Collaboration", href: "/contact#partnership" },
        ],
      },
      {
        title: "For Clinics & Healthcare Partners",
        items: [
          { label: "Genetic Testing", href: "/business-areas#precision-diagnostics" },
          { label: "Early Cancer Screening", href: "/business-areas#precision-diagnostics" },
          { label: "Liquid Biopsy", href: "/business-areas#precision-diagnostics" },
          { label: "Molecular Diagnostics", href: "/business-areas#precision-diagnostics" },
          { label: "AI Genetic Reports", href: "/business-areas#ai-healthcare" },
        ],
      },
      {
        title: "For Personalized Health",
        items: [
          { label: "EboGenes Testing", href: links.eboGenesStore, external: true },
          { label: "EboScience Products", href: links.eboScience, external: true },
          { label: "EboMed AI Consultant", href: links.eboMedAi, external: true },
          { label: "Medical Center Services", href: "/medical-center" },
        ],
      },
    ],
  },
  {
    label: "Medical Center",
    href: "/medical-center",
    panel: "list",
    align: "right",
    children: [
      { label: "Overview", href: "/medical-center" },
      { label: "Precision Health Management", href: "/medical-center#precision-health" },
      { label: "Advanced Diagnostics", href: "/medical-center#advanced-diagnostics" },
      { label: "Personalized Consultation", href: "/medical-center#consultation" },
      { label: "Membership Services", href: "/medical-center#membership" },
      { label: "Book a Consultation", href: "/medical-center#book" },
    ],
  },
];

/** Compact top-level list reused by the footer. */
export const nav = mainNav.map((n) => ({ label: n.label, href: n.href }));

export const contact = {
  // All confirmed on ebovir.ca
  emails: ["info@ebovir.ca", "testcenter@ebovir.ca"],
  phones: ["+1 450-688-8377 ext. 2209", "+1 514-980-0168"],
  address: {
    line1: "117-500 Boulevard Cartier Ouest",
    line2: "Laval, Québec, H7V 5B7",
    country: "Canada",
  },
  region: "Greater Montreal Area, Québec, Canada",
} as const;

/* ------------------------------------------------------------------ */
/* HOME — Hero                                                          */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Precision Health · Genomics · AI",
  heading: "The Precision Health Company",
  // Built only from confirmed ebovir.ca facts (AI-powered precision medicine,
  // genomics, early cancer screening, Montreal, founded 2021 / McGill).
  subheading:
    "Connecting genomics, molecular diagnostics, and AI to make precision health personal.",
  primaryCta: { label: "Explore Our Science", href: "/our-science" },
  secondaryCta: { label: "View Our Products", href: links.products },
} as const;

/* Headline stats band (template3-style) — all confirmed on ebovir.ca */
export const stats = [
  { value: "2021", label: "Founded · McGill-incubated" },
  { value: "BSL-2/3", label: "Laboratory biosafety capability" },
  { value: "WGS", label: "Whole genome sequencing" },
  { value: "Top 10", label: "Canada Therapeutic Companies, 2024" },
] as const;

/* ------------------------------------------------------------------ */
/* HOME — Mission & Vision                                              */
/* ------------------------------------------------------------------ */
export const mission = {
  eyebrow: "Mission & Vision",
  heading: "Bringing precision to the science of better health",
  // Short line for the homepage; full paragraph kept for subpages.
  shortBody:
    "AI-powered precision medicine, grounded in real laboratory science.",
  // Paraphrased from ebovir.ca mission pillars.
  body: "Ebovir was founded in 2021 and incubated from McGill University with a clear purpose: to make precision medicine more accurate, more personal, and more accessible. We pair advanced molecular biology with AI-driven analysis to help people and partners understand health at the level of the genome.",
  pillars: [
    {
      title: "Innovation-Driven",
      short: "Cutting-edge AI, genetics, and diagnostics.",
      // verbatim source idea from ebovir.ca
      body: "We develop and apply cutting-edge AI-powered analysis, genetic screening, and advanced diagnostics to deliver safe, effective, personalized solutions.",
    },
    {
      title: "Precision Medicine",
      short: "Accurate, personalized prevention and care.",
      body: "Through AI-integrated genomic testing and early cancer screening, we work to improve the accuracy of disease prevention and personalized care.",
    },
    {
      title: "Clinical Translation",
      short: "One-stop CRO platform for biopharma.",
      body: "Our one-stop CRO platform supports biopharma companies and research institutions in accelerating new therapeutics and diagnostics.",
    },
    {
      title: "Global Collaboration",
      short: "Partnerships advancing precision medicine worldwide.",
      body: "We partner with research institutions, medical centers, and biopharmaceutical companies to advance precision medicine internationally.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* HOME — The Science Behind Precision Health                          */
/* ------------------------------------------------------------------ */
export const scienceCards = {
  eyebrow: "Our Science",
  heading: "The science behind precision health",
  // Short subtitle for the homepage; full body kept for subpages.
  shortBody:
    "Lab molecular science, genome-scale data, and AI — in one platform.",
  body: "Precision health begins with reading biology accurately. Ebovir combines laboratory molecular science, genome-scale data, and AI interpretation to turn complex biology into clear, actionable insight.",
  cards: [
    {
      title: "Molecular Biology",
      short: "Virology research, preclinical development, exosomes & LNPs.",
      // Confirmed: virology research, preclinical drug development, exosomes/LNPs
      body: "A foundation in virology research and preclinical drug development, with work spanning exosomes and lipid nanoparticles (LNPs) for next-generation wellness products.",
      icon: "molecule",
    },
    {
      title: "Genetic Intelligence",
      short: "Whole genome sequencing & early cancer screening.",
      // Confirmed: WGS + early cancer screening
      body: "Whole Genome Sequencing (WGS) and early cancer screening to identify genetic variants relevant to health, prevention, and personalized wellness.",
      icon: "dna",
    },
    {
      title: "AI Interpretation",
      short: "Turning genomic data into clear health intelligence.",
      // Confirmed: "AI-powered precision medicine", "AI-integrated genomic testing"
      body: "AI-powered analysis that helps translate genomic and molecular data into structured, understandable health intelligence.",
      icon: "ai",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* HOME — Integrated Biotechnology Ecosystem                          */
/* ------------------------------------------------------------------ */
/**
 * Brand architecture / ecosystem map (NOT a technology-platform list).
 * EBOVIR is the parent platform; the four cards are existing public-facing
 * brands / portals — the main entry points into the ecosystem.
 * Keep card copy to a single short tag; technical depth lives in
 * `platformsDetail` and applied markets live in `businessAreas`.
 */
export const ecosystem = {
  eyebrow: "The Ecosystem",
  heading: "The EBOVIR Ecosystem",
  subtitle:
    "Four connected entry points across genetic health, exosome biotechnology, AI healthcare, and laboratory services.",
  parent: {
    name: "EBOVIR",
    label: "Integrated Biology, Omics & Intelligent Healthcare Platform",
  },
  cards: [
    {
      id: "ebogenes",
      name: "EboGenes",
      tag: "Genetic health & testing",
      description: "Genetic health & testing platform.",
      blurb:
        "Our consumer genetic-health brand, offering genetic testing products. Ordering is handled through the dedicated EboGenes store.",
      href: links.eboGenesStore,
      external: true,
      icon: "dna",
    },
    {
      id: "eboscience",
      name: "EboScience",
      tag: "Skincare & wellness",
      description: "Exosome biotechnology, skincare & wellness platform.",
      blurb:
        "A biotech skincare and wellness brand applying exosome technology and genetic skin analysis to anti-aging and skin-repair solutions.",
      href: links.eboScience,
      external: true,
      icon: "molecule",
    },
    {
      id: "ebomed-ai",
      name: "EboMed AI",
      tag: "AI health intelligence",
      description: "AI health intelligence and genomic interpretation platform.",
      blurb:
        "An AI health consultant (E-AI Doctor) that helps interpret health and genomic information into clear, accessible guidance.",
      href: links.eboMedAi,
      external: true,
      icon: "ai",
    },
    {
      id: "ebovir-lab",
      name: "EBOVIR Lab",
      tag: "Diagnostics & CRO services",
      description: "Diagnostics, CRO services, and translational research platform.",
      blurb:
        "One of North America's advanced private diagnostic laboratories, with BSL-2 and BSL-3 capabilities supporting virology research and preclinical development.",
      href: links.science,
      external: false,
      icon: "lab",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* HOME — Built on Laboratory Expertise                               */
/* ------------------------------------------------------------------ */
export const labExpertise = {
  eyebrow: "Laboratory Expertise",
  heading: "Built on laboratory expertise",
  body: "Ebovir's science is grounded in real laboratory capability and recognized affiliations within Québec's life-sciences community.",
  // Every point below is confirmed on ebovir.ca.
  points: [
    {
      title: "BSL-2 & BSL-3 capabilities",
      body: "Operating one of North America's advanced private diagnostic laboratories for virology research and preclinical drug development.",
    },
    {
      title: "Incubated from McGill University",
      body: "Founded in 2021 and incubated from McGill University, now located in the CQIB Life Sciences Incubator.",
    },
    {
      title: "Recognized affiliations",
      body: "A member of BioQuébec and RNACanada, within Québec's life-sciences hub.",
    },
    {
      title: "Industry recognition",
      body: "Named one of Canada's Top 10 Therapeutic Companies in 2024, and recommended by Investissement Québec for Asia-Pacific expansion.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* HOME — Who We Serve                                                  */
/* ------------------------------------------------------------------ */
export const audiences = {
  eyebrow: "Who We Serve",
  heading: "Built for everyone advancing precision health",
  body: "From individuals exploring their genetics to institutions running research programs, Ebovir supports a broad community.",
  cards: [
    {
      title: "Patients & Individuals",
      body: "People seeking to understand their genetics and make informed, personalized wellness decisions.",
    },
    {
      title: "Clinics & Health Professionals",
      body: "Practices and clinicians looking to integrate genomic insight and advanced diagnostics into care.",
    },
    {
      title: "Researchers",
      body: "Research teams in need of molecular biology, genomics, and laboratory services.",
    },
    {
      title: "Business Partners",
      body: "Biopharma and industry partners seeking CRO support and collaborative development.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* HOME — Final CTA                                                     */
/* ------------------------------------------------------------------ */
export const finalCta = {
  heading: "Ready to explore precision health?",
  body: "Discover genetic testing through the EboGenes store, or reach out to talk with the Ebovir team.",
  primary: { label: "Visit EboGenes Store", href: links.eboGenesStore },
  secondary: { label: "Contact Ebovir", href: links.contact },
} as const;

/* ------------------------------------------------------------------ */
/* OUR COMPANY — narrative (verbatim copy provided / from ebovir.ca)   */
/* ------------------------------------------------------------------ */
export const company = {
  eyebrow: "Our Company",
  title: "Driving innovation in biotechnology",
  lead: "Ebovir Biotechnologies Inc., headquartered in Montreal, Quebec, was founded in 2021 incubated from McGill University. We are committed to driving innovation in the biotechnology field and has become a key partner to numerous biopharmaceutical companies.",
  paragraphs: [
    "Ebovir locates in the heart of Quebec's life sciences hub — the CQIB Life Sciences Incubator. It is a member of BioQuebec and RNACanada, deeply integrated into Canada's thriving life sciences ecosystem.",
    "Ebovir operates one of North America's most advanced private diagnostic laboratories in Canada (with BSL-2 and BSL-3 capabilities), offering comprehensive services for virology research and preclinical drug development. We focus on early cancer screening and whole genome sequencing (WGS), and is actively developing anti-aging and wellness products based on exosomes and lipid nanoparticles (LNPs).",
    "Investissement Québec has recognized Ebovir as a recommended biotechnology company for Asia-Pacific market expansion, underscoring our potential for global growth.",
    "With significant breakthroughs in the development of antiviral therapies, Ebovir was named one of Canada's Top 10 Therapeutic Companies in 2024, highlighting its strong scientific capabilities.",
    "Powered by world-class research platforms, we accelerate the clinical translation of precision medicine and regenerative technologies while promoting international collaboration.",
  ],
  highlights: [
    { label: "Founded", value: "2021" },
    { label: "Incubated from", value: "McGill University" },
    { label: "Lab capabilities", value: "BSL-2 & BSL-3" },
    { label: "Recognition", value: "Canada Top 10 Therapeutic Co. (2024)" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* OUR COMPANY — Team (names/titles provided by the company)           */
/* ------------------------------------------------------------------ */
export const team = {
  eyebrow: "Our Team",
  heading: "The minds behind Ebovir",
  intro:
    "Meet the innovative minds driving Ebovir's mission to revolutionize biotechnology and advance scientific discovery.",
  sections: [
    {
      title: "Executive Leadership",
      subtitle:
        "Our visionary leaders guiding Ebovir's strategic direction and innovation.",
      members: [
        {
          name: "Dr. Zhenlong Liu",
          role: "Founder & CEO",
          bio: "Visionary leader with extensive experience in biotechnology and business development. Passionate about leveraging cutting-edge science to address global health challenges.",
        },
        {
          name: "Dr. Chen Liang",
          role: "Co-Founder",
          bio: "Senior Investigator, Lady Davis Institute for Medical Research; Professor, Graduate Program in Clinical and Translational Research, McGill University.",
        },
        {
          name: "Dr. Benoit Barbeau",
          role: "Co-Founder",
          bio: "Professor; Associate member of the interdisciplinary research center on well-being, health, society and the environment, University of Quebec in Montreal.",
        },
        {
          name: "Dr. Rongtuan Lin",
          role: "Co-Founder",
          bio: "Senior Investigator, Lady Davis Institute for Medical Research; Associate Professor, Department of Medicine, McGill University.",
        },
      ],
    },
    {
      title: "Advisory Team",
      subtitle:
        "Distinguished experts providing strategic guidance and industry insights.",
      subgroups: [
        {
          title: "Scientific Advisors",
          members: [
            {
              name: "Dr. Chen Liang",
              role: "Scientific Advisor",
              bio: "Senior Investigator, Lady Davis Institute for Medical Research; Professor, Graduate Program in Clinical and Translational Research, McGill University.",
            },
            {
              name: "Guojun Chen",
              role: "Scientific Advisor",
              bio: "Assistant Professor, Department of Biomedical Engineering; Associate Member, Rosalind and Morris Goodman Cancer Institute.",
            },
            {
              name: "Dr. Benoit Barbeau",
              role: "Scientific Advisor",
              bio: "Professor; Associate member of the interdisciplinary research center on well-being, health, society and the environment, University of Quebec in Montreal.",
            },
            {
              name: "Dr. Rongtuan Lin",
              role: "Scientific Advisor",
              bio: "Senior Investigator, Lady Davis Institute for Medical Research; Associate Professor, Department of Medicine, McGill University.",
            },
            {
              name: "Dr. Rob Scarborough",
              role: "Scientific Advisor",
              bio: "Prevention Management and Biosafety Officer, Health, Safety and Well-being in the Workplace (SSMET) service, Administration, Lady Davis Institute for Medical Research.",
            },
          ],
        },
        {
          title: "Medical Advisors",
          members: [
            {
              name: "Dr. Zuhua Gao",
              role: "Medical Advisor",
              bio: "Professor and Department Head, Pathology and Laboratory Medicine; Staff Pathologist and Program Medical Director, Provincial Pathology & Laboratory Medicine, BC Cancer, The University of British Columbia.",
            },
            {
              name: "Dr. Yaning Gao",
              role: "Medical Advisor",
              bio: "Experienced clinician providing medical insights and clinical perspective to guide product development and validation.",
            },
            {
              name: "Dr. Michele Rainville",
              role: "Medical Advisor",
              bio: "Medical expert contributing clinical knowledge and healthcare industry experience to our advisory board.",
            },
            {
              name: "Dr. Shuaa Basalom",
              role: "Medical Advisor",
              bio: "Medical professional providing valuable insights into clinical applications and healthcare implementation strategies.",
            },
          ],
        },
        {
          title: "AI Advisors",
          members: [
            {
              name: "Dr. Yuhong Yan",
              role: "AI Advisor",
              bio: "Associate Professor, Concordia University. Artificial intelligence expert with deep knowledge in machine learning applications for biotechnology and healthcare.",
            },
            {
              name: "Dr. Jian Zhao",
              role: "AI Advisor",
              bio: "Associate Professor, University of Waterloo. Technology leader specializing in AI/ML solutions for complex scientific and medical challenges.",
            },
          ],
        },
      ],
    },
    {
      title: "Operational Team",
      subtitle:
        "Dedicated professionals executing our vision across laboratory, AI, and business operations.",
      subgroups: [
        {
          title: "Laboratory Team",
          members: [
            {
              name: "Dr. Sabrine Najeh",
              role: "Certified Microbiologist; COO & Laboratory Director; Nucleic Acids Engineering Expert",
              bio: "",
            },
            {
              name: "Dr. Liseth Carmona",
              role: "Stem Cells and Immunology Expert",
              bio: "",
            },
            {
              name: "Xiaoying Han",
              role: "Scientist; Small RNAs Expert",
              bio: "",
            },
            {
              name: "Pierre-Luc",
              role: "RCA Expert",
              bio: "",
            },
          ],
        },
      ],
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* SHARED — Services (used on Our Science / Platforms)                 */
/* ------------------------------------------------------------------ */
export const services = {
  // All confirmed verbatim from ebovir.ca/services
  heading: "CRO & Laboratory Services",
  body: "A one-stop platform supporting biopharma and research partners across virology and preclinical development.",
  items: [
    {
      title: "Retrovirus Production & Titration",
      body: "Essential steps in the study of retroviruses and their replication.",
    },
    {
      title: "Evaluation of Small Molecules",
      body: "Testing the ability of molecules to inhibit viral replication in vitro and in vivo.",
    },
    {
      title: "Antiviral Activity of Natural Products",
      body: "Testing the ability of natural products to inhibit viral replication in vitro and in vivo.",
    },
    {
      title: "Antiviral Immune Modulators",
      body: "Assessment of efficacy, safety, and overall impact on viral infections.",
    },
    {
      title: "Evaluation of Biologics",
      body: "Assessment of viral vaccines and antiviral drugs for efficacy and safety.",
    },
    {
      title: "Antiviral Therapeutic Antibodies",
      body: "Assessment of efficacy, safety, and overall impact on viral infections.",
    },
    {
      title: "Clinical Trials Consulting",
      body: "Designed to evaluate the safety and efficacy of a new drug or therapy in a controlled environment.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* PRODUCTS PAGE — plant & fungal exosome line (names provided)        */
/* ------------------------------------------------------------------ */
/* Boilerplate shared by every datasheet (verbatim from the product docs). */
export const exosomeCommon = {
  overview:
    "Exosomes are small extracellular vesicles, between 30 and 150 nanometers in size, naturally produced by most human, animal and plant cells. These vesicles are rich in proteins, lipids, and nucleic acids, and play a vital role in intercellular communication. Plant-derived exosome-like nanoparticles (PENs) are nanosized vesicles secreted by plant cells. They resemble mammalian exosomes in structure and function, making them a promising tool for drug delivery, immune modulation, therapeutic applications and nutritional supplement. Our products undergo a stringent screening and purification process to ensure exceptional purity, quality, and biological activity. They are available in frozen liquid formulations to meet specific customer requirements. Advanced ultracentrifugation and Tangential Flow Filtration (TFF) technologies are employed for the efficient isolation, purification, and production of exosomes, ensuring high levels of purity, consistency, and biological activity. Ebovir's plant-derived exosome products are manufactured using optimized purification processes to deliver superior quality and performance.",
  form: "Frozen liquid",
  concentration: "> 1 × 10¹⁰ particles",
  storage:
    "Frozen liquid; store at -20°C to -80°C. Avoid repeated freeze-and-thaw cycles.",
  safety: "Use universal precautions when handling this material.",
  defrost:
    "Thaw slowly. Centrifuge before opening to ensure exosomes are at the bottom, then resuspend by pipetting and/or vortexing — please avoid bubbles.",
  efficacy:
    "Skin-protective, antioxidant, anti-inflammatory, and regenerative properties.",
  intendedUse:
    "R&D; cosmetic products for topical use only. Non-injectable.",
} as const;

export const exosomeProducts = {
  eyebrow: "Products",
  title: "Plant & fungal exosome products",
  subtitle:
    "A line of naturally derived exosome products. Each datasheet below summarizes the source, specifications, and handling — ordering is handled through the EboGenes store.",
  note: "Product information is taken from Ebovir datasheets (v1.0). For research and topical cosmetic use only — non-injectable.",
  // Per-product fields are from each product's datasheet.
  items: [
    {
      slug: "asian-virginsbower-exosomes",
      name: "Asian Virginsbower Exosomes",
      productName: "Asian Virginsbower-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Avirg-Exo-06",
      source: "Asian virginsbower (Clematis florida)",
      sourceShort: "Derived from Asian virginsbower (Clematis florida).",
      contains: "Normal exosomes derived from Asian virginsbower in PBS.",
    },
    {
      slug: "cauliflower-mushroom-exosomes",
      name: "Cauliflower Mushroom Exosomes",
      productName: "Cauliflower Mushroom-Derived Exosome",
      kind: "Fungal",
      catNo: "PD-Cmush-Exo-07",
      source: "Cauliflower mushroom (Sparassis crispa)",
      sourceShort: "Derived from cauliflower mushroom (Sparassis crispa).",
      contains: "Normal exosomes derived from cauliflower mushroom in PBS.",
    },
    {
      slug: "centella-exosomes",
      name: "Centella Exosomes",
      productName: "Centella-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Cent-Exo-05",
      source: "Centella asiatica",
      sourceShort: "Derived from Centella asiatica (gotu kola).",
      contains: "Normal exosomes derived from Centella in PBS.",
    },
    {
      slug: "dandelion-exosomes",
      name: "Dandelion Exosomes",
      productName: "Dandelion-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Dand-Exo-03",
      source: "Dandelion (Taraxacum officinale)",
      sourceShort: "Derived from dandelion (Taraxacum officinale).",
      contains: "Normal exosomes derived from dandelion in PBS.",
    },
    {
      slug: "desert-cistanche-exosomes",
      name: "Desert Cistanche Exosomes",
      productName: "Desert Cistanche-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Dcist-Exo-08",
      source: "Desert Cistanche (Cistanche deserticola)",
      sourceShort: "Derived from desert cistanche (Cistanche deserticola).",
      contains: "Normal exosomes derived from Desert Cistanche in PBS.",
    },
    {
      slug: "ginger-exosomes",
      name: "Ginger Exosomes",
      productName: "Ginger-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Ging-Exo-01",
      source: "Ginger (Zingiber officinale)",
      sourceShort: "Derived from ginger (Zingiber officinale).",
      contains: "Normal exosomes derived from ginger in PBS.",
    },
    {
      slug: "ginseng-exosomes",
      name: "Ginseng Exosomes",
      productName: "Ginseng-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Gseng-Exo-02",
      source: "Ginseng (Panax ginseng)",
      sourceShort: "Derived from ginseng (Panax ginseng).",
      contains: "Normal exosomes derived from ginseng in PBS.",
    },
    {
      slug: "mugwort-exosomes",
      name: "Mugwort Exosomes",
      productName: "Mugwort-Derived Exosome",
      kind: "Botanical",
      catNo: "PD-Mugw-Exo-04",
      source: "Mugwort (Artemisia vulgaris)",
      sourceShort: "Derived from mugwort (Artemisia vulgaris).",
      contains: "Normal exosomes derived from mugwort in PBS.",
    },
  ],
} as const;

export const products = {
  // Confirmed categories on ebovir.ca (no detailed copy published)
  heading: "Research Products",
  note: "Product detail is limited on ebovir.ca — descriptions below are neutral placeholders. (Needs confirmation.)",
  items: [
    { title: "Exosome", body: "Exosome-based research materials." },
    { title: "Virology Tools", body: "Tools supporting virology research workflows." },
    { title: "Kits (RUO)", body: "Research-Use-Only kits for laboratory applications." },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* PLATFORMS PAGE — the four public-facing platforms / portals         */
/* The platform cards themselves come from `ecosystem` (single source  */
/* of truth for the brand architecture). This block holds page copy.   */
/* ------------------------------------------------------------------ */
export const platformsPage = {
  eyebrow: "Platforms",
  title: "The EBOVIR platforms",
  intro:
    "EBOVIR operates four connected, public-facing platforms — genetic health, exosome biotechnology, AI healthcare, and laboratory services — each an entry point into the wider precision-health ecosystem.",
} as const;

/* ------------------------------------------------------------------ */
/* BUSINESS AREAS — group-level business segmentation                  */
/* ------------------------------------------------------------------ */
export const businessAreas = {
  eyebrow: "Business Areas",
  title: "The business areas EBOVIR covers",
  intro:
    "From precision diagnostics to premium medical services, EBOVIR's business areas connect laboratory science, AI, and clinical collaboration across research, industry, clinical, and personalized-health audiences.",
  items: [
    {
      id: "precision-diagnostics",
      name: "Precision Diagnostics & Omics",
      body: "Genetic testing, molecular diagnostics, liquid biopsy, early screening, and companion diagnostic development, grounded in genome-scale data.",
      audience: "Clinical · Research",
    },
    {
      id: "ai-healthcare",
      name: "AI Healthcare",
      body: "AI genetic interpretation, intelligent reporting, disease-risk analysis, and clinical decision-support systems built on omics data.",
      audience: "Clinical · Consumer",
    },
    {
      id: "regenerative-medicine",
      name: "Regenerative Medicine",
      body: "Stem cell banking, immune cell research, NK cell research, and regenerative medicine development advancing translational science.",
      audience: "Research · Clinical",
    },
    {
      id: "rna-lnp",
      name: "RNA/LNP Drug Development",
      body: "RNA drug development, LNP delivery, nucleic-acid therapeutics, and translational collaboration with biopharma and research partners.",
      audience: "Industry · Research",
    },
    {
      id: "exosome-aesthetic",
      name: "Exosome & Aesthetic Biotechnology",
      body: "Exosome-based ingredients, skin wellness applications, aesthetic biotechnology, and product development for partners and brands.",
      audience: "Industry · Consumer",
    },
    {
      id: "premium-medical",
      name: "Premium Medical Center",
      body: "Precision health management, advanced diagnostics, personalized consultation, and premium medical services for individuals.",
      audience: "Consumer · Clinical",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* MEDICAL CENTER — premium precision-health services                  */
/* ------------------------------------------------------------------ */
export const medicalCenter = {
  eyebrow: "Medical Center",
  title: "Precision health, personalized",
  intro:
    "The EBOVIR Medical Center brings the group's omics, diagnostics, and AI capabilities together into premium, personalized health services — focused on prevention, accurate assessment, and informed decisions.",
  sections: [
    {
      id: "precision-health",
      name: "Precision Health Management",
      body: "Personalized health programs that combine genomic insight, advanced diagnostics, and AI interpretation to support prevention and long-term planning.",
    },
    {
      id: "advanced-diagnostics",
      name: "Advanced Diagnostics",
      body: "Access to molecular diagnostics, early screening, and omics-driven assessments delivered through EBOVIR's laboratory platforms.",
    },
    {
      id: "consultation",
      name: "Personalized Consultation",
      body: "One-on-one consultations that translate complex results into clear, individualized guidance, supported by AI-assisted reporting.",
    },
    {
      id: "membership",
      name: "Membership Services",
      body: "Ongoing membership programs offering continuity of care, periodic reassessment, and coordinated access to EBOVIR services.",
    },
  ],
  book: {
    id: "book",
    heading: "Book a consultation",
    body: "Request an appointment with the EBOVIR Medical Center team to discuss precision health management and personalized services.",
    cta: { label: "Request an appointment", href: "/contact#appointment" },
  },
} as const;

/* ------------------------------------------------------------------ */
/* NEWS & INSIGHTS — editorial categories (placeholder hub)            */
/* ------------------------------------------------------------------ */
export const newsInsights = {
  eyebrow: "News & Insights",
  title: "News & insights from EBOVIR",
  intro:
    "Updates, scientific perspectives, and announcements from across the EBOVIR group. New articles are published here as our platforms and collaborations advance.",
  categories: [
    {
      id: "company",
      name: "Company Updates",
      body: "Milestones, recognitions, facility developments, and organizational news from across the group.",
    },
    {
      id: "science",
      name: "Scientific Insights",
      body: "Perspectives on omics, diagnostics, regenerative medicine, and AI in precision health.",
    },
    {
      id: "products",
      name: "Product Announcements",
      body: "New product lines, service offerings, and platform capabilities as they become available.",
    },
    {
      id: "industry",
      name: "Industry Perspectives",
      body: "Views on the precision-health and biotechnology landscape in North America and beyond.",
    },
    {
      id: "clinical",
      name: "Clinical & Research News",
      body: "Updates from clinical collaborations, research programs, and translational projects.",
    },
  ],
  emptyState:
    "Articles are being prepared. For media or partnership enquiries in the meantime, please contact the EBOVIR team.",
} as const;

/* ------------------------------------------------------------------ */
/* CONTACT — inquiry routing (section anchors used by the navigation)  */
/* ------------------------------------------------------------------ */
export const inquiryTypes = {
  eyebrow: "How can we help?",
  heading: "Reach the right team",
  body: "Tell us how we can help and your enquiry will reach the appropriate EBOVIR team.",
  items: [
    {
      id: "general",
      name: "General Inquiry",
      body: "Questions about EBOVIR, our platforms, or the group.",
      email: "info@ebovir.ca",
    },
    {
      id: "partnership",
      name: "Partnership",
      body: "Research collaboration, CRO services, and biopharma partnerships.",
      email: "info@ebovir.ca",
    },
    {
      id: "product",
      name: "Product Inquiry",
      body: "Exosome ingredients, research products, and specifications.",
      email: "info@ebovir.ca",
    },
    {
      id: "clinical",
      name: "Clinical Partnership",
      body: "Clinics and healthcare partners integrating diagnostics and reporting.",
      email: "testcenter@ebovir.ca",
    },
    {
      id: "appointment",
      name: "Medical Center Appointment",
      body: "Premium medical services and precision health consultations.",
      email: "testcenter@ebovir.ca",
    },
  ],
} as const;

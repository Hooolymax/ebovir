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
  products: "/products",
  home: "/",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Company", href: "/our-company" },
  { label: "Our Science", href: "/our-science" },
  { label: "Products", href: "/products" },
  { label: "Platforms", href: "/platforms" },
  { label: "Contact", href: "/contact" },
] as const;

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
export const ecosystem = {
  eyebrow: "The Ecosystem",
  heading: "An integrated biotechnology ecosystem",
  body: "Genetics, science, AI, and laboratory expertise — under one platform.",
  cards: [
    {
      name: "EboGenes",
      tag: "Genetic health & testing",
      short: "Consumer genetic-health testing.",
      // Confirmed brand; store at ebogenes.com
      body: "Our consumer genetic-health brand, offering genetic testing products. Ordering is handled through the dedicated EboGenes store.",
      href: links.eboGenesStore,
      external: true,
      cta: "Visit EboGenes Store",
      needsConfirmation: false,
    },
    {
      name: "EboScience",
      tag: "Skincare & wellness",
      short: "Science-led skincare & wellness.",
      // Confirmed at eboscience.com
      body: "A biotech skincare and wellness brand applying exosome technology and genetic skin analysis to anti-aging and skin-repair solutions.",
      href: links.eboScience,
      external: true,
      cta: "Visit EboScience",
      needsConfirmation: false,
    },
    {
      name: "EboMed AI",
      tag: "AI health intelligence",
      short: "AI health consultant (E-AI Doctor).",
      // Live platform provided: E-AI Doctor at e-ai.ca
      body: "An AI health consultant (E-AI Doctor) that helps interpret health and genomic information into clear, accessible guidance.",
      href: links.eboMedAi,
      external: true,
      cta: "Visit AI platform",
      needsConfirmation: false,
    },
    {
      name: "Ebovir Lab",
      tag: "Diagnostics & CRO services",
      short: "BSL-2/3 diagnostics & CRO services.",
      // Confirmed: BSL-2 / BSL-3 private diagnostic laboratory
      body: "One of North America's advanced private diagnostic laboratories, with BSL-2 and BSL-3 capabilities supporting virology research and preclinical development.",
      href: links.science,
      external: false,
      cta: "Explore our science",
      needsConfirmation: false,
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

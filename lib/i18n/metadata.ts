import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

export type PageKey =
  | "businessAreas"
  | "contact"
  | "platforms"
  | "science"
  | "medicalCenter"
  | "strategicPartner"
  | "company"
  | "news"
  | "products";

const copy: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  en: {
    businessAreas: { title: "Business Areas", description: "The business areas EBOVIR covers — precision diagnostics & omics, AI healthcare, regenerative medicine, RNA/LNP drug development, exosome & aesthetic biotechnology, and premium medical services." },
    contact: { title: "Contact", description: "Get in touch with Ebovir Biotechnologie Inc. in the Greater Montreal area, or visit the EboGenes store to order genetic testing products." },
    platforms: { title: "Platforms", description: "The four public-facing EBOVIR platforms — EboGenes, EboScience, EboMed AI, and EBOVIR Lab — spanning genetic health, exosome biotechnology, AI healthcare, and laboratory services." },
    science: { title: "Our Science", description: "Molecular biology, whole genome sequencing, early cancer screening, and AI interpretation — the science behind Ebovir's precision-health platform." },
    medicalCenter: { title: "Medical Center", description: "The EBOVIR Medical Center — precision health management, advanced diagnostics, personalized consultation, and membership services, powered by the group's omics, diagnostics, and AI platforms." },
    strategicPartner: { title: "Dr. Jerry Leung Medical Club | Strategic Partner", description: "Meet Dr. Jerry Leung Medical Club, an EBOVIR high-end strategic partner in Markham offering physician-led preventive care, comprehensive health assessments, concierge medicine, and integrated wellness." },
    company: { title: "Our Company", description: "Ebovir Biotechnologies Inc. — a Montreal biotechnology company founded in 2021 and incubated from McGill University, driving innovation in precision medicine." },
    news: { title: "News & Insights", description: "News and insights from the EBOVIR group — company updates, scientific insights, product announcements, industry perspectives, and clinical & research news." },
    products: { title: "Products", description: "Ebovir's line of naturally derived exosome products — botanical and fungal sources. Order through the EboGenes store." },
  },
  fr: {
    businessAreas: { title: "Secteurs d’activité", description: "Les secteurs d’activité d’EBOVIR : diagnostic de précision et omiques, IA en santé, médecine régénérative, développement de médicaments à ARN/LNP, exosomes et biotechnologie esthétique, et services médicaux haut de gamme." },
    contact: { title: "Nous joindre", description: "Communiquez avec Ebovir Biotechnologie Inc. dans la grande région de Montréal ou visitez la boutique EboGenes pour commander des tests génétiques." },
    platforms: { title: "Plateformes", description: "Les quatre plateformes publiques d’EBOVIR — EboGenes, EboScience, EboMed AI et EBOVIR Lab — couvrent la santé génétique, les exosomes, l’IA en santé et les services de laboratoire." },
    science: { title: "Notre science", description: "Biologie moléculaire, séquençage du génome entier, dépistage précoce du cancer et interprétation par IA : la science derrière la plateforme de santé de précision d’Ebovir." },
    medicalCenter: { title: "Centre médical", description: "Le Centre médical EBOVIR offre une gestion de la santé de précision, un diagnostic avancé, des consultations personnalisées et des services aux membres, propulsés par les plateformes d’omiques, de diagnostic et d’IA du groupe." },
    strategicPartner: { title: "Dr. Jerry Leung Medical Club | Partenaire stratégique", description: "Découvrez le Dr. Jerry Leung Medical Club, partenaire stratégique haut de gamme d’EBOVIR à Markham, qui réunit soins préventifs dirigés par un médecin, bilans de santé complets, médecine concierge et mieux-être intégré." },
    company: { title: "Notre entreprise", description: "Ebovir Biotechnologies Inc. est une entreprise montréalaise de biotechnologie fondée en 2021 et incubée à l’Université McGill, qui stimule l’innovation en médecine de précision." },
    news: { title: "Nouvelles et perspectives", description: "Nouvelles et perspectives du groupe EBOVIR : actualités de l’entreprise, science, produits, industrie, recherche et collaborations cliniques." },
    products: { title: "Produits", description: "La gamme de produits d’exosomes d’origine naturelle d’Ebovir, provenant de sources végétales et fongiques. Commandez dans la boutique EboGenes." },
  },
  "zh-CN": {
    businessAreas: { title: "业务领域", description: "EBOVIR 的业务领域涵盖精准诊断与组学、人工智能医疗、再生医学、RNA/LNP 药物开发、外泌体与医美生物技术以及高端医疗服务。" },
    contact: { title: "联系我们", description: "联系位于大蒙特利尔地区的 Ebovir 生物科技公司，或前往 EboGenes 商店订购基因检测产品。" },
    platforms: { title: "平台", description: "EBOVIR 的四个对外平台 EboGenes、EboScience、EboMed AI 和 EBOVIR Lab，覆盖遗传健康、外泌体生物技术、人工智能医疗和实验室服务。" },
    science: { title: "我们的科学", description: "分子生物学、全基因组测序、癌症早期筛查和人工智能解读，构成 Ebovir 精准健康平台背后的科学基础。" },
    medicalCenter: { title: "医疗中心", description: "EBOVIR 医疗中心依托集团的组学、诊断和人工智能平台，提供精准健康管理、先进诊断、个性化咨询和会员服务。" },
    strategicPartner: { title: "Dr. Jerry Leung Medical Club｜高端战略合作伙伴", description: "了解 EBOVIR 位于 Markham 的高端战略合作伙伴 Dr. Jerry Leung Medical Club，其服务涵盖医生主导的预防医疗、综合健康评估、礼宾医疗与一体化健康管理。" },
    company: { title: "关于公司", description: "Ebovir Biotechnologies Inc. 是一家位于蒙特利尔的生物技术公司，成立于 2021 年并源自麦吉尔大学孵化，致力于推动精准医疗创新。" },
    news: { title: "新闻与洞察", description: "来自 EBOVIR 集团的公司动态、科学洞察、产品公告、行业观点以及临床与科研新闻。" },
    products: { title: "产品", description: "Ebovir 天然来源外泌体产品系列，涵盖植物和真菌来源产品。通过 EboGenes 商店订购。" },
  },
};

export function localizedUrl(locale: Locale, path: string) {
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
}

export function pageAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      "en-CA": localizedUrl("en", path),
      "fr-CA": localizedUrl("fr", path),
      "zh-CN": localizedUrl("zh-CN", path),
      "x-default": localizedUrl("en", path),
    },
  };
}

export function buildPageMetadata(locale: Locale, key: PageKey, path: string): Metadata {
  const value = copy[locale][key];
  return {
    ...value,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: value.title,
      description: value.description,
      locale: locale === "fr" ? "fr_CA" : locale === "zh-CN" ? "zh_CN" : "en_CA",
    },
  };
}

export type CriterionCode = 
    | "GOV_INTERACTION_LEVEL"
    | "INFRASTRUCTURE_LEVEL"
    | "ONLINE_PRESENCE_LEVEL"
    | "DATA_STORAGE_LEVEL"
    | "OPERATIONAL_LEVEL"
    | "GOVERNMENT_LEVEL"
    | "BUSINESS_LEVEL"
    | "PERSONAL_LEVEL"
    | "ECOSYSTEM_LEVEL"
    | "SPECIAL_SECTION_1"
    | "SPECIAL_SECTION_2"
    | "SPECIAL_SECTION_3";

export const CRITERIA: { code: CriterionCode; label: { ru: string; en: string } }[] = [
    { code: "GOV_INTERACTION_LEVEL", label: { ru: "Уровень взаимодействия с государством", en: "Level of interaction with the state" } },
    { code: "INFRASTRUCTURE_LEVEL", label: { ru: "Инфраструктурный уровень", en: "Infrastructure Level" } },
    { code: "ONLINE_PRESENCE_LEVEL", label: { ru: "Уровень онлайн доступности для клиентов", en: "Level of online availability for clients" } },
    { code: "DATA_STORAGE_LEVEL", label: { ru: "Уровень хранения данных", en: "Data Storage Level" } },
    { code: "OPERATIONAL_LEVEL", label: { ru: "Операционный уровень", en: "Operational Level" } },
    { code: "GOVERNMENT_LEVEL", label: { ru: "Государственный уровень", en: "Government Level" } },
    { code: "BUSINESS_LEVEL", label: { ru: "Уровень бизнеса", en: "Business Level" } },
    { code: "PERSONAL_LEVEL", label: { ru: "Персональный уровень", en: "Personal Level" } },
    { code: "ECOSYSTEM_LEVEL", label: { ru: "Уровень экосистемы", en: "Ecosystem Level" } },
    { code: "SPECIAL_SECTION_1", label: { ru: "Специальный раздел 1", en: "Special Section 1" } },
    { code: "SPECIAL_SECTION_2", label: { ru: "Специальный раздел 2", en: "Special Section 2" } },
    { code: "SPECIAL_SECTION_3", label: { ru: "Специальный раздел 3", en: "Special Section 3" } },
];

export const CRITERIA_MAP: Record<CriterionCode, { ru: string; en: string }> = 
    CRITERIA.reduce((acc, c) => {
        acc[c.code] = c.label;
        return acc;
    }, {} as Record<CriterionCode, { ru: string; en: string }>);

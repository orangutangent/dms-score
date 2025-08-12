export type CriterionCode = 
    | "GOV_INTERACTION_LEVEL"
    | "INFRASTRUCTURE_LEVEL"
    | "ONLINE_PRESENCE_LEVEL"
    | "DATA_MANAGEMENT_LEVEL"
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
    { code: "INFRASTRUCTURE_LEVEL", label: { ru: "Цифровая зрелость инфраструктуры", en: "Digital Maturity of Infrastructure" } },
    { code: "ONLINE_PRESENCE_LEVEL", label: { ru: "Уровень онлайн доступности для клиентов", en: "Level of online availability for clients" } },
    { code: "DATA_MANAGEMENT_LEVEL", label: { ru: "Уровень управления данными", en: "Data Management Level" } },
    { code: "OPERATIONAL_LEVEL", label: { ru: "Цифровая зрелость процессов предоставления услуги", en: "Digital Maturity of the Process of Providing Services" } },
    { code: "GOVERNMENT_LEVEL", label: { ru: "Цифровая зрелость государственного администрирования", en: "Digital Maturity of Public Administration" } },
    { code: "BUSINESS_LEVEL", label: { ru: "Уровень бизнеса", en: "Business Level" } },
    { code: "PERSONAL_LEVEL", label: { ru: "Цифровая зрелость процессов получения услуги", en: "Digital Maturity of service delivery processes" } },
    { code: "ECOSYSTEM_LEVEL", label: { ru: "Цифровая зрелость интеграции госуслуги в экосистему", en: "Digital maturity of public service integration into the ecosystem" } },
    { code: "SPECIAL_SECTION_1", label: { ru: "Специальный раздел 1. Системы раннего предупреждения и уменьшения опасности бедствий", en: "Special Section 1. Early Warning Systems and Disaster Risk Reduction" } },
    { code: "SPECIAL_SECTION_2", label: { ru: "Специальный раздел 2. Режим интеллектуальной собственности в образовании", en: "Special Section 2. Intellectual Property Management in Education" } },
    { code: "SPECIAL_SECTION_3", label: { ru: "Специальный раздел 3. ЦГУ и системы хранения цифровых медицинских данных", en: "Special Section 3. DPS and Systems for Digital Medical Data Collection" } },
];

export const CRITERIA_MAP: Record<CriterionCode, { ru: string; en: string }> = 
    CRITERIA.reduce((acc, c) => {
        acc[c.code] = c.label;
        return acc;
    }, {} as Record<CriterionCode, { ru: string; en: string }>);
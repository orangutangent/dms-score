export type ServiceCode = "OPEN_BUSINESS" | "REGISTER_SME" | "APPLY_SUPPORT";

export const SERVICES: {
  code: ServiceCode;
  label: { ru: string; en: string };
  color: string;
}[] = [
  {
    code: "OPEN_BUSINESS",
    label: { ru: "Открытие бизнеса", en: "Business start-up" },
    color: "#2563eb",
  },
  {
    code: "REGISTER_SME",
    label: { ru: "Регистрация МСП", en: "SME registration" },
    color: "#16a34a",
  },
  {
    code: "APPLY_SUPPORT",
    label: {
      ru: "Подача заявки на получение кредита/грантовой поддержки",
      en: "Obtaining Credit and Grant Support",
    },
    color: "#7c3aed",
  },
];

export const SERVICE_MAP: Record<
  ServiceCode,
  { label: { ru: string; en: string }; color: string }
> = SERVICES.reduce((acc, s) => {
  acc[s.code] = { label: s.label, color: s.color };
  return acc;
}, {} as Record<ServiceCode, { label: { ru: string; en: string }; color: string }>);

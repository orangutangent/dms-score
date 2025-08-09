export type ServiceCode = "OPEN_BUSINESS" | "REGISTER_SME" | "APPLY_SUPPORT";

export const SERVICES: { code: ServiceCode; label: string; color: string }[] = [
  { code: "OPEN_BUSINESS", label: "Открытие бизнеса", color: "#2563eb" },
  { code: "REGISTER_SME", label: "Регистрация МСП", color: "#16a34a" },
  { code: "APPLY_SUPPORT", label: "Кредит/Грант", color: "#7c3aed" },
];

export const SERVICE_MAP: Record<
  ServiceCode,
  { label: string; color: string }
> = SERVICES.reduce((acc, s) => {
  acc[s.code] = { label: s.label, color: s.color };
  return acc;
}, {} as Record<ServiceCode, { label: string; color: string }>);

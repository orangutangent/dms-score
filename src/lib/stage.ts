export type Stage = {
  letter: "A" | "B" | "C";
  label: string;
};

const stageLabels: Record<string, Record<"A" | "B" | "C", string>> = {
  en: {
    A: "Foundation",
    B: "Adoption",
    C: "Acceleration",
  },
  ru: {
    A: "Базис ЦТ",
    B: "Переход к ЦТ",
    C: "Ускорение ЦТ",
  },
};

/**
 * Определение стадии по шкале 0..10.
 * Правила:
 * - < 4  => A
 * - 4 <= .. < 8 => B
 * - >= 8 => C
 */
function _getStageLetter(score0to10: number): "A" | "B" | "C" {
  if (score0to10 < 4) return "A";
  if (score0to10 < 8 && score0to10 >= 4) return "B";
  return "C";
}

export function getStage(score0to10: number, locale: string): Stage {
  const letter = _getStageLetter(score0to10);
  const labels = stageLabels[locale] || stageLabels.en;
  return { letter, label: labels[letter] };
}

/**
 * Удобная обёртка: вернуть строку "A - Foundation".
 */
export function formatStage(score0to10: number, locale: string): string {
  const s = getStage(score0to10, locale);
  return `${s.letter} - ${s.label}`;
}

export function getStageLetter(score0to10: number): "A" | "B" | "C" {
  return _getStageLetter(score0to10);
}

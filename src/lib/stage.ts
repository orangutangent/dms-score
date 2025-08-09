export type Stage = {
  letter: "A" | "B" | "C";
  label: "Foundation" | "Adoption" | "Acceleration";
};

/**
 * Определение стадии по шкале 0..10.
 * Правила:
 * - < 3.99  => A - Foundation
 * - 4 .. 7.99 => B - Adoption
 * - >= 8 => C - Acceleration
 */
export function getStage(score0to10: number): Stage {
  if (score0to10 < 3.99) return { letter: "A", label: "Foundation" };
  if (score0to10 < 7.99 && score0to10 >= 4)
    return { letter: "B", label: "Adoption" };
  return { letter: "C", label: "Acceleration" };
}

/**
 * Удобная обёртка: вернуть строку "A - Foundation".
 */
export function formatStage(score0to10: number): string {
  const s = getStage(score0to10);
  return `${s.letter} - ${s.label}`;
}

export function getStageLetter(score0to10: number): "A" | "B" | "C" {
  return getStage(score0to10).letter;
}

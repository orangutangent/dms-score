export type QuestionType = 'scale' | 'yes-no' | 'yes-no-text';

export type Answer = number | { choice: 'yes' | 'no'; details?: string };

export interface Question {
  id: number;
  criterion: string;
  type: QuestionType;
  title: string;
  question: string;
  response_options?: string;
  scoring?: { [key: string]: number };
  followUpQuestion?: string;
  weight: number;
}
export type InputType = 'scale' | 'radio' | 'text' | 'location' | 'final-thoughts';

export interface QuestionOption {
  value: string;
  label: string;
}

export interface FollowUp {
  triggerValue: string;
  inputType: 'text';
  placeholder: string;
}

export interface Question {
  id: number;
  criterion: string;
  inputType: InputType;
  question: string;
  options?: QuestionOption[];
  followUp?: FollowUp;
  weight: number;
  placeholder?: string; // For simple text inputs
  scoring?: { [key: string]: number }; // Add scoring back for radio types
}

export type Answer = {
  value: string;
  details?: string;
} | null;

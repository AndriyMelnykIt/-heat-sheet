export interface Question {
  id: string;
  question: string;
  description: string;
}

export interface Module {
  id: number;
  name: string;
  questions: Question[];
}

export interface Topics {
  code: boolean,
  label: string,
  description: string
}

export interface Question {
  id: string;
  question: string;
  descriptions: Topics[];
}

export interface Module {
  id: number;
  name: string;
  questions: Question[];
}

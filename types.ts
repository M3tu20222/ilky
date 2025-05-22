
export interface Option {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
  correctAnswerId: string;
}

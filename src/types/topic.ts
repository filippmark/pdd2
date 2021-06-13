import { Answer } from "./answer";

export interface Topic {
  id: number;
  name: string;
}

export interface TextId {
  id: number;
  text: string;
  name: string;
  linkToImage: string;
}

export interface Paragraph {
  articles: TextId[];
  chapter: TextId;
  id: number;
  text: string;
}

export interface TopicQuestion {
  id: number;
  answers: Answer[];
  answersCount: number;
  linkToImage: string;
  text: string;
  topicId: number;
  paragraph: Paragraph | null;
}

export interface RecordedQuestion {
  question: TopicQuestion;
  answer: Answer;
}

export interface PassedControl extends Topic {
  createdAt: string;
  durationInSeconds: number;
  answers: RecordedQuestion[]
}
import { Answer } from "./answer";

export interface Topic {
  id: number;
  name: string;
}

export interface TextId {
  id: number;
  text: string;
}

export interface TopicQuestion {
  endTime: string;
  id: number;
  answers: Answer[];
  answersCount: number;
  linkToImage: string;
  text: string;
  topicId: number;
  paragraph: {
    articles: TextId[];
    chapter: TextId;
    id: number;
    text: string;
  } | null;
}

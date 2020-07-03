import { Answer } from "./answer";

export interface Topic {
  id: number;
  name: string;
}

export interface TopicQuestion {
  id: number;
  answers: Answer[];
  answersCount: number;
  linkToImage: string;
  text: string;
  topicId: number;
}

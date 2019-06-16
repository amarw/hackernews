export type Stories = number[];

export enum ItemType {
  Story = 'story',
  Comment = 'comment',
  Jobs = 'jobs',
  Poll = 'poll',
  PollOpt = 'pollopt'
}

export interface Item {
  by: string;
  descendants?: string;
  id: string;
  kids: number[];
  parent?: number;
  score?: number;
  time: number;
  title: string;
  type: ItemType;
  url?: string;
}

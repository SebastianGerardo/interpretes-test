export interface Slot {
  start: string; // o Date si lo parseas
}

export type SlotsByDate = Record<string, Slot[]>;

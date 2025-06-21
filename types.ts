export interface CardData {
  id: number; // Use card value as ID
  name: string;
  value: number;
  numbers: number[];
  bgColor: string;
  textColor: string;
  borderColor: string; // For the card itself, not just selection
  selectedRingColor: string;
}

export enum GameStage {
  Introduction,
  CardSelection,
  Thinking,
  Result,
}

// Props for child components representing game stages
export interface StageProps {
  onNext: (data?: any) => void; // Generic callback to move to next stage or pass data
  // Add other common props if needed, e.g., onPrevious
}

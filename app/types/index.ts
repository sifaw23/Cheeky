// app/types/index.ts
export type ChonkMood = 'happy' | 'excited' | 'silly' | 'loving' | 'stuffed' | 'dancing' | 'sleepy' | 'derp';

export interface ChonkFaces {
  [K: string]: string;
}

export interface ChonkQuotes {
  [K: string]: string[];
}

export interface FloatingElementProps {
  emoji: string;
  delay: number;
  duration: number;
  size: string;
}

export interface StatProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

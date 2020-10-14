export interface SlideModel {
  id: number;
  name: string;
  weight: number;
  price: number;
  image: string;
  count?: number;
  isAvailable?: boolean;
  category?: string[];
  availableDays: number[];
  labels?: LabelModel[];
}

export interface LabelModel {
  name: string;
  color: string;
}

export enum Name {
  Moretti = 'Moretti',
  Heineken = 'Heineken',
  Menabrea = 'Menabrea',
  Peroni = 'Peroni',
  Forst = 'Forst',
  Erdinger = 'Erdinger',
  Budweiser = 'Budweiser',
  Norbertus = 'Norbertus',
  Becks = 'Becks',
  Dreher = 'Dreher',
}

export enum Type {
  small = 'small',
  medium = 'medium',
}
export interface Beer {
  id: number;
  type: Type;
  name: Name;
  price: number;
}

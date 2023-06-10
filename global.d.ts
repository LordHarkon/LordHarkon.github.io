type Power = {
  index: number;
  name: string;
  image?: string;
  description: string;
};

type Task = {
  index: number;
  name: string;
  image?: string;
  description: string;
};

type Combination = {
  index: number;
  name: string;
  image?: string;
  description: string;
  powers: number[];
};

type Deal = {
  index: number;
  name: string;
  image?: string;
  description: string;
  incompatible: number[];
};

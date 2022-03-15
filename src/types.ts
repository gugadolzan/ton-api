interface IDetails {
  icon: string;
  text: number;
}

export interface IProduct {
  id: string;
  details: IDetails[];
  name: string;
  price: number;
  thumbnail: string;
}

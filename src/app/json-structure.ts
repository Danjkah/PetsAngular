export interface PictureJson {
  small: string;
  large: string;
}

export interface PetsJson {
  id: string;
  label: string;
  price: number;
  description: string;
  picture: PictureJson;
  wiki: string;
}

export interface CatalogJson {
  pets: PetsJson[];
}

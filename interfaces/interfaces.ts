export interface CreatedBy {
  id: number;
  firstname: string;
  lastname: string;
  username?: any;
}

export interface UpdatedBy {
  id: number;
  firstname: string;
  lastname: string;
  username?: any;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  large: Large;
  medium: Medium;
  small: Small;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface Category {
  id: number;
  category: string;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  created_at: Date;
  updated_at: Date;
  images: Image[];
  categories: Category[];
}

export interface CommonResources {
  id: number;
  resources: string;
  titleWebsite: string;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  created_at: Date;
  updated_at: Date;
}

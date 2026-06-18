// EXPORTS: IPartner, ICase

export interface IPartner {
  id: string;
  name: string;
  logo: string;
}

export interface ICase {
  id: string;
  title: string;
  country: string;
  description: string;
  image: string;
}

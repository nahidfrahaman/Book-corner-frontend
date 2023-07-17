export interface IBooks {
  _id?: string | undefined | null;
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  reviews: [];
}

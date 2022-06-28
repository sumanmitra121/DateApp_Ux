import { Photo } from "./photo";

export interface member{
  id: number;
  userName: string;
  photoUrl: string;
  email: string;
  phone: string;
  age: number;
  knownAs: string;
  created_at: Date;
  last_active: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}

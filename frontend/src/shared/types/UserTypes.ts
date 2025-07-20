import type { ImageType } from "./Image"
import type { TagType } from "./TagType"

export type PersonInfoType = {
  name: string;
  description?: string;
};

export type UserType = {
  id: number,
  person: PersonInfoType,
  images: ImageType[],
  tags: TagType[],
}
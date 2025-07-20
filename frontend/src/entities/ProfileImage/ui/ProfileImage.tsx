import type { FC, Ref } from "react";

import './ProfileImage.scss';

import type { ImageType } from "@shared/types/Image";

type ProfileImageProps = {
  image: ImageType,
  isSelected: boolean,
  imgRef: Ref<HTMLDivElement>,
  classes?: string,
}

export const ProfileImage: FC<ProfileImageProps> = ({image, isSelected = false, imgRef, classes = ""}) => {
  return (
    <div className={`profile-image ${isSelected ? "selected" : ""} ${classes}`} ref={imgRef}>
      <img className="image" src={image.src} alt={image.alt} />
    </div>
  )
}
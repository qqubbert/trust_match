import type { FC, Ref } from "react";

import "./ProfileImage.css";

import type { ImageType } from "@shared/types/Image";

type ProfileImageProps = {
  image: ImageType;
  isSelected: boolean;
  imgRef: Ref<HTMLDivElement>;
  classes?: string;
  hasBorderRadius?: boolean;
};

export const ProfileImage: FC<ProfileImageProps> = ({
  image,
  isSelected = false,
  imgRef,
  classes = "",
  hasBorderRadius = false,
}) => {
  return (
    <div
      className={`profile-image ${isSelected ? "selected" : ""} ${classes} `}
      ref={imgRef}
    >
      <img
        className={`image ${hasBorderRadius ? "hasBorderRadius" : ""}`}
        src={image.src}
        alt={image.alt}
      />
    </div>
  );
};

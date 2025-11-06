import { type FC, useEffect, useRef, useState } from "react";
import "./ProfileImages.css";
import { ProfileImage } from "@entities/ProfileImage";
import type { ImageType } from "@shared/types/Image";
import Left from "@icons/Arrows/ArrowLeft.svg?react";
import Right from "@icons/Arrows/ArrowRight.svg?react";

type ProfileImagesProps = {
  images: ImageType[];
  isOwn: boolean;
  isVisible: boolean;
  isFullSize: boolean;
};

export const ProfileImages: FC<ProfileImagesProps> = ({
  images,
  isOwn = false,
  isVisible = false,
  isFullSize = true,
}) => {
  const [selected, setSelected] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (itemRefs.current[selected]) {
      itemRefs.current[selected]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selected]);

  const changeImg = (isNext: boolean) => {
    setSelected((prev) => {
      if (isNext) {
        return prev + 1 >= images.length ? 0 : prev + 1;
      } else {
        return prev - 1 < 0 ? images.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div
      className={`profile-images-with-btns ${isOwn ? "own" : ""} ${
        !isFullSize ? "not-full-size" : ""
      } ${isVisible ? "visible" : ""}`}
    >
      <button
        className={`arrow prev ${selected == 0 ? "transparent" : ""}`}
        disabled={selected == 0}
        onClick={() => changeImg(false)}
      >
        <Left />
      </button>
      <button
        className={`arrow next ${
          selected == images.length - 1 ? "transparent" : ""
        }`}
        disabled={selected == images.length - 1}
        onClick={() => changeImg(true)}
      >
        <Right />
      </button>
      <div className={`profile-images `} ref={containerRef}>
        <div className="imgs-container">
          {isOwn && (
            <>
              <div className={`profile-image transparent`}>
                <div className="image" />
              </div>
            </>
          )}
          {images.map((img, i) => (
            <ProfileImage
              key={`img-${i}`}
              classes={"profile-image-wrapper snap-center"}
              image={img}
              isSelected={i === selected}
              imgRef={(el) => {
                itemRefs.current[i] = el;
              }}
            />
          ))}
          {isOwn && (
            <div className={`profile-image transparent`}>
              <div className="image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

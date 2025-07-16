import { type FC, useEffect, useRef, useState } from "react";
import "./ProfileImages.scss";
import { ProfileImage } from "@entities/ProfileImage";
import type { ImageType } from "@shared/types/Image";
import Left from "@icons/Arrows/ArrowLeft.svg?react";
import Right from "@icons/Arrows/ArrowRight.svg?react";

type ProfileImagesProps = {
  images: ImageType[];
  isOwn: boolean;
  isVisible: boolean;
};

export const ProfileImages: FC<ProfileImagesProps> = ({
  images,
  isOwn = false,
  isVisible = false,
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
        isVisible ? "visible" : ""
      }`}
    >
      <button
        className={`arrow prev ${selected == 0 ? "transparent" : ""}`}
        disabled={selected == 0}
        onClick={() => changeImg(false)}
      >
        <Left />
      </button>
      <button
        className={`arrow next ${selected == images.length - 1 ? "transparent" : ""}`}
        disabled={selected == images.length - 1}
        onClick={() => changeImg(true)}
      >
        <Right />
      </button>
      <div className={`profile-images `} ref={containerRef}>
        <div className="imgs-container">
          <div className={`profile-image transparent`}>
            <img src={""} alt={""} />
          </div>
          {images.map((img, i) => (
            <ProfileImage
              classes={"profile-image-wrapper "}
              image={img}
              isSelected={i === selected}
              imgRef={(el) => {
                itemRefs.current[i] = el;
              }}
            />
          ))}
          <div className={`profile-image transparent`}>
            <img src={""} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

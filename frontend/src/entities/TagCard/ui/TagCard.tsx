import { useMemo, type FC } from "react";

import "./TagCard.css";

import { generateGradientBackground } from "@shared/lib/generateGradient";

import type { TagType } from "@shared/types/TagType";

type TagCardProps = {
  tagData: TagType;
  className?: string;
};

export const TagCard: FC<TagCardProps> = ({ tagData, className = "" }) => {
  const { Icon, BgIcon, gradientConfig, title } = tagData;

  const bgIconLayers = ["top", "middle", "bottom"];

  const gradient = useMemo(
    () => generateGradientBackground(gradientConfig),
    [gradientConfig],
  );

  return (
    <>
      <div className={`tag-card ${className}`}>
        <div
          className="gradient-bg"
          style={{
            background: gradient,
          }}
        />
        <div className="noise-overlay" />
        <div
          className={`bg-icons ${tagData.hasBGIconsRotation ? "with-rotation" : ""}`}
        >
          {bgIconLayers.map((layer) => {
            return (
              <div className={layer} key={layer}>
                {BgIcon &&
                  Array.from({ length: 5 }).map((_, idx) => (
                    <div className="icon" key={`top-${idx}`}>
                      <BgIcon />
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
        <div className="content">
          {Icon ? <Icon /> : null}
          <span>{title}</span>
        </div>
      </div>
    </>
  );
};

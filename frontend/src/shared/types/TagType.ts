import type { GradientColor } from "./GradientTypes";
import type { ComponentType } from "react";

export type TagType = {
  title: string;
  hasBGIconsRotation: boolean,
  Icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  BgIcon?: ComponentType<React.SVGProps<SVGSVGElement>>;
  gradientConfig?: GradientColor[];
};
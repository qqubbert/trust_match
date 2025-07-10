import type { GradientColor } from "@shared/types/GradientTypes";

export const generateGradientBackground = (
  gradientConfig?: GradientColor[]
): string | undefined => {
  if (!gradientConfig || gradientConfig.length === 0) return undefined;

  return gradientConfig
    .map(
      ({ color, xPos, yPos }) =>
        `radial-gradient(circle at ${String(yPos)} ${String(xPos)}, ${String(color)}, transparent)`
    )
    .join(", ");
};

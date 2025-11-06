import type { GradientColor } from "@shared/types/GradientTypes";

export const generateGradientBackground = (
  gradientConfig?: GradientColor[],
): string | undefined => {
  if (!gradientConfig || gradientConfig.length === 0) return undefined;

  return gradientConfig
    .map(
      ({ color, xPos, yPos }) =>
        `radial-gradient(circle at ${String(xPos)} ${String(yPos)}, ${String(color)}, transparent)`,
    )
    .join(", ");
};

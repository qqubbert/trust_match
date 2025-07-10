export type HorizontalKeyword = 'right' | 'center' | 'left';
export type VerticalKeyword = 'top' | 'bottom' | 'center';

export type HorizontalPercentage = `${number}%`;
export type VerticalPercentage = `${number}%`;

// export type HexDigit =
//   | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
//   | "a" | "b" | "c" | "d" | "e" | "f"
//   | "A" | "B" | "C" | "D" | "E" | "F";

// export type HexColor = `#${HexDigit}${HexDigit}${HexDigit}${HexDigit}${HexDigit}${HexDigit}`;

export type KeywordGradientColor = {
  color: string;
  xPos: HorizontalKeyword;
  yPos: VerticalKeyword;
};

export type PercentageGradientColor = {
  color: string;
  xPos: HorizontalPercentage;
  yPos: VerticalPercentage;
};

export type GradientColor = KeywordGradientColor | PercentageGradientColor;

export const normalizeText = (
  text: string,
  saveLineBreak: boolean = false,
  allowMultipleBreaks: boolean = false
): string => {
  if (!saveLineBreak) {
    return text.replace(/\s+/g, " ").trim(); // \s - Любой пробельный символ \S - любой непробельный символ 
  }
 
  let normalized = text
    .replace(/[^\S\r\n]+/g, " ") // \r?\n — перенос строки (Unix или Windows) 
    .trim();

  if (!allowMultipleBreaks) {
    normalized = normalized.replace(/(\r?\n)+/g, "\n");
  }

  return normalized;
};

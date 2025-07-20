export const usePluralForm = (count: number, words: string[]) => {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${words[0]}`;
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return `${words[1]}`;
  } else {
    return `${words[2]}`; 
  }
};

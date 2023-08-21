type EndingPropsType = {
  parameter: number;
  firstEnding: string;
  secondEnding: string;
  thirdEnding: string;
};

export const getPhraseEnding = ({
  parameter,
  firstEnding,
  secondEnding,
  thirdEnding,
}: EndingPropsType) => {
  const lastNumber = parameter % 10;
  const rightPhraseEnding =
    lastNumber === 1
      ? ` ${firstEnding}`
      : lastNumber > 1 && lastNumber < 5
      ? ` ${secondEnding}`
      : ` ${thirdEnding}`;

  return rightPhraseEnding;
};

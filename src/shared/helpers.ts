import { SetStateAction } from "react";

type EndingPropsType = {
  parameter: number;
  firstEnding: string;
  secondEnding: string;
  thirdEnding: string;
};

const MONTHS = [
  "ЯНВ",
  "ФЕВР",
  "МАРТА",
  "АПР",
  "МАЯ",
  "ИЮНЯ",
  "ИЮЛЯ",
  "АВГ",
  "СЕНТ",
  "ОКТ",
  "НОЯБ",
  "ДЕК",
];

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

export const getEditedDate = (date: Date) => {
  return date.toJSON().slice(0, 10);
};

export const getNextDay = (
  currentDate: Date,
  setCurrentDate: (value: SetStateAction<Date>) => void,
) => {
  const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  setCurrentDate(nextDate);

  return getEditedDate(nextDate);
};

export const formatDate = (date: string) => {
  const preparedDate = date.split("-");
  const rusMonth = MONTHS[Number(preparedDate[1]) - 1];

  return `${preparedDate[2]} ${rusMonth} ${preparedDate[0]}`;
};

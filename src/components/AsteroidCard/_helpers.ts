const BIG_DIAMETER = 100;
const MONTHS = [
  "ЯНВ",
  "ФЕВР",
  "МАРТ",
  "АПР",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГ",
  "СЕНТ",
  "ОКТ",
  "НОЯБ",
  "ДЕК",
];

export const getImgParams = (size: number) => {
  const isLargeSize = size >= BIG_DIAMETER;

  return {
    path: isLargeSize ? "/img/asteroid_big.png" : "/img/asteroid_small.png",
    width: isLargeSize ? 36 : 22,
    height: isLargeSize ? 40 : 24,
  };
};

export const formatDate = (date: string) => {
  const preparedDate = date.split("-");
  const rusMonth = MONTHS[Number(preparedDate[1]) - 1];

  return `${preparedDate[2]} ${rusMonth} ${preparedDate[0]}`;
};

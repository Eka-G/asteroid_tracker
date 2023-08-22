const BIG_DIAMETER = 100;

export const getImgParams = (size: number) => {
  const isLargeSize = size >= BIG_DIAMETER;

  return {
    path: isLargeSize ? "/img/asteroid_big.png" : "/img/asteroid_small.png",
    width: isLargeSize ? 36 : 22,
    height: isLargeSize ? 40 : 24,
  };
};

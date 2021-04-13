export const calcRowField = (i: number, rowNumber: number): number => {
  if (rowNumber !== 0) {
    return Math.ceil((i + 1) / rowNumber);
  } else return 0;
};

export const calcColField = (i: number, rowNumber: number): number => {
  if (rowNumber !== 0) {
    let col = (i + 1) % rowNumber;
    if (col === 0) {
      col = rowNumber;
    }
    return col;
  } else return 0;
};

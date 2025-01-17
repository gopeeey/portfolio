function scaleNumber(
  x: number,
  x0: number,
  x1: number,
  y0: number,
  y1: number
) {
  return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0); // returns y
}

// Selects a random number between two numbers a and b
export function randNumBtw(a: number, b: number) {
  const rand = Math.random();
  return scaleNumber(rand, 0, 1, a, b);
}

function paintBucket(matrix, row, col, newColor) {
  const originalColor = matrix[row][col];
  const isSameColor = originalColor === newColor;

  if (isSameColor) return matrix;

  function paint(r, c) {
    const shouldNotPaint =
      r < 0 ||
      c < 0 ||
      r >= matrix.length ||
      c >= matrix[0].length ||
      matrix[r][c] !== originalColor;

    if (shouldNotPaint) return;

    paint(r + 1, c);
    paint(r - 1, c);
    paint(r, c + 1);
    paint(r, c - 1);
    matrix[r][c] = newColor;
  }

  paint(row, col);
  return matrix;
}

// Example usage
let imageMatrix = [
  [".", "#", "#", "#", ".", "."],
  [".", "#", ".", ".", "#", "."],
  [".", "#", "#", "#", ".", "."],
  [".", "#", ".", ".", ".", "."],
];
// Pixel (0,1) and new color 'O'
// console.log(paintBucket(imageMatrix, 0, 1, "O"));

// Pixel (1,3) and new color 'o'
console.log(paintBucket(imageMatrix, 1, 3, "o"));

// Pixel (1,3) and new color '#'
// console.log(paintBucket(imageMatrix, 1, 3, "#"));

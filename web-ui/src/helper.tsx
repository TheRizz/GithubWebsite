import { Complex, sqrt } from 'mathjs'

export function convertHexToRGB(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
  }
  return { r: 0, g: 0, b: 0 }
}

function createRGBFromColors(r: number, g: number, b: number): RGB {
  return { r: r, g: g, b: b } as RGB
}

interface RGB {
  r: number
  g: number
  b: number
}

function ColourDistance(e1: RGB, e2: RGB): number | Complex {
  const rmean: number = (e1.r + e2.r) / 2;
  const red: number = e1.r - e2.r;
  const green: number = e1.g - e2.g;
  const blue: number = e1.b - e2.b;
  return sqrt((((512 + rmean) * red * red) >> 8) + 4 * green * green + (((767 - rmean) * blue * blue) >> 8));
}

const totalRange = ColourDistance(convertHexToRGB('808080'), convertHexToRGB('0000FF'))
// Grey - #808080
// Blue - #0000FF

export function findMoreSimilarColor(firstColor: RGB, secondColor: RGB, compareColor: RGB): string {
  const distToFirst = ColourDistance(firstColor, compareColor)
  const distToSecond = ColourDistance(secondColor, compareColor)
  console.log('Difference between first color', distToFirst)
  console.log('Difference between second color', distToSecond)

  // Smaller number means less distance, which means more similar
  if (distToFirst < distToSecond) {
    return('The input color is more simliar to the first color')
  } else if (distToFirst > distToSecond) {
    return('The input color is more simliar to the second color')
  } else {
    return('The input color is equally similar to both colors')
  }
}

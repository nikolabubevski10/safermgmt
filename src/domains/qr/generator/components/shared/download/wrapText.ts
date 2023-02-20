interface IWrapText {
  ctx: CanvasRenderingContext2D;
  text: string;
  x: number;
  y: number;
  maxWidth: number;
  lineHeight: number;
}

const wrapText = ({
  ctx,
  text,
  x,
  y,
  maxWidth,
  lineHeight,
}: IWrapText): void => {
  let line = '';

  for (let n = 0; n < text.length; n++) {
    const testLine = line + text.charAt(n);
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = text.charAt(n) + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
};

export default wrapText;

/** Renders `**bold**` markers in content-file copy as `<strong>`. */
export function renderBold(text: string, boldClassName = "") {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, index) =>
    index % 2 === 1 ? (
      <strong key={index} className={`font-bold ${boldClassName}`.trim()}>
        {chunk}
      </strong>
    ) : (
      chunk
    ),
  );
}

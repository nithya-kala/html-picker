type Style = { [key: string]: string };

export function ElOverlay(style: Style = {}) {
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    background: "rgba(250, 250, 200, 0.2)",
    border: "1px dashed red",
    boxSizing: "border-box",
    cursor: "crosshair",
    position: "absolute",
    zIndex: "5000",
    ...style,
  });

  const addToDOM = (parent: Node) => {
    parent.appendChild(overlay);
  };

  const removeFromDOM = () => {
    setBounds({ x: 0, y: 0, w: 0, h: 0 });
    overlay.remove();
  };

  const captureCursor = () => {
    overlay.style.pointerEvents = "auto";
  };

  const ignoreCursor = () => {
    overlay.style.pointerEvents = "none";
  };

  const setBounds = ({ x, y, w, h }: Rect) => {
    Object.assign(overlay.style, {
      left: x + "px",
      top: y + "px",
      width: w + "px",
      height: h + "px",
    });
  };

  return { addToDOM, removeFromDOM, captureCursor, ignoreCursor, setBounds };
}

export type Rect = { x: number; y: number; w: number; h: number };

export const getElementBounds = (el: HTMLElement): Rect => {
  const rect = el.getBoundingClientRect();
  return {
    x: window.pageXOffset + rect.left,
    y: window.pageYOffset + rect.top,
    w: el.offsetWidth,
    h: el.offsetHeight,
  };
};

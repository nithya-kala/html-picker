import { ElOverlay, getElementBounds } from "./elementOverlay2";

type Callback = (node: HTMLElement) => void;

export function nodePicker(onHover: Callback, onClick: Callback) {
  let overlay = ElOverlay();
  let active: boolean = false;
  let target: HTMLElement | undefined;

  const start = (parent: Node = document.body) => {
    if (active) return false;
    active = true;

    overlay.addToDOM(parent);

    document.addEventListener("mousemove", handleMouseMove, true);
    document.addEventListener("click", handleClick, true);
  };

  const stop = () => {
    active = false;
    target = undefined;

    overlay.removeFromDOM();

    document.removeEventListener("mousemove", handleMouseMove, true);
    document.removeEventListener("click", handleClick, true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    overlay.ignoreCursor();
    const elFromPoint = document.elementFromPoint(event.clientX, event.clientY);
    const newTarget = elFromPoint as HTMLElement;
    overlay.captureCursor();

    // Skip if target hasn't changed
    if (!newTarget || newTarget === target) return;

    target = newTarget;

    const bounds = getElementBounds(newTarget);
    overlay.setBounds(bounds);

    onHover(newTarget);
  };

  const handleClick = (event: MouseEvent) => {
    if (!target) return;

    onClick(target);
    event.preventDefault();
  };

  return { start, stop };
}

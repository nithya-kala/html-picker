import { ElOverlay, getElementBounds } from "./ElementOverlay";
export function htmlPicker(onHover, onClick) {
    let overlay = new ElOverlay();
    let active = false;
    let target;
    const start = (parent = document.body) => {
        if (active)
            return false;
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
    const handleMouseMove = (event) => {
        overlay.ignoreCursor();
        const elFromPoint = document.elementFromPoint(event.clientX, event.clientY);
        const newTarget = elFromPoint;
        overlay.captureCursor();
        // Skip if target hasn't changed
        if (!newTarget || newTarget === target)
            return;
        target = newTarget;
        const bounds = getElementBounds(newTarget);
        overlay.setBounds(bounds);
        onHover(newTarget);
    };
    const handleClick = (event) => {
        if (!target)
            return;
        onClick(target);
        event.preventDefault();
    };
    return { start, stop };
}

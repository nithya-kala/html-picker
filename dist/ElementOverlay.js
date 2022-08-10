export class ElOverlay {
    constructor(styles = {}) {
        this.overlay = document.createElement("div");
        Object.assign(this.overlay.style, Object.assign({ background: "rgba(250, 250, 200, 0.2)", border: "1px dashed red", boxSizing: "border-box", cursor: "crosshair", position: "absolute", zIndex: "5000" }, styles));
    }
    addToDOM(parent) {
        parent.appendChild(this.overlay);
    }
    removeFromDOM() {
        this.setBounds({ x: 0, y: 0, w: 0, h: 0 });
        this.overlay.remove();
    }
    captureCursor() {
        this.overlay.style.pointerEvents = "auto";
    }
    ignoreCursor() {
        this.overlay.style.pointerEvents = "none";
    }
    setBounds({ x, y, w, h }) {
        Object.assign(this.overlay.style, {
            left: x + "px",
            top: y + "px",
            width: w + "px",
            height: h + "px",
        });
    }
}
export const getElementBounds = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        x: window.pageXOffset + rect.left,
        y: window.pageYOffset + rect.top,
        w: el.offsetWidth,
        h: el.offsetHeight,
    };
};

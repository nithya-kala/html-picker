export declare class ElOverlay {
    overlay: HTMLDivElement;
    constructor(styles?: Record<string, string>);
    addToDOM(parent: Node): void;
    removeFromDOM(): void;
    captureCursor(): void;
    ignoreCursor(): void;
    setBounds({ x, y, w, h }: Rect): void;
}
export declare type Rect = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export declare const getElementBounds: (el: HTMLElement) => Rect;

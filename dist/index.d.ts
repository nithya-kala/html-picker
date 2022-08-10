declare type Callback = (node: HTMLElement) => void;
export declare function htmlPicker(onHover: Callback, onClick: Callback): {
    start: (parent?: Node) => false | undefined;
    stop: () => void;
};
export {};

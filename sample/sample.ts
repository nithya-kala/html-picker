import { nodePicker } from "../src/nodePicker";

function main() {
  const status = document.getElementById("status");
  const startButton = document.getElementById("start");

  const setElement = (el: HTMLElement) => {
    const tags: any[] = [];
    while (el.parentNode) {
      tags.push(el.tagName);
      el = el.parentNode as HTMLElement;
    }
    status!.innerText = tags
      .reverse()
      .map((t) => t.toLowerCase())
      .join(" > ");
  };

  const onHover = (node: HTMLElement) => {
    setElement(node);
  };

  const onClick = (node: HTMLElement) => {
    picker.stop();
    // @ts-ignore
    startButton.disabled = false;
    console.log(node);
  };

  const picker = nodePicker(onHover, onClick);

  const start = () => {
    // @ts-ignore
    startButton.disabled = true;
    picker.start();
  };

  startButton?.addEventListener("click", start);
}

main();

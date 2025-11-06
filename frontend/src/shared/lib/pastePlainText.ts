import { insertTextAtCursor } from "./insertTextAtCursor";

export const pastePlainText = (e: React.ClipboardEvent<HTMLElement>) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  insertTextAtCursor(text);

  const event = new Event("input", { bubbles: true });
  e.currentTarget.dispatchEvent(event);
};

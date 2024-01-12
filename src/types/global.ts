export type restrictions = "drag" | "delete";

export interface TreeElement {
  id: number;
  parent: number;
  text: string;
  droppable?: boolean;
  data?: { restrictions: restrictions[] };
}

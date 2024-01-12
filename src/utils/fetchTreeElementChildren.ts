import { TreeElement } from "../types/global.ts";

const fetchTreeElementChildren = (
  parentId: number,
  allTreeElements: TreeElement[]
): TreeElement[] => {
  return allTreeElements
    .filter((element) => element.parent === parentId)
    .reduce((children, element) => {
      children.push(element);
      if (element.droppable) {
        const nestedChildren = fetchTreeElementChildren(
          element.id,
          allTreeElements
        );
        children.push(...nestedChildren);
      }
      return children;
    }, [] as TreeElement[]);
};

export default fetchTreeElementChildren;

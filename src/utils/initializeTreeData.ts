import { TreeElement } from "../types/global.ts";
import fetchTreeElementChildren from "./fetchTreeElementChildren.ts";

const initializeTreeData = (treeData: TreeElement[]): TreeElement[] => {
  treeData.forEach((parentElement) => {
    if (parentElement.droppable && parentElement.data?.restrictions.length) {
      const children = fetchTreeElementChildren(parentElement.id, treeData);
      children.forEach((childElement) => {
        const matchingElement = treeData.find(
          (el) => el.id === childElement.id
        );
        if (matchingElement) {
          matchingElement.data = parentElement.data;
        }
      });
    }
  });

  return treeData;
};

export default initializeTreeData;

import { useEffect, useState } from "react";

import { NodeModel } from "@minoru/react-dnd-treeview";
import { TreeElement } from "../types/global.ts";
import fetchTreeElementChildren from "../utils/fetchTreeElementChildren.ts";

export const useFileTree = (initialData: TreeElement[]) => {
  const [treeData, setTreeData] = useState(initialData);

  useEffect(() => {
    setTreeData(initialData);
  }, [initialData]);

  const handleDrop = (newTreeData: NodeModel<TreeElement["data"]>[]) =>
    setTreeData(newTreeData as TreeElement[]);

  const handleDelete = (id: number) => {
    const children = fetchTreeElementChildren(id, treeData);

    setTreeData((prev) =>
      prev.filter((el) => {
        const isChild = children.some((child) => child.id === el.id);
        return el.id !== id && !isChild;
      })
    );
  };

  return {
    treeData,
    handleDrop,
    handleDelete,
  };
};

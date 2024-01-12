import { TreeElement } from "../types/global";
import { useMemo } from "react";

export const useFilteredFileTree = (
  fileTreeData: TreeElement[],
  searchQuery: string
) => {
  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return fileTreeData;
    }

    const lowercaseSearchQuery = searchQuery.toLowerCase();

    return fileTreeData
      .filter((fileElement) => {
        if (!fileElement.droppable) {
          const parentElement = fileTreeData.find(
            (el) => el.id === fileElement.parent
          );
          const isParentMatch = parentElement?.text
            .toLowerCase()
            .includes(lowercaseSearchQuery);
          return (
            isParentMatch ||
            fileElement.text.toLowerCase().includes(lowercaseSearchQuery)
          );
        }

        return fileElement.text.toLowerCase().includes(lowercaseSearchQuery);
      })
      .map((fileElement, _, arr) => {
        const hasValidParent =
          fileElement.parent !== 0 &&
          !arr.find((el) => el.id === fileElement.parent);

        return hasValidParent ? { ...fileElement, parent: 0 } : fileElement;
      });
  }, [searchQuery, fileTreeData]);

  return {
    filteredData,
    searchQuery,
  };
};

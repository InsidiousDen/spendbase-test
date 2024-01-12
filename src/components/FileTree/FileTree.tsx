import { FC, useEffect, useRef } from "react";
import {
  MultiBackend,
  Tree,
  TreeMethods,
  getBackendOptions,
} from "@minoru/react-dnd-treeview";
import { useFileTree, useFilteredFileTree } from "../../hooks";

import CustomDragPreview from "../CustomDragPreview";
import { DndProvider } from "react-dnd";
import FileTreeItem from "../FileTreeItem";
import { FileTreeProps } from "./types";
import initializeTreeData from "../../utils/initializeTreeData";

const FileTree: FC<FileTreeProps> = ({ initialData, searchValue }) => {
  const { treeData, handleDelete, handleDrop } = useFileTree(
    initializeTreeData(initialData)
  );
  const { filteredData } = useFilteredFileTree(treeData, searchValue);

  const treeRef = useRef<TreeMethods>(null);

  useEffect(() => {
    searchValue && treeRef.current?.openAll();
  }, [searchValue]);

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        ref={treeRef}
        tree={filteredData}
        rootId={0}
        dragPreviewRender={(monitorProps) => (
          <CustomDragPreview monitorProps={monitorProps} />
        )}
        onDrop={handleDrop}
        canDrag={(draggedItem) =>
          !draggedItem?.data?.restrictions.includes("drag")
        }
        render={(node, { depth, isOpen, hasChild, onToggle }) => (
          <FileTreeItem
            id={node.id as number}
            text={node.text}
            droppable={!!node.droppable}
            restrictions={node.data?.restrictions || []}
            depth={depth}
            isOpen={isOpen}
            hasChildren={hasChild}
            onToggle={onToggle}
            onDelete={handleDelete}
          />
        )}
        classes={{
          draggingSource: "draggingSource",
          dropTarget: "dropTarget",
        }}
      />
    </DndProvider>
  );
};

export default FileTree;

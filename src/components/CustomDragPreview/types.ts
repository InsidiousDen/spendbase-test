import { DragLayerMonitorProps } from "@minoru/react-dnd-treeview";
import { TreeElement } from "../../types/global.ts";

export type CustomDragPreviewProps = {
  monitorProps: DragLayerMonitorProps<TreeElement["data"]>;
};

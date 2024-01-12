import { restrictions } from "../../types/global";

export interface FileTreeItemProps {
  id: number;
  text: string;
  droppable: boolean;
  restrictions: restrictions[];
  depth: number;
  hasChildren: boolean;
  isOpen: boolean;
  onDelete: (id: number) => void;
  onToggle: () => void;
}

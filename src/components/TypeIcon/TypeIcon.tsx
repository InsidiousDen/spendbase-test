import { FC } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import { TypeIconProps } from "./types";

const TypeIcon: FC<TypeIconProps> = ({ droppable }) => {
  return droppable ? <FolderIcon /> : <ImageIcon />;
};

export default TypeIcon;

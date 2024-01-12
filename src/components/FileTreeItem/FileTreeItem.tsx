import { ArrowContainer, Container, Text, Wrapper } from "./styles";
import { IconButton, Typography } from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { FC } from "react";
import { FileTreeItemProps } from "./types";
import TypeIcon from "../TypeIcon";

const FileTreeItem: FC<FileTreeItemProps> = ({
  id,
  text,
  droppable,
  restrictions,
  depth,
  isOpen,
  hasChildren,
  onDelete,
  onToggle,
}) => {
  return (
    <Wrapper style={{ paddingLeft: depth * 24 }}>
      <Container onClick={onToggle}>
        <ArrowContainer isOpen={isOpen}>
          {droppable && hasChildren && (
            <div>
              <ArrowRightIcon />
            </div>
          )}
        </ArrowContainer>
        <TypeIcon droppable={droppable} />
        <Text>
          <Typography>{text}</Typography>
        </Text>
      </Container>
      {!restrictions.includes("delete") && (
        <IconButton
          size="small"
          aria-label="delete"
          onClick={() => onDelete(id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      )}
    </Wrapper>
  );
};

export default FileTreeItem;

import { Icon, Wrapper } from "./styles.ts";

import { CustomDragPreviewProps } from "./types.ts";
import { FC } from "react";
import TypeIcon from "../TypeIcon";

const CustomDragPreview: FC<CustomDragPreviewProps> = (props) => {
  const item = props.monitorProps.item;

  return (
    <Wrapper>
      <Icon>
        <TypeIcon droppable={!!item.droppable} />
        {item.text}
      </Icon>
    </Wrapper>
  );
};

export default CustomDragPreview;

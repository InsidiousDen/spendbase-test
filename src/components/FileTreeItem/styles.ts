import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: theme.spacing(4),
  paddingRight: theme.spacing(1),
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: theme.spacing(4),
  paddingRight: theme.spacing(1),
  cursor: "pointer",
}));

export const Text = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(1),
}));

export const ArrowContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: theme.spacing(3),
  width: theme.spacing(3),
  fontSize: 0,
  transition: "transform linear 0.1s",
  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
}));

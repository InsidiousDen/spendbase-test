import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "inline-grid",
  gridTemplateColumns: "auto auto",
  gap: theme.spacing(1),
  alignItems: "center",
  padding: theme.spacing(1),
  backgroundColor: "#393b48",
  color: "#fff",
  borderRadius: theme.spacing(0.5),
  fontSize: 16,
  pointerEvents: "none",
}));

export const Icon = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 3,
});

import { Alert, Box, CircularProgress } from "@mui/material";

import FileTree from "../FileTree/FileTree.tsx";
import SearchInput from "../SearchInput";
import { useFetchInitialTreeData } from "../../hooks";
import { useState } from "react";

const Main = () => {
  const { initialData, loading, error } = useFetchInitialTreeData();
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box sx={{ padding: 3 }}>
      <SearchInput onSearch={setSearchValue} />
      <Box sx={{ marginTop: 2 }}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <FileTree initialData={initialData} searchValue={searchValue} />
        )}
      </Box>
    </Box>
  );
};

export default Main;

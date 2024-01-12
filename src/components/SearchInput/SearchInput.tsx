import { FC, useEffect, useState } from "react";

import { TextField } from "@mui/material";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      onSearch(searchValue);
    }, 500);

    return () => {
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <TextField
      size="small"
      label="Search"
      variant="outlined"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchInput;

import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React from "react";

interface SearchFieldProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  disabled?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({ handleChange, label, value, disabled }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        id="outlined-name"
        label={label}
        variant="filled"
        value={value}
        onChange={handleChange}
        sx={{ margin: "15px" }}
        disabled={disabled}
      />
    </Box>
  );
};

export default SearchField;

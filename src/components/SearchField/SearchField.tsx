import React from "react";

interface SearchFieldProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ handleChange, placeholder, value }) => {
  return <input type="text" placeholder={placeholder} onChange={handleChange} value={value} />;
};

export default SearchField;

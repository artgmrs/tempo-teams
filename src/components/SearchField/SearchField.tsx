import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTeamsFilterResult } from "shared/store/slices/appSlice";
import { RootState } from "shared/store/store";

const SearchField = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.app.teams);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const textSearch = e.target.value.toLowerCase();

    if (textSearch.length > 0) {
      const searchResult = teams.filter((team) => {
        return team.name.toLowerCase().match(searchInput.toLowerCase());
      });

      dispatch(setTeamsFilterResult(searchResult));
    } else if (textSearch.length === 0) {
      dispatch(setTeamsFilterResult(null));
    }
  };

  return (
    <input
      type="text"
      placeholder="Search team here..."
      onChange={handleChange}
      value={searchInput}
    ></input>
  );
};

export default SearchField;

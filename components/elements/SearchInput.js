"use client"

;
import { searchTextValue, setSearchText } from "@redux/features/userData/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
  const value = useSelector(searchTextValue);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <>
      <input 
        className="py-2 px-4 rounded-lg border-2 border-cyan-200 w-72 outline-none"
        type="text"
        placeholder="جستجو"
        value={value}
        onChange={changeHandler}
      />
    </>
  );
};

export default SearchInput;

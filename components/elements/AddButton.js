"use client";

import { openClose } from "@redux/features/modalInfo/modalInfoSlice";
import { useDispatch } from "react-redux";

const AddButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openClose("add"));
  };
  
  return (
    <button
      className="bg-sky-200 py-3 px-7 rounded-lg font-semibold text-sky-950 border border-sky-200 hover:bg-sky-200/80 ease-in-out"
      onClick={clickHandler}
    >
      ایجاد کاربر جدید
    </button>
  );
};

export default AddButton;

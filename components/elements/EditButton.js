"use client"

import { openClose } from "@redux/features/modalInfo/modalInfoSlice";
import { useDispatch } from "react-redux";

const EditButton = ({id}) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openClose(id));
  };
  return (
    <button onClick={clickHandler} className="bg-sky-200 py-1 px-3 rounded-lg font-semibold text-sky-950 border border-sky-200">
      تغییر
    </button>
  );
};

export default EditButton;

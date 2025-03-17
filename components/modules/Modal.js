"use client";

import { openClose } from "@redux/features/modalInfo/modalInfoSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(openClose());
  };

  return (
    <div
      className=" fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10"
      onClick={closeHandler}
    >
      <div className="m-24 mx-auto max-w-[800]">
        <span
          className="w-8 h-8 bg-red-400 text-white text-2xl flex justify-center items-center rounded-md mb-5 cursor-pointer"
          onClick={closeHandler}
        >
          x
        </span>
        <form></form>
      </div>
    </div>
  );
};

export default Modal;

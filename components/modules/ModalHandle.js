"use client"

import { useSelector } from "react-redux";
import { checkOpen } from "@redux/features/modalInfo/modalInfoSlice";
import Modal from "./Modal";

const ModalHandle = () => {
  const isOpen = useSelector(checkOpen) || null
  return (
    <>
      {isOpen ? <Modal /> : null}
    </>
  );
};

export default ModalHandle;
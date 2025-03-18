"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalType, openClose } from "@redux/features/modalInfo/modalInfoSlice";
import FormInputs from "./FormInputs";
import { addUser, editUser, usersData } from "@redux/features/userData/userDataSlice";

const Modal = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    date: "",
    status: "تایید نشده",
  });
  const dispatch = useDispatch();
  const Data = useSelector(usersData)
  const formType = useSelector(modalType);

  useEffect(()=> {
    if (formType === "add") return
    const user = Data.find(user => user.id == formType)
    console.log(user)
    setFormInfo({...user})
  },[formType])

  const closeHandler = (e) => {
    e.preventDefault();
    dispatch(openClose());
  };

  const addEditHandler = (e) => {
    e.preventDefault();
    if (formType === "add") {
      const id = (+Data[Data.length -1].id + 1).toString() // میشه از پکیج UUID استفاده کرد
      dispatch(addUser({...formInfo, id}))
    } else {
      dispatch(editUser({...formInfo}))
    }
    dispatch(openClose())
  };

  return (
    <div
      className=" fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10"
      onClick={closeHandler}
    >
      <div className="m-12 mx-auto max-w-[500]">
        <span
          className="w-8 h-8 bg-red-400 text-white text-2xl flex justify-center items-center rounded-md mb-5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            closeHandler(e);
          }}
        >
          x
        </span>
        <form
          className="flex flex-col gap-4 p-10 bg-slate-200/80 border-sky-300 backdrop-blur-3xl border-2 rounded-2xl w-fit mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <FormInputs formInfo={formInfo} setFormInfo={setFormInfo} />
          <div className="flex justify-between items-center">
            <button
              onClick={addEditHandler}
              className="bg-green-300/60 py-2 px-7 border border-sky-300 rounded-md"
            >
              {formType === "add" ? "ایجاد" : "تغییر"}
            </button>
            <button
              onClick={closeHandler}
              className="bg-red-300/60 py-2 px-7 border border-sky-300 rounded-md"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import InputElement from "@elements/InputElement";
import { openClose } from "@redux/features/modalInfo/modalInfoSlice";

const Modal = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    date: "",
    status: "تایید نشده",
  });

  const dispatch = useDispatch();

  const selectAndDateStyle = 'block w-96 py-2 px-5 mt-1 border-sky-300 border-2 rounded-lg outline-none'

  const closeHandler = () => {
    dispatch(openClose());
  };

  const changeHandler = (e) => {
    setFormInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formInfo);
  };

  const dateChange = (date) => {
    setFormInfo((prev) => ({ ...prev, date: date.toDate() }));
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
            closeHandler();
          }}
        >
          x
        </span>
        <form
          className="flex gap-4 p-10 bg-slate-200/80 border-sky-300 backdrop-blur-3xl border-2 rounded-2xl w-fit mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="">
            <InputElement
              label="نام"
              name="name"
              value={formInfo.name}
              type="text"
              onChange={changeHandler}
            />
            <InputElement
              label="ایمیل"
              name="email"
              value={formInfo.email}
              type="text"
              onChange={changeHandler}
            />
            <div className="flex flex-col mb-4">
              <label htmlFor="date">تاریخ ثبت نام: </label>
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                id="date"
                style={{ display: "block" }}
                inputClass={selectAndDateStyle}
                value={formInfo.date}
                onChange={dateChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="status">وضعیت:</label>
              <select id="status" name="status" value={formInfo.status} onChange={changeHandler} className={selectAndDateStyle}>
                <option value={"تایید شده"}>تایید شده</option>
                <option value={"تایید نشده"}>تایید نشده</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

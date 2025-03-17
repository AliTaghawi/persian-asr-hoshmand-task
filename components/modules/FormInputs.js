import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputElement from "@elements/InputElement";

const FormInputs = ({ formInfo, setFormInfo }) => {
  const selectAndDateStyle =
    "block w-96 py-2 px-5 mt-1 border-sky-300 border-2 rounded-lg outline-none";

  const changeHandler = (e) => {
    setFormInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formInfo);
  };

  const dateChange = (date) => {
    setFormInfo((prev) => ({ ...prev, date: new Date(date.toDate()).getTime() }));
  };

  return (
    <div>
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
        <select
          id="status"
          name="status"
          value={formInfo.status}
          onChange={changeHandler}
          className={selectAndDateStyle}
        >
          <option value={"تایید شده"}>تایید شده</option>
          <option value={"تایید نشده"}>تایید نشده</option>
        </select>
      </div>
    </div>
  );
};

export default FormInputs;

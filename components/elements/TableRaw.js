import moment from "moment-jalaali";

const TableRaw = ({ user }) => {
  const tdStyles =
    "py-2 px-4 border-l-2 border-sky-200 text-center group-odd:border-sky-50";
  return (
    <tr className="border-b-2 border-sky-200 odd:bg-sky-100 group last:border-b-0">
      <td className={`${tdStyles} rounded-br-lg`}>{user.name}</td>
      <td className={tdStyles}>{user.email}</td>
      <td className={tdStyles}>
        {moment(user.date).locale("fa").format("jYYYY/jM/jD")}
      </td>
      <td className={tdStyles}>{user.status ? "تایید شده" : "رد شده"}</td>
      <td className={`${tdStyles} border-l-0 rounded-bl-xl`}>
        <button className="bg-sky-200 py-1 px-3 rounded-lg font-semibold text-sky-950 border border-sky-200">
          تغییر
        </button>
      </td>
    </tr>
  );
};

export default TableRaw;

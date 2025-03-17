import moment from "moment-jalaali";
import EditButton from "./EditButton";

const TableRaw = ({ user }) => {
  const tdStyles =
    "py-2 px-4 border-l-2 border-sky-200 text-center group-odd:border-sky-50";
  return (
    <tr className="border-b-2 border-sky-200 odd:bg-sky-100 group last:border-b-0">
      <td className={`${tdStyles} group-last:rounded-br-lg`}>{user.name}</td>
      <td className={tdStyles}>{user.email}</td>
      <td className={tdStyles}>
        {moment(user.date).locale("fa").format("jYYYY/jM/jD")}
      </td>
      <td className={`${tdStyles} ${user.status === "تایید شده" ? "text-green-500" : "text-red-400" }`}>{user.status}</td>
      <td className={`${tdStyles.replace("border-l-2", "border-l-0")} group-last:rounded-bl-lg`}>
        <EditButton id={user.id}/>
      </td>
    </tr>
  );
};

export default TableRaw;

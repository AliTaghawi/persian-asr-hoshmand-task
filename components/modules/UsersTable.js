import TableRaw from "@elements/TableRaw";
import ThSort from "@elements/ThSort";

const UsersTable = ({ data }) => {
  const thStyles = "bg-sky-200 px-4 py-2 border-l-2 border-sky-50 cursor-pointer";
  return (
    <div className="p-10 bg-sky-50 w-fit mt-14 mb-8 rounded-3xl border-2 border-sky-100">
      <table>
        <thead>
          <tr className="border-b-2 border-sky-50">
            <ThSort styles={`${thStyles} rounded-tr-lg`} label="نام" data={data} sort="name" />
            <ThSort styles={thStyles} label="ایمیل" data={data} sort="email" />
            <ThSort styles={thStyles} label="تاریخ عضویت" data={data} sort="date" />
            <ThSort styles={thStyles} label="وضعیت" data={data} sort="status" />
            <th className={`${thStyles} rounded-tl-lg border-l-0 cursor-auto`}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <TableRaw key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

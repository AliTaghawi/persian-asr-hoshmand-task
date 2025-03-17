import TableRaw from "@elements/TableRaw";

const UsersTable = ({ data }) => {
  const thStyles = "bg-sky-200 px-4 py-2 border-l-2 border-sky-50";
  return (
    <div className="p-10 bg-sky-50 w-fit mt-14 mb-8 rounded-3xl border-2 border-sky-100">
      <table>
        <thead>
          <tr className="border-b-2 border-sky-50">
            <th className={`${thStyles} rounded-tr-lg `}>نام</th>
            <th className={thStyles}>ایمیل</th>
            <th className={thStyles}>تاریخ عضویت</th>
            <th className={thStyles}>وضعیت</th>
            <th className={`${thStyles} rounded-tl-lg border-l-0`}></th>
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

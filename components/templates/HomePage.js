import UsersTable from "@modules/UsersTable";
import moment from "moment-jalaali";

const HomePage = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <UsersTable data={data} />
      <button className="bg-sky-200 py-3 px-7 rounded-lg font-semibold mb-10 text-sky-950 border border-sky-200">ایجاد یوزر جدید</button>
    </div>
  );
};

export default HomePage;

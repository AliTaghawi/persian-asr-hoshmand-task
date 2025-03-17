import ModalHandle from "@modules/ModalHandle";
import UsersTable from "@modules/UsersTable";

const HomePage = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <UsersTable data={data} />
      <ModalHandle />
    </div>
  );
};

export default HomePage;

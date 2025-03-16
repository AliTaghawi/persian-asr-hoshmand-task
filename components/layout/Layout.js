import SearchInput from "@modules/SearchInput";

const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full flex justify-between items-center p-4 pt-5 pb-10 bg-gradient-to-r from-red-50 via-fuchsia-50 to-cyan-50">
        <h2 className="font-bold text-xl ">پرشین عصر هوشمند</h2>
        <SearchInput />
      </header>
      <main className="min-h-[700px]">{children}</main>
      <footer className="text-center p-4 py-8 bg-gradient-to-r from-red-50 via-fuchsia-50 to-cyan-50">
        تسک مصاحبه |{" "}
        <a
          className="text-blue-500"
          href="https://www.linkedin.com/in/ali-taghawi-29360b338?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTdoHWRHUT5qzv4KcE0SJ3w%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          سید علی تقوی
        </a>
      </footer>
    </>
  );
};

export default Layout;

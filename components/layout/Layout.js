import SearchInput from "@elements/SearchInput";

const Layout = ({ children }) => {

  // استایل‌های مشترک هدر و فوتر
  const styles = " p-4 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50"

  return (
    <>
      <header className={`w-full pt-5 pb-10 ${styles}`}>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-">
        <h2 className="font-bold text-xl ">پرشین عصر هوشمند</h2>
        <SearchInput />
        </div>
      </header>
      <main className="min-h-[520px] ">{children}</main>
      <footer className={`text-center py-8 ${styles}`}>
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

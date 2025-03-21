import HomePage from "@templates/HomePage";

const Home = async () => {
  const res = await fetch("http://localhost:4000/users", {cache: "no-cache"})
  const data = await res.json()
  return (
    <HomePage data={data} />
  );
};

export default Home;
import { About, Banner } from "@/components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <About />
    </div>
  );
};

export default Home;

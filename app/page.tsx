import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & share <br className="max-md:hidden" />
        <span className="orange_gradient">AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        AI prompter Lorem ipsum dolor sit amet consectetur adipis elit.
        Excepturi enim, neque earum. Sapiente atque laborum iusto laboriosam.
      </p>

      <Feed />
    </section>
  );
};

export default Home;

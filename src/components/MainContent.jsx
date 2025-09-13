import PostCard from "./PostCard";

const MainContent = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div>Tis is MainContent</div>
      {data.map(() => (
        <PostCard />
      ))}
      <div>This is HTML Tags</div>
      {20 - 4}
    </>
  );
};

export default MainContent;

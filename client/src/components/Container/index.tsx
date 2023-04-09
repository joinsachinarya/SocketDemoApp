import ChatBox from "../ChatBox";

const Container = () => {
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <>
      <div className="container">
        <div className="header">Socket Demo</div>
        <ChatBox onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default Container;

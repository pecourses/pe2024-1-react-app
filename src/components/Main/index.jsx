function Main({ isLogin, user: { specOffers } }) {
  const offerStyle = {
    color: "red",
  };

  return (
    <main>
      <p style={isLogin ? offerStyle : {}}>
        {isLogin ? specOffers : "Register for up to -50%"}
      </p>
      {/* {isLogin && <p>{specOffers}</p>} */}
      {false}
    </main>
  );
}
export default Main;

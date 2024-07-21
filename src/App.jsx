import ImageWrapper from "./components/ImageWrapper";

function App() {
  return (
    <ImageWrapper
      width="300px"
      height="400px"
      title="its image with cat"
      // hidden
    >
      <img
        src="https://storage.googleapis.com/pod_public/1300/151089.jpg"
        alt="cat"
      />
    </ImageWrapper>
  );
}

export default App;

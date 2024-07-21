function App() {
  return (
    <Wrapper>
      <h1>Heading1</h1>
    </Wrapper>
  );
}

export default App;

function Wrapper(props) {
  const { children } = props;
  return (
    <section>
      {children}
      <div>Wrapper</div>
    </section>
  );
}

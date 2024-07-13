function App() {
  const numbers = [1, 2, 3, 4, 5];

  const numbersList = numbers.map((n, index) => <li key={index}>{n}</li>);

  return <ul>{numbersList}</ul>;
}

export default App;

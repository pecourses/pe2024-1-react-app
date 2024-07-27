import { createContext, useContext, useState } from "react";

// 0 create context
const DataContext = createContext("def data");

function App() {
  const [data, setData] = useState("app data");
  return (
    // 1 обгорнути юерево компонентів в провайдер з пропом value
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
}

export default App;

function Child() {
  return <ChildChild />;
}

function ChildChild() {
  // 2 зчитати контекст за іменем
  const data = useContext(DataContext);

  return <div>{data}</div>;
}

// App
//   Child1
//     ChildChild
//   Child2
//     ChildChild

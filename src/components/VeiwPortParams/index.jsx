import { useEffect } from "react";

function ViewPortParams() {
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup effect");
    };
  });
  return (
    <div>
      {console.log("render")}
      ViewPortParams
    </div>
  );
}

export default ViewPortParams;

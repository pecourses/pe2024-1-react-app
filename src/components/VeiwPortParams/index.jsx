import { useEffect, useState } from "react";

function ViewPortParams() {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    setSizes({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>w: {sizes.width}</p>
      <p>h: {sizes.height}</p>
    </div>
  );
}

export default ViewPortParams;

import { useEffect } from "react";

export default function WindowEvent() {
  useEffect(() => {
    const displayAlert = () => alert("User double clicked on the page!");
    window.addEventListener("dblclick", displayAlert);
    return () => window.removeEventListener("dblclick", displayAlert);
  }, []);

  return <h2>Window event active</h2>;
}

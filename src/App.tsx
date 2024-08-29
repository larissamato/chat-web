import { useEffect } from "react";
import { clearCache } from "@helpers/clearCache";

function App() {
  useEffect(() => {
    clearCache();
  }, [window.location.pathname]);
  return <div>Test</div>;
}

export default App;

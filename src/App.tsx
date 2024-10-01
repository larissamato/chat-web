import { useEffect } from "react";
import { clearCache } from "@helpers/clearCache";
import UserProvider from "@contexts/UserContext";

function App() {
  useEffect(() => {
    clearCache();
  }, [window.location.pathname]);
  return <UserProvider />;
}

export default App;

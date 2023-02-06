// import "./App.css";
import { Navbar } from "./components/navbar";
import { Homepage } from "./components/Homepage";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState(false);
  useEffect(() => {
    document.title = "Video Downloader 🤳🏻";
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <Alert status="info" variant="subtle">
        <AlertIcon />
        You are using a beta version for mobile users only.
      </Alert>

      <Homepage
        state={state}
        setState={setState}
        data={data}
        setData={setData}
        loader={loader}
        setLoader={setLoader}
      />
      <Footer />
    </div>
  );
}

export default App;

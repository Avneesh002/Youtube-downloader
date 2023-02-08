import { Navbar } from "./components/navbar";
import { Homepage } from "./components/Homepage";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Alert, AlertIcon, Stack, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    document.title = "Video Downloader 🤳🏻";
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Alert status="info" variant="subtle">
        <AlertIcon />
        <Text>
          PC 💻 and Tablet 📱 versions are live now! Tutorial 📚 section is also
          added.
        </Text>
      </Alert>
      <Stack
        bg={"#E2E8F0"}
        p={useBreakpointValue({ base: "0%", lg: "0% 15% 10% 15%" })}
      >
        <Homepage
          state={state}
          setState={setState}
          data={data}
          setData={setData}
          loader={loader}
          setLoader={setLoader}
        />
      </Stack>
      <Footer />
    </div>
  );
}

export default App;

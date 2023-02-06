import { Stack, Text, useBreakpointValue, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "./styles/Navbar.css";

export function Navbar() {
  return (
    <>
      <Stack
        pl={useBreakpointValue({ base: "0px", lg: "20px" })}
        direction={"row"}
        className={"navbar_body"}
      >
        <Image
          bg={" rgb(49, 113, 153)"}
          position={"relative"}
          transform={"rotate(-10deg)"}
          left="2px"
          borderRadius={"15px"}
          boxShadow={"1px 2px 9px 5px "}
          w={useBreakpointValue({ base: "70px", lg: "90px" })}
          src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_142110380_ORGANIC_YT_ICON_400.gif"
        />
        <Stack
          w={useBreakpointValue({ base: "500px", lg: "800px" })}
          align={useBreakpointValue({ base: "center", lg: "end" })}
          justify={useBreakpointValue({ base: "center", lg: "space-evenly" })}
        >
          <Text
            fontSize={useBreakpointValue({ base: "19px", lg: "35px" })}
            className="neonText"
          >
            <Typewriter
              options={{
                strings: ["Youtube V!deo Downloader 📽️"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Stack>
      </Stack>
    </>
  );
}

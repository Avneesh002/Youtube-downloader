import { Stack, Text, useBreakpointValue, Image } from "@chakra-ui/react";
import "./styles/Navbar.css";

export function Navbar() {
  return (
    <>
      <Stack
        pl={useBreakpointValue({ base: "0px", lg: "20px" })}
        direction={"row"}
        className={"navbar_body"}
        h="60px"
      >
        <Image
          bg={" rgb(49, 113, 153)"}
          position={"relative"}
          transform={"rotate(-10deg)"}
          left="5px"
          top="5px"
          borderRadius={"15px"}
          boxShadow={"1px 2px 9px 5px "}
          w={useBreakpointValue({ base: "40px", lg: "50px" })}
          h={useBreakpointValue({ base: "40px", lg: "50px" })}
          src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_142110380_ORGANIC_YT_ICON_400.gif"
          alt="logo"
        />
        <Stack
          w={"100%"}
          align={useBreakpointValue({ base: "center", lg: "center" })}
          justify={useBreakpointValue({ base: "center", lg: "center" })}
        >
          <Text
            fontSize={useBreakpointValue({
              base: "19px",
              sm: "25px",
              lg: "35px",
            })}
            className="neonText"
            overflow={"hidden"}
            whiteSpace="nowrap"
            textOverflow={"clip"}
          >
            Youtube V!deo Downloader 📽️
          </Text>
        </Stack>
      </Stack>
    </>
  );
}

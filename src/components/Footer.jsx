import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Stack
        borderTop={"1px solid white"}
        textAlign={"center"}
        justify="center"
        bg={"rgb(49, 113, 150)"}
        w={"100%"}
        h="60px"
      >
        <Text
          color={"blue.100"}
          fontSize={useBreakpointValue({ base: "15px", lg: "20px" })}
        >
          © 2023 YouTube Downloader, Made With 💓 by Avneesh (Full Stack Web
          Developer 🧑🏻‍💻)
        </Text>
      </Stack>
    </>
  );
};

export default Footer;

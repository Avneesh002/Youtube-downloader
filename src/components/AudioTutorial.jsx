import { Button, Image, Stack, Text } from "@chakra-ui/react";

export function AudioTutorial() {
  return (
    <Stack pt={"20px"}>
      <Button align={"center"} colorScheme="blue">
        {" "}
        Audio Tutorial
      </Button>
      <Text pb={"10px"} align={"center"} fontWeight={"500"}>
        🔵 Click on 3 dots button
      </Text>
      <Image src="/audio3Dots.png" />
      <Text pb={"10px"} align={"center"} fontWeight={"500"}>
        🔵 Click on download button
      </Text>
      <Image src="/audioDownload.png" />
    </Stack>
  );
}

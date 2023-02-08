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
      <Image loading="lazy" src="./audio3Dots.WebP" alt="Click on 3 dots" />
      <Text pb={"10px"} align={"center"} fontWeight={"500"}>
        🔵 Click on download button
      </Text>
      <Image loading="lazy" src="/audioDownload.WebP" alt="Click on Download" />
    </Stack>
  );
}

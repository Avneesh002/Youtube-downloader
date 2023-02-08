import { Button, Image, Stack, Text } from "@chakra-ui/react";

export function VideoTutorial() {
  return (
    <Stack pt={"20px"}>
      <Button align={"center"} colorScheme="blue">
        {" "}
        Video Tutorial
      </Button>
      <Text pb={"10px"} align={"center"} fontWeight={"500"}>
        🔵 Click on download button
      </Text>
      <Image loading="lazy" src="/videoDownload.WebP" alt="download video" />
    </Stack>
  );
}

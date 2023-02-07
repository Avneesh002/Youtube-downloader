import {
  Button,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

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
      <Image src="/videoDownload.png" />
    </Stack>
  );
}

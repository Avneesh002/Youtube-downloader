import { Badge, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { nanoid } from "nanoid";

function sendArray(videos) {
  let arr = [];
  let videoArr = [];
  arr.push(Object.values(videos));
  //
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[0].length; j++) {
      if (
        arr[i][j][4].includes("mp4a.40.2") &&
        arr[i][j][4].includes("video/mp4")
      ) {
        const obj = Object.assign({}, arr[i][j]);
        videoArr.push(obj);
      }
    }
  }
  return videoArr;
}
export const DownloadVideo = ({ videos }) => {
  if (videos == null || videos == undefined) return "";
  return (
    <>
      {sendArray(videos).map((el, i) => {
        return (
          <>
            <Stack
              borderRadius="5px"
              key={nanoid()}
              p={"15px"}
              boxShadow="rgba(99, 99, 99, 0.4) 0px 2px 8px 0px"
            >
              <Stack fontWeight={"500"} direction={"row"}>
                <Text>Quality:</Text>
                <Text>{el[3]}</Text>
              </Stack>
              <Stack direction="row">
                <Text fontWeight={"500"}>Size:</Text>
                <Text fontWeight={"500"} color="green">
                  {el[1] ? (
                    el[1]
                  ) : (
                    <Badge
                      borderRadius={"5px"}
                      p={"5px"}
                      colorScheme="whatsapp"
                    >
                      Recommended
                    </Badge>
                  )}
                </Text>
              </Stack>
              {console.log(videos)}
              <Stack
                opacity={"50%"}
                p={"5px"}
                fontWeight={"500"}
                direction={"row"}
                align="center"
                border={"1px solid"}
              >
                <Text>Format:</Text>
                <Text>{el[4]}</Text>
              </Stack>
              <a href={el[0]} target="_blank">
                <Button
                  onClick={() => (Window.href = el[0])}
                  colorScheme={"whatsapp"}
                >
                  Download Now 👇🏻
                </Button>
              </a>
            </Stack>
          </>
        );
      })}
    </>
  );
};

// https://youtu.be/RtVt--kt6AI

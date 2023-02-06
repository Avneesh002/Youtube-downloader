import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { nanoid } from "nanoid";

function sendArray(videos) {
  let arr = [];
  let videoArr = [];
  arr.push(Object.values(videos));

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i; j < arr[0].length; j++) {
  //       if (arr[i][j][4].includes("v")) {
  //         const obj = Object.assign({}, arr[i][j]);
  //         videoArr.push(obj);
  //         console.log(videoArr);
  //         return videoArr;
  //       }
  //     }
  //   }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[0].length; j++) {
      if (arr[i][j][4].includes("v")) {
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
                  {el[1] ? el[1] : "currently no data"}
                </Text>
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

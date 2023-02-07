import {
  Button,
  Flex,
  Input,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import getYouTubeID from "get-youtube-id";

let vals = JSON.parse(localStorage.getItem("val"));

const Search = ({
  videos,
  setVideos,
  data,
  setData,
  loader,
  setLoader,
  setState,
  state,
}) => {
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
    setClick(!click);
  };

  useEffect(() => {
    let vdoId = getYouTubeID(`${url}`);
    setId(vdoId);
  }, [click]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "65d9dfef2dmshbdd543f9b7a8761p1c27afjsnd7b785242d5c",
      "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
    },
  };

  const handleBtn = (options, id) => {
    setState(true);
    setLoader(true);
    fetch(
      `https://youtube-video-download-info.p.rapidapi.com/dl?id=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("val", JSON.stringify(response));
        setData(response);
        setVideos(response.link);
      });

    setLoader(false);
  };
  // console.log(vals);
  return (
    <>
      <Stack m={"auto"} w={useBreakpointValue({ lg: "80%" })} pb={"50px"}>
        <Flex>
          <Input
            onChange={(e) => handleChange(e)}
            borderColor={"blue.900"}
            focusBorderColor="blue.400"
            placeholder="Enter URL here"
            type={"url"}
          />
          <Button
            w={useBreakpointValue({ lg: "100px" })}
            variant={"solid"}
            onClick={() => handleBtn(options, id)}
            bg={"rgb(49, 113, 153)"}
          >
            <SearchIcon color={"white"} fontWeight="500" />
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default Search;

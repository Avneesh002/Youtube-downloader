import {
  Button,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Loader } from "./Loader";
import Search from "./Search";
import { DownloadVideo } from "./Video";
import { useState } from "react";
import { nanoid } from "nanoid";
import { DownloadImage } from "./Images";
import { VideoTutorial } from "./VideoTutorial";
import { AudioTutorial } from "./AudioTutorial";
import Contact from "./Contact";
// import { Movies } from "./Movies";

function SearchedData({ data, handleVideo, handleAudio }) {
  return (
    <Stack
      key={nanoid()}
      p={"10px"}
      borderRadius="8px"
      border={"1px solid"}
      w={useBreakpointValue({ lg: "60%" })}
      m={"auto"}
      // h={useBreakpointValue({ lg: "300px" })}
    >
      <Stack>
        <Image alt="image not loaded" src={data.thumb} />
        <Text fontWeight={"500"}>📛{data.title}</Text>

        <Text fontWeight={"500"}>⌛{data.length}</Text>
        <Text fontWeight={"500"}>👩🏻‍🎤{data.author}</Text>
      </Stack>
      <Flex justify={"space-evenly"}>
        <Button onClick={handleVideo} colorScheme={"whatsapp"}>
          For Video 📹
        </Button>
        <Button onClick={handleAudio} colorScheme={"whatsapp"}>
          For Audio 👂🏻
        </Button>
      </Flex>
    </Stack>
  );
}

export function Homepage({
  state,
  setState,
  data,
  setData,
  loader,
  setLoader,
}) {
  const toast = useToast();
  const [videos, setVideos] = useState([]);
  const [showVid, setShowVid] = useState(false);
  const [showAud, setShowAud] = useState(false);
  const [videoCount, setvideoCount] = useState(1);
  const [audioCount, setAudioCount] = useState(1);
  const handleVideo = () => {
    setShowVid(true);
    setShowAud(false);
    // console.log("Working vdo");
  };
  const handleAudio = () => {
    setShowAud(true);
    setShowVid(false);
    // console.log("Working audio");
  };

  return (
    <>
      <Stack
        key={nanoid()}
        p={useBreakpointValue({ base: "30px", lg: "60px" })}
        w="100%"
        bg="gray.200"
      >
        <Stack className="search_bar">
          <Search
            state={state}
            setState={setState}
            loader={loader}
            setLoader={setLoader}
            data={data}
            setData={setData}
            videos={videos}
            setVideos={setVideos}
          />
        </Stack>
        {state ? (
          <Stack className="searched_data">
            {loader || data == [] ? (
              <Loader />
            ) : (
              <SearchedData
                handleAudio={handleAudio}
                handleVideo={handleVideo}
                data={data}
              />
            )}
          </Stack>
        ) : (
          ""
        )}
        {showVid ? (
          <Button
            onClick={() => {
              setvideoCount(videoCount + 1);
              toast({
                title: `Increase This Videos count, go on ${videoCount}  😁`,
                status: "success",
                isClosable: true,
              });
            }}
            align={"center"}
            fontSize={"24px"}
            colorScheme={"blue"}
            fontWeight={"700"}
            borderRadius="10px"
          >
            Videos
          </Button>
        ) : (
          ""
        )}
        {showAud ? (
          <Button
            onClick={() => {
              setAudioCount(audioCount + 1);
              toast({
                title: `Increase This Audio count, go on ${audioCount}  😁`,
                status: "success",
                isClosable: true,
              });
            }}
            align={"center"}
            fontSize={"24px"}
            colorScheme={"blue"}
            fontWeight={"700"}
            borderRadius="10px"
          >
            Audios
          </Button>
        ) : (
          ""
        )}
        <SimpleGrid
          pb={"50px"}
          spacing={"20px"}
          columns={{ base: 1, md: 2, lg: 3 }}
          align="center"
        >
          {showVid ? <DownloadVideo videos={videos} /> : ""}
          {showAud ? <DownloadImage data={data} videos={videos} /> : ""}
        </SimpleGrid>
        <Stack color={""} className="supported_platforms">
          <Text>
            Being the third most popular website in the world, YouTube offers an
            excellent viewer experience to its users. What it can't provide is a
            YouTube video download. That is why our website is here to help you
            out!
          </Text>
          <Stack pt={"30px"} align={"center"}>
            <Text opacity={"70%"} fontSize={"24px"}>
              Supported Platforms:
            </Text>
            <Flex pt={"10px"} gap="20px">
              <Image
                w={"40px"}
                src="https://ssyoutube.com/img/platforms/windows.svg"
                alt="window platform"
              />
              <Image
                w={"40px"}
                src="https://ssyoutube.com/img/platforms/apple.svg"
                alt="apple platform"
              />
              <Image
                w={"40px"}
                src="https://ssyoutube.com/img/platforms/android.svg"
                alt="android platform"
              />
              <Image
                w={"40px"}
                src="https://ssyoutube.com/img/platforms/linux.svg"
                alt="linux platform"
              />
            </Flex>
            <Text pt={"30px"}>
              With our YouTube video downloader, you can select videos and
              download them free of charge! You can get high-quality videos in
              MP4, MP3, SQ, HD, Full HD quality, and other formats. Our website
              currently work on mobile.
            </Text>
            <Text pt={"10px"}>
              YouTube video download has never been so simple! Don't waste your
              time. Just use our website on your devices and enjoy free content!
            </Text>
          </Stack>
        </Stack>
        <Text
          opacity={"80%"}
          p={"30px 5px 5px 5px"}
          fontSize={"35px"}
          fontWeight={"600"}
          align={"center"}
        >
          Tutorials
        </Text>
        <VideoTutorial />
        <AudioTutorial />

        <Contact />
      </Stack>
    </>
  );
}

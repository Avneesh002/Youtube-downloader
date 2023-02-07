import {
  Button,
  useToast,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef();
  const toast = useToast();

  const handleClick = () => {
    if (name !== "" && email !== "") {
      toast({
        title: `Thanks ${name} 😷, for Writing to us .`,
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: `Please sir/madam  🥹 , fill all the information.`,
        status: "error",
        isClosable: true,
      });
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fll0fys",
        "template_sz4zva1",
        form.current,
        "63qqQleLy_NQbODxE"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Stack align={"center"} pt={"20px"}>
      <Text
        opacity={"80%"}
        p={"30px 5px 5px 5px"}
        fontSize={"35px"}
        fontWeight={"600"}
        align={"center"}
      >
        Suggestion
      </Text>
      <Stack w={"80%"}>
        <form ref={form} onSubmit={sendEmail}>
          <Input
            mb={"5px"}
            required
            onChange={(e) => setName(e.target.value)}
            borderColor={"blue.700"}
            placeholder="Enter Your name"
            type={"text"}
            name="from_name"
          />
          <Input
            mb={"5px"}
            required
            borderColor={"blue.700"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            type={"email"}
            name="from_email"
          />
          <Textarea
            mb={"5px"}
            required
            borderColor={"blue.700"}
            placeholder="Enter Text Here"
            name="message"
          ></Textarea>
          <Button
            onClick={handleClick}
            type="submit"
            value={"send"}
            colorScheme={"blue"}
          >
            Send Suggestion
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default Contact;

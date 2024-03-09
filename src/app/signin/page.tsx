"use client";

import {
  Box,
  Button,
  Center,
  Grid,
  PasswordInput,
  Text,
  TextInput,
  createTheme,
  Input,
  MantineProvider,
  Group,
  Notification,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import SigninStyle from "./Signin.module.css";
//import axios from "axios";
import React, { use, useState } from "react";
//import { useCookies } from "react-cookie";
import Link from "next/link";
import Image from "next/image";
import { getUserbyId, login } from "@/firebase/firebase";
import { log } from "console";
import { useRouter } from "next/navigation";
//import eskalateLogo from "../../../public/Logo1.svg";
//import eskalateLogoResponsive from "../../../public/Logo.svg";

interface FormValues {
  email: string;
  password: string;
}

const Page = () => {
  const router = useRouter();
  const [loading, { toggle }] = useDisclosure();
  //  const [cookies, setCookie, removeCookie] = useCookies(["developer"]);
  const [loginFail, setLoginFail] = useState(false);

  const theme = createTheme({
    components: {
      Input: Input.extend({
        classNames: {
          input: SigninStyle.input,
        },
      }),
    },
  });

  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Email is required"),
      password: isNotEmpty("Password is required"),
    },
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    form.validate();
    const isValid = form.isValid();
    if (isValid) {
      //toggle();
      //console.log(form.values);
      //const response = login({
      //  email: form.values.email,
      //  password: form.values.password,
      //})
      //  .then((res: any) => {
      //    return res.uid;
      //  })
      //  .then(async (uid: any) => {
      //    const userData = await getUserbyId(uid);
      //    return userData;
      //  })
      //  .catch((error: any) => {
      //    console.log(error);
      //    setLoginFail(true);
      //  });
      //console.log("User DATA", response);

      const loginResponse = await login({
        email: form.values.email,
        password: form.values.password,
      });
      if (loginResponse?.uid) {
        const userData = await getUserbyId(loginResponse.uid);
        console.log("User DATA", userData);
        localStorage.setItem("user", JSON.stringify(userData));
        if (userData.role === "pharmacy") {
          router.push("http://localhost:3000/dashboard/dashboard");
        } else {
          router.push("http://localhost:3000/dashboard/pharmacy");
        }
      }
    }
  };

  return (
    <MantineProvider theme={theme}>
      <Grid className={SigninStyle.page} styles={{ inner: { margin: 0 } }}>
        <Grid.Col span={{ base: 12, lg: 6 }} className={SigninStyle.logo}>
          <Center>
            {/*<Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={300}
              height={300}
            />*/}

            <Image
              src={"/LogoPharma.svg"}
              width={500}
              height={300}
              alt="hello"
              //style={{ objectFit: "cover" }}
            />
          </Center>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }} className={SigninStyle.signin}>
          <form className={SigninStyle.signinForm} onSubmit={handleLogin}>
            <Text fw={500} className={SigninStyle.loginText}>
              Login
            </Text>

            <TextInput
              label="Email"
              placeholder="Your email"
              withAsterisk
              mt="md"
              {...form.getInputProps("email")}
              // maw={550}
            />
            <PasswordInput
              label="Password"
              withAsterisk
              placeholder="Input placeholder"
              {...form.getInputProps("password")}
              // maw={550}
            />

            <Button
              fullWidth
              style={{ backgroundColor: "#2195F3" }}
              type="submit"
              // maw={550}
            >
              Login
            </Button>
            <Button
              variant="outline"
              fullWidth
              loading={loading}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: "50px",
              }}
              // maw={550}
            >
              <IconBrandGoogleFilled
                style={{
                  marginRight: "10px",
                  color: "#2195F3",
                }}
              />
              Sign in with Google
            </Button>
            {loginFail && (
              <Notification
                onClose={() => setLoginFail(false)}
                color="red"
                title="Invalid Login Please Try Again!"
              ></Notification>
            )}

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              // maw={550}
            ></Box>
          </form>
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
};

export default Page;

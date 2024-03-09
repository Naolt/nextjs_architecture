"use client";
import ChangePassword from "@/components/Profile/ChangePassword";
import ChangeProfile from "@/components/Profile/ChangeProfile";
import {
  Avatar,
  Box,
  Card,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";

export default function DashBoardProfile() {
  return (
    <Stack p={30}>
      <Stack gap={30}>
        <Stack gap={10} mb={10}>
          <Text size="lg" fw={500}>
            {" "}
            Profile information
          </Text>
          <Text c={"dimmed"} size="sm">
            {" "}
            Manage your information
          </Text>
        </Stack>
      </Stack>
      <Card p={0}>
        <Group
          h={200}
          p={0}
          m={0}
          style={{ overflow: "hidden" }}
          pos={"relative"}
        >
          <Image src={"/banner.png"} fill style={{ objectFit: "cover" }} />
        </Group>
        <Group px={30} pos={"relative"}>
          <Group pos={"relative"} h={80} w={80}>
            <Avatar
              src={"/profile.jpg"}
              size={"xl"}
              pos={"absolute"}
              top={-50}
            />
          </Group>
          <Stack gap={5}>
            <Text size="lg" fw={500}>
              Soloda Pharmacy
            </Text>
            {/*  location */}
            <Text c={"dimmed"} size="sm">
              {/* generate realworld location in ethiopia street*/}
              Addis Ababa, Ethiopia
            </Text>
          </Stack>
        </Group>
      </Card>
      <Grid>
        <Grid.Col span={6}>
          <ChangePassword />
        </Grid.Col>
        <Grid.Col span={6}>
          <ChangeProfile />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

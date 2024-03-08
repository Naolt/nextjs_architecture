import {
  Group,
  Code,
  ScrollArea,
  rem,
  Text,
  Stack,
  Button,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconLogout,
  IconLogin,
} from "@tabler/icons-react";
import { UserButton } from "../UserButton/UserButton";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
import classes from "./NavbarNested.module.css";
import Image from "next/image";

const mockdata = [
  {
    label: "Dashboard",
    icon: IconGauge,
    link: "http://localhost:3000/dashboard/",
  },
  {
    label: "Product",
    icon: IconNotes,
    link: "http://localhost:3000/dashboard/product",
  },
  {
    label: "Category",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/category",
  },
  {
    label: "Pharmacy",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/pharmacy",
  },
  {
    label: "Order",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/pharmacy",
  },
  {
    label: "Delivery",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/pharmacy",
  },
];

export function NavbarNested() {
  return (
    <Stack
      p={"md"}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      pl={20}
    >
      <Group
        //p={10}
        style={{ justifySelf: "flex-start" }}
        pos={"relative"}
        h={80}
      >
        <Image
          src={"/LogoPharma.svg"}
          fill
          alt="hello"
          style={{ objectFit: "cover" }}
        />
        {/*<Text size="xl" fw={500} c={"blue.8"} style={{}}>
          PharmaHub
        </Text>*/}
      </Group>

      <ScrollArea
        className={classes.links}
        style={{ justifySelf: "flex-start" }}
      >
        <div className={classes.linksInner}>
          {mockdata.map((item) => (
            <LinksGroup {...item} key={item.label} />
          ))}
        </div>
      </ScrollArea>

      <Group style={{ justifySelf: "flex-end" }}>
        <UserButton />
        <UnstyledButton style={{ display: "flex", gap: 25 }}>
          <ThemeIcon variant="light">
            <IconLogin style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <Text fw={500}>Log out</Text>
        </UnstyledButton>
      </Group>
    </Stack>
  );
}

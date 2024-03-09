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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "firebase/database";

//display links based on role
//if role == admin: display Pharmacy,Category and Delivery and if role == pharmacy: display Product,Order and Dashboard

const mockdata = [
  {
    label: "Dashboard",
    icon: IconGauge,
    link: "http://localhost:3000/dashboard/dashboard",
    role: "pharmacy",
  },
  {
    label: "Product",
    icon: IconNotes,
    link: "http://localhost:3000/dashboard/product",
    role: "pharmacy",
  },
  {
    label: "Pharmacy",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/pharmacy",
    role: "admin",
  },
  {
    label: "Category",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/category",
    role: "admin",
  },

  {
    label: "Order",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/order",
    role: "pharmacy",
  },
  {
    label: "Delivery",
    icon: IconCalendarStats,
    link: "http://localhost:3000/dashboard/pharmacy",
    role: "admin",
  },
];

export function NavbarNested() {
  const router = useRouter();
  const [role, setRole] = useState(""); //get role from context or props

  useEffect(() => {
    //get role from local storage in the userData key which contains role name,email,role which is set after login
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    //console.log("In localstoarage", localStorage.getItem("userData"));
    if (userData.role) {
      setRole(userData.role);
    }
  }, []);

  const handleLogout = () => {
    //remove user data from local storage
    localStorage.removeItem("userData");
    //redirect to login page
    setRole("");
    router.push("http://localhost:3000/signin");
  };

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
          {mockdata
            .filter((item) => item.role == role)
            .map((item) => (
              <LinksGroup {...item} key={item.label} />
            ))}
        </div>
      </ScrollArea>

      <Group style={{ justifySelf: "flex-end" }}>
        <UserButton />
        <UnstyledButton
          style={{ display: "flex", gap: 25 }}
          onClick={handleLogout}
        >
          <ThemeIcon variant="light">
            <IconLogin style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <Text fw={500}>Log out</Text>
        </UnstyledButton>
      </Group>
    </Stack>
  );
}

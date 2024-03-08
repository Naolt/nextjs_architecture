import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
  NavLink,
} from "@mantine/core";
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link: string;
}

export function LinksGroup({ icon: Icon, label, link }: LinksGroupProps) {
  const router = useRouter();
  return (
    <UnstyledButton
      className={classes.control}
      onClick={() => {
        router.push(link);
      }}
      pl={20}
    >
      <Group justify="space-between" gap={0}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <ThemeIcon variant="light" size={30}>
            <Icon style={{ width: rem(18), height: rem(18) }} />
          </ThemeIcon>
          <Box ml={20}>{label}</Box>
        </Box>
      </Group>
    </UnstyledButton>
  );
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  link: "/",
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}

"use client";
import Header from "@/components/Header/Header";
import { NavbarNested } from "@/components/NavBarNested/NavBarNested";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>

      <AppShell.Main bg={"gray.1"}>{children}</AppShell.Main>
    </AppShell>
  );
}

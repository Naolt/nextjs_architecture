import { Burger, Group } from "@mantine/core";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <Group h={"100%"}>
      <Group
        h={"100%"}
        //bg={"green"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <Image src={"/next.svg"} width={90} height={90} alt="Logo" />
        <Burger opened={opened} onClick={toggle} size="sm" />
      </Group>
    </Group>
  );
}

"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Modal,
  Stack,
  Table,
  TableData,
  Text,
} from "@mantine/core";
import { IconEditCircle } from "@tabler/icons-react";

export default function ExpiredProducts() {
  const tableData: TableData = {
    caption: "Some elements from periodic table",
    head: ["Product Name", "Category", "Brand", "Price", "Quantity"],
    body: [
      [6, 12.011, "C", "Carbon", 4],
      [7, 14.007, "N", "Nitrogen", 5],
      [39, 88.906, "Y", "Yttrium", 7],
      [56, 137.33, "Ba", "Barium", 8],
      [58, 140.12, "Ce", "Cerium", 9],
    ],
  };
  return (
    <Card p={30} h={"100%"} withBorder>
      <Stack gap={30}>
        <Flex justify={"space-between"} align={"center"}>
          <Stack gap={10}>
            <Text size="md" fw={500}>
              {" "}
              Expired Products
            </Text>
          </Stack>
        </Flex>
        <Table data={tableData} borderColor="gray.4" color="gray.7" />
      </Stack>
    </Card>
  );
}

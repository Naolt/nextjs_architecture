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

export default function RecentlyAddedProducts() {
  const tableData: TableData = {
    head: ["Product Name", "Category", "Brand"],
    body: [
      [6, 12.011, "C"],
      [7, 14.007, "N"],
      [39, 88.906, "Y"],
      [56, 137.33, "Ba"],
      [58, 140.12, "Ce"],
    ],
  };
  return (
    <Card withBorder p={30} h={"100%"}>
      <Stack gap={30}>
        <Flex justify={"space-between"} align={"center"}>
          <Stack gap={10}>
            <Text size="md" fw={500}>
              {" "}
              Recently Added Products
            </Text>
          </Stack>
        </Flex>
        <Table data={tableData} borderColor="gray.4" />
      </Stack>
    </Card>
  );
}

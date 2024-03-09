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
    head: [
      "Product Name",
      "Category",
      "Brand",
      "Price",
      "Quantity",
      "Expire Date",
    ],
    body: [
      ["Paracetamol", "Pain Relief", "GSK", "100", "1000", "2023-12-31"],
      ["Ibuprofen", "Pain Relief", "GSK", "200", "500", "2023-12-31"],
      ["Amoxicillin", "Antibiotic", "GSK", "300", "300", "2023-12-31"],
      ["Ciprofloxacin", "Antibiotic", "GSK", "400", "200", "2023-12-31"],
      ["Doxycycline", "Antibiotic", "GSK", "500", "100", "2023-12-31"],
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

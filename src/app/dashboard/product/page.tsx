"use client";
import AddProductForm from "@/components/Product/AddProduct";
import EditProductForm from "@/components/Product/EditProduct";
import {
  Box,
  Button,
  Flex,
  Modal,
  Stack,
  Table,
  TableData,
  Text,
} from "@mantine/core";
import { Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEditCircle } from "@tabler/icons-react";

export default function ProductList() {
  const [opened, { open, close }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const tableData: TableData = {
    caption: "Some elements from periodic table",
    head: [
      "Product Name",
      "Category",
      "Brand",
      "Price",
      "Quantity",
      "Expire Date",
      "Action",
    ],
    // lets create real world data for pharmaceutical products
    body: [
      [
        "Paracetamol",
        "Pain Relief",
        "GSK",
        "100",
        "1000",
        "2023-12-31",
        <Button
          size="xs"
          onClick={openEdit}
          leftIcon={<IconEditCircle size={20} />}
        >
          Edit
        </Button>,
      ],
      [
        "Ibuprofen",
        "Pain Relief",
        "GSK",
        "200",
        "500",
        "2023-12-31",
        <Button
          size="xs"
          onClick={openEdit}
          leftIcon={<IconEditCircle size={20} />}
        >
          Edit
        </Button>,
      ],
      [
        "Ciprofloxacin",
        "Antibiotic",
        "GSK",
        "300",
        "300",
        "2023-12-31",
        <Button
          size="xs"
          onClick={openEdit}
          leftIcon={<IconEditCircle size={20} />}
        >
          Edit
        </Button>,
      ],
      [
        "Amoxicillin",
        "Antibiotic",
        "GSK",
        "400",
        "200",
        "2023-12-31",
        <Button
          size="xs"
          onClick={openEdit}
          leftIcon={<IconEditCircle size={20} />}
        >
          Edit
        </Button>,
      ],
      [
        "Omeprazole",
        "Gastrointestinal",
        "GSK",
        "500",
        "100",
        "2023-12-31",
        <Button
          size="xs"
          onClick={openEdit}
          leftIcon={<IconEditCircle size={20} />}
        >
          Edit
        </Button>,
      ],
      [
        "Ranitidine",
        "Gastrointestinal",
        "GSK",
        "600",
        "50",
        "2023-12-31",
        <Button
          size="xs"
          onClick={openEdit}
          leftIcon={<IconEditCircle size={20} />}
        >
          Edit
        </Button>,
      ],
    ],
  };
  return (
    <Box p={30}>
      <Stack gap={30}>
        <Flex justify={"space-between"} align={"center"}>
          <Stack gap={10}>
            <Text size="lg" fw={500}>
              {" "}
              Product List
            </Text>
            <Text c={"dimmed"} size="sm">
              {" "}
              Manage your products
            </Text>
          </Stack>
          <Button onClick={open}> Add New Product</Button>
        </Flex>
        <Table data={tableData} withTableBorder borderColor="gray.4" />
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Product"
        centered
        size={"2xl"}
      >
        <AddProductForm />
      </Modal>
      <Modal
        opened={editOpened}
        onClose={closeEdit}
        title="Edit Product"
        centered
        size={"2xl"}
      >
        <EditProductForm />
      </Modal>
    </Box>
  );
}

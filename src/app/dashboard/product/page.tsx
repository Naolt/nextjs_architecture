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
    head: ["Product Name", "Category", "Brand", "Price", "Quantity", "Action"],
    body: [
      [
        6,
        12.011,
        "C",
        "Carbon",
        4,
        <IconEditCircle key={1} onClick={openEdit} />,
      ],
      [
        7,
        14.007,
        "N",
        "Nitrogen",
        5,
        <IconEditCircle key={2} onClick={openEdit} />,
      ],
      [
        39,
        88.906,
        "Y",
        "Yttrium",
        7,
        <IconEditCircle key={3} onClick={openEdit} />,
      ],
      [
        56,
        137.33,
        "Ba",
        "Barium",
        8,
        <IconEditCircle key={4} onClick={openEdit} />,
      ],
      [
        58,
        140.12,
        "Ce",
        "Cerium",
        9,
        <IconEditCircle key={5} onClick={openEdit} />,
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
        size={"lg"}
      >
        <AddProductForm />
      </Modal>
      <Modal
        opened={editOpened}
        onClose={closeEdit}
        title="Edit Product"
        centered
        size={"lg"}
      >
        <EditProductForm />
      </Modal>
    </Box>
  );
}

"use client";
import AddCategoryForm from "@/components/Category/AddCategory";
import EditCategoryForm from "@/components/Category/EditCategory";
import AddProductForm from "@/components/Product/AddProduct";
import EditProductForm from "@/components/Product/EditProduct";
import {
  Avatar,
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

export default function CategoryList() {
  const [opened, { open, close }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);

  // give me sample category data for pharmacy inverntory

  const tableData: TableData = {
    caption: "Pharmacy Inventory Categories",
    head: ["Category Image", "Category Name", "Action"],
    body: [
      [
        <Avatar key={1} />,
        "Pain Relief",
        <IconEditCircle key={1} onClick={openEdit} />,
      ],
      [
        <Avatar key={2} />,
        "Allergy",
        <IconEditCircle key={2} onClick={openEdit} />,
      ],
      [
        <Avatar key={3} />,
        "Heartburn",
        <IconEditCircle key={3} onClick={openEdit} />,
      ],
      // Add more categories and descriptions as needed
    ],
  };

  return (
    <Box p={30}>
      <Stack gap={30}>
        <Flex justify={"space-between"} align={"center"}>
          <Stack gap={10}>
            <Text size="lg" fw={500}>
              {" "}
              Category List
            </Text>
            <Text c={"dimmed"} size="sm">
              {" "}
              Manage your Categories
            </Text>
          </Stack>
          <Button onClick={open}> Add New Category</Button>
        </Flex>
        <Table data={tableData} withTableBorder borderColor="gray.4" />
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Category"
        centered
        size={"md"}
      >
        <AddCategoryForm />
      </Modal>
      <Modal
        opened={editOpened}
        onClose={closeEdit}
        title="Edit Category"
        centered
        size={"md"}
      >
        <EditCategoryForm />
      </Modal>
    </Box>
  );
}

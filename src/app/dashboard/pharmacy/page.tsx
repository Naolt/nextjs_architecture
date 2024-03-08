"use client";
import AddPharmacyForm from "@/components/Pharmacy/AddPharmacy";
import EditPharmacyForm from "@/components/Pharmacy/EditPharmacy";
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

export default function PharmacyList() {
  const [opened, { open, close }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const tableData: TableData = {
    caption: "Pharmacy Information",
    head: [
      "Pharmacy Name",
      "Pharmacy Username",
      "Pharmacy Location",
      "Actions",
    ],
    body: [
      [
        "Healthy Choice Pharmacy",
        "hcp_admin",
        "123 Main Street, Anytown, CA 12345",
        <IconEditCircle key={1} onClick={openEdit} />,
      ],
      [
        "Night Owl Pharmacy",
        "nightowl_user",
        "789 Elm Street, Anytown, CA 54321",
        <IconEditCircle key={2} onClick={openEdit} />,
      ],
      [
        "Sunrise Wellness Center",
        "sunrise_staff",
        "456 Maple Avenue, Anytown, CA 98765",
        <IconEditCircle key={3} onClick={openEdit} />,
      ],
      // Add more pharmacies as needed
    ],
  };

  return (
    <Box p={30}>
      <Stack gap={30}>
        <Flex justify={"space-between"} align={"center"}>
          <Stack gap={10}>
            <Text size="lg" fw={500}>
              {" "}
              Pharmacy List
            </Text>
            <Text c={"dimmed"} size="sm">
              {" "}
              Manage pharmacy Accounts
            </Text>
          </Stack>
          <Button onClick={open}> Add New Pharmacy</Button>
        </Flex>
        <Table data={tableData} withTableBorder borderColor="gray.4" />
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Pharmacy"
        centered
        size={"sm"}
      >
        <AddPharmacyForm />
      </Modal>
      <Modal
        opened={editOpened}
        onClose={closeEdit}
        title="Edit Pharmacy"
        centered
        size={"sm"}
      >
        <EditPharmacyForm />
      </Modal>
    </Box>
  );
}

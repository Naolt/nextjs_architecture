"use client";
import OrderList from "@/components/Order/OrderList";
import AddPharmacyForm from "@/components/Pharmacy/AddPharmacy";
import EditPharmacyForm from "@/components/Pharmacy/EditPharmacy";
import AddProductForm from "@/components/Product/AddProduct";
import EditProductForm from "@/components/Product/EditProduct";
import { getPharmacies } from "@/firebase/firebase";
import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Modal,
  Stack,
  Table,
  TableData,
  Text,
  Textarea,
} from "@mantine/core";
import { Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEditCircle } from "@tabler/icons-react";
import { use, useEffect, useState } from "react";

export default function PharmacyList() {
  // single order can have multiple items so we well make each item a table row so the will contain the name of the product, the quantity and the price of the product
  const [closeModalOpened, { open: openCancelModal, close: closeCancelModal }] =
    useDisclosure(false);
  const tableData: TableData = {
    caption: "Order Information",
    head: ["Product", "Quantity", "Price"],
    body: [
      ["Paracetamol", "2", "200"],
      ["Amoxicillin", "3", "300"],
      ["Ibuprofen", "1", "100"],
    ],
  };

  return (
    <Stack>
      {/* Customer Information */}
      <Stack gap={10}>
        <Text fw={500}>Customer Information</Text>
        <Stack gap={5}>
          <Text size="sm">Name: John Doe</Text>
          <Text size="sm">Email: JognDoe@gmail.com </Text>
          <Text size="sm">Phone: 09012345678</Text>
        </Stack>
      </Stack>
      {/* Order Information */}
      <Stack gap={10}>
        <Text fw={500}>Order Information</Text>
        <Table data={tableData} withTableBorder borderColor="gray.4" />
        {/* Total Order */}
        <Text c={"blue.8"}>Total: ETB 600</Text>
      </Stack>
      {/* Actions */}
      <Flex gap={10} mt={20} justify="flex-end">
        <Button color="red" onClick={openCancelModal}>
          Cancel Order
        </Button>
        <Button color="green">Deliver Order</Button>
      </Flex>
      {/*  when order is canceled message should be written */}
      <Modal
        opened={closeModalOpened}
        onClose={closeCancelModal}
        title="Order #123"
        centered
        size={"sm"}
      >
        <Textarea
          label="Reason for Cancelation"
          placeholder="Write the reason for cancelation"
          required
        />
        <Group mt={30} justify="flex-end">
          <Button color="red" onClick={closeCancelModal}>
            Cancel Order
          </Button>
        </Group>
      </Modal>
    </Stack>
  );
}

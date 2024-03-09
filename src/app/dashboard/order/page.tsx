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
  Modal,
  Stack,
  Table,
  TableData,
  Text,
} from "@mantine/core";
import { Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEditCircle } from "@tabler/icons-react";
import { use, useEffect, useState } from "react";

export default function PharmacyList() {
  const [opened, { open, close }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);

  //const [pharmacies, setPharmacies] = useState([]);

  //const fetchPharmacies = async () => {
  //  const pharmacies = await getPharmacies();
  //  return pharmacies;
  //};

  //useEffect(() => {
  //  // fetch pharmacies
  //  const pharmacies = fetchPharmacies().then((pharmacies) => {
  //    //console.log(Object.values(pharmacies));
  //    setPharmacies(Object.values(pharmacies));
  //  });

  //  // setPharmacies(pharmacies);
  //}, []);

  //const tableBody = pharmacies.map((pharmacy: any) => {
  //  return [
  //    pharmacy.name,
  //    "789 Elm Street, Anytown, CA 54321",
  //    <IconEditCircle key={pharmacy.owner} onClick={openEdit} />,
  //  ];
  //});

  // orders can be on different state: pending which means the order is not yet approved, completed which means the order is approved and failed which means the order is not approved the other is delivery status which means the order is on the way to the customer and delivered which means the order is already delivered to the customer so lets create a data that reflects this so we can create a badge for each of the status: their name can be pending, accepted, canceled, on delivery and delivered and the colors can be yellow, blue, red, orange and green respectively

  const tableData: TableData = {
    caption: "Order List",
    head: [
      "Order ID",
      "Customer",
      "Gateway",
      "Total",
      "Date",
      "Status",
      "Action",
    ],
    body: [
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={1} color="yellow">
          pending
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={1}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={2} color="blue">
          Accepted
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={2}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={3} color="red">
          Canceled
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={3}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={4} color="orange">
          On Delivery
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={4}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={5} color="green">
          Delivered
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={5}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={6} color="green">
          Delivered
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={6}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={7} color="green">
          Delivered
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={7}>
          View
        </Button>,
      ],
      [
        "#123",
        "John Doe",
        "Paypal",
        "$200",
        "12/12/2021",
        <Badge key={8} color="green">
          Delivered
        </Badge>,
        <Button size="xs" variant="light" onClick={open} key={8}>
          View
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
              Order List
            </Text>
            <Text c={"dimmed"} size="sm">
              {" "}
              List of all orders
            </Text>
          </Stack>
        </Flex>
        <Table data={tableData} withTableBorder borderColor="gray.4" />
      </Stack>
      <Modal
        opened={opened}
        onClose={close}
        title="Order #123"
        centered
        size={"lg"}
      >
        {/*  list of ordered items */}
        <OrderList />
      </Modal>
    </Box>
  );
}

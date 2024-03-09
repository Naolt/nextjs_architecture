"use client";
import AddPharmacyForm from "@/components/Pharmacy/AddPharmacy";
import EditPharmacyForm from "@/components/Pharmacy/EditPharmacy";
import AddProductForm from "@/components/Product/AddProduct";
import EditProductForm from "@/components/Product/EditProduct";
import { getPharmacies } from "@/firebase/firebase";
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
import { use, useEffect, useState } from "react";

export default function PharmacyList() {
  const [opened, { open, close }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);

  const [pharmacies, setPharmacies] = useState([]);

  const fetchPharmacies = async () => {
    const pharmacies = await getPharmacies();
    return pharmacies;
  };

  useEffect(() => {
    // fetch pharmacies
    const pharmacies = fetchPharmacies().then((pharmacies) => {
      //console.log(Object.values(pharmacies));
      setPharmacies(Object.values(pharmacies));
    });

    // setPharmacies(pharmacies);
  }, []);

  const tableBody = pharmacies.map((pharmacy: any) => {
    return [
      pharmacy.name,
      "789 Elm Street, Anytown, CA 54321",
      <IconEditCircle key={pharmacy.owner} onClick={openEdit} />,
    ];
  });

  const tableData: TableData = {
    caption: "Pharmacy Information",
    head: ["Pharmacy Name", "Pharmacy Location", "Actions"],
    body: tableBody,
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

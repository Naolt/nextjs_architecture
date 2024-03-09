import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Stack,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import CategoryImage from "../CategoryImage";
import { addUserWithRolePharmacy } from "@/firebase/firebase";

export default function AddPharmacyForm() {
  const form = useForm({
    initialValues: {
      pharmacyName: "",
      pharmacyUserName: "",
      pharmacyEmail: "",
    },

    validate: {
      //  email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      pharmacyName: (value: string) =>
        value.length > 0 ? null : "Pharmacy name is required",
      pharmacyUserName: (value: string) =>
        value.length > 0 ? null : "Pharmacy username is required",
      pharmacyEmail: (value: string) =>
        value.length > 0 ? null : "Pharmacy email is required",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    form.validate();
    const isValid = form.isValid();
    if (isValid) {
      console.log(form.values);
      addUserWithRolePharmacy({
        name: form.values.pharmacyName,
        username: form.values.pharmacyUserName,
        email: form.values.pharmacyEmail,
      }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            withAsterisk
            label="Pharmacy name"
            description="Enter the pharmacy name here."
            {...form.getInputProps("pharmacyName")}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            withAsterisk
            label="Pharmacy username"
            description="Enter the pharmacy user name here."
            {...form.getInputProps("pharmacyUserName")}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            withAsterisk
            label="Email"
            description="Enter the pharmacy email here."
            {...form.getInputProps("pharmacyEmail")}
          />
        </Grid.Col>
      </Grid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

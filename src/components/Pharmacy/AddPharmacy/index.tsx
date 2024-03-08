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

export default function AddPharmacyForm() {
  const form = useForm({
    initialValues: {
      pharmacyName: "",
      pharmacyUserName: "",
    },

    validate: {
      //  email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      pharmacyName: (value: string) =>
        value.length > 0 ? null : "Pharmacy name is required",
      pharmacyUserName: (value: string) =>
        value.length > 0 ? null : "Pharmacy username is required",
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            withAsterisk
            label="Pharmacy name"
            description="Enter the pharmacy name here."
            {...form.getInputProps("categoryName")}
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
      </Grid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

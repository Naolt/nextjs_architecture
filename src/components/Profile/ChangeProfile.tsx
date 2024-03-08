import { TextInput, Checkbox, Button, Group, Box, Card } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ChangeProfile() {
  const form = useForm({
    initialValues: {
      pharmacyName: "",
      pharmacyAddress: "",
    },

    validate: {
      pharmacyName: (value) => value.length == 0 && "Pharmacy name is required",
      pharmacyAddress: (value) =>
        value.length == 0 && "Pharmacy name is required",
    },
  });

  return (
    <Card p={30}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Pharmacy Name"
          description="Password must be at least 8 characters long"
          {...form.getInputProps("pharmacyName")}
        />
        <TextInput
          withAsterisk
          label="Pharmacy Address"
          description="Password must be at least 8 characters long"
          {...form.getInputProps("pharmacyAddress")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Card>
  );
}

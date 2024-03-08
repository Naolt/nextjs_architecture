import { TextInput, Checkbox, Button, Group, Box, Card } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ChangePassword() {
  const form = useForm({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },

    validate: {
      oldPassword: (value) => {
        if (value.length < 8) {
          return "Password is too short";
        }
      },
      newPassword: (value) => {
        if (value.length < 8) {
          return "Password is too short";
        }
      },
    },
  });

  return (
    <Card p={30}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Old password"
          description="Password must be at least 8 characters long"
          {...form.getInputProps("oldPassword")}
        />
        <TextInput
          withAsterisk
          label="New password"
          description="Password must be at least 8 characters long"
          {...form.getInputProps("newPassword")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Change Password</Button>
        </Group>
      </form>
    </Card>
  );
}

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

export default function AddCategoryForm() {
  const form = useForm({
    initialValues: {
      categoryImage: null,
      categoryName: "",
    },

    validate: {
      //  email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      categoryName: (value: string) =>
        value.length > 0 ? null : "Category name is required",
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid>
        <Grid.Col span={12}>
          <CategoryImage />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            withAsterisk
            label="Category name"
            description="Enter the category name here."
            {...form.getInputProps("categoryName")}
          />
        </Grid.Col>
      </Grid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

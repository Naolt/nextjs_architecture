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

export default function AddProductForm() {
  const form = useForm({
    initialValues: {
      productName: "",
      category: "",
      brand: "",
      price: "",
      quantity: "",
    },

    validate: {
      //  email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Product name"
            description="Enter the product name here."
            {...form.getInputProps("productName")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Category"
            description="Enter the category of the product."
            {...form.getInputProps("category")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Brand"
            description="Enter the brand of the product."
            {...form.getInputProps("brand")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Price"
            description="Enter the price of the product."
            {...form.getInputProps("price")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Quantity"
            description="Enter the quantity of the product."
            {...form.getInputProps("quantity")}
          />
        </Grid.Col>
      </Grid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

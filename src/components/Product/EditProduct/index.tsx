import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Stack,
  Grid,
  Switch,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function EditProductForm() {
  const form = useForm({
    initialValues: {
      productName: "",
      category: "",
      brand: "",
      price: "",
      sellingPrice: "",
      quantity: "",
      expireDate: "",
      visible: false,
      description: "",
      dosage: "",
      minimumQuantity: "",
      maximumQuantity: "",
      productImage: null,
    },

    validate: {
      //  email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Product name"
            description="Enter the product name here."
            {...form.getInputProps("productName")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Category"
            description="Enter the category of the product."
            {...form.getInputProps("category")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Brand"
            description="Enter the brand of the product."
            {...form.getInputProps("brand")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Price"
            description="Enter the price of the product."
            {...form.getInputProps("price")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Selling Price"
            description="Enter the selling price of the product."
            {...form.getInputProps("sellingPrice")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Quantity"
            description="Enter the quantity of the product."
            {...form.getInputProps("quantity")}
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Minimum Quantity"
            description="Enter the minimum quantity of the product."
            {...form.getInputProps("minimumQuantity")}
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Maximum Quantity"
            description="Enter the maximum quantity of the product."
            {...form.getInputProps("maximumQuantity")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            withAsterisk
            label="Expire Date"
            description="Enter the expire date of the product."
            //{...form.getInputProps("quantity")}
            type="date"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Textarea
            withAsterisk
            label="Description"
            description="Enter the description of the product."
            {...form.getInputProps("description")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Textarea
            withAsterisk
            label="Dosage"
            description="Enter the dosage of the product."
            {...form.getInputProps("dosage")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Product Image"
            description="Upload the product image."
            {...form.getInputProps("productImage")}
            type="file"
          />
        </Grid.Col>
        <Grid.Col span={6} style={{ display: "flex", alignItems: "flex-end" }}>
          <Switch defaultChecked label="Visible" />
        </Grid.Col>
      </Grid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

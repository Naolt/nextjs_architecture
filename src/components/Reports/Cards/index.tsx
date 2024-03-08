import { Card, Group, Stack, Text } from "@mantine/core";

export default function DashBoardCard({ label, color, value, Icon }) {
  return (
    <Card bg={color}>
      <Group justify="space-between" p={20}>
        <Stack gap={5}>
          <Text c={"white"} fw={500} size="xl">
            {value}
          </Text>
          <Text c={"white"}>{label}</Text>
        </Stack>
        <Icon style={{ color: "white" }} size="32px" />
      </Group>
    </Card>
  );
}

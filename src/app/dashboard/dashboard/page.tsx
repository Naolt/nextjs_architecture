"use client";
import DashBoardCard from "@/components/Reports/Cards";
import DashBaordBarChart from "@/components/Reports/Charts/BarChart";
import ExpiredProducts from "@/components/Reports/Tables/ExpiredProducts";
import RecentlyAddedProducts from "@/components/Reports/Tables/RecentlyAddedProducts";
import { Container, Grid } from "@mantine/core";
import {
  IconAlertCircle,
  IconBrandProducthunt,
  IconMoneybag,
  IconReportMoney,
  IconUser,
} from "@tabler/icons-react";

export default function pharmacyDashboardpage({
  chidlren,
}: {
  chidlren: React.ReactNode;
}) {
  return (
    <Grid bg={"rd"} p={30}>
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={3}>
            <DashBoardCard
              color="orange.6"
              label={"Total Stock"}
              value={20}
              Icon={IconBrandProducthunt}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <DashBoardCard
              color="green.6"
              label={"Total Profit"}
              value={"ETB 430"}
              Icon={IconMoneybag}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <DashBoardCard
              color="blue.6"
              label={"Total Sales"}
              value={"ETB 1200"}
              Icon={IconReportMoney}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <DashBoardCard
              color="red.6"
              label={"Out of Stock Products"}
              value={15}
              Icon={IconAlertCircle}
            />
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={8}>
            <DashBaordBarChart />
          </Grid.Col>
          <Grid.Col span={4}>
            <RecentlyAddedProducts />
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={12}>
        <ExpiredProducts />
      </Grid.Col>
    </Grid>
  );
}

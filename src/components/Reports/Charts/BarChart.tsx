import { Card, Stack, Text } from "@mantine/core";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class DashBoardBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          // lets use real world data for the x-axis and lets make the last month march since we are in march
          categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        },
      },
      series: [
        // lets use real world data for the series which is name and data
        {
          name: "Sales",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <Card withBorder>
        <Stack gap={10}>
          <Text size="md" fw={500}>
            {" "}
            Sales Report
          </Text>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={250}
          />
        </Stack>
      </Card>
    );
  }
}

export default DashBoardBarChart;

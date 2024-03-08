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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
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

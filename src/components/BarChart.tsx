import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import * as faker from "faker";
import styled from "@emotion/styled";
import { Country, GlobalData } from "../types";

interface Props {
  countries: Country[];
  global: GlobalData;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: ``,
    },
  },
};

const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const BarChart: React.FunctionComponent<Props> = ({ countries, global }) => {
  const generateChartData = () => {
    const globalNewConfirmed: number = global.NewConfirmed;
    const data: number[] = [];
    const labels: string[] = [];
    const globalNewConArray: number[] = [];
    countries.forEach((country) => {
      data.push(country.NewConfirmed);
      labels.push(country.Country);
    });
    globalNewConArray.push(globalNewConfirmed);
    return {
      labels,
      datasets: [
        // {
        //   label: "New Confirmed",
        //   data: [globalNewConfirmed],
        //   backgroundColor: "rgba(255, 99, 132, 0.5)",
        // },
        {
          label: "신규 확진자",
          data,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  };
  return (
    <ChartWrapper>
      <Bar options={options} data={generateChartData()} />;
    </ChartWrapper>
  );
};

export default BarChart;

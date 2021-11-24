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
import styled from "@emotion/styled";

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
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
      display: true,
      text: "세계 Covid-19 현황",
    },
  },
};
const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const GlobalBarChart: React.FunctionComponent<Props> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
}) => {
  const generateGlobalChartData = () => {
    const globalNewConfirmed: number[] = [];
    globalNewConfirmed.push(newConfirmed);
    const labels: string[] = [];
    labels.push(`신규 확진자 수 (글로벌): ${newConfirmed} 명`);
    return {
      labels,
      datasets: [
        {
          label: `신규 확진자 (글로벌) : ${newConfirmed} 명`,
          data: globalNewConfirmed,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  };
  console.log(newConfirmed);
  return (
    <>
      <ChartWrapper>
        <Bar options={options} data={generateGlobalChartData()} />
      </ChartWrapper>
    </>
  );
};

export default GlobalBarChart;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface RechartGrafikProps {
  data?: number[];
  labels?: string[];
}

const RechartGrafik: React.FC<RechartGrafikProps> = ({
  data = [],
  labels = [],
}) => {
  if (!data.length || !labels.length) {
    return <p>Grafik uchun ma'lumotlar mavjud emas</p>;
  }

  const canvasData = {
    labels: labels,
    datasets: [
      {
        label: "Grafik",
        borderColor: "#0E9CFF",
        pointRadius: 4,
        fill: true,
        backgroundColor: "rgba(14, 156, 255, 0.2)",
        tension: 0.4,
        data: data,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "#333",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          color: "#333",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Qiymat: ${context.raw}`,
        },
      },
    },
  };

  const graphStyle: React.CSSProperties = {
    minHeight: "193px",
    maxWidth: "333px",
    width: "100%",
    borderRadius: "0.375rem",
    padding: "0.5rem",
    backgroundColor: "#FFF",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={graphStyle}>
      <Line options={options} data={canvasData} />
    </div>
  );
};

export default RechartGrafik;

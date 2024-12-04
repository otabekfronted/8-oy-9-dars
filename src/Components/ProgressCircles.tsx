import React, { useEffect, useState } from "react";

interface SemiCircleChartProps {
  value: number;
  color: string;
  title: string;
}

const SemiCircleChart: React.FC<SemiCircleChartProps> = ({
  value,
  color,
  title,
}) => {
  const [animatedValue, setAnimatedValue] = useState<number>(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev < value) return prev + 1;
        clearInterval(animation);
        return value;
      });
    }, 10); 
    return () => clearInterval(animation);
  }, [value]);

  const radius = 50; 
  const circumference = Math.PI * radius; 
  const offset = circumference - (animatedValue / 100) * circumference; 

  return (
    <div className="w-[198px] text-center">
      <svg width="198" height="60" viewBox="0 -10 120 60">
      
        <path
          d={`M10,50 A50,50 0 0,1 110,50`}
          stroke="#d6d6d6"
          strokeWidth="10"
          fill="none"
        />
       
        <path
          d={`M10,50 A50,50 0 0,1 110,50`}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
       
        <text
          x="60"
          y="45"
          textAnchor="middle"
          fontSize="16"
          fill="#333"
          fontWeight="bold"
        >
          {animatedValue}%
        </text>
      </svg>
      <p style={{ marginTop: "10px", fontSize: "14px" }}>{title}</p>
    </div>
  );
};

interface DataItem {
  title: string;
  value: number;
  color: string;
}

const CircularBars: React.FC = () => {
  const data: DataItem[] = [
    {
      title: "Konstitutsiyaviy-huquqiy savodxonlik",
      value: 70,
      color: "#ff4d4f",
    },
    {
      title: "Axborot-kommunikatsiya texnologiyalari",
      value: 90,
      color: "#52c41a",
    },
    {
      title: "Turli soxalardagi islohotlardan xabardorlik",
      value: 85,
      color: "#52c41a",
    },
    { title: "O'zbek tili va adabiyoti", value: 60, color: "#faad14" },
    { title: "O'zbekiston tarixi va madaniyati", value: 80, color: "#1890ff" },
    {
      title: "Aqliy salohiyat va mantiqiy fikrlash",
      value: 50,
      color: "#faad14",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full flex-wrap h-[322px]">
      {data.map((item, index) => (
        <SemiCircleChart
          key={index}
          value={item.value}
          color={item.color}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default CircularBars;

import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


interface DataItem {
  title: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { title: "Стратегик фикрлаш", value: 86, color: "#28A264" },
  { title: "Натижага йуналганлик", value: 75, color: "#28a264" },
  { title: "Узгаришларни бошкариш", value: 33, color: "#EF233C" },
  { title: "Лидерлик", value: 100, color: "#0956AF" },
  { title: "Уз-узини ривожлан-тириш", value: 98, color: "#28A264" },
  { title: "Коммуника-тивлик", value: 45, color: "#F8B324" },
];

const StrategiyaNatijalar: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    data.map(() => 0)
  );

  useEffect(() => {
    const timers = data.map((item, index) =>
      setTimeout(() => {
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = item.value;
          return updated;
        });
      }, index * 300)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-4 p-4">
          <div className="w-[80px] h-[80px]">
            <CircularProgressbar
              value={animatedValues[index]}
              text={`${animatedValues[index]}%`}
              styles={buildStyles({
                pathColor: item.color,
                textColor: "#333",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
          <p className="text-[24px] font-semibold">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StrategiyaNatijalar;

import grafika2 from "../images/grafika2.png";

const dataLeft = [
  { label: "Максадга интилувчанлик", value: 90 },
  { label: "Эмоционал интеллект", value: 95 },
  { label: "Креативлик", value: 75 },
  { label: "Ходимларга йуналганлик", value: 86 },
];

const dataRight = [
  { label: "Топширикларга йуналганлик", value: 95 },
  { label: "Фаол ижтимоий муносабатлар", value: 75 },
  { label: "Уз устида ишлаш", value: 86 },
  { label: "Муаммоли вазиятга йуналганлик", value: 86 },
];

const ProgressBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-2">
    <div className="text-left flex-1 flex flex-col gap-2">
      <p className="text-base">{label}</p>
      <div className="w-full rounded-full h-2 bg-[#DEE2E6]">
        <div
          className="bg-[#0956AF] h-full flex items-center justify-center"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
    <p className="text-lg font-medium">{value}%</p>
  </div>
);

const ShaxsKasbiyXususiyat = () => {
  return (
    <section className="py-10">
      <div className="container flex flex-col gap-5">
        <div className="flex items-center gap-2 w-full">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h1 className="text-3xl md:text-[36px] font-semibold">
            Шахсий ва касбий хусусиятлар
          </h1>
          <div className="h-1 flex-1 bg-[#DEE2E6]"></div>
        </div>

        <div className="flex items-center justify-between gap-7">
          <div className="flex w-2/5 flex-col gap-4">
            {dataLeft.map((item, index) => (
              <ProgressBar key={index} label={item.label} value={item.value} />
            ))}
          </div>
          <div className="w-1/5">
            <img src={grafika2} loading="lazy" alt="Grafik tasvir" />
          </div>
          <div className="flex w-2/5 flex-col gap-4">
            {dataRight.map((item, index) => (
              <ProgressBar key={index} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShaxsKasbiyXususiyat;

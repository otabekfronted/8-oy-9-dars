import React from "react";

const PsixalogikDiagnostik: React.FC = () => {
  return (
    <div className="w-full bg-[#F5F5F5] py-10">
      <div className="container flex flex-col gap-16">
        <div className="flex items-center gap-2 w-full">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h1 className="text-3xl md:text-[36px] font-semibold">
            Психологик диагностика
          </h1>
          <div className="h-1 flex-1 bg-[#DEE2E6]"></div>
        </div>
        <div className="flex gap-5 text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
          </p>
        </div>
      </div>
    </div>
  );
};

export default PsixalogikDiagnostik;

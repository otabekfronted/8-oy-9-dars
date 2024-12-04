import React from "react";
import qrcode from "../images/qrcode.png";
import StrategiyaNatijalar from "./StrategiyaNatijalar";

const Kompeten: React.FC = () => {
  return (
    <div className="w-full py-10">
      <div className="container gap-10 flex flex-col">
        <div className="flex items-center gap-2 w-full">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h1 className="text-3xl md:text-[36px] font-semibold">
            Компетенцияларнинг намоён булиши
          </h1>
          <div className="h-1 flex-1 bg-[#DEE2E6]"></div>
        </div>
        <div className="flex justify-between gap-5">
          <div>
            <StrategiyaNatijalar />
          </div>
          <div>
            <img src={qrcode} loading="lazy" alt="QR code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kompeten;

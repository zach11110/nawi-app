import React, { useState } from "react";
import TravelServices from "./TravelServices";
import Hotels from "./Hotels";
import Resturants from "./Resturants";
import Header from "../../components/header";
import Add2 from "./Add2";
import Start from "./Start";
import Result from "./Result1";
import DetailsCardsTravelOrder from "../../components/DetailsCard/DescriptionTravelOrder";
import AllOrders from "./AllOrders";

const All = ({ props }) => {
  const [Des, setDes] = useState(0);

  return (
    <div className="min-h-screen w-full">
      <Header title="إنشاء رحلة" className="w-full" />
      {Des === 0 && <TravelServices setDes={setDes} />}
      {Des === 1 && <Hotels setDes={setDes} />}
      {Des === 2 && <Resturants setDes={setDes} />}

      <Add2 />
      <Start/>
      <Result/>
      <DetailsCardsTravelOrder/>
      <AllOrders/>
    </div>
  );
};

export default All;

import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {

  const bank_limit = 30000
  return (
    <>
      <SliderComponent
      label='Kredit Məbləği'
        min={0}
        max={bank_limit}
        defaultValue={data.kreditMebleqi}
        value={data.kreditMebleqi}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          ilkinOdenis: (data.umumiMebleq - value),
          kreditMebleqi: value
        })}
        unit='₼'
        amount={data.kreditMebleqi}
      />
      <SliderComponent
      label='Faiz'
        min={2}
        max={18}
        defaultValue={data.faiz}
        value={data.faiz}
        step={1}
        onChange={(e, value) => setData({
          ...data,
          faiz: value
        })}
        unit='%'
        amount={data.faiz}
      /><SliderComponent
      label='Kredit Müddəti'
        min={0}
        max={120}
        defaultValue={data.kreditMuddeti}
        value={data.kreditMuddeti}
        step={1}
        onChange={(e, value) => setData({
          ...data,
          kreditMuddeti: value
        })}
        unit='Ay'
        amount={data.kreditMuddeti}
      />
    </>
  );
};

export default SliderSelect;

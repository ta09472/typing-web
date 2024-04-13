import { ColorPicker, RadioChangeEvent, Space } from "antd";
import { useState } from "react";
import { Color } from "../type/custom";

interface Props {
  selectedColor: Color;
  setSelectedColor: (v: Color) => void;
  isLocal: boolean;
}

export default function ColorRadio({
  selectedColor,
  setSelectedColor,
  isLocal,
}: Props) {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex w-full justify-evenly">
      <Space direction="vertical" className=" flex flex-col items-center">
        {isLocal ? "기본 문자" : "Normal"}
        <ColorPicker />
      </Space>
      <Space direction="vertical" className=" flex flex-col items-center">
        {isLocal ? "정확한 문자" : "Accuracy"}
        <ColorPicker />
      </Space>
      <Space direction="vertical" className=" flex flex-col items-center">
        {isLocal ? "부정확한 문자" : "Inaccuracy"}
        <ColorPicker />
      </Space>
    </div>
  );
}

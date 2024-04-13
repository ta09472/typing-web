import { ColorPicker, Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";

export default function ColorRadio() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex w-full justify-evenly">
      <Space direction="vertical" className=" flex flex-col items-center">
        Normal
        <ColorPicker />
      </Space>
      <Space direction="vertical" className=" flex flex-col items-center">
        Accuracy
        <ColorPicker />
      </Space>
      <Space direction="vertical" className=" flex flex-col items-center">
        Inaccuracy
        <ColorPicker />
      </Space>
    </div>
  );
}

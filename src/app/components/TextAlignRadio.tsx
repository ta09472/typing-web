import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

export default function TextAlignRadio() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Left Align</Radio>
      <Radio value={2}>Middle Align</Radio>
    </Radio.Group>
  );
}

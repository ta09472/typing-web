import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

export default function TextSizeRadio() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Small</Radio>
      <Radio value={2}>Middle</Radio>
      <Radio value={3}>Large</Radio>
    </Radio.Group>
  );
}

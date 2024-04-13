import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

export default function StyleRadio() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Basic</Radio>
      <Radio value={2}>Pro</Radio>
      <Radio value={3}>Minimal</Radio>
    </Radio.Group>
  );
}

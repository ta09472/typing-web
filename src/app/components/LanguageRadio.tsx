import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

export default function LanguageRadio() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Korean</Radio>
      <Radio value={2}>English</Radio>
    </Radio.Group>
  );
}

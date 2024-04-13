import { Radio, RadioChangeEvent } from "antd";
import { Theme } from "../type/custom";

interface Props {
  selectedTheme: Theme;
  setSelectedTheme: (v: Theme) => void;
  isLocal: boolean;
}

export default function ThemeRadio({
  selectedTheme,
  setSelectedTheme,
  isLocal,
}: Props) {
  const onChange = (e: RadioChangeEvent) => {
    setSelectedTheme(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={selectedTheme}>
      <Radio value={"basic"}>{isLocal ? "베이직" : "Basic"}</Radio>
      <Radio value={"pro"}>{isLocal ? "프로" : "Pro"}</Radio>
      <Radio value={"minimal"}>{isLocal ? "미니멀" : "Minimal"}</Radio>
    </Radio.Group>
  );
}

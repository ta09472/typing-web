import { Radio, RadioChangeEvent } from "antd";
import { FontSize } from "../type/custom";

interface Props {
  selectedFontSize: FontSize;
  setSelectedFontSize: (v: FontSize) => void;
  isLocal: boolean;
}

export default function TextSizeRadio({
  selectedFontSize,
  setSelectedFontSize,
  isLocal,
}: Props) {
  const onChange = (e: RadioChangeEvent) => {
    setSelectedFontSize(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={selectedFontSize}>
      <Radio
        value={"small"}
        className=" text-[14px]  dark:bg-neutral-800 dark:text-neutral-200"
      >
        {isLocal ? "작게" : "Small"}
      </Radio>
      <Radio
        value={"middle"}
        className="text-[16px] dark:bg-neutral-800 dark:text-neutral-200"
      >
        {isLocal ? "중간" : "Middle"}
      </Radio>
      <Radio
        value={"large"}
        className="text-lg dark:bg-neutral-800 dark:text-neutral-200"
      >
        {isLocal ? "크게" : "Large"}
      </Radio>
    </Radio.Group>
  );
}

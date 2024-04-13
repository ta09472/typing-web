import { DefaultSetting } from "../type/custom";
import Basic from "./Basic";
import Minimal from "./Minimal";
import Pro from "./Pro";

interface Props {
  setting: DefaultSetting;
  index: number;
  input: string;
  setIndex: (v: number) => void;
  setInput: (v: string) => void;
}

export default function Content({
  setting,
  index,
  input,
  setIndex,
  setInput,
}: Props) {
  switch (setting.theme) {
    case "pro":
      return (
        <Pro
          lang={setting.language}
          index={index}
          setIndex={setIndex}
          input={input}
          setInput={setInput}
        />
      );

    case "basic":
      return (
        <Basic
          lang={setting.language}
          index={index}
          setIndex={setIndex}
          input={input}
          setInput={setInput}
        />
      );

    case "minimal":
      return (
        <Minimal
          lang={setting.language}
          index={index}
          setIndex={setIndex}
          input={input}
          setInput={setInput}
        />
      );

    default:
      return <div>오류</div>;
  }
}

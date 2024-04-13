"use client";
import Accuracy from "./Accuracy";
import sentence from "../contents/sentence";
import Input from "./Input";

interface Props {
  lang: "korean" | "english";
  index: number;
  input: string;
  setInput: (v: string) => void;
  setIndex: any;
}

export default function Pro({ lang, index, input, setIndex, setInput }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-4  dark:bg-neutral-800">
      <div className="text-sm text-neutral-800 dark:text-neutral-200">
        - {sentence[lang].at(index)?.author} -
      </div>
      <Accuracy
        target={sentence[lang].at(index)?.content}
        input={input}
        color={{
          accuracy: "text-black dark:text-neutral-50",
          normal: "text-neutral-400",
          inaccuracy: "text-red-500",
        }}
      />
      <div className="bg-black rounded-lg min-w-[40rem] flex gap-2 items-center mb-12">
        <div className="pl-2 text-white">{">_"}</div>
        <Input
          className="w-full p-2 bg-transparent text-white font-light"
          value={input}
          setIndex={setIndex}
          setInput={setInput}
          index={index}
          lang={lang}
        />
      </div>
    </div>
  );
}

"use client";
import { useRef, useEffect } from "react";
import sentence from "../contents/sentence";
import Accuracy from "./Accuracy";
import Input from "./Input";

interface Props {
  lang: "korean" | "english";
  index: number;
  input: string;
  setInput: (v: string) => void;
  setIndex: any;
}

export default function Minimal({
  lang,
  index,
  input,
  setIndex,
  setInput,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-4 dark:bg-neutral-800">
      <div className="flex flex-col gap-4 ml-[14rem] w-[40rem]">
        <div className="text-md text-neutral-500 -skew-x-6 ml-2 dark:text-neutral-500">
          {sentence[lang].at(index - 1)?.content}
        </div>
        <div className="relative ">
          <div className="flex-none text-lg font-semibold">
            <Accuracy
              color={{
                accuracy: "text-black dark:text-neutral-50",
                normal: "text-neutral-400",
                inaccuracy: "text-red-500",
              }}
              target={sentence[lang].at(index)?.content}
              input={input}
            />
          </div>
          <Input
            className="flex-1 bg-transparent font-semibold text-lg text-transparent absolute top-0 left-0 w-full caret-neutral-400"
            value={input}
            setIndex={setIndex}
            setInput={setInput}
            index={index}
            lang={lang}
          />
        </div>
        <div className="text-md text-neutral-400 skew-x-6 ml-2 dark:text-neutral-600">
          {sentence[lang].at(index + 1)?.content}
        </div>
      </div>
    </div>
  );
}

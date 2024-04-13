"use client";
import { useRef, useEffect } from "react";
import sentence from "../contents/sentence";
import Accuracy from "./Accuracy";

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // 키보드 이벤트를 감지하는 함수
    const handleKeyDown = (event: { key: string }) => {
      // Esc 키를 눌렀을 때
      if (event.key === "Escape") {
        // input 요소에 포커스를 줍니다.
        setInput("");
        inputRef.current?.focus();
      }
    };

    // 이벤트 리스너를 문서에 추가합니다.
    document.addEventListener("keydown", handleKeyDown);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 정리합니다.
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
          <input
            autoFocus
            type="text"
            ref={inputRef}
            className="flex-1 bg-transparent font-semibold text-lg text-transparent absolute top-0 left-0 w-full caret-neutral-400"
            value={input}
            onChange={({ currentTarget }) => setInput(currentTarget.value)}
            onKeyDown={({ code }) => {
              if (code === "Escape") {
                setInput("");
              }
              if (code === "Enter") {
                if (
                  (sentence[lang].at(index)?.content.length ?? 0) <=
                  input.length
                ) {
                  setInput("");
                  setIndex((prev: number) => {
                    if (prev === sentence[lang].length - 1) {
                      return 0;
                    }
                    return prev + 1;
                  });
                }
              }
            }}
          />
        </div>
        <div className="text-md text-neutral-400 skew-x-6 ml-2 dark:text-neutral-600">
          {sentence[lang].at(index + 1)?.content}
        </div>
      </div>
    </div>
  );
}

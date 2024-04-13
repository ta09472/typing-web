"use client";
import Accuracy from "./Accuracy";
import sentence from "../contents/sentence";
import { useEffect, useRef } from "react";

interface Props {
  lang: "korean" | "english";
  index: number;
  input: string;
  setInput: (v: string) => void;
  setIndex: any;
}

export default function Pro({ lang, index, input, setIndex, setInput }: Props) {
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
        <input
          className="w-full p-2 bg-transparent text-white font-light"
          autoFocus
          ref={inputRef}
          value={input}
          onChange={({ currentTarget }) => setInput(currentTarget.value)}
          onKeyDown={({ code }) => {
            if (code === "Escape") {
              setInput("");
            }
            if (code === "Enter") {
              if (
                (sentence[lang].at(index)?.content.length ?? 0) <= input.length
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
    </div>
  );
}

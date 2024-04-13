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

export default function Basic({
  lang,
  index,
  input,
  setInput,
  setIndex,
}: Props) {
  const currentSentence = sentence[lang].at(index);
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
    <div className="h-screen w-screen flex items-center justify-center dark:bg-neutral-800">
      <div className=" rounded-lg bg-gray-50 min-w-[50rem] h-[20rem] shadow-lg dark:bg-black">
        <div className=" flex justify-between items-center bg-gray-100 border-b rounded-t-lg font-semibold text-gray-600 p-2 dark:bg-neutral-300 dark:text-neutral-700 ">
          <div className="flex gap-2">
            <div className="bg-gray-300 w-3 h-3 rounded-sm dark:bg-neutral-400 "></div>
            <div className="bg-gray-300 w-3 h-3 rounded-sm dark:bg-neutral-400"></div>
            <div className="bg-gray-300 w-3 h-3 rounded-sm dark:bg-neutral-400"></div>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <div></div>terminal-type/
          </div>
          <div></div>
        </div>
        <div className="p-1 px-2 flex flex-col w-full ">
          <div className="text-lg font-light">
            <div className="flex flex-nowrap text-nowrap whitespace-nowrap relative">
              <div className="flex items-center dark:text-neutral-400 ">
                <div>
                  <span className="dark:text-neutral-50">
                    {lang}@{currentSentence?.author}: ~$
                  </span>
                </div>

                <div className="relative">
                  <div className="flex-none">
                    <Accuracy
                      color={{
                        accuracy: "text-black dark:text-neutral-50",
                        normal: "text-gray-400",
                        inaccuracy: "text-red-500",
                      }}
                      target={sentence[lang].at(index)?.content}
                      input={input}
                    />
                  </div>
                  <input
                    autoFocus
                    ref={inputRef}
                    type="text"
                    className="flex-1 bg-transparent text-lg text-transparent font-light absolute top-0 left-0 w-full caret-gray-400 dark:caret-neutral-400"
                    value={input}
                    onChange={({ currentTarget }) =>
                      setInput(currentTarget.value)
                    }
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
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

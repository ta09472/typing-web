"use client";
import { Suspense, useState } from "react";
import { Menu } from "@headlessui/react";
import Basic from "./components/Basic";
import Pro from "./components/Pro";
import Minimal from "./components/Minimal";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

export default function Home() {
  const [theme, setTheme] = useState<"basic" | "minimal" | "pro">("minimal");
  const [lang, setLang] = useState<"english" | "korean">("korean");
  const [isToggled, setIsToggled] = useState(false);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const renderTheme = (theme: "basic" | "minimal" | "pro") => {
    switch (theme) {
      case "pro":
        return (
          <Pro
            lang={lang}
            index={index}
            setIndex={setIndex}
            input={input}
            setInput={setInput}
          />
        );

      case "basic":
        return (
          <Basic
            lang={lang}
            index={index}
            setIndex={setIndex}
            input={input}
            setInput={setInput}
          />
        );

      case "minimal":
        return (
          <Minimal
            lang={lang}
            index={index}
            setIndex={setIndex}
            input={input}
            setInput={setInput}
          />
        );

      default:
        return <div>오류</div>;
    }
  };

  return (
    <div className={isToggled ? "dark" : ""}>
      <div className="fixed top-0 p-4 w-full bg-transparent flex items-center justify-between">
        <div className=" font-bold text-2xl dark:text-neutral-50 ">
          /terminal-type/
        </div>
        <div>
          <div className=" flex items-center gap-4">
            <div className="relative">
              <Menu>
                <Menu.Button className="p-1 text-black rounded-md hover:bg-neutral-200 dark:text-neutral-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </Menu.Button>
                <Menu.Items className="flex flex-col absolute top-6 right-4 bg-gray-100 rounded-lg p-2 gap-2">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => setLang("english")}
                        className={`p-2 rounded-md cursor-pointer ${
                          lang === "english" ? "bg-gray-200" : ""
                        } ${active && "bg-gray-200"}`}
                      >
                        english
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => setLang("korean")}
                        className={`p-2 rounded-md cursor-pointer ${
                          lang === "korean" ? "bg-gray-200" : ""
                        } ${active && "bg-gray-200"}`}
                      >
                        korean
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
            <div>
              <div className="relative">
                <Menu>
                  <Menu.Button className="p-1 text-black rounded-md hover:bg-neutral-200 dark:text-neutral-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                      />
                    </svg>
                  </Menu.Button>
                  <Menu.Items className="flex flex-col absolute top-6 right-6 bg-gray-100 rounded-lg p-2 gap-2">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setTheme("basic")}
                          className={`p-2 rounded-md cursor-pointer ${
                            theme === "basic" ? "bg-gray-200" : ""
                          } ${active && "bg-gray-200"}`}
                        >
                          basic
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setTheme("pro")}
                          className={`p-2 rounded-md cursor-pointer ${
                            theme === "pro" ? "bg-gray-200" : ""
                          } ${active && "bg-gray-200"}`}
                        >
                          pro
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setTheme("minimal")}
                          className={`p-2 rounded-md cursor-pointer  ${
                            theme === "minimal" ? "bg-gray-200" : ""
                          } ${active && "bg-gray-200"}`}
                        >
                          minimal
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
            <button
              onClick={toggle}
              className="p-1 text-black rounded-md hover:bg-neutral-200"
            >
              <DarkModeSwitch />
            </button>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>loading..</div>}>{renderTheme(theme)}</Suspense>
    </div>
  );
}

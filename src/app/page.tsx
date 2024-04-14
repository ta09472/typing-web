"use client";

import { Suspense, useEffect, useState } from "react";
import Basic from "./components/Basic";
import Pro from "./components/Pro";
import Minimal from "./components/Minimal";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { Button, Divider, FloatButton, Modal, Popconfirm, Tooltip } from "antd";
import ThemeRadio from "./components/ThemeRadio";
import ColorRadio from "./components/ColorRadio";
import TextAlignRadio from "./components/TextAlignRadio";
import LanguageRadio from "./components/LanguageRadio";
import TextSizeRadio from "./components/TextSizeRadio";
import {
  Color,
  DefaultSetting,
  FontSize,
  Language,
  Mode,
  TextAlign,
  Theme,
} from "./type/custom";
import { getLocalStorage, setLocalStorage } from "./util/localStorage";

const defaultSetting: DefaultSetting = {
  theme: "minimal",
  systemLanguage: "korean",
  language: "korean",
  mode: "light",
  fontSize: "middle",
  textAlign: "center",
  color: {
    accuracy: "text-[#000000]",
    normal: "text-[#cbd5e1]",
    inaccuracy: "text-[#446cef]",
  },
};

export default function Home() {
  const [setting, setSetting] = useState(defaultSetting);

  useEffect(() => {
    const setting: DefaultSetting =
      getLocalStorage("terminal-type-setting") ?? defaultSetting;
    setSetting(setting);
  }, []);

  const [systemLang, setSystemLang] = useState<Language>(
    setting.systemLanguage
  );
  const [theme, setTheme] = useState<Theme>(setting.theme);
  const [lang, setLang] = useState<Language>(setting.language);
  const [_theme, _setTheme] = useState<Mode>(setting.mode);
  const [fontSize, setFontSize] = useState<FontSize>(setting.fontSize);
  const [textAlign, setTextAlign] = useState<TextAlign>(setting.textAlign);
  const [color, setColor] = useState<Color>(setting.color);

  // temp가 필요함

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLocal = systemLang === "korean";

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setLocalStorage("terminal-type-setting", {
      theme: theme,
      systemLanguage: systemLang,
      language: lang,
      mode: _theme,
      fontSize: fontSize,
      textAlign: textAlign,
      color: color,
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const tempSetting = {
    theme,
    mode: _theme,
    color,
    language: lang,
    systemLanguage: systemLang,
    fontSize,
    textAlign,
  };

  const renderTheme = (theme: Theme) => {
    switch (theme) {
      case "pro":
        return (
          <Pro
            setting={tempSetting}
            index={index}
            setIndex={setIndex}
            input={input}
            setInput={setInput}
          />
        );

      case "basic":
        return (
          <Basic
            setting={tempSetting}
            index={index}
            setIndex={setIndex}
            input={input}
            setInput={setInput}
          />
        );

      case "minimal":
        return (
          <Minimal
            setting={tempSetting}
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

  useEffect(() => {
    const toggleTheme = (mode?: Mode) => {
      const root = document.getElementsByTagName("html")[0];
      if (mode === "dark") {
        root.classList.add("dark");
        _setTheme("dark");
      } else {
        root.classList.remove("dark");
        _setTheme("light");
      }
    };
    const storedTheme = getLocalStorage("terminal-type-setting");
    if (storedTheme) {
      toggleTheme(storedTheme.mode);
    }
  }, []);

  return (
    <div>
      <div className="fixed top-0 p-4 w-full bg-transparent flex items-center justify-between">
        <div className=" font-bold text-2xl dark:text-neutral-50 ">
          /terminal-type/
        </div>
        <div>
          <Button
            type="text"
            onClick={showModal}
            className="dark:text-neutral-50"
          >
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Button>
          <div className=" flex items-center gap-4"></div>
        </div>
      </div>
      <Suspense fallback={<div>loading..</div>}>{renderTheme(theme)}</Suspense>
      <Modal
        classNames={{
          header: "dark:bg-neutral-800 dark:text-neutral-200",
          content: "dark:bg-neutral-800 dark:text-neutral-200",
        }}
        title={
          <span className=" text-2xl dark:bg-neutral-800 dark:text-neutral-200">
            {isLocal ? "설정" : "Config"}
          </span>
        }
        open={isModalOpen}
        onOk={handleOk}
        footer={
          <div className="flex items-center justify-between">
            <Button
              className="p-0 m-0"
              type="link"
              onClick={() => {
                setSystemLang((prv) => {
                  if (prv === "english") return "korean";
                  return "english";
                });
              }}
            >
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
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            </Button>
            <div className="flex gap-2">
              <Button onClick={handleCancel}>
                {isLocal ? "취소" : "Cancel"}
              </Button>
              <Popconfirm
                title={isLocal ? "설정 저장" : "Save Settings"}
                description={
                  isLocal
                    ? "이 설정을 유지할까요?"
                    : "Do you want me to keep the settings?"
                }
                onConfirm={handleOk}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">{isLocal ? "저장" : "Save"}</Button>
              </Popconfirm>
            </div>
          </div>
        }
        onCancel={handleCancel}
        centered
      >
        <div className="flex flex-col items-center w-full justify-between">
          <div className="flex w-full flex-col">
            <span className=" font-semibold text-lg">
              {isLocal ? "스타일" : "Style"}
            </span>
            <div className="flex flex-col items-center w-full justify-between">
              <ThemeRadio
                selectedTheme={theme}
                setSelectedTheme={setTheme}
                isLocal={isLocal}
              />
            </div>
          </div>
          <Divider />
          <div className="flex w-full flex-col">
            <span className=" font-semibold text-lg">
              {isLocal ? "언어" : "Language"}
            </span>
            <div className="flex flex-col items-center w-full justify-between">
              <LanguageRadio
                selectedLanguage={lang}
                setSelectedLanguage={setLang}
                isLocal={isLocal}
              />
            </div>
          </div>
          {/* <Divider />
          <div className="flex w-full flex-col">
            <span className=" font-semibold text-lg">
              {isLocal ? "색상" : "Color"}
            </span>
            <div className="flex flex-col items-center w-full justify-between">
              <ColorRadio
                selectedColor={color}
                setSelectedColor={setColor}
                isLocal={isLocal}
              />
            </div>
          </div> */}
          <Divider />
          <div className="flex w-full flex-col">
            <span className=" font-semibold text-lg">
              {isLocal ? "폰트 크기" : "Font Size"}
            </span>
            <div className="flex flex-col items-center w-full justify-between">
              <TextSizeRadio
                selectedFontSize={fontSize}
                setSelectedFontSize={setFontSize}
                isLocal={isLocal}
              />
            </div>
          </div>
          {/* <Divider />
          <div className="flex w-full flex-col">
            <span className=" font-semibold text-lg">
              {isLocal ? "글자 정렬" : "Text Align"}
            </span>
            <div className="flex flex-col items-center w-full justify-between">
              <TextAlignRadio
                selectedTextAlign={textAlign}
                setSelectedTextAlign={setTextAlign}
                isLocal={isLocal}
              />
            </div>
          </div> */}
          <Divider />
          <div className="flex w-full flex-col">
            <span className=" font-semibold text-lg">
              {isLocal ? "시력 보호" : "Dark Mode"}
            </span>
            <div className="flex flex-col items-center w-full justify-between">
              <DarkModeSwitch _setTheme={_setTheme} _theme={_theme} />
            </div>
          </div>
        </div>
      </Modal>
      {/* <Tooltip title="Copied!" trigger="click">
        <FloatButton
          onClick={() => console.log("onClick")}
          icon={
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
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          }
        />
      </Tooltip> */}
    </div>
  );
}

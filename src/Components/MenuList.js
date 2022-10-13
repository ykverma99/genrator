import React, { useContext, useState } from "react";
import { Context } from "../context/GlobalContext";
import InputName from "./InputName";
import Menu from "./Menu";

export const SelectBox = ({
  children,
  inputName,
  name,
  theme,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <InputName name={inputName} value={value} />
      <select
        className={`w-full h-11 rounded px-1 ${
          theme ? "bg-transparent border border-gray-700" : "bg-white border"
        }`}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      >
        {children}
      </select>
    </div>
  );
};

export const MenuWithSection = ({
  fontweight,
  fontweightEvent,
  fontsizeEvent,
  fontsize,
}) => {
  const [showText, setshowText] = useState(true);
  const { theme } = useContext(Context);
  return (
    <>
      <Menu
        name="text"
        onClick={() => setshowText((prev) => !prev)}
        isActive={showText}
      >
        <div className="grid grid-cols-2 gap-8 mx-1">
          <SelectBox
            inputName="font-weight"
            theme={theme}
            value={fontweight}
            onChange={fontweightEvent}
            name="fontWeight"
          >
            <option className={theme ? "bg-gray-900" : ""} value="400">
              Normal
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="300">
              Light
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="700">
              Bold
            </option>
          </SelectBox>
          <SelectBox
            inputName="font-size"
            name="fontSize"
            theme={theme}
            value={fontsize}
            onChange={fontsizeEvent}
          >
            <option className={theme ? "bg-gray-900" : ""} value="12">
              12
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="14">
              14
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="16">
              16
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="20">
              20
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="24">
              24
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="32">
              32
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="40">
              40
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="48">
              48
            </option>
          </SelectBox>
        </div>
      </Menu>
    </>
  );
};

export const MenuWithRange = ({ valX, valY, paddingX, paddingY }) => {
  const [show, setshow] = useState(false);

  return (
    <Menu
      name="Padding"
      onClick={() => setshow((prev) => !prev)}
      isActive={show}
    >
      <div className="grid grid-cols-2 gap-10 px-2">
        <div className="space-y-1">
          <InputName name={"PaddingX"} value={valX} />
          <input
            name="paddingX"
            className="w-full"
            type={"range"}
            min={0}
            max={48}
            onChange={paddingX}
            value={valX}
          />
        </div>
        <div className="space-y-1">
          <InputName name={"PaddingY"} value={valY} />
          <input
            name="paddingY"
            className="w-full"
            type={"range"}
            min={0}
            max={48}
            onChange={paddingY}
            value={valY}
          />
        </div>
      </div>
    </Menu>
  );
};

export const MenuWithColor = ({ color, bgColor, valColor, valBg }) => {
  const [show, setshow] = useState(false);
  return (
    <Menu
      name="Colors"
      onClick={() => setshow((prev) => !prev)}
      isActive={show}
    >
      <div className="grid grid-cols-2 gap-10 px-2">
        <div className="space-y-2">
          <InputName name={"Color"} value={valColor} />
          <input
            name="color"
            className="w-full"
            type={"color"}
            onChange={color}
            value={valColor}
          />
        </div>
        <div className="space-y-2">
          <InputName name={"Background Color"} value={valBg} />
          <input
            name="bgColor"
            className="w-full"
            type={"color"}
            onChange={bgColor}
            value={valBg}
          />
        </div>
      </div>
    </Menu>
  );
};

export const MenuWithBorder = ({
  valBorderColor,
  valBorderRadius,
  valBorderRange,
  valBorderType,
  borderColor,
  borderRadius,
  borderRange,
  borderType,
}) => {
  const [show, setshow] = useState(false);
  const { theme } = useContext(Context);
  return (
    <Menu
      name="Border"
      onClick={() => setshow((prev) => !prev)}
      isActive={show}
    >
      <div className="grid grid-rows-2 px-2 grid-cols-2 gap-10">
        <div className="space-y-2">
          <InputName name={"Border Color"} value={valBorderColor} />
          <input
            name="borderColor"
            className="w-full"
            type={"color"}
            onChange={borderColor}
            value={valBorderColor}
          />
        </div>
        <div className="space-y-2">
          <InputName name={"Border-width"} value={valBorderRange} />
          <input
            name="borderRange"
            className="w-full"
            type={"range"}
            min={"0"}
            max={"10"}
            onChange={borderRange}
            value={valBorderRange}
          />
        </div>
        <div className="space-y-2">
          <SelectBox
            inputName="Border-Type"
            theme={theme}
            value={valBorderType}
            onChange={borderType}
            name="borderType"
          >
            <option className={theme ? "bg-gray-900" : ""} value="solid">
              Solid
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="dotted">
              Dotted
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="dashed">
              Dashed
            </option>
          </SelectBox>
        </div>
        <div className="space-y-2">
          <InputName name={"Border Radius"} value={valBorderRadius} />
          <input
            name="borderRadius"
            className="w-full"
            type={"range"}
            min={"0"}
            max={"60"}
            onChange={borderRadius}
            value={valBorderRadius}
          />
        </div>
      </div>
    </Menu>
  );
};

export const MenuWithSingle = ({ valShadow, shadow }) => {
  const [show, setshow] = useState(false);
  const { theme } = useContext(Context);
  return (
    <Menu
      name={"Shadow"}
      onClick={() => setshow((prev) => !prev)}
      isActive={show}
    >
      <div className="grid grid-cols-2 px-1">
        <div className="space-y-1">
          <InputName name={"Box Shadow"} />
          <select
            className={`w-full h-11 rounded px-1 ${
              theme
                ? "bg-transparent border border-gray-700"
                : "bg-white border"
            }`}
            value={valShadow}
            onChange={shadow}
            name="shadow"
            id={"shadow"}
          >
            <option value="0 1px 2px 0 rgb(0 0 0 / 0.05)">Small</option>
            <option value="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)">
              Medium
            </option>
            <option value=" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)">
              Large
            </option>
            <option value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)">
              X-large
            </option>
          </select>
        </div>
      </div>
    </Menu>
  );
};

export const MenuWithPara = ({
  valFontWeight,
  fontWeight,
  valFontSize,
  fontSize,
  fontFamily,
  valFontFamily,
  lineHeight,
  valLineHeight,
  wordSpacing,
  valWordSpacing,
  letterSpacing,
  valLetterSpacing,
}) => {
  const [showText, setshowText] = useState(true);
  const { theme } = useContext(Context);
  return (
    <>
      <Menu
        name="Text"
        onClick={() => setshowText((prev) => !prev)}
        isActive={showText}
      >
        <div className="grid grid-cols-2  grid-rows-3 gap-8 mx-1">
          <SelectBox
            inputName="Font Family"
            theme={theme}
            value={valFontFamily}
            onChange={fontFamily}
            name="fontFamily"
          >
            <option className={theme ? "bg-gray-900" : ""} value="sans">
              Sans
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="serif">
              Serif
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="mono">
              Mono
            </option>
          </SelectBox>
          <SelectBox
            inputName="Font Size"
            name="fontSize"
            theme={theme}
            value={valFontSize}
            onChange={fontSize}
          >
            <option className={theme ? "bg-gray-900" : ""} value="12">
              12
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="14">
              14
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="16">
              16
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="20">
              20
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="24">
              24
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="32">
              32
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="40">
              40
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="48">
              48
            </option>
          </SelectBox>
          <SelectBox
            inputName="Font Weight"
            theme={theme}
            value={valFontWeight}
            onChange={fontWeight}
            name="fontWeight"
          >
            <option className={theme ? "bg-gray-900" : ""} value="400">
              Normal
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="300">
              Light
            </option>
            <option className={theme ? "bg-gray-900" : ""} value="700">
              Bold
            </option>
          </SelectBox>
          <div>
            <InputName name="Line Height" value={valLineHeight} />
            <input
            className="w-full"
              type={"range"}
              min={"0"}
              max={"100"}
              value={valLineHeight}
              onChange={lineHeight}
              name="lineHeight"
            />
          </div>
          <div>
            <InputName name="Word Spacing" value={valWordSpacing} />
            <input
            className="w-full"
              type={"range"}
              min={"0"}
              max={"100"}
              value={valWordSpacing}
              onChange={wordSpacing}
              name="wordSpacing"
            />
          </div>
          <div>
            <InputName name="Letter Spacing" value={valLetterSpacing} />
            <input
            className="w-full"
              type={"range"}
              min={"0"}
              max={"8"}
              step={".4"}
              value={valLetterSpacing}
              onChange={letterSpacing}
              name="letterSpacing"
            />
          </div>
        </div>
      </Menu>
    </>
  );
};

export const MenuWithSingleColor = ({ color, valColor }) => {
    const [show, setshow] = useState(false);
    return (
      <Menu
        name="Colors"
        onClick={() => setshow((prev) => !prev)}
        isActive={show}
      >
        <div className="grid grid-cols-2 gap-10 px-2">
          <div className="space-y-2">
            <InputName name={"Color"} value={valColor} />
            <input
              name="color"
              className="w-full"
              type={"color"}
              onChange={color}
              value={valColor}
            />
          </div>
        </div>
      </Menu>
    );
  };
  
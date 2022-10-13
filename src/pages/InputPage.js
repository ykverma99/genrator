import React, { useContext, useState } from "react";
import AboutSec from "../Components/AboutSec";
import CssButton from "../Components/CssButton";
import CssText from "../Components/CssText";
import Editor from "../Components/Editor";
import Header from "../Components/Header";
import {
  MenuWithBorder,
  MenuWithColor,
  MenuWithRange,
  MenuWithSection,
  MenuWithSingle,
} from "../Components/MenuList";
import Modal from "../Components/Modal";
import { Context } from "../context/GlobalContext";

const InputPage = () => {
  const [Model, setModel] = useState(false);
  const [data, setdata] = useState({
    fontWeight: "400",
    fontSize: "12",
    paddingX: "20",
    paddingY: "10",
    color: "#000000",
    bgColor: "#ffffff",
    borderColor: "#000000",
    borderRange: "1",
    borderType: "solid",
    borderRadius: "5",
    shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  });
  const { theme } = useContext(Context);
  console.log(data);
  return (
    <div
      className={`h-screen overflow-hidden ${
        theme ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <div className="grid grid-cols-2 h-screen">
        <div className="border-r-2 space-y-8 py-10 mb-20 overflow-y-auto border-gray-400  mx-auto w-full my-5">
          <AboutSec theme={theme} />
          <div className="space-y-7">
            <MenuWithSection
              fontsize={data.fontSize}
              fontweight={data.fontWeight}
              fontsizeEvent={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              fontweightEvent={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <MenuWithRange
              paddingX={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              paddingY={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              valX={data.paddingX}
              valY={data.paddingY}
            />
            <MenuWithColor
              valBg={data.bgColor}
              valColor={data.color}
              bgColor={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              color={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <MenuWithBorder
              valBorderColor={data.borderColor}
              valBorderRadius={data.borderRadius}
              valBorderRange={data.borderRange}
              valBorderType={data.borderType}
              borderColor={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              borderType={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              borderRange={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              borderRadius={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <MenuWithSingle
              valShadow={data.shadow}
              shadow={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>
        <div className="px-8 py-10">
          <Editor onClick={() => setModel(true)} name={"input"} />
          <CssButton>
            <div className="flex justify-center items-center h-full">
              <input
                type="text"
                placeholder="Style me"
                style={{
                  background: data.bgColor,
                  color: data.color,
                  padding: `${data.paddingY}px ${data.paddingX}px`,
                  fontWeight: data.fontWeight,
                  fontSize: `${data.fontSize}px`,
                  border: `${data.borderRange}px ${data.borderColor} ${data.borderType}`,
                  borderRadius: `${data.borderRadius}px`,
                  boxShadow: `${data.shadow}`,
                }}
              />
            </div>
          </CssButton>
          {Model && (
            <Modal toggleModal={() => setModel(false)}>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <p className="text-lime-500 tracking-wider">.input</p>
                  <p className="text-white">{"{"}</p>
                </div>
                <div className="mx-8 space-y-1">
                  <CssText
                    name={data.fontSize ? "font-size" : ""}
                    value={`${data.fontSize}px`}
                  />
                  <CssText
                    name={data.fontWeight ? "font-weight" : ""}
                    value={`${data.fontWeight}`}
                  />
                  <CssText name={"color"} value={`${data.color}`} />
                  <CssText
                    name={"background-color"}
                    value={`${data.bgColor}`}
                  />
                  {data.borderRange > 0 && (
                    <CssText
                      name={"border"}
                      value={`${data.borderRange}px ${data.borderColor} ${data.borderType}`}
                    />
                  )}
                  {data.borderRadius > 0 && (
                    <CssText
                      name={"border-radius"}
                      value={`${data.borderRadius}px`}
                    />
                  )}
                  {(data.paddingX > 0 || data.paddingY > 0) && (
                    <CssText
                      name={"padding"}
                      value={`${data.paddingY}px   ${data.paddingX}px`}
                    />
                  )}
                  <CssText name={"box-shadow"} value={`${data.shadow}`} />
                </div>
                <div>
                  <p className="text-white">{"}"}</p>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputPage;

import React, { useContext, useState } from "react";
import AboutSec from "../Components/AboutSec";
import CssButton from "../Components/CssButton";
import CssText from "../Components/CssText";
import Editor from "../Components/Editor";
import Header from "../Components/Header";
import { MenuWithPara, MenuWithSingleColor } from "../Components/MenuList";
import Modal from "../Components/Modal";
import { Context } from "../context/GlobalContext";

const ParaPage = () => {
  const [Model, setModel] = useState(false);
  const [data, setdata] = useState({
    fontWeight: "400",
    fontSize: "12",
    fontFamily: "sans",
    lineHeight: "32",
    wordSpacing: "2",
    letterSpacing: "2",
    color: "#333333",
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
            <MenuWithPara
              valFontFamily={data.fontFamily}
              valFontSize={data.fontSize}
              valFontWeight={data.fontWeight}
              valLetterSpacing={data.letterSpacing}
              valLineHeight={data.lineHeight}
              valWordSpacing={data.wordSpacing}
              fontFamily={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              fontSize={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              fontWeight={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              lineHeight={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              wordSpacing={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              letterSpacing={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <MenuWithSingleColor
              color={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
              valColor={data.color}
            />
          </div>
        </div>
        <div className="px-8 py-10">
          <Editor onClick={() => setModel(true)} name={"input"} />
          <CssButton>
            <div className="flex justify-center items-center h-full">
              <p
                style={{
                  color: data.color,
                  fontFamily: data.fontFamily,
                  fontWeight: data.fontWeight,
                  fontSize: `${data.fontSize}px`,
                  lineHeight: `${data.lineHeight}px`,
                  letterSpacing: `${data.letterSpacing}px`,
                  wordSpacing: `${data.wordSpacing}px`,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                eligendi repellat quidem nisi nulla iste officia corporis ad
                iure perspiciatis? Iusto, fugiat mollitia vero aut consequatur
                aspernatur aperiam facere sint.
              </p>
            </div>
          </CssButton>
          {Model && (
            <Modal toggleModal={() => setModel(false)}>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <p className="text-lime-500 tracking-wider">.para</p>
                  <p className="text-white">{"{"}</p>
                </div>
                <div className="mx-8 space-y-1">
                  <CssText name="font-size" value={`${data.fontSize}px`} />
                  <CssText name="font-weight" value={`${data.fontWeight}`} />
                  <CssText name={"font-family"} value={`${data.fontFamily}`} />
                  <CssText
                    name={"line-height"}
                    value={`${data.lineHeight}px`}
                  />
                  <CssText
                    name={"letter-spacing"}
                    value={`${data.letterSpacing}px`}
                  />
                   <CssText
                    name={"word-spacing"}
                    value={`${data.wordSpacing}px`}
                  />
                   <CssText
                    name={"color"}
                    value={`${data.color}px`}
                  />
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

export default ParaPage;

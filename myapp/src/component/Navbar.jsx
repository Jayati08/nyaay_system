import React, { useEffect } from "react";
//import { bharat, logo, g20 } from '../assets';
import TranslateIcon from "@mui/icons-material/Translate";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { About } from "./About";
import { Mnyay } from "./Mnyay";
import { Mediaresource } from "./Mediaresource";
import { Contact } from "./Contact";

const Navbar = () => {
  const [AboutPopUp, setAboutPopUp] = useState(false);
  useEffect(() => {
    if (AboutPopUp) {
      console.log("about popup showed!");
    }
  }, [AboutPopUp]);

  const [MyNyaayPopUp, setMyNyaayPopUp] = useState(false);
  useEffect(() => {
    if (MyNyaayPopUp) {
      console.log("popup of my is showed!");
    }
  }, [MyNyaayPopUp]);

  const [MediaPopup, setMediaPopup] = useState(false);
  useEffect(() => {
    if (MediaPopup) {
      console.log("popup of media is showed!");
    }
  }, [MediaPopup]);

  const [ContactPopup, setContactPopup] = useState(false);
  useEffect(() => {
    if (ContactPopup) {
      console.log("popup is in contact");
    }
  }, [ContactPopup]);

  return (
    <div className="navbar bg-white">
      <div className="subnav flex justify-end items-center p-1 text-xs">
        <div className="sidebar flex gap-2 text-sm  sticky">
          <div className="content flex gap-1 cursor-pointer">
            <OndemandVideoIcon style={{ height: "20px" }} />
            <p className=" text-xs">Main Content</p>
          </div>
          <div className="size"></div>
          <div className="screen flex gap-1 cursor-pointer">
            <WysiwygIcon style={{ height: "20px" }} />
            <p className=" text-xs">Screen Reader</p>
          </div>
          <div className="lang gap-1 cursor-pointer">
            <img src={TranslateIcon} alt="" />
            <select className=" outline-none text-xs ">
              <option value={"EN"}>ENG</option>
              <option value={"HIN"}>HIN</option>
              <option value={"GUJ"}>GUJ</option>
              <option value={"TAM"}>TAM</option>
              <option value={"MAR"}>MAR</option>
            </select>
          </div>
          <div className="auth flex gap-1 cursor-pointer">
            <select className=" text-xs ">
              <option value={"Login"}>Public</option>
              <option value={"Police"}>Police Authority</option>
              <option value={"Court"}>Court Authority </option>
              <option value={"Advocates"}>Advocate</option>
              <option value={"Convict"}>Convict</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="mainnavbar flex gap-4 p-2 text-sm justify-between items-center ">
        <div className="logo flex gap-4 mx-4 justify-center items-center">
          {/* <img src={bharat} className=' h-12' alt="" /> */}
          <div className="info text-xs">
            <p className=" font-semibold">Indian Judicial Authority of India</p>
            <p>Government of india</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="g20">
            {/* <img src={g20} className=' h-12' alt="" /> */}
          </div>
          <div className="g20">
            {/* <img src={logo} className=' h-10' alt="" /> */}
          </div>
        </div>
      </div>
      <div className="thenav flex justify-between bg-gradient-to-r from-orange-500 to-yellow-300 p-4">
        <div className="info flex items-center ">
          <ul className=" flex gap-4 text-sm  text-white">
            <li>
              <div
                className="flex"
                onMouseLeave={() => {
                  setAboutPopUp(false);
                  console.log("mouse leaved");
                }}
                onMouseEnter={() => {
                  setAboutPopUp(true);
                  console.log("mouse entered");
                }}
              >
                <div className="dropdown">
                  <button className="dropbtn">About NYAAY</button>
                  {AboutPopUp && <About />}
                </div>

                <KeyboardArrowDownIcon />
              </div>
            </li>
            <li>
              <div
                className="flex relative cursor-pointer"
                onMouseLeave={() => {
                  setMyNyaayPopUp(false);
                  console.log("mynyay leaved");
                }}
                onMouseEnter={() => {
                  setMyNyaayPopUp(true);
                  console.log("mynyay entered");
                }}
              >
                <p>My NYAAY</p>
                {MyNyaayPopUp && <Mnyay />}
                <KeyboardArrowDownIcon />
              </div>
            </li>
            <li>
              <div
                className="flex cursor-pointer"
                onMouseLeave={() => {
                  setMediaPopup(false);
                  console.log("mouse leaved from media");
                }}
                onMouseEnter={() => {
                  setMediaPopup(true);
                  console.log("mouse entered on media block");
                }}
              >
                <p>Media & Resources</p>
                {MediaPopup && <Mediaresource />}
                <KeyboardArrowDownIcon />
              </div>
            </li>
            <li>
              <div
                className="flex cursor-pointer"
                onMouseLeave={() => {
                  setContactPopup(false);
                  console.log("Contact leaved");
                }}
                onMouseEnter={() => {
                  setContactPopup(true);
                  console.log("contact entered");
                }}
              >
                <p>Contact & Support</p>
                {ContactPopup && <Contact />}
                <KeyboardArrowDownIcon />
              </div>
            </li>
          </ul>
        </div>
        <div className="search  flex justify-center items-center">
          <div>
            <div className=" flex  justify-center items-center bg-white rounded-lg border border-slate-200">
              <input
                type="text "
                placeholder="search"
                className=" ps-4 flex rounded-lg border border-slate-200"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

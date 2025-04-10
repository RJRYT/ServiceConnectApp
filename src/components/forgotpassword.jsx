import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import email from "../assets/ICON.png";
import phoneIcon from "../assets/phoneIcon.png";
import arrow from "../assets/arrow.png";
import round from "../assets/Oval.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Header from "./header";
import Submitbutton from "./submitbutton";
import Input from "./Input";

function Forgotpassword() {
  return (
    <div className="w-full h-screen">
      <Header title="FORGOT PASSWORD" />
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col justify-center items-center content-center">
          <p className="text-center max-w-[360px] mb-9">
            Enter your regitered email or phone nunmber to recieve a OTP to
            reset your password
          </p>
          <div className="flex flex-col gap-3 mb-5">
            <Input
              type="email"
              placeholder="Email"
              className="min-w-[360px]"
              icon={
                <TfiEmail
                  className="absolute left-4 top-5 z-10"
                  size={25}
                  color="white"
                />
              }
            />
            <Input
              type="number"
              placeholder="Phone Number"
              className="min-w-[360px]"
              icon={
                <IoCallOutline
                  className="absolute left-4 top-5 z-10"
                  size={25}
                  color="white"
                />
              }
            />
          </div>

          <Submitbutton title="Continue" />
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;

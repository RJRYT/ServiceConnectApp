import logo from "../assets/LOGO.png";
import oval from "../assets/Oval.png";
import shape from "../assets/SHAPE.png";
import { PiPhoneCallBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";

function SplashScreen() {
  return (
    <section className="min-h-dvh w-full bg-[#1D1F2A] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-10 ">
        <div className="h-[428px] w-[428px] relative flex  items-center justify-center ">
          <img
            src={shape}
            className="max-w-[410px] h-auto absolute inset-0 m-auto z-10 "
            alt="shape"
          />

          <img
            src={oval}
            className="max-w-[330px] h-auto absolute inset-0 m-auto z-0"
            alt="oval"
          />

          <img
            src={logo}
            className="max-w-[116px] h-auto absolute inset-0 m-auto z-20"
            alt="logo"
          />
          <div className="absolute bottom-32 left-34 m-auto z-30">
            <h3 className="text-white font-medium text-4xl font-aubrey tracking-wider">
              Service Connect
            </h3>
            <p className="text-white font-bold text-xs uppercase font-poppins">
              Let's grow with our community
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <LoginButton
            icon={<PiPhoneCallBold color="white" size={25} />}
            text="Login with Email/Phone"
            bgColor="bg-white/90"
            textColor="text-black"
            iconBgColor="bg-[#1D1F2A]"
          />
          <LoginButton
            icon={<FcGoogle size={25} />}
            text="Login with Google"
            bgColor="bg-white/20"
            textColor="text-white/90"
            iconBgColor="bg-white/95"
          />
          <span className="mt-3.5 text-white font-aldrich ">
            Don't have an account?{" "}
            <Link to={"/signup"} className="hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default SplashScreen;

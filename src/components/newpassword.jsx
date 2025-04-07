import Header from "./header";
import Submitbutton from "./submitbutton";
import Input from "./Input";
import { MdLockOutline } from "react-icons/md";

function Newpassword() {
  return (
    <div className="w-full min-h-screen">
      <Header title="RESET PASSWORD" />
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col justify-center items-center content-center">
          <h1 className="font-bold text-slate-900 text-2xl mb-5">
            Create Your New Password
          </h1>
          <div className="flex flex-col gap-3 mb-5">
            <Input
              type="password"
              placeholder="New Password"
              className="min-w-[360px]"
              icon={
                <MdLockOutline
                  className="absolute left-4 top-5 z-10"
                  size={25}
                  color="white"
                />
              }
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="min-w-[360px]"
              icon={
                <MdLockOutline
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

export default Newpassword;

"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { useRouter } from "next/navigation";
import devices from '../../public/assets/devices.png'
import RegNavbar from "../components/RegNavbar";

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-white text-black">
      <RegNavbar />
      <div className="p-4 md:p-0 w-full md:w-[400px] m-auto mt-10">
        <div className="relative">
          <Image src={devices} alt=" " />
        </div>
        <div className="text-center mt-10">
          <p>step 1 of 3</p>
          <p className="font-semibold text-3xl">
            Finish setting up your account
          </p>
          <p className="mt-4">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
        </div>
        <button
          onClick={() => router.push("/regform")}
          className="w-full mt-6 py-5 rounded bg-[#F6131D] text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;

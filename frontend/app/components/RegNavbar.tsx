import Image from "next/image";
import logo from "../../public/assets/logo.svg";

const RegNavbar = () => {
  return (
      <div className="flex justify-between py-4 px-2 border">
        <div className="relative cursor-pointer object-contain h-8 w-20 md:w-44 md:h-9">
          <Image src={logo} alt="" fill />
        </div>
        <div>
          <p>sign in</p>
        </div>
      </div>
  );
};

export default RegNavbar;

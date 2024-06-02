import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        {/* <Image src="/logo-dark.svg" alt="Logo" height={28} width={28} /> */}
        <Image src="/logo2.svg" height={60} width={60} alt="Logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Bill Spread
        </p>
      </div>
    </Link>
  );
};

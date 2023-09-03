import Link from "next/link";
import Image from "next/image";
// import CustomButton from "./CustomButton";
import Button from "./CustomButton";

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/audilogo.png'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>

        {/* <button className="text-primary-blue rounded-full bg-white min-w-[130px]">Sign in</button> */}

        <Button
          title='Sign in'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />

      </nav>
    </header>
  )
}

export default Navbar;
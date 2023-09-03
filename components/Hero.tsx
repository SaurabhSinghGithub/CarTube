"use client";

import Image from "next/image";
import Button from "./CustomButton";

const Hero = () => {

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover, reserve, and lease a vehicle effortlessly!
        </h1>

        <p className="hero__subtitle">
          Simplify your car rental journey with our straightforward booking procedure.
        </p>

        {/* <button className="bg-primary-blue text-white rounded-full mt-10">Explore Cars</button> */}

        <Button
          title="Discover Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/audi1.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero;
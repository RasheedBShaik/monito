import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <header>
        <div className=" navbar lg:overflow-visible xs:overflow-hidden ">
          {/* Navbar */}
          {/* </div> */}
          <div className="bg-sand container sm:py-[28px] xs:py-[28px] flex justify-between  lg:flex-row md:flex-col sm:flex-col xs:flex-col  xs:pb-[35px]">
            <div className="flex items-center justify-between w-full lg:max-w-[529px] md:max-w-full xs:gap-3">
              {/* menu bar list */}
              <div className="flex  justify-between w-full my-[13.5008px] sm:relative  xs:mx-7">
                {/* Hamburger */}
                <button className="hidden xs:flex" onClick={toggleMenu}>
                  <img
                    className="cursor-pointer relative z-10 h-[32px]"
                    src="images/hamburgermenu.png"
                    alt="menu"
                  />
                </button>

                {/* Logo and Search */}
                <img
                  className="w-[115px] min-w-[115px] z-10 relative sm:ml-2"
                  src="images/logo.png"
                  alt="logo"
                />
                <img
                  className="cursor-pointer z-10 relative h-[32px] sm:hidden"
                  src="images/search.png"
                  alt="search"
                />
              </div>

              {/* Desktop Menu */}
              <div className="blue  z-10 relative font-bold flex justify-between min-w-[366px] lg:ml-0 lg:m-0 sm:mr-2 lg:justify-between md:justify-evenly xs:hidden">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">Category</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Contact</div>
              </div>
            </div>

            {/* Search + Button */}
            <div className="flex w-full   relative z-10 xs:hidden">
              <img
                className="absolute top-[35px] left-[45px] "
                src="images/search.png"
                alt="search icon"
              />
              <input
                type="text"
                placeholder="search something here!"
                className="w-full min-w-[280px] rounded-[46px] text-center sm:h-[48px] sm:m-5 xs:h-[48px] xs:m-5"
              />

              <div className="cursor-pointer bg-blue rounded-[46px] text-center w-full max-w-[203px]: flex items-center justify-center text-white sm:m-5 xs:h-[48px] xs:m-5">
                Join the community
              </div>
            </div>
          </div>

          {/* Background Shape */}
          <div className="bg-sand-dark z-0 h-[635px] w-[635px] rounded-[99px] absolute top-[-550px] left-[-250px] rotate-[25.23deg] xs:top-[-600px] xs:left-[-120px] xs:rotate-[45deg] "></div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`xs:items-center xs:w-auto w-full lg:static absolute bg-blue lg:bg-transparent transition-all duration-300 ease-in-out 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex ${
          isOpen
            ? "top-[123px] overflow-visible z-10 left-[2px]"
            : "-top-48 left-[2px]"
        }`}>
        <ul className="lg:flex lg:space-x-6 p-4 lg:p-0 sand bg-blue">
          <li className="hover:bg-sand px-3 py-2 rounded">
            <Link to="#">Home</Link>
          </li>
          <li className="hover:bg-sand px-3 py-2 rounded">
            <Link to="#">Category</Link>
          </li>
          <li className="hover:bg-sand px-3 py-2 rounded">
            <Link to="#">About</Link>
          </li>
          <li className="hover:bg-sand px-3 py-2 rounded">
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="px-4 lg:rounded-b-[40px] rounded-b-[20px] overflow:hidden bg-sand md:overflow-hidden">
        <section className=" container bg-sand lg:flex-row sm:flex-col  xs:flex-col">
          <div className="lg:absolute mt-[80px] z-10  md:relative  sm:relative sm:mt-0 xs:mt-">
            <div className="font-extrabold lg:leading-[68px] blue pb-[4px] flex lg:text-6xl md:text-6xl sm:text-[46px] xs:text-[46px]">
              One More Friend
            </div>

            <div className="font-bold flex blue w-full  lg:leading-[68px] lg:text-5xl md:text-5xl sm:text-[28px] xs:text-[28px]">
              Thousands More Fun!
            </div>
            <div className="max-w-[480px] flex mt-[24px] sm:w-[382px]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </div>
            <div className="flex mt-[34px] gap-[20px] mb-[200px] sm:mb-[25px] xs:mb-[25px] lg:justify-start sm:justify-center ">
              <div className="border-[1.5008px] cursor-pointer border-[#003459] w-full max-w-[161px] flex items-center justify-center blue rounded-[57px]">
                view Intro
              </div>

              <div className="bg-blue cursor-pointer w-full  max-w-[161px] py-[14px] flex items-center justify-center text-white rounded-[57px]">
                Explore Now
              </div>
            </div>
          </div>

          <div className="relative w-full md:h-[500px] sm:h-full z-20 xl:left-[500px] lg:left-[600px] ">
            <img
              className=" z-20 relative lg:left-[-290px] xl:left-[-200px] 2xl:left-[-200px] "
              src="images/good-humored-woman-holds-dog1.png"
              alt=""
            />
            <div className=" relative overflow-hidden  md:h-[760px] w-full md:left-[-200px] md:top-[-760px] lg:block md:hidden sm:hidden xs:hidden">
              <div className="bg-blue z-0 aspect-[1/1] w-[535px] rounded-[99px] absolute lg:top-[310px] lg:right-[390px] lg:rotate-[100deg]  "></div>
              <div className="bg-sand-dark z-10 h-[600px] w-[545px] rounded-[99px] absolute lg:top-[290px] lg:right-[360px] lg:rotate-[20.23deg] md:top-[19px] "></div>
            </div>
          </div>
          <div className="relative  w-[100px] xl:right-[1050px] 2xl:left-[-1050px] lg:right-[1050px] lg:top-[-180px] 2xl:top-[-180px] sm:top-[180px]">
            <div className="bg-sand-dark w-[67.0992px] h-[67.0992px] absolute rounded-[20px] rotate-[25.23deg] z-0 lg:right-[80%] lg:top-[6.8%] lg:block sm:hidden xs:hidden"></div>
          </div>
        </section>
      </div>
      {/* pet cards section */}
      <div className="container">
        <div className=" mt-[60px] mb-[60px] lg:px-[0px] sm:px-[18px] xs:px-[18px] flex items-center justify-between">
          <div>
            <div>Whats new?</div>
            <div className="blue font-bold text-[24px] w-full ">
              Take a look at some of our pets
            </div>
          </div>
          <div className="blue border border-[#003459] py-[12px] cursor-pointer flex items-center justify-center px-[26px] rounded-[57px]">
            View more
          </div>
        </div>
        <div className="grid mb-[60px] justify-between gap-[20px] w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2">
          {/* 1 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-1.png"
                alt=""
              />
            </div>
            <div className=" p-[8px] pb-[20px]">
              <div className="font-bold  ">MO231 - Pomeranian White</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">6.900.000 VND</div>
            </div>
          </div>
          {/* 2 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-2.png"
                alt=""
              />
            </div>

            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO502 - Poodle Tiny Yellow</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">3.900.000 VND</div>
            </div>
          </div>
          {/* 3 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-3.png"
                alt=""
              />
            </div>
            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO102 - Poodle Tiny Sepia</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">4.000.000 VND</div>
            </div>
          </div>
          {/* 4 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-4.png"
                alt=""
              />
            </div>
            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO512 - Alaskan Malamute Grey</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">6.900.000 VND</div>
            </div>
          </div>
          {/* 5 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-5.png"
                alt=""
              />
            </div>
            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO231 - Pembroke Corgi Cream</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">7.900.000 VND</div>
            </div>
          </div>
          {/* 6 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-6.png"
                alt=""
              />
            </div>
            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO502 - Pembroke Corgi Tricolor</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">9.000.000 VND</div>
            </div>
          </div>
          {/* 7 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-7.png"
                alt=""
              />
            </div>
            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO231 - Pomeranian White</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">6.900.000 VND</div>
            </div>
            {/* 8 */}
          </div>
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px] ">
            <div className="p-[8px] flex justify-center">
              <img
                className="bg-blue aspect-[1/1] "
                src="images/pet-card-image-8.png"
                alt=""
              />
            </div>
            <div className="p-[8px] pb-[20px]">
              <div className="font-bold  ">MO512 - Poodle Tiny Dairy Cow</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Gene:</div>
                  <div className="gray font-bold">Male</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Age:</div>
                  <div className="gray font-bold">02 months</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">5.000.000 VND</div>
            </div>
          </div>
          {/* cards end */}
        </div>
      </div>
      {/*one more friend banner */}
      <div className="relative container bg-blue md:h-[378px] lg:h-[378px] xl:h-[378px] 2xl:h-[378px] sm:h-[640px] overflow-hidden xs:h-[640px] ">
        <div className="absolute xs:right-0 xs:w-full md:w-[403px] lg:right-[100px] sm:right-[20px] flex flex-col items-end top-[64px]  xs:top-[0px] z-10">
          <div className="blue font-bold xs:w-full xs:text-center sm:text-[36px] sm:text-center sm:w-full xs:text-[36px] md:text-[52px]">
            One More Friend
          </div>
          <div className="blue xs:w-full xs:text-center md:text-center font-bold sm:text-center sm:w-full sm:text-[24px] xs:text-[24px] lg:text-[36px]  ">
            Thousands more fun!
          </div>
          <div className="relative xs:px-[26px] xs:pt-[6px] sm:px-[53px] sm:pt-[12px] md:px-0 xl:left-[16px] lg:left-[50px] 2xl:px-0 2xl:b-0 w-full sm:text-center sm:w-full">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </div>
          <div className="flex xs:w-full 2xl:pt-0 xs:justify-center sm:w-full sm:justify-center mt-[20px]  xl:w-full md:w-[250px]  justify-end gap-[20px] ">
            <div className="border-[1.5008px] cursor-pointer border-[#003459] py-[14px]  w-full max-w-[161px] flex items-center justify-center blue rounded-[57px]">
              view Intro
            </div>
            <div className="bg-blue cursor-pointer w-full  max-w-[161px] py-[14px] flex items-center justify-center text-white rounded-[57px]">
              Explore Now
            </div>
          </div>
        </div>
        <div className="absolute z-0 bg-sand 2xl:h-[635px] 2xl:w-[782.29px] 2xl:rounded-[99px] 2xl:rotate-[25.23deg] 2xl:top-[-190px] 2xl:left-[50%] xl:h-[635px] xl:w-[782.29px] xl:rounded-[99px] xl:rotate-[25.23deg] xl:top-[-190px] xl:left-[50%] lg:h-[635px] lg:w-[782.29px] lg:rounded-[99px] lg:rotate-[25.23deg] lg:top-[-190px] lg:left-[50%] md:h-[635px] md:w-[782.29px] md:rounded-[99px] md:rotate-[25.23deg] md:top-[-190px] md:left-[50%] sm:rotate-[30deg] sm:w-[605.03px] sm:h-[635px] sm:top-[-300px] sm:rounded-[99px] xs:top-[-250px] xs:rotate-[15deg] xs:left-[-120px] xs:rounded-[99px] xs:w-[605.03px] sm:left-[20px]  xs:h-[635px]"></div>
        <div className="absolute z-0 bg-blue-dark h-[787.54px] w-[787.54px] rounded-[99px] 2xl:rotate-[28.25deg] 2xl:top-[165px] 2xl:right-[50%] xl:h-[787.54px] xl:w-[787.54px] xl:rounded-[99px] xl:rotate-[28.25deg] xl:top-[165px] xl:right-[50%] lg:h-[787.54px] lg:w-[787.54px] lg:rounded-[99px] lg:rotate-[28.25deg] lg:top-[165px] lg:right-[50%] md:h-[787.54px] md:w-[787.54px] md:rounded-[99px] md:rotate-[28.25deg] md:top-[165px] md:right-[50%] sm:top-[500px] sm:rotate-[45deg] sm:right-[200px] xs:top-[530px] xs:rotate-[20deg] xs:right-[-250px] "></div>

        <img
          className=" absolute block md:relative xl:top-[36px] lg:top-[36px] md:top-[36px] lg:left-[17px] sm:bottom-0 xs:bottom-[0px] md:left-[-65px]  z-10"
          src="images/one more friend banner image.png"
          alt=""
        />
      </div>
      {/* our poducts section */}
      <div className="container pb-[60px]  xs:hidden sm:hidden md:block">
        <div className=" container pt-[60px] pb-[60px] flex items-center sm:px-[18px] xs:px-[18px] md:px-0 justify-between">
          <div>
            <div>Hard to choose right products for your pets?</div>
            <div className="blue  font-bold w-full text-[24px]">
              Our Products
            </div>
          </div>
          <div className="blue border border-[#003459] py-[12px] cursor-pointer flex items-center justify-center px-[26px] rounded-[57px]">
            View more
          </div>
        </div>
        <div className="grid justify-between gap-[20px] w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2">
          {/* 1 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-1.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">Zealandza Dog Food</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Dog Food</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Size:</div>
                  <div className="gray font-bold">385gm</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">140.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-2.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">
                Reflex Plus Adult Cat Food Salmon
              </div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Cat Food</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Size:</div>
                  <div className="gray font-bold">1.5kg</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">165.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-3.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">
                Cat scratching ball toy kitten sisal rope ball
              </div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Toy</div>
                </div>
                <div className="flex gap-[6px]"></div>
              </div>
              <div className="text-[14px] font-bold">1.100.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-4.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">Cute Pet Cat Warm Nest</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Toy</div>
                </div>
                <div className="flex gap-[6px]"></div>
              </div>
              <div className="text-[14px] font-bold">410.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-5.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Dog Food</div>
                </div>
                <div className="flex gap-[6px]">
                  <div className="gray">Size:</div>
                  <div className="gray font-bold">385gm</div>
                </div>
              </div>
              <div className="text-[14px] font-bold">350.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-6.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">
                Costumes Fashion Pet Clother Cowboy Rider
              </div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Costume</div>
                </div>
                <div className="flex gap-[6px]"></div>
              </div>
              <div className="text-[14px] font-bold">500.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-7.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">
                Costumes Chicken Drumsti ck Headband
              </div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Costume</div>
                </div>
                <div className="flex gap-[6px]"></div>
              </div>
              <div className="text-[14px] font-bold">400.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="card rounded-[12px] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] flex flex-col mt-[3.75px]">
            <div className="p-[8px]">
              <img
                className=" aspect-[1/1] "
                src="images/product-card-image-8.png"
                alt=""
              />
            </div>

            <div className="pb-[20px] p-[8px]">
              <div className="font-bold ">Plush Pet Toy</div>
              <div className="flex gap-[26px] xs:flex-col xs:gap-0">
                <div className="flex gap-[6px]">
                  <div className="gray">Product:</div>
                  <div className="gray font-bold">Toy</div>
                </div>
                <div className="flex gap-[6px]"></div>
              </div>
              <div className="text-[14px] font-bold">250.000 VND</div>
              <div className="flex items-center bg-sand gap-[24px] mt-[10px]">
                <img
                  className="max-h-[20px] pl-[10px]"
                  src="images/gift.png"
                  alt=""
                />
                <div className="py-[8px] font-bold text-[14px]">
                  Free Toy & Free Shaker
                </div>
              </div>
            </div>
          </div>

          {/* cards end */}
        </div>
      </div>
      {/* pet sellers */}
      <div className="container xs:hidden sm:px-[18px] md:px-0 ">
        <div className="flex mt-[40px] mb-[15px] justify-between">
          <div className="flex items-center gap-[8px]">
            <div>proud to be part of</div>
            <div className="blue font-bold text-[24px] leading-[36px]">
              Pet Sellers
            </div>
          </div>
          <div className="blue border border-[#003459]  cursor-pointer flex items-center justify-center px-[26px] rounded-[57px]">
            View all our sellers
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-around gap-[20px] mb-40px ">
          <div className="flex sm:flex md:flex items-center justify-center">
            <img src="images/pet sellers image-1.png" alt="" />
          </div>
          <div className="flex sm:flex md:flex items-center justify-center">
            <img src="images/pet sellers image-2.png" alt="" />
          </div>
          <div className="flex sm:flex md:flex items-center justify-center">
            <img src="images/pet sellers image-3.png" alt="" />
          </div>
          <div className="flex sm:flex md:flex items-center justify-center">
            <img src="images/pet sellers image-4.png" alt="" />
          </div>
          <div className="flex sm:hidden md:flex items-center justify-center">
            <img src="images/pet sellers image-5.png" alt="" />
          </div>
          <div className="flex sm:hidden lg:flex md:hidden items-center justify-center">
            <img src="images/pet sellers image-6.png" alt="" />
          </div>
          <div className="flex sm:hidden lg:flex md:hidden items-center justify-center">
            <img src="images/pet sellers image-7.png" alt="" />
          </div>
        </div>
      </div>
      {/* you already know */}
      <div className="container">
        <div className="flex mt-[60px] mb-[28px] items-center justify-between xs:px-[18px] sm:px-[18px] md:px-0">
          <div className="items-center">
            <div>you already know ?</div>
            <div className="blue font-bold text-[24px] leading-[36px]">
              Useful Pet Knowledge
            </div>
          </div>
          <div className="blue border border-[#003459]  cursor-pointer flex items-center justify-center px-[28px] py-[12px] rounded-[57px]">
            View more
          </div>
        </div>
        <div className="card-container mb-[60px] w-full display flex justify-between md:flex-row xs:flex-col sm:flex-col">
          {/* 1 */}
          <div className="card shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] w-full md:max-w-[380px] xs:max-w-full">
            <div>
              <img
                className="p-[8px] w-full rounded-[10px] "
                src="images/pet knowledge image-1.png"
                alt=""
              />
            </div>
            <div className="p-[8px]">
              <div className="px-[8px] pb-[10px]">
                <div className="w-fit text-white bg-blue-400 px-[10px] py-[2px] rounded-[28px] ">
                  pet Knowledge
                </div>
              </div>
              <div className="px-[8px] line-clamp-5">
                <div className="font-bold pb-[6px] ">
                  What is a Pomeranian? How to Identify Pomeranian Dogs
                </div>
                <div className="text-[14px]">
                  The Pomeranian, also known as the Pomeranian (Pom dog), is
                  always in the top of the cutest pets. Not only that, the
                  small, lovely, smart, friendly, and skillful circus dog breed.
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] w-full md:max-w-[380px] xs:w-full">
            <div>
              <img
                className="p-[8px] w-full rounded-[10px] "
                src="images/pet knowledge image-2.png"
                alt=""
              />
            </div>
            <div className="p-[8px]">
              <div className="px-[8px] pb-[10px]">
                <div className="w-fit text-white bg-blue-400 px-[10px] py-[2px] rounded-[28px] ">
                  pet Knowledge
                </div>
              </div>
              <div className="px-[8px] line-clamp-5">
                <div className="font-bold pb-[6px] ">
                  Dog Diet You Need To Know
                </div>
                <div className="text-[14px]">
                  Dividing a dog's diet may seem simple at first, but there are
                  some rules you should know so that your dog can easily absorb
                  the nutrients in the diet. For those who are just starting to
                  raise dogs, especially newborn puppies with relatively weak
                  resistance.
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="card shadow-[0_4px_28px_-2px_rgba(0,0,0,0.1)] w-full md:max-w-[380px] xs:full">
            <div>
              <img
                className="p-[8px] w-full rounded-[10px] "
                src="images/pet knowledge image-3.png"
                alt=""
              />
            </div>
            <div className="p-[8px]">
              <div className="px-[8px] pb-[10px]">
                <div className="w-fit text-white bg-blue-400 px-[10px] py-[2px] rounded-[28px] ">
                  pet Knowledge
                </div>
              </div>
              <div className="px-[8px] line-clamp-5">
                <div className="font-bold pb-[6px] ">
                  Why Dogs Bite and Destroy Furniture and How to Prevent It
                  Effectively
                </div>
                <div className="text-[14px]">
                  Dog bites are common during development. However, no one wants
                  to see their furniture or important items being bitten by a
                  dog.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="bg-sand rounded-t-[20px] lg:rounded-t-[40px] ">
        <div className="container  pt-[80px]">
          <div className="bg-blue flex items-center justify-around xl:flex-row  sm:flex-col xs:flex-col rounded-[16px] mb-[40px] lg:pb-0 sm:pb-[28px]  2xl-mx-0 xl:mx-0 md:mx-[10px] sm:mx-[10px] xs:mx-[10px]">
            <div className="text-white xl:max-w-[389px] md:max-w-full md:text-start text-center flex text-[24px] py-[32px] font-bold">
              Register Now So You Don't Miss Our Programs
            </div>
            <div className="bg-white md:w-full md:max-w-[707px] md:flex-row xs:flex-col md:p-[32px] lg:my-[24px] sm:p-[16px] xs:w-[90%] xs:p-[16px] xs:mb-[16px] rounded-[14px] flex gap-[12px] sm:px-[16px] ">
              <input
                className="border border-black w-full max-w-[508px] rounded-[8px] px-[28px] py-[14px]"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="bg-blue text-white px-[30.5px] whitespace-nowrap rounded-[8px] pt-[14px] pb-[10px]">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="flex md:flex-row md:px-[10px] sm:flex-col xs:flex-col gap-[100px] justify-between mb-[40px]">
            <div className="flex gap-[60px] md:justify-center sm:justify-center xs:justify-center sm:gap-[60px] xs:gap-[10px]">
              <div>Home</div>
              <div>Category</div>
              <div>About</div>
              <div>Contact</div>
            </div>
            <div className="flex gap-[40px] md:justify-center sm:justify-center xs:justify-center">
              <img src="images/Facebook-logo.png" alt="" />
              <img src="images/Twitter-logo.png" alt="" />
              <img src="images/Instagram-logo.png" alt="" />
              <img src="images/YouTube-logo.png" alt="" />
            </div>
          </div>
        </div>
        <hr className="container border-2" />
        <div className=" container px-[10px] md:flex-row sm:flex-col xs:flex-col text-[#667479] flex justify-between pt-[40px] pb-[40px] sm:flex sm:items-center sm:gap-[30px] xs:items-center xs:gap-[30px] ">
          <div className="flex">
            <div>© 2022 Monito. All rights reserved.</div>
          </div>
          <img
            className="max-w-[115px] w-full h-full max-h-[40px]"
            src="images/logo.png"
            alt=""
          />
          <div className="flex gap-[30px] ">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

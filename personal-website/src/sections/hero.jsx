import profile from "../assets/profile.jpg";

const Hero = ({ OnClick }) => {
  return (
    <div className="bg-white w-full min-h-screen px-10 lg:px-52">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full">
        <div className="flex flex-col text-center mt-10 lg:mt-[50px]">
          <h1 className="text-black text-3xl lg:text-4xl">Welcome!</h1>
          <h1 className="text-customOrange text-3xl lg:text-4xl">I'm Arman</h1>
          <h1 className="text-customGrayLight text-xl lg:text-xl">
            this is my website
          </h1>
        </div>
        <div className="mt-[100px] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden mt-10 lg:mt-40">
          <img
            className="object-cover w-full h-full rounded-full"
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <h1
          onClick={OnClick}
          className="inline-block text-zinc-900 text-xl bg-transparent px-4 py-1 border-2 border-customOrange cursor-pointer hover:bg-customOrange transition-all duration-200"
        >
          Click Me
        </h1>
      </div>
    </div>
  );
};

export default Hero;

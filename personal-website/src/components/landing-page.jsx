function LandingPage() {
    return (
      <div className="bg-customBackgroundColor w-full h-screen">
        <div className="flex justify-center h-full">
            <div className = "flex-column text-center mt-80">
                <h1 className="text-white text-4xl">Welcome!</h1>
                <h1 className ="text-customOrange text-4xl">I'm Arman</h1>
                <h1 className ="text-customGrayLight text-xl">this is my website</h1>
                <h1 className ="inline-block text-white text-xl bg-transparent px-4 py-1 border-2 border-customOrange mt-40 cursor-pointer">Click Me</h1>
            </div>
        </div> 
      </div>
    );
  }
  
  export default LandingPage;
  
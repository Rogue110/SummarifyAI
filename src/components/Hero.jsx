import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Rogue110/SummarifyAI", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>SummarifyAI</span>
      </h1>
      <h2 className='desc'>
      Unleashing the Power of AI: Transforming Lengthy Articles into Digestible Insights with SummarifyAI
      </h2>
    </header>
  );
};

export default Hero;



import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col text-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 px-5">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/jevgenigor", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;

const Buttons = ({ handleClick }) => {
  return (
    <div className="grid grid-cols-4 justify-items-center items-center max-w-md bg-gray-100 font-sans text-xl">
      <button value={"AC"} onClick={handleClick} id="clear" className="hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-48 h-24 col-start-1 col-end-3">AC</button>
      <button value={"b"} onClick={handleClick} id="backspace" className="hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
        </svg>
      </button>
      <button value={"/"} onClick={handleClick} id="divide" className="hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">÷</button>
      <button value={1} onClick={handleClick} id="one" className="hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">1</button>
      <button value={2} onClick={handleClick} id="two" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">2</button>
      <button value={3} onClick={handleClick} id="three" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">3</button>
      <button value={"*"} onClick={handleClick} id="multiply" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">×</button>
      <button value={4} onClick={handleClick} id="four" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">4</button>
      <button value={5} onClick={handleClick} id="five" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">5</button>
      <button value={6} onClick={handleClick} id="six" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">6</button>
      <button value={"+"} onClick={handleClick} id="add" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">+</button>
      <button value={7} onClick={handleClick} id="seven" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">7</button>
      <button value={8} onClick={handleClick} id="eight" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">8</button>
      <button value={9} onClick={handleClick} id="nine" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">9</button>
      <button value={"-"} onClick={handleClick} id="minus" className=" hover:bg-white transition-all font-bold text-gray-500 bg-gray-100 w-24 h-24 ">-</button>
      <button value={0} onClick={handleClick} id="zero" className=" hover:bg-white transition-all col-start-2 col-end-3 font-bold text-gray-500 bg-gray-100 w-24 h-24 ">0</button>
      <button value={"."} onClick={handleClick} id="decimal" className=" hover:bg-white transition-all col-start-3 col-end-4 font-bold text-gray-500 bg-gray-100 w-24 h-24 ">.</button>
      <button value={"="} onClick={handleClick} id="equals" className=" hover:bg-white transition-all col-start-4 col-end-5 font-bold text-gray-500 bg-gray-100 w-24 h-24 ">=</button>
    </div>
  );
};

export default Buttons;

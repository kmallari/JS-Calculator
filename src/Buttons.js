const Buttons = ({ handleClick, handleEquate }) => {
  return (
    <div className="grid grid-cols-4 justify-items-center items-center max-w-md bg-gray-300 font-sans text-xl">
      <button value={"AC"} onClick={handleClick} id="clear" className="font-bold text-gray-500 bg-gray-100 w-48 h-24 col-start-1 col-end-3">AC</button>
      <button value={"%"} onClick={handleClick} id="percent" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">%</button>
      <button value={"/"} onClick={handleClick} id="divide" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">/</button>
      <button value={1} onClick={handleClick} id="one" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">1</button>
      <button value={2} onClick={handleClick} id="two" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">2</button>
      <button value={3} onClick={handleClick} id="three" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">3</button>
      <button value={"*"} onClick={handleClick} id="multiply" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">x</button>
      <button value={4} onClick={handleClick} id="four" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">4</button>
      <button value={5} onClick={handleClick} id="five" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">5</button>
      <button value={6} onClick={handleClick} id="six" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">6</button>
      <button value={"+"} onClick={handleClick} id="add" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">+</button>
      <button value={7} onClick={handleClick} id="seven" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">7</button>
      <button value={8} onClick={handleClick} id="eight" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">8</button>
      <button value={9} onClick={handleClick} id="nine" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">9</button>
      <button value={"-"} onClick={handleClick} id="minus" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">-</button>
      <button value={"."} onClick={handleClick} id="decimal" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">.</button>
      <button value={0} onClick={handleClick} id="zero" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">0</button>
      <button value={"b"} onClick={handleClick} id="backspace" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">&#60;</button>
      <button value={"="} onClick={handleClick} id="equals" className="font-bold text-gray-500 bg-gray-100 w-24 h-24 ">=</button>
    </div>
  );
};

export default Buttons;

const Display = ({ equation, input }) => {
  return (
    <div className="h-28 w-96">
      <div className="bg-gray-300 h-8 p-1 pr-10 text-right font-bold text-gray-700">{equation}</div>
      <div className="bg-gray-200 h-20 p-4 pr-10 text-right text-4xl font-bold text-gray-700" >{input}</div>
    </div>
  );
};

export default Display;

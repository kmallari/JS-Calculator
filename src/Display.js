const Display = ({ equation, input }) => {
  return (
    <div className="bg-gray-100 h-28 w-96">
      <div className="bg-green-400">{equation}</div>
      <div className="bg-blue-400">{input}</div>
    </div>
  );
};

export default Display;

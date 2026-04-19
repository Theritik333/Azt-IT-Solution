const Loader = () => {
  return (
    <div className="py-20 space-y-6 px-4">

      <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>

      <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto animate-pulse"></div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1,2,3].map((i) => (
          <div key={i} className="h-40 bg-gray-300 rounded-xl animate-pulse"></div>
        ))}
      </div>

    </div>
  );
};


export default Loader;
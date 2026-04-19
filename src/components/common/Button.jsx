const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 rounded-lg text-white font-medium 
      bg-gradient-to-r from-indigo-600 to-purple-600 
      hover:opacity-90 transition duration-300 shadow-lg">
      
      {children}
    </button>
  );
};

export default Button;
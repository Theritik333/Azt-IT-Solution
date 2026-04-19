const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionTitle;
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const CourseCard = ({ image, title, description, rating, duration }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden hover:scale-105">
      
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-3">
          {description}
        </p>

        {/* Rating + Duration */}
        <div className="flex items-center justify-between mb-4">
          
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm">{rating}</span>
          </div>

          {/* Duration */}
          <span className="text-sm text-gray-400">
            {duration}
          </span>

        </div>

        {/* Button */}
        <Button>
          Enroll Now
        </Button>

      </div>
    </div>
  );
};

export default CourseCard;
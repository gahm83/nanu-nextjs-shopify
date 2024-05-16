import React, { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onChange?: (rating: number) => void;
  editable?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange, editable = false }) => {
  const [currentRating, setCurrentRating] = useState<number>(rating);

  const handleClick = (value: number) => {
    if (editable && onChange) {
      setCurrentRating(value);
      onChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleClick(value)}
          className={`${value <= currentRating ? 'star-fill' : 'star-line'} ${editable ? 'cursor-pointer' : 'curcor-default'}`}
        ></span>
      ))}
    </div>
  );
};

export default StarRating;

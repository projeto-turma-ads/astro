
import React, { useState } from 'react';

const Question = ({ question, options, handleAnswer }:{
  question: string, options: any[], handleAnswer: (e: any)=> void
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    handleAnswer(option);
  };

  return (
    <div className="question flex flex-col gap-2">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label className='flex gap-2'>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
import React, { useState } from 'react';

const GradeCalculator = () => {
  const [mathGrade, setMathGrade] = useState('');
  const [englishGrade, setEnglishGrade] = useState('');
  const [scienceGrade, setScienceGrade] = useState('');
  const [average, setAverage] = useState(null);
  const [gradeStatus, setGradeStatus] = useState('');

  // Function to handle the input of grades
  const handleInputGrades = () => {
    // Convert grades to numbers
    const math = parseInt(mathGrade);
    const english = parseInt(englishGrade);
    const science = parseInt(scienceGrade);

    // Check if grades are within the valid range
    if (math <= 100 && english <= 100 && science <= 100 && math > 0 && english > 0 && science > 0) {
      // Calculate the total and average
      const total = math + english + science;
      const avg = total / 3;

      // Set the average state
      setAverage(avg);

      // Determine the grade status
      let status = 'Fail';
      if (avg >= 95) {
        status = 'A+';
      } else if (avg >= 90) {
        status = 'A';
      } else if (avg >= 85) {
        status = 'B+';
      } else if (avg >= 80) {
        status = 'B';
      } else if (avg >= 75) {
        status = 'C+';
      }

      // Set the grade status state
      setGradeStatus(status);
    } else {
      alert('Please enter valid grades between 1 and 100.');
    }
  };

  return (
    <div className="container">
      <h1>Grade Calculator</h1>
      <div>
        
        <label>
          Math Grade:
          <input type="number" value={mathGrade} onChange={(e) => setMathGrade(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          English Grade:
          <input type="number" value={englishGrade} onChange={(e) => setEnglishGrade(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Science Grade:
          <input type="number" value={scienceGrade} onChange={(e) => setScienceGrade(e.target.value)} />
        </label>
      </div>
      <button className="button" onClick={handleInputGrades}>Calculate</button>
      {average !== null && (
        <div>
          <p>Average: {average.toFixed(2)}</p>
          <p>Grade Status: {gradeStatus}</p>
          <p>LEGEND</p>
          <li>100 - 95 ---------- A+</li>
          <li>94 - 90 ---------- A</li>
          <li>89 - 85 ---------- B+</li>
          <li>84 - 80 ---------- B</li>
          <li>79 - 75 ---------- C+</li>
          <li>74 - 70 ---------- F</li>
        </div>
      )}
      <style jsx>
        {`
          .container {
            padding: 250px;
            max-width: 0 auto;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            text-align: center; 
            background-color: #524C42;
            color: #E2DFD0;
            
          }

          .button{
            background-color: #F97300;
          }
        `}
      </style>
    </div>
  );
};

export default GradeCalculator;

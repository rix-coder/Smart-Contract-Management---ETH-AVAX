# Smart-Contract-Management---ETH-AVAX

## Project: Function Frontend
For this project, create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application. 

# Description

This program is a smart contract management Grade Calculator, a programming language used for developing this progran is Solidity and React.js. The contract has the following functions :-

(1) Contract successfully uses function inputGrades() statement.

(2) Contract successfully uses function calculateAverage() statement.

(3) Contract successfully uses function getGradeStatus() statement.

## Getting Started
### Functionalities
- function inputGrades(): Input 3 valid grades. If a condition fails, then the function execution is terminated with an error message.
- function calculateAverage(): Calculate the average where the sum of 3 input grades will be divided by 3 and display the total average.
- function getGradeStatus(): Display the grade status based to the total average.

## Executing program
To run this program, first clone the github respiratory: https://github.com/MetacrafterChris/SCM-Starter
After cloning the github, you will want to do the following to get the code running on your computer.
1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/

## This is my code in Solidity
          // SPDX-License-Identifier: UNLICENSED
          pragma solidity ^0.8.9;
          
          contract GradeCalculator {
              uint256 private mathGrade;
              uint256 private englishGrade;
              uint256 private scienceGrade;
              uint256 private totalAddGrades;
          
              event GradesInput(uint256 math, uint256 english, uint256 science);
              event AverageCalculated(uint256 average);
              event GradeStatus(string grade);
          
              function inputGrades(uint256 _math, uint256 _english, uint256 _science) external {
                  require(_math <= 100 && _english <= 100 && _science <= 100, "Grades must be between 0 and 100");
                  require(_math != 0 && _english != 0 && _science != 0, "Grades must not be zero");
          
                  mathGrade = _math;
                  englishGrade = _english;
                  scienceGrade = _science;
          
                  totalAddGrades = mathGrade + englishGrade + scienceGrade;
          
                  emit GradesInput(_math, _english, _science);
              }
          
              function calculateAverage() public view returns (uint256) {
                  require(totalAddGrades > 0, "Grades not yet input");
                  uint256 average = totalAddGrades / 3;
                  return average;
              }
          
              function getGradeStatus(uint256 average) public pure returns (string memory) {
                  if (average >= 95 && average <= 100) {
                      return "A+";
                  } else if (average >= 90 && average < 95) {
                      return "A";
                  } else if (average >= 85 && average < 90) {
                      return "B+";
                  } else if (average >= 80 && average < 85) {
                      return "B";
                  } else if (average >= 75 && average < 80) {
                      return "C+";
                  } else {
                      return "F";
                  } }
          }

## This is my code in React.js
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

## Author
NTCIAN Rix
Email: 422003664@ntc.edu.ph
<br>
[Discord: @Rix](rix1473)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

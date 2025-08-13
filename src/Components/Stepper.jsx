import React from "react";
import "./Stepper.css";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="stepper-container">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div key={index} className="stepper-item">
            <div className="stepper-header">
              <div
                className={`stepper-circle ${
                  isCompleted ? "completed" : isActive ? "active" : ""
                }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              {index !== steps.length - 1 && (
                <div
                  className={`stepper-line ${
                    isCompleted ? "completed" : ""
                  }`}
                ></div>
              )}
            </div>
            <div className="stepper-label">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;

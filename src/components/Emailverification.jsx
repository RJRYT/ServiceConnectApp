import React, { useState, useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { BsBackspace, BsArrowRightShort } from "react-icons/bs";

function EmailVerification() {
    const [code, setCode] = useState(["", "", "", ""]);
    const [time, setTime] = useState(60); 

    // Countdown Timer
    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [time]);

    const timerDisplay = `${time}s`; 

    // Function to handle number input
    const handleNumberClick = (number) => {
        setCode((prevCode) => {
            const newCode = [...prevCode];
            const emptyIndex = newCode.findIndex((digit) => digit === "");
            if (emptyIndex !== -1) {
                newCode[emptyIndex] = number;
            }
            return newCode;
        });
    };

    // Function to handle backspace
    const handleBackspace = () => {
        setCode((prevCode) => {
            const newCode = [...prevCode];
            for (let i = newCode.length - 1; i >= 0; i--) {
                if (newCode[i] !== "") {
                    newCode[i] = "";
                    break;
                }
            }
            return newCode;
        });
    };
    
    const handleChange = (e, index) => {
        const value = e.target.value;
    
        if (/^\d?$/.test(value)) { // Allow only single digits
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
    
            // Move to the next input field if a digit is entered
            if (value && index < code.length - 1) {
                document.getElementById(`input-${index + 1}`).focus();
            }
        }
    };


    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newCode = [...code];
    
            // If input is already empty, move focus back and clear previous input
            if (!newCode[index] && index > 0) {
                newCode[index - 1] = ""; // Clear previous input
                setCode(newCode);
                document.getElementById(`input-${index - 1}`).focus();
            } else {
                newCode[index] = ""; // Clear current input
                setCode(newCode);
            }
        }
    };

    return (
        <div className="flex items-center flex-col justify-center  h-screen bg-gray-300">
            <div className="w-full h-20 flex bg-black items-center space-x-3">
                <div className="rounded-full bg-black w-10 h-10 flex justify-center items-center text-white text-xl font-bold border border-white ml-2">
                    <SlArrowLeft />
                </div>
                <p className="w-[50dvh] text-white text-xl font-semibold font-sans">EMAIL VERIFICATION</p>
            </div>

            <div className="h-[100dvh] w-100 flex flex-col items-center ">
                <div className="w-full">
                    <p className="text-center w-full h-20 flex justify-center items-end text-sm font-semibold text-[#2d292a]">
                        Code has been sent to (Email) abc****@gmail.com
                    </p>

                    <div className="flex justify-center p-3 mt-2 space-x-6">
                        {code.map((digit, index) => (
                            <input
                                 key={index}
                                 id={`input-${index}`}
                                 type="text"
                                 maxLength="1"
                                 value={digit}
                                 onChange={(e) => handleChange(e, index)}
                                 onKeyDown={(e) => handleKeyDown(e, index)}
                                 className="w-16 h-13 shadow-xl shadow-gray-500/40 border border-gray-500 rounded-xl bg-[rgb(110,96,82)] text-white text-center text-xl font-medium focus:border-black outline-none transition-all"
                             />
                         ))}
                    </div>

                    <p className="text-center text-sm mt-3 font-semibold text-[#2d292a]">
                        Resend Code in <span className="font-bold">{timerDisplay}</span>
                    </p>

                    {/* Verify Button */}
                    <div className="h-20 flex  items-center justify-center">
                        <button className="mt-4 w-80 h-12 bg-black p-1 shadow-lg shadow-gray-500 text-white rounded-full flex justify-center items-center text-lg font-medium">
                            <p className=" ml-8 w-[45dvh]">Verify</p>
                            <div className="h-12 w-12 flex justify-center items-center  text-4xl">
                                <BsArrowRightShort className="bg-white text-black rounded-3xl" />
                            </div>
                        </button>
                    </div>

                    {/* Numeric Keypad */}
                    <div className=" grid grid-cols-3  gap-2 mt-5 p-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0].map((num, index) => (
                            <button
                                key={index}
                                onClick={() => handleNumberClick(num.toString())}
                                className="p-3 text-lg font-semibold"
                            >
                                {num}
                            </button>
                        ))}
                        <button onClick={handleBackspace} className="py-3 text-lg flex justify-center font-semibold">
                            <BsBackspace />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailVerification;

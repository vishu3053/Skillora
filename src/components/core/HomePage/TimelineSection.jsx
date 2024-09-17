import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];


function TimeLine() {
    return (
        <div className="mb-[70px]">
            <div className="flex flex-row gap-[90px] items-center">

                <div className="w-[45%] flex flex-col gap-5">
                    {
                        timeLine.map( (element, index) => {
                            return (
                                <div className="flex flex-col mt-[-15px]" key={index}>
                                    <div className="flex flex-row gap-4">
                                        <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                            <img src={element.Logo} />
                                        </div>

                                        <div>
                                            <h2 className="font-semibold text-[16px]">{element.Heading}</h2>
                                            <p className="font-[14px]">{element.Description}</p>
                                        </div>
                                    </div>
                      
                                    <div className={`hidden ${
                                        timeLine.length - 1 === index ? "hidden" : "lg:block"
                                    }  
                                    h-10 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                                    ></div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
                    
                    <img src = {timelineImage} 
                    alt = "timelineImage" 
                    className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[450px]"
                    />
                    
                    <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                    left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300
                        px-2">
                            <p className="text-3xl font-bold">10</p>
                            <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
                        </div>

                        <div className="flex flex-row gap-5 items-center px-7">
                            <p className="text-3xl font-bold">250</p>
                            <p className="text-caribbeangreen-300 text-sm">Type of Courses</p>
                        </div>
                    </div>
                
                    
                </div>

            </div>
        </div>
    );
}

export default TimeLine;
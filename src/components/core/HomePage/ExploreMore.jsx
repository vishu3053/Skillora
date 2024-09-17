import React from "react";
import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ]; 

function ExploreMore(){

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState( HomePageExplore[0].courses[0].heading);

    // Updates Current Card, Tab and Courses.
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    return(
        <div>
            <div className="text-4xl font-semibold text-center my-3">
                Unlock the
                <HighlightText text={"Power of Code"} />
            </div>

            <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
                Learn to Build Anything You Can Imagine
            </p>

            <div className="flex flex-row mt-10 mb-5 bg-richblack-800 px-1 py-1 rounded-full drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
                {
                    tabsName.map( (element, index) => {
                        return (
                            <div 
                            className={` text-[16px] flex flex-row items-center gap-2 
                                ${currentTab === element
                                  ? "bg-richblack-900 text-richblack-5 font-medium"
                                  : "text-richblack-200"} 
                                px-7 py-2 rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}                
                            key = {index}
                            onClick={ () => setMyCards(element)}>
                                {element}
                            </div>
                        );
                    })
                }
            </div>

            <div className="lg:h-[230px]"></div>

            {/* Cards Group */}
            <div className="lg:absolute gap-10 lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] 
            lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[40%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
                {
                    courses.map( (element, index) => {
                        return (
                            <CourseCard
                                key={index}
                                cardData={element}
                                currentCard={currentCard}
                                setCurrentCard={setCurrentCard}
                            />
                        );
                    })
                }
            </div>

        </div>
    );
}

export default ExploreMore;
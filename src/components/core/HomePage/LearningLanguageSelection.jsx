import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

function LearningLanguageSection() {
    return (
        <div className="mt-[50px] mb-28">
            <div className="flex flex-col gap-5 items-center">

                <div className="text-4xl font-semibold text-center">
                    Your Swiss Knife for 
                    <HighlightText text = {" learning any language"} />
                </div>

                <div className="w-[70%] text-base font-medium text-center text-richblack-600 mx-auto">
                    Using spin making learning multiple languages easy. with 20+
                    languages realistic voice-over, progress tracking, custom schedule
                    and more.
                </div>

                <div className="flex flex-row items-center justify-center mt-5">
                    <img 
                        src = {Know_your_progress}
                        alt = "KnowYourProgressImage"
                        className="object-contain -mr-32"
                    />

                    <img 
                        src = {Compare_with_others}
                        alt = "CompareWithOthersImage"
                        className="object-contain"
                    />

                    <img 
                        src = {Plan_your_lessons}
                        alt = "PlanYourLessonsImage"
                        className="object-contain -ml-36"
                    />
                </div>

                <div className="w-fit">
                    <CTAButton active = {true} linkto = {"/signup"}>
                        <div>
                            Learn More 
                        </div>
                    </CTAButton>
                </div>
            </div>
        </div>
    );
}

export default LearningLanguageSection;
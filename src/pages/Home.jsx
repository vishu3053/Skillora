import React from "react";
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4" 
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSelection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ReviewSlider from "../components/core/HomePage/ReviewSlider";
import Footer from "../components/Common/Footer";

const Home = () => {
    return(
        <div>
            {/* Section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white
        justify-between">

                {/* Become a Instructor Button */}
                <Link to = {"/signup"}>

                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                    drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]
                    transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                        transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>

                </Link>

                {/* Heading */}
                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"} /> 
                </div>


                {/* Sub Heading */}
                <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
                    With our online coding courses, you can learn at your own pace, from
                    anywhere in the world, and get access to a wealth of resources,
                    including hands-on projects, quizzes, and personalized feedback from
                    instructors.
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-row gap-7">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                {/* Video */}
                <div className="mx-3 my-12 shadow-[5px_0px_45px_-5px] shadow-blue-200">
                    <video
                        className="shadow-[20px_20px_rgba(255,255,255)] h-[588px] w-full"
                        muted loop autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* Code Section 1  */}
                <div className="ml-12">
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading = {
                            <div className="text-4xl font-semibold">
                                Unlock your
                                <HighlightText text={"coding potential "} /> 
                                with our online courses.
                            </div>
                        }
                        subheading = {
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1 = {
                            {
                                btnText: "Try it Yourself",
                                link: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2 = {
                            {
                                btnText: "Learn More",
                                link: "/signup",
                                active: false,
                            }
                        }

                        codeColor={"text-yellow-25"}
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        backgroundGradient={
                            <div className="codeblock1 absolute"></div>
                        }
                    />
                </div>


                 {/* Code Section 2 */}
                <div className="ml-11">
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                        <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                            Start
                            <HighlightText text={"coding in seconds"} />
                        </div>
                        }
                        subheading = {
                            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        ctabtn1 = {
                            {
                            btnText: "Continue Lesson",
                            link: "/signup",
                            active: true,
                            }
                        }
                        ctabtn2 = {
                            {
                            btnText: "Learn More",
                            link: "/signup",
                            active: false,
                            }
                        }
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                        backgroundGradient={<div className="codeblock2 absolute"></div>}
                    />
                </div>

                {/* Explore Section */}
                <ExploreMore />

            </div>
            

            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[310px]">
                    <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 max-auto justify-center ml-[100px]">
                        <div className="h-[120px]"></div>
                        <div className="flex flex-row gap-7 text-white mt-12">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>

                            <CTAButton active={false} linkto={"/signup"}>
                                Learn More
                            </CTAButton>
                            </div>
                    </div>
                </div>

                <div className = "mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-7">
                    <div className="flex flex-row gap-5 mb-10 mt-[70px] ml-[80px]">
                        <div className="text-4xl font-semibold w-[45%]">
                            Get the Skills you need for a
                            <HighlightText text={"Job that is in demand."} />
                        </div>
                    

                        <div className="flex flex-col gap-10 w-[40%] items-start">
                            <div className="text-[16px]">
                                The modern StudyNotion is the dictates its own terms. Today, to
                                be a competitive specialist requires more than professional
                                skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>

                      {/* Timeline Section - Section 2 */}
                      <TimelineSection />

                      {/* Learning Language Section - Section 3 */}
                      <LearningLanguageSection />
                </div>

            </div>


            {/* Section 3 */}
            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center
            justify-between gap-8 text-white bg-richblack-900">

                {/* Become a instructor section */}
                <InstructorSection />

                {/* Reviews from Other Learner */}
                <h2 className="text-center text-4xl font-semibold mt-10">
                    Reviews from other learners
                </h2>
                <ReviewSlider />

            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
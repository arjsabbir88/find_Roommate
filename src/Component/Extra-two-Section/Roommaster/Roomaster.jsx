import React from 'react'
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { HiUserGroup } from "react-icons/hi";
import { FaGlobeAsia } from "react-icons/fa";
import { Fade, Slide } from 'react-awesome-reveal';

export const Roomaster = () => {
    return (
        <div className=" bg-gray-100 flex items-center justify-center shadow-xl">
            <div className=" mx-auto p-6 bg-white rounded-lg ">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Why use Room<span className='text-red-500'>Sync</span>?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Slide>
                            <div className="flex justify-center mb-4">
                                <HiUserGroup size={50} />
                            </div>
                        </Slide>

                        <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>

                            <p className="text-gray-600">We’re the busiest</p>
                            <p className="text-gray-600">Every 3 minutes someone finds a roommate on SpareRoom - as the #1 roommate finder you’ll be sure to find yours.</p>
                        </Fade>
                    </div>
                    <div className="text-center">
                        <Slide>

                            <div className="flex justify-center mb-4">
                                <AiFillSafetyCertificate size={50} />
                            </div>
                        </Slide>
                        <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>
                            <p className="text-gray-600">Safety</p>
                            <p className="text-gray-600">Your safety is our top priority. We have a team of moderators working 7 days a week to check ads and content.</p>
                        </Fade>
                    </div>
                    <div className="text-center">
                        <Slide>

                            <div className="flex justify-center mb-4">
                                <FaGlobeAsia size={50} />
                            </div>
                        </Slide>
                        <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>

                            <p className="text-gray-600">We’re all about people</p>
                            <p className="text-gray-600">Everyone’s idea of the perfect roommate is different, so search based on what’s important to you.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import './contact.css'

const ContactUs = () => {

    return (
        <section class="flex md:flex-row flex-col bg-white dark:bg-gray-900">
            <div className="md:w-1/2 w-full p-8">
            <p class="relative mt-8 text-sm font-medium text-[#ff6000] md:text-xl md:leading-[1]">GET IN TOUCH</p>
            <h2 class="relative pt-2 text-3xl font-bold text-white md:text-5xl md:leading-[1.2]">Transform your tech ecosystems with us</h2>
            <p className="relative my-12 text-white text-lg">Strengthen your operations, reinforce security, and increase your competitive Edge with FIT</p>
            <div className="w-full sm:w-1/4 mb-6 ">
                            <ul className="list-none">
                                <li className="flex">
                                    <a href="#" className="socialicon hover:bg-[#ff6200d4] text-white bg-[#ff6000] p-3 mr-3 rounded-full">
                                        <div className="w-6 h-6 text-2xl text-gray-800 font-bold dark:text-white" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <FaWhatsapp />
                                        </div>

                                    </a>
                                    <a href="#" className="socialicon hover:bg-[#ff6200d4] text-white bg-[#ff6000] p-3 mr-3 rounded-full">
                                        <div className="w-6 h-6 text-2xl text-gray-800 font-bold dark:text-white" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <FaFacebookF />
                                        </div>
                                    </a>
                                    <a href="#" className="socialicon hover:bg-[#ff6200d4] text-white bg-[#ff6000] p-3 mr-3 rounded-full">
                                        <div className="w-6 h-6 text-2xl text-gray-800 font-bold dark:text-white" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <FaInstagram />

                                            </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
            </div>
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md md:w-1/2 w-full">
             <form action="#" class="space-y-3">
                <div className="flex flex-row">
                <div className="w-1/2 pr-2">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name" required/>
                </div>
                <div className="w-1/2 pl-2">
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your company</label>
                    <input type="text" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="company" required/>
                </div>
                </div>
                <div className="flex flex-row">
                <div className="w-1/2 pr-2">
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your phone</label>
                    <input type="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+94" required/>
                </div>
                <div className="w-1/2 pl-2">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                </div>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div className="hidden md:flex flex-col items-start">
                              <Link
                                className="btn text-white bg-orange-500 px-6 py-2 text-center rounded-lg hover:bg-orange-600 transition duration-300"
                                to="/#"
                              >
                                CONTACT US
                              </Link>
                            </div>
            </form>
        </div>
      </section>

    );
};

export default ContactUs;
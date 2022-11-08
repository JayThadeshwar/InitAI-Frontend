import React from 'react'
import rect from "../Images/Rectangle_blogs_bigger.svg"
import Waves from './Waves'



const Blogs = () => {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-100 ">
            <span className='text-[#C71A03] text-[40px] font-[" Montserrat"] font-bold '><Waves position={"left-12"} title={"Blogs"} /></span>
            <div className='grid grid-cols-1 px-4 lg:grid-cols-1 xl:grid-cols-3 justify-items-center mt-10 ml-1 mr-1 '>
                <div className="py-10 w-88 ">
                    <div className="rounded-lg overflow-hidden shadow-lg  max-w-sm  ">
                        <img src={rect} alt="" className='w-full ' />
                        <div className="px-6 py-4">
                            <div className=''>
                                Article_Heading
                            </div>
                            <div className="font-bold">
                                MAIN TAGLINE OF THE ARTICLE
                            </div>
                            <div>
                                Author_name
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />

                            </p>
                        </div>
                    </div>
                    <div className="py-10 w-88 ">
                        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm  ">
                            <img src={rect} alt="" className='w-full ' />
                            <div className="px-6 py-4">
                                <div className=''>
                                    Article_Heading
                                </div>
                                <div className="font-bold">
                                    MAIN TAGLINE OF THE ARTICLE
                                </div>
                                <div>
                                    Author_name
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="py-10 w-auto flex items-center" >
                    <div className="rounded-lg overflow-hidden shadow-lg  max-w-xl  ">
                        <img src={rect} className='' />
                        <div className="px-6 py-4">
                            <div className=''>
                                Article_Heading
                            </div>
                            <div className="font-bold">
                                MAIN HEADLINE OF THE ARTICLE WILL GO HERE
                            </div>
                            <p>
                                SHORT SUMMARY OF THE ARTICLE Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-10 w-88 ">
                    <div className="rounded-lg overflow-hidden shadow-lg max-w-sm  ">
                        <img src={rect} alt="" className='w-full ' />
                        <div className="px-6 py-4">
                            <div className=''>
                                Article_Heading
                            </div>
                            <div className="font-bold">
                                MAIN TAGLINE OF THE ARTICLE
                            </div>
                            <div>
                                Author_name
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />

                            </p>
                        </div>
                    </div>
                    <div className="py-10 w-88 ">
                        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm  ">
                            <img src={rect} alt="" className='w-full' />
                            <div className="px-6 py-4">
                                <div className=''>
                                    Article_Heading
                                </div>
                                <div className="font-bold">
                                    MAIN TAGLINE OF THE ARTICLE
                                </div>
                                <div>
                                    Author_name
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs

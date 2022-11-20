import React from 'react'
import Profile from "../../assets/Author_img.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Round from "../../assets/Round.svg";
import More from "../../assets/More.svg";
import Content from "../../assets/Blogs_main.svg"
import Add from "../../assets/Plus.svg"
import Side_Arrow from "../../assets/Side_arrow.svg"

const Maincontent = () => {
    return (
        <div>
            <div className='flex text-center py-4'>
                <span className='px-5 pt-2 '><img src={Add} /></span>
                <span className='pr-5 pt-1'>Data Analytics</span>
                <span className='pr-5 pt-1'>Data Svience</span>
                <span className='pr-5 pt-1'>Computer Vision</span>
                <span className='pr-5 pt-1'>Machine Learning</span>
                <span className='pr-5 pt-1'>Natural Language P </span>
                <span className='px-2 pt-2 '><img src={Side_Arrow} /></span>
            </div>
            <hr />
            <h1 className='font-black text-2xl pt-2 px-2 py-7'>Latest Blogs</h1>
            <div className='grid'>

                <div className='grid grid-cols-3'>
                    <div className="col-span-2">
                        <div className='flex'>
                            <span className='pl-2'><img src={Profile} alt="" srcset="" /></span>
                            <div className='px-3 pb-2 text-lg'>Author_name</div>

                        </div>
                        <p className='font-black text-lg py-2 px-2'>MAIN TAGLINE OF THE ARTICLE</p>
                        <p className='px-2'>
                            THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                        <div className='flex py-5 px-2'>
                            <span className='pr-3'>Machine Learning</span>
                            <span className='pr-3'>14 min read</span>
                            <span className='pr-3'>Based on your reading history</span>
                            <span className='pr-3 mt-1'><img src={Bookmark} alt="" /></span>
                            <span className='pr-3 mt-1'><img src={Round} alt="" /></span>
                            <span className=' mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <img src={Content} alt="" width={"150px"} />
                    </div>

                </div>
                <hr className='border-black' />

                <div className='grid grid-cols-3'>
                    <div className="col-span-2">
                        <div className='flex'>
                            <span className='pl-2 py-2'><img src={Profile} alt="" srcset="" /></span>
                            <div className='px-3 py-2 text-lg'>Author_name</div>

                        </div>
                        <p className='font-black text-lg py-2 px-2'>MAIN TAGLINE OF THE ARTICLE</p>
                        <p className='px-2'>
                            THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                        <div className='flex py-5 px-2'>
                            <span className='pr-3'>Machine Learning</span>
                            <span className='pr-3'>14 min read</span>
                            <span className='pr-3'>Based on your reading history</span>
                            <span className='pr-3 mt-1'><img src={Bookmark} alt="" /></span>
                            <span className='pr-3 mt-1'><img src={Round} alt="" /></span>
                            <span className=' mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <img src={Content} alt="" width={"150px"} />
                    </div>

                </div>
                <hr className='border-black' />

                <div className='grid grid-cols-3'>
                    <div className="col-span-2">
                        <div className='flex'>
                            <span className='pl-2 py-2'><img src={Profile} alt="" srcset="" /></span>
                            <div className='px-3 pb-2 text-lg py-2'>Author_name</div>

                        </div>
                        <p className='font-black text-lg py-2 px-2'>MAIN TAGLINE OF THE ARTICLE</p>
                        <p className='px-2'>
                            THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                        <div className='flex py-5 px-2'>
                            <span className='pr-3'>Machine Learning</span>
                            <span className='pr-3'>14 min read</span>
                            <span className='pr-3'>Based on your reading history</span>
                            <span className='pr-3 mt-1'><img src={Bookmark} alt="" /></span>
                            <span className='pr-3 mt-1'><img src={Round} alt="" /></span>
                            <span className=' mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <img src={Content} alt="" width={"150px"} />
                    </div>

                </div>
                <hr className='border-black' />

                <div className='grid grid-cols-3'>
                    <div className="col-span-2">
                        <div className='flex'>
                            <span className='pl-2 py-2'><img src={Profile} alt="" srcset="" /></span>
                            <div className='px-3 pb-2 text-lg py-2'>Author_name</div>

                        </div>
                        <p className='font-black text-lg py-2 px-2'>MAIN TAGLINE OF THE ARTICLE</p>
                        <p className='px-2'>
                            THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                        <div className='flex py-5 px-2'>
                            <span className='pr-3'>Machine Learning</span>
                            <span className='pr-3'>14 min read</span>
                            <span className='pr-3'>Based on your reading history</span>
                            <span className='pr-3 mt-1'><img src={Bookmark} alt="" /></span>
                            <span className='pr-3 mt-1'><img src={Round} alt="" /></span>
                            <span className=' mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                            <span className='mt-3'><img src={More} alt="" /></span>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <img src={Content} alt="" width={"150px"} />
                    </div>

                </div>
                <hr className='border-black' />

            </div>

        </div>
    )
}

export default Maincontent
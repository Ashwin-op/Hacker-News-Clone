import React, {useEffect, useState} from "react";
import Link from "next/link";
import TimeAgo from "react-timeago";

import {getStory} from "../services/api";

const Story = ({storyId}) => {

    const [story, setStory] = useState({
        url: null,
        type: null,
        title: null,
        by: null,
        time: null,
        score: null,
        descendants: null
    });

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
        return () => setStory({
            by: null,
            descendants: null,
            score: null,
            time: null,
            title: null,
            type: null,
            url: null
        });
    }, []);

    return story && story.url ? (
        <div className="p-12 md:w-1/2 flex flex-col items-start hover:bg-gray-100 transition duration-500 ease-in-out">
            <span
                className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest uppercase">
                {story.type}
            </span>
            <Link href={story.url}>
                <a target="_blank">
                    <h2 className="pointer sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{story.title}</h2>
                </a>
            </Link>
            <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                <svg className="text-gray-400 w-4 h-4 mr-1" stroke="currentColor" fill="none" strokeLinecap="round"
                     strokeLinejoin="round" viewBox="0 0 20 20">
                    <path
                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"/>
                </svg>

                <span className="title-font text-gray-700 mr-2">{story.by}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm ml-2"><TimeAgo date={story.time * 1000}/></span>
                <span
                    className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" fill="none" strokeLinecap="round"
                         strokeLinejoin="round" viewBox="0 0 20 20">
                        <path
                            d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"/>
                    </svg>
                    {story.score}
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" fill="none" strokeLinecap="round"
                         strokeLinejoin="round" viewBox="0 0 20 20">
                        <path
                            d="M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z"/>
                    </svg>
                    {story.descendants}
                </span>
            </div>
        </div>
    ) : null;
};

export default Story;

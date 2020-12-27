import React, {useEffect, useState} from "react";

import Story from "./Story";
import {getStoryIds} from "../services/api";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";

const StoryList = ({storyType}) => {

    const {count} = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds(storyType).then(data => setStoryIds(data));
        return () => setStoryIds([]);
    }, []);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-44 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {storyIds.slice(0, count).map(storyId => (
                        <Story storyId={storyId} key={storyId}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryList;

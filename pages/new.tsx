import React from "react";

import Navbar from "../components/Navbar";
import StoryList from "../components/StoryList";

const New = () => {
    return (
        <>
            <Navbar active="new"/>
            <StoryList storyType="new"/>
        </>
    );
};

export default New;

import React from "react";

import Navbar from "../components/Navbar";
import StoryList from "../components/StoryList";

const Top = () => {
    return (
        <>
            <Navbar active="top"/>
            <StoryList storyType="top"/>
        </>
    );
};

export default Top;

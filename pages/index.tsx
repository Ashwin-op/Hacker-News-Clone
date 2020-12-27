import React from "react";

import Navbar from "../components/Navbar";
import StoryList from "../components/StoryList";

const Home = () => {
    return (
        <>
            <Navbar active="best"/>
            <StoryList storyType="best"/>
        </>
    );
};

export default Home;

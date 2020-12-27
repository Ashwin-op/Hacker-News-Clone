import {useEffect, useState} from "react";

const MAX_STORIES = 500;
const STORY_INCREMENT = 20;

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
            return false;
        }

        setLoading(true);
    }, 500, null, null);

    useEffect(() => {
        if (!loading) return;

        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES);
        } else {
            setCount(count + STORY_INCREMENT);
        }

        setLoading(false);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {count};
};

const debounce = (func, wait, immediate, args) => {
    let timeout;

    return () => {
        const context = this;
        const callNow = immediate && !timeout;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

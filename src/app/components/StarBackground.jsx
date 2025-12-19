"use client"
import { useEffect, useState } from "react"



export const Star = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [movingStars, setMovingStars] = useState([]);
    const [theme, setTheme] = useState("light");
    const [loaded, setLoaded] = useState(false);
    
    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });

        }
        setStars(newStars);
    }

    const generatMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 60,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            });

        }
        setMeteors(newMeteors);
    }

    const generatMovingStars = () => {
        const numberOfMovingStars = 4;
        const newMovingStars = [];
        for (let i = 0; i < numberOfMovingStars; i++) {
            newMovingStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 60,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            }); 

        }
        setMovingStars(newMovingStars);
    }
    
    useEffect(() => {
        generateStars();
        generatMeteors();
        generatMovingStars();
    }, []);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
        setLoaded(true);
    }, []);
    if (!loaded) {
        return null;
    }
    
    console.log("Current theme:", theme);
    return (
        <>
            {theme === "dark" && 
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }} />
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size*30    + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }} />
            ))}
            {movingStars.map((movingStars) => (
                <div key={movingStars.id} className="meteor animate-meteor" style={{
                    width: movingStars.size + "px",
                    height: movingStars.size + "px",
                    left: movingStars.x + "%",
                    top: movingStars.y + "%",
                    animationDelay: movingStars.delay,
                    animationDuration: movingStars.animationDuration + "s",
                }} />
            ))}
        </div>
            }
            
        {theme === "light" && 
            <div className="fixed inset-0 overflow-hidden backdrop-blur-3xl opacity-70 light-bg pointer-events-none z-[-1]"></div>}
        </>
    )
}
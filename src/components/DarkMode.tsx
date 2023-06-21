import React from "react";
import Sun from "../style/DarkMode/Sun";
import Moon from "../style/DarkMode/Moon";
import "../style/DarkMode/DarkMode.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { toggleTheme } from "../app/themeSlice";


const DarkMode = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const setDarkTheme = () => {
    //     document.querySelector("body").setAttribute("data-theme", "dark");
    //     setDarkMode(true);
    // };

    // const setLightTheme = () => {
    //     document.querySelector("body").setAttribute("data-theme", "light");
    //     setDarkMode(false);
    // };

    const changeTheme = () => {
        // if (e.target.checked) setDarkTheme();
        // else setLightTheme();
        dispatch(toggleTheme())
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={changeTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;

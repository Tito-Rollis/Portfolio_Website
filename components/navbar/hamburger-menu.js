import { useState, useEffect } from 'react';

export default function HamburgerMenu() {
    const [width, setWidth] = useState('w-1.5');

    useEffect(() => {
        document.onload = setWidth('w-6');
    });

    let hamburger = (
        <div
            className={`h-1 ${width} bg-gray-900 rounded transition-all duration-1000`}
        ></div>
    );

    return (
        <div className="box-border flex flex-col justify-between h-5 ">
            {hamburger}
            {hamburger}
            {hamburger}
        </div>
    );
}

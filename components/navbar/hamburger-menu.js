import { useState, useEffect } from 'react';

export default function HamburgerMenu() {
    const [width, setWidth] = useState('w-1.5');

    useEffect(() => {
        document.onload = setWidth('w-8');
    });

    let hamburger = (
        <div
            className={`h-1.5 ${width} bg-gray-900 rounded transition-all duration-1000`}
        ></div>
    );

    return (
        <div className="mt-7 box-border flex flex-col justify-between h-7 ">
            {hamburger}
            {hamburger}
            {hamburger}
        </div>
    );
}

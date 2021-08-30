import { useState, useEffect } from 'react';
import HamburgerStrip from './hamburgerStrip';
export default function Hamburger() {
    const [width, setWidth] = useState('w-1.5');
    const [hoverW, setHoverW] = useState('w-1.5');
    useEffect(() => {
        document.onload = setWidth('w-6');
    });
    return (
        <div className="box-border flex flex-col justify-between h-5 ">
            <HamburgerStrip animation={`${width}`} className="hidden" />
            <HamburgerStrip animation={`${width}`} />
            <HamburgerStrip animation={width} />
        </div>
    );
}

import { useState, useEffect } from 'react';

export default function HamburgerMenu() {
    const [clicked, setClicked] = useState(false);
    const [width, setWidth] = useState('w-1');
    const [hidden, setHidden] = useState('');
    const [topWidth, setTopWidth] = useState('w-2');
    const [topTransform, setTopTransform] = useState('');
    const [bottomWidth, setBottomWidth] = useState('w-2');
    const [bottomTransform, setBottomTransform] = useState('');

    let clickHandler = (e) => {
        e.preventDefault();
        setClicked(!clicked);
    };

    useEffect(() => {
        document.onload = setWidth('w-6');
        document.onload = setTopWidth('w-6');
        document.onload = setBottomWidth('w-6');
        if (clicked) {
            setHidden('hidden');
            setTopTransform('rotate-45');
            setBottomTransform('-rotate-45 -translate-y-4');
        }
    });

    // if (!clicked) {
    //     setHidden('');
    //     setJustify('justify-between');
    //     setTopTransform('');
    //     setBottomTransform('');
    // }

    return (
        <button
            onClick={clickHandler}
            className={`box-border flex flex-col justify-between h-5`}
        >
            <span
                className={`h-1 ${topWidth} ${topTransform} bg-gray-900 rounded transition-all duration-1000`}
            ></span>
            <span
                className={`h-1 ${width} ${hidden} bg-gray-900 rounded transition-all duration-1000`}
            ></span>
            <span
                className={`h-1 ${bottomWidth} ${bottomTransform}  bg-gray-900 rounded transition-all duration-1000`}
            ></span>
        </button>
    );
}

import { useEffect, useState } from 'react';

export default function HamburgerStrip({ animation }) {
    let [strips, setStrips] = useState([]);
    const element = (
        <div
            className={`h-1 ${animation} bg-gray-900 rounded transition-all duration-1000`}
        ></div>
    );

    setStrips([element, element, element]);

    console.log(strips);
    return strips;
}

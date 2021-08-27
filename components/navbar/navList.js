export default function NavList(props) {
    return (
        <div
            className={`bg-gray-900 bg-opacity-60  h-screen w-72 z-20 absolute right-0 ${props.layout}`}
        >
            <ul className=" h-56 mt-8  font-oswald text-white text-xl  tracking-wider flex flex-col justify-between content-start">
                <li className="pl-3 mr-32  bg-opacity-60 ">Home</li>
                <li className="pl-3 pr-3 bg-gray-900 ">Portfolio</li>
                <li className="pl-3 pr-3 ">Contact</li>
            </ul>
        </div>
    );
}

export default function NavList(props) {
    return (
        <div
            className={`bg-gray-900 bg-opacity-80  h-screen w-72 z-20 absolute right-0 ${props.layout}`}
        >
            <ul className=" h-40 mt-8  font-oswald text-white text-xl  tracking-wider flex flex-col justify-between content-start">
                <li className="hover:bg-gray-900 pl-3 flex items-center pr-3 h-full">
                    Home
                </li>
                <li className="hover:bg-gray-900 pl-3 flex items-center pr-3 h-full  ">
                    Portfolio
                </li>
                <li className="hover:bg-gray-900 pl-3 flex items-center pr-3 h-full ">
                    Contact
                </li>
            </ul>
        </div>
    );
}

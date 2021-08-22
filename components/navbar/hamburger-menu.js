export default function HamburgerMenu() {
    let rounded = <div className="h-1.5 w-8 bg-gray-900 rounded "></div>;
    return (
        <div className="mt-7 grid grid-cols-1 grid-rows-3 gap-y-1">
            {rounded}
            {rounded}
            {rounded}
        </div>
    );
}

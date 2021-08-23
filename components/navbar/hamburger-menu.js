export default function HamburgerMenu() {
    let rounded = (
        <div className="h-1.5 w-1.5 bg-gray-900 rounded group-hover:w-8 transition-all "></div>
    );
    return (
        <div className="mt-4 p-4 box-border grid grid-cols-1 grid-rows-3 gap-y-1 group">
            {rounded}
            {rounded}
            {rounded}
        </div>
    );
}

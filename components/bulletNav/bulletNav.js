export default function bulletNav(props) {
    let bulletInner = (
        <div className="rounded-full h-1 w-1 my-auto bg-majorColor"></div>
    );
    let bulletOuter = (
        <div className="rounded-full h-2 w-2 bg-gray-900 flex justify-center content-center transition-all">
            {/* {bulletInner} */}
        </div>
    );
    let bullet = (
        <div className="rounded-full h-3 w-3 bg-gray-900 flex justify-center content-center transition-all">
            {bulletInner}
        </div>
    );
    return (
        <div
            className={`${props.layout} h-16 flex flex-col items-center justify-between`}
        >
            {bullet}
            {bulletOuter}
            {bulletOuter}
            {bulletOuter}
        </div>
    );
}

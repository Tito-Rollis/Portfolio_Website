export default function bulletNav(props) {
    let bulletInner = (
        <div className="rounded-full h-2 w-2 my-auto bg-majorColor hidden"></div>
    );
    let bulletOuter = (
        <div className="rounded-full h-2 w-2 bg-gray-900 flex justify-center content-center transition-all">
            {bulletInner}
        </div>
    );
    return (
        <div className={`${props.layout} h-14 flex flex-col justify-between`}>
            {bulletOuter}
            {bulletOuter}
            {bulletOuter}
        </div>
    );
}

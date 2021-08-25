export default function Medsos(props) {
    return (
        <div
            className={`${props.layout} flex flex-row justify-between h-4 w-20 self-end`}
        >
            <img src="/github.png" alt="github" />
            <img src="/ig.png" alt="instagram" />
            <img src="/li.png" alt="linkedin" />
        </div>
    );
}

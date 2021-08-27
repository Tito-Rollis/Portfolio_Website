export default function Potrait(props) {
    return (
        <div className={`${props.layout}`}>
            <img
                className="rounded-full mx-auto"
                width="600px"
                src="/potrait.png"
            />
        </div>
    );
}

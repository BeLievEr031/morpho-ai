interface Iprop {
    title: string;
    desc: string;
}
function Card({ title, desc }: Iprop) {
    return (
        <div className="bg-white py-10 px-5">
            <h1> {title}</h1>
            <p>
                {desc}
            </p>
        </div>
    )
}

export default Card
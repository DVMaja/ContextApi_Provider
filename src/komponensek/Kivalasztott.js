export default function Kivalasztott(props) {


    return (
        <div className="border p-3 mb-5">
            {props.kivalasztottLista.map((elem, index) => {
                return <div key={index}>{elem}</div>
            })}

        </div>
    )
}
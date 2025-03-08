export default function Item({itemObj, onSelect}){

    let {id,name,quantity,category} = itemObj;

    const handleClick = () => {
        onSelect(itemObj);
    };

    return(
        <li className="flex-1 flex-col justify-center align-middle bg-yellow-700 p-10 rounded-lg shadow-inner shadow-yellow-900transition ease-in-out delay-150 hover:scale-110 duration-300 hover:bg-emerald-950" onClick={handleClick} key={id}>
            <div>
                <p className="font-extrabold uppercase text-center">{name}</p>
            </div>
            <div>                    
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </div>
        </li>
    );
}
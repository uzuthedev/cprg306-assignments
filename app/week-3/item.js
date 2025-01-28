export default function Item({itemObj}){

    let {name,quantity,category} = itemObj;

    return(
        <div class="flex-1 flex-col justify-center align-middle bg-slate-500 p-10">
            <div>
                <p className="font-extrabold uppercase text-center">{name}</p>
            </div>
            <div>                    
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
}
"use client";
import {useState} from "react";

export default function NewItem(){

    const[quantity, setQuantity]= useState(1);

    let currentQuantity = quantity;
    let buttonDisable = "bg-gray-500 rounded text-white text-lg text-center h-10 w-10 hover:cursor-not-allowed ";
    let buttonEnable = "transition-all bg-green-700 hover:bg-green-800 active:bg-green-950 rounded text-white h-10 w-10 text-lg text-center";

    const incQuantity = () => currentQuantity < 20  && setQuantity(quantity + 1);
    const decQuantity = () => currentQuantity > 1 && setQuantity(quantity - 1);


    return(
        <main className="flex bg-emerald-900 h-screen justify-center items-center">
            <div className="flex flex-col bg-green-800 p-5 items-center rounded-3xl border-double border-2 border-b-8 border-yellow-500 shadow-2xl shadow-emerald-950">
                <div className="pb-10">  
                    <h2 className="text-6xl text-yellow-300 font-mono underline underline-offset-8 decoration-4 decoration-yellow-500">Quantity Counter</h2>
                </div>
                <div className= "flex flex-col bg-yellow-400 p-5 text-center rounded-lg shadow-inner shadow-yellow-900">
                    <div className= "bg-slate-700 rounded-md p-2 mb-5">    
                        <p className="text-4xl">{quantity}</p>
                    </div>
                    <div className="flex gap-10 ">
                        <div>
                            <button onClick={decQuantity} className={currentQuantity > 1 ? buttonEnable: buttonDisable}> - </button>
                        </div>   
                        <div>
                            <button onClick={incQuantity} className={ currentQuantity < 20 ? buttonEnable: buttonDisable}> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}
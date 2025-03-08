"use client";
import ItemsList from "./item-list";
import NewItem from "./new-item";
import {useState, useEffect} from "react";
import Meal from "./meal";
import {getItems, addItems} from "./_services/shopping-list-service";

export default function Page(){
    const [items,setItems] = useState(
        itemsData.map((item) => ({...item}))
    );

    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [selectedMeal, setSelectedMeal] = useState('');

    const handleNewItem = (newItem) =>{
        setItems([newItem,...items]);
    };

    const handleItemSelect = (itemObj) => {
        let name = itemObj.name.split(",")[0];
        name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        name = name.toLowerCase()
        name = name.trim();
        name = name.replace(" ","_");
        setSelectedIngredient(name);
    };


    return(
        <main className=" bg-emerald-900 h-full justify-center items-center">
            <h1 className="text-6xl  text-center font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500 mb-10">Shopping List</h1>
            <div>
                <NewItem onAddItem={handleNewItem}/>
            </div>
            <div className="mt-5">
                <ItemsList itemsArray={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="mt-5">
                {selectedIngredient != '' && <Meal ingredient={selectedIngredient} meal={selectedMeal}/>}
            </div>
        </main>
    );

}
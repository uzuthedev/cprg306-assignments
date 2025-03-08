 "use client";

 import {useState, useEffect} from "react";

 const fetchMeals = async (ingredient) => {
    try {
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        if (!data.meals) {
            return null;
        }
        return data.meals;
    }
    catch (error) {
        console.error(error);
    };
 };

 const fetchIngredients = async (mealID) => {
    try {
        const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
        const data = await response.json();
        if (!data.meals) {
            return null;
        }
        return data.meals[0];
    }
    catch (error) {
        console.error(error);
    };
 };

export default function Meal({ingredient, meal, handleMealSelect}) {

    const [meals, setMeals] = useState([]);
    const [ingredients, setIngredients] = useState([]);


    const loadMeals = async (ingredient) => {
        const mealData = await fetchMeals(ingredient);
        setMeals(mealData);
    };

    const loadIngredients = async (mealID) => {
        const ingredientData = await fetchIngredients(mealID);
        setIngredients(ingredientData);
    };

    useEffect(() => {
        loadMeals(ingredient);
    }, [ingredient]);

    useEffect((meal) => {
        loadIngredients(meal);
    }, [meal]);



    return (
        <section className="flex-1 text-center mt-10 border-solid border-2 border-yellow-500 rounded-lg bg-green-700">
            <div className="flex flex-col m-auto w-1/2 bg-green-800 p-5 items-center rounded-3xl border-b-8 border-yellow-500 shadow-2xl shadow-emerald-950 my-5">
                {meals != null ? <h1 className="text-9xl font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500">Meals with {ingredient}</h1> : <h1 className="text-9xl font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500">No meals found with {ingredient}</h1>}
            </div>
            <div className="grid grid-cols-3 gap-5">
                {meals != null && meals.map((meal) => (
                    <div key={meal.idMeal} className="p-2" >
                        <img src={meal.strMealThumb} alt={meal.strMeal}  className="rounded-lg hover:cursor-pointer"/>
                        <h2 className=" text-lg font-semibold">{meal.strMeal}</h2>
                    </div>
                ))}
            </div>
            <div>
                {ingredients != null && <div className="flex flex-col m-auto w-1/2 bg-green-800 p-5 items-center rounded-3xl border-b-8 border-yellow-500 shadow-2xl shadow-emerald-950 my-5">
                    <h1 className="text-9xl font-semibold text-slate-300 font-mono underline underline-offset-8 decoration-4 decoration-slate-500">Ingredients</h1>
                    <ul className="grid grid-cols-3 gap-5">
                        {Object.keys(ingredients).map((key) => {
                            if (key.includes("strIngredient") && ingredients[key] !== "" && ingredients[key] !== null) {
                                return <li key={key} className="text-lg font-semibold">{ingredients[key]}</li>
                            }
                        })}
                    </ul>
                </div>}
            </div>
        </section>
    );
}




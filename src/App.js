import { Card, Row, Col, Divider, Input, Button } from "antd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import './App.css';

function App() {

  const [currentFoods,setFoods] = useState(foods);
  const [filtered, setFiltered] = useState(currentFoods);

  const addFood = (newMeal) => {
    let newArr = [...currentFoods]
    newArr.push(newMeal);

    setFoods(newArr);
    setFiltered(newArr);
  }

  const searchFood = (searchValue) => {
    let newArr = [...currentFoods]
    let filteredArray = newArr.filter((meal) => {
      return meal.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    console.log(filteredArray);

    setFiltered(filteredArray);
  }



  const deleteFood = (foodName) => {
    let newArr = [...currentFoods];
    let filteredArray = newArr.filter((meal) => {
      return meal.name.toLowerCase() !== foodName.toLowerCase();
    })
    console.log(filteredArray);

    setFoods(filteredArray);
    setFiltered(filteredArray);
  }


  return (
    <div className="App">
      <AddFoodForm addFood = {addFood}/>
      <Search searchFood = {searchFood}/>
      {filtered.map((meal) => {
        return (
          <FoodBox food = {meal} deleteFood = {deleteFood}/>
        );
      })}
    </div>
  );
}

export default App;

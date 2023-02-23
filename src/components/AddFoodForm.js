import { Input } from "antd";
import { useState } from "react";

function AddFoodForm({addFood}) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(1);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);


    const clearForm = () => {
        setName('');
        setImage('');
        setCalories(0);
        setServings(1);
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newMeal = {name, image, calories, servings}



        addFood(newMeal);
        clearForm();

    }

    return (
        <form onSubmit = {handleFormSubmit}>
            <label>Name:</label>
            <Input value={name} type="text" name='name' onChange={handleNameInput} />

            <label>Image:</label>
            <Input value={image} type="text" name ='image' onChange={handleImageInput} />

            <label>Calories:</label>
            <Input value={calories} type="text" name='calories' onChange={handleCaloriesInput} />

            <label>Servings</label>
            <Input value={servings} type="text" name='servings' onChange={handleServingsInput} />

            <button type="submit">Create</button>
        </form>
    );
  }
  
  export default AddFoodForm;
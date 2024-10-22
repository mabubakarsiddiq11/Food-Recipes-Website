import React, { useState } from "react";
import { recipeCollection, addDoc, getDocs } from "./Firebase";


// export const recipes = [
//   {
//     id: 1,
//     name: "Spaghetti Carbonara",
//     role: "Italian Dish",
//     description: "A classic Roman pasta dish made with eggs, cheese, pancetta, and pepper.",
//     image: "https://img.freepik.com/free-photo/top-close-up-view-cabbage-dish-cabbage-cutting-board-tree-branches_140725-72350.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 2,
//     name: "Chicken Tikka Masala",
//     role: "Indian Dish",
//     description: "Grilled chicken chunks in a spicy sauce made with tomatoes and cream.",
//     image: "https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 3,
//     name: "Beef Tacos",
//     role: "Mexican Dish",
//     description: "Soft or hard shell tacos filled with seasoned beef, lettuce, cheese, and salsa.",
//     image: "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14194.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 4,
//     name: "Vegetable Stir Fry",
//     role: "Asian Dish",
//     description: "A mix of fresh vegetables stir-fried with soy sauce and sesame oil.",
//     image: "https://img.freepik.com/premium-photo/pan-vegetables-with-word-vegetables-it_198067-755857.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 5,
//     name: "Pancakes",
//     role: "Breakfast Dish",
//     description: "Fluffy pancakes served with syrup and butter.",
//     image: "https://img.freepik.com/free-photo/pancakes-with-syrup_144627-1030.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 6,
//     name: "Caesar Salad",
//     role: "Salad",
//     description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
//     image: "https://img.freepik.com/free-photo/caesar-salad_144627-1031.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 7,
//     name: "Sushi",
//     role: "Japanese Dish",
//     description: "Vinegared rice accompanied by various ingredients, including seafood and vegetables.",
//     image: "https://img.freepik.com/free-photo/sushi-set-with-tuna-salmon-vegetables-ginger-wasabi-side-view_141793-15530.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 8,
//     name: "Chocolate Cake",
//     role: "Dessert",
//     description: "Rich and moist chocolate cake topped with chocolate frosting.",
//     image: "https://img.freepik.com/free-photo/chocolate-cake_144627-1033.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 9,
//     name: "Greek Yogurt Parfait",
//     role: "Snack",
//     description: "Layers of Greek yogurt, granola, and fresh fruits.",
//     image: "https://img.freepik.com/free-photo/yogurt-parfait_144627-1034.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 10,
//     name: "Lentil Soup",
//     role: "Soup",
//     description: "Hearty lentil soup made with vegetables and spices.",
//     image: "https://img.freepik.com/free-photo/lentil-soup_144627-1035.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 11,
//     name: "BBQ Ribs",
//     role: "Main Course",
//     description: "Tender ribs coated in a smoky BBQ sauce.",
//     image: "https://img.freepik.com/free-photo/bbq-ribs_144627-1036.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
//   {
//     id: 12,
//     name: "Fruit Smoothie",
//     role: "Beverage",
//     description: "A refreshing smoothie made with mixed fruits and yogurt.",
//     image: "https://img.freepik.com/free-photo/fruit-smoothie_144627-1037.jpg?ga=GA1.1.1937194280.1724435367&semt=ais_hybrid"
//   },
// ];
function AddRecipe() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(recipeCollection, {
        // recipes: recipes,
        name: name,
        role: role,
        description: description,
        image: image,
      });
      setName('')
      setRole('')
      setDescription('')
      setImage('')
      console.log("Document written with ID: ", docRef);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;

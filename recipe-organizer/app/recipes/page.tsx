import { promises as fs } from 'fs';
import Link from 'next/link';

type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    categroy: string[];
}

export default async function RecipePage() {
    const file = await fs.readFile(process.cwd() + '/public/data/recipes.json', 'utf8');
    const data = JSON.parse(file);
    const recipes = data.recipes;

    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Recipes</h2>
                <Link href="/" className="text-blue-500 hover:underline">Back</Link>
            </div>
            <div className="mb-6">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Instructions"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        name="category"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Breakfast">Ontbijt</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Diner">Diner</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </form>
                <button>Add</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{recipe.name}</h3>
                        <p className="text-gray-600 mb-4">{recipe.instructions}</p>
                        <h4 className="text-lg font-medium text-gray-700 mb-2">Ingredients</h4>
                        <ul className="list-disc list-inside text-gray-600 mb-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4 className="text-lg font-medium text-gray-700 mb-2">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                            {recipe.category.map((category, index) => (
                                <p key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                                    {category}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

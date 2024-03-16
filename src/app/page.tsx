import Image from "next/image";
import { UserForm } from "../components/form";
import { Input } from "@/components/ui/input";

const meal_plan = {
  options: 1,
  meals: [
    {
      day: 0,
      breakfast: {
        description: "Oatmeal with fruits",
        ingredients: [
          {
            name: "Oatmeal",
            items: [
              {
                s_name: "dia", // Super
                price: 2,
                url: "https://example.com/oats", // Url producto
              },
              {
                s_name: "carrefour",
                price: 0.5,
                url: "https://example.com/banana",
              },
              {
                s_name: "mercadona",
                price: 0.75,
                url: "https://example.com/apple",
              },
            ],
          },
        ],
      },
      lunch: {
        description: "Chicken Salad",
        ingredients: [
          {
            name: "Salad",
            items: [
              {
                s_name: "Chicken Breast",
                price: 5,
                url: "https://example.com/chicken-breast",
              },
              {
                s_name: "Lettuce",
                price: 1,
                url: "https://example.com/lettuce",
              },
              {
                s_name: "Tomato",
                price: 0.5,
                url: "https://example.com/tomato",
              },
            ],
          },
        ],
      },
      dinner: {
        description: "Pasta with Tomato Sauce",
        ingredients: [
          {
            name: "Pasta Dish",
            items: [
              {
                s_name: "Pasta",
                price: 1.5,
                url: "https://example.com/pasta",
              },
              {
                s_name: "Tomato Sauce",
                price: 2,
                url: "https://example.com/tomato-sauce",
              },
              {
                s_name: "Parmesan",
                price: 3,
                url: "https://example.com/parmesan",
              },
            ],
          },
        ],
      },
    },
    {
      day: 1,
      breakfast: {
        description: "Pancakes with syrup",
        ingredients: [
          {
            name: "Pancakes",
            items: [
              {
                s_name: "Flour",
                price: 0.5,
                url: "https://example.com/flour",
              },
              {
                s_name: "Eggs",
                price: 0.3,
                url: "https://example.com/eggs",
              },
              {
                s_name: "Maple Syrup",
                price: 3,
                url: "https://example.com/maple-syrup",
              },
            ],
          },
        ],
      },
      lunch: {
        description: "Vegetable Stir Fry",
        ingredients: [
          {
            name: "Stir Fry",
            items: [
              {
                s_name: "Bell Peppers",
                price: 1,
                url: "https://example.com/bell-peppers",
              },
              {
                s_name: "Broccoli",
                price: 1.2,
                url: "https://example.com/broccoli",
              },
              {
                s_name: "Chicken",
                price: 4,
                url: "https://example.com/chicken",
              },
            ],
          },
        ],
      },
      dinner: {
        description: "Fish Tacos",
        ingredients: [
          {
            name: "Tacos",
            items: [
              {
                s_name: "Tilapia",
                price: 6,
                url: "https://example.com/tilapia",
              },
              {
                s_name: "Corn Tortillas",
                price: 2,
                url: "https://example.com/corn-tortillas",
              },
              {
                s_name: "Avocado",
                price: 1.5,
                url: "https://example.com/avocado",
              },
            ],
          },
        ],
      },
    },
    {
      day: 2,
      breakfast: {
        description: "Greek Yogurt with Honey and Nuts",
        ingredients: [
          {
            name: "Yogurt Breakfast",
            items: [
              {
                s_name: "Greek Yogurt",
                price: 2,
                url: "https://example.com/greek-yogurt",
              },
              {
                s_name: "Honey",
                price: 1.5,
                url: "https://example.com/honey",
              },
              {
                s_name: "Mixed Nuts",
                price: 2.5,
                url: "https://example.com/mixed-nuts",
              },
            ],
          },
        ],
      },
      lunch: {
        description: "Quinoa Salad",
        ingredients: [
          {
            name: "Salad",
            items: [
              {
                s_name: "Quinoa",
                price: 2,
                url: "https://example.com/quinoa",
              },
              {
                s_name: "Cucumber",
                price: 0.7,
                url: "https://example.com/cucumber",
              },
              {
                s_name: "Feta Cheese",
                price: 2,
                url: "https://example.com/feta-cheese",
              },
            ],
          },
        ],
      },
      dinner: {
        description: "BBQ Chicken Pizza",
        ingredients: [
          {
            name: "Pizza",
            items: [
              {
                s_name: "Pizza Dough",
                price: 1,
                url: "https://example.com/pizza-dough",
              },
              {
                s_name: "BBQ Sauce",
                price: 1.5,
                url: "https://example.com/bbq-sauce",
              },
              {
                s_name: "Chicken",
                price: 4,
                url: "https://example.com/chicken-bbq",
              },
            ],
          },
        ],
      },
    },
  ],
};

interface IngredientItem {
  s_name: string;
  price: number;
  url: string;
}

interface Ingredient {
  name: string;
  items: IngredientItem[];
}

interface Meal {
  description: string;
  ingredients: Ingredient[];
}

interface DayMealPlan {
  day: number;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

interface MealPlan {
  options: number;
  meals: DayMealPlan[];
}

const MealType = ({ ing }: { ing: Ingredient }) => {
  return (
    <>
      <h4
        key={ing.name}
        className="scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {ing.name || ""}
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {ing.items.map((item: IngredientItem) => (
          <li key={item.s_name || ""}>
            <a href={item.url || ""} target="_blank" rel="noopener noreferrer">
              {item.s_name}:  €{item.price}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

// Para iconos
export default async function Home() {
  // let data;
  // try {
  //   const req = await fetch("http://10.19.200.106:8080/api/search", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "Make me a vegetarian meal with products of somewere ",
  //     }),
  //   });
  //   data = await req.json();
  //   console.log(data);
  // } catch (err) {
  //   console.error(err);
  // }

  return (
    <div className="mx-20 my-10 h-full max-w-full">
      {/* <UserForm /> */}
      <div className="w-full flex flex-row justify-end">
        <div className="w-2/5 rounded-xl flex flex-row justify-start bg-slate-100 p-3 text-gray-500">
          Make me a vegetarian meal with products of carrefour.
        </div>
      </div>
      <div className="flex flex-col justify-start mt-10">
        {meal_plan.meals.map((mealDay, index) => (
          <div className=" w-full" key={index}>
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0 text-[#253D4E]">
              Day {mealDay.day}
            </h2>
              <>
                <div>
                {mealDay.breakfast.ingredients.map((ing: Ingredient) => (
                  <>
                    <div className="flex flex-row items-center justify-start gap-3">
                      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[#253D4E]">
                        Breakfast:
                      </h3>
                      <span className=" text-sm px-2 py-1 rounded-md text-[#62E4A3] bg-[#253D4E]">
                        {mealDay.breakfast.description}
                      </span>
                    </div>
                    <MealType ing={ing} key={ing.name} />
                  </>
                ))}
                </div>
                {mealDay.lunch.ingredients.map((ing: Ingredient) => (
                  <MealType ing={ing} key={ing.name} />
                ))}
                {mealDay.dinner.ingredients.map((ing: Ingredient) => (
                  <MealType ing={ing} key={ing.name} />
                ))}
              </>
          </div>
        ))}
      </div>
      <div className="fixed botton-4 w-full">
        <h4 className="bg-transparent">Do you want to ask something else?</h4>
        <Input placeholder="Ask me something..." type="text" />
      </div>
    </div>
  );
}

import { RecipeCardSlideshow } from './recipe-card';

const recipeItems = [
  {
    steps: [
      {
        text: 'Vegetarian Quesadillas',
        image: '/images/receta-01.jpg'
      },
      {
        text: 'Heat a skillet over medium heat and place a tortilla on it. Add grated cheese on one half of the tortilla, then add the chopped vegetables on top of the cheese.',
        image: '/images/receta-02.jpg'
      },
      {
        text: 'Fold the tortilla in half over the filling. Cook until the bottom is golden brown and crispy, then flip and cook the other side. Serve hot with salsa and sour cream.',
        image: '/images/receta-03.jpg'
      }
    ]
  },
  {
    steps: [
      {
        text: 'Chicken Fajitas',
        image: '/images/receta-02.jpg'
      },
      {
        text: 'Heat oil in a skillet over medium-high heat. Add the marinated chicken strips and sliced bell peppers and onions. Cook until the chicken is fully cooked and the vegetables are tender.',
        image: '/images/receta-03.jpg'
      },
      {
        text: 'Warm tortillas in a separate skillet or microwave. Fill each tortilla with the cooked chicken and vegetable mixture. Serve hot with guacamole and salsa.',
        image: '/images/receta-01.jpg'
      }
    ]
  },
  {
    steps: [
      {
        text: 'Breakfast Burritos',
        image: '/images/receta-03.jpg'
      },
      {
        text: 'Warm tortillas on a separate skillet or in the microwave. Place a scoop of cooked sausage and scrambled eggs in the center of each tortilla.',
        image: '/images/receta-01.jpg'
      },
      {
        text: 'Sprinkle shredded cheese on top of the filling, then fold the sides of the tortilla inward and roll it up tightly to form a burrito.',
        image: '/images/receta-02.jpg'
      }
    ]
  }
];

export function StraighFromOurKitchen() {
  return (
    <section className="bg-[#532826] py-24">
      <h1 className="text-center font-portland text-4xl font-black uppercase text-[#F6E7E0]">
        Straight from our kitchen
      </h1>
      <div className="relative mx-auto w-10/12 py-10 lg:max-w-[1120px]">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          {recipeItems &&
            recipeItems.map((recipe, index) => <RecipeCardSlideshow recipe={recipe} />)}
        </div>
      </div>
    </section>
  );
}

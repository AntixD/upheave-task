"use client";

import { MealDrinkLabel, MealWithDrinks } from "@/types";
import MealCard from "./MealCard";
import { selectedLabelsAtom } from "@/lib/state";
import { useAtom } from "jotai";
import { LABEL_ALL_ID } from "@/lib/constants";

function MealList({ meals }: { meals: MealDrinkLabel[] }) {
  const [selectedLabels] = useAtom(selectedLabelsAtom);

  function filterMeals() {
    if (selectedLabels.includes(LABEL_ALL_ID)) return meals;
    return meals.filter((meal) =>
      selectedLabels.some((label) =>
        meal.labels.map((mealLabel) => mealLabel.id).includes(label)
      )
    );
  }

  return (
    <>
      {filterMeals().map((meal) => {
        return <MealCard key={meal.id} meal={meal} />;
      })}
    </>
  );
}

export default MealList;
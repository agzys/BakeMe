import { useEffect, useState } from "react";
export const useFetch = (categoryName, categoryUrl, isCake = false) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const check = localStorage.getItem(categoryName);

    if (check) {
      setCategory(JSON.parse(check));
    } else {
      const api = await fetch(categoryUrl);
      const data = await api.json();
      localStorage.setItem(
        categoryName,
        JSON.stringify(data[isCake ? "recipes" : "results"])
      );
      setCategory(data[isCake ? "recipes" : "results"]);
    }
  };

  return {
    category,
    setCategory,
  };
};

// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&type=dessert&diet=ovo-vegetarian`

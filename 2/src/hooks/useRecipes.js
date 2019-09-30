import { useState, useEffect } from "react";

function useRecipes(id) {
  const [recipes, setRecipes] = useState(undefined);
  const fetchData = async () => await (await fetch("http://localhost:9000/getRecipes")).json();

  // const refreshAccountInfo = async () => {
  //     await fetchData( true );
  // };

  useEffect(() => {
    fetchData().then(data => {
      setRecipes(data.records);
    });
  }, []);
  return recipes;
}

export default useRecipes;

import React from "react";
// import { allRecipes } from "../../service/recipe.service";
import { getRandomRecipeByCat, recipe } from "../../service/recipe.service";
import "./WeekGenerator.css";
// import { Link } from "react-router-dom";

export function WeekGenerator() {

  const weekRecipe = [];

  const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  const [week, setWeek] = React.useState([weekRecipe]);

  const generatorRecipe = async (i) => {
    
    var arrayWeek = [];

    for (let index = 0; index < 5; index++) {
      var array = [];
      const { data: first } = await getRandomRecipeByCat("first");
      const { data: second } = await getRandomRecipeByCat("second");
      const { data: desert } = await getRandomRecipeByCat("desert");
      array.push(first, second, desert);
      arrayWeek.push(array);
    }
    setWeek(arrayWeek);
  };

  React.useEffect(() => {
    // generatorRecipe();
  }, []);

  return (
    <div className="container week-table">
      <div className="row">
        <div className="col-12 main">
            {week.map((dayRecipe,i) => {
              return (
                <div className="card"><ul>

                <li>
                   <b>{weekDays[i]}</b>
                  <ul>
                    {dayRecipe.map((recipeOne) => {
                      return (
                        <li>
                          <h5 key={recipeOne._id} className="card-title">{recipeOne.name}</h5>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                </ul>
                </div>

              );
              
            })}

        </div>
        <button onClick={generatorRecipe}>Create</button>

      </div>
    </div>
  );
}

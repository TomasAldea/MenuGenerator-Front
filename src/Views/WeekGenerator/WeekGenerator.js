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
          { week.length > 1 ? (
            week.map((dayRecipe,i) => {
              return (
                <div className="card col"><ul>

                <li>
                   <b>{weekDays[i]}</b>
                    {dayRecipe.map((recipeOne) => {
                      return (
                        <div>
                          <b>{recipeOne.category}</b>
                          <br></br>
                          <span>{recipeOne.name}</span>
                        </div>
                        );
                    })}
                </li>
                </ul>
                </div>

              );
              
            })
          ) : (
            console.log("false")
          )

          }
                </div>
                <div className="row">

        <div className="col-12">

        <button onClick={generatorRecipe}>Create</button>
        </div>

      </div>
    </div>
  );
}

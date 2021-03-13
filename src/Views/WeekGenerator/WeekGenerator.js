import React from "react";
import { allRecipes } from "../../service/recipe.service";
import { getRandomRecipeByCat } from "../../service/recipe.service";
import "./WeekGenerator.css";
import { Link } from "react-router-dom";

export function WeekGenerator() {
  const [recipes, setRecipes] = React.useState([]);

  const weekRecipe = [];

  const diasSemana = ["Lunes","martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

  const [week, setWeek] = React.useState([weekRecipe]);

  const generatorRecipe = async (i) => {


   // console.log(    localStorage.getItem('weekData')   )
    
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
    <div className="container">
      <div className="row">
        <div className="col-12 main">
            {week.map((dayRecipe,i) => {
              return (
                <div className="card"><ul>

                <li>
                   <b>{diasSemana[i]}</b>
                  <ul>
                    {dayRecipe.map((recipeOne) => {
                      return (
                        <li>
                          <h5 className="card-title">{recipeOne.name}</h5>
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

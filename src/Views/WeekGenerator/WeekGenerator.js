import React from "react";
// import { allRecipes } from "../../service/recipe.service";
import { getRandomRecipeByCat } from "../../service/week.service";
import "./WeekGenerator.css";
// import { Link } from "react-router-dom";

export function WeekGenerator() {
  const weekRecipe = [];

  const weekDays = [
    " ",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const types = ["first", "second", "desert"];

  const [week, setWeek] = React.useState([weekRecipe]);

  const generatorRecipe = async (i) => {
    var arrayWeek = [];
    var arrayFirst = [];
    var arraySecond = [];
    var arrayDesert = [];
    for (let index = 0; index < 7; index++) {
      const { data: first } = await getRandomRecipeByCat("first");
      const { data: second } = await getRandomRecipeByCat("second");
      const { data: desert } = await getRandomRecipeByCat("desert");
      arrayFirst.push(first);
      arraySecond.push(second);
      arrayDesert.push(desert);
    }
    arrayWeek.push(arrayFirst);
    arrayWeek.push(arraySecond);
    arrayWeek.push(arrayDesert);

    setWeek(arrayWeek);
  };

  console.log(week);

  console.log("week", week);
  return (
    <div className="container week-table">
      <div className="table-responsive">
        {week.length > 1 ? (
          <table className="table align-middle">
            <tbody >
            <tr>
              {weekDays.map((day) => {
                return <th scope="col">{day}</th>;
              })}
            </tr>
            {week.map((dayRecipe, i) => {
              return (
                <tr>
                  <td>{types[i]}</td>
                  {dayRecipe.map((recipeOne) => {
                    return <td>{recipeOne.name}</td>;
                  })}
                </tr>
              );
            })}
            </tbody>
          </table>
        ) : (
          console.log("false")
        )}
      </div>
      <div className="row">
        <div className="col-12">

        </div>
        <button className="btn btn-success" onClick={generatorRecipe}>
            Create week
          </button>
      </div>
      
    </div>
  );
}

import React from "react";
// import { allRecipes } from "../../service/recipe.service";
import { getRandomRecipeByCat } from "../../service/week.service";
import { recipe as getRecipeToModal } from "../../service/recipe.service";
import "./WeekGenerator.css";
import { Button, Modal } from "react-bootstrap";
// import { useParams } from "react-router-dom";

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

  const types = ["First", "Second", "Desert"];
  const [show, setShow] = React.useState(false);
  const [buttonWeek, setButtonWeek] = React.useState(true);

  const [week, setWeek] = React.useState([weekRecipe]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [recipe, setRecipe] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  // const { recipeId } = useParams();

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
    setButtonWeek(false);
  };

  const getRecipe = async (id) => {
    const { data } = await getRecipeToModal(id);
    setRecipe(data);
    handleShow();
    var ing = data.ingredients[0].split(",");

    setIngredients(ing);
  };

  return (
    <div className="container week-table">
      <div className="table-responsive">
        {week.length > 1 ? (
          <table className="table align-middle">
            <tbody>
              <tr className="week-days">
                {weekDays.map((day) => {
                  return <th scope="col">{day}</th>;
                })}
              </tr>
              {week.map((dayRecipe, i) => {
                return (
                  <tr>
                    <td>{types[i]}</td>
                    {dayRecipe.map((recipeOne) => {
                      return (
                        <td
                          className="openModal"
                          onClick={() => getRecipe(recipeOne.id)}
                        >
                          {recipeOne.name}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>

      <div className="row">
        <div className="col-12"></div>
        {buttonWeek ? (
          <button className="btn btn-success" onClick={generatorRecipe}>
            Click Me To Create Week!
          </button>
        ) : (
          <button className="btn btn-success" onClick={generatorRecipe}>
            Click Me To New Week!
          </button>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recipe.description}
          <div className="row">
            <div className="col-12">
              <b>Ingredients:</b>
            </div>
            {ingredients.map(function (i) {
              return <li className="col-6">{i}</li>;
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import React from "react";
import { getUser } from "../../service/auth.service";
import { Link } from "react-router-dom";
import { DeleteRecipe } from "../../components/DeleteRecipe/DeleteRecipe";

export function UserProfile() {
  const [recipesCreated, setRecipesCreated] = React.useState([]);

  React.useEffect(() => {
    getUser()
      .then((result) => {
        setRecipesCreated(result.data.createsRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderView = () => {
    getUser().then((result) => {
      setRecipesCreated(result.data.createsRecipes);
    });
  };

  return (
    <div className="row">
      <h1></h1>
      {recipesCreated.map(function (i) {
        return (
          <div key={i._id} className="col-sm-6">
            <div className="card">
              <div className="all-cards card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text card-title">Category: {i.category}</p>
                <div className="btn-align">
                <button className=" my-button">
                  <Link className="prevent-week" to={`/recipe/${i._id}`}>
                    <img src="/img/details.png"></img>
                  </Link>
                </button>
                <button className=" btn my-button">
                  <Link to={`/edit/${i._id}`}>
                    <img src="/img/edit.png"></img>
                  </Link>
                </button>
                <DeleteRecipe recipeId={i._id} forceRender={renderView} />
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

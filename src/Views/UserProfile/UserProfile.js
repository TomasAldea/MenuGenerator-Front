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
    getUser()
    .then((result) => {
      setRecipesCreated(result.data.createsRecipes);
    })
  }

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
                <button className="btn btn-light">
                  <Link className="prevent-week" to={`/recipe/${i._id}`}>
                    Press to Details
                  </Link>
                </button>
                <DeleteRecipe recipeId={i._id} forceRender={renderView}/>
                <button className="btn btn-info">
                  <Link to={`/edit/${i._id}`}>Edit</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

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
    <div className="padding-container row">
      <h3 className="welcome-message">My Recipes</h3>
      {recipesCreated ? ( recipesCreated.map(function (i) { 
        return (
          <div key={i._id} className="col-sm-6">
            <div className="card">
              <div className="all-cards card-body">
              <div className="text-card-icon">
                <h5 >{i.name}</h5>
                <p >Category: {i.category}</p>
                </div>
                <div className="btn-align">
                <button className=" my-button">
                  <Link className="prevent-week" to={`/recipe/${i._id}`}>
                    <img src="/img/details.png"  alt="detailIcon"></img>
                  </Link>
                </button>
                <button className=" btn my-button">
                  <Link to={`/edit/${i._id}`}>
                    <img src="/img/edit.png"  alt="editIcon"></img>
                  </Link>
                </button>
                <DeleteRecipe recipeId={i._id} forceRender={renderView} />
              </div>
              </div>
            </div>
          </div>
        );
      })
      ) : (
       <></>
      )}
    </div>
  );
}


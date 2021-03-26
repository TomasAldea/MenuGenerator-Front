import React from "react";
import { allRecipes } from "../../service/recipe.service";
import "./Recipes.css";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/Searchbar/Searchbar";

export function Recipes() {
  const [recipes, setRecipes] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const handleQuery = ({ target }) => setQuery(target.value);

  const getRecipes = async () => {
    const { data } = await allRecipes();
    setRecipes(data);
  };

  React.useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <SearchBar query={query} onChange={handleQuery} />
      <div className="row">
        {recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
          )
          .map(function (i) {
            return (
              <div key={i._id} className="col-sm-6">
                <div className="card">
                  <Link className="prevent-week" to={`/recipe/${i._id}`}>
                    <div className="all-cards card-body">
                      <h5 className="card-title">{i.name}</h5>
                      <p className="card-text card-title">
                        Category: {i.category}
                      </p>
                      <div className="btn-details">
                        <button className="text btn my-button">Details</button>
                        <img src="/img/details.png" alt="detailIcon"></img>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

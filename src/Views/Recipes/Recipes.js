import React from "react";
import { allRecipes } from "../../service/recipe.service";
import "./Recipes.css";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/Searchbar/Searchbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

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
    <div className="padding-container">
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
                  <Link className="prevent-card" to={`/recipe/${i._id}`}>
                    <div className="all-cards card-body">
                      {i.image ? (
                        <img
                          className="image-card"
                          alt="foodImage"
                          src={i.image}
                        ></img>
                      ) : (
                        <img
                          className="image-card"
                          alt="foodImage"
                          src="/img/no-image.png"
                        ></img>
                      )}
                      <div className="text-card-icon">
                        <h5>{i.name}</h5>
                        <p>Category: {i.category}</p>
                      </div>
                      <div className="more-info-cards">
                        <img src="/img/menu.png" alt="detailIcon"></img>
                      </div>
                    </div>
                  </Link>
                 
                </div>
                
              </div>
            );
          })}
          <ScrollToTop/>
      </div>
    </div>
  );
}

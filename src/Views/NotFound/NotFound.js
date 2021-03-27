import React from "react";
import { useHistory } from "react-router-dom";
//import { Link } from "react-router-dom";

export function NotFound() {

    const history = useHistory();


    React.useEffect(() => {
        setTimeout(() => {
          history.push("/");
        }, 2000);
      }, [history]);
    
    return (
        <div className="my-cont container">
        <h2 className="welcome-message">lost...?</h2>
        </div>
    )
}
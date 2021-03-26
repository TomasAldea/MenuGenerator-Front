import React from "react";
import { deleteRecipe } from "../../service/recipe.service";
import { Button,Modal } from 'react-bootstrap';

export function DeleteRecipe({ recipeId, forceRender}) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const recipeDelete = async () => {
     await deleteRecipe(recipeId) // recibe el id por props, desde el componente UserProfile
     handleClose()
     forceRender() // actualizo el estado de userProfile para ver los cambios
  };



  return (
    <React.Fragment>
      <button className="my-button" onClick={handleShow}>
      <img src="/img/delete.png" alt="deleteIcon"></img>
          </button>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header >
       <Modal.Title>Delete</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h2>Are you sure?</h2>
     <button className="btn btn-danger" onClick={recipeDelete}>
       Yes
    </button>
     </Modal.Body>
     <Modal.Footer>

       <Button variant="primary" onClick={handleClose}>
       <img src="/img/previous.png"  alt="previousIcon" width="30" height="30"></img>
       </Button>
     </Modal.Footer>
   </Modal>
   </React.Fragment>
  );
}
import React from 'react';

const NewItem = () => {


  //==============
  // POST REQUEST

  let postReq = () => {
    console.log("Tarea Creada :D");
  }

  //==============


  return (
    <div className="text-center">
      <div className="item-elements">
        <form type="submit" className="m-4">
          <input type="text" placeholder="Item Name" className="form" style={{width:"378", height:"38"}}>
          </input>
          <button onClick={postReq} type="button" className="btn btn-success m-2">
            Add
            </button>
        </form>

      </div>

    </div>
  );
}

export default NewItem;
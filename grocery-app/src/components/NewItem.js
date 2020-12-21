import React from 'react';

const NewItem = () =>{
    return(
        <div className="list-item"> 
        <div className="item-elements">
          <form type="submit">
            <input type="text" placeholder="Item Name"></input>
            
            <button>
              Add 
            </button>
            
          </form>
        </div>
        
        </div>
      );
}

export default NewItem;
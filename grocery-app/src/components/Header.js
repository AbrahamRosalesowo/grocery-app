import React from 'react';

class Header extends React.Component{
render(){
    return(
        <header className="header">
            <h1>ToDo App</h1>
            <h2 className="tab">List of Tasks</h2>
        </header>
    );
}
}

export default Header;
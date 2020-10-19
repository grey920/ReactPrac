import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages'; // pages 안에 만든 라우트들을 불러온다
import HeaderContainer from 'containers/Base/HeaderContainer';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <Route exact path="/" component={Home}/> 
                <Route path="/auth" component={Auth}/>
            </div>
        );
    }
}

export default App;
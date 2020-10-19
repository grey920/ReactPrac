import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
// index.js에서 리덕스 스토어를 생성 -> Root 컴포넌트에 전달 -> Root.js에서 Provider 컴포넌트를 설정

// props로 리덕스 스토어를 받는다. 
const Root = ({store}) => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
        </Provider>
    );
};

export default Root;
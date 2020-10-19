import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import './index.css';
import configureStore from './redux/configureStore';
/* 프로젝트 엔트리 파일 (src/index.js)*/

const store = configureStore();
// 리덕스 스토어를 생성 -> Root 컴포넌트에 전달 -> Root.js에서 Provider 컴포넌트를 설정
ReactDOM.render(<Root store={store} />, document.getElementById('root')); //App대신 Root를 정의한다
serviceWorker.unregister();


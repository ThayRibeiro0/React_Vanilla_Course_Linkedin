PREPARE THE PROJECT TO RUN
npm init -y
git init
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
npx webpack-dev-server --mode development 

LOADER
npm install --save-dev react-hot-loader


npm run dev
http://localhost:3000/

REDUX
npm install redux-persist
npm install @reduxjs/toolkit
To delete todo create here to persist: Inspecionar / Application / Local storage / http://localhost:3100 / select persist: root / delete at the circle with a cut

REDUX-THUNK
npm install redux-thunk redux-devtools-extension @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime

SELECTORS
npm install reselect

STYLED-COMPONENTS
npm install styled-components

TESTS
npm install --save-dev mocha chai
npm install --save-dev @babel/register
npm install --save-dev sinon node-fetch fetch-mock

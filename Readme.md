npm init -y
git init
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
npx webpack-dev-server --mode development 
npm install --save-dev react-hot-loader

npm run dev
http://localhost:3000/

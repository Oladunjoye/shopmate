# SHOPMATE

# Overview
 
 Shopmate is a complete react redux application which follows the JAMSTACK protocol and interacts with a backend server to fetch data. It uses state of the art architecture to structure the project for scalability. 
  
 Architecture
  The duck architecture is used for the overall application structure and features while the rails architecture is used for the redux components.
  The duck architecture represents a separation of the app's components based on its features .
  
  src ->
       Home -> 
       Shop ->
       Auth ->
       Checkout ->
       Common ->
       Redux -> actions
             -> constants
             -> reducers
             -> sagas
             
  # STATE MANAGEMENT
  
  The application's state is management by redux and redux-saga. It emplys the standard naming conventions in its actions and reducers and handles asynchronous requests using generator functions via sagas.
    Redux saga uses effects such as takeLatest, take, call, put and takeEvery to ensure that aynchronous requests are made and handled in the best possible way whilst adhering to standard.
    
  # APLICATION DESIGN
  
  The application User interface is built with advanced css techniques and libraries. It makes use of css grids, flexbox and material design. 
  
  # REACT FEATURES
  Shopmate also uses modern javascript techniques such as ES2015, map, filter ,rest, spread. Presentational and Smart components are also applied where necessary inorder to show logic chain. 
    

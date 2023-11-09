// import React from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "./config/constants.ts";
import Layout from "./layout/layout.tsx";
import './index.css'

function App() {

    return (
     <Routes>
         {
             routes.map(route =>
                 <Route
                     key={route.id}
                     path={route.path}
                     element={
                         <Layout>
                             <route.component/>
                         </Layout>}
                 />
             )
         }
     </Routes>
    )
}

export default App

// import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {Spinner, ThemeProvider} from "@material-tailwind/react";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {Suspense} from "react";

const app = (
    <Provider store={store}>
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Suspense>
    </Provider>
)
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(app)


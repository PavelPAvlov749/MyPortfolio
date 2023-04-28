import React from "react";
import ReactDOM from 'react-dom/client';

export const App = () => {

    return (
        <div>
            <h1>React</h1>
        </div>
    )
}
console.log("wefwe4fawoefhiaweuhfki")
const root = ReactDOM.createRoot(
    document.getElementById("about_me")
)

root.render(
    <ReactStrictMode>
           <App/>
    </ReactStrictMode>
 
)
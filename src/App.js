import "./App.css";
import React, { useState } from "react";
import News from "./Components/News";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light")
 const toggleMode=()=>{
  if (mode==="light") {
    setMode("dark")
    document.body.style.backgroundColor="black"
  } else {
    setMode("light")
    document.body.style.backgroundColor="white"
  }

 }

  return (
    <>
      <BrowserRouter>
        
        <LoadingBar height={4} color="#28a745" progress={progress} />
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/"
            element=
            {
              <News  
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general" mode={mode}
              />
            }
            >
          </Route>
          <Route exact path="/business"
            element=
            {
              <News 
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business" mode={mode}
              />
}
>
          </Route>
          <Route exact path="/entertainment"
            element=
            {
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment" mode={mode}
              />

            }
            >
          </Route>
          <Route exact path="/general"
            element=
            {
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general" mode={mode}
              />
            }
            >
          </Route>
          <Route exact path="/health"
            element=
            {
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health" mode={mode}
              />
            }
            >
          </Route>
          <Route exact path="/science"
            element=
            {
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science" mode={mode}
              />
            }
            >
          </Route>
          <Route exact path="/sports"
            element=
            {
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports" mode={mode}
              />
            }
            >
          </Route>
          <Route exact path="/technology"
            element=
            {
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology" mode={mode}
              />
            }
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

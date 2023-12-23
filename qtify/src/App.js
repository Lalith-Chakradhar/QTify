import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar/NavBar";
import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  const [searchData, useSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key,source) => {
    source().then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data};
      })
    })
  }

  useEffect(() => { 
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[])

  const {topAlbums=[], newAlbums=[], songs=[]} = data;


  return (
    <>
    <StyledEngineProvider injectFirst>
    <NavBar searchData={searchData}/>
    <Outlet context={{ data: {topAlbums, newAlbums, songs}}}/>
    </StyledEngineProvider>
    </>
    );
}

export default App;

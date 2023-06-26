// jshint esversion:6
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();

function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const [posts,setPosts]=useState([]);
    const [totalPages,setTotalPages]=useState(0);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        try{
            const data=await fetch(`${baseUrl}?page=${page}`);
            const jsonData=await data.json();
            setPosts(jsonData.posts);
            setPage(jsonData.page);
            setTotalPages(jsonData.totalPages);
        }catch(err){
            console.log("error while fetching the data");
            console.error(err);
            setPosts([]);
            setPage(1);
            setTotalPages(0);
        }
        setLoading(false);
    };

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
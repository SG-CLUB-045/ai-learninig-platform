"use client";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Provider({ children }) {
    const {user}=useUser();
    const [userDetail, setUserDetail] = useState();
    const [SelectedChapterIndex, setSelectedChapterIndex ] = useState(0);
    useEffect(() => {
        user && createnewuser();
    }, [user]);

    const createnewuser =async()=>{
        const res=await axios.post('/api/user',{
            email: user?.primaryEmailAddress?.emailAddress,
            name:user?.fullName
        });
        console.log(res.data);
        setUserDetail(res.data);
    }
    return(
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }} >
        <SelectedChapterIndexContext.Provider value={{SelectedChapterIndex, setSelectedChapterIndex}} >
        <div>
            {children}
        </div>
        </SelectedChapterIndexContext.Provider>
        </UserDetailContext.Provider>
    )
}

export default Provider;
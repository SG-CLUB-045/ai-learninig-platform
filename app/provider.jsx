"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Provider({ children }) {
    const {user}=useUser();
    const [userDetail, setUserDetail] = useState();
    useEffect(() => {
        user && createnewuser();
    }, [user]);

    const createnewuser =async()=>{
        const res=await axios.post('/api/user',{
            email: user?.primaryEmailAddress?.emailAddress,
            name:user?.fullName
        });
        setUserDetail(res.data);
    }
    return(
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }} >
        <div>
            {children}
        </div>
        </UserDetailContext.Provider>
    )
}

export default Provider;
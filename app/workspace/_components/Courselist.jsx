"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddCourseDialog from "./AddCourseDialog";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import CourseCard from "./CourseCard";

function CourseList() {
    const [courseList, setCourseList] = useState([]);
    const {user} =useUser();
    useEffect(()=>{
        user && GetCourseList();
    }, [user]);

    const GetCourseList=async()=>{
        const result=await axios.get('/api/courses');
        console.log(result.data);
        setCourseList(result.data);
    }

    return (
        <div className="mt-10">
            <h2 className="font-bold text-xl">Course List</h2>
            {courseList?.length == 0 ?
                <div className="flex p-7 items-center justify-center flex-col border rounded-xl mt-2 bg-secondary">
                    <Image src={'/oe.png'} alt="No Courses" width={80} height={80} />

                    <h2 className="my-2 text-xl font-bold">Look like you haven't created any courses</h2>
                    <AddCourseDialog>
                        <Button>+ Create your first course</Button>
                    </AddCourseDialog>
                </div> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {courseList?.map((course,index)=>(
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            }
        </div>
    )
}

export default CourseList;
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import AddCourseDialog from "./AddCourseDialog";

function CourseList() {
    const [courseList, setCourseList] = useState([]);
    return (
        <div className="mt-10">
            <h2 className="font-bold text-3xl">Course List</h2>
            {courseList?.length == 0 ?
                <div className="flex p-7 items-center justify-center flex-col border rounded-xl mt-2 bg-secondary">
                    <Image src={'/oe.png'} alt="No Courses" width={80} height={80} />

                    <h2 className="my-2 text-xl font-bold">Look like you haven't created any courses</h2>
                    <AddCourseDialog>
                        <Button>+ Create your first course</Button>
                    </AddCourseDialog>
                </div> :
                <div>
                    List Of Courses
                </div>
            }
        </div>
    )
}

export default CourseList;
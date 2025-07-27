"use client";
import { UserButton } from '@clerk/nextjs';
import react, { useEffect, useState } from 'react';
import ChapterListSidebar from '../_components/ChapterListSidebar';
import ChapterContent from '../_components/ChapterContent';
import { useParams } from 'next/navigation';
import axios from 'axios';

function Course() {
    const { courseId } = useParams();
    const [courseInfo, setCourseInfo] = useState();
    useEffect(() => {
        GetEnrolledCourseById();
    }, [])

    const GetEnrolledCourseById = async () => {
        const result = await axios.get('/api/enroll-course?courseId=' + courseId);
        console.log(result.data);
        setCourseInfo(result.data);
    }

    return (
        <div>
            <div className="p-4 flex justify-between items-center shadow-sm" >
                <UserButton />
            </div>
            <div className='flex gap-10'>
                <ChapterListSidebar courseInfo={courseInfo} />
                <ChapterContent courseInfo={courseInfo}/>
            </div>
        </div>
    );
}

export default Course;
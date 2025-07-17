import { Button } from "@/components/ui/button";
import axios from "axios";
import { Book, Clock, Loader2Icon, Settings, TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CourseInfo({ course }) {
    const courseLayout = course?.courseJson?.course;
    const [loading, setLoading] = useState(false);
    const GenerateCourseContent = async () => {
        setLoading(true);
        try {
            const result = await axios.post('/api/generate-course-content', {
                courseJson: courseLayout,
                courseTitle: course?.name,
                courseId: course?.cid
            });
            console.log(result.data);
            setLoading(false);
        } catch (e) {
            console.error("Error generating course content:", e);
            setLoading(false);
        }
    }

    return (
        <div className="md:flex gap-5 justify-between p-5 rounded-2xl shadow">
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-3xl">{courseLayout?.name}</h2>
                <p className="line-clamp-2 text-gray-500">{courseLayout?.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex gap-5 items-center p-3 rounded-lg shadow">
                        <Clock className="text-blue-700" />
                        <section>
                            <h2 className="font-bold">Duration</h2>
                            <h2>{courseLayout?.courseduration}</h2>
                        </section>
                    </div>
                    <div className="flex gap-5 items-center p-3 rounded-lg shadow">
                        <Book className="text-green-700" />
                        <section>
                            <h2 className="font-bold">Chapters</h2>
                            <h2>{course?.noofchapter} Chapter</h2>
                        </section>
                    </div>
                    <div className="flex gap-5 items-center p-3 rounded-lg shadow">
                        <TrendingUp className="text-red-700" />
                        <section>
                            <h2 className="font-bold">Difficulty Level</h2>
                            <h2>{course?.level}</h2>
                        </section>
                    </div>
                </div>
                <Button className="w-full" onClick={GenerateCourseContent} disabled={loading}> 
                    {loading ? <Loader2Icon className="animate-spin" /> : <Settings />} 
                    Generate Content
                </Button>
            </div>
            <Image alt={"Course Banner"} src={course?.imageURL} width={400} height={400} className="w-full mt-5 md:mt-0 aspect-auto object-cover h-[240px] rounded-2xl shadow" />
        </div>
    )
}

export default CourseInfo;
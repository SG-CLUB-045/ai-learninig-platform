import react, { useContext } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';


function ChapterListSidebar({ courseInfo }) {
    const course = courseInfo?.courses;
    const enrollCourse = courseInfo?.enrollCourse;
    
    const {SelectedChapterIndex, setSelectedChapterIndex} = useContext(SelectedChapterIndexContext);
    let completedChapter = enrollCourse?.completedChapters?? [];
    
    const courseContent = courseInfo?.courses?.courseContent;
    return (
        <div className='w-80 bg-secondary h-screen p-5'>
            <h2 className='mt-3 font-bold text-xl'>Chapters ({courseContent?.length})</h2>
            <Accordion type="single" collapsible>
                {courseContent?.map((chapter, index) => (
                    <AccordionItem value={chapter?.courseData?.chapterName} key={index} onClick={()=> setSelectedChapterIndex(index)}>
                        <AccordionTrigger className={`text-lg font-medium ${completedChapter.includes(index) ? 'bg-green-100 text-green-900' : ''}`}>
                            {index+1}. {chapter?.courseData?.chapterName}
                        </AccordionTrigger>
                        <AccordionContent asChild>
                            <div>
                                {chapter?.courseData?.topics?.map((topic, index_) => (
                                    <h2 key={index_} className={`${completedChapter.includes(index) ? 'bg-green-100 text-green-900 font-bold' : 'bg-white'} p-4 my-1 rounded-lg`}>{topic?.topic}</h2>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default ChapterListSidebar;
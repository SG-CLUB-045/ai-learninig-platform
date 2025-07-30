import { Button } from '@/components/ui/button';
import { SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';
import axios from 'axios';
import { CheckCircle, Cross, Loader2Icon, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import react, { useContext, useState } from 'react';
import YouTube from 'react-youtube';
import { toast } from 'sonner';

function ChapterContent({ courseInfo, refreshData }) {
    const {courseId} = useParams();
    const course = courseInfo?.courses;
    const enrollCourse = courseInfo?.enrollCourse;
    const courseContent = courseInfo?.courses?.courseContent;
    const {SelectedChapterIndex, setSelectedChapterIndex} = useContext(SelectedChapterIndexContext);
    const videodata = courseContent?.[SelectedChapterIndex]?.youtubeVideo;
    const topics = courseContent?.[SelectedChapterIndex]?.courseData?.topics;
    let completedChapter = enrollCourse?.completedChapters?? [];
    const [loading, setLoading] = useState(false);

    const markChapterCompleted=async()=>{
            setLoading(true);
           completedChapter.push(SelectedChapterIndex);
           const result = await axios.put('/api/enroll-course', {
                completedChapter: completedChapter,
                courseId: courseId
            });

            console.log(result.data);
            refreshData();
            toast.success('Chapter marked as completed');
            setLoading(false);
    }

    const markIncompleteChapter=async()=>{
        setLoading(true);
           const completedChap= completedChapter.filter(item=> item != SelectedChapterIndex);
           const result = await axios.put('/api/enroll-course', {
                completedChapter: completedChap,
                courseId: courseId
            });

            console.log(result.data);
            refreshData();
            toast.success('Chapter marked as InComplete');
            setLoading(false);
    }
    return (
        <div className='p-10'>
            <div className='flex justify-between mb-5'>
            <h2 className='font-bold text-2xl'>{SelectedChapterIndex+1}. {courseContent?.[SelectedChapterIndex]?.courseData?.chapterName}</h2>
            {!completedChapter?.includes(SelectedChapterIndex)?<Button onClick={()=>markChapterCompleted()}disabled={loading} >{loading?<Loader2Icon className='animate-spin'/>: <CheckCircle/>} Mark as Completed</Button>:<Button variant={'outline'} onClick={()=>markIncompleteChapter()} disabled={loading}>{loading?<Loader2Icon className='animate-spin'/>: <X/>} Mark as Incomplete</Button>}
            </div>
            {/* <h2 className='my-2 font-bodl text-lg'>Related Videos 🎬</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {videodata?.map((video, index)=> index<2 && (
                    <div key={index}>
                        <YouTube videoId={video?.videoId} opts={{
                            width: '450',
                            height: '250',
                        }} />
                    </div>
                ))}
            </div> */}

            <div className='mt-7'>
                {topics?.map((topic, index) => (
                    <div key={index} className='mt-10 p-5 bg-secondary rounded-2xl'>
                        <h2 className='font-bold text-2xl text-primary'>{index+1}. {topic?.topic}</h2>
                        <div className='mt-2' dangerouslySetInnerHTML={{ __html: topic?.content }} style={{
                            lineHeight: '2.5'
                        }}></div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ChapterContent;
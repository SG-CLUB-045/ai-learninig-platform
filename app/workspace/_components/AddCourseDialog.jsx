"use client"
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Sparkle } from "lucide-react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";

function AddCourseDialog({ children }) {
    const [loading, setLoading] = useState(false);

    const [formdata, setFormData] = useState({
        name: '',
        description: '',
        noofchapter: 1,
        includevideo: false,
        level: '',
        category: ''
    });

    const router= useRouter();

    const onHandleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
        console.log(formdata);
    }

    const onGenerate = async () => {
        console.log(formdata);
        const courseId=uuidv4();
        try {
            setLoading(true);
            const result = await axios.post('/api/generate-course-layout', {
                ...formdata,
                courseId: courseId
            });
            console.log(result.data);
            setLoading(false);
            router.push('/workspace/edit-course/'+result.data?.courseId);
        }
        catch (e) {
            setLoading(false);
            console.log(e);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Course Using AI</DialogTitle>
                    <DialogDescription asChild>
                        <div className="flex flex-col gap-4 mt-3">
                            <div>
                                <label>Course Name</label>
                                <Input placeholder="Course Name" className={'mt-2'} onChange={(event) => onHandleInputChange('name', event?.target.value)} />
                            </div>
                            <div>
                                <label>Course Description (optional)</label>
                                <Input placeholder="Course Description" className={'mt-2'} onChange={(event) => onHandleInputChange('description', event?.target.value)} />
                            </div>
                            <div>
                                <label>No. Of Chapters</label>
                                <Input placeholder="No. Of Chapters" type={'number'} className={'mt-2'} onChange={(event) => onHandleInputChange('noofchapter', event?.target.value)} />
                            </div>
                            <div className="flex gap-3 items-center">
                                <label>Include Video</label>
                                <Switch onCheckedChange={() => onHandleInputChange('includevideo', !formdata?.includevideo)} />
                            </div>
                            <div>
                                <label>Difficulty Level</label>
                                <div className="mt-2">
                                    <Select onValueChange={(value) => onHandleInputChange('level', value)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Difficulty Level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="beginner">Beginner</SelectItem>
                                            <SelectItem value="moderate">Moderate</SelectItem>
                                            <SelectItem value="advanced">Advanced</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <label>Category</label>
                                <Input placeholder="Category (seperated by Comma)" className={'mt-2'} onChange={(event) => onHandleInputChange('category', event?.target.value)} />
                            </div>
                            <div className="mt-5">
                                <Button className={'w-full'} onClick={onGenerate} disabled={loading}>
                                    {loading ? <Loader2Icon className="animate-spin" /> :
                                        <Sparkle />} Generate Course</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddCourseDialog;
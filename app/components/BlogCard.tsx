import { Card } from '@/components/ui/card';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { ModeAtom } from '../Recoil/atom';

interface BlogCardProps {
    title: string;
    body: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, body }) => {
    const mode = useRecoilValue(ModeAtom);

    return (
        <Card 
        className={`cursor-pointer mt-5 mb-3 w-[95%] md:w-[60%] ${mode ? 'bg-white text-black' : 'bg-slate-800 text-white border-slate-900 shadow-lg'}
        hover:${mode ? '' : ''} hover:border-t hover:border-l hover:border-r hover:shadow-lg transition-shadow duration-300`}
        >
            <div className="flex items-center p-4">
                <div className={`h-[30px] w-[30px] ${mode ? 'bg-slate-800' : 'bg-slate-600'} rounded-full text-white flex justify-center items-center`}>
                    J
                </div>
                <div className="ml-3">
                    <p className={`font-semibold ${mode ? 'text-black' : 'text-slate-200'}`}>John Doe</p>
                    <p className={`text-sm ${mode ? 'text-gray-500' : 'text-slate-400'}`}>11-9-2023</p>
                </div>
            </div>
            <div className="p-4">
                <h2 className={`text-lg font-semibold ${mode ? 'text-gray-900' : 'text-slate-100'}`}>{title}</h2>
                <p className={`text-gray-700 ${mode ? 'text-gray-700' : 'text-slate-300'}`}>{body} ...</p>
                <p className={`mt-2 text-sm ${mode ? 'text-gray-500' : 'text-slate-400'}`}>1 minute read</p>
            </div>
        </Card>
    );
}

export default BlogCard;

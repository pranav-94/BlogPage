'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from './components/Skeleton';
import Navbar from './components/Navbar';
import BlogCard from './components/BlogCard';
import { useRecoilValue } from 'recoil';
import { ModeAtom } from './Recoil/atom';

const Blogs = () => {
    const [blogData, setBlogData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const mode = useRecoilValue(ModeAtom)
    const apiUrl = 'https://dummyjson.com/posts';

    useEffect(() => {
        const handleBlog = async () => {
            setLoading(true);
            const Blogs = await axios.get(`${apiUrl}`);
            setBlogData(Blogs.data.posts);
            setLoading(false);
        };
        handleBlog();
    }, []);

    return (
        <div className={`h-auto ${mode===true ? 'bg-white text-black' : 'bg-slate-800 text-white'}`}>
            <Navbar />
            {
                Loading ? <Skeleton /> : 
                <div className='w-[100%] flex flex-col items-center'>
                    {
                        blogData.map((item) => (
                            <BlogCard key={item.id} title={item.title} body={item.body} />
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default Blogs;

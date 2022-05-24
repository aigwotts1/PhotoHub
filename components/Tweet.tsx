import React, { useEffect, useState } from 'react'
import {Comment,Tweet} from '../typings'
import TimeAgo from 'react-timeago'
import {
    ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchComments'
interface Props{
    tweet:Tweet
}
function Tweet({tweet}:Props) {
    const [comments, setComments] = useState<Comment[]>([])
    const refreshComments=async()=>{
        const comments:Comment[]=await fetchComments(tweet._id)
        setComments(comments);
    }
    useEffect(() => {
      refreshComments();
    }, [])
    
  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-grey-100'>  
        <div className='flex space-x-3'>
            <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} alt="pr_img" />
            <div>
                <div className='flex items-center space-x-1'>
                    <p className='mr-1 font-bold'>{tweet.userName}</p>
                    <p className='hidden text-sm text-grey-500 sm:inline'>@{tweet.userName.replace(/\s/g, '').toLowerCase()} .</p>

                    <TimeAgo className='text-sm text-grey-500'
                    date ={tweet._createdAt}
                    />
                </div>
                <p className='pt-1'>
                    {tweet.text}
                </p>
                {tweet.image &&
                    <img src={tweet.image} alt="" className='m-5 ml-0 mb-1 max-h-60 object-cover rounded-lg shadow-sm'/>
                }
            </div>
        </div>
        <div className='flex justify-between mt-5'>
            <div className='flex cursor-pointer items-center text-grey-400 space-x-3'>
                <ChatAlt2Icon className='h-5 w-5'/>
                <p>{comments.length}</p>
            </div>
            <div className='flex cursor-pointer items-center text-grey-400 space-x-3'>
            <SwitchHorizontalIcon className='h-5 w-5'/>

            </div>
            <div className='flex cursor-pointer items-center text-grey-400 space-x-3'>
            <HeartIcon className='h-5 w-5'/>

            </div>
            <div className='flex cursor-pointer items-center text-grey-400 space-x-3'>
            <UploadIcon className='h-5 w-5'/>

            </div>
        </div>

        {comments?.length>0 && (
            <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-grey-100 p-5'>
                {comments.map(comment=>(
                    <div key={comment._id} className="flex space-x-2">
                        {/* <hr className='absolute left-5 top-5 h-8 border-x border-green-300'/> */}
                        <img src={comment.profileImg} className="mt-2 h-7 w-7 object-cover rounded-full" alt="" />
                        <div>
                            <div className='flex items-center space-x-1'>
                                <p className='mr-1 font-bold'>{comment.userName}</p>
                                <p className='hidden text-sm text-grey-500 lg:inline'>@{comment.userName.replace(/\s/g, '').toLowerCase()} .</p>
                                <TimeAgo className='text-sm text-grey-500'
                                 date ={comment._createdAt}
                             />
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Tweet
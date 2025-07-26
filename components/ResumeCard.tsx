import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'
import { usePuterStore } from '~/lib/puter'

import {useState, useEffect } from 'react'

const ResumeCard = ({resume}:{resume:Resume}) => {
  

  const [resumeUrl, setresumeUrl] = useState("");
  
  
 const {fs,kv}=usePuterStore()
 
 
 useEffect(() => {
  
    const loadImage=async ()=>{

        const blob=await fs.read(resume.imagePath)

        if(!blob) return

        const url=URL.createObjectURL(blob)

        setresumeUrl(url)



        


    }
loadImage()


 }, []);
  
  return (
    <Link to={`/resume/${resume.id}`} className='resume-card animate-in fade-in duration-1000'>
        
        <div className='resume-card-header'>


        <div className='flex flex-col gap-2'>

        {resume.companyName &&   <h2 className='text-black font-bold break-words'>{resume.companyName}</h2>}
       {resume.jobTitle &&      <h3 className='text-lg text-gray-500 break-words'>{resume.jobTitle}</h3>}

       {!resume.companyName && !resume.jobTitle && <>
        
        <h3>My Resume</h3>
       
       </>}
        </div>
 <div className='flex-shrink-0'>

        <ScoreCircle score={resume.feedback.overallScore}/>

 </div>
    
    

        </div>

        {resumeUrl && 
      <div className='border-gradient animate-in fade-in duration-1000'>

        <div className='w-full h-full'>
         
        <img src={resumeUrl} 
        alt="s" 
        className='w-full h-[380px] max-sm:h-[200px] object-cover'
        />


        </div>
   
     



    </div>
}
    </Link>
  )
}

export default ResumeCard

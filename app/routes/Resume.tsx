import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import { useEffect } from 'react'
import { usePuterStore } from '~/lib/puter'

import { useState } from 'react'
import Summary from 'components/Summary'
import Ats from 'components/Ats'
import Details from 'components/Details'
const Resume = () => {
 
    const {id} = useParams()

    const [imageUrl, setimageUrl] = useState('');
    const [resumeUrl, setresumeUrl] = useState('');
    const [feedback, setfeedback] = useState<Feedback | null>(null);
    

    
    

      const {isLoading,auth,kv,fs}=usePuterStore()

       useEffect(() => {
        
         const loadResume=async ()=>{
            const resume=await kv.get(`resume:${id}`)
           console.log("return");
           
            if(!resume) return

            const data=JSON.parse(resume)
           console.log("The Data Is",data);
           
            const resumeBlob=await fs.read(data.resumePath)
            if(!resumeBlob) return

            const pdfBlob=new Blob([resumeBlob], {type: 'application/pdf'})


            const  resumeurl=URL.createObjectURL(pdfBlob)

            setresumeUrl(resumeurl)
        console.log("Images Blob Return");
        
            const imageBlob=await fs.read(data.imagePath)
            if(!imageBlob) return

            const imageurl=URL.createObjectURL(imageBlob)

            setimageUrl(imageurl)

          setfeedback(data.feedback)

          

         }

      loadResume()
       }, [id]);





    return (
    <main className='!pt-0'>
        <nav className='resume-nav'>
            <Link to={"/"} className="back-button">
            
            <img src="/icons/back.svg" alt="" className='w-2.5 h-2.5'/>
            <span className='text-gray-700 font-semibold'>Back To Homepage</span>
            </Link>
        </nav>

        <div className='flex flex-row w-full  max-lg:flex-col-reverse'>
            <section className='feedback-section '>
                {imageUrl && resumeUrl && (
                <a href={resumeUrl} target='_blank'>


                <div className='gradient-border animate-in fade-in duration-1000 max-sm:m-0 h-[90%] max-w-xl:h-fit w-fit'>
                    <img src={imageUrl} alt="l" />
                </div>
                </a>

                    

                )}
            </section>
               <section className="resume-section">
                <h2 className='text-4xl font-bold'>Resume Review</h2>
                {feedback?(
                    <>
                <div className='flex flex-col gap-8 animate-in fade-in duration-1000'>

                    <Summary feedback={feedback}/>
                    <Ats score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []}/>
                    <Details feedback={feedback}/>
                </div>

                    </>
                ):(
                    <>
                    <img src="/images/resume-scan-2.gif" alt="" className='w-full'/>
                    </>
                )
                
            }
               </section>
            
        </div>
    </main>
  )
}

export default Resume

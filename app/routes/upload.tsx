import React, { type FormEvent } from 'react'
import Navbar from 'components/Navbar'
import { useState } from 'react'
import Uploader from 'components/Uploader';

const upload = () => {
  
  const [isLoading, setisLoading] = useState(false);
  const [statusText, setstatusText] = useState("");

  const [file, setfile] = useState<File | null>(null);
  
  
  const handleFileSelect= (file:File| null) =>{
      setfile(file)
  }
  
  
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{





  }
    return (
    <main className="bg-[url('images/bg-main.svg')]">
    
    <Navbar/>

   <section className="main-section">

    <div className='page-heading'>
        <h1>Smart Feedback For Your Dream Job</h1>
        {isLoading?(
         
         <>
         
        <h2>{statusText}</h2>
        
        <img src="/images/resume-scan.gif" alt="f" className='w-full'/>
 </>

        ):(
            <>
              <h2>Drop Your Resume For Ats Score and Improvement Tips</h2>
            </>
        )}

        {!isLoading && (


 <form action="" id="upload-form" onSubmit={handleSubmit}>

    <div className='form-div'>
        <label htmlFor="Company Name" >Company Name</label>
        <input type="text" name="company-name" id="company-name" />
    </div>

     <div className='form-div'>
        <label htmlFor="Company Name" >Job Title</label>
        <input type="text" name="job-title" id="job-title" />
    </div>


     <div className='form-div'>
        <label htmlFor="Company Name" >Job Description</label>
        <textarea rows={5}  name="job-description" id="job-description" />
    </div>
<div className='form-div'>
        <label htmlFor="uploaded" >Upload Resume</label>
        <Uploader onFileSelect={handleFileSelect}/>
    </div>

    <button type='submit' className='primary-button'>Submit Resume</button>



 </form>
        )}
    </div>

    </section>

    </main>
  )
}

export default upload

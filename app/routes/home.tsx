import type { Route } from "./+types/home";

import Navbar from "components/Navbar";

import ResumeCard from "components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useLocation, useNavigate } from "react-router";


import { useEffect, useState } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  
  
  const [resume, setresume] = useState<Resume[] | null> ([]);
  const [loading, setloading] = useState(false);
  
  
  
  const {isLoading,auth,kv}=usePuterStore()
  
  
  const navigate=useNavigate()

  useEffect(() => {
    if(!auth.isAuthenticated){
      navigate("/auth?next=/")
    }
  }, [auth.isAuthenticated]);
  

  useEffect(() => {
     
     const loadResume=async ()=>{
      setloading(true)   
      const resumes= (await kv.list('resume:*' , true)) as KVItem[]

      const parsedResume= resumes?.map((resume)=>(
        JSON.parse(resume.value) as Resume
      ))

      console.log("parsed Resume",parsedResume);
      
       setresume(parsedResume || [])
       setloading(false)

     }

  loadResume()

  }, []);
  
  return <main className="bg-[url('images/bg-main.svg')]">
    
    <Navbar/>

   <section className="main-section">
    <div className="page-heading">


<h1>Track Your Application & Resume Rating</h1>

{!isLoading &&  resume?.length===0 ? (
  <div>
    <h3 className="text-xl text-gray-600"> Submit Your Resume For Ai Powered Feedback</h3>
  </div>
):<h2>Review Your Submission and ai powered feedback</h2>}







{/*  */}


{isLoading && (
  <div className="flex flex-col items-start justify-center">
    <img src="/images/resume-scan-2.gif" alt="" />
  </div>
)}
    </div>
   </section>

  <section className="resumes-section">

   {
    resume.length>0 && (
      resume.map((resume)=>(
        <ResumeCard key={resume.id} resume={resume}/>
      ))
    )
   }



   {!isLoading && resume?.length===0 && (
        <div className="flex flex-col justify-center items-center mt-10 gap-4">

       <Link to={"/upload"} className="primary-button w-fit text-xl font-semibold">


         Upload Your Resume

        
       </Link>
</div>
   )}


  </section>

  </main>;
}

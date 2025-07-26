import React from 'react'
import ScoreGaudge from './ScoreGaudge'



const Category =({title,score}:{title:string, score:number})=>{
const color_text=score>70?"text-green-600":score>50?"text-yellow-600":"text-red=600"
  
  
  return (
        <div className='resume-summary'>
              <div className='category'>
                
                <h4 className='font-semibold text-gray-700'>{title}</h4>

                <p><span className={color_text}>{score}</span>/100</p>
              </div>
        </div>
    )
}



const Summary = ({feedback}:{feedback:Feedback}) => {
  return (
   
   <div className='bg-white rounded-2xl shadow-md w-full'>
      <div className='flex flex-row item-center p-4 gap-8'>
             <ScoreGaudge score={feedback.overallScore}/>


             <div className='flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>Your ATS Score</h2>
                <p className='text-sm'>Your Score Is calculated based On These Factors</p>
             </div>
      </div>
   

        <Category title='tone & style' score={feedback.toneAndStyle.score} />  

        <Category title='Content' score={feedback.content.score} />  
        <Category title='Structure' score={feedback.structure.score} />
        <Category title='Skills' score={feedback.skills.score} />  




      </div>
   

  )
}

export default Summary

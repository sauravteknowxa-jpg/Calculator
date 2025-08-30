import { useState } from 'react';
import './style.css';

function Calculator(){
    const [input, setInput]=useState('');
    const handleClick=(value)=>{
            if(value ==='AC'){
                setInput(' ')
            }else if(value === 'DEL'){
                setInput(input.slice(0,-1))
            }else if(value === '='){
                setInput()
                try{
                    const expression=input.replace(/X/g, '*')
                    const result=eval(expression)
                    setInput(result.toString())
                }catch(error){
                    setInput('error')
                }
            }
            else{
                setInput((prevInput) => prevInput + value)
            }
            
    }
    return(
        <>
            <div className="w-full h-full bg-pink-200 ">
                <div className='flex flex-col bg-purple-200 items-center justify-center  gap-6'>
                    <div className="flex flex-col bg-slate-200 items-center justify-center  gap-6 border-2 m-10 border-slate-200 p-10  w-1/2 rounded-4xl shadow-2xl shadow-black h-auto ">
                    <div className='w-full h-36 bg-white flex items-center justify-end text-2xl  border-2 border-slate-200 rounded-4xl shadow-2xl shadow-black px-28 '>
                            {input || "0"}
                    </div>
                    <div className="flex flex-col gap-4  w-full h-3/4 ">

                        <div className='flex flex-wrap items-center justify-between gap-4 w-full px-25 '>
                            <div onClick={()=>handleClick('sin')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">sin</div>
                            <div onClick={()=>handleClick('deg')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">deg</div>
                        </div>

                        <div className='flex flex-wrap items-center justify-between gap-4 w-full px-25'>
                                <div onClick={()=>handleClick('AC')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">AC</div>
                                <div onClick={()=>handleClick('DEL')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">DEL</div>
                            
                                <div onClick={()=>handleClick('%')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">%</div>
                                <div onClick={()=>handleClick('X')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">X</div>
                               
                                
                                
                        
                        </div>

                        <div className='flex flex-wrap items-center justify-between gap-4 w-full px-25'>
                            <div onClick={()=>handleClick('7')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">7</div>  
                            <div onClick={()=>handleClick('8')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">8</div>
                            <div onClick={()=>handleClick('9')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">9</div>
                            <div onClick={()=>handleClick('-')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">-</div>
                        
                        </div>

                        <div className='flex flex-wrap items-center justify-between gap-4 w-full px-25'>
                        <div onClick={()=>handleClick('4')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">4</div>
                        <div onClick={()=>handleClick('5')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">5</div>
                        <div onClick={()=>handleClick('6')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">6</div>
                        <div onClick={()=>handleClick('+')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">+</div>
                        

                        </div>

                          <div className='flex flex-wrap items-center justify-between gap-4 w-full px-25'>
                                <div onClick={()=>handleClick('1')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">1</div>
                                <div onClick={()=>handleClick('2')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">2</div>
                                <div onClick={()=>handleClick('3')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">3</div>
                                <div onClick={()=>handleClick('=')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">=</div>
                        
                            </div> 

                          <div className='flex flex-wrap items-center justify-between gap-4 w-full px-25'>
                                    <div onClick={()=>handleClick('0')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">0</div>
                                    <div onClick={()=>handleClick('00')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">00</div>
                                     <div onClick={()=>handleClick('.')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">.</div>
                                      <div onClick={()=>handleClick('/')} className="flex rounded-full bg-slate-100 text-black w-20 h-13 items-center text-2xl font-bold justify-center cursor-pointer">/</div>
                             </div>   
                        
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Calculator;
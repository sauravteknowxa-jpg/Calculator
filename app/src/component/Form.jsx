import './style.css';

function Form(){
    return(
        <>
            <div className=' bg-blue-200 w-full h-full'>
                   <div className="   flex flex-col  gap-4 bg-blue-200  text-black items-center justify-center px-10 py-20 w-full">
                           
                          <div className="flex flex-col bg-gray-400 items-center justify-center  text-center md:text-left  gap-6 border-2 border-slate-200 px-25 py-10  w-1/2 rounded-4xl shadow-2xl shadow-black  ">
                                <h2 className='text-4xl font-bold text-center mb-6'>Student Registration Form</h2>
                            <form action="" className='flex flex-col  items-center justify-center gap-4'>

                                    
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                            <div className='flex flex-col items-start  gap-4 mb-4 cursor-pointer'>
                                                <label htmlFor="name" className='w-40'>Full Name  </label>
                                                <input type="text" name='username' id='name' placeholder='Enter your name' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full '/>

                                            </div>
                                            
                                            <div className='flex flex-col items-start  gap-4 mb-4'>
                                                <label htmlFor="phone" className='w-40'>Phone Number  </label>
                                                <input type="tel" name='phone' id='phone' placeholder='10 - digit  phone number' maxLength="10" pattern='[0-9]' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full'/>
                                            </div>

                                            <div className='flex flex-col items-start gap-4 mb-7'>
                                                    <label htmlFor="dob" className='w-40'>Date of Birth  </label>
                                                <input type="date" name='dob' id='dob' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full'/>

                                            
                                            </div>
                                            

                                            
                                    </div>
                                    <div>

                                        <div className='flex flex-col items-start  gap-4 mb-4 cursor-pointer'>
                                                <label htmlFor="email" className='w-40'>Email  </label>
                                                <input type="email" name='email' id='email' placeholder='example@gmail.com' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full '/>

                                            </div>

                                            <div className='flex flex-col items-start  gap-6 mb-7 w-full'>
                                                <label className='w-40' >Gender  </label>
                                                <div className='flex flex-wrap gap-4 w-full'>
                                                <div className=' flex flex-wrap gap-4 '>
                                                    <input type="radio" name='gender' id='male' required className='rounded-xl  cursor-pointer p-3 '/>
                                                    <label htmlFor="male">Male</label>
                                                
                                                </div>

                                                <div className='flex flex-wrap gap-4  '>
                                                    <input type="radio" name='gender' id='female' required className='rounded-xl cursor-pointer p-3 '/>
                                                    <label htmlFor="female">Female </label>
                                                
                                                </div>

                                                <div className='flex flex-wrap gap-4 '>
                                                    <input type="radio" name='gender' id='other' required className='rounded-xl cursor-pointer p-3 '/>
                                                <label htmlFor="other">Other </label>

                                                </div>
                                                    
                                                </div>

                                     <div className='flex flex-col items-start  gap-4 mb-7 w-full'>
                                                <label htmlFor="course" className='w-48'>Course/Department </label>
                                                <select name="course" id="course" className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full text-center'>
                                                    <option value="">Select Course </option>
                                                    <option value="">B.Tech</option>
                                                    <option value="">MBA</option>
                                                    <option value="">BCA</option>
                                                    <option value="">MCA</option>
                                                </select>

                                            
                                            </div>
                                           
                                    
                                
                                </div>
                                


                                    
                                            
                                            
                                    </div>

                                </div>                             
                                <div className='flex flex-col items-start w-full gap-4'>
                                                    <label htmlFor="dob" className='w-40 '>Skills  </label>
                                                    <div className='flex flex-wrap items-center  gap-4 mb-7'>
                                                
                                                
                                                <input type="checkbox" name='skill' id='java' required className='rounded-xl cursor-pointer p-2'/>
                                                <label htmlFor="java">Java</label>

                                                <input type="checkbox" name='skill' id='python' required className='rounded-xl cursor-pointer p-2'/>
                                                <label htmlFor="python">Python</label>

                                                <input type="checkbox" name='skill' id='web' required className='rounded-xl cursor-pointer p-2'/>
                                                <label htmlFor="web">Web Dev</label>

                                                <input type="checkbox" name='skill' id='ai' required className='rounded-xl cursor-pointer p-2'/>
                                                <label htmlFor="ai">AI/ML</label>
                                                
                                            
                                            </div>
                                
                                            </div>
                                            <div className='flex flex-col items-start gap-4 w-full'>
                                                    <label htmlFor="address" className='w-40'>Address  </label>
                                                    <textarea name='address' id='address' placeholder='Enter address' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full h-30'/>
                                                    
                                                
                                                </div>

                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                                                <div className='flex flex-col items-start gap-4 mb-4'>
                                
                                                    <label htmlFor="password" className='w-40'>Password  </label>
                                                        <input type="password" name='password' id='password' placeholder='Enter password' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full'/>
                                                    
                                            </div>
                                            <div className='flex flex-col items-start gap-4 mb-4'>
                                
                                                    <label htmlFor="password1" className='w-40'>Confirm Password  </label>
                                                        <input type="text" name='password' id='password1' placeholder='Confirm password' required className='rounded-xl cursor-pointer p-3 bg-slate-300 w-full'/>
                                                    
                                            </div>
                                            
                                            
                                        </div>
                                        <div className='flex flex-col items-start gap-4 mb-7 w-full'>
                                        <label htmlFor="profile" className='w-40' >Profile Picture </label>
                                        <input type="file" id='profile' name='profile' className='rounded-xl border-2 border-slate-300 bg-slate-300 p-3 pl-12 cursor-pointer focus:border-gray-400 w-full'/>
                                    </div>

                                
                                
                                            
                                <div className='flex flex-wrap items-center justify-center gap-4 '>
                                    <button type='submit' className='bg-blue-600 text-white hover:bg-green-300 w-32 h-12 flex items-center justify-center rounded-lg cursor-pointer'>Submit</button>
                                    <button type='reset' className='bg-blue-600 text-white hover:bg-green-300 w-32 h-12 flex items-center justify-center rounded-lg cursor-pointer'>Reset</button>
                           
                                
                                </div>
                                       
                                    
                            </form>
                          </div>
                           
                     </div> 
            </div>
        </>
    )
}
export default Form;
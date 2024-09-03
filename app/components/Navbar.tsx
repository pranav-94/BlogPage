import { useState } from "react"
import { useRecoilState } from 'recoil';
import { ModeAtom } from "../Recoil/atom";

const Navbar = ()=>{

    const [mode,setMode] = useRecoilState(ModeAtom)

    const handleMode = ()=>{
          setMode(!mode)
    }

    return(
            <div className={`  ${mode === true? 'bg-white text-black' :'bg-slate-800 text-white'}  w-[100%] h-[60px] flex items-center  justify-around shadow-md sticky top-0  ease-in-out `}>
                    <button className="mr-[20px] h-[40px] w-[70px] rounded-full bg-green-500 text-white">New</button>
                    <div className="flex items-center">
                    <div className={`h-[40px] w-[40px] bg-slate-800 rounded-full text-white flex justify-center items-center ${mode ?'' :'bg-slate-100 text-black'}`}>
                    J
                </div>
                <p onClick={handleMode} className="ml-5 cursor-pointer">Mode</p>
                </div>
                </div>
    )
}

const UserAcc = ()=>{
    const username = localStorage.getItem('username')
    const [handleSettings,setHandleSettings] = useState(false)

    const handleSettingsCard = ()=>{
        setHandleSettings(!handleSettings)
 }

    return(
        <>
        <div className=" bg-white">
          <p onClick={handleSettingsCard} className="p-[20px] flex justify-center items-center text-[20px] h-[40px] w-[40px] cursor-pointer bg-slate-800 rounded-full text-white">{username?.slice(0,1).toUpperCase()}</p>
        </div>
       
</>
    )
}

export default Navbar
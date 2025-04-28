import {useContext, useState} from 'react';
import { Modal, ConfigProvider } from 'antd';
import useWindowSize from '../hooks/useWindowSize';
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCode, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import AppContext from '../context/AppContext';
import DevLogo from '../assets/dev.png';

import SearchBar from './SearchBar';
import CustomSwitch from './CustomSwitch'

const Header = () => {
    const {theme,setTheme,unit,setUnit} = useContext(AppContext)
    const {isMobile,isTablet,isDesktop} = useWindowSize();
    const [modalOpen, setModalOpen] = useState(false);

    const linkRedirect = (link)=>{
        window.open(link, '_blank');
    }

    return (
        <div className={`${theme==='dark' ? 'dark' : ''}`}>
            <div className={`flex ${isMobile ? "flex-col gap-4" : "flex-row"} items-center justify-between w-full px-0 py-3`}>
                <div className='flex items-center justify-evenly gap-1 rounded-[15px] hover:bg-white hover:shadow-lg dark:hover:bg-gray-700 hover:px-3 cursor-pointer transition-all duration-200' onClick={()=>setModalOpen(true)}>
                    <TiWeatherCloudy size={40}/>
                    <div className='text-2xl'>Weather</div>
                </div>
                <div className={`flex flex-col md:flex-row items-center w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 justify-between md:justify-end gap-2`}>
                    <div className='w-full'>
                        <SearchBar/>
                    </div>
                    <div className='flex gap-2 items-center justify-end'>
                        <CustomSwitch currOption={unit} setOption={setUnit} options={['C','F']}/>
                        <CustomSwitch currOption={theme} setOption={setTheme} options={['dark','light']}/>
                    </div>
                </div>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            optionSelectedBg:`${theme==='dark' ? '#6366f1' : '#c7d2fe'}`,
                        }
                    },
                    token:{
                        colorText:`${theme==='dark' ? 'white' : 'black'}`,
                        colorTextPlaceholder:`${theme==='dark' ? '#afb7c4' : '#494949'}`,
                        colorBorder:'#818cf8',
                        colorBorderHover:'#06b6d4',
                        controlOutlineWidth:0,
                        colorBgContainer:`${theme==='dark' ? '#0f172a' : 'white'}`,
                        colorBgElevated:`${theme==='dark' ? '#1f2937' : 'white'}`,
                        borderRadius:'15px',
                    }
                }}
            >
                
            </ConfigProvider>
        </div>
    )
}

export default Header
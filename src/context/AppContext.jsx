import {createContext,useState} from 'react'

const prevLocation = JSON.parse(localStorage.getItem('location'))

const AppContext = createContext({
    unit: '',
    setUnit: ()=>{},
    location: {},
    setLocation: ()=>{},
    theme: '',
    setTheme: ()=>{},
})

export const AppContextProvider = ({children})=>{
    const [unit,setUnit] = useState('C');
    const [location,setLocation] = useState(prevLocation ? 
        prevLocation : {address:"Uzbekistan, Tashkent, Tashkent", lat:41.2615, lon:69.2177})
    const [theme,setTheme] = useState('dark');

    return (
        <AppContext.Provider value={{
            unit,
            setUnit,
            location,
            setLocation,
            theme,
            setTheme,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
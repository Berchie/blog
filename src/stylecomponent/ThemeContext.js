import React, {useContext, useState, createContext} from 'react';

export const AppThemeContext = createContext();
export const ThemeToggleContext = createContext();

// export function useAppTheme(){

//     const context = useContext(AppThemeContext);

//     if (!context) {
//         throw new Error(`useAppTheme must be used within the ThemeProvider`);
//     } 
//         return context;
// }

export function useAppTheme(){
    return useContext(AppThemeContext);
}

export function useThemeToggle(){
    return useContext(ThemeToggleContext);
}



//toggle function to change the state of the theme
// function toggleTheme() {
//     setDefaultTheme(prevDefault => !prevDefault)
// }

// Provider hook that creates count object and handles state
// function useThemeProvider(){

//     const themes = {
//         light: {
//           color: "#000000",
//           background: "#eeeeee"
//         },
//         dark: {
//           color: "#bbbbbb",
//           background: "#222222"
//         }
//       };

//     //set the Default Theme of the App
//     const [defaultTheme, setDefaultTheme] = useState(false);


//       //method on defaultTheme object that allows changing of them 
//     //   const styleTheme = () =>{
//     //     if (defaultTheme === themes.light) {
//     //         setDefaultTheme(JSON.stringify(themes.dark));
//     //     } else {
//     //         setDefaultTheme(JSON.stringify(themes.light));
//     //     }
//     // };

//       const styleTheme = {
//           background: defaultTheme ? "#CCC" : "#333",
//           color: defaultTheme ? "#333" : "CCC"
//       };
    
//     return { defaultTheme, styleTheme};
// }

// Provider component that wraps your app and makes count object ...
// ... available to any child component that calls useAppTheme().
export function ThemeProvider ({children}){

    const [defaultTheme, setDefaultTheme] = useState(true);


    function toggleTheme() {
        setDefaultTheme(prevDefault => !prevDefault)
    }
    

    // const appTheme = useThemeProvider();

    return(
        <AppThemeContext.Provider value={defaultTheme}>
            <ThemeToggleContext.Provider value={toggleTheme}> 
                {children}
            </ThemeToggleContext.Provider>
        </AppThemeContext.Provider>
    )
}


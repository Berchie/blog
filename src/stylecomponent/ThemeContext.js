import React, {useContext, useState, createContext} from 'react';

export const AppThemeContext = createContext();
// export const ThemeToggleContext = createContext();

export function useAppTheme(){

    const context = useContext(AppThemeContext);
    if (!context) {
        throw new Error(`useAppTheme must be used within the ThemeProvider`);
    } else {
        return context;
    }
}

// export function useThemeToggle(){
//     return (ThemeToggleContext);
// }



//toggle function to change the state of the theme
// function toggleTheme() {
//     setDefaultTheme(prevDefault => !prevDefault)
// }

// Provider hook that creates count object and handles state
function useThemeProvider(){

    const themes = {
        light: {
          foreground: "#000000",
          background: "#eeeeee"
        },
        dark: {
          foreground: "#bbbbbb",
          background: "#222222"
        }
      };

    //set the Default Theme of the App
    const [defaultTheme, setDefaultTheme] = useState(themes.light);


      //method on defaultTheme object that allows changing of them 
      const styleTheme = () =>{
        if (defaultTheme === themes.light) {
            setDefaultTheme(themes.dark);
        } else {
            setDefaultTheme(themes.light);
        }
    };

    //   const styleTheme = {
    //       background: defaultTheme ? themes.dark : themes.light
    //   };
    
    return { defaultTheme, styleTheme};
}

// Provider component that wraps your app and makes count object ...
// ... available to any child component that calls useAppTheme().
export function ThemeProvider ({children}){

    // const [defaultTheme, setDefaultTheme] = useState(true);


    // function toggleTheme() {
    //     setDefaultTheme(prevDefault => !prevDefault)
    // }

    const appTheme = useThemeProvider();

    return(
        <AppThemeContext.Provider value={appTheme}>
            {/* <ThemeToggleContext.Provider value={toggleTheme}> */}
                {children}
            {/* </ThemeToggleContext.Provider> */}
        </AppThemeContext.Provider>
    )
}


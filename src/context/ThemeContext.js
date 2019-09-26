import React from 'react';

//Creating the Context
const ThemeContext = React.createContext({});

//Exporting provider
export const ThemeProvider = ThemeContext.Provider;
//Exporting consumer
export const ThemeConsumer = ThemeContext.Consumer;

//Exporting the context
export default ThemeContext;


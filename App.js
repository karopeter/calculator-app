import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch  } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/contexts/ThemeContext';
import MyKeyboard from './src/components/mykeyboard';

export default function App() {
  const [theme, setTheme] = useState();
  return (
    <ThemeContext.Provider value={theme}>
        <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black' }]}>
           <Switch 
             value={theme}
             onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
           />
           <MyKeyboard />
        </SafeAreaView>
    </ThemeContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: myColors.light,
    justifyContent: 'flex-start',
  }
});
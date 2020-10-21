import React from 'react';
import { useAppTheme } from '../stylecomponent/ThemeContext';

const theme = useAppTheme();

export const Blog = () => (
    <div style={theme.styleTheme}>
        <h1>Post Page</h1>
    </div>
)
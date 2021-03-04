import {blue, grey, red} from "@material-ui/core/colors";

export const mainColor = blue;
export const deleteColor = red;
export const subColor = grey;

const backstage_theme = {
    palette: {
        background: {
            default: '#eee'
        },
        primary: {
            light: '#eb4446',
            main: '#E71618',
            dark: '#a10f10',
            contrastText: "#fff"
        },
        secondary: {
            light: '#5972FE',
            main: '#304ffe',
            dark: '#2137B1',
            contrastText: "#000"
        }
    },
    typography: {
        fontFamily: "Prompt",
        fontWeightLight: 200,
        fontWeightRegular: 300,
        fontWeightMedium: 400,
        fontWeightBold: 500,
        fontSize: 16
    },
    project: {
        error_message: {
            color: "#ff0000",
            fontSize: "1.5em"
        }
    }
};
export default backstage_theme;

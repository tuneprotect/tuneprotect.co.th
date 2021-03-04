import {amber, blue, blueGrey, cyan, deepPurple, lime, pink, teal} from "@material-ui/core/colors";
import hexToRgba from "hex-to-rgba";
import {mainColor} from "../../config/theme";


export const drawerWidth = 260;


export default function globalStyle(theme) {
    return {
        drawerOpenMargin: {
            marginLeft: drawerWidth,
            transition: theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },

        drawerCloseMargin: {
            transition: theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            marginLeft: 57
        },
        btnWrapper: {
            margin: "20px 0"
        },
        textStroke: {
            textShadow: "-1px 1px 1px #000000, 1px -1px 1px #000000, 1px 1px 1px #000000, -1px -1px 1px #000000",
        },
        block: {
            display: "block"
        },
        primaryCardHeader: {
            background:
                "linear-gradient(60deg, " + theme.palette.primary.light + ", " + theme.palette.primary.main + ")",
            boxShadow:
                "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px " + hexToRgba(theme.palette.primary.dark, '0.4')
        },
        secondaryCardHeader: {
            background:
                "linear-gradient(60deg, " + theme.palette.secondary.light + ", " + theme.palette.secondary.main + ")",
            boxShadow:
                "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px " + hexToRgba(theme.palette.secondary.dark, '0.4')
        },
        warningCardHeader: {
            background:
                "linear-gradient(60deg, " + theme.palette.warning.light + ", " + theme.palette.warning.main + ")",
            boxShadow:
                "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px " + hexToRgba(theme.palette.secondary.dark, '0.4')
        },
        errorCardHeader: {
            background:
                "linear-gradient(60deg, " + theme.palette.error.light + ", " + theme.palette.error.main + ")",
            boxShadow:
                "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px " + hexToRgba(theme.palette.secondary.dark, '0.4')
        },
        successCardHeader: {
            background:
                "linear-gradient(60deg, " + theme.palette.success.light + ", " + theme.palette.success.main + ")",
            boxShadow:
                "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px " + hexToRgba(theme.palette.secondary.dark, '0.4')
        },
        infoCardHeader: {
            background:
                "linear-gradient(60deg, " + theme.palette.info.light + ", " + theme.palette.info.main + ")",
            boxShadow:
                "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px " + hexToRgba(theme.palette.secondary.dark, '0.4')
        },

        skeleton: {
            background: theme.palette.primary.light
        },
        btnSuccess: {
            background: theme.palette.success.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: theme.palette.success.light,
            }
        },
        btnError: {
            background: theme.palette.error.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: theme.palette.error.light,
            }
        },
        btnDelete: {
            background: deepPurple.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: deepPurple.A100,
            }
        },
        btnEdit: {
            background: amber.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: amber.A100,
            }
        },
        btnSave: {
            background: pink.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: pink.A100,
            }
        },
        btnBack: {
            background: blueGrey.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: blueGrey.A100,
            }
        },
        btnPreview: {
            background: cyan.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: cyan.A100,
            }
        },
        btnPublish: {
            background: blue.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: blue.A100,
            }
        },
        btnRestore: {
            background: teal.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: teal.A100,
            }
        },
        btnReload: {
            background: lime.A700,
            color: theme.palette.primary.contrastText,
            "&:hover": {
                background: lime.A100,
            }
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        unPublish: {
            background: `repeating-linear-gradient(45deg,${mainColor[100]},${mainColor[100]} 10px,${mainColor[50]} 10px,${mainColor[50]} 20px)`
        },
        localeSection: {
            marginTop: 20,
            boxShadow: "0 0 5px 5px rgba(0,0,0,.1)",
            "& .MuiTabs-flexContainer": {
                position: "relative",
                zIndex: 1
            },
            "& .Mui-selected": {
                color: theme.palette.primary.contrastText,
                fontWeight: 500
            },
            "& .MuiTabs-indicator": {
                height: '100%'
            }
        },
        deleteStripe: {
            background: `repeating-linear-gradient(45deg,${theme.palette.error.light},${theme.palette.error.light} 10px,${theme.palette.error.dark} 10px,${theme.palette.error.dark} 20px)`
        }
    }
}

import { StyleSheet } from "react-native";
import { typo, borderRadius, palette } from "./base";

export const globalStyles = StyleSheet.create({
    title_emphasis: {
        fontFamily: typo.emphasis,
        fontWeight: "bold",
        color: palette.grey
    },
    title_emphasis_light: {
        fontFamily: typo.emphasis,
        fontWeight: "bold",
        color: "white"
    },
    title_large: {
        fontSize: 35,
        lineHeight: 47
    },
    title_classic: {
        fontSize: 25,
        lineHeight: 37.5
    },
    title_medium: {
        fontSize: 20,
        lineHeight: 30
    },
    p: {
        fontSize: 15,
        color: palette.grey,
        fontFamily: typo.labor
    },
    p_light: {
        fontSize: 15,
        color: "white"
    },
    button: {
        width: "100%",
        borderRadius: borderRadius,
        textTransform: "none"
    },
    textInput: {
        width: "100%",
        borderRadius: borderRadius,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: palette.lightGrey,
        height: 40,
        marginVertical: 10
    },
    noTextTransform: {
        textTransform: "none"
    },
    fontSizeXS: {
        fontSize: 12,
        lineHeight: 18
    }
});
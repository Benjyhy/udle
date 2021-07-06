import { StyleSheet } from "react-native";
import { typo, borderRadius, palette } from "./base";

export const globalStyles = StyleSheet.create({
    title_emphasis: {
        fontFamily: typo.emphasis,
        fontWeight: "bold",
        color: palette.grey
    },
    title_large: {
        fontSize: 35
    },
    title_classic: {
        fontSize: 25
    },
    p: {
        fontSize: 15,
        color: palette.grey
    },
    button: {
        width: "100%",
        borderRadius: borderRadius,
        textTransform: "none"
    },
    textInput: {
        width: "100%",
        borderRadius: borderRadius,
        backgroundColor: "transparent",
        border: `1px solid ${palette.lightGrey}`,
        height: 40,
        marginBottom: "10px",
        marginTop: "10px"
    },
    noTextTransform: {
        textTransform: "none"
    }
});
import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
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
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: palette.lightGrey,
        height: 40,
        marginVertical: 10
    },
    noTextTransform: {
        textTransform: "none"
    }
});
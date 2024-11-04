import { TextInput, View } from "react-native";
import styles from "../styles";
import React from "react";
type Props = {
    onFilter: (text: string) => void;
}

export default function ListFilter({onFilter}: Props) {
    return (
        <View>
            <TextInput autoFocus placeholder="Search" style={styles.filter} onChangeText={(e) => onFilter(e)} />
        </View>
    )
}
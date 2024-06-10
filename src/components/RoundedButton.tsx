import React from "react";
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomColors } from "../theme/AppTheme";

interface Props {
    text: String,
    onPress: () => void
}

export const RoundedButton = ({ text, onPress }: Props) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.roundedButton}
                onPress={() => {
                    Keyboard.dismiss()
                    onPress()
                }}
            >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        alignItems: 'center',
        backgroundColor: CustomColors.primary,
        borderRadius: 15,
        padding: 15,
        marginTop: 25,
        width: '100%',
    },
    textButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});
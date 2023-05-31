import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native"

const LoginScreen = () => {

    const [password, setPassword] = useState('')
    const [focusedInput, setFocusedInput] = useState(null)

    const handlePasswordChange = (text) => {
        setPassword(text)
    }
    
    const handleFocus = (inputName) => {
        setFocusedInput(inputName)
    }

    const handleBlur = () => {
        setFocusedInput(null)
    }
    
    return (
        <View style={styles.section}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Увійти</Text>
                <TextInput placeholder="Адреса електронної пошти" onFocus={() => handleFocus('input2')} onBlur={handleBlur} style={[styles.input, focusedInput === 'input2' ? styles.inputFocused : null]}/>
                <TextInput
                    onChangeText={handlePasswordChange}
                    value={password}
                    secureTextEntry={true}
                    onFocus={() => handleFocus('input3')}
                    onBlur={handleBlur}
                    placeholder="Пароль"
                    style={[styles.input, focusedInput === 'input3' ? styles.inputFocused : null]} />
                <TouchableOpacity style={styles.btnShowPassword}>
                    <Text style={styles.textShowPassword}>Показати</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <View style={styles.wrapperFooterText}>
                    <Text style={styles.subtitle}>
                        Немає акаунту?
                        <Text> </Text>
                        <Text style={styles.subtitleReg}>
                            Зареєструватися
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        height: '100%',
    },
    wrapper: {
        marginTop: 'auto',
        paddingTop: 32,
        paddingBottom: 111,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        marginBottom: 33,
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        textAlign: 'center',
        color: '#212121',
    },
    input: {
        width: 343,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 16,
        padding: 16,
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    inputFocused: {
        borderColor: '#FF6C00',
    },
    btnShowPassword: {
        position: 'absolute',
        top: 183,
        left: 300,
    },
    textShowPassword: {
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        color: '#1B4371',
    },
    btn: {
        marginTop: 27,
        marginBottom: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 343,
        height: 51,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },
    btnText: {
        textAlign: 'center',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        color: '#fff',
    },
    subtitle: {
        textAlign: 'center',
        fontFamily: 'RobotoRegular',
        fontSize: 16,
        color: '#1B4371',
    },
    subtitleReg: {
        textDecorationLine: 'underline',
    }
})

export default LoginScreen
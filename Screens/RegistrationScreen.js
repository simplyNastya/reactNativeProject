import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View, Platform } from "react-native"
import photoAdd from '../assets/btn-add.png'
import photoRemove from '../assets/btn-remove.png'
import userPhoto from '../assets/user-photo.jpg'

const RegistrationScreen = () => {
    return (
        <View style={styles.section}>
            <View style={styles.wrapper}>
                <Image source={userPhoto} style={styles.photo} />
                <TouchableOpacity style={styles.btnAdd}>
                    <Image source={photoAdd} style={styles.svg}/>
                </TouchableOpacity>
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput placeholder="Логін" style={styles.input}/>
                <TextInput placeholder="Адреса електронної пошти" style={styles.input}/>
                <TextInput placeholder="Пароль" style={styles.input}/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>Вже є акаунт? Увійти</Text>
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
        paddingTop: 92,
        paddingBottom: 79,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    photo: {
        position: 'absolute',
        top: -50,
        left: 150,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    btnAdd: {
        position: 'absolute',
        top: 30,
        left: 257,
        backgroundColor: 'transparent',
    },
    title: {
        marginTop: 32,
        marginBottom: 32,
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
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E8E8E8',
        borderRadius: 8,
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
    }
})

export default RegistrationScreen
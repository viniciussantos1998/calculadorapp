import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default ({ onPress, text, size, theme}) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if( size === "double"){
        buttonStyles.push(styles.buttonDouble);
    }
    
    if(theme === "secondary" ){
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    }else if (theme === "accent"){
        buttonStyles.push(styles.buttonAccent);
    }

    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )

}

//definindo as dimensões
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#00FFFF",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius:Math.floor(buttonWidth),
        margin:5,
    },
    text :{
        color:'#000000', 
        fontSize:24,
    },
    textSecondary :{
        color:'#000000',
    },
    buttonDouble:{
        width: screen.width / 2-10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
    },
    buttonSecondary:{
        backgroundColor: "#a6a6a6",
    },
    buttonAccent:{
        backgroundColor: "#ADD8E6",
    }
});

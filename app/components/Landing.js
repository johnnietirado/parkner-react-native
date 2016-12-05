// app/index.js

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Container, Button, Content, Footer} from 'native-base';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'first'
        };
    }

    render() {
        return (
            <Container>
                    <Image
                        style={styles.backgroundImage}
                        source={require('../images/commute.png')}>
                        <View>
                            <Image
                                style={styles.parkner_logo}
                                source={require('../images/Logo_Parkner.png')}
                            ></Image>
                            <Button style={styles.button}>
                                <Text style={styles.buttonText}>LOG IN</Text>
                            </Button>
                            <Button style={styles.button}>
                                <Text style={styles.buttonText}>ACTIVAR CUENTA</Text>
                            </Button>
                            <Button style={styles.button}>
                                <Text style={styles.buttonText}>PEDIR ACCESO</Text>
                            </Button>
                            <Text style={styles.copyright}>
                                Copyright © 2016 Parkner
                            </Text>
                        </View>
                    </Image>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    parknerLanding: {
        backgroundColor: '#FFFFFF' //'#102b95'
    },
    backgroundImage: {
        flex: 1,
        width: ScreenWidth,
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        height: ScreenHeight
    },
    parkner_logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 45,
        marginBottom: 45,
    },
    button: {
        height: 36,
        flexDirection: 'row',
        backgroundColor: '#102b95',
        borderColor: '#102b95',
        borderWidth: 1,
        borderRadius: 0,
        marginBottom: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: ScreenWidth - 10
    },
    parkner_button: {
        backgroundColor: '#102b95',
        alignSelf: 'center',
        height: 36,
        flex: 1,
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    copyright: {
        flex: 1,
        color: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 100
    }
});
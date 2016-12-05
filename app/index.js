// app/index.js

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Badge} from 'native-base';
import Landing from './components/Landing';


export default class Parkner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'first'
        };
    }

    render() {
        const {page} = this.state;
        return (
            <Landing/>
        )
    }
}
import React, { Component } from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import { Container, Content, Text, Body, List, ListItem} from 'native-base';


class SideBar extends Component{
    render(){
        return(
            <Container style={styles.drawerContainer}>
                <Content>
                    <Text>hello</Text>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer:{
        flex: 1 , 
        backgroundColor : '#FFFFFF',
    }
});
export {SideBar};
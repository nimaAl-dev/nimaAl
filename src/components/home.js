import React, { Component } from 'react';
import { Container,Drawer, Header, Content, List, ListItem, Footer, FooterTab, Left, Body, Right, Button, Title, Icon } from 'native-base';
import {SideBar} from './index';



class Home extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        type="displace"
        side="left"
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()} 
      >
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.openDrawer()}>
                  <Icon  name="menu" />
                </Button>
              </Left>
              <Body>
                <Title> NEW BOOKS </Title>
              </Body>
              <Right />   
            </Header>
            <Content>
                
            </Content>
            <Footer>
              <FooterTab>
                <Button>
                  <Icon name="book" />
                </Button>
                <Button active>
                  <Icon active name="home" />
                </Button>
                <Button>
                  <Icon name="text" />
                </Button>
              </FooterTab>
            </Footer>
          </Container>
      </Drawer>  
    );
  }
}

export {Home};
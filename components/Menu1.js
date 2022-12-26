import React from "react";
import styled from "styled-components";
import {Animated, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

class Menu1 extends React.Component {
    state = {
        top: new Animated.Value(900)
    }

    componentDidMount() {
        Animated.spring(this.state.top, {
            toValue: 0
        }).start();
    }

    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover />
                <CloseView>
                    <Ionicons name="ios-close" size={44} color="#546bfb"></Ionicons>
                </CloseView>
                <Content />
            </AnimatedContainer>
        );
    }
}

export default Menu1;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
`

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;
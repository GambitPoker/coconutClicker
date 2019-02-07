import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import AutoGenerators from '../components/AutoGenerators/AutoGenerators';

export default class Game  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoGenerators: {
                gen1 : 1,
                gen2 : 1
            }
        };
    }

    handleClick(){}

    render() {
        return (
            <View style={styles.container}>
                <Text>Game!</Text>
                <AutoGenerators generators={this.state.autoGenerators}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
      color: 'black',
      fontSize: 42,
  }
});

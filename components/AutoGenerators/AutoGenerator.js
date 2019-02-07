import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class AutoGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let autoGenerator = null;
        switch(this.props.type){
            case ('gen1'):
                autoGenerator = <Text className="gen1">Gen1</Text>
            break;
            case ('gen2'):
                autoGenerator = <Text className="gen2">Gen2</Text>
            break;
        }
        return autoGenerator;
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

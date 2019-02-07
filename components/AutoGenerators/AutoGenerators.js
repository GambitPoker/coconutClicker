import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import AutoGenerator from './AutoGenerator';

const AutoGenerators = (props) => {
    let generators = Object.keys(props.generators).map(genKey => {
        return [...Array(props.generators[genKey])].map((_, i) => {
            return <AutoGenerator key = {genKey + i} type={genKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(generators.length === 0){
        //ingreds = <p>Please start adding ingredients!</p>;
    }
    return (
        <View className="AutoGenerators">
            {generators}
        </View>
    );
}

export default AutoGenerators;

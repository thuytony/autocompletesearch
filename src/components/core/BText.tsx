import { Dimension } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

type BTextProps = {
    children?: React.ReactNode | string
}

const BText: React.FC<BTextProps> = (props: BTextProps) => {

    const {
        children,
    } = props;

    return (
        <Text style={styles.text}>{children}</Text>
    );

}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat-ExtraLight'
    },
});

export { BText };
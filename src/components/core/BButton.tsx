import { Dimension } from '@theme';
import React from 'react';
import { StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

type BButtonProps = {
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    children?: React.ReactNode
}

const BButton: React.FC<BButtonProps> = (props: BButtonProps) => {

    const {
        onPress = () => {},
        children,
    } = props;

    return (
        <Pressable style={styles.container} onPress={onPress}>
            {children}
        </Pressable>
    );

}

const styles = StyleSheet.create({
    container: {
        
    },
});

export { BButton };
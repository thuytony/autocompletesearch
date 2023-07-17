import { Dimension } from '@theme';
import React from 'react';
import { StyleSheet, Image, ImageSourcePropType, TouchableNativeFeedback, GestureResponderEvent } from 'react-native';

type IconImageButtonProps = {
    source: ImageSourcePropType,
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const IconImageButton: React.FC<IconImageButtonProps> = (props: IconImageButtonProps) => {

    const {
        source,
        onPress = () => {},
    } = props;

    return (
        <TouchableNativeFeedback style={styles.container} onPress={onPress}>
            <Image style={styles.icon} source={source} />
        </TouchableNativeFeedback>
    );

}

const styles = StyleSheet.create({
container: {
    padding: Dimension.margin.tiny,
    borderRadius: Dimension.radius.base,
},
icon: {
    width: Dimension.icon.small,
    height: Dimension.icon.small,
},
});

export { IconImageButton };
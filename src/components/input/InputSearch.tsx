import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle, ActivityIndicator } from 'react-native';
import { View, InputItem } from '@ant-design/react-native';
import * as icons from '@assets';
import { Dimension, useThemeApp, ColorType } from '@theme';
import { IconImageButton } from '../button';

type InputSearchProps = {
    leftComponent?: ReactNode,
    placeholder?: string,
    value?: string,
    onChangeText?: (text: string) => void,
    style?: ViewStyle,
    editable?: boolean,
    loading?: boolean,
    onClearText?: () => void,
    isShowRight?: boolean,
}

const InputSearch: React.FC<InputSearchProps> = (props: InputSearchProps) => {

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const {
        leftComponent = null,
        placeholder = '',
        value = '1',
        onChangeText = () => {},
        style,
        editable = true,
        loading = false,
        onClearText = () => {},
        isShowRight = false,
    } = props;

    const inputSearchStyle = StyleSheet.flatten([
        styles.container,
        style,
    ]);

    const _renderRightContent = () => {
        if (loading) return <ActivityIndicator />

        if (value && value.length > 0) return <IconImageButton source={icons.icClear} onPress={onClearText} />

        return null;
    }

    return (
      <View style={inputSearchStyle}>
        {leftComponent}
        <View style={styles.inputContainer}>
            <InputItem
                value={value}
                onChange={onChangeText}
                placeholder={placeholder}
                editable={editable}
                style={styles.input}
                numberOfLines={1}
                multiline={false}
            />
        </View>
        {isShowRight && _renderRightContent()}
      </View>
    );

}

const makeStyles = (colors: ColorType) => StyleSheet.create({
    container: {
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: Dimension.radius.large,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Dimension.margin.base,
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        fontSize: Dimension.text.small,
        maxHeight: 30,
        padding: 0,
    },
});

export { InputSearch };
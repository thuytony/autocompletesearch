import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Dimension } from '@theme';

type SearchResultProps = {
    title: string,
    onPress?: () => void,
}

const SearchResult: React.FC<SearchResultProps> = (props: SearchResultProps) => {

  const {
    title = '',
    onPress = () => {},
  } = props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimension.margin.small,
    marginHorizontal: Dimension.margin.base,
  },
});

export { SearchResult };
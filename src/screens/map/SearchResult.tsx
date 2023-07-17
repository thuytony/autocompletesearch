import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from '@ant-design/react-native';
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
      <Button style={styles.container} onPress={onPress}>
        <Text>{title}</Text>
      </Button>
    );

}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimension.margin.small,
    marginHorizontal: Dimension.margin.base,
  },
});

export { SearchResult };
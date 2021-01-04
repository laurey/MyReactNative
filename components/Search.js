import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

function Search() {
  const _alert = (title) => {
    alert(title);
  };

  return (
    <View style={[styles.flex, styles.flexDirection]}>
      <View style={styles.flex}>
        <TextInput
          style={styles.input}
          placeholder="Pleaese input something"
          returnKeyType="search"
        />
      </View>
      <View style={styles.btn}>
        <Text style={styles.search} onPress={(e) => _alert('ff1GGf')}>
          搜索
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#3BF',
  },
  search: {
    color: '#FFF',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#0FC',
    borderRadius: 5,
  },
});

export default Search;

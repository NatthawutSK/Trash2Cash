import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface SearchBarProps {
  placeholder: string;
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 8,
    margin: 16,
  },
  input: {
    fontSize: 16,
  },
});

export default SearchBar;

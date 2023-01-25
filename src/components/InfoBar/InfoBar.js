import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from '../../styles/global.styles';
import styles from './InfoBar.style';

const InfoBar = (props) => {
  const { itemCount } = props;
  return (
    <View style={styles.container}>
      <Text style={globalStyles.bold}>{itemCount} ITEMS IN YOUR BASKET</Text>
    </View>
  );
};

export default InfoBar;

InfoBar.propTypes = {
  itemCount: PropTypes.string.isRequired,
};

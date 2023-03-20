import {ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  color?: ColorValue;
  shape?: Shape;
  size?: number;
}

type Shape = 'square' | 'circle';

const StatusIndicator = ({
  color = '#90EE90',
  shape = 'circle',
  size = 15,
}: Props): JSX.Element => {
  const styleAccordingProps = {
    borderRadius: shape === 'circle' ? 50 : shape === 'square' ? 2 : 50,
    backgroundColor: color,
    height: size,
    width: size,
  };
  return <View style={[styles.indicator, styleAccordingProps]} />;
};

export default StatusIndicator;

const styles = StyleSheet.create({
  indicator: {
    // borderRadius: 50,
  },
});

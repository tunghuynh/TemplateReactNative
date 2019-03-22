import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking
} from 'react-native';

import styles from './Settings.styles';

const Settings = () => (
  <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.h1}>Settings</Text>
      <Text style={[styles.text, styles.p]}>This template uses images
        from <Text onPress={() =>
          Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
          style={styles.linkCredits}
        >
          Mental Floss </Text> web site.
      </Text>
      <Text style={[styles.text, styles.p]}>This tamplate also uses icon
        fonts from <Text onPress={() =>
        Linking.openURL('https://github.com/oblador/react-native-vector-icons')}
        style={styles.linkCredits}
      >
        React Native Vector Icons</Text>.
      </Text>
    </ScrollView>
);

export default Settings;

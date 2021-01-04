import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TabBarIOS,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  message: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  messageTitle: {
    fontSize: 18,
    color: '#1899ff',
    marginBottom: 5,
  },
  contact: {
    height: 40,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {tab: 'message'};
  }

  changeTab = (tab) => {
    this.setState({
      tab,
    });
  };

  render() {
    const {navigate, goBack} = this.props.navigation;
    const {tab} = this.state;

    return (
      <TabBarIOS
        style={styles.flex}
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Message"
          selected={tab === 'message'}
          onPress={this.changeTab.bind(this, 'message')}>
          <ScrollView>
            <View style={styles.message}>
              <Text style={styles.messageTitle}>Title</Text>
              <Text>Content</Text>
              <Text>
                auto (default) - distributes items dynamically according to the
                user interface idiom. In a horizontally compact environment
                (e.g. iPhone 5) this value defaults to fill, in a horizontally
                regular one (e.g. iPad) it defaults to center.
              </Text>
            </View>
          </ScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Contacts"
          selected={tab === 'contacts'}
          onPress={this.changeTab.bind(this, 'contacts')}>
          >
          <ScrollView>
            <Text style={styles.contact}>
              <Text>Name: Mooom</Text>
              <Text>Phone: 1919884843</Text>
            </Text>
            <Text style={styles.contact}>
              <Text>Name: Qoom</Text>
              <Text>Phone: 19198843</Text>
            </Text>
            <Text style={styles.contact}>
              <Text>Name: Nooom</Text>
              <Text>Phone: 1919832443</Text>
            </Text>
            <Text style={styles.contact}>
              <Text>Name: Mol</Text>
              <Text>Phone: 1913484843</Text>
            </Text>
          </ScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Discover"
          selected={tab === 'discover'}
          onPress={this.changeTab.bind(this, 'discover')}>
          >
          <ScrollView style={styles.flex}>
            <View>
              <Text>This is Jane's profile screen</Text>
              <Button
                title="Go to Details"
                onPress={() =>
                  navigate('Detail', {name: 'Jane', now: Date.now()})
                }
              />
              <Button
                title="Go to Animated Demo Screen"
                onPress={() =>
                  navigate('AnimateDemo', {name: 'Jane', now: Date.now()})
                }
              />
              <Button title="Go back" onPress={() => goBack()} />
            </View>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

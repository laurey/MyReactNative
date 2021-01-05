import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
    height: 70,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  contactMessage: {
    height: 30,
  },
});

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {tab: props.route.params.tab || 'message'};
  }

  changeTab = (tab) => {
    // this.setState({
    //   tab,
    // });
  };

  render() {
    const {navigate, goBack} = this.props.navigation;
    const {tab} = this.state;

    return (
      <Tab.Navigator
        style={styles.flex}
        initialRouteName={tab}
        barTintColor="darkslateblue">
        <Tab.Screen
          name="Message"
          // selected={tab === 'message'}
          onPress={this.changeTab.bind(this, 'message')}>
          {(props) => (
            <ScrollView>
              <View style={styles.message}>
                <Text style={styles.messageTitle}>Title</Text>
                <Text>Content</Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
                <Text>
                  auto (default) - distributes items dynamically according to
                  the user interface idiom. In a horizontally compact
                  environment (e.g. iPhone 5) this value defaults to fill, in a
                  horizontally regular one (e.g. iPad) it defaults to center.
                </Text>
              </View>
            </ScrollView>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Contacts"
          // selected={tab === 'contacts'}
          onPress={this.changeTab.bind(this, 'contacts')}>
          {(props) => (
            <ScrollView style={styles.flex}>
              <View style={[styles.flex, styles.contact]}>
                <Text style={styles.contactMessage}>Name: Mooom</Text>
                <Text style={styles.contactMessage}>Phone: 1919884843</Text>
              </View>
              <View style={[styles.flex, styles.contact]}>
                <Text style={styles.contactMessage}>Name: Qoom</Text>
                <Text style={styles.contactMessage}>Phone: 19198843</Text>
              </View>
              <View style={[styles.flex, styles.contact]}>
                <Text style={styles.contactMessage}>Name: Nooom</Text>
                <Text style={styles.contactMessage}>Phone: 1919832443</Text>
              </View>
              <View style={[styles.flex, styles.contact]}>
                <Text style={styles.contactMessage}>Name: Mol</Text>
                <Text style={styles.contactMessage}>Phone: 1913484843</Text>
              </View>
            </ScrollView>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Discover"
          // selected={tab === 'discover'}
          onPress={this.changeTab.bind(this, 'discover')}>
          {(props) => (
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
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}

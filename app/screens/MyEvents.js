import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

import EventCalendar from 'react-native-events-calendar';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

let { width } = Dimensions.get('window');

export const MyEvents = () => {
  const [events, setEvents] = useState([
    {
      start: '2020-01-01 00:00:00',
      end: '2020-01-02 00:00:00',
      title: '',
      summary: '',
    },
  ]);

  const eventClicked = (event) => {
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenContainer style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}
          initDate={'2020-01-01'}
          scrollToFirst
        />
      </ScreenContainer>
    </SafeAreaView>
  );
};
// export default MyEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

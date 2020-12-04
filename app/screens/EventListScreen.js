import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('https://a0o9ic8hrc.execute-api.us-east-1.amazonaws.com/test/events')
      .then((response) => {
        setEvents(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <ScreenContainer style={styles.container}>
      <Title style={styles.eventTitle}>Browse Events</Title>
      <FlatList
        data={events}
        renderItem={({ item, index }) => {
          return (
            <Card key={index} style={styles.fullCard}>
              <Card.Content>
                <Title style={styles.cardTitle}>{item.name}</Title>
                <br />
                <Paragraph>
                  <b>Date:</b> {item.date}
                </Paragraph>
                <Paragraph>
                  <b>Time:</b> {item.time}
                </Paragraph>
                <Paragraph>
                  <b>Duration:</b> {item.duration}
                </Paragraph>
                <Paragraph>
                  <b>Description:</b> {item.description}
                </Paragraph>
              </Card.Content>
            </Card>
          );
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 20,
  },
  fullCard: {
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 30,
  },
  eventTitle: {
    fontSize: 24,
  },
});

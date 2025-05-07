import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const user = () => {
  const { user }: { user: any } = useLocalSearchParams();
  const item = JSON.parse(user);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: item.picture }} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>{item.name}</Text>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <MaterialIcons name="email" size={24} color="#4a69bd" />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>{item.email}</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.detailRow}>
          <MaterialIcons name="phone" size={24} color="#4a69bd" />
          <View style={styles.detailText}>
            <Text style={styles.detailLabel}>Phone</Text>
            <Text style={styles.detailValue}>{item.phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          This is a simple user profile displaying basic contact information.
        </Text>
      </View>
    </ScrollView>
  );
};

export default user;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f6fa',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4a69bd',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#2f3640',
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailText: {
    marginLeft: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2f3640',
  },
  separator: {
    height: 1,
    backgroundColor: '#dfe6e9',
    marginVertical: 8,
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.balanceLabel}>Total Balance</Text>
      <Text style={styles.balance}>$12,480.50</Text>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.cardValue}>$4,200</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Expenses</Text>
          <Text style={styles.cardValue}>$1,580</Text>
        </View>
      </View>
      <Text style={styles.hint}>Welcome to PrepAce — track spending, budgets, and savings.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  balanceLabel: {
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 6,
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0f172a',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  card: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#eef2ff',
    minWidth: 140,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#6366f1',
    fontSize: 12,
  },
  cardValue: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  hint: {
    marginTop: 28,
    color: '#6b7280',
    textAlign: 'center',
  },
});

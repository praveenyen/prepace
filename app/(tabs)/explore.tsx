import { StyleSheet, Text, View } from 'react-native';

export default function TransactionsScreen() {
  const transactions = [
    { id: '1', title: 'Groceries', amount: '-$84.30' },
    { id: '2', title: 'Salary', amount: '+$3,500.00' },
    { id: '3', title: 'Coffee', amount: '-$4.50' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Transactions</Text>
      {transactions.map((t) => (
        <View key={t.id} style={styles.txRow}>
          <Text style={styles.txTitle}>{t.title}</Text>
          <Text style={styles.txAmount}>{t.amount}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2f3',
  },
  txTitle: {
    color: '#111827',
  },
  txAmount: {
    fontWeight: '600',
  },
});

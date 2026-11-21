import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useWallet } from '../../context/WalletContext';
import { notify } from '../../utils/notify';

export default function ProfileScreen() {
  const { coins, addCoins } = useWallet();
  const [notifications, setNotifications] = useState(true);

  const handleRecharge = () => {
    addCoins(100);
    notify('Achat simulé', '+100 pièces ajoutées.');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.header}>Profil</Text>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Solde de pièces</Text>
          <View style={styles.balanceRow}>
            <Ionicons name="diamond" size={24} color="#FFD60A" />
            <Text style={styles.balance}>{coins}</Text>
          </View>
          <Pressable
            style={({ hovered }: any) => [styles.rechargeBtn, hovered && styles.rechargeHover]}
            onPress={handleRecharge}
          >
            <Text style={styles.rechargeText}>Recharger</Text>
          </Pressable>
        </View>

        <Text style={styles.section}>Paramètres</Text>

        <Row
          label="Notifications"
          right={
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#333', true: '#FF3B5C' }}
            />
          }
        />
        <Row label="Langue" value="Français" onPress={() => notify('Langue', 'Bientôt disponible.')} />
        <Row label="Confidentialité" onPress={() => notify('Confidentialité', 'Bientôt disponible.')} />
        <Row label="Se déconnecter" danger onPress={() => notify('Déconnexion', 'Simulation.')} />
      </View>
    </SafeAreaView>
  );
}

function Row({
  label,
  value,
  onPress,
  right,
  danger,
}: {
  label: string;
  value?: string;
  onPress?: () => void;
  right?: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ hovered }: any) => [styles.row, hovered && !!onPress && styles.rowHover]}
    >
      <Text style={[styles.rowLabel, danger && { color: '#FF3B5C' }]}>{label}</Text>
      {right ?? (value ? <Text style={styles.rowValue}>{value}</Text> : null)}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 600 : undefined,
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    paddingVertical: 12,
  },
  balanceCard: {
    backgroundColor: '#161616',
    borderRadius: 16,
    padding: 20,
    gap: 8,
  },
  balanceLabel: {
    color: '#888',
    fontSize: 13,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  balance: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
  },
  rechargeBtn: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  rechargeHover: {
    opacity: 0.85,
  },
  rechargeText: {
    color: '#000',
    fontWeight: '700',
  },
  section: {
    color: '#888',
    fontSize: 13,
    marginTop: 28,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#222',
  },
  rowHover: {
    backgroundColor: '#111',
  },
  rowLabel: {
    color: '#fff',
    fontSize: 16,
  },
  rowValue: {
    color: '#888',
    fontSize: 16,
  },
});

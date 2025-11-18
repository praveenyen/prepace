import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading (assets, auth, remote config, etc.)
    const t = setTimeout(() => {
      // Replace splash with the main tab layout
      router.replace('/(tabs)');
    }, 1600);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.brandContainer}>
        <View style={styles.logoWrap}>
          <Image source={require('@/assets/images/splash-icon.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>PrepAce</Text>
        <Text style={styles.subtitle}>Smart Money Manager</Text>
      </View>
      <View style={styles.footerAccent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // nice deep navy
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandContainer: {
    alignItems: 'center',
    gap: 12,
  },
  logoWrap: {
    width: 128,
    height: 128,
    borderRadius: 34,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  logo: {
    width: 84,
    height: 84,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: '700',
    color: '#E6F6F5',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 14,
    color: '#9FBFC0',
  },
  footerAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(14,165,164,0.06)',
  },
});

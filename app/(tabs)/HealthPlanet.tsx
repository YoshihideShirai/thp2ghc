import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Button, StyleSheet } from 'react-native';
import { AuthConfiguration, authorize } from 'react-native-app-auth';

const config:AuthConfiguration = {
    clientId: '2548.h6HtCfzqXc.apps.healthplanet.jp',
    redirectUrl: 'http://localhost:8081/HealthPlanet',
    scopes: ['innerscan'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.healthplanet.jp/oauth/auth',
        tokenEndpoint: 'https://www.healthplanet.jp/oauth/token',
    },
};

export default function HealthPlanet() {
    return <ParallaxScrollView
        headerImage={
            <IconSymbol
                size={310}
                color="#808080"
                name="chevron.left.forwardslash.chevron.right"
                style={styles.headerImage}
            />
        }
        headerBackgroundColor={{
            dark: '#353636',
            light: '#D0D0D0'
        }}
    >
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Health Planet</ThemedText>
        </ThemedView>
        <Button title="Sign In" onPress={signIn} />
    </ParallaxScrollView>
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});

const signIn = async () => {
    try {
        const result = await authorize(config);
        console.log('Access Token:', result.accessToken);
        console.log('ID Token:', result.idToken);
    } catch (error) {
        console.error('OAuth Error:', error);
    }
};

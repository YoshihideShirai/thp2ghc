import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { AuthRequestConfig, DiscoveryDocument, useAuthRequest } from 'expo-auth-session';
import { Button, StyleSheet } from 'react-native';

const config:AuthRequestConfig = {
    clientId: '2548.h6HtCfzqXc.apps.healthplanet.jp',
    redirectUri: 'http://localhost:8081/HealthPlanet',
    scopes: ['innerscan'],
};

const discovery:DiscoveryDocument = {
    authorizationEndpoint: 'https://www.healthplanet.jp/oauth/auth',
    tokenEndpoint: 'https://www.healthplanet.jp/oauth/token',
}

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
        const [request, response, promptAsync] = useAuthRequest(config, discovery);
        if (response != null) {
            if (response.type == "success") {
                const auth = response.authentication;
                if (auth != null) {
                    console.log('Access Token:', auth.accessToken);
                    console.log('ID Token:', auth.idToken);
                }
            }
        }
    } catch (error) {
        console.error('OAuth Error:', error);
    }
};

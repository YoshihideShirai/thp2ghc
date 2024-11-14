import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { StyleSheet } from 'react-native';

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

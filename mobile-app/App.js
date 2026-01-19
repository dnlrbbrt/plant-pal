import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system/legacy';

export default function App() {
  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    async function loadAssets() {
      try {
        // Load the HTML file asset
        const htmlAsset = Asset.fromModule(require('./assets/index.html'));
        await htmlAsset.downloadAsync();

        // Load the JS file asset (renamed to .txt to avoid execution)
        const jsAsset = Asset.fromModule(require('./assets/app_code.txt'));
        await jsAsset.downloadAsync();

        // Read file contents
        let htmlV = await FileSystem.readAsStringAsync(htmlAsset.localUri);
        const jsV = await FileSystem.readAsStringAsync(jsAsset.localUri);

        // Inject JS into HTML
        // Note: we replace the external script line with the inline script
        // The regex looks for <script src="app.js"></script>
        const scriptTag = '<script src="app.js"></script>';
        const inlineScript = `<script>${jsV}</script>`;

        if (htmlV.includes(scriptTag)) {
          htmlV = htmlV.replace(scriptTag, inlineScript);
        } else {
          // Fallback: append to body if not found (safety)
          htmlV = htmlV.replace('</body>', `${inlineScript}</body>`);
        }

        setHtmlContent(htmlV);
      } catch (error) {
        console.error("Error loading assets:", error);
      }
    }

    loadAssets();
  }, []);

  if (!htmlContent) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ec4899" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5', // pink-50
  },
  webview: {
    flex: 1,
  },
});

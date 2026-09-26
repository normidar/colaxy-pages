# Privacy Policy (AI LABO)

_Last updated: September 26, 2026_

"AI LABO" (the "App") is a utility app that lets an AI operate device features on the user's behalf. This policy explains what information the App handles.

## 1. How the App works (BYOK and the app-provided AI model)

The App offers two ways to use it:

- BYOK (bring your own key): In Settings, you enter your own API key for one of the following providers: OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini), or xAI (Grok). This mode requires no login and does not go through any server operated by the developer.
- App-provided AI model (subscription): After signing in (see section 4) and subscribing, you can use an AI model the developer provides without obtaining your own API key. In this mode, your chat content is sent to the AI provider through a backend server the developer operates (running on Google Cloud Run).

## 2. Handling of API keys (BYOK mode)

An API key you enter in BYOK mode is stored only in encrypted on-device storage (iOS Keychain / Android Keystore, via flutter_secure_storage). It is never sent to the developer or any other third party.

## 3. Information sent to your AI provider

When you use the chat feature, the messages you type, any images you attach, and the results of any tool the AI runs are sent to an AI provider. In BYOK mode this goes directly to the provider you selected; in app-provided AI model mode it goes through the developer's backend server to OpenRouter. How that information is handled is governed by the privacy policy of whichever provider actually processes it:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

The App asks for your explicit agreement to this on first launch.

Web search: when the AI uses the web search tool, the search keywords are sent directly from your device to DuckDuckGo (<https://duckduckgo.com/privacy>). Only the search keywords are sent (apart from the technical information any internet request carries, such as your IP address).

## 4. Account and subscription

The following only applies if you use the app-provided AI model. None of this happens if you only use BYOK mode.

- Sign-in: You can sign in with Google, Apple, or an email address and password (via Firebase Authentication). Only your email address and an identifier issued by your chosen sign-in method are collected.
- Backend server: Once signed in, your chat requests pass through a backend server the developer operates (Google Cloud Run, running on Google Cloud infrastructure) so it can check your subscription status and track monthly usage.
- Subscription management: Purchases, restores, and subscription status are handled by RevenueCat (<https://www.revenuecat.com/privacy>). Your App Store / Google Play purchase information is shared with RevenueCat for this purpose.

## 5. Access to device features

At your request, the AI can operate the following device features: flashlight, vibration, text-to-speech, location, Bluetooth scanning, reading Wi-Fi/battery/device information and sensors, reading and writing the clipboard, camera, QR code scanning, audio recording/playback, speech-to-text, image generation, creating/reading/listing/deleting files, reading and writing an app-private database, saving images to the photo library, sharing via the system share sheet, opening other apps, URLs, the dialer or the messaging app, and scheduling alarms/tasks.

- The results of these actions (photos taken, audio recorded, files created, etc.) are stored only on your device. None of it is sent to any server operated by the developer.
- By default, tools run without an extra in-app confirmation. In the Tools tab you can set each tool to "Require approval" (a confirmation screen is shown before it runs) or "Block" (the AI can never run it). Separately, the operating system's own permission dialogs (camera, microphone, location, etc.) are always shown before the App can access those features for the first time.
- Phone calls and text messages only go as far as opening the dialer / messaging app with the content pre-filled - the App never places a call or sends a message on its own; you always perform the final action yourself.
- Location, Bluetooth, and similar data are only accessed when the AI requests them at your instruction; the App does not continuously access them in the background.

## 6. Analytics and crash reporting

The App uses Firebase Analytics (aggregate usage statistics) and Firebase Crashlytics (the type and location of a crash, if one occurs) to help improve the App. Neither of these ever receives your actual content: chat text, tool call arguments (file contents, location coordinates, search queries, etc.), or API keys. You can opt out of Firebase Analytics at any time from Settings.

## 7. Advertising

If you use BYOK mode for free (without an active subscription), the App shows banner ads via Google AdMob (subscribers never see ads). On iOS, the App asks for tracking permission (App Tracking Transparency) on first launch; you'll only see personalized ads if you grant it. If you decline, you'll only see non-personalized ads.

## 8. Sharing with third parties

The developer does not sell your personal information to third parties. Sharing with the AI providers, DuckDuckGo, RevenueCat, and Google (Firebase/AdMob) described in sections 3-7 above is limited to what each of those services needs to operate.

## 9. Children's privacy

The App is not directed at children under 13.

## 10. Contact

For questions about this policy, contact:

normidar7@gmail.com

## 11. Changes to this policy

This policy may be updated from time to time. Material changes will be announced in the App or on this page.

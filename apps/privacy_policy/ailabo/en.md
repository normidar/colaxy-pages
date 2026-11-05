# Privacy Policy (AI LABO)

_Last updated: November 5, 2026_

"AI LABO" (the "App") is a utility app that lets an AI operate device features on the user's behalf. This policy explains what information the App handles.

## 1. How the App works (subscription and your own API key)

The App offers two ways to use it:

- App-provided AI model (subscription, the default): After signing in (see section 4) and subscribing, you can use AI models the developer provides without obtaining your own API key. In this mode, your chat content and the AI features described in section 3 pass through a backend server the developer operates (running on Google Cloud Run) to OpenRouter.
- Your own API key (BYOK, "bring your own key", available in Advanced mode): In Settings, you enter your own API key for one of the following providers: OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini), or xAI (Grok). This mode requires no login, and requests go directly from your device to the provider without passing through any server operated by the developer.

## 2. Handling of API keys (BYOK mode)

An API key you enter in BYOK mode is stored only in encrypted on-device storage (iOS Keychain / Android Keystore, via flutter_secure_storage). It is never sent to the developer or any other third party.

## 3. Information sent outside your device

### AI providers

When you use the chat feature, the messages you type, the images and files you attach, and the results of the tools the AI runs (for example, a photo it took, the text of a file or web page it read, your location, or calendar events and contacts it looked up) are sent to an AI provider so the AI can respond. Some AI features also send:

- Image generation and photo editing: the prompt and, when editing, the reference photos you or the AI chose.
- Video generation: the prompt and any photos used as the first or last frame.
- Transcription: the audio file being transcribed.
- AI memory: text the AI saves to or searches in its memory is converted into numeric vectors (embeddings) by an AI provider. The memory itself is stored only on your device.

With your own API key, this goes directly to the provider you selected (transcription and video generation are available only with an OpenRouter key). With the subscription, it goes through the developer's backend server to OpenRouter; the backend passes this content along and does not keep it (what the backend does keep is described in section 4). How the information is handled is governed by the privacy policy of whichever provider actually processes it:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

The App asks for your explicit agreement to this on first launch.

### Websites and other services the App contacts directly

- Web search: the search keywords are sent directly from your device to DuckDuckGo (<https://duckduckgo.com/privacy>), and, if that returns nothing, to Wikipedia (Wikimedia Foundation, <https://foundation.wikimedia.org/wiki/Policy:Privacy_policy>). Only the search keywords are sent (apart from the technical information any internet request carries, such as your IP address).
- Reading web pages and calling web APIs: when the AI reads a web page or sends a web request (like the curl command), your device connects directly to the site the AI chose and sends what the request contains, which can include a file from the App's folder if the AI uploads one. That site's own privacy policy applies. The App only connects to public internet addresses, never to devices on your local network.
- Addresses and places: address lookups use your operating system's geocoding service (Apple on iOS, Google on Android), and nearby-place searches (iOS only) use Apple Maps. The address or search words, and your location when searching near you, are sent to Apple or Google.
- Speech-to-text uses your operating system's speech recognition service (Apple / Google), which may process your voice on their servers.

## 4. Account and subscription

The following only applies if you use the app-provided AI model. None of this happens if you only use your own API key.

- Sign-in: You can sign in with Google, Apple, or an email address and password (via Firebase Authentication). Only your email address and an identifier issued by your chosen sign-in method are collected.
- Backend server: Once signed in, your AI requests pass through a backend server the developer operates (Google Cloud Run, running on Google Cloud infrastructure) so it can check your subscription status and track your monthly usage (the cost of the AI you used). Instead of your account ID, the backend gives OpenRouter a pseudonymous ID derived from it.
- Request records: for each AI request, the backend records only its outline: the kind (chat, image, video, audio or embedding), the model, the result or error code, how long it took, the number of messages, whether it contained an image, the names of the tools the AI called, and the number of tokens and the cost. The content of your messages, images, audio and tool results is never recorded. These records are deleted after 90 days and are used for support, troubleshooting, preventing abuse and monitoring costs.
- Video generation: to settle the charge for a video, the backend stores the job's ID, the model, the estimated cost and timestamps. The finished video is passed from OpenRouter to your device and is not stored on the server.
- App verification: to make sure requests come from a genuine copy of the App, the App uses Firebase App Check, which relies on Google Play Integrity (Android) and Apple App Attest (iOS). This sends information about the app and device integrity to Google or Apple, not your content.
- Subscription management: Purchases, restores, and subscription status are handled by RevenueCat (<https://www.revenuecat.com/privacy>). Your App Store / Google Play purchase information is shared with RevenueCat for this purpose.
- Referral codes: When you create or enter a referral code, we store on our server which account referred which, along with your own code, to calculate the bonus (extra monthly allowance). The referring account's app shows, for each person it referred, a sequence number, the date they were referred, their current AI plan (Mini / Standard) and the resulting bonus percentage. Email addresses and other details that could identify either side are never shown to the other. Deleting your account deletes your referral code.
- Feature voting and suggestions: when you vote or suggest a feature under "Vote for what's next", we store on our server which account voted for which feature on which day, and the text of your suggestion, to enforce the once-a-day limit and count votes. Suggestions are reviewed before publication and may be shown in the list as an AI-translated title (no account details are shown). Deleting your account deletes your vote and suggestion records (vote totals and published titles remain).
- Deleting your account: In Settings > Account & subscription > Delete account, you can delete your sign-in account together with everything the server keeps for it (subscription status, monthly usage, request records, video generation records, referral code, votes and suggestions) and your customer record at RevenueCat. This does not cancel a subscription; cancel it in your App Store or Google Play settings. If you can no longer open the App, see <https://normidar.com/ailabo/delete-account.html>.

## 5. Access to device features

At your request, the AI can operate the following device features: flashlight, vibration, text-to-speech, screen brightness, volume (Android), location and address lookup, compass, air pressure and step count, Bluetooth (scanning, and reading from or writing to a device), reading and writing NFC tags, reading Wi-Fi/battery/device information and sensors, reading and writing the clipboard, camera (photos and videos), QR code scanning, audio recording/playback and transcription, speech-to-text, reading, adding, changing and deleting calendar events, searching and adding contacts, generating images and videos and editing photos, files in the App's folder (creating, reading, including PDF and Office documents, editing, renaming, copying, searching and deleting), app-private databases, a to-do list, the AI's memory, showing web pages the AI made (served only to the App itself on your device), saving to the photo library, sharing via the system share sheet, opening other apps, URLs, maps, the dialer or the messaging app, scheduling alarms/tasks, and asking you questions with choices.

- The results of these actions (photos, recordings, videos, files, databases, the to-do list, the AI's memory) and your chat history are stored only on your device. They are not uploaded to any server operated by the developer; they leave your device only as described in section 3 (sent to the AI provider when the AI reads or uses them, or to a site the AI sends a request to).
- Text and files you share to the App from other apps are only placed in the message box of a new chat (files are copied into the App's folder). Nothing is sent until you send the message yourself.
- By default, tools run without an extra in-app confirmation. In Settings > Tool permissions you can set each tool to "Ask" (a confirmation screen is shown before it runs) or "Deny" (the AI can never run it). Regardless of these settings, the App always asks you first before a request that could send your data off the device once the conversation has seen outside content (such as a web page or a QR, NFC or Bluetooth reading) together with your personal data, and before actions that cannot be undone, such as overwriting a file or deleting a calendar event. Separately, the operating system's own permission dialogs (camera, microphone, location, calendar, contacts, etc.) are always shown before the App can access those features for the first time.
- Phone calls and text messages only go as far as opening the dialer / messaging app with the content pre-filled - the App never places a call or sends a message on its own; you always perform the final action yourself.
- Location, Bluetooth, calendar, contacts and similar data are only accessed when the AI requests them at your instruction; the App does not continuously access them in the background. While the AI is working on a reply, it may keep running for a while after you leave the App; the notification shown then contains only its status, not your chat content. Scheduled tasks run only while the App is open.

## 6. Analytics and crash reporting

The App uses Firebase Analytics (usage statistics, such as which features and tools are used, model names, token counts and errors) and Firebase Crashlytics (the type and location of a crash, if one occurs) to help improve the App. Neither of these ever receives your actual content: chat text, tool call arguments (file contents, location coordinates, search queries, etc.), or API keys. When you are signed in, your account ID (a pseudonymous Firebase identifier, not your email address) is attached so that problems can be matched with the server records in section 4 when supporting you. You can turn both off at any time in Settings > Send usage data.

## 7. Advertising

If you use your own API key without a subscription, the App shows banner ads via Google AdMob (subscribers, including the "Ad-free" plan, never see ads). In regions where consent is required (such as the EEA and the UK), Google's consent form is shown first and ads are loaded only after you make a choice. On iOS, the App asks for tracking permission (App Tracking Transparency) before showing ads; you'll only see personalized ads if you grant it. If you decline, you'll only see non-personalized ads.

## 8. Sharing with third parties

The developer does not sell your personal information to third parties. Sharing with the AI providers, DuckDuckGo and Wikipedia, the sites the AI contacts at your request, Apple and Google (address lookup, maps, speech recognition, app verification), RevenueCat, and Google (Firebase/AdMob) described in sections 3-7 above is limited to what each of those services needs to operate.

## 9. Children's privacy

The App is not directed at children under 13.

## 10. Contact

For questions about this policy, contact:

normidar7@gmail.com

## 11. Changes to this policy

This policy may be updated from time to time. Material changes will be announced in the App or on this page.

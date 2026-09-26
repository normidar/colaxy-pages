# 隐私政策（AI LABO）

_最后更新日期：2026年9月26日_

“AI LABO”（以下称“本应用”）是一款让 AI 代表用户操作设备功能的工具类应用。本政策说明本应用会处理哪些信息。

## 1. 本应用的运作方式（BYOK 与应用提供的 AI 模型）

本应用提供两种使用方式：

- BYOK（自带密钥）：您可在设置中输入自己的 API 密钥，可选择 OpenRouter、Anthropic（Claude）、OpenAI（ChatGPT）、Google（Gemini）或 xAI（Grok）。此方式无需登录，也不会经过开发者运营的任何服务器。
- 应用提供的 AI 模型（订阅制）：登录（见第4条）并订阅后，您无需自行获取API 密钥即可使用开发者提供的 AI 模型。在此方式下，您的聊天内容会通过开发者运营的后端服务器（运行于 Google Cloud Run）发送给 AI 服务商。

## 2. API 密钥的处理（BYOK 模式）

在 BYOK 模式下输入的 API 密钥仅保存在设备内的加密存储中（iOS Keychain / Android Keystore，通过 flutter_secure_storage）。不会发送给开发者或任何其他第三方。

## 3. 发送给 AI 服务商的信息

使用聊天功能时，您输入的消息、附加的图片，以及 AI 执行工具后得到的结果会发送给 AI 服务商。在 BYOK 模式下，信息直接发送给您选择的服务商；在应用提供的 AI 模型模式下，信息会经由开发者的后端服务器发送给 OpenRouter。信息的处理方式遵循实际处理该信息的服务商自身的隐私政策：

- OpenRouter：<https://openrouter.ai/privacy>
- Anthropic（Claude）：<https://www.anthropic.com/legal/privacy>
- OpenAI（ChatGPT）：<https://openai.com/policies/privacy-policy>
- Google（Gemini）：<https://policies.google.com/privacy>
- xAI（Grok）：<https://x.ai/legal/privacy-policy>

本应用会在首次启动时展示同意画面，征求您对此项信息发送的同意。

网络搜索：当 AI 使用网络搜索工具时，搜索关键词会从您的设备直接发送给 DuckDuckGo（<https://duckduckgo.com/privacy>）。发送的仅为搜索关键词（以及任何网络请求都会附带的 IP 地址等技术信息）。

## 4. 账户与订阅

以下内容仅适用于使用应用提供的 AI 模型的情况。如果您只使用 BYOK 模式，则不会发生以下任何情况。

- 登录：您可以使用 Google、Apple 或电子邮箱与密码登录（通过 FirebaseAuthentication）。仅收集您的电子邮箱地址，以及登录方式所签发的标识符。
- 后端服务器：登录后，您的聊天请求会经过开发者运营的后端服务器（Google Cloud Run，运行于 Google Cloud 基础设施之上），用于确认订阅状态及管理每月使用量。
- 订阅管理：购买、恢复购买及订阅状态的确认委托给 RevenueCat（<https://www.revenuecat.com/privacy>）处理。您在 App Store / Google Play的购买信息会通过 RevenueCat 进行关联。

## 5. 对设备功能的访问

根据您的请求，AI 可以操作以下设备功能：手电筒、振动、语音合成、位置信息、蓝牙扫描、读取 Wi-Fi/电池/设备信息与传感器、读写剪贴板、拍照、扫描二维码、录音与播放、语音识别、图片生成、创建/读取/列出/删除文件、读写应用专属数据库、将图片保存到相册、通过系统分享面板分享内容、打开其他应用/网址/拨号应用/短信应用，以及设置闹钟与预约任务。

- 这些操作的结果（拍摄的照片、录制的音频、创建的文件等）仅保存在您的设备本地，不会发送到开发者运营的任何服务器。
- 默认情况下，各工具执行时不会在应用内额外弹出确认。您可以在“工具”页中将每个工具单独设置为“需确认”（执行前显示确认画面）或“禁止”（AI 无法执行）。此外，首次访问相机、麦克风、位置信息等功能时，系统自带的权限对话框一定会显示。
- 拨打电话与发送短信仅限于打开拨号应用 / 短信应用并预填内容，实际的拨打或发送操作始终由您本人完成，本应用不会擅自拨打电话或发送短信。
- 位置信息、蓝牙等信息仅在 AI 按您的指示请求时才会获取一次，不会在后台持续获取。

## 6. 数据分析与崩溃报告

本应用使用 Firebase Analytics（汇总的使用情况统计）和 Firebase Crashlytics（崩溃发生时的错误类型与发生位置）以改进应用功能。这两者都不会接收您的实际内容：聊天正文、工具调用参数（文件内容、位置坐标、搜索关键词等）或API 密钥。您可以随时在设置中选择停用 Firebase Analytics。

## 7. 广告

如果您以免费方式使用 BYOK 模式（未订阅），本应用会通过 Google AdMob展示横幅广告（订阅用户不会看到广告）。在 iOS 上，本应用会在首次启动时请求跟踪权限（App Tracking Transparency），仅在您授权后才会展示个性化广告；如果您拒绝，则只会展示非个性化广告。

## 8. 向第三方提供信息

开发者不会向第三方出售您的个人信息。上文第3至7条中提到的向 AI 服务商、DuckDuckGo、RevenueCat 及 Google（Firebase/AdMob）提供信息，仅限于这些服务运作所必需的范围。

## 9. 儿童隐私

本应用不面向13岁以下儿童。

## 10. 联系方式

如对本政策有任何疑问，请通过以下方式联系我们：

normidar7@gmail.com

## 11. 本政策的变更

本政策可能会不时更新。如有重大变更，将通过应用内或本页面通知您。

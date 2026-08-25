# colaxy-pages 改善計画

normidar.com (Coin Galaxy) のマーケティングサイト改善バックログ。PR #7 (`improve-pages-site`) で最初の4点を対応済み。

## 完了 (PR #7)

- [x] quickreaderをサイトに追加(詳細ページ・ホームカード・アイコン・ja/en/zh翻訳・プライバシーポリシー)
- [x] 全ページのOGP/Twitter画像URLを`normidar.github.io/colaxy`から`normidar.com`に修正
- [x] sitemap.xml / robots.txt を新規追加
- [x] bookkeeping/fditor/polygon.htmlに重複していた約200行のインラインCSSを`css/style.css`の共有クラスに集約

## バックログ

### 1. スクリーンショットを実機画像に差し替え (完了: fditor / polygon / quickreader)

各アプリ詳細ページの「スクリーンショット」セクションが絵文字プレースホルダーのままだった。`apps/<app>/fastlane/metadata/android/ja-JP/images/phoneScreenshots/`の実ストア画像を480px幅に縮小して`docs/screenshots/<app>/`に配置し、`.screenshot-card`(新設の共有CSS)で表示。キャプションも実際の画面内容に合わせて書き直し済み(ja/en/zh)。

- [x] fditor: 4枚とも差し替え
- [x] polygon: 6枚中4枚(ウォレット生成/送金/残高/履歴)を厳選して差し替え
- [x] quickreader: 4枚とも差し替え
- [ ] **bookkeeping: スクショが一切存在しない**(fastlane/metadata配下を探索したが画像ゼロ)。実機で撮影してもらうまでプレースホルダーのまま保留。

### 2. 多言語対応の一貫性統一

トップの言語セレクターはja/en/zhの3言語のみだが、polygonのプライバシーポリシーだけes/pt/trにも対応(アプリ本体が5言語対応のため)。サイト全体を3言語に統一するか、セレクターを増やすか方針を決める。

### 3. 言語ごとのURL分離によるSEO改善

現状は1つのHTMLに全言語テキストをJSで出し分ける方式(`lang="ja"`固定、URLも1つ)。検索エンジンには日本語版しか見えない。将来的に`/en/`のようなURL分割を検討(既存構造を尊重し今回は未着手)。

### 4. アクセシビリティ

`feature-icon`等の絵文字divにaria-label相当の説明がない。スクリーンリーダー対応を強化する余地がある。

### 5. .gitignore再確認

fastlane側で見かけた`icon.png~`のようなバックアップファイルが`docs/icon/apps/`に紛れ込まないよう、pages側の.gitignoreを一度確認する。

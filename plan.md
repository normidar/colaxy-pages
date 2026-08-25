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

### 2. 多言語対応の一貫性統一 (レビュー済み・実害なし)

トップの言語セレクターはja/en/zhの3言語のみだが、polygonのプライバシーポリシーだけes/pt/trにも対応(アプリ本体が5言語対応のため)。確認したところプライバシーポリシーページは`fetch('../md/.../xx.md')`で自身のロケールのMarkdownを読むだけの独立ページで、サイト共通ヘッダーの言語セレクターは持たない(store側のprivacy_urlから直接ロケール別URLに飛ぶ設計)。つまり導線の矛盾は発生していない。サイト全体を5言語に翻訳する場合は別途大きな翻訳工数が必要になるため、現状は据え置きで問題ないと判断。

### 3. 言語ごとのURL分離によるSEO改善 (一部対応: canonical / og:locale)

現状は1つのHTMLに全言語テキストをJSで出し分ける方式(URLは1つ、`data-i18n`をJSが書き換える)。検索エンジンには初期表示言語(日本語)しか見えない。

- [x] 応急処置として、index.html + apps/4ページに`<link rel="canonical">`(自己参照)と`<meta property="og:locale" content="ja_JP">`を追加
- [ ] 本格的な対応(`/en/`のようなURLごとの言語分割、hreflang alternate)は既存構造の大きな作り替えになるため未着手。着手する場合はURL構成(サブディレクトリ vs サブドメイン)を先に決める必要がある

### 4. アクセシビリティ (対応済み)

- [x] `feature-icon`・`icon`・ダウンロードボタンの絵文字spanに`aria-hidden="true"`を付与(スクリーンリーダーが絵文字を読み上げないように)
- [x] 全`target="_blank"`リンク(ダウンロードボタン計16箇所)に`rel="noopener noreferrer"`を追加(タブナビング対策 + セキュリティ)
- [x] 言語切り替え時に`<html lang>`属性と`.lang-btn`の`aria-current`を動的更新するよう`localization.js`を修正
- [x] 副次的に発見したバグを修正: `currentLanguage`のデフォルトフォールバックが`'en'`になっており、初回訪問者(localStorage未設定)には`lang="ja"`のHTMLなのに英語テキストが表示される矛盾があった → デフォルトを`'ja'`に修正

### 5. .gitignore再確認 (完了・対応不要)

`*~`ルールが既に存在し、`icon.png~`のようなバックアップファイルはカバー済みと確認。追加対応なし。

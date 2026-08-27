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

### 6. プライバシーポリシーURLが壊れていた (完了・別リポジトリ側も修正)

`apps/{bookkeeping,polygon}/fastlane/metadata/**/privacy_url.txt`と、アプリ内(`assets/localizations/*.json`の`store_ios_privacy_url`)が、リポジトリ名変更前(colaxy→colaxy-pages)の存在しないGitHub blob URLを指したままだった。**現在ストアで配信中のバージョンで、アプリ内の「プライバシーポリシー」リンクが実際に404していた。** Colaxy-apps側でPRを作成して修正済み([#24](https://github.com/normidar/Colaxy-apps/pull/24))。反映には別途アプリの新バージョンリリース、およびストア掲載メタデータの再提出が必要(このPRだけでは配信されない)。

### 7. プライバシーポリシーページに戻る導線がなかった (完了)

`docs/privacy-policy/*/*.html`(16ファイル)がMarkdownを流し込むだけの無地ページで、ロゴやホームへのリンクが一切なかった。各ページに「Coin Galaxyロゴ→ホーム」「← アプリページに戻る(該当アプリのページへ、ロケールごとに翻訳済み)」を追加。

### 8. ブランドアイコンを作成 (完了)

`favicon.svg`が単色の青い円(`fill="blue"`、サイトの実際のカラー#00aaffとも不一致)というプレースホルダーのままだった。サイトの実カラー変数(`--primary-color: #00aaff`、`--background-color: #0a0a1a`)を使い、「Coin(コイン)× Galaxy(軌道)」をモチーフにしたロゴマークを新規デザイン: ダークネイビーの円バッジの中に、シアングラデーションのコイン(頭文字「C」入り)と、傾いた軌道リング+星の粒を配置。16px相当でも色付きの丸として視認でき、180px以上では「C」とリングが明瞭に読める。

- [x] `icon/favicon.svg`を新デザインに差し替え
- [x] `icon/apple-touch-icon.png`(180x180)を新デザインから再生成
- [x] `icon/favicon-32.png`(32x32のPNGフォールバック、SVG非対応環境向け)を追加してindex.html/404.htmlに設定
- [x] `icon/icon-192.png`(PWAアイコン用)、`icon/og-image.png`(512x512、SNSシェア用)を追加

### 9. Googleフォントの読み込みが`@import`だった (一部対応)

`style.css`冒頭の`@import url(...)`はCSSパース後に発見されるため描画が遅れる。index.html + apps/4ページに`<link rel="preconnect">` + `<link rel="stylesheet">`を追加(発見を早める)。`style.css`側の`@import`はprivacy-policyページ(16ファイル)がまだ依存しているため残置。

### 10. 構造化データ(JSON-LD)がなかった (完了)

各アプリ詳細ページに`SoftwareApplication`のJSON-LDを追加(名前・説明・カテゴリ・App Store/Google PlayのURL・価格情報)。検索結果でのリッチリザルト表示を狙う。

### 11. GitHub Pages用404ページがなかった (完了)

`docs/404.html`を追加。カスタムドメイン(normidar.com)でも自動的に404時に使われる。

### 12. index.htmlのog:imageがSVGを指しておりSNSシェア画像が壊れていた (完了)

`og:image`/`twitter:image`が`icon/favicon.svg`を指していたが、Facebook/X(Twitter)/LinkedIn/Slackなど主要なOGPスクレイパーの大半はSVGのog:imageに対応しておらず、シェア時のプレビュー画像が事実上表示されない状態だった。新しく作った`icon/og-image.png`(512x512)に差し替え、`og:image:width`/`height`と(元々なかった)`twitter:image`も追加。ついでにindex.htmlの`meta description`にquickreaderが漏れていたのも修正。

### 13. モバイルブラウザのUI色・PWA対応 (完了)

`theme-color`メタタグがどのページにもなく、モバイルSafari/Chromeのアドレスバーがサイトのダークテーマと無関係な既定色になっていた。index.html・apps/4ページ・404.htmlに`<meta name="theme-color" content="#0a0a1a">`を追加。あわせて`site.webmanifest`を新規作成し、ホーム画面への追加(疑似PWA)に対応。

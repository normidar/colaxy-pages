// ローカリゼーション設定
const translations = {
    ja: {
        // ヘッダー
        home: "ホーム",
        features: "機能",
        apps: "アプリ",
        contact: "お問い合わせ",
        
        // ヒーローセクション
        heroTitle: "Coin Galaxy",
        heroSubtitle: "日常生活をより便利にする革新的なアプリケーション群",
        exploreApps: "アプリを探索する",
        
        // 機能セクション
        whyCoinGalaxy: "なぜCoin Galaxyなのか？",
        bookkeeping: "家計管理",
        bookkeepingDesc: "直感的なスタンプ機能で、楽しく簡単に家計簿をつけることができます。",
        aiDevelopment: "AI支援開発",
        aiDevelopmentDesc: "AIの力を活用して、Flutter開発をより効率的で快適にします。",
        beautifulDesign: "美しいデザイン",
        beautifulDesignDesc: "使いやすさと美しさを両立した、モダンで洗練されたユーザーインターフェース。",
        mobileFirst: "モバイルファースト",
        mobileFirstDesc: "スマートフォンでの使用を最優先に設計された、快適なモバイル体験。",
        
        // アプリセクション
        ourApps: "私たちのアプリケーション",
        stampBookkeeping: "Stamp家計簿",
        stampBookkeepingDesc: "スタンプを押すような感覚で簡単に家計簿をつけることができるアプリ。視覚的で楽しい家計管理を実現します。",
        fditor: "Fditor - Flutter AI Editor",
        fditorDesc: "AI技術を活用したFlutter開発エディター。コード補完、エラー修正、最適化提案など、開発を強力にサポートします。",
        startNow: "今すぐ始める",
        
        // フッター
        companyDesc: "日常生活を豊かにするアプリケーションの開発",
        copyright: "© 2024 normidar. All rights reserved.",
        tagline: "Coin Galaxy - より便利で楽しい毎日を",
        
        // 言語選択
        language: "言語",
        japanese: "日本語",
        english: "English",
        chinese: "中文",
        
        // アプリ固有の翻訳
        backToHome: "← ホームに戻る",
        stampBookkeepingSubtitle: "スタンプを押すような感覚で、楽しく簡単に家計管理",
        mainFeatures: "主な機能",
        initialStamp: "初期Stamp作成",
        initialStampDesc: "最初に記帳する時にウォレットの残高で初期Stampを作成。簡単な設定で家計簿を始められます。",
        laterStamp: "後日Stamp追加",
        laterStampDesc: "記帳に怠けてしまった場合でも大丈夫。後日にその怠けたウォレットにStampを追加するだけで簡単に記録を更新できます。",
        simpleUI: "シンプルな画面",
        simpleUIDesc: "直感的で使いやすいシンプルなデザイン。複雑な操作は一切不要で、誰でも簡単に家計管理ができます。",
        multilingual: "多言語対応",
        multilingualDesc: "日本語、英語、中国語に対応。世界中のユーザーが自分の言語で快適に使用できます。",
        themeSelection: "テーマ選択",
        themeSelectionDesc: "お好みに合わせてテーマを選択可能。自分らしいカスタマイズで楽しく家計管理を続けられます。",
        completelyFree: "完全無料",
        completelyFreeDesc: "すべての機能が完全無料でご利用いただけます。追加課金や隠れた費用は一切ありません。",
        howToUse: "使い方",
        step1Title: "アプリを起動",
        step1Desc: "Stamp家計簿を開いて、今日の家計簿を始めましょう。",
        step2Title: "スタンプを選択",
        step2Desc: "食費、交通費、娯楽費など、カテゴリに応じたスタンプを選択します。",
        step3Title: "金額を入力",
        step3Desc: "支出した金額を入力して、スタンプを押すように記録完了。",
        step4Title: "分析を確認",
        step4Desc: "月末に支出の傾向や予算の達成状況を確認して、次月の計画を立てます。",
        screenshots: "スクリーンショット",
        mainScreen: "メイン画面",
        mainScreenDesc: "直感的なスタンプ入力画面",
        analysisScreen: "分析画面",
        analysisScreenDesc: "視覚的な支出分析とグラフ",
        budgetScreen: "予算管理",
        budgetScreenDesc: "月別予算設定と進捗確認",
        historyScreen: "履歴画面",
        historyScreenDesc: "過去の支出履歴と検索機能",
        downloadNow: "今すぐダウンロード",
        downloadMessage: "Stamp家計簿で、楽しく簡単な家計管理を始めませんか？",
        
        // Fditor固有の翻訳
        fditorSubtitle: "Flutter AI Editor - AI技術でFlutter開発を革新",
        aiFeatures: "AI支援機能",
        claudeIntegration: "Claude API連携",
        claudeIntegrationDesc: "Claudeのキーを入力すれば機能が使えるようになります。強力なAI技術をFlutter開発に活用できます。",
        inAppPreview: "アプリ内UI確認",
        inAppPreviewDesc: "生成されたUIをアプリ内で直接確認できます。コードの変更結果をリアルタイムで視覚的に確認しながら開発を進められます。",
        developmentEfficiency: "開発効率の向上",
        timeReduction: "開発時間短縮",
        timeReductionDesc: "最大70%の開発時間短縮を実現",
        bugReduction: "バグ削減",
        bugReductionDesc: "AIによる事前チェックでバグを80%削減",
        qualityImprovement: "品質向上",
        qualityImprovementDesc: "ベストプラクティスの自動適用",
        learningSupport: "学習支援",
        learningSupportDesc: "AIが開発パターンを教えて学習を促進",
        mainEditor: "AI搭載Flutter UIビルダー",
        mainEditorDesc: "保存したプロジェクトを一覧管理し、タップしてすぐに編集を再開できます。",
        aiAssistant: "コードエディタ&プレビュー",
        aiAssistantDesc: "「AIでコード生成」にプロンプトを送るだけでコードを生成・編集できます。",
        performanceAnalysis: "テーマ選択",
        performanceAnalysisDesc: "好みのカラーテーマをタップ一つで切り替えられます。",
        uiDesigner: "カスタマイズ設定",
        uiDesignerDesc: "テーマ・言語・AI設定など、アプリ全体をカスタマイズできます。",
        fditorDownloadMessage: "Fditorで、AI支援によるFlutter開発の新しい体験を始めませんか？",
        
        // Polygon固有の翻訳
        polygon: "Polygon Wallet",
        polygonSubtitle: "自分だけが知る文書や言葉でウォレットを作成 - シンプルで安全なPolygonウォレット",
        polygonDesc: "自分だけが知る文書や言葉で簡単にウォレットを作成できるPolygon専用ウォレット。シンプルで安全なウォレット管理を実現します。",
        voiceWalletCreation: "自分だけが知る文書や言葉で作成",
        voiceWalletCreationDesc: "複雑な設定は不要。自分だけが知っている文書や言葉を使って簡単にウォレットを作成できます。初心者でも迷わずに始められます。",
        polygonOnly: "Polygon専用ウォレット",
        polygonOnlyDesc: "Polygonネットワーク専用に最適化されたウォレット。高速で低コストな取引を実現します。",
        easySecureLogin: "簡単で安全なログイン",
        easySecureLoginDesc: "自分のウォレットに簡単にログインでき、高いセキュリティレベルで資産を保護します。",
        securityFeatures: "セキュリティ機能",
        localStorage: "ローカル保存",
        localStorageDesc: "すべてのウォレット情報はデバイスにローカル保存され、外部サーバーに送信されることはありません。",
        encryption: "暗号化保護",
        encryptionDesc: "業界標準の暗号化技術により、プライベートキーや機密情報を安全に保護します。",
        privateKeyControl: "プライベートキー管理",
        privateKeyControlDesc: "プライベートキーは常にユーザーのデバイス内に保持され、外部に送信されることはありません。",
        whyPolygonWallet: "なぜPolygon Walletなのか？",
        fastTransactions: "高速取引",
        fastTransactionsDesc: "Polygonネットワークの高速性を活かした迅速な取引処理",
        lowFees: "低コスト",
        lowFeesDesc: "取引手数料が非常に低く、コスト効率の良い運用が可能",
        polygonEcosystem: "Polygonエコシステム",
        polygonEcosystemDesc: "Polygonネットワーク上の豊富なDAppsやサービスにアクセス",
        userFriendly: "ユーザーフレンドリー",
        userFriendlyDesc: "シンプルで直感的なインターフェースで、誰でも簡単に使用可能",
        walletCreation: "ウォレットを生成またはインポート",
        walletCreationDesc: "安全な秘密鍵、または秘密の言葉・BIP39ニーモニックでウォレットを作成できます。",
        secureLogin: "簡単・安全な送金",
        secureLoginDesc: "QRコードをスキャン、またはアドレスを貼り付けるだけでPolygon送金が完了します。",
        walletDashboard: "ウォレットダッシュボード",
        walletDashboardDesc: "残高の確認、送金・受取をワンタップで実行できます。",
        transactionHistory: "取引履歴",
        transactionHistoryDesc: "すべての送受金履歴を時系列で確認できます。",
        polygonDownloadMessage: "Polygon Walletで、シンプルで安全なウォレット管理を始めませんか？",

        // QuickReader固有の翻訳
        quickreader: "速読ノベル",
        quickreaderDesc: "テキストを意味の塊に分割し、画面を見るだけで読める速読小説アプリ。スクロール不要でノベルをすいすい読めます。",
        quickreaderSubtitle: "スクロール不要、画面を見るだけで読める速読アプリ",
        chunkReading: "チャンク分割速読表示",
        chunkReadingDesc: "テキストを意味の塊(チャンク)に自動分割し、前/現在/次の3段表示で読書速度を向上させます。",
        fileImport: "ファイル読み込み・貼り付け",
        fileImportDesc: "txtファイルの読み込みや、テキストを直接貼り付けるだけで好きな小説をすぐに追加できます。",
        naroIntegration: "小説家になろう連携",
        naroIntegrationDesc: "「小説家になろう」の小説を検索してそのままダウンロード。お気に入りの作品をすぐに読み始められます。",
        bookshelf: "本棚・続きから読む",
        bookshelfDesc: "読み込んだ本を本棚で一覧管理。前回の続きから、ワンタップで読書を再開できます。",
        qrThemeSelection: "テーマ・速度カスタマイズ",
        qrThemeSelectionDesc: "表示テーマや読書速度を自分好みに調整できる設定画面を搭載。",
        qrStep1Title: "本を追加",
        qrStep1Desc: "ファイル読み込み・テキスト貼り付け・なろう検索のいずれかで読みたい小説を追加します。",
        qrStep2Title: "本棚から選択",
        qrStep2Desc: "本棚タブから読みたい本をタップして開きます。",
        qrStep3Title: "画面を見るだけ",
        qrStep3Desc: "チャンク表示された文章を見ているだけで、スクロール不要でどんどん読み進められます。",
        qrStep4Title: "続きから読む",
        qrStep4Desc: "アプリを閉じても読書位置が自動保存され、いつでも続きから再開できます。",
        qrMainScreen: "速読画面",
        qrMainScreenDesc: "一度に一文だけ表示。スクロール不要で快適なテンポで読み進められます。",
        qrBookshelfScreen: "豊富な内蔵本棚",
        qrBookshelfScreenDesc: "内蔵の本棚からすぐに読書を始められます。",
        qrNaroScreen: "続きから読む",
        qrNaroScreenDesc: "前回の続きから、進捗バー付きでワンタップで再開できます。",
        qrSettingsScreen: "テキスト貼り付け",
        qrSettingsScreenDesc: "テキストを貼り付けるだけで、すぐに速読を開始できます。",
        quickreaderDownloadMessage: "速読ノベルで、スクロール不要のサクサク読書を始めませんか？"
    },
    en: {
        // Header
        home: "Home",
        features: "Features",
        apps: "Apps",
        contact: "Contact",
        
        // Hero section
        heroTitle: "Coin Galaxy",
        heroSubtitle: "Innovative applications that make daily life more convenient",
        exploreApps: "Explore Apps",
        
        // Features section
        whyCoinGalaxy: "Why Coin Galaxy?",
        bookkeeping: "Bookkeeping",
        bookkeepingDesc: "Intuitive stamp functionality for fun and easy bookkeeping. Visual and enjoyable household management.",
        aiDevelopment: "AI-Powered Development",
        aiDevelopmentDesc: "Leverage AI technology to make Flutter development more efficient and comfortable.",
        beautifulDesign: "Beautiful Design",
        beautifulDesignDesc: "Modern and sophisticated user interface that balances usability and beauty.",
        mobileFirst: "Mobile First",
        mobileFirstDesc: "Comfortable mobile experience designed with smartphone usage as the top priority.",
        
        // Apps section
        ourApps: "Our Applications",
        stampBookkeeping: "Stamp Bookkeeping",
        stampBookkeepingDesc: "An app that allows you to keep books easily with a stamp-like feeling. Achieves visual and enjoyable household management.",
        fditor: "Fditor - Flutter AI Editor",
        fditorDesc: "Flutter development editor powered by AI technology. Strongly supports development with code completion, error correction, and optimization suggestions.",
        startNow: "Get Started",
        
        // Footer
        companyDesc: "Development of applications that enrich daily life",
        copyright: "© 2024 normidar. All rights reserved.",
        tagline: "Coin Galaxy - More convenient and enjoyable everyday life",
        
        // Language selection
        language: "Language",
        japanese: "日本語",
        english: "English",
        chinese: "中文",
        
        // App-specific translations
        backToHome: "← Back to Home",
        stampBookkeepingSubtitle: "Fun and easy household management with a stamp-like feeling",
        mainFeatures: "Main Features",
        initialStamp: "Initial Stamp Creation",
        initialStampDesc: "Create initial stamps with wallet balance when first recording. Start bookkeeping with simple settings.",
        laterStamp: "Later Stamp Addition",
        laterStampDesc: "No problem if you get lazy with recording. Simply add stamps to the lazy wallet later to easily update records.",
        simpleUI: "Simple Interface",
        simpleUIDesc: "Intuitive and easy-to-use simple design. No complex operations required, anyone can easily manage household finances.",
        multilingual: "Multilingual Support",
        multilingualDesc: "Supports Japanese, English, and Chinese. Users worldwide can comfortably use it in their own language.",
        themeSelection: "Theme Selection",
        themeSelectionDesc: "Choose themes according to your preferences. Continue fun household management with your own customization.",
        completelyFree: "Completely Free",
        completelyFreeDesc: "All features are completely free to use. No additional charges or hidden costs.",
        howToUse: "How to Use",
        step1Title: "Launch App",
        step1Desc: "Open Stamp Bookkeeping and start today's bookkeeping.",
        step2Title: "Select Stamp",
        step2Desc: "Select stamps according to categories like food, transportation, entertainment expenses.",
        step3Title: "Enter Amount",
        step3Desc: "Enter the amount spent and complete recording like pressing a stamp.",
        step4Title: "Check Analysis",
        step4Desc: "Check spending trends and budget achievement at month-end to plan for next month.",
        screenshots: "Screenshots",
        mainScreen: "Main Screen",
        mainScreenDesc: "Intuitive stamp input screen",
        analysisScreen: "Analysis Screen",
        analysisScreenDesc: "Visual spending analysis and graphs",
        budgetScreen: "Budget Management",
        budgetScreenDesc: "Monthly budget settings and progress confirmation",
        historyScreen: "History Screen",
        historyScreenDesc: "Past spending history and search functions",
        downloadNow: "Download Now",
        downloadMessage: "Start fun and easy household management with Stamp Bookkeeping?",
        
        // Fditor-specific translations
        fditorSubtitle: "Flutter AI Editor - Revolutionizing Flutter development with AI technology",
        aiFeatures: "AI-Powered Features",
        claudeIntegration: "Claude API Integration",
        claudeIntegrationDesc: "Enter your Claude key to enable features. Leverage powerful AI technology for Flutter development.",
        inAppPreview: "In-App UI Preview",
        inAppPreviewDesc: "Preview generated UI directly in the app. Advance development while visually confirming code changes in real-time.",
        developmentEfficiency: "Development Efficiency Improvement",
        timeReduction: "Development Time Reduction",
        timeReductionDesc: "Achieve up to 70% development time reduction",
        bugReduction: "Bug Reduction",
        bugReductionDesc: "Reduce bugs by 80% with AI pre-check",
        qualityImprovement: "Quality Improvement",
        qualityImprovementDesc: "Automatic application of best practices",
        learningSupport: "Learning Support",
        learningSupportDesc: "AI teaches development patterns to promote learning",
        mainEditor: "AI-Powered Flutter UI Builder",
        mainEditorDesc: "Manage your saved projects in one list and jump right back into editing with a tap.",
        aiAssistant: "Code Editor & Preview",
        aiAssistantDesc: "Generate and edit code instantly by sending a prompt to \"Generate with AI\".",
        performanceAnalysis: "Theme Selection",
        performanceAnalysisDesc: "Switch between color themes with a single tap.",
        uiDesigner: "Customization Settings",
        uiDesignerDesc: "Customize the whole app — theme, language, and AI settings — in one place.",
        fditorDownloadMessage: "Start a new Flutter development experience with AI support using Fditor?",
        
        // Polygon-specific translations
        polygon: "Polygon Wallet",
        polygonSubtitle: "Create wallets with documents or words only you know - Simple and secure Polygon wallet",
        polygonDesc: "A Polygon-only wallet that allows you to easily create wallets using documents or words only you know. Achieves simple and secure wallet management.",
        voiceWalletCreation: "Create with Your Own Documents or Words",
        voiceWalletCreationDesc: "No complex settings required. Create wallets easily using documents or words only you know. Even beginners can get started without confusion.",
        polygonOnly: "Polygon-Only Wallet",
        polygonOnlyDesc: "Wallet optimized specifically for the Polygon network. Enables fast and low-cost transactions.",
        easySecureLogin: "Easy and Secure Login",
        easySecureLoginDesc: "Easily log in to your wallet and protect your assets with high security levels.",
        securityFeatures: "Security Features",
        localStorage: "Local Storage",
        localStorageDesc: "All wallet information is stored locally on your device and never sent to external servers.",
        encryption: "Encryption Protection",
        encryptionDesc: "Protects private keys and sensitive information securely with industry-standard encryption technology.",
        privateKeyControl: "Private Key Management",
        privateKeyControlDesc: "Private keys are always kept within the user's device and never sent externally.",
        whyPolygonWallet: "Why Polygon Wallet?",
        fastTransactions: "Fast Transactions",
        fastTransactionsDesc: "Rapid transaction processing leveraging Polygon network's speed",
        lowFees: "Low Fees",
        lowFeesDesc: "Very low transaction fees enable cost-efficient operations",
        polygonEcosystem: "Polygon Ecosystem",
        polygonEcosystemDesc: "Access to rich DApps and services on the Polygon network",
        userFriendly: "User-Friendly",
        userFriendlyDesc: "Simple and intuitive interface that anyone can easily use",
        walletCreation: "Generate or Import a Wallet",
        walletCreationDesc: "Create a wallet with a secure private key, or with your own secret words / a BIP39 mnemonic.",
        secureLogin: "Easy, Secure Sending",
        secureLoginDesc: "Send Polygon by scanning a QR code or pasting an address — that's it.",
        walletDashboard: "Wallet Dashboard",
        walletDashboardDesc: "Check your balance and send or receive with a single tap.",
        transactionHistory: "Transaction History",
        transactionHistoryDesc: "See every transaction in chronological order.",
        polygonDownloadMessage: "Start simple and secure wallet management with Polygon Wallet?",

        // QuickReader-specific translations
        quickreader: "QuickReader",
        quickreaderDesc: "A speed-reading novel app that splits text into meaningful chunks so you can read just by looking at the screen — no scrolling needed.",
        quickreaderSubtitle: "No scrolling — just look at the screen and read",
        chunkReading: "Chunked Speed-Reading Display",
        chunkReadingDesc: "Automatically splits text into meaningful chunks and shows the previous, current, and next chunk in a 3-line view to boost your reading speed.",
        fileImport: "Import Files or Paste Text",
        fileImportDesc: "Add any novel instantly by importing a .txt file or simply pasting text directly.",
        naroIntegration: "Syosetsu (Narou) Integration",
        naroIntegrationDesc: "Search and download novels from Japan's popular \"Shousetsuka ni Narou\" site right in the app.",
        bookshelf: "Bookshelf & Continue Reading",
        bookshelfDesc: "Manage all your imported books on one bookshelf and resume right where you left off with a single tap.",
        qrThemeSelection: "Customizable Theme & Speed",
        qrThemeSelectionDesc: "A settings screen lets you tune the display theme and reading speed to your liking.",
        qrStep1Title: "Add a Book",
        qrStep1Desc: "Add a novel by importing a file, pasting text, or searching Shousetsuka ni Narou.",
        qrStep2Title: "Pick from Your Bookshelf",
        qrStep2Desc: "Tap a book from the bookshelf tab to open it.",
        qrStep3Title: "Just Look at the Screen",
        qrStep3Desc: "Read the chunked text simply by looking — no scrolling required.",
        qrStep4Title: "Resume Anytime",
        qrStep4Desc: "Your reading position is saved automatically, so you can pick up right where you left off.",
        qrMainScreen: "Speed-Reading Screen",
        qrMainScreenDesc: "Shows just one sentence at a time — no scrolling, a comfortable reading pace.",
        qrBookshelfScreen: "A Rich Built-In Bookshelf",
        qrBookshelfScreenDesc: "Start reading right away from the built-in bookshelf.",
        qrNaroScreen: "Resume Where You Left Off",
        qrNaroScreenDesc: "Pick up your last book with one tap, progress bar included.",
        qrSettingsScreen: "Paste Text",
        qrSettingsScreenDesc: "Paste any text and start speed-reading immediately.",
        quickreaderDownloadMessage: "Start scroll-free, effortless reading with QuickReader?"
    },
    zh: {
        // ヘッダー
        home: "首页",
        features: "功能",
        apps: "应用",
        contact: "联系我们",
        
        // 英雄部分
        heroTitle: "Coin Galaxy",
        heroSubtitle: "让日常生活更便利的创新应用程序",
        exploreApps: "探索应用",
        
        // 功能部分
        whyCoinGalaxy: "为什么选择Coin Galaxy？",
        bookkeeping: "记账管理",
        bookkeepingDesc: "直观的印章功能，让记账变得有趣简单。实现视觉化且愉快的家庭管理。",
        aiDevelopment: "AI辅助开发",
        aiDevelopmentDesc: "利用AI技术，让Flutter开发更高效舒适。",
        beautifulDesign: "精美设计",
        beautifulDesignDesc: "平衡易用性和美观性的现代精致用户界面。",
        mobileFirst: "移动优先",
        mobileFirstDesc: "以智能手机使用为最高优先级设计的舒适移动体验。",
        
        // 应用部分
        ourApps: "我们的应用程序",
        stampBookkeeping: "印章记账",
        stampBookkeepingDesc: "可以像盖章一样简单记账的应用。实现视觉化且愉快的家庭管理。",
        fditor: "Fditor - Flutter AI编辑器",
        fditorDesc: "利用AI技术的Flutter开发编辑器。通过代码补全、错误修正、优化建议等强力支持开发。",
        startNow: "立即开始",
        
        // 页脚
        companyDesc: "开发丰富日常生活的应用程序",
        copyright: "© 2024 normidar. All rights reserved.",
        tagline: "Coin Galaxy - 更便利愉快的日常生活",
        
        // 语言选择
        language: "语言",
        japanese: "日本語",
        english: "English",
        chinese: "中文",
        
        // 应用特定翻译
        backToHome: "← 返回首页",
        stampBookkeepingSubtitle: "像盖章一样简单有趣的记账管理",
        mainFeatures: "主要功能",
        initialStamp: "初始印章创建",
        initialStampDesc: "首次记账时用钱包余额创建初始印章。简单设置即可开始记账。",
        laterStamp: "后日印章添加",
        laterStampDesc: "即使记账懈怠也没关系。后日只需向懈怠的钱包添加印章即可轻松更新记录。",
        simpleUI: "简洁界面",
        simpleUIDesc: "直观易用的简洁设计。无需复杂操作，任何人都能轻松管理家庭财务。",
        multilingual: "多语言支持",
        multilingualDesc: "支持日语、英语、中文。全球用户都能用自己的语言舒适使用。",
        themeSelection: "主题选择",
        themeSelectionDesc: "根据喜好选择主题。用自己独特的定制继续有趣的记账管理。",
        completelyFree: "完全免费",
        completelyFreeDesc: "所有功能完全免费使用。无额外收费或隐藏费用。",
        howToUse: "使用方法",
        step1Title: "启动应用",
        step1Desc: "打开印章记账，开始今天的记账。",
        step2Title: "选择印章",
        step2Desc: "选择餐饮、交通、娱乐等类别的印章。",
        step3Title: "输入金额",
        step3Desc: "输入支出金额，像盖章一样完成记录。",
        step4Title: "查看分析",
        step4Desc: "月末查看支出趋势和预算达成情况，制定下月计划。",
        screenshots: "截图",
        mainScreen: "主界面",
        mainScreenDesc: "直观的印章输入界面",
        analysisScreen: "分析界面",
        analysisScreenDesc: "可视化支出分析和图表",
        budgetScreen: "预算管理",
        budgetScreenDesc: "月度预算设置和进度确认",
        historyScreen: "历史界面",
        historyScreenDesc: "过往支出历史和搜索功能",
        downloadNow: "立即下载",
        downloadMessage: "用印章记账开始有趣简单的记账管理？",
        
        // Fditor特定翻译
        fditorSubtitle: "Flutter AI编辑器 - 用AI技术革新Flutter开发",
        aiFeatures: "AI辅助功能",
        claudeIntegration: "Claude API集成",
        claudeIntegrationDesc: "输入Claude密钥即可启用功能。将强大的AI技术应用于Flutter开发。",
        inAppPreview: "应用内UI预览",
        inAppPreviewDesc: "直接在应用中预览生成的UI。实时视觉确认代码变更结果的同时推进开发。",
        developmentEfficiency: "开发效率提升",
        timeReduction: "开发时间缩短",
        timeReductionDesc: "实现最多70%的开发时间缩短",
        bugReduction: "错误减少",
        bugReductionDesc: "AI预检查将错误减少80%",
        qualityImprovement: "质量提升",
        qualityImprovementDesc: "自动应用最佳实践",
        learningSupport: "学习支持",
        learningSupportDesc: "AI教授开发模式促进学习",
        mainEditor: "AI驱动的Flutter UI构建器",
        mainEditorDesc: "在项目列表中管理已保存的项目，点击即可继续编辑。",
        aiAssistant: "代码编辑器与预览",
        aiAssistantDesc: "只需向「AI生成代码」发送提示词，即可生成并编辑代码。",
        performanceAnalysis: "主题选择",
        performanceAnalysisDesc: "只需一键即可切换喜欢的配色主题。",
        uiDesigner: "自定义设置",
        uiDesignerDesc: "在一处集中管理主题、语言和AI设置等应用全局自定义项。",
        fditorDownloadMessage: "用Fditor开始AI辅助Flutter开发的新体验？",
        
        // Polygon特定翻译
        polygon: "Polygon钱包",
        polygonSubtitle: "用只有您知道的文档或词语创建钱包 - 简单安全的Polygon钱包",
        polygonDesc: "用只有您知道的文档或词语即可轻松创建钱包的Polygon专用钱包。实现简单安全的钱包管理。",
        voiceWalletCreation: "用您自己的文档或词语创建",
        voiceWalletCreationDesc: "无需复杂设置。用只有您知道的文档或词语即可轻松创建钱包。即使是初学者也能轻松开始。",
        polygonOnly: "Polygon专用钱包",
        polygonOnlyDesc: "专为Polygon网络优化的钱包。实现快速低成本的交易。",
        easySecureLogin: "简单安全登录",
        easySecureLoginDesc: "轻松登录您的钱包，以高安全级别保护资产。",
        securityFeatures: "安全功能",
        localStorage: "本地存储",
        localStorageDesc: "所有钱包信息都存储在设备本地，不会发送到外部服务器。",
        encryption: "加密保护",
        encryptionDesc: "使用行业标准加密技术安全保护私钥和敏感信息。",
        privateKeyControl: "私钥管理",
        privateKeyControlDesc: "私钥始终保存在用户设备内，不会发送到外部。",
        whyPolygonWallet: "为什么选择Polygon钱包？",
        fastTransactions: "快速交易",
        fastTransactionsDesc: "利用Polygon网络的高速性实现快速交易处理",
        lowFees: "低成本",
        lowFeesDesc: "交易手续费极低，可实现成本高效的运营",
        polygonEcosystem: "Polygon生态系统",
        polygonEcosystemDesc: "访问Polygon网络上丰富的DApps和服务",
        userFriendly: "用户友好",
        userFriendlyDesc: "简单直观的界面，任何人都能轻松使用",
        walletCreation: "生成或导入钱包",
        walletCreationDesc: "使用安全的私钥，或使用您自己的密语/BIP39助记词创建钱包。",
        secureLogin: "简单安全的转账",
        secureLoginDesc: "扫描二维码或粘贴地址，即可完成Polygon转账。",
        walletDashboard: "钱包仪表板",
        walletDashboardDesc: "查看余额，一键完成转账或收款。",
        transactionHistory: "交易历史",
        transactionHistoryDesc: "按时间顺序查看所有转账收款记录。",
        polygonDownloadMessage: "用Polygon钱包开始简单安全的钱包管理？",

        // QuickReader特定翻译
        quickreader: "速读小说",
        quickreaderDesc: "将文本自动拆分为语义片段，只需盯着屏幕就能阅读的速读小说应用，无需滚动。",
        quickreaderSubtitle: "无需滚动，只需盯着屏幕即可阅读",
        chunkReading: "分块速读显示",
        chunkReadingDesc: "自动将文本拆分为语义片段，以\"上一段/当前段/下一段\"三行显示来提升阅读速度。",
        fileImport: "导入文件或粘贴文本",
        fileImportDesc: "导入txt文件或直接粘贴文本，即可立即添加你喜欢的小说。",
        naroIntegration: "「成为小说家」联动",
        naroIntegrationDesc: "在应用内搜索并下载日本人气小说网站「成为小说家」上的作品。",
        bookshelf: "书架与继续阅读",
        bookshelfDesc: "在书架中统一管理已导入的书籍，一键从上次阅读的位置继续阅读。",
        qrThemeSelection: "主题与速度自定义",
        qrThemeSelectionDesc: "设置界面可自由调整显示主题和阅读速度。",
        qrStep1Title: "添加书籍",
        qrStep1Desc: "通过导入文件、粘贴文本或搜索「成为小说家」来添加想读的小说。",
        qrStep2Title: "从书架中选择",
        qrStep2Desc: "在书架标签页中点击想读的书籍即可打开。",
        qrStep3Title: "只需盯着屏幕",
        qrStep3Desc: "只需查看分块显示的文本，无需滚动即可持续阅读。",
        qrStep4Title: "随时继续阅读",
        qrStep4Desc: "阅读进度会自动保存，随时可以从上次的位置继续阅读。",
        qrMainScreen: "速读界面",
        qrMainScreenDesc: "一次只显示一句话，无需滚动，阅读节奏舒适。",
        qrBookshelfScreen: "丰富的内置书架",
        qrBookshelfScreenDesc: "从内置书架即可立即开始阅读。",
        qrNaroScreen: "继续上次的阅读",
        qrNaroScreenDesc: "带进度条一键继续上次阅读的书籍。",
        qrSettingsScreen: "粘贴文本",
        qrSettingsScreenDesc: "粘贴文本即可立即开始速读。",
        quickreaderDownloadMessage: "用速读小说开始无需滚动的畅快阅读吧？"
    }
};

// 現在の言語を取得（デフォルトは英語）
let currentLanguage = localStorage.getItem('language') || 'en';

// 言語を変更する関数
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateContent();
}

// コンテンツを更新する関数
function updateContent() {
    const t = translations[currentLanguage];
    
    // ヘッダー
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // 言語選択ボタンのアクティブ状態を更新
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    updateContent();

    const header = document.querySelector('header');
    const main = document.querySelector('main');
    let lastScrollTop = 0;

    function setMainPadding() {
        if (main) {
            main.style.paddingTop = `${header.offsetHeight}px`;
        }
    }

    setMainPadding();
    window.addEventListener('resize', setMainPadding);

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Downscroll
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            // Upscroll
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
}); 
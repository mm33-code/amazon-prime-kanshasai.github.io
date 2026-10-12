# プライム感謝祭ガイド 2026 — GitHub Pages サイト

Amazonプライム感謝祭の攻略情報を日本語で提供するSEO特化型静的サイトです。

## 📁 ファイル構成

```
newseo/
├── index.html                          # ホームページ
├── articles/
│   ├── guide-prime-kanshasai-2026.html # 完全ガイド
│   ├── point-up-campaign-guide.html    # ポイント攻略
│   ├── osusumehin-ranking-2026.html    # おすすめ商品TOP10
│   ├── blackfriday-vs-kanshasai.html   # BF vs 感謝祭比較
│   └── setsuyaku-technique.html        # 節約テクニック7選
├── css/style.css
├── js/main.js
├── sitemap.xml
├── robots.txt
├── 404.html
├── .nojekyll
└── .github/workflows/deploy.yml
```

## 🚀 GitHub Pages へのデプロイ手順

### 1. リポジトリを作成する
1. GitHubで新規リポジトリを作成（例: `amazon-sale-guide`）
2. Public に設定する

### 2. このフォルダをpushする
```bash
cd a:\newseo
git init
git add .
git commit -m "Initial commit: プライム感謝祭ガイド 2026"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 3. GitHub Pages を有効化する
- リポジトリの Settings → Pages
- Source: **Deploy from a branch**
- Branch: **gh-pages** / `/ (root)`
- Save をクリック

### 4. URLを置き換える（重要！）
サイト内のすべての `YOUR-USERNAME` と `YOUR-REPO` を実際の値に変更する:
```
例: https://YOUR-USERNAME.github.io/YOUR-REPO/
↓
https://yamada-taro.github.io/amazon-sale-guide/
```

対象ファイル: `index.html`, `articles/*.html`, `sitemap.xml`, `robots.txt`

### 5. Adsterraコードを差し込む
各HTMLファイル内の以下のコメントを実際のAdsterraゾーンコードに置き換える:
- `<!-- ADSTERRA_BANNER_TOP_ZONE_CODE_HERE -->`
- `<!-- ADSTERRA_NATIVE_MID_ZONE_CODE_HERE -->`
- `<!-- ADSTERRA_BANNER_BOTTOM_ZONE_CODE_HERE -->`
- `<!-- ADSTERRA_SIDEBAR_ZONE_CODE_HERE -->`
- `<!-- ADSTERRA_POPUNDER_ZONE_CODE_HERE -->` (index.htmlのみ)

### 6. Amazonアソシエイトタグを更新
`newseo-22` を実際のAmazon Associates Japan タグに変更する。

### 7. Google Search Consoleにサイトを登録
1. https://search.google.com/search-console へアクセス
2. URLプレフィックスで `https://YOUR-USERNAME.github.io/YOUR-REPO/` を追加
3. **サイトマップを送信**: `sitemap.xml`

## 🔧 GitHub Actionsについて
`.github/workflows/deploy.yml` が設定済みです。  
`main` ブランチにpushするたびに自動的に `gh-pages` ブランチへデプロイされます。

## ⚡ SEO最適化チェックリスト (デプロイ後)
- [ ] Canonicalタグが正しいURLを指しているか確認
- [ ] Google Search Consoleにサイトマップ送信済み
- [ ] PageSpeed Insights でモバイルスコア 90以上を確認
- [ ] Adsterraコードが正しく表示されているか確認
- [ ] Amazonアソシエイトリンクが正しいタグを含んでいるか確認

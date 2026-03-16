# Last commit summary

## Summary
- Updated Step 3 in the quickstart guide to recommend VitePress for JavaScript projects and Zensical for Python projects for the docs site.
- Applied the same Step 3 copy change across all translated quickstart pages (es, zh, ko, ja).
- Synced the source of truth and project docs by updating `.memory/vibe-coding-guide.md`, `README.md`, and `docs/changelog.md`.

## Rationale
- The quickstart should recommend ecosystem-native documentation tooling instead of hand-written static HTML docs.
- The guide text, translations, source-of-truth memory, and public-facing README/changelog should stay aligned.

## Source-code-only diff

diff --git a/.memory/vibe-coding-guide.md b/.memory/vibe-coding-guide.md
index 5688e28..5e6d002 100644
--- a/.memory/vibe-coding-guide.md
+++ b/.memory/vibe-coding-guide.md
@@ -186,11 +186,11 @@ Avoid:
 
 Also require:
 
-A `docs/` folder — a static HTML documentation site:
+A `docs/` folder — a documentation site built with:
 
-- No build step, no framework, no static site generator
-- Plain `.html` files with one shared `style.css`
-- Simple client-side search across all doc pages
+- VitePress for JavaScript projects
+- Zensical for Python projects
+- Pick the option that matches the main project language
 - Internal documentation
 - Changelog
 
diff --git a/README.md b/README.md
index 526895b..a9fd2a3 100644
--- a/README.md
+++ b/README.md
@@ -13,6 +13,10 @@ python3 -m http.server 8000
 open http://localhost:8000
 ```
 
+## Guide note
+
+Step 3 recommends using VitePress for JavaScript projects or Zensical for Python projects when setting up the documentation site in `docs/`.
+
 ## Commit workflow
 
 Every change goes through a review-before-commit loop:
diff --git a/docs/changelog.md b/docs/changelog.md
index 18fe45a..95b42ea 100644
--- a/docs/changelog.md
+++ b/docs/changelog.md
@@ -1,5 +1,24 @@
 # Changelog
 
+## 2026-03-16
+
+### Changed
+- Updated Step 3 in the quickstart guide across all 5 languages to recommend VitePress for JavaScript projects or Zensical for Python projects for the `docs/` site, replacing the earlier static HTML docs instruction
+- Rewrote the Step 3 explanatory paragraph on all quickstart pages to align the docs tool with the project's primary language
+- Updated `.memory/vibe-coding-guide.md` and `README.md` to reflect the new documentation-site recommendation
+
+### Why
+- The guide should point people to ecosystem-native documentation tools instead of hand-written static HTML docs
+
+### Files touched
+- `quickstart.html`, `es/quickstart.html`, `zh/quickstart.html`, `ko/quickstart.html`, `ja/quickstart.html`
+- `.memory/vibe-coding-guide.md`
+- `README.md`
+- `docs/changelog.md`
+
+### Memory updates
+- `.memory/vibe-coding-guide.md`
+
 ## 2026-03-15
 
 ### Added
diff --git a/es/quickstart.html b/es/quickstart.html
index bd86315..94bcda1 100644
--- a/es/quickstart.html
+++ b/es/quickstart.html
@@ -252,16 +252,16 @@ Avoid:
 - Heavy abstraction
 - Premature scale tools
 
-Also require a docs/ folder — a static HTML documentation site:
-- No build step, no framework, no static site generator
-- Plain .html files with one shared style.css
-- Simple client-side search across all doc pages
+Also require a docs/ folder — a documentation site built with:
+- VitePress for JavaScript projects
+- Zensical for Python projects
+- Pick the option that matches the main project language
 - Internal documentation
 - Changelog
 
 Save the recommendation to .memory/tech-stack.md</code></pre>
 
-      <p>Tu sitio de documentación debe ser tan simple como el proyecto en sí — archivos HTML estáticos que puedes abrir en un navegador. Sin generadores, sin pasos de compilación. Incluye una búsqueda simple del lado del cliente para encontrar cualquier cosa en todas las páginas de documentación sin necesidad de un servidor.</p>
+      <p>No escribas la documentación a mano como HTML estático. Usa VitePress cuando el proyecto pertenezca al ecosistema JavaScript, o Zensical cuando pertenezca al ecosistema Python. La herramienta de documentación debe coincidir con el lenguaje principal del proyecto para que siga siendo fácil de mantener.</p>
 
       <h3>Logging y trazabilidad desde el día uno</h3>
 
diff --git a/ja/quickstart.html b/ja/quickstart.html
index 65fc4af..1acec2d 100644
--- a/ja/quickstart.html
+++ b/ja/quickstart.html
@@ -165,14 +165,14 @@ Avoid:
 - Heavy abstraction
 - Premature scale tools
 
-Also require a docs/ folder — a static HTML documentation site:
-- No build step, no framework, no static site generator
-- Plain .html files with one shared style.css
-- Simple client-side search across all doc pages
+Also require a docs/ folder — a documentation site built with:
+- VitePress for JavaScript projects
+- Zensical for Python projects
+- Pick the option that matches the main project language
 - Internal documentation
 - Changelog
 
-Save the recommendation to .memory/tech-stack.md</code></pre><p>ドキュメントサイトはプロジェクト自体と同じくらいシンプルであるべきです — ブラウザで直接開ける静的HTMLファイル。ジェネレーターもビルドステップも不要です。軽量なクライアントサイド検索を含めて、サーバーなしですべてのドキュメントページから何でも見つけられるようにしましょう。</p><h3>初日からロギングとトレーシング</h3><p>スタックには構造化ロギング、相関IDメカニズム、ログレベル戦略が含まれなければなりません。これはオプションではありません。</p><div class="table-wrap"><table><thead><tr><th>レベル</th><th>用途</th></tr></thead><tbody><tr><td><code>TRACE</code></td><td>きめ細かい実行パス — 関数の入口/出口、変数値</td></tr><tr><td><code>DEBUG</code></td><td>内部ロジック — 分岐判断、キャッシュヒット/ミス</td></tr><tr><td><code>INFO</code></td><td>状態遷移、ライフサイクルイベント、リクエストサマリー</td></tr><tr><td><code>WARN</code></td><td>回復可能な問題、フォールバックパス、リトライ</td></tr><tr><td><code>ERROR</code></td><td>障害、未処理状態、不変条件違反</td></tr></tbody></table></div><p>開発では詳細に。プロダクションでは構造化されクエリ可能に。すべてのリクエストにはどこまでも付いていく相関IDがあります。</p></section>
+Save the recommendation to .memory/tech-stack.md</code></pre><p>ドキュメントを静的HTMLとして手書きしないでください。プロジェクトがJavaScriptエコシステムならVitePress、PythonエコシステムならZensicalを使いましょう。ドキュメントツールはプロジェクトの主要言語に合わせることで、保守しやすくなります。</p><h3>初日からロギングとトレーシング</h3><p>スタックには構造化ロギング、相関IDメカニズム、ログレベル戦略が含まれなければなりません。これはオプションではありません。</p><div class="table-wrap"><table><thead><tr><th>レベル</th><th>用途</th></tr></thead><tbody><tr><td><code>TRACE</code></td><td>きめ細かい実行パス — 関数の入口/出口、変数値</td></tr><tr><td><code>DEBUG</code></td><td>内部ロジック — 分岐判断、キャッシュヒット/ミス</td></tr><tr><td><code>INFO</code></td><td>状態遷移、ライフサイクルイベント、リクエストサマリー</td></tr><tr><td><code>WARN</code></td><td>回復可能な問題、フォールバックパス、リトライ</td></tr><tr><td><code>ERROR</code></td><td>障害、未処理状態、不変条件違反</td></tr></tbody></table></div><p>開発では詳細に。プロダクションでは構造化されクエリ可能に。すべてのリクエストにはどこまでも付いていく相関IDがあります。</p></section>
 
     <section id="step-4"><span class="step-label">ステップ4</span><h2>エントリーポイントを作る</h2><p>エージェントにこれを貼り付けてください：</p><pre><code>Generate:
 
diff --git a/ko/quickstart.html b/ko/quickstart.html
index cdec284..bf6994f 100644
--- a/ko/quickstart.html
+++ b/ko/quickstart.html
@@ -165,14 +165,14 @@ Avoid:
 - Heavy abstraction
 - Premature scale tools
 
-Also require a docs/ folder — a static HTML documentation site:
-- No build step, no framework, no static site generator
-- Plain .html files with one shared style.css
-- Simple client-side search across all doc pages
+Also require a docs/ folder — a documentation site built with:
+- VitePress for JavaScript projects
+- Zensical for Python projects
+- Pick the option that matches the main project language
 - Internal documentation
 - Changelog
 
-Save the recommendation to .memory/tech-stack.md</code></pre><p>문서 사이트는 프로젝트 자체만큼 단순해야 합니다 — 브라우저에서 바로 열 수 있는 정적 HTML 파일. 생성기도, 빌드 단계도 없습니다. 가벼운 클라이언트 측 검색을 포함하여 서버 없이도 모든 문서 페이지에서 원하는 것을 찾을 수 있게 하세요.</p><h3>첫날부터 로깅과 추적</h3><p>스택에는 구조화된 로깅, 상관관계 ID 메커니즘, 로그 레벨 전략이 포함되어야 합니다. 이것은 선택 사항이 아닙니다.</p><div class="table-wrap"><table><thead><tr><th>레벨</th><th>용도</th></tr></thead><tbody><tr><td><code>TRACE</code></td><td>세밀한 실행 경로 — 함수 진입/종료, 변수 값</td></tr><tr><td><code>DEBUG</code></td><td>내부 로직 — 분기 결정, 캐시 적중/미스</td></tr><tr><td><code>INFO</code></td><td>상태 전환, 라이프사이클 이벤트, 요청 요약</td></tr><tr><td><code>WARN</code></td><td>복구 가능한 문제, 대체 경로, 재시도</td></tr><tr><td><code>ERROR</code></td><td>실패, 처리되지 않은 상태, 불변성 위반</td></tr></tbody></table></div><p>개발에서는 상세하게. 프로덕션에서는 구조화되고 쿼리 가능하게. 모든 요청에는 어디든 따라가는 상관관계 ID가 있습니다.</p></section>
+Save the recommendation to .memory/tech-stack.md</code></pre><p>문서를 정적 HTML로 손수 작성하지 마세요. 프로젝트가 JavaScript 생태계에 있다면 VitePress를, Python 생태계에 있다면 Zensical을 사용하세요. 문서 도구는 프로젝트의 주 언어와 맞아야 유지보수가 쉬워집니다.</p><h3>첫날부터 로깅과 추적</h3><p>스택에는 구조화된 로깅, 상관관계 ID 메커니즘, 로그 레벨 전략이 포함되어야 합니다. 이것은 선택 사항이 아닙니다.</p><div class="table-wrap"><table><thead><tr><th>레벨</th><th>용도</th></tr></thead><tbody><tr><td><code>TRACE</code></td><td>세밀한 실행 경로 — 함수 진입/종료, 변수 값</td></tr><tr><td><code>DEBUG</code></td><td>내부 로직 — 분기 결정, 캐시 적중/미스</td></tr><tr><td><code>INFO</code></td><td>상태 전환, 라이프사이클 이벤트, 요청 요약</td></tr><tr><td><code>WARN</code></td><td>복구 가능한 문제, 대체 경로, 재시도</td></tr><tr><td><code>ERROR</code></td><td>실패, 처리되지 않은 상태, 불변성 위반</td></tr></tbody></table></div><p>개발에서는 상세하게. 프로덕션에서는 구조화되고 쿼리 가능하게. 모든 요청에는 어디든 따라가는 상관관계 ID가 있습니다.</p></section>
 
     <section id="step-4"><span class="step-label">4단계</span><h2>진입점 만들기</h2><p>에이전트에 이것을 붙여넣으세요:</p><pre><code>Generate:
 
diff --git a/quickstart.html b/quickstart.html
index 12f18bd..166c8ec 100644
--- a/quickstart.html
+++ b/quickstart.html
@@ -272,16 +272,16 @@ Avoid:
 - Heavy abstraction
 - Premature scale tools
 
-Also require a docs/ folder — a static HTML documentation site:
-- No build step, no framework, no static site generator
-- Plain .html files with one shared style.css
-- Simple client-side search across all doc pages
+Also require a docs/ folder — a documentation site built with:
+- VitePress for JavaScript projects
+- Zensical for Python projects
+- Pick the option that matches the main project language
 - Internal documentation
 - Changelog
 
 Save the recommendation to .memory/tech-stack.md</code></pre>
 
-      <p>Your docs site should be as simple as the project itself — static HTML files you can open in a browser. No generators, no build steps. Include a lightweight client-side search so you can find anything across all documentation pages without a server.</p>
+      <p>Don't hand-write the docs as static HTML. Use VitePress when the project lives in the JavaScript ecosystem, or Zensical when it lives in the Python ecosystem. The docs tool should match the project's primary language so the documentation stays easy to maintain.</p>
 
       <h3>Logging and tracing from day one</h3>
 
diff --git a/zh/quickstart.html b/zh/quickstart.html
index 03166a1..fed8c39 100644
--- a/zh/quickstart.html
+++ b/zh/quickstart.html
@@ -252,16 +252,16 @@ Avoid:
 - Heavy abstraction
 - Premature scale tools
 
-Also require a docs/ folder — a static HTML documentation site:
-- No build step, no framework, no static site generator
-- Plain .html files with one shared style.css
-- Simple client-side search across all doc pages
+Also require a docs/ folder — a documentation site built with:
+- VitePress for JavaScript projects
+- Zensical for Python projects
+- Pick the option that matches the main project language
 - Internal documentation
 - Changelog
 
 Save the recommendation to .memory/tech-stack.md</code></pre>
 
-      <p>你的文档站点应该和项目本身一样简单——可以直接在浏览器中打开的静态HTML文件。不需要生成器，不需要构建步骤。包含一个轻量级的客户端搜索功能，这样你就可以在所有文档页面中查找任何内容，无需服务器。</p>
+      <p>不要把文档手写成静态HTML。项目属于 JavaScript 生态时使用 VitePress，属于 Python 生态时使用 Zensical。文档工具应该与项目的主要语言保持一致，这样文档才容易维护。</p>
 
       <h3>从第一天起就要有日志和追踪</h3>
 

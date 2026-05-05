# Apple App Marketing Website PRD

## 1. 文档目的

本文档定义一个可复用的 Apple App marketing website 产品需求，用于快速搭建任意 iOS / iPadOS / macOS App 的官网。该 PRD 已脱敏，不包含原产品的专有品牌、行业场景、下载链接、产品声明或公司信息。

目标是让新产品只需要替换品牌、App Store 链接、功能卖点、截图素材和法务文本，就能得到一个具备转化、SEO、信任建立和合规基础的营销网站。

## 2. 当前 Marketing 站点需求总结

现有站点体现出以下产品需求：

- 单页高转化首页：固定导航、首屏品牌定位、App Store 下载 CTA、真实设备 mockup、核心功能展示、页脚二次转化。
- App UI 驱动的视觉表达：首屏和功能区优先展示产品实际使用场景，而不是抽象插画。
- 功能分层讲述：先概括核心能力，再用重点 feature sections 解释差异化能力和平台能力。
- Apple 生态强化：突出 iOS widgets、Live Activities、native interaction、App Store 下载入口等平台特性。
- SEO 基础设施：每个页面动态设置 title、description、canonical、Open Graph、Twitter card。
- Programmatic SEO / GEO 内容：`/guides` 列表页和 `/guides/:slug` 内容详情页，用漏斗阶段问题覆盖 awareness、evaluation、comparison、decision。
- 结构化数据：FAQPage 和 Product JSON-LD 用于内容页。
- 法务与信任页面：Privacy Policy、Terms of Service、Contact 页面完整存在并可从导航和页脚访问。
- 分析追踪：GA4 可选配置，跟踪 page_view、App Store 下载点击、guide 点击和 lead 事件。
- 部署要求：需要 sitemap、robots、OG 默认图、SPA redirect、生产域名配置。

## 3. 产品目标

### 3.1 商业目标

- 提升 App Store 点击率和下载转化。
- 建立新用户对产品质量、隐私和长期维护的信任。
- 为搜索引擎和 AI 搜索/生成式问答提供结构化、可引用的产品内容。
- 支持投放、社媒分享、产品发布和 App Store 外部流量承接。

### 3.2 用户目标

- 在 5 秒内理解 App 是什么、为谁解决什么问题。
- 快速判断产品是否适合自己。
- 看到可信的 App UI、平台能力和核心功能。
- 能找到隐私、条款、联系支持和更多学习内容。
- 能顺畅跳转到 App Store。

## 4. 目标用户

- 潜在下载用户：从 App Store、搜索、社媒、广告、朋友推荐进入。
- 对比评估用户：正在比较多个同类 App，需要功能、隐私、价格或平台能力信息。
- 媒体/创作者：需要快速理解产品定位和获取品牌信息。
- Apple Review / 合规相关人员：需要访问 privacy、terms、contact 等基础页面。

## 5. 信息架构

必须包含以下路由：

- `/`：主 landing page。
- `/guides`：SEO 内容中心，列出决策问题或场景指南。
- `/guides/:slug`：单篇 SEO 内容页。
- `/privacy`：隐私政策。
- `/terms`：服务条款。
- `/contact`：联系支持。

推荐静态资源：

- `/og-default.png`：默认社交分享图。
- `/sitemap.xml`：站点地图。
- `/robots.txt`：搜索抓取配置。
- `/_redirects` 或等价配置：支持 SPA 刷新和深链路。

## 6. 首页需求

### 6.1 顶部导航

- 左侧显示 App icon 和品牌名。
- 桌面端显示 Features、Guides、Privacy、Terms、Contact、Download CTA。
- 移动端使用 hamburger menu，展开后显示同样导航项。
- 导航滚动后需要有半透明/模糊背景，提高可读性。

### 6.2 Hero

Hero 必须完成以下任务：

- 明确 App 名称或产品类别。
- 用一句定位文案说明产品价值。
- 提供 App Store 下载 CTA。
- 展示真实或高保真的 App UI mockup。
- 避免只用抽象图形、渐变背景或无产品信息的装饰图。

建议内容结构：

- 状态/卖点 badge：例如 “Built for iPhone”、“AI-assisted”、“Private by default”。
- H1：品牌名、产品类别或一句强定位。
- Supporting copy：3 个以内核心差异点。
- Primary CTA：Download on the App Store。
- Product visual：iPhone/iPad/Mac mockup，展示关键 workflow。

### 6.3 功能总览

需要 4-6 个 feature cards，每个包含：

- 图标。
- 短标题。
- 1-2 句用户收益描述。
- 不堆砌技术名词，优先表达用户结果。

功能卡片应覆盖：

- 核心 workflow。
- 差异化功能。
- Apple 平台集成。
- 隐私/可靠性/安全性。
- 用户效率或自动化能力。

### 6.4 重点 Feature Sections

至少 2-3 个重点功能区，每个功能区应包含：

- 一个强标题。
- 一段解释性文案。
- 高保真视觉演示，例如 App screen、device mockup、widget mockup、workflow simulation。
- 与平台能力相关时，明确说明支持 iOS widget、Live Activity、Shortcuts、iCloud、Siri、Apple Watch、macOS menu bar 等。

### 6.5 页脚

页脚必须包含：

- 品牌信息和一句长期价值声明。
- Product links：Features、Guides、Contact。
- Legal links：Privacy、Terms。
- 社交/社区入口，如 X、LinkedIn、Threads、Discord，可用“coming soon”状态。
- Copyright。
- 系统状态或版本信息可选。

## 7. Guides / SEO 内容需求

### 7.1 内容策略

Guides 用于覆盖用户从认知到决策的搜索问题。内容不应是博客流水账，而应是短、清晰、可引用的决策型问答。

每篇 guide 应归类到一个 funnel stage：

- Awareness：用户意识到问题。
- Evaluation：用户评估是否需要工具。
- Comparison：用户比较不同方案。
- Decision：用户准备下载或购买。

### 7.2 Guide 数据结构

每篇内容至少包含：

- `id`：两位编号。
- `slug`：SEO 友好的 URL。
- `stage`：漏斗阶段。
- `question`：用户会搜索的问题。
- `answer`：简洁专家式回答。
- `dataPoint`：一个可信事实或判断依据。
- `updatedAt`：更新时间。
- `sources`：来源链接数组。

### 7.3 Guide 列表页

需求：

- 显示页面 title、description。
- 以卡片或列表展示所有 guides。
- 每个 item 显示编号、问题、阶段或摘要。
- 点击 guide 时记录 analytics event。

### 7.4 Guide 详情页

需求：

- 独立 SEO meta。
- 页面顶部显示返回链接、阶段、问题标题。
- 正文包含 expert answer、data point、sources、updated date。
- 页面中或底部提供 App Store 下载 CTA。
- 显示同阶段 related guides。
- 输出 FAQPage JSON-LD。
- 输出 Product 或 SoftwareApplication JSON-LD。

## 8. SEO 与元信息需求

每个页面需要设置：

- `document.title`
- meta description
- robots
- canonical
- og:type
- og:title
- og:description
- og:url
- og:image
- twitter:card
- twitter:title
- twitter:description
- twitter:image

站点需要支持：

- `VITE_SITE_URL` 或等价环境变量。
- 默认 OG 图片。
- sitemap 使用生产域名。
- robots 指向 sitemap。
- 内容详情页注入 JSON-LD。

## 9. Analytics 需求

Analytics 应为可选配置，不配置时网站正常工作。

推荐事件：

- `page_view`
- `select_content`：点击 guide。
- `generate_lead`：从内容页点击下载。
- `app_store_click` 或 `download_click`：所有 App Store CTA。

事件参数建议：

- `source`：nav_desktop、nav_mobile、hero_primary、footer、guide_detail 等。
- `content_type`：geo_guide、landing_cta 等。
- `item_id`：guide slug 或 CTA id。
- `stage`：awareness、evaluation、comparison、decision。

## 10. 法务与信任页面

### 10.1 Privacy Policy

必须说明：

- 收集哪些数据。
- 数据存储位置。
- 是否使用 analytics。
- 是否使用第三方服务。
- 用户如何联系、删除数据或提出隐私请求。
- 与 App Store / Apple payment / iCloud 等 Apple 服务的关系。

### 10.2 Terms

必须说明：

- 使用条款接受。
- 产品用途和限制。
- 订阅/付费/退款说明，如适用。
- 用户责任。
- 知识产权。
- 免责声明。
- 条款更新方式。

### 10.3 Contact

必须包含：

- 支持邮箱。
- 反馈说明。
- bug report 建议包含 device model、OS version、app version。
- 对敏感信息的提醒，避免用户通过邮件发送不必要的隐私数据。

## 11. 转化需求

所有主要 CTA 都应指向 App Store URL。

CTA 位置：

- 桌面导航。
- 移动菜单。
- Hero。
- Guides 详情页。
- 页脚或最终下载区。

CTA 行为：

- 新标签打开 App Store。
- 添加 `rel="noopener noreferrer"`。
- 触发 analytics event。
- 文案统一，例如 “Download on the App Store”。

## 12. 视觉与交互原则

- 视觉第一信号必须是实际产品，不是抽象营销图。
- 首屏应展示 App UI 或设备 mockup。
- 页面风格应接近 Apple 软件的高级、克制、清晰表达。
- 动效应服务于理解，例如展示完成任务、切换状态、扫描、同步或 widget 更新。
- 移动端必须完整适配，不允许文字溢出、CTA 过窄或导航遮挡内容。
- 所有 icon button 必须有可理解的 label 或 aria-label。
- 降低装饰性图形占比，优先让产品截图、workflow 和平台能力承载视觉。

## 13. 技术需求

推荐技术栈：

- React + Vite。
- React Router。
- Tailwind CSS。
- lucide-react icons。
- 环境变量支持 GA 和生产域名。

构建脚本：

- `npm run dev`
- `npm run build`
- `npm run preview`

部署要求：

- 支持 SPA fallback。
- 配置生产域名。
- 更新 sitemap、robots、canonical 默认值。
- 静态资源压缩。

## 14. 内容替换清单

迁移到新 App 时必须替换：

- App name。
- App icon。
- App Store URL。
- Hero headline。
- Hero supporting copy。
- 4-6 个核心 feature cards。
- 2-3 个重点 feature sections。
- App UI mockup 内容和截图。
- SEO title / description。
- Guides 题库、答案、数据点和来源。
- Privacy Policy。
- Terms。
- Contact email。
- Social links。
- Copyright entity。
- `VITE_SITE_URL`。
- `sitemap.xml` 和 `robots.txt` 中的域名。
- `og-default.png`。

## 15. 验收标准

### 15.1 功能验收

- 首页在桌面和移动端都可正常浏览。
- 所有导航链接可点击并进入正确页面。
- 所有 App Store CTA 可点击并打开正确链接。
- 移动菜单可打开、关闭，并不会遮挡主要内容。
- Guides 列表页和详情页可正常渲染。
- 无效 guide slug 会回到 guides 列表页或显示合理 fallback。
- Privacy、Terms、Contact 页面存在并可访问。

### 15.2 SEO 验收

- 每个页面有唯一 title 和 description。
- canonical URL 正确。
- OG/Twitter meta 正确。
- Guide 详情页包含 JSON-LD。
- sitemap 和 robots 使用生产域名。
- 默认 OG 图片可访问。

### 15.3 转化验收

- Hero CTA、导航 CTA、移动菜单 CTA、guide detail CTA 均有 analytics event。
- 不配置 GA 时页面不报错。
- App Store 链接统一可维护，避免散落硬编码。

### 15.4 质量验收

- `npm run build` 通过。
- 页面无明显 console error。
- 移动端 375px 宽度下无横向滚动。
- 首屏加载后能立即看到品牌、价值主张和产品视觉。
- 文案中不包含旧品牌、旧 App Store URL、旧隐私声明或旧行业专属内容。

## 16. 推荐交付物

- React marketing site 源码。
- `README.md`，说明环境变量、开发、构建、部署和域名替换。
- `public/og-default.png`。
- `public/sitemap.xml`。
- `public/robots.txt`。
- Privacy Policy 页面。
- Terms 页面。
- Contact 页面。
- Guides 内容数据文件。
- Analytics helper。
- SEO meta helper。

## 17. 非目标

- 不要求实现登录、账户系统或后台 CMS。
- 不要求在 marketing site 内完成购买。
- 不要求替代 App Store 产品页。
- 不要求为每个 guide 自动生成内容，内容必须人工审核。
- 不要求收集敏感用户数据。

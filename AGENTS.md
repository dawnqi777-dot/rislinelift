# RISLINE LIFT 外贸官网 - 需求拆解文档

## 产品概述

- **产品类型**: 外贸企业官网（B2B 品牌展示 + 询盘转化）
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 全球海外采购商、建筑商、经销商、别墅业主（B2B 为主）
- **核心价值**: 通过专业、国际化的品牌形象展示，建立"中国制造、专业品质、全球出口"的信任感，驱动客户发起询盘
- **界面语言**: 英文
- **主题偏好**: 浅色（深蓝+白+灰）
- **导航模式**: 锚点导航
- **导航布局**: Topbar（固定顶部）

---

## 页面结构总览

> **说明**：单页落地页结构，所有内容区块通过锚点导航串联

**页面文件**: `HomePage.tsx`

| 区块名称 | 锚点 | 区块说明 |
|---------|------|---------|
| 导航栏 | - | 固定顶部，含 Logo + 6 个导航项 + WhatsApp CTA 按钮 |
| Hero Banner | `#hero` | 全屏主视觉区，品牌 Slogan + 核心卖点 + CTA 按钮 |
| 公司数据展示 | `#stats` | 4 个核心数字统计卡片（经验年限/产能/出口国家/团队规模） |
| 公司介绍/核心优势 | `#about` | 公司简介 + 核心优势列表（OEM/ODM/快速响应/品质保证） |
| 工厂实力展示 | `#factory` | 工厂图片/生产能力/设备/质检体系展示 |
| 产品展示 | `#products` | 4 类产品卡片式展示（别墅电梯/货梯/剪叉升降平台/无障碍升降平台） |
| OEM/ODM 定制能力 | `#customization` | 定制流程 + 能力说明 + 合作模式 |
| 客户案例/合作伙伴 | `#cases` | 合作品牌 Logo 墙 + 案例展示 |
| 联系我们/询盘 CTA | `#contact` | 在线询盘表单 + WhatsApp 按钮 + 联系信息 |
| 页脚 | - | 版权信息 + 快速链接 + 社交媒体 |

---

## 页面布局建议

- **布局模式**: 单栏全宽布局（各 Section 纵向堆叠，内容区居中最大宽度 1200px）
- **视觉重心**: Hero Banner 主视觉区 → 数据统计 → 产品展示 → 询盘 CTA（按浏览动线引导）
- **结果承载区**: 询盘表单提交后展示成功状态（感谢提示 + 预计回复时间）；初始态为表单空状态

---

## 导航配置

- **导航布局**: Topbar（顶部固定，滚动时保持可见）
- **导航项**:

| 导航文字 | 锚点 |
|---------|------|
| Home | `#hero` |
| Products | `#products` |
| About Us | `#about` |
| Factory | `#factory` |
| Customization | `#customization` |
| Contact Us | `#contact` |

- **CTA 按钮**: 导航栏右侧固定 WhatsApp 联系按钮（图标 + "WhatsApp" 文字）

---

## 数据来源声明

| 数据/操作 | 来源类型 | 实现要求 | mock 兜底 |
|---|---|---|---|
| 公司核心数据（经验年限/产能/出口国家/团队规模） | demo-mock | `src/data/company.ts` 常量定义，含 `source: 'mock'` 标记 | ✅ 本身就是 mock |
| 产品列表（4 类产品信息） | demo-mock | `src/data/products.ts` 常量数组，含产品名/描述/图片占位/分类 | ✅ 本身就是 mock |
| 客户案例/合作伙伴 Logo | demo-mock | `src/data/partners.ts` 常量数组，含公司名/Logo 占位 | ✅ 本身就是 mock |
| 工厂实力图片/设备信息 | demo-mock | `src/data/factory.ts` 常量，含图片占位 + 描述文本 | ✅ 本身就是 mock |
| 询盘表单提交 | demo-mock | 前端表单验证 + 提交后展示成功状态（toast + 感谢提示），不实际发送 | ✅ 本身就是 mock |
| WhatsApp 联系 | demo-mock | 点击跳转 WhatsApp 链接（`https://wa.me/` + 占位号码） | ✅ 本身就是 mock |

> **说明**：本需求为纯展示型官网，所有内容均为静态展示数据，无真实文件/API/插件/持久化需求，全部使用 demo-mock 承载。

---

## 功能列表

- **区块: 导航栏**
  - **页面目标**: 提供全局导航入口，固定可见，引导用户浏览各区块
  - **功能点**:
    - **Logo 展示**: 左上角展示 RISLINE LIFT Logo（图片占位），点击回到顶部
    - **锚点导航**: 6 个导航项点击平滑滚动到对应 Section，当前可视区块对应导航项高亮
    - **WhatsApp CTA**: 右侧固定 WhatsApp 图标按钮，点击新窗口打开 WhatsApp 链接
    - **移动端汉堡菜单**: 平板/手机端导航折叠为汉堡图标，点击展开下拉菜单

- **区块: Hero Banner** (`#hero`)
  - **页面目标**: 首屏建立品牌第一印象，传达核心价值主张，引导用户继续浏览或立即询盘
  - **功能点**:
    - **全屏背景视觉**: 深蓝渐变背景 + 电梯产品高清图占位（后续可替换），叠加半透明遮罩
    - **品牌 Slogan**: 主标题 "China Industrial Elevator Manufacturer" + 副标题 "Professional Villa & Home Elevator Solutions for Global Markets"
    - **核心卖点标签**: 3 个标签式展示（OEM/ODM Manufacturer / Fast Response Within 12 Hours / Global Export Experience）
    - **双 CTA 按钮**: "Explore Products"（滚动到 `#products`）+ "Get a Quote"（滚动到 `#contact`）
    - **滚动提示**: 底部向下箭头动画，暗示可滚动

- **区块: 公司数据展示** (`#stats`)
  - **页面目标**: 用数字建立信任感和专业度，快速传递公司实力
  - **功能点**:
    - **4 个统计卡片**: Years of Experience / Annual Production Capacity / Export Countries / Professional Team Members
    - **数字滚动动画**: 进入视口时数字从 0 递增到目标值（count-up 效果）
    - **图标辅助**: 每个卡片配简约图标（工厂/地球/团队等）

- **区块: 公司介绍/核心优势** (`#about`)
  - **页面目标**: 讲述品牌故事，展示差异化优势，建立深度信任
  - **功能点**:
    - **公司简介文本**: 2-3 段英文介绍，涵盖公司历史、定位、使命
    - **核心优势列表**: 4-6 个优势项（图标 + 标题 + 简短描述），如 OEM/ODM Capability / Quality Control / Fast Response / Competitive Pricing / Global Logistics
    - **配图**: 右侧或背景配公司团队/工厂图片占位

- **区块: 工厂实力展示** (`#factory`)
  - **页面目标**: 展示生产能力和品控体系，消除海外客户对"中国制造"的质量顾虑
  - **功能点**:
    - **工厂图片画廊**: 3-4 张工厂实拍图占位（生产线/质检/仓库），支持轮播或网格展示
    - **生产能力数据**: 厂房面积 / 生产线数量 / 月产能 / 质检标准
    - **认证展示**: ISO/CE 等认证 Logo 占位

- **区块: 产品展示** (`#products`)
  - **页面目标**: 清晰展示 4 大产品线，引导客户了解产品并询盘
  - **功能点**:
    - **4 张产品卡片**: Villa Elevator / Cargo Lift / Scissor Lift / Wheelchair Lift
    - **卡片内容**: 产品图片占位 + 产品名称 + 简短描述 + "Learn More" 链接（可锚点到 `#contact` 或展开详情）
    - **悬停效果**: 卡片 hover 时图片微缩放 + 阴影加深
    - **分类筛选（可选）**: 顶部 4 个分类标签，点击筛选对应产品（当前仅 4 个产品，可省略）

- **区块: OEM/ODM 定制能力** (`#customization`)
  - **页面目标**: 突出定制能力这一核心卖点，吸引有特殊需求的 B2B 客户
  - **功能点**:
    - **定制流程展示**: 3-4 步流程（需求沟通 → 方案设计 → 生产制造 → 物流交付），步骤间箭头连接
    - **能力说明**: 可定制范围（尺寸/载重/速度/材质/控制系统等）
    - **合作模式**: OEM/ODM/品牌贴牌 三种模式说明
    - **CTA 引导**: 底部 "Start Your Custom Project" 按钮，滚动到 `#contact`

- **区块: 客户案例/合作伙伴** (`#cases`)
  - **页面目标**: 用社会证明增强信任，展示全球合作网络
  - **功能点**:
    - **合作伙伴 Logo 墙**: 6-8 个合作品牌 Logo 占位，网格排列，灰度处理 hover 变彩色
    - **案例卡片（可选）**: 2-3 个精选案例（项目图片 + 国家 + 简短描述）

- **区块: 联系我们/询盘 CTA** (`#contact`)
  - **页面目标**: 提供便捷的询盘入口，降低客户联系门槛，最大化转化
  - **功能点**:
    - **在线询盘表单**: 字段含 Name / Email / Phone(可选) / Country / Product Interest(下拉选择) / Message
    - **表单验证**: 必填字段校验（Name/Email/Message），Email 格式校验
    - **提交反馈**: 提交后展示成功状态（toast "Thank you! We will reply within 12 hours." + 表单重置）
    - **WhatsApp 快速联系**: 醒目的 WhatsApp 按钮 + 提示 "Prefer instant messaging? Chat with us on WhatsApp"
    - **联系信息**: 公司邮箱 / 电话 / 地址（占位文本）

- **区块: 页脚**
  - **页面目标**: 提供补充信息和快速链接，收尾页面
  - **功能点**:
    - **快速链接**: 重复导航项链接
    - **产品链接**: 4 个产品分类链接
    - **联系信息**: 邮箱/电话/地址
    - **版权信息**: "© 2026 RISLINE LIFT. All rights reserved."
    - **社交媒体图标**: LinkedIn / Facebook / YouTube 图标占位（可选）

---

## 数据共享配置

无跨页面数据共享需求（单页落地页，所有数据在各自区块内独立管理）。

-------

<scene_type>prototype-app</scene_type>

# UI 设计指南

## 1. 设计推导依据

- **参考意图**: Mood Reference —— 参考 haokungroups.com 的国际化商务气质、深蓝主色倾向和信息密度，不照搬具体版式或组件
- **核心情绪 / 应用类型**: 工业精密感 + 全球贸易信任感；B2B 外贸 Landing Page，面向海外采购决策者
- **独特记忆点**: 电梯井道般的纵向空间节奏——Hero 全屏深蓝如井道内部，向下滚动时白色内容区如楼层逐层展开，形成"垂直工业空间"的浏览隐喻

## 2. Art Direction

- **方向名**: Industrial Editorial
- **Design Style**: Swiss Minimalist 瑞士极简 + 工业精密感 —— 克制、秩序、材质诚实，用留白和网格传递制造企业的工程严谨性，避免装饰过度
- **DNA 参数**: 圆角 subtle（rounded-md，卡片和按钮微圆，保留工业制品的硬朗边缘感）；阴影 subtle（shadow-sm，轻投影仅用于卡片浮起，不制造重阴影戏剧感）；间距 spacious（section 间距 py-20~py-28，内容区宽松呼吸）；字体方向 无衬线几何感 + 数字等宽强调；装饰手法 细线分隔、数据数字大字号、金属质感点缀（金色细线或图标）
- **应用类型**: Landing —— 长滚动叙事，每个 section 独立完整，首屏 Hero 强视觉锚点

## 3. Color System

**色彩关系**: 深蓝主色（工业机械蓝）+ 暖灰中性基底 + 香槟金 accent 点缀，白色大面积留白承载内容
**配色设计理由**: primary 深蓝传递制造企业的稳定、精密和工程可信度，用于 CTA、关键数字和导航激活态；accent 香槟金用于 hover 微交互和品质感点缀，呼应电梯金属部件和高端定制感；bg 纯白保持 B2B 专业洁净感，card 极浅灰蓝提供微弱层次
**主色推导**: 从工业电梯的机械蓝、钢结构深色和金属材质中提取；参考站 haokungroups 的深蓝倾向，但降低饱和度使其更克制、更耐看，避免"科技公司蓝"的轻浮感
**使用比例**: 60% 中性（白/浅灰蓝底 + 深灰文字）/ 30% 辅助（暖灰 border、浅灰蓝 card）/ 10% primary（CTA 按钮、关键数字、导航激活、品牌锚点）

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|---|---|---|---|---|
| bg | `--background` | `bg-background` | hsl(0 0% 100%) | 纯白页面底，专业洁净 |
| card | `--card` | `bg-card` | hsl(210 20% 97%) | 极浅灰蓝卡片底，微弱层次 |
| text | `--foreground` | `text-foreground` | hsl(215 25% 15%) | 深蓝灰标题正文，高对比 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(215 10% 45%) | 辅助说明、占位符 |
| primary | `--primary` | `bg-primary` / `text-primary` | hsl(218 45% 28%) | 深工业蓝，CTA、关键数字、导航激活 |
| primaryForeground | `--primary-foreground` | `text-primary-foreground` | hsl(0 0% 100%) | primary 上的白色文字 |
| accent | `--accent` | `bg-accent` | hsl(40 30% 94%) | 暖灰金浅底，hover/focus 反馈 |
| accentForeground | `--accent-foreground` | `text-accent-foreground` | hsl(40 25% 35%) | accent 上的香槟金文字，品质点缀 |
| border | `--border` | `border-border` | hsl(215 12% 85%) | 冷灰边框，结构分隔 |

**语义色提示**: 
- 成功（询盘发送成功、在线状态）: bg `hsl(150 35% 92%)` / border `hsl(150 30% 65%)` / text `hsl(150 40% 28%)`，饱和度与 primary 对齐，偏冷绿表达工业可靠而非消费活泼
- 警告（表单校验）: bg `hsl(38 40% 93%)` / border `hsl(38 35% 60%)` / text `hsl(38 45% 30%)`，暖黄与 accent 色温一致
- 错误: bg `hsl(0 30% 94%)` / border `hsl(0 25% 62%)` / text `hsl(0 35% 32%)`，低饱和红避免刺眼

## 4. 字体与节奏

- **font-display**: Space Grotesk —— 几何无衬线，数字和字母有轻微机械感，契合工业制造气质，大字号时力量感强
- **font-body**: Inter —— 高可读性，与 Space Grotesk 同属几何无衬线家族，正文段落清晰，海外 B2B 客户阅读无负担
- **字号**: H1 text-5xl ~ text-6xl（Hero 主标题）；H2 text-3xl ~ text-4xl（section 标题）；body text-base；muted text-sm
- **圆角**: subtle —— rounded-md（6px），卡片、按钮、输入框统一微圆，保留工业制品的硬朗边缘感，不圆润不尖锐

## 5. 全局布局契约

- **Reference Layout Use**: 按需求结构推导，参考站提供 section 顺序和叙事节奏（Hero → 数据 → 介绍 → 工厂 → 产品 → 定制 → 案例 → CTA），不复制具体版式
- **Page / Section Order**: Hero Banner → Company Data（数字统计）→ About / Core Advantages → Factory Strength → Products（4 类卡片）→ OEM/ODM Customization → Clients / Partners → Contact / Inquiry CTA → Footer
- **Standard Content Zone**: `max-w-6xl`（1280px）+ `mx-auto`，B2B 外贸站需要展示产品图和工厂实景，略宽容器容纳图片与文字并排
- **Shell / Frame Alignment**: 内容容器与导航同宽（max-w-6xl），导航固定顶部，内容区独立滚动
- **Padding & Rhythm**: `px-4 md:px-6 lg:px-8`，section 纵向间距 `py-20 md:py-24 lg:py-28`，保持 8px 倍数节奏
- **Full-bleed Zones**: Hero Banner 背景全宽 `w-full`，内部文字和 CTA 受 Standard Content Zone 约束；Factory 和 Contact section 可使用全宽背景色带，内容仍居中
- **Local Narrowing**: 询盘表单在 Contact section 内收窄至 `max-w-2xl`，保持填写专注度
- **Overflow Strategy**: 产品卡片网格在移动端横向滚动（`overflow-x-auto`），桌面端正常展示 4 列
- **Flexibility Boundary**: 允许移动端调整 padding 和卡片列数；全局 max-w-6xl、primary 色、rounded-md 圆角系统、shadow-sm 阴影语言保持一致

## 6. 视觉与动效

- **装饰**: 细线分隔（1px border 冷灰）、数据数字大字号加粗（text-4xl~text-5xl Space Grotesk）、香槟金细线点缀 section 标题下方
- **阴影/边界**: 轻 —— shadow-sm 仅用于产品卡片和询盘表单卡片浮起，其余区域用 border 分隔
- **动效**: 精致 —— 滚动入场使用淡入上移（fade-in-up），产品卡片 hover 时微上浮（translateY -4px）+ 阴影加深，导航滚动后背景从透明渐变到白色；CTA 按钮 hover 时 primary 色微加深；数字统计区使用 count-up 动画

## 7. 组件原则

- 按钮、表单、菜单、卡片必须有 Default / Hover / Active / Focus / Disabled 状态
- Primary 按钮（深蓝实心）承担 CTA 和询盘提交；Secondary/Outline 用 primary 色边框 + 透明底；Ghost 导航链接用 text 色，hover 时 accent 浅底
- 产品卡片：图片区占卡片 60% 高度，下方标题 + 简短描述，hover 时卡片上浮 + 图片微缩放
- 加载与空状态：Skeleton 使用 accent 色浅底脉冲动画，延续微圆工业感

## 8. Image Direction

- **Image Role**: Hero 全屏背景图（电梯井道或别墅电梯实景）、产品卡片缩略图、工厂实景展示图、合作伙伴 logo 墙
- **Image Art Direction**: 
  - Hero：深景深电梯井道内部或现代别墅电梯实景，仰角构图强调垂直空间感，冷色调金属材质（不锈钢导轨、玻璃轿厢），侧光照明形成明暗对比，传递精密制造和空间品质感
  - 产品图：白色或浅灰背景产品棚拍，电梯产品居中完整展示，光线均匀柔和，突出金属材质和玻璃质感，无杂乱环境
  - 工厂图：广角拍摄现代化工厂车间，数控设备、装配线、质检场景，自然光+工业照明混合，色调偏冷，强调规模和专业性
- **Image Prompt Keywords**: industrial elevator shaft, modern villa elevator interior, stainless steel guide rails, glass elevator cab, precision manufacturing, cool metallic tones, side lighting depth, clean factory workshop, CNC machinery, professional B2B photography, architectural vertical composition
- **Image Avoidance**: 避免通用商务握手图、过度暖色调家庭场景、廉价 stock photo 人物微笑、无主题抽象科技感渐变背景、电梯产品与环境比例失调的合成图

## 9. Anti-patterns

- **Split personality**: 不同 section 切换圆角大小或阴影深度；全站统一 rounded-md + shadow-sm
- **Phantom tokens**: 编造不存在的 CSS 变量；只使用已定义 9 角色 token
- **Default SaaS drift**: 回到 Inter 默认蓝按钮或紫色渐变；坚持深工业蓝 primary + 香槟金 accent
- **Invisible interaction**: 导航链接、产品卡片、表单输入框缺少 focus-visible 状态；每个可交互元素必须有键盘可见 ring
- **Mono-hue tyranny**: primary 深蓝同时用于按钮、图标、链接、边框、tab；按 60-30-10 收回到 CTA 和品牌锚点，其余用 accent 和中性色
- **Status color drift**: 成功绿或错误红饱和度远高于 primary 深蓝；语义色饱和度与 primary 对齐在 25-40% 区间
- **Image inconsistency**: 产品图与工厂图风格割裂（一边暖调生活风一边冷调工业风）；统一冷调金属质感摄影方向
# 词库来源与使用范围

整理日期：2026-11-03。这里的“齐全”指已覆盖所选社区数据集，不宣称覆盖出版社词典全文或官方考试全部可能词汇。

## 原有英语、JLPT 与新增英语扩展词表

- 来源：[Qwerty Learner](https://github.com/RealKai42/qwerty-learner/tree/master/public/dicts)，上游英语数据：[kajweb/dict](https://github.com/kajweb/dict)。仓库许可 GPL-3.0，见 LICENSE.txt。原始 JSON 随源码保留。
- 原有 CET-4、CET-6、IELTS、TOEFL、JLPT N5–N1 保持原词序与内容，因此历史学习进度不变。
- 新增 Oxford5000 社区核心词表、IELTS 顺序扩展词表。过滤缺少中文释义的行，合并完全重复的词与释义。不将 Oxford 核心词表称为牛津出版词典。

## 标准日本语六册

- 来源：[smartsl/biaori](https://github.com/smartsl/biaori)，源树版本 4eb0da3748659dcf54e6f50bbb5fdc9904258f85；仓库 MIT 声明见 biaori-LICENSE.txt。
- 取 words.json，保留日文、假名、中文、词性和课号。按源课号分为初级 1–24 / 25–48 课，中级 1–16 / 17–32 课，高级 1–12 / 13–24 课。
- 初始 9,117 行，完全相同的词与释义去重后 9,112 条。未包含课文、教材插图、配套音视频。教材及其商标权利归原出版方，社区仓库的许可不代表出版社对所有教材内容的许可。

## 韩语六级学习词表

- 等级词表：[CheesePotato / EveryKoreans](https://everykoreans.com/topik-vocabulary-list/)，公开下载 topik-vocabulary-basic.csv，10,189 行。数据源声明为 NIKL 国际通用韩国语标准教育课程（KOGL Type 1）与韩国语基础词典（CC BY-SA 2.0 KR）。保留原 Source 列于 topik-levels.csv。
- 这些是学习参考等级，不是 TOPIK 考试官方公布的必考词表。源表有一个重复词义项，去重后 10,188 条。
- 中文词义与韩文例句来源：[国立国语院韩国语－汉语学习词典 KRDICT](https://krdict.korean.go.kr/chn/mainAction)。文本许可为 [CC BY-SA 2.0 KR](https://creativecommons.org/licenses/by-sa/2.0/kr/)，署名 National Institute of Korean Language / 国立国语院；[官方版权说明](https://krdict.korean.go.kr/chn/kboardPolicy/copyRightTermsInfo)。
- 公开格式转换包：[Lyroxide/yomitan-ko-dic 1.0.0](https://github.com/Lyroxide/yomitan-ko-dic/releases/tag/1.0.0)，KO-ZH.KRDICT.zip；转换包标注的构建日 2024-08-12，原始声明见 krdict-index.json。
- 转换：抽取中文词义、说明和第一条适用的韩文例句，合并同形词义，移除 HTML 展示结构；不包含音频或其他多媒体。派生的 KRDICT 词库仍按 CC BY-SA 2.0 KR 提供。
- 有 102 项未匹配到该版本的中文词条，释义为本站补充，逐项标记 source 字段，不属于 NIKL 原文。补充内容见 korean-supplement.json，按 CC BY-SA 2.0 KR 共享，不编造例句。
- 完整覆盖统计见 resource-audit.json，去重规则为相同外语词形及中文词义。多义词不保证全部适用于单一语境。

## 牛津、剑桥完整词典

- [Oxford API FAQ](https://developer.oxforddictionaries.com/faq)：完整数据需要相应授权，缓存与离线存储需要企业许可。
- [Cambridge 官方开发入口](https://dictionary.cambridge.org/develop.html)：通过 API 或数据许可接入。
- 未下载盗版 MDX、未抓取付费内容，网站保留授权接入入口。公开核心词表不能替代这两部完整词典。

## 本次筛除

- 延世韩国语社区卡组：虽然仓库代码标 MIT，但 README 将词库限定为个人学习，并含第三方歌词；不纳入本次发布。
- NIKL 5,965 词的第三方 CSV：等级仅 A/B/C，翻译和例句另设学习用途条件；不将它伪装成 TOPIK 1–6 全集。

各来源的版权声明和许可分别适用，不以网站代码的许可覆盖第三方数据。


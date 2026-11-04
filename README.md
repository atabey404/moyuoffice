<div align="center">

# MoyuOffice · 摸鱼事务所

**在熟悉的工作界面里，把工作间隙变成一点语言积累。**

[在线体验](https://atabey404.github.io/moyuoffice/) · [使用方法](#使用方法) · [词库](#内置词库) · [反馈问题](https://github.com/atabey404/moyuoffice/issues) · [参与贡献](CONTRIBUTING.md)

**简体中文** · [English](docs/README.en.md) · [日本語](docs/README.ja.md) · [한국어](docs/README.ko.md)

</div>

## 项目简介

MoyuOffice 是一个摸鱼背词网站。打开不同工作软件的桌面界面，按回车接收单词、查看释义，或默写已经学过的内容。它面向想利用零碎时间学习的人，支持英语、日语和韩语词库。

| 语言 | 简介 |
| --- | --- |
| 简体中文 | 用熟悉的工作软件界面学习英日韩词汇，支持回车翻译、已学词默写与学习记录续接。 |
| English | Learn English, Japanese, and Korean vocabulary in a familiar chat interface, with Enter-to-reveal meanings, dictation of studied words, and saved progress. |
| 日本語 | チャット画面で英語・日本語・韓国語の単語を学習。Enter キーで意味を確認し、学習済みの単語の書き取りや続きからの学習ができます。 |
| 한국어 | 익숙한 채팅 화면에서 영어·일본어·한국어 어휘를 학습하세요. Enter로 뜻 확인, 학습한 단어 받아쓰기, 학습 기록 이어하기를 지원합니다. |

当前为早期网页版本，操作界面以中文为主；四语文档介绍不代表界面已完成四语本地化（后续会持续更新“摸鱼皮肤”）。无需注册，直接在浏览器中使用。

## 功能

| 功能 | 当前支持 |
| --- | --- |
| 聊天界面 | 不同app风格，聊天框可自定义联系人名称与头像 |
| 学习模式 | 接收单词、中文释义，以及来源提供的音标和例句 |
| 回车翻译 | 外语单词 → 中文释义 → 下一个外语单词 |
| 默写模式 | 根据中文输入外语，只练习当前词库已经学过的词 |
| 记录续接 | 保存聊天记录和各词库进度，再进入时继续学习 |
| 生词本 | 主动收藏单词；默写时跳过的单词自动收录，可单独复习 |
| 我的词典 | 切换英日韩词库，支持导入自己的 CSV 词库 |
| 学习总览 | 按年查看学习热力图、每日单词、连续学习天数、时长和词库进度 |
| 重新学习 | 确认后清除指定词典的学习进度、默写轮次与聊天记录 |

## 使用方法

1. 打开 [MoyuOffice](https://atabey404.github.io/moyuoffice/)，在「我的词典」选择词库。
2. 点击「进入app皮肤」，在输入区选择学习模式。
3. 按下表使用回车；按 `Esc` 返回工作台并结束本次计时。

| 模式 | 按 Enter 的效果 |
| --- | --- |
| 学习模式 | 输入框为空时，接收下一个词；输入普通聊天内容再发送，不推进学习进度 |
| 回车翻译 | 输入框为空时，依次显示外语单词、中文释义、下一个单词；也可以发送普通聊天内容 |
| 默写 · 中文→外语 | 输入答案后提交；答对进入下一词，答错继续当前词；空回车跳过并加入生词本 |

默写仅包含当前词库已经学过的内容。本轮结束时显示「这轮默写已结束！可回车重复这轮默写」，再次空回车可重练本轮。答对后的「拍一拍」提示可以关闭。

联系人和提示设置可从聊天窗口右上角的 `•••` 打开。皮肤使用时长按进入到退出计算，代表打开皮肤的时间，不等同于持续专注学习的时间。

## 内置词库

| 学习语言 | 词库 |
| --- | --- |
| 英语 | CET-4、CET-6、雅思、托福、Oxford 5000 社区核心词表、雅思顺序扩展词表 |
| 日语 | JLPT N5–N1、《标准日本语》初级／中级／高级上下册社区词表 |
| 韩语 | TOPIK 1–6 级学习参考词表，中文释义主要来自 KRDICT |

这些是社区整理的学习资源，不宣称为官方考试完整清单。Oxford 5000 是核心词表，并非牛津完整词典；当前不包含牛津或剑桥出版词典全文。韩语等级为学习参考，部分补充释义在数据中单独标记。不同词库之间可能有重叠；音标和例句仅在来源提供时展示。

详细来源、处理方式和许可见 [词库来源说明](dictionaries/SOURCES.md) 与 [数据统计](dictionaries/resource-audit.json)。

### 导入自己的词库

在「偏好设置」中下载 CSV 模板并导入 UTF-8 CSV 文件（小于 1 MB）。`word` 和 `meaning` 必填，例句与翻译可留空：

```csv
word,meaning,example,translation
hello,你好,Hello there!,你好！
focus,专注；焦点,Focus on one thing.,专注于一件事。
```

## 数据保存

聊天记录、学习进度、生词本、头像和偏好设置保存在当前浏览器的本地存储中。项目不提供账号系统或云同步；更换设备、浏览器或网址不会自动迁移记录，清理网站数据也会删除本机记录。当前没有学习记录导出／导入功能。

本项目是独立的界面模拟，不连接微信、飞书或钉钉账号，也不收发真实社交消息，与这些产品不存在官方隶属或合作关系。

## 本地运行与部署

原生 HTML、CSS 和 JavaScript 静态网站，无需安装前端依赖或配置数据库。

```bash
git clone https://github.com/atabey404/moyuoffice.git
cd moyuoffice
```

打开 `index.html` 即可使用；开发时也可通过任意静态文件服务器运行。本地文件与线上网址的浏览器记录分别保存。

发布到 GitHub Pages：在仓库 **Settings → Pages** 中选择 **Deploy from a branch → main → / (root)**，保存并等待部署完成。仓库内的 `.nojekyll` 用于直接发布静态文件。当前正式地址为 [atabey404.github.io/moyuoffice](https://atabey404.github.io/moyuoffice/)。

## 版本与后续方向

当前提供微信浅色皮肤。深色模式、飞书、钉钉和文件界面为后续方向，尚未实现；其他皮肤的解锁也尚未开放。当前没有 AI 对话、智能判分或发音播放功能。

后续优先完善现有交互、词库质量与记录管理。计划可能调整，以实际发布内容为准。

## 反馈与贡献

欢迎提交 [Bug](https://github.com/atabey404/moyuoffice/issues) 或功能建议。请描述操作步骤、预期结果、实际结果和浏览器版本，截图中请遮挡个人信息。贡献代码、词库或翻译前，请阅读 [贡献指南](CONTRIBUTING.md)。

## 致谢与许可

感谢 [Qwerty Learner](https://github.com/RealKai42/qwerty-learner)、[kajweb/dict](https://github.com/kajweb/dict)、[smartsl/biaori](https://github.com/smartsl/biaori)、EveryKoreans、国立国语院 KRDICT 及相关数据转换项目提供的社区资源。具体贡献、数据变更与署名见 [SOURCES.md](dictionaries/SOURCES.md)。

第三方词库分别适用各自许可，包括 [Qwerty Learner 数据许可](dictionaries/LICENSE.txt)、[标日社区仓库许可](dictionaries/biaori-LICENSE.txt) 和来源说明中列出的 KRDICT 许可。请保留相应署名与许可声明。

项目自身代码目前尚未指定统一开源许可证。仓库公开可见，不代表全部内容可以任意复制、修改或商用；使用时应分别确认代码与第三方数据的授权范围。

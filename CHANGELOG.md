# 更新日志

本项目的所有重要变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [v0.3.1] - 2026-06-16

### 新增
- 课程大纲 v2.1：新增同类课程课时对比分析（1.3节），为周期与内容设计提供市场数据支撑
- 大幅扩充 Phase 1 index（41行→92行）：新增模块关系图、学习成果总结、常见误区
- 大幅扩充 Phase 2 index（49行→124行）：新增就业轨vs创业轨对比、学习路径图、选择建议
- 大幅扩充 Phase 3 index（51行→122行）：新增模块关系图、阶段特点对比、课程设计依据
- 大幅扩充 about.md（42行→125行）：新增数据总览、市场空白分析、行业标准对标、适用人群说明

### 修复
- 修复所有11个模块课件中的腾讯文档作业链接占位符（18处），改为"课程开始前通过群公布"
- 修复 module6a 美图AI PPT网址错误：xiu.mt.com → design.meitu.com/ppt
- 修复 module6b Vibe Coding工具模型描述：更新Cursor和Trae底层模型至2026年最新版本
- 修复 module6b GitHub Octoverse年份：2026→2025（Octoverse报告年底发布）
- 修复 module7b 秘塔AI搜索月活数据：删除无法验证的"5000万"具体数字
- 修复 module9 n8n GitHub Stars数据：50k→188k（2026年6月最新数据）
- 修复 module11 Omnivore工具推荐：替换为Readwise Reader（Omnivore已于2024年11月关停）
- 修复 Phase 2 index就业轨课时：32h→36h（与各模块实际课时之和一致）

### 数据验证
- 三个并行审查代理完成了全部13个课件文件的全面检查
- 验证了各文件的工具名称、网址、数据来源、课程安排一致性和内部链接有效性

## [v0.3.0] - 2026-06-16

### 新增
- 完成第二阶段就业轨全部课件：模块5A（AI简历与面试）、模块6A（AI办公效率）、模块7A（AI作品集）、模块8A（AI职业导航）
- 完成第二阶段创业轨全部课件：模块5B（AI创业赛道定位）、模块6B（Vibe Coding产品开发）、模块7B（AI营销与获客）、模块8B（OPC公司化运营）
- 完成第三阶段全部课件：模块9（AI自动化工作流）、模块10（AI智能体深度实战）、模块11（终身学习体系）
- 课程大纲升级至 v2.0：第三阶段从2周扩展至3周，总模块数从10个增至11个，总课时提升至100-120小时

### 优化
- 更新首页和关于页面数据：2周→3周
- 更新 Phase 2 和 Phase 3 索引页面
- 更新 VitePress 配置：新增模块10和模块11的导航与侧边栏
- 所有课程文件通过 VitePress 构建验证

## [v0.2.0] - 2026-06-16

### 新增
- 完成第一阶段模块2：Prompt Engineering 完整课件（4节课）
- 完成第一阶段模块3：AI工具深度实战 完整课件（4节课）
- 完成第一阶段模块4：AI+X 完整课件（4节课，含8大专业类别）
- 添加 CHANGELOG.md
- 添加 CONTRIBUTING.md 贡献指南
- 添加 CODE_OF_CONDUCT.md 行为准则
- 添加 MIT 开源许可证

### 优化
- 更新模块1内容：补充 AI 幻觉识别训练题目至 8 题，更新延伸阅读链接
- 优化 README.md 内容结构和许可证说明
- 完善 .gitignore 忽略规则

## [v0.1.0] - 2026-06-15

### 新增
- 初始化 VitePress 项目结构
- 完成课程大纲设计（course-syllabus.md v1.0）
- 完成课程制作与上线计划（course-production-plan.md v1.0）
- 完成学习组织建设方案（org-building-plan.md）
- 完成第一阶段模块1：AI认知破壁 完整课件（4节课）
- 设计网站首页和导航结构
- 配置 VitePress 主题和自定义样式
- 设计 logo.svg 和 favicon.svg
- 配置 GitHub Actions 自动部署到 Cloudflare Pages
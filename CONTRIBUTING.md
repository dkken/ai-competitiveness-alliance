# 参与贡献指南

感谢你考虑为 AI竞争力提升计划做出贡献！我们欢迎各种形式的贡献。

## 行为准则

参与本项目即表示你同意遵守我们的 [行为准则](CODE_OF_CONDUCT.md)。

## 如何贡献

### 报告问题

如果你发现了课程内容的错误、链接失效、表述不清等问题，请通过 GitHub Issues 提交反馈。

提交 Issue 时请包含：
- 问题所在的模块和章节
- 问题的具体描述
- 建议的修改方案（如果有）

### 改进课件

1. **Fork** 本仓库
2. 创建你的特性分支：`git checkout -b fix/improve-module-X`
3. 修改内容并提交
4. 推送到你的 Fork：`git push origin fix/improve-module-X`
5. 提交 **Pull Request**

### 课件内容规范

- 所有课件内容使用 Markdown 格式，位于 `docs/` 目录下
- 遵循现有的课件模板格式（见 `docs/phase1/module1.md` 作为参考）
- AI 工具链接需确保可访问
- Prompt 模板需经实际测试验证
- 保持"零门槛"的写作风格

### 成为校园大使

校园大使是课程社区的核心力量。作为校园大使，你将：
- 在你的学校推广课程
- 组织学习小组
- 收集学员反馈
- 协助本地化课程内容

申请方式：通过 GitHub Issues 提交申请，说明你的学校和专业背景。

## 开发指南

### 本地开发

```bash
npm install
npm run docs:dev
```

### 构建

```bash
npm run docs:build
npm run docs:preview
```

## 许可证

本项目采用双许可证：
- 课程内容（Markdown 文件）：CC BY-SA 4.0
- 代码：MIT License

提交贡献即表示你同意将你的贡献以相同的许可证发布。
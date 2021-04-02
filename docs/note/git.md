---
title: git command alias
categories:
 - git
tags:
 - git
---

## 简写规则
``` bash
g = 'git'
ga = 'git add'
gaa = 'git add --all'
gb = 'git branch'
gba = 'git branch -a'
gbD = 'git brancd -D' # 强制删除没有合并的分支
gbd = 'git branch -d' # 删除分支（只能删除合并后的分支）

gcb = 'git checkout -b'
gcm = 'git checkout m' # ????
gcmsg = 'git commit -m'
gco = 'git checkout'

gd = 'git diff'

gl = 'git pull'

gp = 'git push'
gpf = 'git push --force'

gst = 'git status'
```

## `git add all` 与 `git add .`
2.x 版本后

1、两者都可以提交未跟踪、修改和删除的文件。  
2、区别：
- `git add all` 无论在哪个目录执行都会提交相应文件
- `git add .` 只能够提交当前目录或者它后代目录下相应文件

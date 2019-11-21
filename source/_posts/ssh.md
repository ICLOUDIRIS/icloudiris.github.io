---
title: git使用ssh更新代碼
top: //数值
comments: // false
date: 2019-11-1 10:09:26
categories:
tags:
password:
---
## git使用ssh更新代碼的好處
  git使用https协议，每次pull,push都要输入密码，使用git协议，使用ssh秘钥，可以省去每次输密码

## 原理 ssh原理

## 前提準備工作
    已經安裝好git
    
## 具體操作流程 分爲以下3大步驟
  
  ### 生成ssh 公私鑰匙
      一、本地生成密钥对;
  ### 填入到git上
      二、设置github上的公钥;
      三、修改git的remote url为git协议。
  ### 上傳的運行的命令


  ## ssh-agent
     使用多個ssh的情況,代理ssh-agent




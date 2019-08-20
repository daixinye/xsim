# XSIM

对 `xcrun simctl` 命令进行轻量的封装，从而简化对 iOS Simulator 的使用。

## 特性 Features

### 设备 Device

### 应用 Application

### 操作 Operation

打开 URL
```
$ xsim open <URL>
```

### 媒体 Media

上传文件到模拟器中
```
$ xsim upload <PATH>
```

## 实现思路

接收输入 -> 拼接成 `xcrun simctl` 命令 -> 执行

## 目录结构

```
.
├── bin # xsim 命令
├── build 
├── src 
├── test 
├── README.md
├── index.ts
└── package.json
```

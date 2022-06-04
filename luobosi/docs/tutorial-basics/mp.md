# 公众号

::: tip

在微信公众号对接客服功能
:::

<!-- ::: tip 提示
功能列表

* 机器人
* 人工客服
* TODO:菜单管理
* TODO:素材管理
* TODO:用户管理
* TODO:统计数据
::: -->

## 准备工作

- 私有部署成功之后，注册管理员账号，并登录管理后台。
- 到 所有设置->客服管理->客服账号 添加客服账号。注意：生成记录中有一列 ‘唯一ID(uid)’ 会在指定客服接口中使用
- 到 所有设置->客服管理->技能组 添加技能组，并可将客服账号添加到相关技能组。注意：生成记录中有一列 ‘唯一ID（wId）’ 会在工作组会话中用到

## 开始对接

### 第一步： 登录萝卜丝后台

打开 所有设置->应用管理->公众号 页面，点击添加公众号，在弹出窗口中填写公众号相关信息

### 第二步：登录微信公众号后台

- 公众号后台左侧->设置->公众号设置->账号详情 获取公众号详情，填写到第一步中打开的窗口

- 公众号后台左侧->开发->基本配置，打开公众号开发信息页面，获取AppId和AppSecret信息，并填写到第一步打开的窗口中

- 设置白名单，将下列ip添加到公众号白名单中：47.96.102.83, 47.98.54.86, 47.99.38.99, 47.106.239.170, 47.91.207.85

- 在萝卜丝后台弹出窗口中，选择 技能组，点击 ‘确定’ 成功添加公众号信息

- 在萝卜丝后台添加完成后，复制 ‘服务器地址(URL)’ 和 ‘令牌(Token)’ 中内容，添加到公众号 服务器配置中。
    - EncodingAESKey在公众号后台生成之后，复制，然后到萝卜丝后台，编辑刚才生成的记录并填写到 ‘EncodingAESKey’中，使得二者一致，并保存。
    - ‘消息加解密方式’ 请务必选择 ‘安全模式(推荐)’

## 对接完毕

## 微信公众号

<!-- <img :src="$withBase('/image/qrcode_xiaperio_430.jpg')" style="width:250px;"/> -->

## 参考
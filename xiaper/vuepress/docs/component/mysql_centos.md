# Mysql @CentOS7

```bash
# 查看操作系统版本
cat /etc/redhat-release
# CentOS Linux release 7.9.2009 (Core)
```

- [MySQL下载页](https://dev.mysql.com/downloads/repo/yum/)
- 根据操作系统CentOS7找到相应版本，Red Hat Enterprise Linux 7 / Oracle Linux 7 (Architecture Independent), RPM Package，[下载](https://dev.mysql.com/get/mysql80-community-release-el7-4.noarch.rpm)
- 开始下载 mysql80-community-release-el7-4.noarch.rpm

```bash
# 登录服务器，在根目录下创建bytedesk文件夹，统一放置萝卜丝客服相关文件
mkdir bytedesk
cd bytedesk
# 然后上传 mysql80-community-release-el7-4.noarch.rpm 到此目录
```

- 准备

```bash
# 查询是否已经安装mysql
rpm -qa|grep mysql
# 如果已经安装，则执行卸载
# rpm -e --nodeps mysql-libs-*
# 卸载之后，记得：
# find / -name mysql
# 删除查询出来的所有东西
```

- 安装

```bash
# 执行下面命令，按照提示输入：y
yum localinstall mysql80-community-release-el7-4.noarch.rpm
# 上述命令执行完毕之后，执行下面命令，按照提示输入：y
yum install mysql-community-server
# 根据网络情况，可能会等待较长时间
```

- 启动

```bash
# 启动mysql
service mysqld start
# 查看是否启动成功
ps -ef|grep mysql
```

- 修改密码

```bash
# 查询MySQL的临时密码
grep 'temporary password' /var/log/mysqld.log
# 复制临时密码，然后登录MySQL
mysql -uroot -p
# 修改密码，注意我们使用 ^Z!UGEiFPOHa3L7U 为数据库密码
# 可以到 https://suijimimashengcheng.bmcx.com/ 生成随机密码
ALTER USER 'root'@'localhost' IDENTIFIED BY '^Z!UGEiFPOHa3L7U';
# 然后刷新权限
flush privileges;
# 使用新密码重新登录
```

- 开启远程访问

```bash
# 下载Sequel Ace客户端远程连接MySQL
# 开启root远程访问，登录服务器
- mysql -u root -p # 按提示输入密码
- mysql> use mysql; # 进入mysql库
- mysql> update user set host='%' where user ='root'; # 更新域属性，'%'表示允许外部访问
- mysql> FLUSH PRIVILEGES;
- mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; # 执行授权语句。执行完此句，外部已经可以通过账户密码访问了
# - mysql> exit;
# 其他：
# FLUSH PRIVILEGES; 命令本质上的作用是：
# 将当前user和privilige表中的用户信息/权限设置从mysql库(MySQL数据库的内置库)中提取到内存里。
# MySQL用户数据和权限有修改后，希望在"不重启MySQL服务"的情况下直接生效，那么就需要执行这个命令。
# 
# - service mysql restart
# 如果远程连接报错：Authentication plugin 'caching_sha2_password' cannot be loaded，则修改如下
# mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
```

- 其他

```bash
# 创建新用户
create user '你的用户名'@'%' identified with mysql_native_password by '你的密码';
# 刷新权限
grant all on *.* to '你的用户名'@'%';
```

## 参考文档

- [CentOS7安装MySQL](https://segmentfault.com/a/1190000022843273)

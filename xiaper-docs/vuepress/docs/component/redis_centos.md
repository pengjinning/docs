# Redis @CentOS7

- 源安装

``` bash
# 更新源
sudo yum install epel-release
sudo yum update
# 命令安装redis：
sudo yum -y install redis
# 启动
sudo systemctl start redis
# 查看版本
redis-server --version
redis-server -v
# 
redis-cli --version
redis-cli -v
# 修改密码：
vi /etc/redis.conf
# 可以到 https://suijimimashengcheng.bmcx.com/ 生成随机密码: 0ZvtAumCaZxw9W2b
# 取消注释：requirepass foobared，修改密码： requirepass 你的密码
# 远程访问：添加注释 bind 127.0.0.1 ::1
# 
# 重启: sudo systemctl restart redis
# 停止: sudo systemctl stop redis
# 
# systemctl start redis.service #启动redis服务器
# systemctl stop redis.service #停止redis服务器
# systemctl restart redis.service #重新启动redis服务器
# systemctl status redis.service #获取redis服务器的运行状态
# systemctl enable redis.service #开机启动redis服务器
# systemctl disable redis.service #开机禁用redis服务器
```

- 源码安装 centos报错！！！

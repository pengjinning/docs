# Rabbitmq @CentOS7

Linux编译安装[Erlang](http://www.erlang.org/downloads)

``` bash
# 下载 http://www.erlang.org/downloads
# 解压
tar -xzvf otp_src_23.2.tar.gz
cd otp_src_23.2
# 安装依赖
yum install -y gcc gcc-c++ unixODBC-devel openssl-devel ncurses-devel
# 然后执行如下命令设置：
./configure --prefix=/opt/apps/erlang --without-javac
# 安装编译
make && make install
# 创建软连接
ln -s /opt/apps/erlang/bin/erl /usr/local/bin/erl
```

``` bash
# 输入 erl
# 显示
Erlang/OTP 23 [erts-11.1] [source] [64-bit] [smp:2:2] [ds:2:2:10] [async-threads:1] [hipe]
# 说明安装成功
```

- 配置profile

```bash
# 编辑
vi /etc/profile
# 末尾添加
ERLANG_HOME=/opt/apps/erlang
export PATH=/usr/local/php/bin:/usr/local/openssl/bin:/usr/local/nginx/sbin:$ERLANG_HOME/bin:$PATH 
# 
source /etc/profile
# 测试
echo $PATH
```

安装[RabbitMQ](https://github.com/rabbitmq/rabbitmq-server/releases)

``` bash
- 查看最新版本：https://github.com/rabbitmq/rabbitmq-server/releases
- 注意：下载 rabbitmq-server-generic-unix-***.tar.xz 版本
- 下载：wget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.9.11/rabbitmq-server-generic-unix-3.9.11.tar.xz
- 解压：1. xz -d ***.tar.xz; 2. tar -xvf  ***.tar
- 前台启动： ./sbin/rabbitmq-server
- 后台启动： ./sbin/rabbitmq-server -detached
- 停止运行： ./sbin/rabbitmqctl stop
- 查看状态： ./sbin/rabbitmqctl status

- 启用管理后台:
    ./sbin/rabbitmq-plugins enable rabbitmq_management
    ./sbin/rabbitmq-plugins enable rabbitmq_shovel rabbitmq_shovel_management
# - 禁用：
#     ./sbin/rabbitmq-plugins disable rabbitmq_management
# - 启用mqtt：  
    # ./sbin/rabbitmq-plugins enable rabbitmq_mqtt
    # ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt
    # ./sbin/rabbitmq-plugins enable rabbitmq_web_mqtt_examples
# -禁用：
#     ./sbin/rabbitmq-plugins disable rabbitmq_mqtt
#     https://www.rabbitmq.com/mqtt.html
# - 启用stomp:
    # ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp
    # ./sbin/rabbitmq-plugins enable rabbitmq_web_stomp_examples
    # https://www.rabbitmq.com/web-stomp.html
    # 测试实例： http://127.0.0.1:15670/

- 登录管理后台: http://localhost:15672, guest/guest
- 其他：https://www.rabbitmq.com/man/rabbitmqctl.8.html#set_user_tags

# 可以到 https://suijimimashengcheng.bmcx.com/ 生成随机密码：c2mJOCEev0tVYlpL
- 添加管理员账号：
- ./sbin/rabbitmqctl add_user bytedesk c2mJOCEev0tVYlpL
- ./sbin/rabbitmqctl set_user_tags bytedesk administrator
- ./sbin/rabbitmqctl set_permissions -p "/" bytedesk ".*" ".*" ".*"

- 添加访客： ./sbin/rabbitmqctl add_user visitor visitor
- 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" visitor ".*" ".*" ".*"
# - 添加ios端授权用户：./sbin/rabbitmqctl add_user mqtt_ios mqtt_ios
# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_ios ".*" ".*" ".*"
# - 添加android端授权用户：./sbin/rabbitmqctl add_user mqtt_android mqtt_android
# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_android ".*" ".*" ".*"
# - 添加web端授权用户：./sbin/rabbitmqctl add_user stomp_web stomp_web
# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" stomp_web ".*" ".*" ".*"
# - 添加windows端授权用户：./sbin/rabbitmqctl add_user mqtt_windows mqtt_windows
# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_windows ".*" ".*" ".*"
# - 添加mac端授权用户：./sbin/rabbitmqctl add_user mqtt_mac mqtt_mac
# - 添加访问控制： ./sbin/rabbitmqctl set_permissions -p "/" mqtt_mac ".*" ".*" ".*"

- 查看：./sbin/rabbitmqctl list_permissions -p /

```

为支持定时任务，需要安装延迟队列插件

- [下载 rabbitmq-delayed-message-exchange](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange)
- 将下载之后的文件，放到rabbitmq安装目录plugins文件夹，其中mac m1(brew install rabbitmq)安装目录为：/opt/homebrew/Cellar/rabbitmq/3.9.11/plugins/
- 执行命令：./sbin/rabbitmq-plugins enable rabbitmq_delayed_message_exchange

## 参考

- [](https://www.jianshu.com/p/2187e03ad126)
- [下载Erlang](http://www.erlang.org/downloads)
- [下载RabbitMQ](https://github.com/rabbitmq/rabbitmq-server/releases)
- [下载 rabbitmq-delayed-message-exchange](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange)

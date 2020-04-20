# Koa框架开发RESTful接口
### 需求
通过header里面传递一个role属性admin，使用post请求，发送给koa这边的`/api/user`接口json数据为`{name: "imooc", email: "imooc@test.com"}`。

### 任务描述

- 无name或者email

判断email与name属性是否存在，并且不为空字符串

![无name或者email](https://img.mukewang.com/climg/5d5e477f0001e9eb05540262.jpg)

- header中无admin或者role不等于admin

koa侧判断role属性是否存在，是否是admin，不是，则返回status 401

![header中无admin或者role不等于admin](https://img.mukewang.com/climg/5d5e47930001d75205540322.jpg)

- 正常请求

返回用户上传的数据，封装到data对象中，给一个code： 200，message： '上传成功'

![正常请求](https://img.mukewang.com/climg/5d5e47ab0001dce005540349.jpg)

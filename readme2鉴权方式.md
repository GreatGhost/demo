# 后端鉴权方式
- session/cookie 
    - session 定义一个对象存储
        - koa-ssesion
        - 哈希算法 signed
            - md5
            - sha1
        session
            - 存在代码里的弊端 
                ```
                    1.用户量大的时候，占内存
                    2.分布式部署时候，不能共享
                    
                ``` 
                session 不灵活
                改为存Redis 或者数据库
- token
- oAuth
- sso

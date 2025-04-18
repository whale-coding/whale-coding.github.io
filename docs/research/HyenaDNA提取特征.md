# HyenaDNA提取序列特征

## 1、提取序列特征

1、基本环境

- 服务器：新服务器（.67）
- 账户：刘婕的账号
- conda环境：hyena-dna
- 脚本名称：HyenaDNA_feature_prepare_wei.py

2、输入文件格式要求

输入文件为txt文件，文件中每行为固定长度的DNA序列（我这里使用的是长度为600的DNA序列）

类似这样：

![image-20250331200755772](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202503312007812.png)

3、脚本需要修改的内容：

（1）输入文件路径需要修改

![image-20250331200327312](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202503312003647.png)

（2）features_np的第二个参数需要与输入序列的长度匹配（value=输入序列的长度+2）。

![image-20250331200440784](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202503312004830.png)

（3）输出文件路径需要修改

![image-20250331200610422](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202503312006472.png)

4、提取特征相关的步骤及代码如下：

```bash
conda env list

conda activate hyena-dna

cd /data2/liujie/0-HyenaDNA/

# 运行该指令即可提取特征
python HyenaDNA_feature_prepare_wei.py
```

正常情况下会输出如下内容：

![image-20250331200840561](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202503312008618.png)

输出pth文件的维度为[len(test_data), 序列长度+2,128] ，最后一个维度输出为128。


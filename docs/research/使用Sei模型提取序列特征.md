# Sei提取序列特征

Github： https://github.com/FunctionLab/sei-framework

1、基本环境

- 服务器：新服务器（.67）
- 账户：邓可的账号
- 脚本名称：1_variant_effect_prediction.sh

2、输入文件格式要求

![1](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202503312017849.jpg)

3、相关命令

```bash
# 1、进入到工作目录
cd /data1/dengke/5-tools/3-sei/
# 2、查看目录下的文件
ls
# 3、得到21907d的染色质特征
bash 1_variant_effect_prediction.sh ./data/input/Adipose_Subcutaneous.vcf hg38 ./output --cuda
# 4、得到40个序列类别特征
bash 2_varianteffect_sc_score.sh ./output/chromatin-profiles-hdf5/Adipose_Subcutaneous.ref_predictions.h5 ./output/chromatin-profiles-hdf5/Adipose_Subcutaneous.alt_predictions.h5 ./output
```


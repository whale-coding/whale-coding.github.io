# DeepGSR模型复现

## 1. 文章基本信息

文章名称：DeepGSR: an optimized deep-learning structure for the recognition of genomic signals and regions

文章地址：https://academic.oup.com/bioinformatics/article/35/7/1125/5089227

发表时间：2019年

发表期刊：bioinformatics

代码地址：https://zenodo.org/records/1117159

## 2. 模型复现

文章中并没有给出所使用的包的版本，只知道使用了scikit-learn、keras以及cuda。

具体版本信息，并未给出。

原文中提供的代码有以下4个：

1、在人类基因组上训练DeepGSR进行PAS识别：

```bash
python 2DCNN.py --inputFile ../../Data/Human/PAS_processed/hs_mixAATAAA_polyA.txt --DataName human_AATAAA --FileName human_AATAAA
```

2、在人类基因组上训练DeepGSR 进行 TIS 识别：

```bash
python 2DCNN.py --inputFile ../../Data/Human/TIS_processed/hs_mixATG_TIS.txt --DataName human_ATG --FileName human_ATG
```

3、使用人类基因组训练的模型在小鼠基因组上测试DeepGSR 以进行 PAS 识别：

```bash
python CNN_Testing.py --inputFile ../../Data/Mouse/PAS_processed/mm_mixAATAAA_polyA.txt --inputModel ../human_AATAAA_Model.h5 --DataName mouse_AATAAA --FileName mouse_human_AATAAA
```

这里原文中提供的命令有点问题，-inputModel应该改为--inputModel 。

4、使用人类基因组训练的模型在小鼠基因组上测试DeepGSR 进行 TIS 识别：

```bash
python CNN_Testing.py --inputFile ../../Data/Mouse/TIS_processed/mm_mixATG_TIS.txt --inputModel ../human_ATG_Model.h5 --DataName mouse_ATG --FileName mouse_human_ATG
```


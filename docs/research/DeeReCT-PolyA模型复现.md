# DeeReCT-PolyA模型复现



项目地址：https://github.com/likesum/DeeReCT-PolyA

论文地址：https://academic.oup.com/bioinformatics/article/35/14/2371/5221014

### 复现记录

#### 数据准备

为了准备训练或微调数据，应将序列放入`.txt`文件中，其中每行都是长度为 206 的 ATGC 序列，以中心 6 聚体为真或伪 poly(A) 基序。正数据和负数据应放在两个不同的子目录中。然后，运行

```python
python data_prep.py pos_root neg_root outfile [--nfolds n]
```

实际复现使用的命令如下：

```python
python data_prep.py ./data/human/dragon_polyA_data/positive5fold ./data/human/dragon_polyA_data/negatives5fold ./models/test.npz
```

![image-20241107143404850](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202504182046838.png)

使用独热编码对原始序列进行编码，并将数据拆分为训练、验证和测试集。处理后的数据集将保存为文件`.npz`。请注意，如果您只想使用我们的预训练模型对您自己的数据进行推理，或者您没有基本事实标签，我们提供[测试代码](https://github.com/likesum/DeeReCT-PolyA#test-trained-models)，可以直接将无需准备的序列作为输入并进行预测。

结果会保存为.npz文件。

>`.npz`文件是NumPy库中用于存储多个NumPy数组的压缩文件格式。它是NumPy的专用文件格式，用于高效地保存和加载大量数据。

创建`.npz`文件

```
import numpy as np

# 创建一些数据
array1 = np.array([1, 2, 3])
array2 = np.array([4, 5, 6])

# 将数组保存到.npz文件
np.savez('data.npz', array1=array1, array2=array2)
```

读取`.npz`文件

```
# 加载.npz文件
data = np.load('data.npz')

# 访问文件中的数组
array1 = data['array1']
array2 = data['array2']

# 打印数组
print(array1)
print(array2)

# 关闭文件
data.close()
```

#### 模型训练

```
python train.py data [--out outfile] [--hparam hyperparam_file]
```

实际指令为：

```
python train.py ./models/test.npz  --out ./models/test_train_out.npz
```



```
python data_loader.py ./data/human/dragon_polyA_data/positive5fold ./data/human/dragon_polyA_data/negatives5fold
```

![image-20241121154448130](https://picgo-typora-images.oss-cn-beijing.aliyuncs.com/img/202504182043099.png)
















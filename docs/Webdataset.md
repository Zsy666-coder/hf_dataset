# 八、Webdataset

## (一) 直接解析：
1. 数据存储在.tar压缩包中，数据以ID命名：\
  可以包含图像数据、文本数据、音频数据、JSON/元数据\
  例如:
  ```python
  data.tar/
  ****00001.jpg
  ****00001.txt
  ****00002.jpg
  ****00002.txt
  ```
2. 数据文件应具有相同的模式：\
  如果.tar包中的数据类型不一致，可能会解析失败
3. 支持流式加载：\
  WebDataset适用于超大数据集，支持边下载边读取，避免占用大量内存
4. 默认加载所有数据文件

## (二) 自定义解析：
```python
web_config = {
"features": Features({
  "image": Image(),
  "text": Value("string"),
  })
}

dataset = load_dataset("webdataset", data_files = "data.tar", **web_config)
```

## (三) e.g.
1. 直接解析：
```python
dataset = load_dataset("webdataset", data_files='/share/project/zsy/code/Agent/test/wds_cars/train/0.tar')

print(dataset)
print(dataset["train"][0])
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['__key__', '__url__', 'cls', 'jpg'],
        num_rows: 2000
    })
})
{'__key__': 's0000000', '__url__': '/share/project/zsy/code/Agent/test/wds_cars/train/0.tar', 'cls': 13, 'jpg': <PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=600x400 at 0x7FC817604100>}
```
其中'__key__'是样本唯一标识符, 是WebDataset内部索引；\
‘__url__’是原始 .tar 文件路径。

2. 手动指定features，仅解析'cls', 'jpg':
```python
features = Features({
    "jpg": Image(),
    "cls": ClassLabel(names=[str(i) for i in range(196)])  
})

dataset = load_dataset(
    "webdataset",
    data_files="/share/project/zsy/code/Agent/test/wds_cars/train/0.tar",
    features=features  
)

print(dataset["train"].features)
print(dataset["train"][0])  
```
Output:
```python
{'jpg': Image(mode=None, decode=True, id=None), 'cls': ClassLabel(names=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195'], id=None)}
{'jpg': <PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=600x400 at 0x7FC8176336D0>, 'cls': 13}
```
# 六、 ImageFolder

## (一) 直接解析:
```python
  dataset = load_dataset("imagefolder", data_dir="path/to/images")
```
1. 文件夹结构必须符合类别标签格式
2. 支持常见图像格式：\
  JPG, PNG, JPEG, BMP, GIF等格式
3. 默认会生成ClassLabel: \
  dataset会自动根据文件夹名称创建ClassLabel

## (二) ImageFolderConfig:
1. 不使用类别标签，仅加载图像\
drop_labels=True
2. 不保留元数据，仅加载图像\
drop_metadata=True
3. 手动定义features结构\
```python
features=Features({
          "image": Image(),
          "label": ClassLabel(names=["cat", "dog", "rabbit"])
        })
```

## (三) e.g. 数据集有如下imagefolder：
```python
fruit-detection-dataset/
**fruit-detection.v1i.folder/
****test/
******apple/
******banana/
******orange/
****train/
******apple/
******banana/
******orange/
```
1. 直接解析：
```python
dataset = load_dataset("imagefolder", data_dir="/share/project/zsy/code/Agent/test/fruit-detection-dataset/fruit-detection.v1i.folder/train")

print(dataset)
print(dataset['train'].features)
print(dataset['train'][0])
```

Output:
```python
DatasetDict({
    train: Dataset({
        features: ['image', 'label'],
        num_rows: 221
    })
})
{'image': Image(mode=None, decode=True, id=None), 'label': ClassLabel(names=['apple', 'banana', 'orange'], id=None)}
{'image': <PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=224x224 at 0x7FD2E87792D0>, 'label': 0}
```

2. 仅加载图像，不解析类别：
```python
dataset = load_dataset("imagefolder", data_dir="/share/project/zsy/code/Agent/test/fruit-detection-dataset/fruit-detection.v1i.folder/train", dropout_labels=True)
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['image'],
        num_rows: 221
    })
})
{'image': Image(mode=None, decode=True, id=None)}
{'image': <PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=224x224 at 0x7F619C3752A0>}
```
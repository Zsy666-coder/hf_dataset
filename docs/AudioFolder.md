# 七、 AudioFolder

## (一) 直接解析：
1. 文件夹必须符合类别标签格式：\
dataset/ \
****train/ \
********speech/\
************speech1.wav\
************speech2.wav\
********music/\
************music1.wav\
************music2.wav\
****test/\
********speech/\
************speech3.wav\
********music/\
************music3.wav
2. 支持常见音频格式：
  WAV, MP3, FLAC, AAC, OGG, M4A等格式
3. 默认会生成ClassLabel：\
  dataset会自动根据文件夹名称创建ClassLabel

## (二) AudioFolderConfig:
1. 不使用类别标签，仅加载音频数据\
drop_labels=True
2. 不保留元数据，仅加载音频：\
drop_metadata=True
3. 手动定义features结构：
```python
features = Features({
  "audio": Audio(),
  "label": ClassLabel(names=["speech", "music", "noise"])
})
```

## (三) 例子和ImageFolder类似
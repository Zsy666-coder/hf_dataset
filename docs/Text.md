# 四、Text

## (一) 直接解析：
1. 每行是一个样本(默认按行解析)
2. 文件必须是utf-8编码
3. 默认移除换行符
4. 默认不支持段落解析

## (二) TextConfig定义解析规则：
| 参数             | 类型               | 默认值            | 作用                                                      |
|------------------|--------------------|-------------------|-----------------------------------------------------------|
| encoding         | str                | "utf-8"           | 指定文本的编码格式（如 "utf-8", "ISO-8859-1"）             |
| encoding_errors  | Optional[str]      | None              | 处理编码错误的方式，如 "ignore", "replace"                |
| chunksize        | int                | 10485760 (10MB)   | 每次读取的文本块大小，用于优化大文件解析                  |
| keep_linebreaks  | bool               | False             | 是否保留换行符（False 删除换行，True 保留）                |
| sample_by        | str                | "line"            | 解析方式，"line" 按行解析，"paragraph" 按段落解析         |

## (三) e.g. 有空行的txt:
```txt
This is paragraph one.

This is paragraph two.

This is paragraph three.
```
1. 采用默认的解析方式，有5条记录：
```python
dataset = load_dataset("text", data_files="/share/project/zsy/code/Agent/test/text.txt")
print(dataset)
print(dataset['train'][:2])
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['text'],
        num_rows: 5
    })
})
{'text': ['This is paragraph one.', '']}
```

2. 使用sample_by = 'paragraph'，则只有3条记录：
```python
dataset = load_dataset("text", data_files="/share/project/zsy/code/Agent/test/text.txt", sample_by="paragraph")
print(dataset)
print(dataset['train'][:2])
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['text'],
        num_rows: 3
    })
})
{'text': ['This is paragraph one.', 'This is paragraph two.']}
```
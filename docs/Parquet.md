# 三、 Parquet

## (一) 直接解析：
1. Parquet文件需要列存储格式
2. Parquet文件的Schema（字段）必须一致
3. 必须使用UTF-8编码
4. 默认加载所有列

## (二) ParquetConfig定义解析规则：
| 参数        | 类型                   | 默认值  | 作用                                                    |
|-------------|------------------------|---------|---------------------------------------------------------|
| batch_size  | Optional[int]           | None    | 每次读取的批量大小，用于优化性能（如果 None，默认自动确定） |
| columns     | Optional[List[str]]     | None    | 选择性加载特定列（如果 None，默认读取所有列）            |
| features    | Optional[Features]      | None    | 定义字段类型（例如 `{"id": "int64", "text": "string"}`）  |

## (三) e.g.
```python
data = pd.DataFrame({
"id": [1, 2, 3, 4],
"text": ["Hello", "How are you?", "Goodbye", "See you"],
"label": ["greeting", "question", "farewell", "farewell"]
})

data.to_parquet("data.parquet", engine="pyarrow")
```
1. 正常加载：
```python
dataset = load_dataset("parquet", data_files='/share/project/zsy/code/Agent/test/3.parquet')
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['id', 'text', 'label'],
        num_rows: 4
    })
})
{'id': [1, 2], 'text': ['Hello', 'How are you?'], 'label': ['greeting', 'question']}
```

2. 仅加载部分字段：
```python
#只读取id和text，忽略label
dataset = load_dataset("parquet", data_files='/share/project/zsy/code/Agent/test/3.parquet', columns = ['id', 'text'])
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['id', 'text'],
        num_rows: 4
    })
})
{'id': [1, 2], 'text': ['Hello', 'How are you?']}
```
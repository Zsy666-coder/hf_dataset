# 五、Arrow

## (一) 直接解析：
1. Arrow文件是Apache Arrow列式存储格式
2. Arrow文件的Schema(字段)必须一致：
  所有Arrow文件的字段名和类型必须相同
3. 默认加载所有列

## (二) 使用features解析：
e.g. 实际上text应该为string，但误解析为int64，这时候需要features
```python
data = pd.DataFrame({
    "id": [1, 2, 3, 4],  # 预期 int64
    "text": [100, 200, 300, 400],  # 误解析成 int64，但实际应为 string
    "label": [0.5, 1.2, 0.0, 1.8]  
})
table = pa.Table.from_pandas(data)
pq.write_table(table, "/share/project/zsy/code/Agent/test/error_data.arrow")

print("误解析的 Arrow 文件已创建：error_data.arrow")
```
1. 直接解析：把text误解析成int64
```python
dataset = load_dataset("arrow", data_files="/share/project/zsy/code/Agent/test/error_data.arrow")

print(dataset["train"].features)  
print(dataset["train"][0])  
```
Output:
```python
{'id': Value(dtype='int64', id=None), 'text': Value(dtype='int64', id=None), 'label': Value(dtype='float64', id=None)}
{'id': 1, 'text': 100, 'label': 0.5}
```

2. features:
```python
features = Features({
    "id": Value("int64"),  # 确保 id 是 int64
    "text": Value("string"),  # 强制 text 变成 string
    "label": Value("float64")  # 强制 label 变成 int64
})

dataset = load_dataset(
    "arrow",
    data_files="/share/project/zsy/code/Agent/test/error_data.arrow",
    features=features  # 手动指定字段类型
)

print(dataset["train"].features)
print(dataset["train"][0])  
```
Output:
```python
{'id': Value(dtype='int64', id=None), 'text': Value(dtype='string', id=None), 'label': Value(dtype='float64', id=None)}
{'id': 1, 'text': '100', 'label': 0.5}
```
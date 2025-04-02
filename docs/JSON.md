# 二、JSON

## (一)直接解析：
```python
from datasets import load_dataset
dataset = load_dataset("json", data_files = "xx.json") #可以为单个文件、列表或模式匹配
```
1. 每行一个JSON对象(JSONL格式)或一个完整的JSON数组
2. 所有对象的字段（键）要一致
3. 必须是utf-8编码
4. 数据结构应为key-value格式

## (二)JsonConfig定义解析规则：
| 参数                 | 类型             | 默认值      | 作用                                                        |
|----------------------|------------------|-------------|-------------------------------------------------------------|
| encoding             | str              | "utf-8"     | 指定 JSON 文件编码（如 'utf-8' 或 'ISO-8859-1'）              |
| encoding_errors      | Optional[str]    | None        | 处理编码错误的方式，如 "ignore"、"replace"                  |
| field                | Optional[str]    | None        | 如果 JSON 嵌套了字段，指定解析哪个字段                      |
| use_threads          | bool             | True        | 是否使用多线程解析 JSON，提高性能                           |
| block_size           | Optional[int]    | None        | 控制解析数据块的大小（通常用于优化性能）                    |
| chunksize            | int              | 10485760    | 按块读取 JSON 数据，提高解析速度（默认 10MB）               |
| newlines_in_values   | Optional[bool]   | None        | 是否允许 JSON 字符串值中包含换行符（True 保留换行）         |

## (三)e.g.有嵌套的JSON
```json
{
    "version": "1.0",
    "metadata": "This is a test dataset",
    "data": [
        {"id": 1, "text": "Hello World", "label": "greeting"},
        {"id": 2, "text": "How are you?", "label": "question"}
    ]
}
```
1. 如果直接解析，输出如下：
```python
DatasetDict({
    train: Dataset({
        features: ['version', 'metadata', 'data'],
        num_rows: 1
    })
})
{'version': ['1.0'], 'metadata': ['This is a test dataset'], 'data': [[{'id': 1, 'text': 'Hello World', 'label': 'greeting'}, {'id': 2, 'text': 'How are you?', 'label': 'question'}]]}
```
2. 使用JsonConfig解析：
```python
dataset = load_dataset("json", data_files="/share/project/zsy/code/Agent/test/2.json", field='data')
```
Output:
```python
DatasetDict({
    train: Dataset({
        features: ['id', 'text', 'label'],
        num_rows: 2
    })
})
{'id': [1, 2], 'text': ['Hello World', 'How are you?'], 'label': ['greeting', 'question']}
```

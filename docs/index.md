# 一、 CSV

## (一)直接解析：
直接使用 `load_dataset("csv", data_files="xx.csv")`，这是默认加载 CSV 文件的方式，不指定解析规则：

```python
from datasets import load_dataset
dataset = load_dataset("csv", data_files = "my_file.csv")
#多个csv文件
dataset = load_dataset("csv", data_files = ["my_file1.csv", "my_file2.csv", "my_file3.csv"])
```
此时对csv的格式要求：
1. 使用逗号','作为分隔符
2. 第一行是列名
3. 每一行数据列数一致
4. 以'utf-8'编码存储
5. 缺失值默认为NaN
6. 字符串数据可以加引号
7. 数字数据默认解析为int或float
## (二)CsvConfig定义解析规则（分隔符、列名、编码等）：
适用于结构特殊的CSV
| 参数               | 类型                                              | 默认值     | 作用                                             |
|--------------------|---------------------------------------------------|------------|--------------------------------------------------|
| sep                | str                                               | ","        | 指定列分隔符，如 `","`，`\t` 等                  |
| delimiter          | Optional[str]                                     | None       | 作用类似 `sep`，但 `sep` 优先级更高              |
| header             | Union[int, List[int]], str, NoneType              | 'infer'    | 指定哪一行是表头，默认 `'infer'` 自动推测       |
| names              | Optional[List[str]]                               | None       | 如果 `header=None`，可以手动指定列名            |
| column_names       | Optional[List[str]]                               | None       | 同 `names`，显式指定字段名称                    |
| index_col          | Union[int, str, List[int], List[str], NoneType]   | None       | 指定哪一列作为索引，默认 `None`（无索引）       |
| usecols            | Union[List[int], List[str], NoneType]             | None       | 指定需要读取的列，可以是列索引（如 `[0, 1]`）或列名（如 `["name", "age"]`） |
| prefix             | Optional[str]                                     | None       | 如果 CSV 没有列名，自动添加前缀                |
| mangle_dupe_cols   | bool                                              | True       | 是否自动重命名重复列（如 `col` 和 `col.1`）    |
| engine             | Optional[Literal['c', 'python', 'pyarrow']]       | None       | 解析引擎（`'c'` 速度快，`'python'` 兼容性强，`'pyarrow'` 适用于大数据集） |
| converters         | Dict[Union[int, str], Callable[[Any], Any]]       | None       | 指定某些列的数据转换函数（如 `{'age': int}`）   |
## (三)e.g. 以逗号分隔：
```csv
zhou;1;10
zhu;2;20
yu;3;40
pan;5;100
```
1. 使用 **sep=';'** 读取：
```python
dataset = load_dataset('csv', data_files='/share/project/zsy/code/Agent/test/csv.csv', sep=';', header=None, names=['name', 'id', 'label'])
print(dataset)
print(dataset['train'][:2])
```
Output:
```python
Datasetdict({
    train: Dataset({
        features: ['name', 'id', 'label'],
        num_rows: 4
    })
})
{'name': ['zhou', 'zhu'], 'id': [1, 2], 'label': [10, 20]}
```
2. 不使用 **sep=';'**
```python
dataset = load_dataset('csv', data_files='/share/project/zsy/code/Agent/test/csv.csv', header=None, names=['name', 'id', 'label'])
print(dataset)
print(dataset['train'][:2])
```
Output:
```python
Datasetdict({
    train: Dataset({
        features: ['name', 'id', 'label'],
        num_rows: 4
    })
})
{'name': ['zhou;1;10', 'zhu;2;20'], 'id': [None, None], 'label': [None, None]}
```
## 语言按语法分类

- 非形式语言
  - 中文/英文
- 形式语言（乔姆斯基谱系）
  - 0型 无限制文法
    - ?::=?
  - 1型 上下文相关文法
    - ?<a>?::=?<b>?
  - 2型 上下文无关文法
    - <a>::=?
  - 3型 正则文法 -> 词法分析 -> 语法分析
    - <a>::=<a>?
    - <a>::=?<a>  => error


## 产生式（BNF:巴斯克诺尔范式）

- 用尖括号扩起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- *表示重复多次
- |表示或
- +表示至少一次

eg：
```
"a"

"b"

<Program>:= "a" + | "b"+
<Program>:= <Program> "a" + | <Program> "b"+

```

> 定义一个整数加法：
```
<Number> := "0" | "1" | ... | "9"

<DecimalNumber> := "0" | (("1" | ... | "9") <Number>*)   => 十进制整数

<PrimaryExpression> := <DecimalNumber> |
  "(" <LogicalExpression> ")"

<MultiplicativeExpression> :=  <PrimaryExpression> |
  <MultiplicativeExpression> "*" <PrimaryExpression> |
  <MultiplicativeExpression> "/" <PrimaryExpression> 

<AdditiveExpression> := <MultiplicativeExpression> |
  <AdditiveExpression> "+" <MultiplicativeExpression> | 
  <AdditiveExpression> "-" <MultiplicativeExpression> 

<LogicalExpression> :=  <AdditiveExpression> | 
  <LogicalExpression> "||" <AdditiveExpression> |
  <LogicalExpression> "&&" <AdditiveExpression> 


<DecimalNumber> = /0|[1-9][0-9]*/   => 十进制整数

```

```
  <Number> = "0" | "1" | "2" | ..... | "9"

  <DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )

  <PrimaryExpression> = <DecimalNumber> |
      "(" <LogicalExpression> ")"

  <MultiplicativeExpression> = <PrimaryExpression> | 
      <MultiplicativeExpression> "*" <PrimaryExpression>| 
      <MultiplicativeExpression> "/" <PrimaryExpression>

  <AdditiveExpression> = <MultiplicativeExpression> | 
      <AdditiveExpression> "+" <MultiplicativeExpression>| 
      <AdditiveExpression> "-" <MultiplicativeExpression>

  <LogicalExpression> = <AdditiveExpression> | 
      <LogicalExpression> "||" <AdditiveExpression> | 
      <LogicalExpression> "&&" <AdditiveExpression>

```


## 通过产生式理解乔姆斯基语系

```
"a" <b> "c" ::= "a" "x" "c"

```

> 用正则表达式处理四则表达式

## 其他产生式

EBNF ABNF Customized

js 的自定义产生式

> 对计算机语言进行文法分类


## 图灵完备性

- 图灵完备性
  - 命令式——图灵机
    - goto
    - if 和 while
  - 声明式——lambda
    - 递归

## 动态&静态

- 动态
  - 在用户设备/在线服务器上
  - 产品实际运行时
  - Runtime
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

## 类型系统

- 动态类型系统 / 静态类型系统
- 强类型 / 弱类型
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名
- 自类型
  - 逆变/协变

> ts 为 js 增加了类型系统

## 一般命令式编程语言

- Atom
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
  - ..
- Program
  - Program
  - Module
  - Package
  - Library


语法 ==> 语义 ==> 运行时
> 通过语法定义语义，描述运行时
# JavaScript

## Atom

## Expression

## Statement

## Structure

## Program/Modules

```javascript
for(let i = 0; i < 128; i ++) {
  console.log(String.formChartCode(i))
}


```
InputElement
  WhiteSpace
  LineTerminator
  Comment
  Token
    Punctuator
    IdentifierName
      Keywords
      Identifier
        Identifi;erStart
        IdentifierPart
      Future reserved Keywords: enum
    Literal
 
```javascript
  var a = .1, b = .2;
  const memory = new Float64Array(1);
  memory[0] = a;
  
  const intarr = new Uint8Array(memory.buffer)

  for(let i = 0; i < 8; i ++) {
    let s = (intarr[i].toString(2))
    document.write()
    console.log(new Array(9 - s.length).join('0'), s);
  }
  console.log(intarr);
```
  Literal
      Number
        IEEE 754 Double Float
          - Sign(1)
          - Exponent (11)
          - Fraction (52)
        - SafeIntegra
        - Float compare
      String
        - ASCII
        - Unicode
        - UCS U+0000 - U+FFFF
        - GB
          - GB2312
          - GBK(GB13000)
          - GB18030
        - ISO-8859
        - BIG5
      Boolean
      Null
      Undfined
      Symbol
      Object

  

 
> 作业： 一个正则表达式，匹配所有Number直接量
> 作业： function UTF8_Encoding(string) {} 函数


BOM: Bit Order Mask

BMP

Unicode 编码

  - JS 中的空格 WhiteSpace SP
  - 换行符 LineTerminator LF
  - 注释 Comments 单行/多行 


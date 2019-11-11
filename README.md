# Poly-JS
Poly-JS is a library for manipulating 2D polygons, shapes, points...

# Features

1. 2D vertices operations
2. 2D lines operations
3. 2D polygons operations
4. 2D rect operations
5. 2D circle operations

# Installation
``npm i @slydock/poly-js``

# Basic Usage

For any component need, you'll need to import the plugin
```javascript
const {
	Vector2,
	Line,
	Polygon,
	Rect,
	Circle
} =  require('@slydock/poly-js');
```
<a name="Vector2"></a>

## Vector2
<p>Vector2 Class</p>

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>float</code> | <p>The x value of the vertice</p> |
| y | <code>float</code> | <p>The y value of the vertice</p> |


* [Vector2](#Vector2)
    * [new Vector2(p1, p2)](#new_Vector2_new)
    * _instance_
        * [.approximated](#Vector2+approximated) ⇒
        * [.normalized](#Vector2+normalized) ⇒
        * [.norm](#Vector2+norm) ⇒
        * [.magnitude](#Vector2+magnitude) ⇒
        * [.clone](#Vector2+clone) ⇒
        * [.floor(v)](#Vector2+floor) ⇒
        * [.floorX([v])](#Vector2+floorX) ⇒
        * [.floorY([v])](#Vector2+floorY) ⇒
        * [.ceil([v])](#Vector2+ceil) ⇒
        * [.ceilX([v])](#Vector2+ceilX) ⇒
        * [.ceilY([v])](#Vector2+ceilY) ⇒
        * [.round([v])](#Vector2+round) ⇒
        * [.roundX([v])](#Vector2+roundX) ⇒
        * [.roundY([v])](#Vector2+roundY) ⇒
        * [.set(p1, p2)](#Vector2+set) ⇒
        * [.setX(v)](#Vector2+setX) ⇒
        * [.setY(v)](#Vector2+setY) ⇒
        * [.add(p1, p2)](#Vector2+add) ⇒
        * [.addX(v)](#Vector2+addX) ⇒
        * [.addY(v)](#Vector2+addY) ⇒
        * [.substract(p1, p2)](#Vector2+substract) ⇒
        * [.substractX(v)](#Vector2+substractX) ⇒
        * [.substractY(v)](#Vector2+substractY) ⇒
        * [.multiply(p1, p2)](#Vector2+multiply) ⇒
        * [.multiplyX(v)](#Vector2+multiplyX) ⇒
        * [.multiplyY(v)](#Vector2+multiplyY) ⇒
        * [.divide(p1, p2)](#Vector2+divide) ⇒
        * [.divideX(v)](#Vector2+divideX) ⇒
        * [.divideY(v)](#Vector2+divideY) ⇒
        * [.invert()](#Vector2+invert) ⇒
        * [.invertX()](#Vector2+invertX) ⇒
        * [.invertY()](#Vector2+invertY) ⇒
        * [.rotate(angle)](#Vector2+rotate) ⇒
        * [.equals()](#Vector2+equals) ⇒
        * [.equalsX()](#Vector2+equalsX) ⇒
        * [.equalsY()](#Vector2+equalsY) ⇒
        * [.isInside(polygon)](#Vector2+isInside) ⇒
        * [.approximate()](#Vector2+approximate) ⇒
        * [.toString()](#Vector2+toString) ⇒
    * _static_
        * [.Distance(v1, v2)](#Vector2.Distance) ⇒
        * [.Max(v1, v2)](#Vector2.Max) ⇒
        * [.Min(v1, v2)](#Vector2.Min) ⇒
        * [.Lerp(v1, v2, t)](#Vector2.Lerp) ⇒
        * [.LerpUnclamped(v1, v2, t)](#Vector2.LerpUnclamped) ⇒
        * [.Zero()](#Vector2.Zero)
        * [.Top()](#Vector2.Top)
        * [.Left()](#Vector2.Left)
        * [.Bottom()](#Vector2.Bottom)
        * [.Right()](#Vector2.Right)

<a name="new_Vector2_new"></a>

### new Vector2(p1, p2)

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>float</code> \| <code>null</code> | <p>Vector2: copy, float: assign, null: 0</p> |
| p2 | <code>float</code> \| <code>null</code> | <p>float: assign, null: 0</p> |

**Example**  
```js
// returns Vector2 with x:0 & y:0
new Vector2()
```
**Example**  
```js
// returns Vector2 with x:2 & y:2
new Vector2(2)
```
**Example**  
```js
// returns Vector2 with x:4 & y:5
new Vector2(4, 5)
```
**Example**  
```js
// returns Vector2 with x:1 & y:3
new Vector2({x: 1, y: 3})
```
**Example**  
```js
// returns Vector2 with x:6 & y:7
const v1 = new Vector2(6, 7);
new Vector2(v1);
```
<a name="Vector2+approximated"></a>

### vector2.approximated ⇒
<p>Getter for approximate() method</p>

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**See**: approximate  
**Example**  
```js
const v1 = new Vector2(Math.PI, Math.PI);
console.log(v1.toString()); // {x: 3.141592653589793, y: 3.141592653589793}
console.log(v1.approximate.toString()); // {x: 3.1416, y: 3.1416}
```
<a name="Vector2+normalized"></a>

### vector2.normalized ⇒
<p>Normalize the Vector2</p>

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**See**: norm  
**Example**  
```js
const v1 = new Vector2(1, 1);
console.log(v1.norm.toString()); // {x: 0.7071067811865476, y: 0.7071067811865476}
```
<a name="Vector2+norm"></a>

### vector2.norm ⇒
<p>Alias of normalized</p>

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**See**: normalized  
<a name="Vector2+magnitude"></a>

### vector2.magnitude ⇒
<p>Get the magnitude of the Vector2</p>

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>float</p>  
**Example**  
```js
const v1 = new Vector2(12, 32);
console.log(v1.magnitude); // 34.17601498127012
```
<a name="Vector2+clone"></a>

### vector2.clone ⇒
<p>Get a clone of this Vector2
useful for not modify a vector before operation</p>

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**Example**  
```js
const v1 = new Vector2(5, 5);
console.log(v1.clone.add(2, 3)); // {x: 7, y: 8}
// v1 is unchanged
```
<a name="Vector2+floor"></a>

### vector2.floor(v) ⇒
<p>Flooring the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| v | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+floorX"></a>

### vector2.floorX([v]) ⇒
<p>Flooring the x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+floorY"></a>

### vector2.floorY([v]) ⇒
<p>Flooring the y value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+ceil"></a>

### vector2.ceil([v]) ⇒
<p>Ceiling the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+ceilX"></a>

### vector2.ceilX([v]) ⇒
<p>Ceiling the x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+ceilY"></a>

### vector2.ceilY([v]) ⇒
<p>Ceiling the y value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+round"></a>

### vector2.round([v]) ⇒
<p>Rounding the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+roundX"></a>

### vector2.roundX([v]) ⇒
<p>Rounding the x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+roundY"></a>

### vector2.roundY([v]) ⇒
<p>Rounding the y value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>float</code> | <code>1</code> | <p>Precision</p> |

<a name="Vector2+set"></a>

### vector2.set(p1, p2) ⇒
<p>Setting the value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>float</code> \| <code>null</code> | <p>Vector2: copy, float: assign</p> |
| p2 | <code>float</code> \| <code>null</code> | <p>float: assign, null: 0</p> |

**Example**  
```js
const v1 = new Vector2();
// change v1 Vector2 to x:3 & y:3
v1.set(3);
```
**Example**  
```js
const v1 = new Vector2();
// change v1 Vector2 to x:3 & y:4
v1.set(3, 4);
```
**Example**  
```js
const v1 = new Vector2();
// change v1 Vector2 to x:5 & y:6
v1.set({x:5, y:6});
```
**Example**  
```js
const v1 = new Vector2();
const v2 = new Vector2(7, 8);
// change v1 Vector2 to x:7 & y:8
v1.set(v2);
```
<a name="Vector2+setX"></a>

### vector2.setX(v) ⇒
<p>Setting the x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The value</p> |

<a name="Vector2+setY"></a>

### vector2.setY(v) ⇒
<p>Setting the y value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The value</p> |

<a name="Vector2+add"></a>

### vector2.add(p1, p2) ⇒
<p>Adding values to the the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>float</code> \| <code>null</code> | <p>Vector2: copy, float: assign</p> |
| p2 | <code>float</code> \| <code>null</code> | <p>float: assign, null: 0</p> |

**Example**  
```js
const v1 = new Vector2(2, 3);
// add  3 to v1 Vector2
v1.add(3);
// v1 values are now x:5 & y:6
```
**Example**  
```js
const v1 = new Vector2(2, 3);
// add 5, 7 to v1 Vector2
v1.add(5, 7);
// v1 values are now x:7 & y:10
```
**Example**  
```js
const v1 = new Vector2(2, 3);
// add  3 to v1 Vector2
v1.add({x:1, y:2});
// v1 values are now x:3 & y:5
```
**Example**  
```js
const v1 = new Vector2(2, 3);
const v2 = new Vector2(4, 1);
// add  3 to v1 Vector2
v1.add(v2);
// v1 values are now x:6 & y:4, v2 is unchanged
```
<a name="Vector2+addX"></a>

### vector2.addX(v) ⇒
<p>Adding v to x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The value</p> |

<a name="Vector2+addY"></a>

### vector2.addY(v) ⇒
<p>Adding v to y value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The value</p> |

<a name="Vector2+substract"></a>

### vector2.substract(p1, p2) ⇒
<p>Substracting values to the the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>float</code> \| <code>null</code> | <p>Vector2: copy, float: assign</p> |
| p2 | <code>float</code> \| <code>null</code> | <p>float: assign, null: 0</p> |

**Example**  
```js
const v1 = new Vector2(2, 3);
// Substracting  3 to v1 Vector2
v1.substract(3);
// v1 values are now x:-1 & y:0
```
**Example**  
```js
const v1 = new Vector2(2, 3);
// Substracting 5, 7 to v1 Vector2
v1.substract(5, 7);
// v1 values are now x:-3 & y:-4
```
**Example**  
```js
const v1 = new Vector2(2, 3);
// Substracting  3 to v1 Vector2
v1.substract({x:1, y:2});
// v1 values are now x:1 & y:1
```
**Example**  
```js
const v1 = new Vector2(2, 3);
const v2 = new Vector2(4, 1);
// Substracting 3 to v1 Vector2
v1.substract(v2);
// v1 values are now x:-2 & y:2, v2 is unchanged
```
<a name="Vector2+substractX"></a>

### vector2.substractX(v) ⇒
<p>Substracting v to x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The value</p> |

<a name="Vector2+substractY"></a>

### vector2.substractY(v) ⇒
<p>Substracting v to x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The value</p> |

<a name="Vector2+multiply"></a>

### vector2.multiply(p1, p2) ⇒
<p>Multiply values to the the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>float</code> \| <code>null</code> | <p>Vector2: copy, float: assign</p> |
| p2 | <code>float</code> \| <code>null</code> | <p>float: assign, null: 0</p> |

**Example**  
```js
const v1 = new Vector2(2, 3);
// Multiply 3 to v1 Vector2
v1.multiply(3);
// v1 values are now x:6 & y:9
```
**Example**  
```js
const v1 = new Vector2(2, 3);
// Multiply 5, 7 to v1 Vector2
v1.multiply(5, 7);
// v1 values are now x:10 & y:21
```
**Example**  
```js
const v1 = new Vector2(2, 3);
// Multiply  3 to v1 Vector2
v1.multiply({x:1, y:2});
// v1 values are now x:2 & y:6
```
**Example**  
```js
const v1 = new Vector2(2, 3);
const v2 = new Vector2(4, 1);
// Multiply 3 to v1 Vector2
v1.multiply(v2);
// v1 values are now x:8 & y:3, v2 is unchanged
```
<a name="Vector2+multiplyX"></a>

### vector2.multiplyX(v) ⇒
<p>Multiply x value of the Vector2 by v</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The multiplicator</p> |

<a name="Vector2+multiplyY"></a>

### vector2.multiplyY(v) ⇒
<p>Multiply y value of the Vector2 by v</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The multiplicator</p> |

<a name="Vector2+divide"></a>

### vector2.divide(p1, p2) ⇒
<p>Dividing values to the the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>float</code> \| <code>null</code> | <p>Vector2: copy, float: assign</p> |
| p2 | <code>float</code> \| <code>null</code> | <p>float: assign, null: 0</p> |

**Example**  
```js
const v1 = new Vector2(12, 9);
// Dividing v1 Vector2 by 3
v1.divide(3);
// v1 values are now x:4 & y:3
```
**Example**  
```js
const v1 = new Vector2(10, 15);
// Dividing v1 Vector2 by 2, 5
v1.divide(2, 5);
// v1 values are now x:5 & y:3
```
**Example**  
```js
const v1 = new Vector2(5, 8);
// Dividing v1 Vector2 by 2, 4
v1.divide({x:2, y:4});
// v1 values are now x:2.5 & y:2
```
**Example**  
```js
const v1 = new Vector2(12, 10);
const v2 = new Vector2(6, 2);
// Dividing v1 Vector2 by 6, 2
v1.divide(v2);
// v1 values are now x:2 & y:5, v2 is unchanged
```
<a name="Vector2+divideX"></a>

### vector2.divideX(v) ⇒
<p>Divinding x value of the Vector2 by v</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The divisor</p> |

<a name="Vector2+divideY"></a>

### vector2.divideY(v) ⇒
<p>Divinding x value of the Vector2 by v</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>float</code> | <p>The divisor</p> |

<a name="Vector2+invert"></a>

### vector2.invert() ⇒
<p>Inverting the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**Example**  
```js
const v1 = new Vector2(3, 6);
v1.invert();
// v1 values are now x:-3 & y:-6
```
<a name="Vector2+invertX"></a>

### vector2.invertX() ⇒
<p>Inverting the x value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**Example**  
```js
const v1 = new Vector2(3, 6);
v1.invertX();
// v1 values are now x:-3 & y:6
```
<a name="Vector2+invertY"></a>

### vector2.invertY() ⇒
<p>Inverting the y value of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**Example**  
```js
const v1 = new Vector2(3, 6);
v1.invertY();
// v1 values are now x:3 & y:-6
```
<a name="Vector2+rotate"></a>

### vector2.rotate(angle) ⇒
<p>Rotate the Vector2 arround zero by angle</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>float</code> | <p>degrees angle</p> |

**Example**  
```js
const v1 = new Vector2(3, 6);
v1.rotate(180);
// v1 values are now x:-3 & y:-6
```
<a name="Vector2+equals"></a>

### vector2.equals() ⇒
<p>Test if the Vector2 is equal to an other</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>boolean</p>  
**Example**  
```js
const v1 = new Vector2(3, 6);
const v2 = new Vector2(4, 6);
return v1.equals(v2); // false
```
<a name="Vector2+equalsX"></a>

### vector2.equalsX() ⇒
<p>Test if the x value of the Vector2 is equal to an other</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>boolean</p>  
**Example**  
```js
const v1 = new Vector2(3, 6);
const v2 = new Vector2(4, 6);
return v1.equalsX(v2); // false
```
<a name="Vector2+equalsY"></a>

### vector2.equalsY() ⇒
<p>Test if the y value of the Vector2 is equal to an other</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>boolean</p>  
**Example**  
```js
const v1 = new Vector2(3, 6);
const v2 = new Vector2(4, 6);
return v1.equalsY(v2); // true
```
<a name="Vector2+isInside"></a>

### vector2.isInside(polygon) ⇒
<p>Test if the current Vector2 is inside a polygon</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>boolean</p>  

| Param | Type | Description |
| --- | --- | --- |
| polygon | <code>Polygon</code> | <p>The polygon to check</p> |

**Example**  
```js
const polygon = new Polygon([
	new Vector2(0,0),
	new Vector2(10,0),
	new Vector2(10,10),
	new Vector2(0,10)
]);
const v1 = new Vector2(5, 5);
return v1.isInside(polygon); // true
```
<a name="Vector2+approximate"></a>

### vector2.approximate() ⇒
<p>Modify the current Vector2 and get an approximated value
Can be usefull for removing near duplicate vertices</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  
**See**: approximated  
**Example**  
```js
const v1 = new Vector2(Math.PI, Math.PI);
console.log(v1.toString()); // {x: 3.141592653589793, y: 3.141592653589793}
console.log(v1.approximate().toString()); // {x: 3.1416, y: 3.1416}
```
<a name="Vector2+toString"></a>

### vector2.toString() ⇒
<p>Getting JSON string version of the Vector2</p>

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>string</p>  
<a name="Vector2.Distance"></a>

### Vector2.Distance(v1, v2) ⇒
<p>Getting the distance between two Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>float</p>  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | <p>first Vector2</p> |
| v2 | [<code>Vector2</code>](#Vector2) | <p>second Vector2</p> |

<a name="Vector2.Max"></a>

### Vector2.Max(v1, v2) ⇒
<p>Getting the max values from two Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | <p>first Vector2</p> |
| v2 | [<code>Vector2</code>](#Vector2) | <p>second Vector2</p> |

<a name="Vector2.Min"></a>

### Vector2.Min(v1, v2) ⇒
<p>Getting the min values from two Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | <p>first Vector2</p> |
| v2 | [<code>Vector2</code>](#Vector2) | <p>second Vector2</p> |

<a name="Vector2.Lerp"></a>

### Vector2.Lerp(v1, v2, t) ⇒
<p>Getting a Lerp Vector2 from v1 to v2 with t time</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | <p>first Vector2</p> |
| v2 | [<code>Vector2</code>](#Vector2) | <p>second Vector2</p> |
| t | <code>float</code> | <p>time of lerp, value should be between 0 and 1</p> |

<a name="Vector2.LerpUnclamped"></a>

### Vector2.LerpUnclamped(v1, v2, t) ⇒
<p>Getting a Lerp Vector2 from v1 to v2 with t time (Unclamped version)</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
**Returns**: <p>Vector2</p>  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | <p>first Vector2</p> |
| v2 | [<code>Vector2</code>](#Vector2) | <p>second Vector2</p> |
| t | <code>float</code> | <p>time of lerp, value should be between 0 and 1, but it can exceed this values</p> |

<a name="Vector2.Zero"></a>

### Vector2.Zero()
<p>A zero Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Top"></a>

### Vector2.Top()
<p>A top Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Left"></a>

### Vector2.Left()
<p>A left Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Bottom"></a>

### Vector2.Bottom()
<p>A bottom Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Right"></a>

### Vector2.Right()
<p>A right Vector2</p>

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

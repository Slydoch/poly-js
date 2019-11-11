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





## Classes

<dl>
<dt><a href="#Line">Line</a></dt>
<dd><p>Line Class</p>
</dd>
<dt><a href="#Polygon">Polygon</a></dt>
<dd><p>Polygon Class</p>
</dd>
<dt><a href="#Rect">Rect</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd><p>Rect Class</p>
</dd>
<dt><a href="#Vector2">Vector2</a></dt>
<dd><p>Vector2 Class</p>
</dd>
</dl>

<a name="Line"></a>

## Line
Line Class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start | [<code>Vector2</code>](#Vector2) | The start position of the line |
| end | [<code>Vector2</code>](#Vector2) | The end position of the line |


* [Line](#Line)
    * [new Line([p1], [p2])](#new_Line_new)
    * _instance_
        * [.length](#Line+length) : <code>Number</code>
        * [.intersect(line)](#Line+intersect) ⇒
    * _static_
        * [.Intersect(l1, l2)](#Line.Intersect) ⇒

<a name="new_Line_new"></a>

### new Line([p1], [p2])

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Object</code> | Vector2 like object of the start position |
| [p2] | [<code>Vector2</code>](#Vector2) \| <code>Object</code> | Vector2 like object of the end position |

<a name="Line+length"></a>

### line.length : <code>Number</code>
**Kind**: instance property of [<code>Line</code>](#Line)  
**Read only**: true  
<a name="Line+intersect"></a>

### line.intersect(line) ⇒
Get the intersection of this line with an other one
Return false if lines does not intersect

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: boolean|Vector2  

| Param | Type | Description |
| --- | --- | --- |
| line | [<code>Line</code>](#Line) | Second line |

<a name="Line.Intersect"></a>

### Line.Intersect(l1, l2) ⇒
Get the intersection of two lines
Return false if lines does not intersect

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: boolean|Vector2  

| Param | Type | Description |
| --- | --- | --- |
| l1 | [<code>Line</code>](#Line) | First line |
| l2 | [<code>Line</code>](#Line) | Second line |

<a name="Polygon"></a>

## Polygon
Polygon Class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| first | [<code>Vector2</code>](#Vector2) | The first point of the polygon, follow next on first to iterate |
| region | <code>Array.&lt;Array&gt;</code> |  |
| points | [<code>Array.&lt;Vector2&gt;</code>](#Vector2) |  |
| points | [<code>Array.&lt;Line&gt;</code>](#Line) |  |
| area | <code>Number</code> |  |


* [Polygon](#Polygon)
    * [new Polygon([vertices])](#new_Polygon_new)
    * _instance_
        * [.region](#Polygon+region)
        * [.points](#Polygon+points)
        * [.lines](#Polygon+lines)
        * [.area](#Polygon+area)
        * [.pointIsInside(point)](#Polygon+pointIsInside) ⇒ <code>boolean</code>
        * [.setChildren(polygons)](#Polygon+setChildren) ⇒ [<code>Polygon</code>](#Polygon)
        * [.addChild(polygon)](#Polygon+addChild) ⇒ [<code>Polygon</code>](#Polygon)
        * [.setVertexes(vertices)](#Polygon+setVertexes) ⇒ [<code>Polygon</code>](#Polygon)
        * [.addVertex(vertice)](#Polygon+addVertex) ⇒ [<code>Polygon</code>](#Polygon)
        * [.colliding(polygon)](#Polygon+colliding) ⇒ <code>Boolean</code>
        * [.intersect(polygon)](#Polygon+intersect) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
        * [.difference(polygon)](#Polygon+difference) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
        * [.union(polygon)](#Polygon+union) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
        * [.xor(polygon)](#Polygon+xor) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
    * _static_
        * [.Colliding(p1, p2)](#Polygon.Colliding) ⇒ <code>Boolean</code>
        * [.FromRegion(region)](#Polygon.FromRegion) ⇒ [<code>Polygon</code>](#Polygon)
        * [.Intersect(polygon, polygon)](#Polygon.Intersect) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
        * [.Union(polygon, polygon)](#Polygon.Union) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
        * [.Difference(polygon, polygon)](#Polygon.Difference) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
        * [.Xor(polygon, polygon)](#Polygon.Xor) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)

<a name="new_Polygon_new"></a>

### new Polygon([vertices])
Create a new Polygon


| Param | Type | Description |
| --- | --- | --- |
| [vertices] | [<code>Array.&lt;Vector2&gt;</code>](#Vector2) | Vertices of the polygon |

<a name="Polygon+region"></a>

### polygon.region
Get region for polybooljs plugin, can be also be used for GeoJson
Return a double level array ([[x, y], [x, y], ...])

**Kind**: instance property of [<code>Polygon</code>](#Polygon)  
<a name="Polygon+points"></a>

### polygon.points
Get points of the Polygon

**Kind**: instance property of [<code>Polygon</code>](#Polygon)  
<a name="Polygon+lines"></a>

### polygon.lines
Get lines of the Polygon

**Kind**: instance property of [<code>Polygon</code>](#Polygon)  
<a name="Polygon+area"></a>

### polygon.area
Get area of the Polygon

**Kind**: instance property of [<code>Polygon</code>](#Polygon)  
<a name="Polygon+pointIsInside"></a>

### polygon.pointIsInside(point) ⇒ <code>boolean</code>
Check if a point is inside a polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Vector2</code>](#Vector2) | Point to check |

<a name="Polygon+setChildren"></a>

### polygon.setChildren(polygons) ⇒ [<code>Polygon</code>](#Polygon)
Setting all children polygons (for holes)

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygons | [<code>Array.&lt;Polygon&gt;</code>](#Polygon) | Children to set |

<a name="Polygon+addChild"></a>

### polygon.addChild(polygon) ⇒ [<code>Polygon</code>](#Polygon)
Adding a child polygon (for hole)

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | Child polygon to add |

<a name="Polygon+setVertexes"></a>

### polygon.setVertexes(vertices) ⇒ [<code>Polygon</code>](#Polygon)
Setting vertices of the polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| vertices | [<code>Array.&lt;Vector2&gt;</code>](#Vector2) | Vertices to set |

<a name="Polygon+addVertex"></a>

### polygon.addVertex(vertice) ⇒ [<code>Polygon</code>](#Polygon)
Add a new vertices to the end

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| vertice | [<code>Vector2</code>](#Vector2) | the vertice to add |

<a name="Polygon+colliding"></a>

### polygon.colliding(polygon) ⇒ <code>Boolean</code>
Is the current polygon colliding with the given polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the collision |

<a name="Polygon+intersect"></a>

### polygon.intersect(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Intersect boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon+difference"></a>

### polygon.difference(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Difference boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon+union"></a>

### polygon.union(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Union boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon+xor"></a>

### polygon.xor(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Xor boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon.Colliding"></a>

### Polygon.Colliding(p1, p2) ⇒ <code>Boolean</code>
Is the p1 polygon colliding with the p2 polygon

**Kind**: static method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Polygon</code>](#Polygon) | the first polygon for the collision |
| p2 | [<code>Polygon</code>](#Polygon) | the second polygon for the collision |

<a name="Polygon.FromRegion"></a>

### Polygon.FromRegion(region) ⇒ [<code>Polygon</code>](#Polygon)
Convert region to polygon

**Kind**: static method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| region | <code>Array.&lt;Array&gt;</code> | the region to convert |

<a name="Polygon.Intersect"></a>

### Polygon.Intersect(polygon, polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Intersect boolean operation on the p1 polygon with the p2 polygon

**Kind**: static method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the first polygon for the operation |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon.Union"></a>

### Polygon.Union(polygon, polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Union boolean operation on the p1 polygon with the p2 polygon

**Kind**: static method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the first polygon for the operation |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon.Difference"></a>

### Polygon.Difference(polygon, polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Difference boolean operation on the p1 polygon with the p2 polygon

**Kind**: static method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the first polygon for the operation |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon.Xor"></a>

### Polygon.Xor(polygon, polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Xor boolean operation on the p1 polygon with the p2 polygon

**Kind**: static method of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the first polygon for the operation |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Rect"></a>

## Rect ⇐ [<code>Polygon</code>](#Polygon)
Rect Class

**Kind**: global class  
**Extends**: [<code>Polygon</code>](#Polygon)  
**Properties**

| Name | Type |
| --- | --- |
| position | [<code>Vector2</code>](#Vector2) | 
| size | [<code>Vector2</code>](#Vector2) | 


* [Rect](#Rect) ⇐ [<code>Polygon</code>](#Polygon)
    * [new Rect([p1], [p2], [p3], [p4])](#new_Rect_new)
    * [.region](#Polygon+region)
    * [.points](#Polygon+points)
    * [.lines](#Polygon+lines)
    * [.area](#Polygon+area)
    * [.pointIsInside(point)](#Polygon+pointIsInside) ⇒ <code>boolean</code>
    * [.setChildren(polygons)](#Polygon+setChildren) ⇒ [<code>Polygon</code>](#Polygon)
    * [.addChild(polygon)](#Polygon+addChild) ⇒ [<code>Polygon</code>](#Polygon)
    * [.setVertexes(vertices)](#Polygon+setVertexes) ⇒ [<code>Polygon</code>](#Polygon)
    * [.addVertex(vertice)](#Polygon+addVertex) ⇒ [<code>Polygon</code>](#Polygon)
    * [.colliding(polygon)](#Polygon+colliding) ⇒ <code>Boolean</code>
    * [.intersect(polygon)](#Polygon+intersect) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
    * [.difference(polygon)](#Polygon+difference) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
    * [.union(polygon)](#Polygon+union) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
    * [.xor(polygon)](#Polygon+xor) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)

<a name="new_Rect_new"></a>

### new Rect([p1], [p2], [p3], [p4])

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Object</code> \| <code>Number</code> | Vector2 like object of the start position | position.x |
| [p2] | [<code>Vector2</code>](#Vector2) \| <code>Object</code> \| <code>Number</code> | Vector2 like object of the size | position.y |
| [p3] | <code>Number</code> | size.x |
| [p4] | <code>Number</code> | size.y |

<a name="Polygon+region"></a>

### rect.region
Get region for polybooljs plugin, can be also be used for GeoJson
Return a double level array ([[x, y], [x, y], ...])

**Kind**: instance property of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>region</code>](#Polygon+region)  
<a name="Polygon+points"></a>

### rect.points
Get points of the Polygon

**Kind**: instance property of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>points</code>](#Polygon+points)  
<a name="Polygon+lines"></a>

### rect.lines
Get lines of the Polygon

**Kind**: instance property of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>lines</code>](#Polygon+lines)  
<a name="Polygon+area"></a>

### rect.area
Get area of the Polygon

**Kind**: instance property of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>area</code>](#Polygon+area)  
<a name="Polygon+pointIsInside"></a>

### rect.pointIsInside(point) ⇒ <code>boolean</code>
Check if a point is inside a polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>pointIsInside</code>](#Polygon+pointIsInside)  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Vector2</code>](#Vector2) | Point to check |

<a name="Polygon+setChildren"></a>

### rect.setChildren(polygons) ⇒ [<code>Polygon</code>](#Polygon)
Setting all children polygons (for holes)

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>setChildren</code>](#Polygon+setChildren)  

| Param | Type | Description |
| --- | --- | --- |
| polygons | [<code>Array.&lt;Polygon&gt;</code>](#Polygon) | Children to set |

<a name="Polygon+addChild"></a>

### rect.addChild(polygon) ⇒ [<code>Polygon</code>](#Polygon)
Adding a child polygon (for hole)

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>addChild</code>](#Polygon+addChild)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | Child polygon to add |

<a name="Polygon+setVertexes"></a>

### rect.setVertexes(vertices) ⇒ [<code>Polygon</code>](#Polygon)
Setting vertices of the polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>setVertexes</code>](#Polygon+setVertexes)  

| Param | Type | Description |
| --- | --- | --- |
| vertices | [<code>Array.&lt;Vector2&gt;</code>](#Vector2) | Vertices to set |

<a name="Polygon+addVertex"></a>

### rect.addVertex(vertice) ⇒ [<code>Polygon</code>](#Polygon)
Add a new vertices to the end

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>addVertex</code>](#Polygon+addVertex)  

| Param | Type | Description |
| --- | --- | --- |
| vertice | [<code>Vector2</code>](#Vector2) | the vertice to add |

<a name="Polygon+colliding"></a>

### rect.colliding(polygon) ⇒ <code>Boolean</code>
Is the current polygon colliding with the given polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>colliding</code>](#Polygon+colliding)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the collision |

<a name="Polygon+intersect"></a>

### rect.intersect(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Intersect boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>intersect</code>](#Polygon+intersect)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon+difference"></a>

### rect.difference(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Difference boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>difference</code>](#Polygon+difference)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon+union"></a>

### rect.union(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Union boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>union</code>](#Polygon+union)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Polygon+xor"></a>

### rect.xor(polygon) ⇒ [<code>Array.&lt;Polygon&gt;</code>](#Polygon)
Xor boolean operation on this polygon with the given polygon

**Kind**: instance method of [<code>Rect</code>](#Rect)  
**Overrides**: [<code>xor</code>](#Polygon+xor)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | the second polygon for the operation |

<a name="Vector2"></a>

## Vector2
Vector2 Class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The x value of the vertice |
| y | <code>Number</code> | The y value of the vertice |


* [Vector2](#Vector2)
    * [new Vector2([p1], [p2])](#new_Vector2_new)
    * _instance_
        * [.approximated](#Vector2+approximated) : [<code>Vector2</code>](#Vector2)
        * [.normalized](#Vector2+normalized) : [<code>Vector2</code>](#Vector2)
        * [.norm](#Vector2+norm) : [<code>Vector2</code>](#Vector2)
        * [.magnitude](#Vector2+magnitude) : <code>Number</code>
        * [.clone](#Vector2+clone) : [<code>Vector2</code>](#Vector2)
        * [.floor(v)](#Vector2+floor) ⇒ [<code>Vector2</code>](#Vector2)
        * [.floorX([v])](#Vector2+floorX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.floorY([v])](#Vector2+floorY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.ceil([v])](#Vector2+ceil) ⇒ [<code>Vector2</code>](#Vector2)
        * [.ceilX([v])](#Vector2+ceilX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.ceilY([v])](#Vector2+ceilY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.round([v])](#Vector2+round) ⇒ [<code>Vector2</code>](#Vector2)
        * [.roundX([v])](#Vector2+roundX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.roundY([v])](#Vector2+roundY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.set([p1], [p2])](#Vector2+set) ⇒ [<code>Vector2</code>](#Vector2)
        * [.setX(v)](#Vector2+setX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.setY(v)](#Vector2+setY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.add([p1], [p2])](#Vector2+add) ⇒ [<code>Vector2</code>](#Vector2)
        * [.addX(v)](#Vector2+addX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.addY(v)](#Vector2+addY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.substract([p1], [p2])](#Vector2+substract) ⇒ [<code>Vector2</code>](#Vector2)
        * [.substractX(v)](#Vector2+substractX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.substractY(v)](#Vector2+substractY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.multiply([p1], [p2])](#Vector2+multiply) ⇒ [<code>Vector2</code>](#Vector2)
        * [.multiplyX(v)](#Vector2+multiplyX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.multiplyY(v)](#Vector2+multiplyY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.divide(p1, p2)](#Vector2+divide) ⇒ [<code>Vector2</code>](#Vector2)
        * [.divideX(v)](#Vector2+divideX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.divideY(v)](#Vector2+divideY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.invert()](#Vector2+invert) ⇒ [<code>Vector2</code>](#Vector2)
        * [.invertX()](#Vector2+invertX) ⇒ [<code>Vector2</code>](#Vector2)
        * [.invertY()](#Vector2+invertY) ⇒ [<code>Vector2</code>](#Vector2)
        * [.rotate(angle)](#Vector2+rotate) ⇒ [<code>Vector2</code>](#Vector2)
        * [.equals([p1], [p2])](#Vector2+equals) ⇒ <code>Boolean</code>
        * [.equalsX(v)](#Vector2+equalsX) ⇒ <code>Boolean</code>
        * [.equalsY(v)](#Vector2+equalsY) ⇒ <code>Boolean</code>
        * [.isInside(polygon)](#Vector2+isInside) ⇒ <code>Boolean</code>
        * [.approximate()](#Vector2+approximate)
        * [.toString()](#Vector2+toString) ⇒ <code>String</code>
    * _static_
        * [.Distance(v1, v2)](#Vector2.Distance) ⇒ <code>Number</code>
        * [.Max(v1, v2)](#Vector2.Max) ⇒ [<code>Vector2</code>](#Vector2)
        * [.Min(v1, v2)](#Vector2.Min) ⇒ [<code>Vector2</code>](#Vector2)
        * [.Lerp(v1, v2, t)](#Vector2.Lerp) ⇒ [<code>Vector2</code>](#Vector2)
        * [.LerpUnclamped(v1, v2, t)](#Vector2.LerpUnclamped) ⇒ [<code>Vector2</code>](#Vector2)
        * [.IsVector2Like(subject)](#Vector2.IsVector2Like) ⇒ [<code>Vector2</code>](#Vector2) \| <code>false</code>
        * [.Zero()](#Vector2.Zero) ⇒ [<code>Vector2</code>](#Vector2)
        * [.Top()](#Vector2.Top) ⇒ [<code>Vector2</code>](#Vector2)
        * [.Left()](#Vector2.Left) ⇒ [<code>Vector2</code>](#Vector2)
        * [.Bottom()](#Vector2.Bottom) ⇒ [<code>Vector2</code>](#Vector2)
        * [.Right()](#Vector2.Right) ⇒ [<code>Vector2</code>](#Vector2)

<a name="new_Vector2_new"></a>

### new Vector2([p1], [p2])

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| [p2] | <code>Number</code> | Number: assign |

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

### vector2.approximated : [<code>Vector2</code>](#Vector2)
Approximated value of the Vector2 (used to remove duplicates)

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**See**: [approximate](approximate)  
**Example**  
```js
const v1 = new Vector2(Math.PI, Math.PI);
console.log(v1.toString()); // {x: 3.141592653589793, y: 3.141592653589793}
console.log(v1.approximate.toString()); // {x: 3.1416, y: 3.1416}
```
<a name="Vector2+normalized"></a>

### vector2.normalized : [<code>Vector2</code>](#Vector2)
Normalized Vector2

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**See**: [norm](norm)  
**Example**  
```js
const v1 = new Vector2(1, 1);
console.log(v1.normalized.toString()); // {x: 0.7071067811865476, y: 0.7071067811865476}
```
<a name="Vector2+norm"></a>

### vector2.norm : [<code>Vector2</code>](#Vector2)
Alias of normalized

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**See**: [normalized](normalized)  
<a name="Vector2+magnitude"></a>

### vector2.magnitude : <code>Number</code>
Magnitude of the Vector2

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Example**  
```js
const v1 = new Vector2(12, 32);
console.log(v1.magnitude); // 34.17601498127012
```
<a name="Vector2+clone"></a>

### vector2.clone : [<code>Vector2</code>](#Vector2)
A clone of the Vector2

**Kind**: instance property of [<code>Vector2</code>](#Vector2)  
**Example**  
```js
const v1 = new Vector2(5, 5);
console.log(v1.clone.add(2, 3)); // {x: 7, y: 8}
// v1 is unchanged
```
<a name="Vector2+floor"></a>

### vector2.floor(v) ⇒ [<code>Vector2</code>](#Vector2)
Flooring the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| v | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+floorX"></a>

### vector2.floorX([v]) ⇒ [<code>Vector2</code>](#Vector2)
Flooring the x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+floorY"></a>

### vector2.floorY([v]) ⇒ [<code>Vector2</code>](#Vector2)
Flooring the y value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+ceil"></a>

### vector2.ceil([v]) ⇒ [<code>Vector2</code>](#Vector2)
Ceiling the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+ceilX"></a>

### vector2.ceilX([v]) ⇒ [<code>Vector2</code>](#Vector2)
Ceiling the x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+ceilY"></a>

### vector2.ceilY([v]) ⇒ [<code>Vector2</code>](#Vector2)
Ceiling the y value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+round"></a>

### vector2.round([v]) ⇒ [<code>Vector2</code>](#Vector2)
Rounding the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+roundX"></a>

### vector2.roundX([v]) ⇒ [<code>Vector2</code>](#Vector2)
Rounding the x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+roundY"></a>

### vector2.roundY([v]) ⇒ [<code>Vector2</code>](#Vector2)
Rounding the y value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Number</code> | <code>1</code> | Precision |

<a name="Vector2+set"></a>

### vector2.set([p1], [p2]) ⇒ [<code>Vector2</code>](#Vector2)
Setting the value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| [p2] | <code>Number</code> | Number: assign |

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

### vector2.setX(v) ⇒ [<code>Vector2</code>](#Vector2)
Setting the x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value |

<a name="Vector2+setY"></a>

### vector2.setY(v) ⇒ [<code>Vector2</code>](#Vector2)
Setting the y value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value |

<a name="Vector2+add"></a>

### vector2.add([p1], [p2]) ⇒ [<code>Vector2</code>](#Vector2)
Adding values to the the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| [p2] | <code>Number</code> | Number: assign |

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

### vector2.addX(v) ⇒ [<code>Vector2</code>](#Vector2)
Adding v to x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value |

<a name="Vector2+addY"></a>

### vector2.addY(v) ⇒ [<code>Vector2</code>](#Vector2)
Adding v to y value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value |

<a name="Vector2+substract"></a>

### vector2.substract([p1], [p2]) ⇒ [<code>Vector2</code>](#Vector2)
Substracting values to the the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| [p2] | <code>Number</code> | Number: assign |

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

### vector2.substractX(v) ⇒ [<code>Vector2</code>](#Vector2)
Substracting v to x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value |

<a name="Vector2+substractY"></a>

### vector2.substractY(v) ⇒ [<code>Vector2</code>](#Vector2)
Substracting v to x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value |

<a name="Vector2+multiply"></a>

### vector2.multiply([p1], [p2]) ⇒ [<code>Vector2</code>](#Vector2)
Multiply values to the the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| [p2] | <code>Number</code> | Number: assign |

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
// Multiply  1, 2 to v1 Vector2
v1.multiply({x:1, y:2});
// v1 values are now x:2 & y:6
```
**Example**  
```js
const v1 = new Vector2(2, 3);
const v2 = new Vector2(4, 1);
// Multiply v2 to v1 Vector2
v1.multiply(v2);
// v1 values are now x:8 & y:3, v2 is unchanged
```
<a name="Vector2+multiplyX"></a>

### vector2.multiplyX(v) ⇒ [<code>Vector2</code>](#Vector2)
Multiply x value of the Vector2 by v

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The multiplicator |

<a name="Vector2+multiplyY"></a>

### vector2.multiplyY(v) ⇒ [<code>Vector2</code>](#Vector2)
Multiply y value of the Vector2 by v

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The multiplicator |

<a name="Vector2+divide"></a>

### vector2.divide(p1, p2) ⇒ [<code>Vector2</code>](#Vector2)
Dividing values to the the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| p2 | <code>Number</code> | Number: assign |

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

### vector2.divideX(v) ⇒ [<code>Vector2</code>](#Vector2)
Divinding x value of the Vector2 by v

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The divisor |

<a name="Vector2+divideY"></a>

### vector2.divideY(v) ⇒ [<code>Vector2</code>](#Vector2)
Divinding x value of the Vector2 by v

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The divisor |

<a name="Vector2+invert"></a>

### vector2.invert() ⇒ [<code>Vector2</code>](#Vector2)
Inverting the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Example**  
```js
const v1 = new Vector2(3, 6);
v1.invert();
// v1 values are now x:-3 & y:-6
```
<a name="Vector2+invertX"></a>

### vector2.invertX() ⇒ [<code>Vector2</code>](#Vector2)
Inverting the x value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Example**  
```js
const v1 = new Vector2(3, 6);
v1.invertX();
// v1 values are now x:-3 & y:6
```
<a name="Vector2+invertY"></a>

### vector2.invertY() ⇒ [<code>Vector2</code>](#Vector2)
Inverting the y value of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**Example**  
```js
const v1 = new Vector2(3, 6);
v1.invertY();
// v1 values are now x:3 & y:-6
```
<a name="Vector2+rotate"></a>

### vector2.rotate(angle) ⇒ [<code>Vector2</code>](#Vector2)
Rotate the Vector2 arround zero by angle

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>Number</code> | degrees angle |

**Example**  
```js
const v1 = new Vector2(3, 6);
v1.rotate(180);
// v1 values are now x:-3 & y:-6
```
<a name="Vector2+equals"></a>

### vector2.equals([p1], [p2]) ⇒ <code>Boolean</code>
Test if the Vector2 is equal to an other

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| [p1] | [<code>Vector2</code>](#Vector2) \| <code>Number</code> | Vector2: copy, Number: assign |
| [p2] | <code>Number</code> | Number: assign |

**Example**  
```js
const v1 = new Vector2(3, 6);
const v2 = new Vector2(4, 6);
return v1.equals(v2); // false
```
<a name="Vector2+equalsX"></a>

### vector2.equalsX(v) ⇒ <code>Boolean</code>
Test if the x value of the Vector2 is equal to an other

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value to compare |

**Example**  
```js
const v1 = new Vector2(3, 6);
const v2 = new Vector2(4, 6);
return v1.equalsX(v2); // false
```
<a name="Vector2+equalsY"></a>

### vector2.equalsY(v) ⇒ <code>Boolean</code>
Test if the y value of the Vector2 is equal to an other

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Number</code> | The value to compare |

**Example**  
```js
const v1 = new Vector2(3, 6);
const v2 = new Vector2(4, 6);
return v1.equalsY(v2); // true
```
<a name="Vector2+isInside"></a>

### vector2.isInside(polygon) ⇒ <code>Boolean</code>
Test if the current Vector2 is inside a polygon

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| polygon | [<code>Polygon</code>](#Polygon) | The polygon to check |

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

### vector2.approximate()
**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
**See**: [approximated](approximated)  
**Example**  
```js
const v1 = new Vector2(Math.PI, Math.PI);
console.log(v1.toString()); // {x: 3.141592653589793, y: 3.141592653589793}
console.log(v1.approximate().toString()); // {x: 3.1416, y: 3.1416}
```
<a name="Vector2+toString"></a>

### vector2.toString() ⇒ <code>String</code>
Getting JSON string version of the Vector2

**Kind**: instance method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Distance"></a>

### Vector2.Distance(v1, v2) ⇒ <code>Number</code>
Getting the distance between two Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | first Vector2 |
| v2 | [<code>Vector2</code>](#Vector2) | second Vector2 |

<a name="Vector2.Max"></a>

### Vector2.Max(v1, v2) ⇒ [<code>Vector2</code>](#Vector2)
Getting the max values from two Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | first Vector2 |
| v2 | [<code>Vector2</code>](#Vector2) | second Vector2 |

<a name="Vector2.Min"></a>

### Vector2.Min(v1, v2) ⇒ [<code>Vector2</code>](#Vector2)
Getting the min values from two Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | first Vector2 |
| v2 | [<code>Vector2</code>](#Vector2) | second Vector2 |

<a name="Vector2.Lerp"></a>

### Vector2.Lerp(v1, v2, t) ⇒ [<code>Vector2</code>](#Vector2)
Getting a Lerp Vector2 from v1 to v2 with t time

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | first Vector2 |
| v2 | [<code>Vector2</code>](#Vector2) | second Vector2 |
| t | <code>Number</code> | time of lerp, value should be between 0 and 1 |

<a name="Vector2.LerpUnclamped"></a>

### Vector2.LerpUnclamped(v1, v2, t) ⇒ [<code>Vector2</code>](#Vector2)
Getting a Lerp Vector2 from v1 to v2 with t time (Unclamped version)

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

| Param | Type | Description |
| --- | --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | first Vector2 |
| v2 | [<code>Vector2</code>](#Vector2) | second Vector2 |
| t | <code>Number</code> | time of lerp, value should be between 0 and 1, but it can exceed this values |

<a name="Vector2.IsVector2Like"></a>

### Vector2.IsVector2Like(subject) ⇒ [<code>Vector2</code>](#Vector2) \| <code>false</code>
Test if the passed element is a Vector2 like and return Vector2 corresponding, or false

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
**Returns**: [<code>Vector2</code>](#Vector2) \| <code>false</code> - false on failure  

| Param | Type | Description |
| --- | --- | --- |
| subject | <code>any</code> | The subject to test |

<a name="Vector2.Zero"></a>

### Vector2.Zero() ⇒ [<code>Vector2</code>](#Vector2)
A zero Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Top"></a>

### Vector2.Top() ⇒ [<code>Vector2</code>](#Vector2)
A top Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Left"></a>

### Vector2.Left() ⇒ [<code>Vector2</code>](#Vector2)
A left Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Bottom"></a>

### Vector2.Bottom() ⇒ [<code>Vector2</code>](#Vector2)
A bottom Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  
<a name="Vector2.Right"></a>

### Vector2.Right() ⇒ [<code>Vector2</code>](#Vector2)
A right Vector2

**Kind**: static method of [<code>Vector2</code>](#Vector2)  

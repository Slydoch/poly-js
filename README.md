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

## Vector2
### Construction
```javascript
	new Vector2() // Empty vector
	new Vector2(xy) // x and y will be set to the same value
	new Vector2(x, y) // x > x && y > y
	new Vector2({x: x, y: y}) // Create a vector from a vector like object
```
### Properties
```javascript
	x: float; //x value of the vector2
	y: float; //y value of the vector2
```

### Methods
#### floor
``@param float v Precision``
```typescript
	floor(v: float = 1.0)
	floorX(v: float = 1.0)
	floorY(v: float = 1.0)
```
#### ceil
``@param float v Precision``
```typescript
	ceil(v: float = 1.0)
	ceilX(v: float = 1.0)
	ceilY(v: float = 1.0)
```
#### round
``@param float v Precision``
```typescript
	round(v: float = 1.0)
	roundX(v: float = 1.0)
	roundY(v: float = 1.0)
```
#### set
```typescript
	set(x: float, y: float)
	set(xy: float)
	set({x: float, y: float})
	set(v: Vector2)
	setX(v: float)
	setY(v: float)
```
#### add
```typescript
	add(x: float, y: float)
	add(xy: float)
	add({x: float, y: float})
	add(v: Vector2)
	addX(v: float)
	addY(v: float)
```
#### substract
```typescript
	substract(x: float, y: float)
	substract(xy: float)
	substract({x: float, y: float})
	substract(v: Vector2)
	substractX(v: float)
	substractY(v: float)
```
#### multiply
```typescript
	multiply(x: float, y: float)
	multiply(xy: float)
	multiply({x: float, y: float})
	multiply(v: Vector2)
	multiplyX(v: float)
	multiplyY(v: float)
```
#### divide
```typescript
	divide(x: float, y: float)
	divide(xy: float)
	divide({x: float, y: float})
	divide(v: Vector2)
	divideX(v: float)
	divideY(v: float)
```
#### invert
```typescript
	invert()
	invertX()
	invertY()
```
#### rotate
``@param float angle Angle to rotate (degrees)``
```typescript
	rotate(angle; float)
```
#### equals
Compare two Vector2 and return true if there are equals
```typescript
	equals(x: float, y: float)
	equals(xy: float)
	equals({x: float, y: float})
	equals(v: Vector2)
	equalsX(v: float)
	equalsY(v: float)
```
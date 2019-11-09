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
	floorX(v: float = 1.0) // Only X axis
	floorY(v: float = 1.0) // Only Y axis
```
#### ceil
``@param float v Precision``
```typescript
	ceil(v: float = 1.0)
	ceilX(v: float = 1.0) // Only X axis
	ceilY(v: float = 1.0) // Only Y axis
```
#### round
``@param float v Precision``
```typescript
	round(v: float = 1.0)
	roundX(v: float = 1.0) // Only X axis
	roundY(v: float = 1.0) // Only Y axis
```
#### set
```typescript
	set(x: float, y: float)
	set(xy: float)
	set({x: float, y: float})
	set(v: Vector2)
	setX(v: float) // Only X axis
	setY(v: float) // Only Y axis
```
#### add
```typescript
	add(x: float, y: float)
	add(xy: float)
	add({x: float, y: float})
	add(v: Vector2)
	addX(v: float) // Only X axis
	addY(v: float) // Only Y axis
```
#### substract
```typescript
	substract(x: float, y: float)
	substract(xy: float)
	substract({x: float, y: float})
	substract(v: Vector2)
	substractX(v: float) // Only X axis
	substractY(v: float) // Only Y axis
```
#### multiply
```typescript
	multiply(x: float, y: float)
	multiply(xy: float)
	multiply({x: float, y: float})
	multiply(v: Vector2)
	multiplyX(v: float) // Only X axis
	multiplyY(v: float) // Only Y axis
```
#### divide
```typescript
	divide(x: float, y: float)
	divide(xy: float)
	divide({x: float, y: float})
	divide(v: Vector2)
	divideX(v: float) // Only X axis
	divideY(v: float) // Only Y axis
```
#### invert
```typescript
	invert()
	invertX() // Only X axis
	invertY() // Only Y axis
```
#### rotate
``@param float angle Angle to rotate (degrees)``
```typescript
	rotate(angle: float)
```
#### equals
Compare two Vector2 and return true if there are equals
```typescript
	equals(x: float, y: float)
	equals(xy: float)
	equals({x: float, y: float})
	equals(v: Vector2)
	equalsX(v: float) // Only X axis
	equalsY(v: float) // Only Y axis
```
#### isInside
Check if the Vector2 is inside a Polygon
```typescript
	isInside(p: Polygon)
```
### Getters
#### approximate
Get an approximated value of the Vector2, removing floating point error

#### normalized
Get the normalized Vector2 (alia: **norm**)

#### magnitude
Get the magnitude of the Vector2

#### get clone
Get a clone of the current Vector2

### Static methods

#### Distance
Get the distance between two Vector2
```typescript
	Distance(v1: Vector2, v2: Vector2)
```
#### Max
Get max values from two Vector2
```typescript
	Max(v1: Vector2, v2: Vector2)
```
#### Min
Get min values from two Vector2
```typescript
	Min(v1: Vector2, v2: Vector2)
```
#### Lerp
Get a clamped lerp Vector2 from v1 to v2, with t time
```typescript
	Lerp(v1: Vector2, v2: Vector2, t: float)
```
#### LerpUnclamped
Get a unclamped lerp Vector2 from v1 to v2, with t time
```typescript
	LerpUnclamped(v1: Vector2, v2: Vector2, t: float)
```

window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "index",
          "js",
          "oper",
          "polygon",
          "readm",
          "slydock/poli"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "Line.html": [
          "class",
          "line"
        ],
        "Line.html#length": [
          "length",
          "line#length",
          "lt;readonly&gt",
          "member",
          "number"
        ],
        "Line.html#intersect": [
          "fals",
          "function",
          "intersect",
          "line",
          "line#intersect",
          "on",
          "return"
        ],
        "Line.html#.Intersect": [
          "fals",
          "function",
          "intersect",
          "l1",
          "l2",
          "line",
          "line.intersect",
          "lt;static&gt",
          "return",
          "two"
        ],
        "Circle.html": [
          "circl",
          "class"
        ],
        "Circle.html#sides": [
          "circl",
          "circle#sid",
          "count",
          "member",
          "number",
          "side"
        ],
        "Circle.html#center": [
          "center",
          "circl",
          "circle#cent",
          "member",
          "vector2"
        ],
        "Circle.html#radius": [
          "circl",
          "circle#radiu",
          "member",
          "number",
          "radiu"
        ],
        "Circle.html#region": [
          "array",
          "circle#region",
          "doubl",
          "geojson",
          "level",
          "member",
          "plugin",
          "polyboolj",
          "region",
          "return",
          "us",
          "x",
          "y"
        ],
        "Circle.html#points": [
          "circle#point",
          "member",
          "point",
          "polygon"
        ],
        "Circle.html#lines": [
          "circle#lin",
          "line",
          "member",
          "polygon"
        ],
        "Circle.html#area": [
          "area",
          "circle#area",
          "member",
          "polygon"
        ],
        "Circle.html#pointIsInside": [
          "boolean",
          "check",
          "circl",
          "circle#pointisinsid",
          "function",
          "insid",
          "point",
          "pointisinsid",
          "wrapper"
        ],
        "Circle.html#pointIsInsidePolygon": [
          "boolean",
          "check",
          "circle#pointisinsidepolygon",
          "function",
          "insid",
          "point",
          "pointisinsidepolygon",
          "polygon"
        ],
        "Circle.html#pointIsInsideCircle": [
          "boolean",
          "check",
          "circl",
          "circle#pointisinsidecircl",
          "function",
          "insid",
          "point",
          "pointisinsidecircl"
        ],
        "Circle.html#setChildren": [
          "children",
          "circle#setchildren",
          "function",
          "hole",
          "polygon",
          "set",
          "setchildren"
        ],
        "Circle.html#addChild": [
          "ad",
          "addchild",
          "child",
          "circle#addchild",
          "function",
          "hole",
          "polygon"
        ],
        "Circle.html#setVertexes": [
          "circle#setvertex",
          "function",
          "polygon",
          "set",
          "setvertex",
          "vertic"
        ],
        "Circle.html#addVertex": [
          "add",
          "addvertex",
          "circle#addvertex",
          "end",
          "function",
          "new",
          "polygon",
          "vertic"
        ],
        "Circle.html#colliding": [
          "boolean",
          "circle#collid",
          "collid",
          "current",
          "function",
          "given",
          "polygon"
        ],
        "Circle.html#intersect": [
          "array.&lt;polygon&gt",
          "boolean",
          "circle#intersect",
          "function",
          "given",
          "intersect",
          "oper",
          "polygon"
        ],
        "Circle.html#difference": [
          "array.&lt;polygon&gt",
          "boolean",
          "circle#differ",
          "differ",
          "function",
          "given",
          "oper",
          "polygon"
        ],
        "Circle.html#union": [
          "array.&lt;polygon&gt",
          "boolean",
          "circle#union",
          "function",
          "given",
          "oper",
          "polygon",
          "union"
        ],
        "Circle.html#xor": [
          "array.&lt;polygon&gt",
          "boolean",
          "circle#xor",
          "function",
          "given",
          "oper",
          "polygon",
          "xor"
        ],
        "Rect.html": [
          "class",
          "rect"
        ],
        "Rect.html#position": [
          "member",
          "posit",
          "rect",
          "rect#posit",
          "start",
          "vector2"
        ],
        "Rect.html#size": [
          "member",
          "rect",
          "rect#siz",
          "size",
          "vector2"
        ],
        "Rect.html#region": [
          "array",
          "doubl",
          "geojson",
          "level",
          "member",
          "plugin",
          "polyboolj",
          "rect#region",
          "region",
          "return",
          "us",
          "x",
          "y"
        ],
        "Rect.html#points": [
          "member",
          "point",
          "polygon",
          "rect#point"
        ],
        "Rect.html#lines": [
          "line",
          "member",
          "polygon",
          "rect#lin"
        ],
        "Rect.html#area": [
          "area",
          "member",
          "polygon",
          "rect#area"
        ],
        "Rect.html#pointIsInside": [
          "boolean",
          "check",
          "function",
          "insid",
          "point",
          "pointisinsid",
          "rect",
          "rect#pointisinsid",
          "wrapper"
        ],
        "Rect.html#pointIsInsideRect": [
          "boolean",
          "check",
          "function",
          "insid",
          "point",
          "pointisinsiderect",
          "rect",
          "rect#pointisinsiderect"
        ],
        "Rect.html#pointIsInsidePolygon": [
          "boolean",
          "check",
          "function",
          "insid",
          "point",
          "pointisinsidepolygon",
          "polygon",
          "rect#pointisinsidepolygon"
        ],
        "Rect.html#setChildren": [
          "children",
          "function",
          "hole",
          "polygon",
          "rect#setchildren",
          "set",
          "setchildren"
        ],
        "Rect.html#addChild": [
          "ad",
          "addchild",
          "child",
          "function",
          "hole",
          "polygon",
          "rect#addchild"
        ],
        "Rect.html#setVertexes": [
          "function",
          "polygon",
          "rect#setvertex",
          "set",
          "setvertex",
          "vertic"
        ],
        "Rect.html#addVertex": [
          "add",
          "addvertex",
          "end",
          "function",
          "new",
          "polygon",
          "rect#addvertex",
          "vertic"
        ],
        "Rect.html#.Box": [
          "around",
          "box",
          "function",
          "lt;static&gt",
          "p",
          "polygon",
          "rect",
          "rect.box"
        ],
        "Rect.html#colliding": [
          "boolean",
          "collid",
          "current",
          "function",
          "given",
          "polygon",
          "rect#collid"
        ],
        "Rect.html#intersect": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "given",
          "intersect",
          "oper",
          "polygon",
          "rect#intersect"
        ],
        "Rect.html#difference": [
          "array.&lt;polygon&gt",
          "boolean",
          "differ",
          "function",
          "given",
          "oper",
          "polygon",
          "rect#differ"
        ],
        "Rect.html#union": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "given",
          "oper",
          "polygon",
          "rect#union",
          "union"
        ],
        "Rect.html#xor": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "given",
          "oper",
          "polygon",
          "rect#xor",
          "xor"
        ],
        "Polygon.html": [
          "class",
          "polygon"
        ],
        "Polygon.html#region": [
          "array",
          "doubl",
          "geojson",
          "level",
          "member",
          "plugin",
          "polyboolj",
          "polygon#region",
          "region",
          "return",
          "us",
          "x",
          "y"
        ],
        "Polygon.html#points": [
          "member",
          "point",
          "polygon",
          "polygon#point"
        ],
        "Polygon.html#lines": [
          "line",
          "member",
          "polygon",
          "polygon#lin"
        ],
        "Polygon.html#area": [
          "area",
          "member",
          "polygon",
          "polygon#area"
        ],
        "Polygon.html#pointIsInside": [
          "boolean",
          "check",
          "function",
          "insid",
          "point",
          "pointisinsid",
          "polygon",
          "polygon#pointisinsid",
          "wrapper"
        ],
        "Polygon.html#pointIsInsidePolygon": [
          "boolean",
          "check",
          "function",
          "insid",
          "point",
          "pointisinsidepolygon",
          "polygon",
          "polygon#pointisinsidepolygon"
        ],
        "Polygon.html#setChildren": [
          "children",
          "function",
          "hole",
          "polygon",
          "polygon#setchildren",
          "set",
          "setchildren"
        ],
        "Polygon.html#addChild": [
          "ad",
          "addchild",
          "child",
          "function",
          "hole",
          "polygon",
          "polygon#addchild"
        ],
        "Polygon.html#setVertexes": [
          "function",
          "polygon",
          "polygon#setvertex",
          "set",
          "setvertex",
          "vertic"
        ],
        "Polygon.html#addVertex": [
          "add",
          "addvertex",
          "end",
          "function",
          "new",
          "polygon",
          "polygon#addvertex",
          "vertic"
        ],
        "Polygon.html#colliding": [
          "boolean",
          "collid",
          "current",
          "function",
          "given",
          "polygon",
          "polygon#collid"
        ],
        "Polygon.html#intersect": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "given",
          "intersect",
          "oper",
          "polygon",
          "polygon#intersect"
        ],
        "Polygon.html#difference": [
          "array.&lt;polygon&gt",
          "boolean",
          "differ",
          "function",
          "given",
          "oper",
          "polygon",
          "polygon#differ"
        ],
        "Polygon.html#union": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "given",
          "oper",
          "polygon",
          "polygon#union",
          "union"
        ],
        "Polygon.html#xor": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "given",
          "oper",
          "polygon",
          "polygon#xor",
          "xor"
        ],
        "Polygon.html#.Colliding": [
          "boolean",
          "collid",
          "function",
          "lt;static&gt",
          "p1",
          "p2",
          "polygon",
          "polygon.collid"
        ],
        "Polygon.html#.FromRegion": [
          "convert",
          "fromregion",
          "function",
          "lt;static&gt",
          "polygon",
          "polygon.fromregion",
          "region"
        ],
        "Polygon.html#.Intersect": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "intersect",
          "lt;static&gt",
          "oper",
          "p1",
          "p2",
          "polygon",
          "polygon.intersect"
        ],
        "Polygon.html#.Union": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "lt;static&gt",
          "oper",
          "p1",
          "p2",
          "polygon",
          "polygon.union",
          "union"
        ],
        "Polygon.html#.Difference": [
          "array.&lt;polygon&gt",
          "boolean",
          "differ",
          "function",
          "lt;static&gt",
          "oper",
          "p1",
          "p2",
          "polygon",
          "polygon.differ"
        ],
        "Polygon.html#.Xor": [
          "array.&lt;polygon&gt",
          "boolean",
          "function",
          "lt;static&gt",
          "oper",
          "p1",
          "p2",
          "polygon",
          "polygon.xor",
          "xor"
        ],
        "Vector2.html": [
          "class",
          "vector2"
        ],
        "Vector2.html#approximated": [
          "approxim",
          "duplic",
          "lt;readonly&gt",
          "member",
          "remov",
          "us",
          "valu",
          "vector2",
          "vector2#approxim"
        ],
        "Vector2.html#normalized": [
          "lt;readonly&gt",
          "member",
          "normal",
          "vector2",
          "vector2#norm"
        ],
        "Vector2.html#norm": [
          "alia",
          "lt;readonly&gt",
          "member",
          "norm",
          "normal",
          "vector2",
          "vector2#norm"
        ],
        "Vector2.html#magnitude": [
          "lt;readonly&gt",
          "magnitud",
          "member",
          "number",
          "vector2",
          "vector2#magnitud"
        ],
        "Vector2.html#clone": [
          "clone",
          "lt;readonly&gt",
          "member",
          "vector2",
          "vector2#clon"
        ],
        "Vector2.html#equalsX": [
          "boolean",
          "equal",
          "equalsx",
          "function",
          "test",
          "v",
          "valu",
          "vector2",
          "vector2#equalsx",
          "x"
        ],
        "Vector2.html#equalsY": [
          "boolean",
          "equal",
          "equalsi",
          "function",
          "test",
          "v",
          "valu",
          "vector2",
          "vector2#equalsi",
          "y"
        ],
        "Vector2.html#isInside": [
          "boolean",
          "current",
          "function",
          "insid",
          "isinsid",
          "polygon",
          "test",
          "vector2",
          "vector2#isinsid"
        ],
        "Vector2.html#approximate": [
          "approxim",
          "function",
          "vector2#approxim"
        ],
        "Vector2.html#toString": [
          "function",
          "get",
          "json",
          "string",
          "tostr",
          "vector2",
          "vector2#tostr",
          "version"
        ],
        "Vector2.html#.Distance": [
          "between",
          "distanc",
          "function",
          "get",
          "lt;static&gt",
          "number",
          "two",
          "v1",
          "v2",
          "vector2",
          "vector2.dist"
        ],
        "Vector2.html#.Max": [
          "function",
          "get",
          "lt;static&gt",
          "max",
          "two",
          "v1",
          "v2",
          "valu",
          "vector2",
          "vector2.max"
        ],
        "Vector2.html#.Min": [
          "function",
          "get",
          "lt;static&gt",
          "min",
          "two",
          "v1",
          "v2",
          "valu",
          "vector2",
          "vector2.min"
        ],
        "Vector2.html#.Lerp": [
          "function",
          "get",
          "lerp",
          "lt;static&gt",
          "t",
          "time",
          "v1",
          "v2",
          "vector2",
          "vector2.lerp"
        ],
        "Vector2.html#.LerpUnclamped": [
          "function",
          "get",
          "lerp",
          "lerpunclamp",
          "lt;static&gt",
          "t",
          "time",
          "unclamp",
          "v1",
          "v2",
          "vector2",
          "vector2.lerpunclamp",
          "version"
        ],
        "Vector2.html#.IsVector2Like": [
          "correspond",
          "element",
          "fals",
          "function",
          "isvector2lik",
          "lt;static&gt",
          "pass",
          "return",
          "subject",
          "test",
          "vector2",
          "vector2.isvector2lik",
          "vector2|fals"
        ],
        "Vector2.html#.Zero": [
          "function",
          "lt;static&gt",
          "vector2",
          "vector2.zero",
          "zero"
        ],
        "Vector2.html#.Top": [
          "function",
          "lt;static&gt",
          "top",
          "vector2",
          "vector2.top"
        ],
        "Vector2.html#.Left": [
          "function",
          "left",
          "lt;static&gt",
          "vector2",
          "vector2.left"
        ],
        "Vector2.html#.Bottom": [
          "bottom",
          "function",
          "lt;static&gt",
          "vector2",
          "vector2.bottom"
        ],
        "Vector2.html#.Right": [
          "function",
          "lt;static&gt",
          "right",
          "vector2",
          "vector2.right"
        ],
        "Vector2.html#floor": [
          "floor",
          "function",
          "v",
          "vector2",
          "vector2#floor"
        ],
        "Vector2.html#floorX": [
          "floor",
          "floorx",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#floorx",
          "x"
        ],
        "Vector2.html#floorY": [
          "floor",
          "floori",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#floori",
          "y"
        ],
        "Vector2.html#ceil": [
          "ceil",
          "function",
          "v",
          "vector2",
          "vector2#ceil"
        ],
        "Vector2.html#ceilX": [
          "ceil",
          "ceilx",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#ceilx",
          "x"
        ],
        "Vector2.html#ceilY": [
          "ceil",
          "ceili",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#ceili",
          "y"
        ],
        "Vector2.html#round": [
          "function",
          "round",
          "v",
          "vector2",
          "vector2#round"
        ],
        "Vector2.html#roundX": [
          "function",
          "round",
          "roundx",
          "v",
          "valu",
          "vector2",
          "vector2#roundx",
          "x"
        ],
        "Vector2.html#roundY": [
          "function",
          "round",
          "roundi",
          "v",
          "valu",
          "vector2",
          "vector2#roundi",
          "y"
        ],
        "Vector2.html#set": [
          "function",
          "p1",
          "p2",
          "set",
          "valu",
          "vector2",
          "vector2#set"
        ],
        "Vector2.html#setX": [
          "function",
          "set",
          "setx",
          "v",
          "valu",
          "vector2",
          "vector2#setx",
          "x"
        ],
        "Vector2.html#setY": [
          "function",
          "set",
          "seti",
          "v",
          "valu",
          "vector2",
          "vector2#seti",
          "y"
        ],
        "Vector2.html#add": [
          "ad",
          "add",
          "function",
          "p1",
          "p2",
          "valu",
          "vector2",
          "vector2#add"
        ],
        "Vector2.html#addX": [
          "ad",
          "addx",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#addx",
          "x"
        ],
        "Vector2.html#addY": [
          "ad",
          "addi",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#addi",
          "y"
        ],
        "Vector2.html#substract": [
          "function",
          "p1",
          "p2",
          "substract",
          "valu",
          "vector2",
          "vector2#substract"
        ],
        "Vector2.html#substractX": [
          "function",
          "substract",
          "substractx",
          "v",
          "valu",
          "vector2",
          "vector2#substractx",
          "x"
        ],
        "Vector2.html#substractY": [
          "function",
          "substract",
          "substracti",
          "v",
          "valu",
          "vector2",
          "vector2#substracti",
          "x"
        ],
        "Vector2.html#multiply": [
          "function",
          "multipli",
          "p1",
          "p2",
          "valu",
          "vector2",
          "vector2#multipli"
        ],
        "Vector2.html#multiplyX": [
          "function",
          "multipli",
          "multiplyx",
          "v",
          "valu",
          "vector2",
          "vector2#multiplyx",
          "x"
        ],
        "Vector2.html#multiplyY": [
          "function",
          "multipli",
          "multiplyi",
          "v",
          "valu",
          "vector2",
          "vector2#multiplyi",
          "y"
        ],
        "Vector2.html#divide": [
          "divid",
          "function",
          "p1",
          "p2",
          "valu",
          "vector2",
          "vector2#divid"
        ],
        "Vector2.html#divideX": [
          "dividex",
          "divind",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#dividex",
          "x"
        ],
        "Vector2.html#divideY": [
          "dividey",
          "divind",
          "function",
          "v",
          "valu",
          "vector2",
          "vector2#dividey",
          "x"
        ],
        "Vector2.html#invert": [
          "function",
          "invert",
          "vector2",
          "vector2#invert"
        ],
        "Vector2.html#invertX": [
          "function",
          "invert",
          "invertx",
          "valu",
          "vector2",
          "vector2#invertx",
          "x"
        ],
        "Vector2.html#invertY": [
          "function",
          "invert",
          "inverti",
          "valu",
          "vector2",
          "vector2#inverti",
          "y"
        ],
        "Vector2.html#rotate": [
          "angl",
          "arround",
          "function",
          "rotat",
          "vector2",
          "vector2#rot",
          "zero"
        ],
        "Vector2.html#equals": [
          "boolean",
          "equal",
          "function",
          "p1",
          "p2",
          "test",
          "vector2",
          "vector2#equ"
        ]
      },
      "length": 120
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Line.html#intersect": {
                              "ref": "Line.html#intersect",
                              "tf": 714.2857142857143
                            },
                            "Line.html#.Intersect": {
                              "ref": "Line.html#.Intersect",
                              "tf": 689.2857142857143
                            },
                            "Circle.html#intersect": {
                              "ref": "Circle.html#intersect",
                              "tf": 691.6666666666667
                            },
                            "Rect.html#intersect": {
                              "ref": "Rect.html#intersect",
                              "tf": 691.6666666666667
                            },
                            "Polygon.html#intersect": {
                              "ref": "Polygon.html#intersect",
                              "tf": 691.6666666666667
                            },
                            "Polygon.html#.Intersect": {
                              "ref": "Polygon.html#.Intersect",
                              "tf": 677.1428571428571
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "Circle.html#pointIsInside": {
                      "ref": "Circle.html#pointIsInside",
                      "tf": 10
                    },
                    "Circle.html#pointIsInsidePolygon": {
                      "ref": "Circle.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
                    "Circle.html#pointIsInsideCircle": {
                      "ref": "Circle.html#pointIsInsideCircle",
                      "tf": 12.5
                    },
                    "Rect.html#pointIsInside": {
                      "ref": "Rect.html#pointIsInside",
                      "tf": 10
                    },
                    "Rect.html#pointIsInsideRect": {
                      "ref": "Rect.html#pointIsInsideRect",
                      "tf": 12.5
                    },
                    "Rect.html#pointIsInsidePolygon": {
                      "ref": "Rect.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
                    "Polygon.html#pointIsInside": {
                      "ref": "Polygon.html#pointIsInside",
                      "tf": 10
                    },
                    "Polygon.html#pointIsInsidePolygon": {
                      "ref": "Polygon.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
                    "Vector2.html#isInside": {
                      "ref": "Vector2.html#isInside",
                      "tf": 10
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Vector2.html#invert": {
                        "ref": "Vector2.html#invert",
                        "tf": 725
                      },
                      "Vector2.html#invertX": {
                        "ref": "Vector2.html#invertX",
                        "tf": 12.5
                      },
                      "Vector2.html#invertY": {
                        "ref": "Vector2.html#invertY",
                        "tf": 12.5
                      }
                    },
                    "x": {
                      "docs": {
                        "Vector2.html#invertX": {
                          "ref": "Vector2.html#invertX",
                          "tf": 700
                        }
                      }
                    },
                    "i": {
                      "docs": {
                        "Vector2.html#invertY": {
                          "ref": "Vector2.html#invertY",
                          "tf": 700
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "i": {
              "docs": {},
              "n": {
                "docs": {},
                "s": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Vector2.html#isInside": {
                          "ref": "Vector2.html#isInside",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "2": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "k": {
                                "docs": {
                                  "Vector2.html#.IsVector2Like": {
                                    "ref": "Vector2.html#.IsVector2Like",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          }
                        },
                        "docs": {}
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {
              "index.html": {
                "ref": "index.html",
                "tf": 300
              }
            },
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "Vector2.html#toString": {
                    "ref": "Vector2.html#toString",
                    "tf": 10
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 35
                  },
                  "Circle.html#intersect": {
                    "ref": "Circle.html#intersect",
                    "tf": 8.333333333333332
                  },
                  "Circle.html#difference": {
                    "ref": "Circle.html#difference",
                    "tf": 8.333333333333332
                  },
                  "Circle.html#union": {
                    "ref": "Circle.html#union",
                    "tf": 8.333333333333332
                  },
                  "Circle.html#xor": {
                    "ref": "Circle.html#xor",
                    "tf": 8.333333333333332
                  },
                  "Rect.html#intersect": {
                    "ref": "Rect.html#intersect",
                    "tf": 8.333333333333332
                  },
                  "Rect.html#difference": {
                    "ref": "Rect.html#difference",
                    "tf": 8.333333333333332
                  },
                  "Rect.html#union": {
                    "ref": "Rect.html#union",
                    "tf": 8.333333333333332
                  },
                  "Rect.html#xor": {
                    "ref": "Rect.html#xor",
                    "tf": 8.333333333333332
                  },
                  "Polygon.html#intersect": {
                    "ref": "Polygon.html#intersect",
                    "tf": 8.333333333333332
                  },
                  "Polygon.html#difference": {
                    "ref": "Polygon.html#difference",
                    "tf": 8.333333333333332
                  },
                  "Polygon.html#union": {
                    "ref": "Polygon.html#union",
                    "tf": 8.333333333333332
                  },
                  "Polygon.html#xor": {
                    "ref": "Polygon.html#xor",
                    "tf": 8.333333333333332
                  },
                  "Polygon.html#.Intersect": {
                    "ref": "Polygon.html#.Intersect",
                    "tf": 7.142857142857142
                  },
                  "Polygon.html#.Union": {
                    "ref": "Polygon.html#.Union",
                    "tf": 7.142857142857142
                  },
                  "Polygon.html#.Difference": {
                    "ref": "Polygon.html#.Difference",
                    "tf": 7.142857142857142
                  },
                  "Polygon.html#.Xor": {
                    "ref": "Polygon.html#.Xor",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "Line.html#intersect": {
                "ref": "Line.html#intersect",
                "tf": 7.142857142857142
              }
            }
          }
        },
        "p": {
          "1": {
            "docs": {
              "Polygon.html#.Colliding": {
                "ref": "Polygon.html#.Colliding",
                "tf": 30
              },
              "Polygon.html#.Intersect": {
                "ref": "Polygon.html#.Intersect",
                "tf": 7.142857142857142
              },
              "Polygon.html#.Union": {
                "ref": "Polygon.html#.Union",
                "tf": 7.142857142857142
              },
              "Polygon.html#.Difference": {
                "ref": "Polygon.html#.Difference",
                "tf": 7.142857142857142
              },
              "Polygon.html#.Xor": {
                "ref": "Polygon.html#.Xor",
                "tf": 7.142857142857142
              },
              "Vector2.html#set": {
                "ref": "Vector2.html#set",
                "tf": 25
              },
              "Vector2.html#add": {
                "ref": "Vector2.html#add",
                "tf": 25
              },
              "Vector2.html#substract": {
                "ref": "Vector2.html#substract",
                "tf": 25
              },
              "Vector2.html#multiply": {
                "ref": "Vector2.html#multiply",
                "tf": 25
              },
              "Vector2.html#divide": {
                "ref": "Vector2.html#divide",
                "tf": 25
              },
              "Vector2.html#equals": {
                "ref": "Vector2.html#equals",
                "tf": 25
              }
            }
          },
          "2": {
            "docs": {
              "Polygon.html#.Colliding": {
                "ref": "Polygon.html#.Colliding",
                "tf": 30
              },
              "Polygon.html#.Intersect": {
                "ref": "Polygon.html#.Intersect",
                "tf": 7.142857142857142
              },
              "Polygon.html#.Union": {
                "ref": "Polygon.html#.Union",
                "tf": 7.142857142857142
              },
              "Polygon.html#.Difference": {
                "ref": "Polygon.html#.Difference",
                "tf": 7.142857142857142
              },
              "Polygon.html#.Xor": {
                "ref": "Polygon.html#.Xor",
                "tf": 7.142857142857142
              },
              "Vector2.html#set": {
                "ref": "Vector2.html#set",
                "tf": 25
              },
              "Vector2.html#add": {
                "ref": "Vector2.html#add",
                "tf": 25
              },
              "Vector2.html#substract": {
                "ref": "Vector2.html#substract",
                "tf": 25
              },
              "Vector2.html#multiply": {
                "ref": "Vector2.html#multiply",
                "tf": 25
              },
              "Vector2.html#divide": {
                "ref": "Vector2.html#divide",
                "tf": 25
              },
              "Vector2.html#equals": {
                "ref": "Vector2.html#equals",
                "tf": 25
              }
            }
          },
          "docs": {
            "Rect.html#.Box": {
              "ref": "Rect.html#.Box",
              "tf": 25
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "y": {
                "docs": {},
                "g": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 35
                        },
                        "Circle.html#points": {
                          "ref": "Circle.html#points",
                          "tf": 25
                        },
                        "Circle.html#lines": {
                          "ref": "Circle.html#lines",
                          "tf": 25
                        },
                        "Circle.html#area": {
                          "ref": "Circle.html#area",
                          "tf": 25
                        },
                        "Circle.html#pointIsInsidePolygon": {
                          "ref": "Circle.html#pointIsInsidePolygon",
                          "tf": 12.5
                        },
                        "Circle.html#setChildren": {
                          "ref": "Circle.html#setChildren",
                          "tf": 79.16666666666666
                        },
                        "Circle.html#addChild": {
                          "ref": "Circle.html#addChild",
                          "tf": 79.16666666666666
                        },
                        "Circle.html#setVertexes": {
                          "ref": "Circle.html#setVertexes",
                          "tf": 49.99999999999999
                        },
                        "Circle.html#addVertex": {
                          "ref": "Circle.html#addVertex",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#colliding": {
                          "ref": "Circle.html#colliding",
                          "tf": 53.33333333333333
                        },
                        "Circle.html#intersect": {
                          "ref": "Circle.html#intersect",
                          "tf": 49.99999999999999
                        },
                        "Circle.html#difference": {
                          "ref": "Circle.html#difference",
                          "tf": 49.99999999999999
                        },
                        "Circle.html#union": {
                          "ref": "Circle.html#union",
                          "tf": 49.99999999999999
                        },
                        "Circle.html#xor": {
                          "ref": "Circle.html#xor",
                          "tf": 49.99999999999999
                        },
                        "Rect.html#points": {
                          "ref": "Rect.html#points",
                          "tf": 25
                        },
                        "Rect.html#lines": {
                          "ref": "Rect.html#lines",
                          "tf": 25
                        },
                        "Rect.html#area": {
                          "ref": "Rect.html#area",
                          "tf": 25
                        },
                        "Rect.html#pointIsInsidePolygon": {
                          "ref": "Rect.html#pointIsInsidePolygon",
                          "tf": 12.5
                        },
                        "Rect.html#setChildren": {
                          "ref": "Rect.html#setChildren",
                          "tf": 79.16666666666666
                        },
                        "Rect.html#addChild": {
                          "ref": "Rect.html#addChild",
                          "tf": 79.16666666666666
                        },
                        "Rect.html#setVertexes": {
                          "ref": "Rect.html#setVertexes",
                          "tf": 49.99999999999999
                        },
                        "Rect.html#addVertex": {
                          "ref": "Rect.html#addVertex",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#.Box": {
                          "ref": "Rect.html#.Box",
                          "tf": 16.666666666666664
                        },
                        "Rect.html#colliding": {
                          "ref": "Rect.html#colliding",
                          "tf": 53.33333333333333
                        },
                        "Rect.html#intersect": {
                          "ref": "Rect.html#intersect",
                          "tf": 49.99999999999999
                        },
                        "Rect.html#difference": {
                          "ref": "Rect.html#difference",
                          "tf": 49.99999999999999
                        },
                        "Rect.html#union": {
                          "ref": "Rect.html#union",
                          "tf": 49.99999999999999
                        },
                        "Rect.html#xor": {
                          "ref": "Rect.html#xor",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html": {
                          "ref": "Polygon.html",
                          "tf": 1925
                        },
                        "Polygon.html#points": {
                          "ref": "Polygon.html#points",
                          "tf": 25
                        },
                        "Polygon.html#lines": {
                          "ref": "Polygon.html#lines",
                          "tf": 25
                        },
                        "Polygon.html#area": {
                          "ref": "Polygon.html#area",
                          "tf": 25
                        },
                        "Polygon.html#pointIsInside": {
                          "ref": "Polygon.html#pointIsInside",
                          "tf": 10
                        },
                        "Polygon.html#pointIsInsidePolygon": {
                          "ref": "Polygon.html#pointIsInsidePolygon",
                          "tf": 12.5
                        },
                        "Polygon.html#setChildren": {
                          "ref": "Polygon.html#setChildren",
                          "tf": 79.16666666666666
                        },
                        "Polygon.html#addChild": {
                          "ref": "Polygon.html#addChild",
                          "tf": 79.16666666666666
                        },
                        "Polygon.html#setVertexes": {
                          "ref": "Polygon.html#setVertexes",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html#addVertex": {
                          "ref": "Polygon.html#addVertex",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#colliding": {
                          "ref": "Polygon.html#colliding",
                          "tf": 53.33333333333333
                        },
                        "Polygon.html#intersect": {
                          "ref": "Polygon.html#intersect",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html#difference": {
                          "ref": "Polygon.html#difference",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html#union": {
                          "ref": "Polygon.html#union",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html#xor": {
                          "ref": "Polygon.html#xor",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html#.Colliding": {
                          "ref": "Polygon.html#.Colliding",
                          "tf": 20
                        },
                        "Polygon.html#.FromRegion": {
                          "ref": "Polygon.html#.FromRegion",
                          "tf": 41.666666666666664
                        },
                        "Polygon.html#.Intersect": {
                          "ref": "Polygon.html#.Intersect",
                          "tf": 54.285714285714285
                        },
                        "Polygon.html#.Union": {
                          "ref": "Polygon.html#.Union",
                          "tf": 54.285714285714285
                        },
                        "Polygon.html#.Difference": {
                          "ref": "Polygon.html#.Difference",
                          "tf": 54.285714285714285
                        },
                        "Polygon.html#.Xor": {
                          "ref": "Polygon.html#.Xor",
                          "tf": 54.285714285714285
                        },
                        "Vector2.html#isInside": {
                          "ref": "Vector2.html#isInside",
                          "tf": 43.33333333333333
                        }
                      },
                      "#": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {
                                      "Polygon.html#region": {
                                        "ref": "Polygon.html#region",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "Polygon.html#points": {
                                      "ref": "Polygon.html#points",
                                      "tf": 1150
                                    }
                                  },
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "d": {
                                                "docs": {
                                                  "Polygon.html#pointIsInside": {
                                                    "ref": "Polygon.html#pointIsInside",
                                                    "tf": 1150
                                                  }
                                                },
                                                "e": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {
                                                                  "Polygon.html#pointIsInsidePolygon": {
                                                                    "ref": "Polygon.html#pointIsInsidePolygon",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {
                                "Polygon.html#lines": {
                                  "ref": "Polygon.html#lines",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {
                                  "Polygon.html#area": {
                                    "ref": "Polygon.html#area",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          },
                          "d": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "d": {
                                        "docs": {
                                          "Polygon.html#addChild": {
                                            "ref": "Polygon.html#addChild",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "v": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "x": {
                                          "docs": {
                                            "Polygon.html#addVertex": {
                                              "ref": "Polygon.html#addVertex",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "Polygon.html#setChildren": {
                                                  "ref": "Polygon.html#setChildren",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "v": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "x": {
                                          "docs": {
                                            "Polygon.html#setVertexes": {
                                              "ref": "Polygon.html#setVertexes",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Polygon.html#colliding": {
                                        "ref": "Polygon.html#colliding",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "i": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Polygon.html#intersect": {
                                              "ref": "Polygon.html#intersect",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "Polygon.html#difference": {
                                        "ref": "Polygon.html#difference",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "u": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {
                                    "Polygon.html#union": {
                                      "ref": "Polygon.html#union",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "x": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Polygon.html#xor": {
                                  "ref": "Polygon.html#xor",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      },
                      ".": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Polygon.html#.Colliding": {
                                        "ref": "Polygon.html#.Colliding",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "f": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "Polygon.html#.FromRegion": {
                                                "ref": "Polygon.html#.FromRegion",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "i": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Polygon.html#.Intersect": {
                                              "ref": "Polygon.html#.Intersect",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "u": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {
                                    "Polygon.html#.Union": {
                                      "ref": "Polygon.html#.Union",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "Polygon.html#.Difference": {
                                        "ref": "Polygon.html#.Difference",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "x": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Polygon.html#.Xor": {
                                  "ref": "Polygon.html#.Xor",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "j": {
                          "docs": {
                            "Circle.html#region": {
                              "ref": "Circle.html#region",
                              "tf": 3.8461538461538463
                            },
                            "Rect.html#region": {
                              "ref": "Rect.html#region",
                              "tf": 3.8461538461538463
                            },
                            "Polygon.html#region": {
                              "ref": "Polygon.html#region",
                              "tf": 3.8461538461538463
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Circle.html#points": {
                      "ref": "Circle.html#points",
                      "tf": 775
                    },
                    "Circle.html#pointIsInside": {
                      "ref": "Circle.html#pointIsInside",
                      "tf": 43.33333333333333
                    },
                    "Circle.html#pointIsInsidePolygon": {
                      "ref": "Circle.html#pointIsInsidePolygon",
                      "tf": 45.83333333333333
                    },
                    "Circle.html#pointIsInsideCircle": {
                      "ref": "Circle.html#pointIsInsideCircle",
                      "tf": 45.83333333333333
                    },
                    "Rect.html#points": {
                      "ref": "Rect.html#points",
                      "tf": 775
                    },
                    "Rect.html#pointIsInside": {
                      "ref": "Rect.html#pointIsInside",
                      "tf": 43.33333333333333
                    },
                    "Rect.html#pointIsInsideRect": {
                      "ref": "Rect.html#pointIsInsideRect",
                      "tf": 45.83333333333333
                    },
                    "Rect.html#pointIsInsidePolygon": {
                      "ref": "Rect.html#pointIsInsidePolygon",
                      "tf": 45.83333333333333
                    },
                    "Polygon.html#points": {
                      "ref": "Polygon.html#points",
                      "tf": 775
                    },
                    "Polygon.html#pointIsInside": {
                      "ref": "Polygon.html#pointIsInside",
                      "tf": 43.33333333333333
                    },
                    "Polygon.html#pointIsInsidePolygon": {
                      "ref": "Polygon.html#pointIsInsidePolygon",
                      "tf": 45.83333333333333
                    }
                  },
                  "i": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Circle.html#pointIsInside": {
                                    "ref": "Circle.html#pointIsInside",
                                    "tf": 683.3333333333334
                                  },
                                  "Rect.html#pointIsInside": {
                                    "ref": "Rect.html#pointIsInside",
                                    "tf": 683.3333333333334
                                  },
                                  "Polygon.html#pointIsInside": {
                                    "ref": "Polygon.html#pointIsInside",
                                    "tf": 683.3333333333334
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {
                                                  "Circle.html#pointIsInsidePolygon": {
                                                    "ref": "Circle.html#pointIsInsidePolygon",
                                                    "tf": 683.3333333333334
                                                  },
                                                  "Rect.html#pointIsInsidePolygon": {
                                                    "ref": "Rect.html#pointIsInsidePolygon",
                                                    "tf": 683.3333333333334
                                                  },
                                                  "Polygon.html#pointIsInsidePolygon": {
                                                    "ref": "Polygon.html#pointIsInsidePolygon",
                                                    "tf": 683.3333333333334
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "c": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "l": {
                                            "docs": {
                                              "Circle.html#pointIsInsideCircle": {
                                                "ref": "Circle.html#pointIsInsideCircle",
                                                "tf": 683.3333333333334
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Rect.html#pointIsInsideRect": {
                                              "ref": "Rect.html#pointIsInsideRect",
                                              "tf": 683.3333333333334
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "Rect.html#position": {
                      "ref": "Rect.html#position",
                      "tf": 716.6666666666666
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "u": {
              "docs": {},
              "g": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "s": {
                "docs": {
                  "Vector2.html#.IsVector2Like": {
                    "ref": "Vector2.html#.IsVector2Like",
                    "tf": 6.25
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Line.html#intersect": {
                        "ref": "Line.html#intersect",
                        "tf": 7.142857142857142
                      },
                      "Line.html#.Intersect": {
                        "ref": "Line.html#.Intersect",
                        "tf": 7.142857142857142
                      },
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Vector2.html#.IsVector2Like": {
                        "ref": "Vector2.html#.IsVector2Like",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 753.8461538461538
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
                        "tf": 753.8461538461538
                      },
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 753.8461538461538
                      },
                      "Polygon.html#.FromRegion": {
                        "ref": "Polygon.html#.FromRegion",
                        "tf": 41.666666666666664
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "t": {
                "docs": {
                  "Rect.html": {
                    "ref": "Rect.html",
                    "tf": 1925
                  },
                  "Rect.html#position": {
                    "ref": "Rect.html#position",
                    "tf": 16.666666666666664
                  },
                  "Rect.html#size": {
                    "ref": "Rect.html#size",
                    "tf": 25
                  },
                  "Rect.html#pointIsInside": {
                    "ref": "Rect.html#pointIsInside",
                    "tf": 10
                  },
                  "Rect.html#pointIsInsideRect": {
                    "ref": "Rect.html#pointIsInsideRect",
                    "tf": 12.5
                  },
                  "Rect.html#.Box": {
                    "ref": "Rect.html#.Box",
                    "tf": 25
                  }
                },
                "#": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Rect.html#position": {
                                "ref": "Rect.html#position",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Rect.html#points": {
                                "ref": "Rect.html#points",
                                "tf": 1150
                              }
                            },
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "Rect.html#pointIsInside": {
                                              "ref": "Rect.html#pointIsInside",
                                              "tf": 1150
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Rect.html#pointIsInsideRect": {
                                                        "ref": "Rect.html#pointIsInsideRect",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "p": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "y": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {
                                                            "Rect.html#pointIsInsidePolygon": {
                                                              "ref": "Rect.html#pointIsInsidePolygon",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "s": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "z": {
                        "docs": {
                          "Rect.html#size": {
                            "ref": "Rect.html#size",
                            "tf": 1150
                          }
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "n": {
                                        "docs": {
                                          "Rect.html#setChildren": {
                                            "ref": "Rect.html#setChildren",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "v": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "x": {
                                    "docs": {
                                      "Rect.html#setVertexes": {
                                        "ref": "Rect.html#setVertexes",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {
                                "Rect.html#region": {
                                  "ref": "Rect.html#region",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "l": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Rect.html#lines": {
                            "ref": "Rect.html#lines",
                            "tf": 1150
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {
                            "Rect.html#area": {
                              "ref": "Rect.html#area",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    },
                    "d": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Rect.html#addChild": {
                                      "ref": "Rect.html#addChild",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "v": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "x": {
                                    "docs": {
                                      "Rect.html#addVertex": {
                                        "ref": "Rect.html#addVertex",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "d": {
                              "docs": {
                                "Rect.html#colliding": {
                                  "ref": "Rect.html#colliding",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Rect.html#intersect": {
                                        "ref": "Rect.html#intersect",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "f": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Rect.html#difference": {
                                  "ref": "Rect.html#difference",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "u": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "Rect.html#union": {
                                "ref": "Rect.html#union",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "x": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Rect.html#xor": {
                            "ref": "Rect.html#xor",
                            "tf": 1150
                          }
                        }
                      }
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "x": {
                        "docs": {
                          "Rect.html#.Box": {
                            "ref": "Rect.html#.Box",
                            "tf": 1150
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "Vector2.html#approximated": {
                      "ref": "Vector2.html#approximated",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "u": {
                  "docs": {
                    "Circle.html#radius": {
                      "ref": "Circle.html#radius",
                      "tf": 725
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "g": {
              "docs": {},
              "h": {
                "docs": {},
                "t": {
                  "docs": {
                    "Vector2.html#.Right": {
                      "ref": "Vector2.html#.Right",
                      "tf": 708.3333333333334
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "d": {
                  "docs": {
                    "Vector2.html#round": {
                      "ref": "Vector2.html#round",
                      "tf": 708.3333333333334
                    },
                    "Vector2.html#roundX": {
                      "ref": "Vector2.html#roundX",
                      "tf": 12.5
                    },
                    "Vector2.html#roundY": {
                      "ref": "Vector2.html#roundY",
                      "tf": 12.5
                    }
                  },
                  "x": {
                    "docs": {
                      "Vector2.html#roundX": {
                        "ref": "Vector2.html#roundX",
                        "tf": 683.3333333333334
                      }
                    }
                  },
                  "i": {
                    "docs": {
                      "Vector2.html#roundY": {
                        "ref": "Vector2.html#roundY",
                        "tf": 683.3333333333334
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Vector2.html#rotate": {
                      "ref": "Vector2.html#rotate",
                      "tf": 693.3333333333334
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "l": {
            "docs": {},
            "y": {
              "docs": {},
              "d": {
                "docs": {},
                "o": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "k": {
                      "docs": {},
                      "/": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "index.html": {
                                    "ref": "index.html",
                                    "tf": 300
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {
                  "Circle.html#sides": {
                    "ref": "Circle.html#sides",
                    "tf": 716.6666666666666
                  }
                }
              }
            },
            "z": {
              "docs": {},
              "e": {
                "docs": {
                  "Rect.html#size": {
                    "ref": "Rect.html#size",
                    "tf": 725
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Circle.html#setChildren": {
                  "ref": "Circle.html#setChildren",
                  "tf": 12.5
                },
                "Circle.html#setVertexes": {
                  "ref": "Circle.html#setVertexes",
                  "tf": 16.666666666666664
                },
                "Rect.html#setChildren": {
                  "ref": "Rect.html#setChildren",
                  "tf": 12.5
                },
                "Rect.html#setVertexes": {
                  "ref": "Rect.html#setVertexes",
                  "tf": 16.666666666666664
                },
                "Polygon.html#setChildren": {
                  "ref": "Polygon.html#setChildren",
                  "tf": 12.5
                },
                "Polygon.html#setVertexes": {
                  "ref": "Polygon.html#setVertexes",
                  "tf": 16.666666666666664
                },
                "Vector2.html#set": {
                  "ref": "Vector2.html#set",
                  "tf": 691.6666666666666
                },
                "Vector2.html#setX": {
                  "ref": "Vector2.html#setX",
                  "tf": 12.5
                },
                "Vector2.html#setY": {
                  "ref": "Vector2.html#setY",
                  "tf": 12.5
                }
              },
              "c": {
                "docs": {},
                "h": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {
                                "Circle.html#setChildren": {
                                  "ref": "Circle.html#setChildren",
                                  "tf": 683.3333333333334
                                },
                                "Rect.html#setChildren": {
                                  "ref": "Rect.html#setChildren",
                                  "tf": 683.3333333333334
                                },
                                "Polygon.html#setChildren": {
                                  "ref": "Polygon.html#setChildren",
                                  "tf": 683.3333333333334
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "x": {
                          "docs": {
                            "Circle.html#setVertexes": {
                              "ref": "Circle.html#setVertexes",
                              "tf": 683.3333333333334
                            },
                            "Rect.html#setVertexes": {
                              "ref": "Rect.html#setVertexes",
                              "tf": 683.3333333333334
                            },
                            "Polygon.html#setVertexes": {
                              "ref": "Polygon.html#setVertexes",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "x": {
                "docs": {
                  "Vector2.html#setX": {
                    "ref": "Vector2.html#setX",
                    "tf": 683.3333333333334
                  }
                }
              },
              "i": {
                "docs": {
                  "Vector2.html#setY": {
                    "ref": "Vector2.html#setY",
                    "tf": 683.3333333333334
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "Rect.html#position": {
                      "ref": "Rect.html#position",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Vector2.html#toString": {
                        "ref": "Vector2.html#toString",
                        "tf": 60
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "j": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Vector2.html#.IsVector2Like": {
                          "ref": "Vector2.html#.IsVector2Like",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Vector2.html#substract": {
                              "ref": "Vector2.html#substract",
                              "tf": 691.6666666666666
                            },
                            "Vector2.html#substractX": {
                              "ref": "Vector2.html#substractX",
                              "tf": 10
                            },
                            "Vector2.html#substractY": {
                              "ref": "Vector2.html#substractY",
                              "tf": 10
                            }
                          },
                          "x": {
                            "docs": {
                              "Vector2.html#substractX": {
                                "ref": "Vector2.html#substractX",
                                "tf": 683.3333333333334
                              }
                            }
                          },
                          "i": {
                            "docs": {
                              "Vector2.html#substractY": {
                                "ref": "Vector2.html#substractY",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "b": {
                "docs": {},
                "l": {
                  "docs": {
                    "Circle.html#region": {
                      "ref": "Circle.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Rect.html#region": {
                      "ref": "Rect.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Polygon.html#region": {
                      "ref": "Polygon.html#region",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "f": {
              "docs": {},
              "f": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Circle.html#difference": {
                        "ref": "Circle.html#difference",
                        "tf": 691.6666666666667
                      },
                      "Rect.html#difference": {
                        "ref": "Rect.html#difference",
                        "tf": 691.6666666666667
                      },
                      "Polygon.html#difference": {
                        "ref": "Polygon.html#difference",
                        "tf": 691.6666666666667
                      },
                      "Polygon.html#.Difference": {
                        "ref": "Polygon.html#.Difference",
                        "tf": 677.1428571428571
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "Vector2.html#.Distance": {
                          "ref": "Vector2.html#.Distance",
                          "tf": 680
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "Vector2.html#divide": {
                      "ref": "Vector2.html#divide",
                      "tf": 691.6666666666666
                    }
                  },
                  "e": {
                    "docs": {},
                    "x": {
                      "docs": {
                        "Vector2.html#divideX": {
                          "ref": "Vector2.html#divideX",
                          "tf": 683.3333333333334
                        }
                      }
                    },
                    "y": {
                      "docs": {
                        "Vector2.html#divideY": {
                          "ref": "Vector2.html#divideY",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                },
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Vector2.html#divideX": {
                        "ref": "Vector2.html#divideX",
                        "tf": 10
                      },
                      "Vector2.html#divideY": {
                        "ref": "Vector2.html#divideY",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Vector2.html#approximated": {
                        "ref": "Vector2.html#approximated",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "o": {
              "docs": {},
              "j": {
                "docs": {},
                "s": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Circle.html#region": {
                          "ref": "Circle.html#region",
                          "tf": 3.8461538461538463
                        },
                        "Rect.html#region": {
                          "ref": "Rect.html#region",
                          "tf": 3.8461538461538463
                        },
                        "Polygon.html#region": {
                          "ref": "Polygon.html#region",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {
                "Vector2.html#toString": {
                  "ref": "Vector2.html#toString",
                  "tf": 10
                },
                "Vector2.html#.Distance": {
                  "ref": "Vector2.html#.Distance",
                  "tf": 10
                },
                "Vector2.html#.Max": {
                  "ref": "Vector2.html#.Max",
                  "tf": 10
                },
                "Vector2.html#.Min": {
                  "ref": "Vector2.html#.Min",
                  "tf": 10
                },
                "Vector2.html#.Lerp": {
                  "ref": "Vector2.html#.Lerp",
                  "tf": 7.142857142857142
                },
                "Vector2.html#.LerpUnclamped": {
                  "ref": "Vector2.html#.LerpUnclamped",
                  "tf": 5.555555555555555
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "Circle.html#colliding": {
                      "ref": "Circle.html#colliding",
                      "tf": 10
                    },
                    "Circle.html#intersect": {
                      "ref": "Circle.html#intersect",
                      "tf": 8.333333333333332
                    },
                    "Circle.html#difference": {
                      "ref": "Circle.html#difference",
                      "tf": 8.333333333333332
                    },
                    "Circle.html#union": {
                      "ref": "Circle.html#union",
                      "tf": 8.333333333333332
                    },
                    "Circle.html#xor": {
                      "ref": "Circle.html#xor",
                      "tf": 8.333333333333332
                    },
                    "Rect.html#colliding": {
                      "ref": "Rect.html#colliding",
                      "tf": 10
                    },
                    "Rect.html#intersect": {
                      "ref": "Rect.html#intersect",
                      "tf": 8.333333333333332
                    },
                    "Rect.html#difference": {
                      "ref": "Rect.html#difference",
                      "tf": 8.333333333333332
                    },
                    "Rect.html#union": {
                      "ref": "Rect.html#union",
                      "tf": 8.333333333333332
                    },
                    "Rect.html#xor": {
                      "ref": "Rect.html#xor",
                      "tf": 8.333333333333332
                    },
                    "Polygon.html#colliding": {
                      "ref": "Polygon.html#colliding",
                      "tf": 10
                    },
                    "Polygon.html#intersect": {
                      "ref": "Polygon.html#intersect",
                      "tf": 8.333333333333332
                    },
                    "Polygon.html#difference": {
                      "ref": "Polygon.html#difference",
                      "tf": 8.333333333333332
                    },
                    "Polygon.html#union": {
                      "ref": "Polygon.html#union",
                      "tf": 8.333333333333332
                    },
                    "Polygon.html#xor": {
                      "ref": "Polygon.html#xor",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Line.html": {
                      "ref": "Line.html",
                      "tf": 135
                    },
                    "Circle.html": {
                      "ref": "Circle.html",
                      "tf": 135
                    },
                    "Rect.html": {
                      "ref": "Rect.html",
                      "tf": 135
                    },
                    "Polygon.html": {
                      "ref": "Polygon.html",
                      "tf": 135
                    },
                    "Vector2.html": {
                      "ref": "Vector2.html",
                      "tf": 135
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "e": {
                  "docs": {
                    "Vector2.html#clone": {
                      "ref": "Vector2.html#clone",
                      "tf": 708.3333333333334
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "r": {
              "docs": {},
              "c": {
                "docs": {},
                "l": {
                  "docs": {
                    "Circle.html": {
                      "ref": "Circle.html",
                      "tf": 1925
                    },
                    "Circle.html#sides": {
                      "ref": "Circle.html#sides",
                      "tf": 16.666666666666664
                    },
                    "Circle.html#center": {
                      "ref": "Circle.html#center",
                      "tf": 25
                    },
                    "Circle.html#radius": {
                      "ref": "Circle.html#radius",
                      "tf": 25
                    },
                    "Circle.html#pointIsInside": {
                      "ref": "Circle.html#pointIsInside",
                      "tf": 10
                    },
                    "Circle.html#pointIsInsideCircle": {
                      "ref": "Circle.html#pointIsInsideCircle",
                      "tf": 12.5
                    }
                  },
                  "e": {
                    "docs": {},
                    "#": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Circle.html#sides": {
                                "ref": "Circle.html#sides",
                                "tf": 1150
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "Circle.html#setChildren": {
                                                "ref": "Circle.html#setChildren",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "x": {
                                        "docs": {
                                          "Circle.html#setVertexes": {
                                            "ref": "Circle.html#setVertexes",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Circle.html#center": {
                                  "ref": "Circle.html#center",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Circle.html#colliding": {
                                      "ref": "Circle.html#colliding",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "u": {
                                "docs": {
                                  "Circle.html#radius": {
                                    "ref": "Circle.html#radius",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {
                                    "Circle.html#region": {
                                      "ref": "Circle.html#region",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "p": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Circle.html#points": {
                                    "ref": "Circle.html#points",
                                    "tf": 1150
                                  }
                                },
                                "i": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Circle.html#pointIsInside": {
                                                  "ref": "Circle.html#pointIsInside",
                                                  "tf": 1150
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "y": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {
                                                                "Circle.html#pointIsInsidePolygon": {
                                                                  "ref": "Circle.html#pointIsInsidePolygon",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "c": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "c": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {
                                                            "Circle.html#pointIsInsideCircle": {
                                                              "ref": "Circle.html#pointIsInsideCircle",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "Circle.html#lines": {
                                "ref": "Circle.html#lines",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "Circle.html#area": {
                                  "ref": "Circle.html#area",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "d": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Circle.html#addChild": {
                                          "ref": "Circle.html#addChild",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "x": {
                                        "docs": {
                                          "Circle.html#addVertex": {
                                            "ref": "Circle.html#addVertex",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Circle.html#intersect": {
                                            "ref": "Circle.html#intersect",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "d": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "Circle.html#difference": {
                                      "ref": "Circle.html#difference",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "u": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {
                                  "Circle.html#union": {
                                    "ref": "Circle.html#union",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "x": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "r": {
                            "docs": {
                              "Circle.html#xor": {
                                "ref": "Circle.html#xor",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Circle.html#sides": {
                      "ref": "Circle.html#sides",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Circle.html#colliding": {
                        "ref": "Circle.html#colliding",
                        "tf": 693.3333333333334
                      },
                      "Rect.html#colliding": {
                        "ref": "Rect.html#colliding",
                        "tf": 693.3333333333334
                      },
                      "Polygon.html#colliding": {
                        "ref": "Polygon.html#colliding",
                        "tf": 693.3333333333334
                      },
                      "Polygon.html#.Colliding": {
                        "ref": "Polygon.html#.Colliding",
                        "tf": 680
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Polygon.html#.FromRegion": {
                          "ref": "Polygon.html#.FromRegion",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Vector2.html#.IsVector2Like": {
                                "ref": "Vector2.html#.IsVector2Like",
                                "tf": 6.25
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Circle.html#center": {
                        "ref": "Circle.html#center",
                        "tf": 725
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "Vector2.html#ceil": {
                    "ref": "Vector2.html#ceil",
                    "tf": 708.3333333333334
                  },
                  "Vector2.html#ceilX": {
                    "ref": "Vector2.html#ceilX",
                    "tf": 12.5
                  },
                  "Vector2.html#ceilY": {
                    "ref": "Vector2.html#ceilY",
                    "tf": 12.5
                  }
                },
                "x": {
                  "docs": {
                    "Vector2.html#ceilX": {
                      "ref": "Vector2.html#ceilX",
                      "tf": 683.3333333333334
                    }
                  }
                },
                "i": {
                  "docs": {
                    "Vector2.html#ceilY": {
                      "ref": "Vector2.html#ceilY",
                      "tf": 683.3333333333334
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "Circle.html#pointIsInside": {
                      "ref": "Circle.html#pointIsInside",
                      "tf": 10
                    },
                    "Circle.html#pointIsInsidePolygon": {
                      "ref": "Circle.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
                    "Circle.html#pointIsInsideCircle": {
                      "ref": "Circle.html#pointIsInsideCircle",
                      "tf": 12.5
                    },
                    "Rect.html#pointIsInside": {
                      "ref": "Rect.html#pointIsInside",
                      "tf": 10
                    },
                    "Rect.html#pointIsInsideRect": {
                      "ref": "Rect.html#pointIsInsideRect",
                      "tf": 12.5
                    },
                    "Rect.html#pointIsInsidePolygon": {
                      "ref": "Rect.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
                    "Polygon.html#pointIsInside": {
                      "ref": "Polygon.html#pointIsInside",
                      "tf": 10
                    },
                    "Polygon.html#pointIsInsidePolygon": {
                      "ref": "Polygon.html#pointIsInsidePolygon",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "Circle.html#addChild": {
                      "ref": "Circle.html#addChild",
                      "tf": 12.5
                    },
                    "Rect.html#addChild": {
                      "ref": "Rect.html#addChild",
                      "tf": 12.5
                    },
                    "Polygon.html#addChild": {
                      "ref": "Polygon.html#addChild",
                      "tf": 12.5
                    }
                  },
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Circle.html#setChildren": {
                            "ref": "Circle.html#setChildren",
                            "tf": 12.5
                          },
                          "Rect.html#setChildren": {
                            "ref": "Rect.html#setChildren",
                            "tf": 12.5
                          },
                          "Polygon.html#setChildren": {
                            "ref": "Polygon.html#setChildren",
                            "tf": 12.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Circle.html#colliding": {
                          "ref": "Circle.html#colliding",
                          "tf": 10
                        },
                        "Rect.html#colliding": {
                          "ref": "Rect.html#colliding",
                          "tf": 10
                        },
                        "Polygon.html#colliding": {
                          "ref": "Polygon.html#colliding",
                          "tf": 10
                        },
                        "Vector2.html#isInside": {
                          "ref": "Vector2.html#isInside",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "1": {
            "docs": {
              "Line.html#.Intersect": {
                "ref": "Line.html#.Intersect",
                "tf": 25
              }
            }
          },
          "2": {
            "docs": {
              "Line.html#.Intersect": {
                "ref": "Line.html#.Intersect",
                "tf": 25
              }
            }
          },
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {
                  "Line.html": {
                    "ref": "Line.html",
                    "tf": 1925
                  },
                  "Line.html#intersect": {
                    "ref": "Line.html#intersect",
                    "tf": 64.28571428571428
                  },
                  "Line.html#.Intersect": {
                    "ref": "Line.html#.Intersect",
                    "tf": 14.285714285714285
                  },
                  "Circle.html#lines": {
                    "ref": "Circle.html#lines",
                    "tf": 775
                  },
                  "Rect.html#lines": {
                    "ref": "Rect.html#lines",
                    "tf": 775
                  },
                  "Polygon.html#lines": {
                    "ref": "Polygon.html#lines",
                    "tf": 775
                  }
                },
                "#": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "h": {
                              "docs": {
                                "Line.html#length": {
                                  "ref": "Line.html#length",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Line.html#intersect": {
                                        "ref": "Line.html#intersect",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Line.html#.Intersect": {
                                        "ref": "Line.html#.Intersect",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "t": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Line.html#length": {
                        "ref": "Line.html#length",
                        "tf": 683.3333333333334
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "Circle.html#region": {
                      "ref": "Circle.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Rect.html#region": {
                      "ref": "Rect.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Polygon.html#region": {
                      "ref": "Polygon.html#region",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "p": {
                "docs": {
                  "Vector2.html#.Lerp": {
                    "ref": "Vector2.html#.Lerp",
                    "tf": 673.8095238095237
                  },
                  "Vector2.html#.LerpUnclamped": {
                    "ref": "Vector2.html#.LerpUnclamped",
                    "tf": 5.555555555555555
                  }
                },
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "p": {
                              "docs": {
                                "Vector2.html#.LerpUnclamped": {
                                  "ref": "Vector2.html#.LerpUnclamped",
                                  "tf": 666.6666666666666
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "t": {
                "docs": {
                  "Vector2.html#.Left": {
                    "ref": "Vector2.html#.Left",
                    "tf": 708.3333333333334
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Line.html#length": {
                                        "ref": "Line.html#length",
                                        "tf": 33.33333333333333
                                      },
                                      "Vector2.html#approximated": {
                                        "ref": "Vector2.html#approximated",
                                        "tf": 33.33333333333333
                                      },
                                      "Vector2.html#normalized": {
                                        "ref": "Vector2.html#normalized",
                                        "tf": 33.33333333333333
                                      },
                                      "Vector2.html#norm": {
                                        "ref": "Vector2.html#norm",
                                        "tf": 33.33333333333333
                                      },
                                      "Vector2.html#magnitude": {
                                        "ref": "Vector2.html#magnitude",
                                        "tf": 33.33333333333333
                                      },
                                      "Vector2.html#clone": {
                                        "ref": "Vector2.html#clone",
                                        "tf": 33.33333333333333
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Line.html#.Intersect": {
                                    "ref": "Line.html#.Intersect",
                                    "tf": 25
                                  },
                                  "Rect.html#.Box": {
                                    "ref": "Rect.html#.Box",
                                    "tf": 25
                                  },
                                  "Polygon.html#.Colliding": {
                                    "ref": "Polygon.html#.Colliding",
                                    "tf": 20
                                  },
                                  "Polygon.html#.FromRegion": {
                                    "ref": "Polygon.html#.FromRegion",
                                    "tf": 25
                                  },
                                  "Polygon.html#.Intersect": {
                                    "ref": "Polygon.html#.Intersect",
                                    "tf": 20
                                  },
                                  "Polygon.html#.Union": {
                                    "ref": "Polygon.html#.Union",
                                    "tf": 20
                                  },
                                  "Polygon.html#.Difference": {
                                    "ref": "Polygon.html#.Difference",
                                    "tf": 20
                                  },
                                  "Polygon.html#.Xor": {
                                    "ref": "Polygon.html#.Xor",
                                    "tf": 20
                                  },
                                  "Vector2.html#.Distance": {
                                    "ref": "Vector2.html#.Distance",
                                    "tf": 20
                                  },
                                  "Vector2.html#.Max": {
                                    "ref": "Vector2.html#.Max",
                                    "tf": 20
                                  },
                                  "Vector2.html#.Min": {
                                    "ref": "Vector2.html#.Min",
                                    "tf": 20
                                  },
                                  "Vector2.html#.Lerp": {
                                    "ref": "Vector2.html#.Lerp",
                                    "tf": 16.666666666666664
                                  },
                                  "Vector2.html#.LerpUnclamped": {
                                    "ref": "Vector2.html#.LerpUnclamped",
                                    "tf": 16.666666666666664
                                  },
                                  "Vector2.html#.IsVector2Like": {
                                    "ref": "Vector2.html#.IsVector2Like",
                                    "tf": 25
                                  },
                                  "Vector2.html#.Zero": {
                                    "ref": "Vector2.html#.Zero",
                                    "tf": 33.33333333333333
                                  },
                                  "Vector2.html#.Top": {
                                    "ref": "Vector2.html#.Top",
                                    "tf": 33.33333333333333
                                  },
                                  "Vector2.html#.Left": {
                                    "ref": "Vector2.html#.Left",
                                    "tf": 33.33333333333333
                                  },
                                  "Vector2.html#.Bottom": {
                                    "ref": "Vector2.html#.Bottom",
                                    "tf": 33.33333333333333
                                  },
                                  "Vector2.html#.Right": {
                                    "ref": "Vector2.html#.Right",
                                    "tf": 33.33333333333333
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Line.html#length": {
                        "ref": "Line.html#length",
                        "tf": 110
                      },
                      "Circle.html#sides": {
                        "ref": "Circle.html#sides",
                        "tf": 110
                      },
                      "Circle.html#center": {
                        "ref": "Circle.html#center",
                        "tf": 110
                      },
                      "Circle.html#radius": {
                        "ref": "Circle.html#radius",
                        "tf": 110
                      },
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 110
                      },
                      "Circle.html#points": {
                        "ref": "Circle.html#points",
                        "tf": 110
                      },
                      "Circle.html#lines": {
                        "ref": "Circle.html#lines",
                        "tf": 110
                      },
                      "Circle.html#area": {
                        "ref": "Circle.html#area",
                        "tf": 110
                      },
                      "Rect.html#position": {
                        "ref": "Rect.html#position",
                        "tf": 110
                      },
                      "Rect.html#size": {
                        "ref": "Rect.html#size",
                        "tf": 110
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
                        "tf": 110
                      },
                      "Rect.html#points": {
                        "ref": "Rect.html#points",
                        "tf": 110
                      },
                      "Rect.html#lines": {
                        "ref": "Rect.html#lines",
                        "tf": 110
                      },
                      "Rect.html#area": {
                        "ref": "Rect.html#area",
                        "tf": 110
                      },
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 110
                      },
                      "Polygon.html#points": {
                        "ref": "Polygon.html#points",
                        "tf": 110
                      },
                      "Polygon.html#lines": {
                        "ref": "Polygon.html#lines",
                        "tf": 110
                      },
                      "Polygon.html#area": {
                        "ref": "Polygon.html#area",
                        "tf": 110
                      },
                      "Vector2.html#approximated": {
                        "ref": "Vector2.html#approximated",
                        "tf": 110
                      },
                      "Vector2.html#normalized": {
                        "ref": "Vector2.html#normalized",
                        "tf": 110
                      },
                      "Vector2.html#norm": {
                        "ref": "Vector2.html#norm",
                        "tf": 110
                      },
                      "Vector2.html#magnitude": {
                        "ref": "Vector2.html#magnitude",
                        "tf": 110
                      },
                      "Vector2.html#clone": {
                        "ref": "Vector2.html#clone",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "g": {
              "docs": {},
              "n": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Vector2.html#magnitude": {
                            "ref": "Vector2.html#magnitude",
                            "tf": 708.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "x": {
              "docs": {
                "Vector2.html#.Max": {
                  "ref": "Vector2.html#.Max",
                  "tf": 680
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {
                "Vector2.html#.Min": {
                  "ref": "Vector2.html#.Min",
                  "tf": 680
                }
              }
            }
          },
          "u": {
            "docs": {},
            "l": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Vector2.html#multiply": {
                            "ref": "Vector2.html#multiply",
                            "tf": 691.6666666666666
                          },
                          "Vector2.html#multiplyX": {
                            "ref": "Vector2.html#multiplyX",
                            "tf": 10
                          },
                          "Vector2.html#multiplyY": {
                            "ref": "Vector2.html#multiplyY",
                            "tf": 10
                          }
                        }
                      },
                      "y": {
                        "docs": {},
                        "x": {
                          "docs": {
                            "Vector2.html#multiplyX": {
                              "ref": "Vector2.html#multiplyX",
                              "tf": 683.3333333333334
                            }
                          }
                        },
                        "i": {
                          "docs": {
                            "Vector2.html#multiplyY": {
                              "ref": "Vector2.html#multiplyY",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Line.html#length": {
                        "ref": "Line.html#length",
                        "tf": 33.33333333333333
                      },
                      "Circle.html#sides": {
                        "ref": "Circle.html#sides",
                        "tf": 50
                      },
                      "Circle.html#radius": {
                        "ref": "Circle.html#radius",
                        "tf": 50
                      },
                      "Vector2.html#magnitude": {
                        "ref": "Vector2.html#magnitude",
                        "tf": 33.33333333333333
                      },
                      "Vector2.html#.Distance": {
                        "ref": "Vector2.html#.Distance",
                        "tf": 20
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "Circle.html#addVertex": {
                  "ref": "Circle.html#addVertex",
                  "tf": 12.5
                },
                "Rect.html#addVertex": {
                  "ref": "Rect.html#addVertex",
                  "tf": 12.5
                },
                "Polygon.html#addVertex": {
                  "ref": "Polygon.html#addVertex",
                  "tf": 12.5
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "m": {
                "docs": {
                  "Vector2.html#norm": {
                    "ref": "Vector2.html#norm",
                    "tf": 683.3333333333334
                  }
                },
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Vector2.html#normalized": {
                        "ref": "Vector2.html#normalized",
                        "tf": 708.3333333333334
                      },
                      "Vector2.html#norm": {
                        "ref": "Vector2.html#norm",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "s": {
                "docs": {
                  "Line.html#intersect": {
                    "ref": "Line.html#intersect",
                    "tf": 7.142857142857142
                  },
                  "Line.html#.Intersect": {
                    "ref": "Line.html#.Intersect",
                    "tf": 7.142857142857142
                  },
                  "Vector2.html#.IsVector2Like": {
                    "ref": "Vector2.html#.IsVector2Like",
                    "tf": 6.25
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Line.html#intersect": {
                            "ref": "Line.html#intersect",
                            "tf": 110
                          },
                          "Line.html#.Intersect": {
                            "ref": "Line.html#.Intersect",
                            "tf": 110
                          },
                          "Circle.html#pointIsInside": {
                            "ref": "Circle.html#pointIsInside",
                            "tf": 110
                          },
                          "Circle.html#pointIsInsidePolygon": {
                            "ref": "Circle.html#pointIsInsidePolygon",
                            "tf": 110
                          },
                          "Circle.html#pointIsInsideCircle": {
                            "ref": "Circle.html#pointIsInsideCircle",
                            "tf": 110
                          },
                          "Circle.html#setChildren": {
                            "ref": "Circle.html#setChildren",
                            "tf": 110
                          },
                          "Circle.html#addChild": {
                            "ref": "Circle.html#addChild",
                            "tf": 110
                          },
                          "Circle.html#setVertexes": {
                            "ref": "Circle.html#setVertexes",
                            "tf": 110
                          },
                          "Circle.html#addVertex": {
                            "ref": "Circle.html#addVertex",
                            "tf": 110
                          },
                          "Circle.html#colliding": {
                            "ref": "Circle.html#colliding",
                            "tf": 110
                          },
                          "Circle.html#intersect": {
                            "ref": "Circle.html#intersect",
                            "tf": 110
                          },
                          "Circle.html#difference": {
                            "ref": "Circle.html#difference",
                            "tf": 110
                          },
                          "Circle.html#union": {
                            "ref": "Circle.html#union",
                            "tf": 110
                          },
                          "Circle.html#xor": {
                            "ref": "Circle.html#xor",
                            "tf": 110
                          },
                          "Rect.html#pointIsInside": {
                            "ref": "Rect.html#pointIsInside",
                            "tf": 110
                          },
                          "Rect.html#pointIsInsideRect": {
                            "ref": "Rect.html#pointIsInsideRect",
                            "tf": 110
                          },
                          "Rect.html#pointIsInsidePolygon": {
                            "ref": "Rect.html#pointIsInsidePolygon",
                            "tf": 110
                          },
                          "Rect.html#setChildren": {
                            "ref": "Rect.html#setChildren",
                            "tf": 110
                          },
                          "Rect.html#addChild": {
                            "ref": "Rect.html#addChild",
                            "tf": 110
                          },
                          "Rect.html#setVertexes": {
                            "ref": "Rect.html#setVertexes",
                            "tf": 110
                          },
                          "Rect.html#addVertex": {
                            "ref": "Rect.html#addVertex",
                            "tf": 110
                          },
                          "Rect.html#.Box": {
                            "ref": "Rect.html#.Box",
                            "tf": 110
                          },
                          "Rect.html#colliding": {
                            "ref": "Rect.html#colliding",
                            "tf": 110
                          },
                          "Rect.html#intersect": {
                            "ref": "Rect.html#intersect",
                            "tf": 110
                          },
                          "Rect.html#difference": {
                            "ref": "Rect.html#difference",
                            "tf": 110
                          },
                          "Rect.html#union": {
                            "ref": "Rect.html#union",
                            "tf": 110
                          },
                          "Rect.html#xor": {
                            "ref": "Rect.html#xor",
                            "tf": 110
                          },
                          "Polygon.html#pointIsInside": {
                            "ref": "Polygon.html#pointIsInside",
                            "tf": 110
                          },
                          "Polygon.html#pointIsInsidePolygon": {
                            "ref": "Polygon.html#pointIsInsidePolygon",
                            "tf": 110
                          },
                          "Polygon.html#setChildren": {
                            "ref": "Polygon.html#setChildren",
                            "tf": 110
                          },
                          "Polygon.html#addChild": {
                            "ref": "Polygon.html#addChild",
                            "tf": 110
                          },
                          "Polygon.html#setVertexes": {
                            "ref": "Polygon.html#setVertexes",
                            "tf": 110
                          },
                          "Polygon.html#addVertex": {
                            "ref": "Polygon.html#addVertex",
                            "tf": 110
                          },
                          "Polygon.html#colliding": {
                            "ref": "Polygon.html#colliding",
                            "tf": 110
                          },
                          "Polygon.html#intersect": {
                            "ref": "Polygon.html#intersect",
                            "tf": 110
                          },
                          "Polygon.html#difference": {
                            "ref": "Polygon.html#difference",
                            "tf": 110
                          },
                          "Polygon.html#union": {
                            "ref": "Polygon.html#union",
                            "tf": 110
                          },
                          "Polygon.html#xor": {
                            "ref": "Polygon.html#xor",
                            "tf": 110
                          },
                          "Polygon.html#.Colliding": {
                            "ref": "Polygon.html#.Colliding",
                            "tf": 110
                          },
                          "Polygon.html#.FromRegion": {
                            "ref": "Polygon.html#.FromRegion",
                            "tf": 110
                          },
                          "Polygon.html#.Intersect": {
                            "ref": "Polygon.html#.Intersect",
                            "tf": 110
                          },
                          "Polygon.html#.Union": {
                            "ref": "Polygon.html#.Union",
                            "tf": 110
                          },
                          "Polygon.html#.Difference": {
                            "ref": "Polygon.html#.Difference",
                            "tf": 110
                          },
                          "Polygon.html#.Xor": {
                            "ref": "Polygon.html#.Xor",
                            "tf": 110
                          },
                          "Vector2.html#equalsX": {
                            "ref": "Vector2.html#equalsX",
                            "tf": 110
                          },
                          "Vector2.html#equalsY": {
                            "ref": "Vector2.html#equalsY",
                            "tf": 110
                          },
                          "Vector2.html#isInside": {
                            "ref": "Vector2.html#isInside",
                            "tf": 110
                          },
                          "Vector2.html#approximate": {
                            "ref": "Vector2.html#approximate",
                            "tf": 110
                          },
                          "Vector2.html#toString": {
                            "ref": "Vector2.html#toString",
                            "tf": 110
                          },
                          "Vector2.html#.Distance": {
                            "ref": "Vector2.html#.Distance",
                            "tf": 110
                          },
                          "Vector2.html#.Max": {
                            "ref": "Vector2.html#.Max",
                            "tf": 110
                          },
                          "Vector2.html#.Min": {
                            "ref": "Vector2.html#.Min",
                            "tf": 110
                          },
                          "Vector2.html#.Lerp": {
                            "ref": "Vector2.html#.Lerp",
                            "tf": 110
                          },
                          "Vector2.html#.LerpUnclamped": {
                            "ref": "Vector2.html#.LerpUnclamped",
                            "tf": 110
                          },
                          "Vector2.html#.IsVector2Like": {
                            "ref": "Vector2.html#.IsVector2Like",
                            "tf": 110
                          },
                          "Vector2.html#.Zero": {
                            "ref": "Vector2.html#.Zero",
                            "tf": 110
                          },
                          "Vector2.html#.Top": {
                            "ref": "Vector2.html#.Top",
                            "tf": 110
                          },
                          "Vector2.html#.Left": {
                            "ref": "Vector2.html#.Left",
                            "tf": 110
                          },
                          "Vector2.html#.Bottom": {
                            "ref": "Vector2.html#.Bottom",
                            "tf": 110
                          },
                          "Vector2.html#.Right": {
                            "ref": "Vector2.html#.Right",
                            "tf": 110
                          },
                          "Vector2.html#floor": {
                            "ref": "Vector2.html#floor",
                            "tf": 110
                          },
                          "Vector2.html#floorX": {
                            "ref": "Vector2.html#floorX",
                            "tf": 110
                          },
                          "Vector2.html#floorY": {
                            "ref": "Vector2.html#floorY",
                            "tf": 110
                          },
                          "Vector2.html#ceil": {
                            "ref": "Vector2.html#ceil",
                            "tf": 110
                          },
                          "Vector2.html#ceilX": {
                            "ref": "Vector2.html#ceilX",
                            "tf": 110
                          },
                          "Vector2.html#ceilY": {
                            "ref": "Vector2.html#ceilY",
                            "tf": 110
                          },
                          "Vector2.html#round": {
                            "ref": "Vector2.html#round",
                            "tf": 110
                          },
                          "Vector2.html#roundX": {
                            "ref": "Vector2.html#roundX",
                            "tf": 110
                          },
                          "Vector2.html#roundY": {
                            "ref": "Vector2.html#roundY",
                            "tf": 110
                          },
                          "Vector2.html#set": {
                            "ref": "Vector2.html#set",
                            "tf": 110
                          },
                          "Vector2.html#setX": {
                            "ref": "Vector2.html#setX",
                            "tf": 110
                          },
                          "Vector2.html#setY": {
                            "ref": "Vector2.html#setY",
                            "tf": 110
                          },
                          "Vector2.html#add": {
                            "ref": "Vector2.html#add",
                            "tf": 110
                          },
                          "Vector2.html#addX": {
                            "ref": "Vector2.html#addX",
                            "tf": 110
                          },
                          "Vector2.html#addY": {
                            "ref": "Vector2.html#addY",
                            "tf": 110
                          },
                          "Vector2.html#substract": {
                            "ref": "Vector2.html#substract",
                            "tf": 110
                          },
                          "Vector2.html#substractX": {
                            "ref": "Vector2.html#substractX",
                            "tf": 110
                          },
                          "Vector2.html#substractY": {
                            "ref": "Vector2.html#substractY",
                            "tf": 110
                          },
                          "Vector2.html#multiply": {
                            "ref": "Vector2.html#multiply",
                            "tf": 110
                          },
                          "Vector2.html#multiplyX": {
                            "ref": "Vector2.html#multiplyX",
                            "tf": 110
                          },
                          "Vector2.html#multiplyY": {
                            "ref": "Vector2.html#multiplyY",
                            "tf": 110
                          },
                          "Vector2.html#divide": {
                            "ref": "Vector2.html#divide",
                            "tf": 110
                          },
                          "Vector2.html#divideX": {
                            "ref": "Vector2.html#divideX",
                            "tf": 110
                          },
                          "Vector2.html#divideY": {
                            "ref": "Vector2.html#divideY",
                            "tf": 110
                          },
                          "Vector2.html#invert": {
                            "ref": "Vector2.html#invert",
                            "tf": 110
                          },
                          "Vector2.html#invertX": {
                            "ref": "Vector2.html#invertX",
                            "tf": 110
                          },
                          "Vector2.html#invertY": {
                            "ref": "Vector2.html#invertY",
                            "tf": 110
                          },
                          "Vector2.html#rotate": {
                            "ref": "Vector2.html#rotate",
                            "tf": 110
                          },
                          "Vector2.html#equals": {
                            "ref": "Vector2.html#equals",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "r": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "Polygon.html#.FromRegion": {
                                "ref": "Polygon.html#.FromRegion",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Vector2.html#floor": {
                      "ref": "Vector2.html#floor",
                      "tf": 708.3333333333334
                    },
                    "Vector2.html#floorX": {
                      "ref": "Vector2.html#floorX",
                      "tf": 12.5
                    },
                    "Vector2.html#floorY": {
                      "ref": "Vector2.html#floorY",
                      "tf": 12.5
                    }
                  },
                  "x": {
                    "docs": {
                      "Vector2.html#floorX": {
                        "ref": "Vector2.html#floorX",
                        "tf": 683.3333333333334
                      }
                    }
                  },
                  "i": {
                    "docs": {
                      "Vector2.html#floorY": {
                        "ref": "Vector2.html#floorY",
                        "tf": 683.3333333333334
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {
            "Vector2.html#.Lerp": {
              "ref": "Vector2.html#.Lerp",
              "tf": 23.809523809523807
            },
            "Vector2.html#.LerpUnclamped": {
              "ref": "Vector2.html#.LerpUnclamped",
              "tf": 22.22222222222222
            }
          },
          "w": {
            "docs": {},
            "o": {
              "docs": {
                "Line.html#.Intersect": {
                  "ref": "Line.html#.Intersect",
                  "tf": 7.142857142857142
                },
                "Vector2.html#.Distance": {
                  "ref": "Vector2.html#.Distance",
                  "tf": 10
                },
                "Vector2.html#.Max": {
                  "ref": "Vector2.html#.Max",
                  "tf": 10
                },
                "Vector2.html#.Min": {
                  "ref": "Vector2.html#.Min",
                  "tf": 10
                }
              }
            }
          },
          "e": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "Vector2.html#equalsX": {
                    "ref": "Vector2.html#equalsX",
                    "tf": 10
                  },
                  "Vector2.html#equalsY": {
                    "ref": "Vector2.html#equalsY",
                    "tf": 10
                  },
                  "Vector2.html#isInside": {
                    "ref": "Vector2.html#isInside",
                    "tf": 10
                  },
                  "Vector2.html#.IsVector2Like": {
                    "ref": "Vector2.html#.IsVector2Like",
                    "tf": 6.25
                  },
                  "Vector2.html#equals": {
                    "ref": "Vector2.html#equals",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {
                    "Vector2.html#toString": {
                      "ref": "Vector2.html#toString",
                      "tf": 700
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {
                "Vector2.html#.Top": {
                  "ref": "Vector2.html#.Top",
                  "tf": 708.3333333333334
                }
              }
            }
          },
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Vector2.html#.Lerp": {
                    "ref": "Vector2.html#.Lerp",
                    "tf": 7.142857142857142
                  },
                  "Vector2.html#.LerpUnclamped": {
                    "ref": "Vector2.html#.LerpUnclamped",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          }
        },
        "v": {
          "1": {
            "docs": {
              "Vector2.html#.Distance": {
                "ref": "Vector2.html#.Distance",
                "tf": 20
              },
              "Vector2.html#.Max": {
                "ref": "Vector2.html#.Max",
                "tf": 20
              },
              "Vector2.html#.Min": {
                "ref": "Vector2.html#.Min",
                "tf": 20
              },
              "Vector2.html#.Lerp": {
                "ref": "Vector2.html#.Lerp",
                "tf": 23.809523809523807
              },
              "Vector2.html#.LerpUnclamped": {
                "ref": "Vector2.html#.LerpUnclamped",
                "tf": 22.22222222222222
              }
            }
          },
          "2": {
            "docs": {
              "Vector2.html#.Distance": {
                "ref": "Vector2.html#.Distance",
                "tf": 20
              },
              "Vector2.html#.Max": {
                "ref": "Vector2.html#.Max",
                "tf": 20
              },
              "Vector2.html#.Min": {
                "ref": "Vector2.html#.Min",
                "tf": 20
              },
              "Vector2.html#.Lerp": {
                "ref": "Vector2.html#.Lerp",
                "tf": 23.809523809523807
              },
              "Vector2.html#.LerpUnclamped": {
                "ref": "Vector2.html#.LerpUnclamped",
                "tf": 22.22222222222222
              }
            }
          },
          "docs": {
            "Vector2.html#equalsX": {
              "ref": "Vector2.html#equalsX",
              "tf": 33.33333333333333
            },
            "Vector2.html#equalsY": {
              "ref": "Vector2.html#equalsY",
              "tf": 33.33333333333333
            },
            "Vector2.html#floor": {
              "ref": "Vector2.html#floor",
              "tf": 33.33333333333333
            },
            "Vector2.html#floorX": {
              "ref": "Vector2.html#floorX",
              "tf": 33.33333333333333
            },
            "Vector2.html#floorY": {
              "ref": "Vector2.html#floorY",
              "tf": 33.33333333333333
            },
            "Vector2.html#ceil": {
              "ref": "Vector2.html#ceil",
              "tf": 33.33333333333333
            },
            "Vector2.html#ceilX": {
              "ref": "Vector2.html#ceilX",
              "tf": 33.33333333333333
            },
            "Vector2.html#ceilY": {
              "ref": "Vector2.html#ceilY",
              "tf": 33.33333333333333
            },
            "Vector2.html#round": {
              "ref": "Vector2.html#round",
              "tf": 33.33333333333333
            },
            "Vector2.html#roundX": {
              "ref": "Vector2.html#roundX",
              "tf": 33.33333333333333
            },
            "Vector2.html#roundY": {
              "ref": "Vector2.html#roundY",
              "tf": 33.33333333333333
            },
            "Vector2.html#setX": {
              "ref": "Vector2.html#setX",
              "tf": 33.33333333333333
            },
            "Vector2.html#setY": {
              "ref": "Vector2.html#setY",
              "tf": 33.33333333333333
            },
            "Vector2.html#addX": {
              "ref": "Vector2.html#addX",
              "tf": 43.33333333333333
            },
            "Vector2.html#addY": {
              "ref": "Vector2.html#addY",
              "tf": 43.33333333333333
            },
            "Vector2.html#substractX": {
              "ref": "Vector2.html#substractX",
              "tf": 43.33333333333333
            },
            "Vector2.html#substractY": {
              "ref": "Vector2.html#substractY",
              "tf": 43.33333333333333
            },
            "Vector2.html#multiplyX": {
              "ref": "Vector2.html#multiplyX",
              "tf": 43.33333333333333
            },
            "Vector2.html#multiplyY": {
              "ref": "Vector2.html#multiplyY",
              "tf": 43.33333333333333
            },
            "Vector2.html#divideX": {
              "ref": "Vector2.html#divideX",
              "tf": 43.33333333333333
            },
            "Vector2.html#divideY": {
              "ref": "Vector2.html#divideY",
              "tf": 43.33333333333333
            }
          },
          "e": {
            "docs": {},
            "c": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "2": {
                      "docs": {
                        "Circle.html#center": {
                          "ref": "Circle.html#center",
                          "tf": 50
                        },
                        "Rect.html#position": {
                          "ref": "Rect.html#position",
                          "tf": 50
                        },
                        "Rect.html#size": {
                          "ref": "Rect.html#size",
                          "tf": 50
                        },
                        "Vector2.html": {
                          "ref": "Vector2.html",
                          "tf": 1925
                        },
                        "Vector2.html#approximated": {
                          "ref": "Vector2.html#approximated",
                          "tf": 41.66666666666666
                        },
                        "Vector2.html#normalized": {
                          "ref": "Vector2.html#normalized",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#norm": {
                          "ref": "Vector2.html#norm",
                          "tf": 33.33333333333333
                        },
                        "Vector2.html#magnitude": {
                          "ref": "Vector2.html#magnitude",
                          "tf": 25
                        },
                        "Vector2.html#clone": {
                          "ref": "Vector2.html#clone",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#equalsX": {
                          "ref": "Vector2.html#equalsX",
                          "tf": 10
                        },
                        "Vector2.html#equalsY": {
                          "ref": "Vector2.html#equalsY",
                          "tf": 10
                        },
                        "Vector2.html#isInside": {
                          "ref": "Vector2.html#isInside",
                          "tf": 10
                        },
                        "Vector2.html#toString": {
                          "ref": "Vector2.html#toString",
                          "tf": 10
                        },
                        "Vector2.html#.Distance": {
                          "ref": "Vector2.html#.Distance",
                          "tf": 10
                        },
                        "Vector2.html#.Max": {
                          "ref": "Vector2.html#.Max",
                          "tf": 30
                        },
                        "Vector2.html#.Min": {
                          "ref": "Vector2.html#.Min",
                          "tf": 30
                        },
                        "Vector2.html#.Lerp": {
                          "ref": "Vector2.html#.Lerp",
                          "tf": 23.809523809523807
                        },
                        "Vector2.html#.LerpUnclamped": {
                          "ref": "Vector2.html#.LerpUnclamped",
                          "tf": 22.22222222222222
                        },
                        "Vector2.html#.IsVector2Like": {
                          "ref": "Vector2.html#.IsVector2Like",
                          "tf": 12.5
                        },
                        "Vector2.html#.Zero": {
                          "ref": "Vector2.html#.Zero",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#.Top": {
                          "ref": "Vector2.html#.Top",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#.Left": {
                          "ref": "Vector2.html#.Left",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#.Bottom": {
                          "ref": "Vector2.html#.Bottom",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#.Right": {
                          "ref": "Vector2.html#.Right",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#floor": {
                          "ref": "Vector2.html#floor",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#floorX": {
                          "ref": "Vector2.html#floorX",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#floorY": {
                          "ref": "Vector2.html#floorY",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#ceil": {
                          "ref": "Vector2.html#ceil",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#ceilX": {
                          "ref": "Vector2.html#ceilX",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#ceilY": {
                          "ref": "Vector2.html#ceilY",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#round": {
                          "ref": "Vector2.html#round",
                          "tf": 58.33333333333333
                        },
                        "Vector2.html#roundX": {
                          "ref": "Vector2.html#roundX",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#roundY": {
                          "ref": "Vector2.html#roundY",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#set": {
                          "ref": "Vector2.html#set",
                          "tf": 41.666666666666664
                        },
                        "Vector2.html#setX": {
                          "ref": "Vector2.html#setX",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#setY": {
                          "ref": "Vector2.html#setY",
                          "tf": 45.83333333333333
                        },
                        "Vector2.html#add": {
                          "ref": "Vector2.html#add",
                          "tf": 41.666666666666664
                        },
                        "Vector2.html#addX": {
                          "ref": "Vector2.html#addX",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#addY": {
                          "ref": "Vector2.html#addY",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#substract": {
                          "ref": "Vector2.html#substract",
                          "tf": 41.666666666666664
                        },
                        "Vector2.html#substractX": {
                          "ref": "Vector2.html#substractX",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#substractY": {
                          "ref": "Vector2.html#substractY",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#multiply": {
                          "ref": "Vector2.html#multiply",
                          "tf": 41.666666666666664
                        },
                        "Vector2.html#multiplyX": {
                          "ref": "Vector2.html#multiplyX",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#multiplyY": {
                          "ref": "Vector2.html#multiplyY",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#divide": {
                          "ref": "Vector2.html#divide",
                          "tf": 41.666666666666664
                        },
                        "Vector2.html#divideX": {
                          "ref": "Vector2.html#divideX",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#divideY": {
                          "ref": "Vector2.html#divideY",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#invert": {
                          "ref": "Vector2.html#invert",
                          "tf": 75
                        },
                        "Vector2.html#invertX": {
                          "ref": "Vector2.html#invertX",
                          "tf": 62.5
                        },
                        "Vector2.html#invertY": {
                          "ref": "Vector2.html#invertY",
                          "tf": 62.5
                        },
                        "Vector2.html#rotate": {
                          "ref": "Vector2.html#rotate",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#equals": {
                          "ref": "Vector2.html#equals",
                          "tf": 16.666666666666664
                        }
                      },
                      "#": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "x": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "Vector2.html#approximated": {
                                            "ref": "Vector2.html#approximated",
                                            "tf": 1150
                                          },
                                          "Vector2.html#approximate": {
                                            "ref": "Vector2.html#approximate",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "d": {
                            "docs": {},
                            "d": {
                              "docs": {
                                "Vector2.html#add": {
                                  "ref": "Vector2.html#add",
                                  "tf": 1150
                                }
                              },
                              "x": {
                                "docs": {
                                  "Vector2.html#addX": {
                                    "ref": "Vector2.html#addX",
                                    "tf": 1150
                                  }
                                }
                              },
                              "i": {
                                "docs": {
                                  "Vector2.html#addY": {
                                    "ref": "Vector2.html#addY",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "n": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "m": {
                                "docs": {
                                  "Vector2.html#normalized": {
                                    "ref": "Vector2.html#normalized",
                                    "tf": 1150
                                  },
                                  "Vector2.html#norm": {
                                    "ref": "Vector2.html#norm",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "d": {
                                        "docs": {
                                          "Vector2.html#magnitude": {
                                            "ref": "Vector2.html#magnitude",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "u": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "i": {
                                        "docs": {
                                          "Vector2.html#multiply": {
                                            "ref": "Vector2.html#multiply",
                                            "tf": 1150
                                          }
                                        }
                                      },
                                      "y": {
                                        "docs": {},
                                        "x": {
                                          "docs": {
                                            "Vector2.html#multiplyX": {
                                              "ref": "Vector2.html#multiplyX",
                                              "tf": 1150
                                            }
                                          }
                                        },
                                        "i": {
                                          "docs": {
                                            "Vector2.html#multiplyY": {
                                              "ref": "Vector2.html#multiplyY",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "c": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {
                                  "Vector2.html#clone": {
                                    "ref": "Vector2.html#clone",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          },
                          "e": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "Vector2.html#ceil": {
                                    "ref": "Vector2.html#ceil",
                                    "tf": 1150
                                  }
                                },
                                "x": {
                                  "docs": {
                                    "Vector2.html#ceilX": {
                                      "ref": "Vector2.html#ceilX",
                                      "tf": 1150
                                    }
                                  }
                                },
                                "i": {
                                  "docs": {
                                    "Vector2.html#ceilY": {
                                      "ref": "Vector2.html#ceilY",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "q": {
                            "docs": {},
                            "u": {
                              "docs": {
                                "Vector2.html#equals": {
                                  "ref": "Vector2.html#equals",
                                  "tf": 1150
                                }
                              },
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "x": {
                                      "docs": {
                                        "Vector2.html#equalsX": {
                                          "ref": "Vector2.html#equalsX",
                                          "tf": 1150
                                        }
                                      }
                                    },
                                    "i": {
                                      "docs": {
                                        "Vector2.html#equalsY": {
                                          "ref": "Vector2.html#equalsY",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "i": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Vector2.html#isInside": {
                                          "ref": "Vector2.html#isInside",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "n": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Vector2.html#invert": {
                                        "ref": "Vector2.html#invert",
                                        "tf": 1150
                                      }
                                    },
                                    "x": {
                                      "docs": {
                                        "Vector2.html#invertX": {
                                          "ref": "Vector2.html#invertX",
                                          "tf": 1150
                                        }
                                      }
                                    },
                                    "i": {
                                      "docs": {
                                        "Vector2.html#invertY": {
                                          "ref": "Vector2.html#invertY",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "Vector2.html#toString": {
                                      "ref": "Vector2.html#toString",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "f": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "Vector2.html#floor": {
                                      "ref": "Vector2.html#floor",
                                      "tf": 1150
                                    }
                                  },
                                  "x": {
                                    "docs": {
                                      "Vector2.html#floorX": {
                                        "ref": "Vector2.html#floorX",
                                        "tf": 1150
                                      }
                                    }
                                  },
                                  "i": {
                                    "docs": {
                                      "Vector2.html#floorY": {
                                        "ref": "Vector2.html#floorY",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Vector2.html#round": {
                                      "ref": "Vector2.html#round",
                                      "tf": 1150
                                    }
                                  },
                                  "x": {
                                    "docs": {
                                      "Vector2.html#roundX": {
                                        "ref": "Vector2.html#roundX",
                                        "tf": 1150
                                      }
                                    }
                                  },
                                  "i": {
                                    "docs": {
                                      "Vector2.html#roundY": {
                                        "ref": "Vector2.html#roundY",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "t": {
                              "docs": {
                                "Vector2.html#rotate": {
                                  "ref": "Vector2.html#rotate",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Vector2.html#set": {
                                  "ref": "Vector2.html#set",
                                  "tf": 1150
                                }
                              },
                              "x": {
                                "docs": {
                                  "Vector2.html#setX": {
                                    "ref": "Vector2.html#setX",
                                    "tf": 1150
                                  }
                                }
                              },
                              "i": {
                                "docs": {
                                  "Vector2.html#setY": {
                                    "ref": "Vector2.html#setY",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          },
                          "u": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Vector2.html#substract": {
                                              "ref": "Vector2.html#substract",
                                              "tf": 1150
                                            }
                                          },
                                          "x": {
                                            "docs": {
                                              "Vector2.html#substractX": {
                                                "ref": "Vector2.html#substractX",
                                                "tf": 1150
                                              }
                                            }
                                          },
                                          "i": {
                                            "docs": {
                                              "Vector2.html#substractY": {
                                                "ref": "Vector2.html#substractY",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "Vector2.html#divide": {
                                      "ref": "Vector2.html#divide",
                                      "tf": 1150
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {
                                        "Vector2.html#divideX": {
                                          "ref": "Vector2.html#divideX",
                                          "tf": 1150
                                        }
                                      }
                                    },
                                    "y": {
                                      "docs": {
                                        "Vector2.html#divideY": {
                                          "ref": "Vector2.html#divideY",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      ".": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Vector2.html#.Distance": {
                                    "ref": "Vector2.html#.Distance",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "x": {
                              "docs": {
                                "Vector2.html#.Max": {
                                  "ref": "Vector2.html#.Max",
                                  "tf": 1150
                                }
                              }
                            }
                          },
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {
                                "Vector2.html#.Min": {
                                  "ref": "Vector2.html#.Min",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "p": {
                                "docs": {
                                  "Vector2.html#.Lerp": {
                                    "ref": "Vector2.html#.Lerp",
                                    "tf": 1150
                                  }
                                },
                                "u": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "p": {
                                              "docs": {
                                                "Vector2.html#.LerpUnclamped": {
                                                  "ref": "Vector2.html#.LerpUnclamped",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "f": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Vector2.html#.Left": {
                                    "ref": "Vector2.html#.Left",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "i": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "2": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "k": {
                                                "docs": {
                                                  "Vector2.html#.IsVector2Like": {
                                                    "ref": "Vector2.html#.IsVector2Like",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "docs": {}
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "z": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "o": {
                                "docs": {
                                  "Vector2.html#.Zero": {
                                    "ref": "Vector2.html#.Zero",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "p": {
                              "docs": {
                                "Vector2.html#.Top": {
                                  "ref": "Vector2.html#.Top",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "b": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "m": {
                                    "docs": {
                                      "Vector2.html#.Bottom": {
                                        "ref": "Vector2.html#.Bottom",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "Vector2.html#.Right": {
                                      "ref": "Vector2.html#.Right",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "|": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "s": {
                                "docs": {
                                  "Vector2.html#.IsVector2Like": {
                                    "ref": "Vector2.html#.IsVector2Like",
                                    "tf": 25
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "docs": {}
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Circle.html#setVertexes": {
                        "ref": "Circle.html#setVertexes",
                        "tf": 49.99999999999999
                      },
                      "Circle.html#addVertex": {
                        "ref": "Circle.html#addVertex",
                        "tf": 45.83333333333333
                      },
                      "Rect.html#setVertexes": {
                        "ref": "Rect.html#setVertexes",
                        "tf": 49.99999999999999
                      },
                      "Rect.html#addVertex": {
                        "ref": "Rect.html#addVertex",
                        "tf": 45.83333333333333
                      },
                      "Polygon.html#setVertexes": {
                        "ref": "Polygon.html#setVertexes",
                        "tf": 49.99999999999999
                      },
                      "Polygon.html#addVertex": {
                        "ref": "Polygon.html#addVertex",
                        "tf": 45.83333333333333
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Vector2.html#toString": {
                          "ref": "Vector2.html#toString",
                          "tf": 10
                        },
                        "Vector2.html#.LerpUnclamped": {
                          "ref": "Vector2.html#.LerpUnclamped",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "u": {
                "docs": {
                  "Vector2.html#approximated": {
                    "ref": "Vector2.html#approximated",
                    "tf": 8.333333333333332
                  },
                  "Vector2.html#equalsX": {
                    "ref": "Vector2.html#equalsX",
                    "tf": 10
                  },
                  "Vector2.html#equalsY": {
                    "ref": "Vector2.html#equalsY",
                    "tf": 10
                  },
                  "Vector2.html#.Max": {
                    "ref": "Vector2.html#.Max",
                    "tf": 10
                  },
                  "Vector2.html#.Min": {
                    "ref": "Vector2.html#.Min",
                    "tf": 10
                  },
                  "Vector2.html#floorX": {
                    "ref": "Vector2.html#floorX",
                    "tf": 12.5
                  },
                  "Vector2.html#floorY": {
                    "ref": "Vector2.html#floorY",
                    "tf": 12.5
                  },
                  "Vector2.html#ceilX": {
                    "ref": "Vector2.html#ceilX",
                    "tf": 12.5
                  },
                  "Vector2.html#ceilY": {
                    "ref": "Vector2.html#ceilY",
                    "tf": 12.5
                  },
                  "Vector2.html#roundX": {
                    "ref": "Vector2.html#roundX",
                    "tf": 12.5
                  },
                  "Vector2.html#roundY": {
                    "ref": "Vector2.html#roundY",
                    "tf": 12.5
                  },
                  "Vector2.html#set": {
                    "ref": "Vector2.html#set",
                    "tf": 16.666666666666664
                  },
                  "Vector2.html#setX": {
                    "ref": "Vector2.html#setX",
                    "tf": 12.5
                  },
                  "Vector2.html#setY": {
                    "ref": "Vector2.html#setY",
                    "tf": 12.5
                  },
                  "Vector2.html#add": {
                    "ref": "Vector2.html#add",
                    "tf": 16.666666666666664
                  },
                  "Vector2.html#addX": {
                    "ref": "Vector2.html#addX",
                    "tf": 10
                  },
                  "Vector2.html#addY": {
                    "ref": "Vector2.html#addY",
                    "tf": 10
                  },
                  "Vector2.html#substract": {
                    "ref": "Vector2.html#substract",
                    "tf": 16.666666666666664
                  },
                  "Vector2.html#substractX": {
                    "ref": "Vector2.html#substractX",
                    "tf": 10
                  },
                  "Vector2.html#substractY": {
                    "ref": "Vector2.html#substractY",
                    "tf": 10
                  },
                  "Vector2.html#multiply": {
                    "ref": "Vector2.html#multiply",
                    "tf": 16.666666666666664
                  },
                  "Vector2.html#multiplyX": {
                    "ref": "Vector2.html#multiplyX",
                    "tf": 10
                  },
                  "Vector2.html#multiplyY": {
                    "ref": "Vector2.html#multiplyY",
                    "tf": 10
                  },
                  "Vector2.html#divide": {
                    "ref": "Vector2.html#divide",
                    "tf": 16.666666666666664
                  },
                  "Vector2.html#divideX": {
                    "ref": "Vector2.html#divideX",
                    "tf": 10
                  },
                  "Vector2.html#divideY": {
                    "ref": "Vector2.html#divideY",
                    "tf": 10
                  },
                  "Vector2.html#invertX": {
                    "ref": "Vector2.html#invertX",
                    "tf": 12.5
                  },
                  "Vector2.html#invertY": {
                    "ref": "Vector2.html#invertY",
                    "tf": 12.5
                  }
                }
              }
            }
          }
        },
        "a": {
          "docs": {},
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Circle.html#region": {
                      "ref": "Circle.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Rect.html#region": {
                      "ref": "Rect.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Polygon.html#region": {
                      "ref": "Polygon.html#region",
                      "tf": 3.8461538461538463
                    }
                  },
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "y": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "&": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "Circle.html#intersect": {
                                                    "ref": "Circle.html#intersect",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Circle.html#difference": {
                                                    "ref": "Circle.html#difference",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Circle.html#union": {
                                                    "ref": "Circle.html#union",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Circle.html#xor": {
                                                    "ref": "Circle.html#xor",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Rect.html#intersect": {
                                                    "ref": "Rect.html#intersect",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Rect.html#difference": {
                                                    "ref": "Rect.html#difference",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Rect.html#union": {
                                                    "ref": "Rect.html#union",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Rect.html#xor": {
                                                    "ref": "Rect.html#xor",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Polygon.html#intersect": {
                                                    "ref": "Polygon.html#intersect",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Polygon.html#difference": {
                                                    "ref": "Polygon.html#difference",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Polygon.html#union": {
                                                    "ref": "Polygon.html#union",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Polygon.html#xor": {
                                                    "ref": "Polygon.html#xor",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Polygon.html#.Intersect": {
                                                    "ref": "Polygon.html#.Intersect",
                                                    "tf": 20
                                                  },
                                                  "Polygon.html#.Union": {
                                                    "ref": "Polygon.html#.Union",
                                                    "tf": 20
                                                  },
                                                  "Polygon.html#.Difference": {
                                                    "ref": "Polygon.html#.Difference",
                                                    "tf": 20
                                                  },
                                                  "Polygon.html#.Xor": {
                                                    "ref": "Polygon.html#.Xor",
                                                    "tf": 20
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Vector2.html#rotate": {
                          "ref": "Vector2.html#rotate",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "a": {
                "docs": {
                  "Circle.html#area": {
                    "ref": "Circle.html#area",
                    "tf": 775
                  },
                  "Rect.html#area": {
                    "ref": "Rect.html#area",
                    "tf": 775
                  },
                  "Polygon.html#area": {
                    "ref": "Polygon.html#area",
                    "tf": 775
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "u": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Rect.html#.Box": {
                        "ref": "Rect.html#.Box",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "Circle.html#addChild": {
                "ref": "Circle.html#addChild",
                "tf": 12.5
              },
              "Rect.html#addChild": {
                "ref": "Rect.html#addChild",
                "tf": 12.5
              },
              "Polygon.html#addChild": {
                "ref": "Polygon.html#addChild",
                "tf": 12.5
              },
              "Vector2.html#add": {
                "ref": "Vector2.html#add",
                "tf": 16.666666666666664
              },
              "Vector2.html#addX": {
                "ref": "Vector2.html#addX",
                "tf": 10
              },
              "Vector2.html#addY": {
                "ref": "Vector2.html#addY",
                "tf": 10
              }
            },
            "d": {
              "docs": {
                "Circle.html#addVertex": {
                  "ref": "Circle.html#addVertex",
                  "tf": 12.5
                },
                "Rect.html#addVertex": {
                  "ref": "Rect.html#addVertex",
                  "tf": 12.5
                },
                "Polygon.html#addVertex": {
                  "ref": "Polygon.html#addVertex",
                  "tf": 12.5
                },
                "Vector2.html#add": {
                  "ref": "Vector2.html#add",
                  "tf": 675
                }
              },
              "c": {
                "docs": {},
                "h": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Circle.html#addChild": {
                            "ref": "Circle.html#addChild",
                            "tf": 683.3333333333334
                          },
                          "Rect.html#addChild": {
                            "ref": "Rect.html#addChild",
                            "tf": 683.3333333333334
                          },
                          "Polygon.html#addChild": {
                            "ref": "Polygon.html#addChild",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "x": {
                          "docs": {
                            "Circle.html#addVertex": {
                              "ref": "Circle.html#addVertex",
                              "tf": 683.3333333333334
                            },
                            "Rect.html#addVertex": {
                              "ref": "Rect.html#addVertex",
                              "tf": 683.3333333333334
                            },
                            "Polygon.html#addVertex": {
                              "ref": "Polygon.html#addVertex",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "x": {
                "docs": {
                  "Vector2.html#addX": {
                    "ref": "Vector2.html#addX",
                    "tf": 683.3333333333334
                  }
                }
              },
              "i": {
                "docs": {
                  "Vector2.html#addY": {
                    "ref": "Vector2.html#addY",
                    "tf": 683.3333333333334
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "p": {
              "docs": {},
              "r": {
                "docs": {},
                "o": {
                  "docs": {},
                  "x": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "Vector2.html#approximated": {
                            "ref": "Vector2.html#approximated",
                            "tf": 691.6666666666667
                          },
                          "Vector2.html#approximate": {
                            "ref": "Vector2.html#approximate",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "i": {
              "docs": {},
              "a": {
                "docs": {
                  "Vector2.html#norm": {
                    "ref": "Vector2.html#norm",
                    "tf": 25
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "g": {
              "docs": {},
              "l": {
                "docs": {
                  "Vector2.html#rotate": {
                    "ref": "Vector2.html#rotate",
                    "tf": 43.33333333333333
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "Circle.html#region": {
                "ref": "Circle.html#region",
                "tf": 3.8461538461538463
              },
              "Rect.html#region": {
                "ref": "Rect.html#region",
                "tf": 3.8461538461538463
              },
              "Polygon.html#region": {
                "ref": "Polygon.html#region",
                "tf": 3.8461538461538463
              },
              "Vector2.html#approximated": {
                "ref": "Vector2.html#approximated",
                "tf": 8.333333333333332
              }
            }
          },
          "n": {
            "docs": {},
            "i": {
              "docs": {},
              "o": {
                "docs": {},
                "n": {
                  "docs": {
                    "Circle.html#union": {
                      "ref": "Circle.html#union",
                      "tf": 691.6666666666667
                    },
                    "Rect.html#union": {
                      "ref": "Rect.html#union",
                      "tf": 691.6666666666667
                    },
                    "Polygon.html#union": {
                      "ref": "Polygon.html#union",
                      "tf": 691.6666666666667
                    },
                    "Polygon.html#.Union": {
                      "ref": "Polygon.html#.Union",
                      "tf": 677.1428571428571
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "Vector2.html#.LerpUnclamped": {
                          "ref": "Vector2.html#.LerpUnclamped",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "x": {
          "docs": {
            "Circle.html#region": {
              "ref": "Circle.html#region",
              "tf": 7.6923076923076925
            },
            "Rect.html#region": {
              "ref": "Rect.html#region",
              "tf": 7.6923076923076925
            },
            "Polygon.html#region": {
              "ref": "Polygon.html#region",
              "tf": 7.6923076923076925
            },
            "Vector2.html#equalsX": {
              "ref": "Vector2.html#equalsX",
              "tf": 10
            },
            "Vector2.html#floorX": {
              "ref": "Vector2.html#floorX",
              "tf": 12.5
            },
            "Vector2.html#ceilX": {
              "ref": "Vector2.html#ceilX",
              "tf": 12.5
            },
            "Vector2.html#roundX": {
              "ref": "Vector2.html#roundX",
              "tf": 12.5
            },
            "Vector2.html#setX": {
              "ref": "Vector2.html#setX",
              "tf": 12.5
            },
            "Vector2.html#addX": {
              "ref": "Vector2.html#addX",
              "tf": 10
            },
            "Vector2.html#substractX": {
              "ref": "Vector2.html#substractX",
              "tf": 10
            },
            "Vector2.html#substractY": {
              "ref": "Vector2.html#substractY",
              "tf": 10
            },
            "Vector2.html#multiplyX": {
              "ref": "Vector2.html#multiplyX",
              "tf": 10
            },
            "Vector2.html#divideX": {
              "ref": "Vector2.html#divideX",
              "tf": 10
            },
            "Vector2.html#divideY": {
              "ref": "Vector2.html#divideY",
              "tf": 10
            },
            "Vector2.html#invertX": {
              "ref": "Vector2.html#invertX",
              "tf": 12.5
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {
                "Circle.html#xor": {
                  "ref": "Circle.html#xor",
                  "tf": 691.6666666666667
                },
                "Rect.html#xor": {
                  "ref": "Rect.html#xor",
                  "tf": 691.6666666666667
                },
                "Polygon.html#xor": {
                  "ref": "Polygon.html#xor",
                  "tf": 691.6666666666667
                },
                "Polygon.html#.Xor": {
                  "ref": "Polygon.html#.Xor",
                  "tf": 677.1428571428571
                }
              }
            }
          }
        },
        "y": {
          "docs": {
            "Circle.html#region": {
              "ref": "Circle.html#region",
              "tf": 7.6923076923076925
            },
            "Rect.html#region": {
              "ref": "Rect.html#region",
              "tf": 7.6923076923076925
            },
            "Polygon.html#region": {
              "ref": "Polygon.html#region",
              "tf": 7.6923076923076925
            },
            "Vector2.html#equalsY": {
              "ref": "Vector2.html#equalsY",
              "tf": 10
            },
            "Vector2.html#floorY": {
              "ref": "Vector2.html#floorY",
              "tf": 12.5
            },
            "Vector2.html#ceilY": {
              "ref": "Vector2.html#ceilY",
              "tf": 12.5
            },
            "Vector2.html#roundY": {
              "ref": "Vector2.html#roundY",
              "tf": 12.5
            },
            "Vector2.html#setY": {
              "ref": "Vector2.html#setY",
              "tf": 12.5
            },
            "Vector2.html#addY": {
              "ref": "Vector2.html#addY",
              "tf": 10
            },
            "Vector2.html#multiplyY": {
              "ref": "Vector2.html#multiplyY",
              "tf": 10
            },
            "Vector2.html#invertY": {
              "ref": "Vector2.html#invertY",
              "tf": 12.5
            }
          }
        },
        "b": {
          "docs": {},
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Circle.html#pointIsInside": {
                          "ref": "Circle.html#pointIsInside",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#pointIsInsidePolygon": {
                          "ref": "Circle.html#pointIsInsidePolygon",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#pointIsInsideCircle": {
                          "ref": "Circle.html#pointIsInsideCircle",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#colliding": {
                          "ref": "Circle.html#colliding",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#intersect": {
                          "ref": "Circle.html#intersect",
                          "tf": 8.333333333333332
                        },
                        "Circle.html#difference": {
                          "ref": "Circle.html#difference",
                          "tf": 8.333333333333332
                        },
                        "Circle.html#union": {
                          "ref": "Circle.html#union",
                          "tf": 8.333333333333332
                        },
                        "Circle.html#xor": {
                          "ref": "Circle.html#xor",
                          "tf": 8.333333333333332
                        },
                        "Rect.html#pointIsInside": {
                          "ref": "Rect.html#pointIsInside",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#pointIsInsideRect": {
                          "ref": "Rect.html#pointIsInsideRect",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#pointIsInsidePolygon": {
                          "ref": "Rect.html#pointIsInsidePolygon",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#colliding": {
                          "ref": "Rect.html#colliding",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#intersect": {
                          "ref": "Rect.html#intersect",
                          "tf": 8.333333333333332
                        },
                        "Rect.html#difference": {
                          "ref": "Rect.html#difference",
                          "tf": 8.333333333333332
                        },
                        "Rect.html#union": {
                          "ref": "Rect.html#union",
                          "tf": 8.333333333333332
                        },
                        "Rect.html#xor": {
                          "ref": "Rect.html#xor",
                          "tf": 8.333333333333332
                        },
                        "Polygon.html#pointIsInside": {
                          "ref": "Polygon.html#pointIsInside",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#pointIsInsidePolygon": {
                          "ref": "Polygon.html#pointIsInsidePolygon",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#colliding": {
                          "ref": "Polygon.html#colliding",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#intersect": {
                          "ref": "Polygon.html#intersect",
                          "tf": 8.333333333333332
                        },
                        "Polygon.html#difference": {
                          "ref": "Polygon.html#difference",
                          "tf": 8.333333333333332
                        },
                        "Polygon.html#union": {
                          "ref": "Polygon.html#union",
                          "tf": 8.333333333333332
                        },
                        "Polygon.html#xor": {
                          "ref": "Polygon.html#xor",
                          "tf": 8.333333333333332
                        },
                        "Polygon.html#.Colliding": {
                          "ref": "Polygon.html#.Colliding",
                          "tf": 20
                        },
                        "Polygon.html#.Intersect": {
                          "ref": "Polygon.html#.Intersect",
                          "tf": 7.142857142857142
                        },
                        "Polygon.html#.Union": {
                          "ref": "Polygon.html#.Union",
                          "tf": 7.142857142857142
                        },
                        "Polygon.html#.Difference": {
                          "ref": "Polygon.html#.Difference",
                          "tf": 7.142857142857142
                        },
                        "Polygon.html#.Xor": {
                          "ref": "Polygon.html#.Xor",
                          "tf": 7.142857142857142
                        },
                        "Vector2.html#equalsX": {
                          "ref": "Vector2.html#equalsX",
                          "tf": 33.33333333333333
                        },
                        "Vector2.html#equalsY": {
                          "ref": "Vector2.html#equalsY",
                          "tf": 33.33333333333333
                        },
                        "Vector2.html#isInside": {
                          "ref": "Vector2.html#isInside",
                          "tf": 33.33333333333333
                        },
                        "Vector2.html#equals": {
                          "ref": "Vector2.html#equals",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              }
            },
            "x": {
              "docs": {
                "Rect.html#.Box": {
                  "ref": "Rect.html#.Box",
                  "tf": 691.6666666666666
                }
              }
            },
            "t": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Vector2.html#.Bottom": {
                        "ref": "Vector2.html#.Bottom",
                        "tf": 708.3333333333334
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "w": {
                "docs": {},
                "e": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Vector2.html#.Distance": {
                          "ref": "Vector2.html#.Distance",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "p": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Circle.html#pointIsInside": {
                          "ref": "Circle.html#pointIsInside",
                          "tf": 10
                        },
                        "Rect.html#pointIsInside": {
                          "ref": "Rect.html#pointIsInside",
                          "tf": 10
                        },
                        "Polygon.html#pointIsInside": {
                          "ref": "Polygon.html#pointIsInside",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "Circle.html#setChildren": {
                    "ref": "Circle.html#setChildren",
                    "tf": 12.5
                  },
                  "Circle.html#addChild": {
                    "ref": "Circle.html#addChild",
                    "tf": 12.5
                  },
                  "Rect.html#setChildren": {
                    "ref": "Rect.html#setChildren",
                    "tf": 12.5
                  },
                  "Rect.html#addChild": {
                    "ref": "Rect.html#addChild",
                    "tf": 12.5
                  },
                  "Polygon.html#setChildren": {
                    "ref": "Polygon.html#setChildren",
                    "tf": 12.5
                  },
                  "Polygon.html#addChild": {
                    "ref": "Polygon.html#addChild",
                    "tf": 12.5
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {
                "Circle.html#addVertex": {
                  "ref": "Circle.html#addVertex",
                  "tf": 12.5
                },
                "Rect.html#addVertex": {
                  "ref": "Rect.html#addVertex",
                  "tf": 12.5
                },
                "Polygon.html#addVertex": {
                  "ref": "Polygon.html#addVertex",
                  "tf": 12.5
                }
              }
            }
          },
          "q": {
            "docs": {},
            "u": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "Vector2.html#equalsX": {
                      "ref": "Vector2.html#equalsX",
                      "tf": 10
                    },
                    "Vector2.html#equalsY": {
                      "ref": "Vector2.html#equalsY",
                      "tf": 10
                    },
                    "Vector2.html#equals": {
                      "ref": "Vector2.html#equals",
                      "tf": 691.6666666666666
                    }
                  },
                  "s": {
                    "docs": {},
                    "x": {
                      "docs": {
                        "Vector2.html#equalsX": {
                          "ref": "Vector2.html#equalsX",
                          "tf": 683.3333333333334
                        }
                      }
                    },
                    "i": {
                      "docs": {
                        "Vector2.html#equalsY": {
                          "ref": "Vector2.html#equalsY",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "e": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Vector2.html#.IsVector2Like": {
                          "ref": "Vector2.html#.IsVector2Like",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "z": {
          "docs": {},
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {
                  "Vector2.html#.Zero": {
                    "ref": "Vector2.html#.Zero",
                    "tf": 708.3333333333334
                  },
                  "Vector2.html#rotate": {
                    "ref": "Vector2.html#rotate",
                    "tf": 10
                  }
                }
              }
            }
          }
        }
      },
      "length": 853
    },
    "corpusTokens": [
      "ad",
      "add",
      "addchild",
      "addi",
      "addvertex",
      "addx",
      "alia",
      "angl",
      "approxim",
      "area",
      "around",
      "array",
      "array.&lt;polygon&gt",
      "arround",
      "between",
      "boolean",
      "bottom",
      "box",
      "ceil",
      "ceili",
      "ceilx",
      "center",
      "check",
      "child",
      "children",
      "circl",
      "circle#addchild",
      "circle#addvertex",
      "circle#area",
      "circle#cent",
      "circle#collid",
      "circle#differ",
      "circle#intersect",
      "circle#lin",
      "circle#point",
      "circle#pointisinsid",
      "circle#pointisinsidecircl",
      "circle#pointisinsidepolygon",
      "circle#radiu",
      "circle#region",
      "circle#setchildren",
      "circle#setvertex",
      "circle#sid",
      "circle#union",
      "circle#xor",
      "class",
      "clone",
      "collid",
      "convert",
      "correspond",
      "count",
      "current",
      "differ",
      "distanc",
      "divid",
      "dividex",
      "dividey",
      "divind",
      "document",
      "doubl",
      "duplic",
      "element",
      "end",
      "equal",
      "equalsi",
      "equalsx",
      "fals",
      "floor",
      "floori",
      "floorx",
      "fromregion",
      "function",
      "geojson",
      "get",
      "given",
      "global",
      "hole",
      "index",
      "insid",
      "intersect",
      "invert",
      "inverti",
      "invertx",
      "isinsid",
      "isvector2lik",
      "js",
      "json",
      "l1",
      "l2",
      "left",
      "length",
      "lerp",
      "lerpunclamp",
      "level",
      "line",
      "line#intersect",
      "line#length",
      "line.intersect",
      "list",
      "list:class",
      "lt;readonly&gt",
      "lt;static&gt",
      "magnitud",
      "max",
      "member",
      "min",
      "multipli",
      "multiplyi",
      "multiplyx",
      "new",
      "norm",
      "normal",
      "number",
      "on",
      "oper",
      "p",
      "p1",
      "p2",
      "pass",
      "plugin",
      "point",
      "pointisinsid",
      "pointisinsidecircl",
      "pointisinsidepolygon",
      "pointisinsiderect",
      "polyboolj",
      "polygon",
      "polygon#addchild",
      "polygon#addvertex",
      "polygon#area",
      "polygon#collid",
      "polygon#differ",
      "polygon#intersect",
      "polygon#lin",
      "polygon#point",
      "polygon#pointisinsid",
      "polygon#pointisinsidepolygon",
      "polygon#region",
      "polygon#setchildren",
      "polygon#setvertex",
      "polygon#union",
      "polygon#xor",
      "polygon.collid",
      "polygon.differ",
      "polygon.fromregion",
      "polygon.intersect",
      "polygon.union",
      "polygon.xor",
      "posit",
      "radiu",
      "readm",
      "rect",
      "rect#addchild",
      "rect#addvertex",
      "rect#area",
      "rect#collid",
      "rect#differ",
      "rect#intersect",
      "rect#lin",
      "rect#point",
      "rect#pointisinsid",
      "rect#pointisinsidepolygon",
      "rect#pointisinsiderect",
      "rect#posit",
      "rect#region",
      "rect#setchildren",
      "rect#setvertex",
      "rect#siz",
      "rect#union",
      "rect#xor",
      "rect.box",
      "region",
      "remov",
      "return",
      "right",
      "rotat",
      "round",
      "roundi",
      "roundx",
      "set",
      "setchildren",
      "seti",
      "setvertex",
      "setx",
      "side",
      "size",
      "slydock/poli",
      "start",
      "string",
      "subject",
      "substract",
      "substracti",
      "substractx",
      "t",
      "test",
      "time",
      "top",
      "tostr",
      "two",
      "unclamp",
      "union",
      "us",
      "v",
      "v1",
      "v2",
      "valu",
      "vector2",
      "vector2#add",
      "vector2#addi",
      "vector2#addx",
      "vector2#approxim",
      "vector2#ceil",
      "vector2#ceili",
      "vector2#ceilx",
      "vector2#clon",
      "vector2#divid",
      "vector2#dividex",
      "vector2#dividey",
      "vector2#equ",
      "vector2#equalsi",
      "vector2#equalsx",
      "vector2#floor",
      "vector2#floori",
      "vector2#floorx",
      "vector2#invert",
      "vector2#inverti",
      "vector2#invertx",
      "vector2#isinsid",
      "vector2#magnitud",
      "vector2#multipli",
      "vector2#multiplyi",
      "vector2#multiplyx",
      "vector2#norm",
      "vector2#rot",
      "vector2#round",
      "vector2#roundi",
      "vector2#roundx",
      "vector2#set",
      "vector2#seti",
      "vector2#setx",
      "vector2#substract",
      "vector2#substracti",
      "vector2#substractx",
      "vector2#tostr",
      "vector2.bottom",
      "vector2.dist",
      "vector2.isvector2lik",
      "vector2.left",
      "vector2.lerp",
      "vector2.lerpunclamp",
      "vector2.max",
      "vector2.min",
      "vector2.right",
      "vector2.top",
      "vector2.zero",
      "vector2|fals",
      "version",
      "vertic",
      "wrapper",
      "x",
      "xor",
      "y",
      "zero"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "@slydock/poly-js",
      "longname": "index",
      "name": "@slydock/poly-js",
      "tags": "index",
      "summary": "Polygon operations",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "Line.html": {
      "id": "Line.html",
      "kind": "class",
      "title": "Line",
      "longname": "Line",
      "name": "Line",
      "tags": "Line",
      "summary": "",
      "description": "Line Class",
      "body": ""
    },
    "Line.html#length": {
      "id": "Line.html#length",
      "kind": "member",
      "title": "&lt;readonly&gt; length :Number",
      "longname": "Line#length",
      "name": "length",
      "tags": "Line#length length",
      "summary": "",
      "description": ""
    },
    "Line.html#intersect": {
      "id": "Line.html#intersect",
      "kind": "function",
      "title": "intersect( line )",
      "longname": "Line#intersect",
      "name": "intersect",
      "tags": "Line#intersect intersect",
      "summary": "",
      "description": "Get the intersection of this line with an other one Return false if lines does not intersect"
    },
    "Line.html#.Intersect": {
      "id": "Line.html#.Intersect",
      "kind": "function",
      "title": "&lt;static&gt; Intersect( l1, l2 )",
      "longname": "Line.Intersect",
      "name": "Intersect",
      "tags": "Line.Intersect Intersect",
      "summary": "",
      "description": "Get the intersection of two lines Return false if lines does not intersect"
    },
    "Circle.html": {
      "id": "Circle.html",
      "kind": "class",
      "title": "Circle",
      "longname": "Circle",
      "name": "Circle",
      "tags": "Circle",
      "summary": "",
      "description": "Circle Class",
      "body": ""
    },
    "Circle.html#sides": {
      "id": "Circle.html#sides",
      "kind": "member",
      "title": "sides :Number",
      "longname": "Circle#sides",
      "name": "sides",
      "tags": "Circle#sides sides",
      "summary": "",
      "description": "Sides count of the circle"
    },
    "Circle.html#center": {
      "id": "Circle.html#center",
      "kind": "member",
      "title": "center :Vector2",
      "longname": "Circle#center",
      "name": "center",
      "tags": "Circle#center center",
      "summary": "",
      "description": "Center of the circle"
    },
    "Circle.html#radius": {
      "id": "Circle.html#radius",
      "kind": "member",
      "title": "radius :Number",
      "longname": "Circle#radius",
      "name": "radius",
      "tags": "Circle#radius radius",
      "summary": "",
      "description": "Radius of the circle"
    },
    "Circle.html#region": {
      "id": "Circle.html#region",
      "kind": "member",
      "title": "region",
      "longname": "Circle#region",
      "name": "region",
      "tags": "Circle#region region",
      "summary": "",
      "description": "Get region for polybooljs plugin, can be also be used for GeoJson Return a double level array ([[x, y], [x, y], ...])"
    },
    "Circle.html#points": {
      "id": "Circle.html#points",
      "kind": "member",
      "title": "points",
      "longname": "Circle#points",
      "name": "points",
      "tags": "Circle#points points",
      "summary": "",
      "description": "Get points of the Polygon"
    },
    "Circle.html#lines": {
      "id": "Circle.html#lines",
      "kind": "member",
      "title": "lines",
      "longname": "Circle#lines",
      "name": "lines",
      "tags": "Circle#lines lines",
      "summary": "",
      "description": "Get lines of the Polygon"
    },
    "Circle.html#area": {
      "id": "Circle.html#area",
      "kind": "member",
      "title": "area",
      "longname": "Circle#area",
      "name": "area",
      "tags": "Circle#area area",
      "summary": "",
      "description": "Get area of the Polygon"
    },
    "Circle.html#pointIsInside": {
      "id": "Circle.html#pointIsInside",
      "kind": "function",
      "title": "pointIsInside( point ) → {boolean}",
      "longname": "Circle#pointIsInside",
      "name": "pointIsInside",
      "tags": "Circle#pointIsInside pointIsInside",
      "summary": "",
      "description": "Wrapper for checking if point is inside a circle"
    },
    "Circle.html#pointIsInsidePolygon": {
      "id": "Circle.html#pointIsInsidePolygon",
      "kind": "function",
      "title": "pointIsInsidePolygon( point ) → {boolean}",
      "longname": "Circle#pointIsInsidePolygon",
      "name": "pointIsInsidePolygon",
      "tags": "Circle#pointIsInsidePolygon pointIsInsidePolygon",
      "summary": "",
      "description": "Checking if point is inside a polygon"
    },
    "Circle.html#pointIsInsideCircle": {
      "id": "Circle.html#pointIsInsideCircle",
      "kind": "function",
      "title": "pointIsInsideCircle( point ) → {Boolean}",
      "longname": "Circle#pointIsInsideCircle",
      "name": "pointIsInsideCircle",
      "tags": "Circle#pointIsInsideCircle pointIsInsideCircle",
      "summary": "",
      "description": "Check if a point is inside a Circle"
    },
    "Circle.html#setChildren": {
      "id": "Circle.html#setChildren",
      "kind": "function",
      "title": "setChildren( polygons ) → {Polygon}",
      "longname": "Circle#setChildren",
      "name": "setChildren",
      "tags": "Circle#setChildren setChildren",
      "summary": "",
      "description": "Setting all children polygons (for holes)"
    },
    "Circle.html#addChild": {
      "id": "Circle.html#addChild",
      "kind": "function",
      "title": "addChild( polygon ) → {Polygon}",
      "longname": "Circle#addChild",
      "name": "addChild",
      "tags": "Circle#addChild addChild",
      "summary": "",
      "description": "Adding a child polygon (for hole)"
    },
    "Circle.html#setVertexes": {
      "id": "Circle.html#setVertexes",
      "kind": "function",
      "title": "setVertexes( vertices ) → {Polygon}",
      "longname": "Circle#setVertexes",
      "name": "setVertexes",
      "tags": "Circle#setVertexes setVertexes",
      "summary": "",
      "description": "Setting vertices of the polygon"
    },
    "Circle.html#addVertex": {
      "id": "Circle.html#addVertex",
      "kind": "function",
      "title": "addVertex( vertice ) → {Polygon}",
      "longname": "Circle#addVertex",
      "name": "addVertex",
      "tags": "Circle#addVertex addVertex",
      "summary": "",
      "description": "Add a new vertices to the end"
    },
    "Circle.html#colliding": {
      "id": "Circle.html#colliding",
      "kind": "function",
      "title": "colliding( polygon ) → {Boolean}",
      "longname": "Circle#colliding",
      "name": "colliding",
      "tags": "Circle#colliding colliding",
      "summary": "",
      "description": "Is the current polygon colliding with the given polygon"
    },
    "Circle.html#intersect": {
      "id": "Circle.html#intersect",
      "kind": "function",
      "title": "intersect( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Circle#intersect",
      "name": "intersect",
      "tags": "Circle#intersect intersect",
      "summary": "",
      "description": "Intersect boolean operation on this polygon with the given polygon"
    },
    "Circle.html#difference": {
      "id": "Circle.html#difference",
      "kind": "function",
      "title": "difference( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Circle#difference",
      "name": "difference",
      "tags": "Circle#difference difference",
      "summary": "",
      "description": "Difference boolean operation on this polygon with the given polygon"
    },
    "Circle.html#union": {
      "id": "Circle.html#union",
      "kind": "function",
      "title": "union( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Circle#union",
      "name": "union",
      "tags": "Circle#union union",
      "summary": "",
      "description": "Union boolean operation on this polygon with the given polygon"
    },
    "Circle.html#xor": {
      "id": "Circle.html#xor",
      "kind": "function",
      "title": "xor( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Circle#xor",
      "name": "xor",
      "tags": "Circle#xor xor",
      "summary": "",
      "description": "Xor boolean operation on this polygon with the given polygon"
    },
    "Rect.html": {
      "id": "Rect.html",
      "kind": "class",
      "title": "Rect",
      "longname": "Rect",
      "name": "Rect",
      "tags": "Rect",
      "summary": "",
      "description": "Rect Class",
      "body": ""
    },
    "Rect.html#position": {
      "id": "Rect.html#position",
      "kind": "member",
      "title": "position :Vector2",
      "longname": "Rect#position",
      "name": "position",
      "tags": "Rect#position position",
      "summary": "",
      "description": "The start position of the rect"
    },
    "Rect.html#size": {
      "id": "Rect.html#size",
      "kind": "member",
      "title": "size :Vector2",
      "longname": "Rect#size",
      "name": "size",
      "tags": "Rect#size size",
      "summary": "",
      "description": "The size of the rect"
    },
    "Rect.html#region": {
      "id": "Rect.html#region",
      "kind": "member",
      "title": "region",
      "longname": "Rect#region",
      "name": "region",
      "tags": "Rect#region region",
      "summary": "",
      "description": "Get region for polybooljs plugin, can be also be used for GeoJson Return a double level array ([[x, y], [x, y], ...])"
    },
    "Rect.html#points": {
      "id": "Rect.html#points",
      "kind": "member",
      "title": "points",
      "longname": "Rect#points",
      "name": "points",
      "tags": "Rect#points points",
      "summary": "",
      "description": "Get points of the Polygon"
    },
    "Rect.html#lines": {
      "id": "Rect.html#lines",
      "kind": "member",
      "title": "lines",
      "longname": "Rect#lines",
      "name": "lines",
      "tags": "Rect#lines lines",
      "summary": "",
      "description": "Get lines of the Polygon"
    },
    "Rect.html#area": {
      "id": "Rect.html#area",
      "kind": "member",
      "title": "area",
      "longname": "Rect#area",
      "name": "area",
      "tags": "Rect#area area",
      "summary": "",
      "description": "Get area of the Polygon"
    },
    "Rect.html#pointIsInside": {
      "id": "Rect.html#pointIsInside",
      "kind": "function",
      "title": "pointIsInside( point ) → {boolean}",
      "longname": "Rect#pointIsInside",
      "name": "pointIsInside",
      "tags": "Rect#pointIsInside pointIsInside",
      "summary": "",
      "description": "Wrapper for checking if point is inside a rect"
    },
    "Rect.html#pointIsInsideRect": {
      "id": "Rect.html#pointIsInsideRect",
      "kind": "function",
      "title": "pointIsInsideRect( point ) → {Boolean}",
      "longname": "Rect#pointIsInsideRect",
      "name": "pointIsInsideRect",
      "tags": "Rect#pointIsInsideRect pointIsInsideRect",
      "summary": "",
      "description": "Check if a point is inside a Rect"
    },
    "Rect.html#pointIsInsidePolygon": {
      "id": "Rect.html#pointIsInsidePolygon",
      "kind": "function",
      "title": "pointIsInsidePolygon( point ) → {boolean}",
      "longname": "Rect#pointIsInsidePolygon",
      "name": "pointIsInsidePolygon",
      "tags": "Rect#pointIsInsidePolygon pointIsInsidePolygon",
      "summary": "",
      "description": "Checking if point is inside a polygon"
    },
    "Rect.html#setChildren": {
      "id": "Rect.html#setChildren",
      "kind": "function",
      "title": "setChildren( polygons ) → {Polygon}",
      "longname": "Rect#setChildren",
      "name": "setChildren",
      "tags": "Rect#setChildren setChildren",
      "summary": "",
      "description": "Setting all children polygons (for holes)"
    },
    "Rect.html#addChild": {
      "id": "Rect.html#addChild",
      "kind": "function",
      "title": "addChild( polygon ) → {Polygon}",
      "longname": "Rect#addChild",
      "name": "addChild",
      "tags": "Rect#addChild addChild",
      "summary": "",
      "description": "Adding a child polygon (for hole)"
    },
    "Rect.html#setVertexes": {
      "id": "Rect.html#setVertexes",
      "kind": "function",
      "title": "setVertexes( vertices ) → {Polygon}",
      "longname": "Rect#setVertexes",
      "name": "setVertexes",
      "tags": "Rect#setVertexes setVertexes",
      "summary": "",
      "description": "Setting vertices of the polygon"
    },
    "Rect.html#addVertex": {
      "id": "Rect.html#addVertex",
      "kind": "function",
      "title": "addVertex( vertice ) → {Polygon}",
      "longname": "Rect#addVertex",
      "name": "addVertex",
      "tags": "Rect#addVertex addVertex",
      "summary": "",
      "description": "Add a new vertices to the end"
    },
    "Rect.html#.Box": {
      "id": "Rect.html#.Box",
      "kind": "function",
      "title": "&lt;static&gt; Box( p ) → {Rect}",
      "longname": "Rect.Box",
      "name": "Box",
      "tags": "Rect.Box Box",
      "summary": "",
      "description": "Get the box around a polygon"
    },
    "Rect.html#colliding": {
      "id": "Rect.html#colliding",
      "kind": "function",
      "title": "colliding( polygon ) → {Boolean}",
      "longname": "Rect#colliding",
      "name": "colliding",
      "tags": "Rect#colliding colliding",
      "summary": "",
      "description": "Is the current polygon colliding with the given polygon"
    },
    "Rect.html#intersect": {
      "id": "Rect.html#intersect",
      "kind": "function",
      "title": "intersect( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Rect#intersect",
      "name": "intersect",
      "tags": "Rect#intersect intersect",
      "summary": "",
      "description": "Intersect boolean operation on this polygon with the given polygon"
    },
    "Rect.html#difference": {
      "id": "Rect.html#difference",
      "kind": "function",
      "title": "difference( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Rect#difference",
      "name": "difference",
      "tags": "Rect#difference difference",
      "summary": "",
      "description": "Difference boolean operation on this polygon with the given polygon"
    },
    "Rect.html#union": {
      "id": "Rect.html#union",
      "kind": "function",
      "title": "union( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Rect#union",
      "name": "union",
      "tags": "Rect#union union",
      "summary": "",
      "description": "Union boolean operation on this polygon with the given polygon"
    },
    "Rect.html#xor": {
      "id": "Rect.html#xor",
      "kind": "function",
      "title": "xor( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Rect#xor",
      "name": "xor",
      "tags": "Rect#xor xor",
      "summary": "",
      "description": "Xor boolean operation on this polygon with the given polygon"
    },
    "Polygon.html": {
      "id": "Polygon.html",
      "kind": "class",
      "title": "Polygon",
      "longname": "Polygon",
      "name": "Polygon",
      "tags": "Polygon",
      "summary": "",
      "description": "Polygon Class",
      "body": ""
    },
    "Polygon.html#region": {
      "id": "Polygon.html#region",
      "kind": "member",
      "title": "region",
      "longname": "Polygon#region",
      "name": "region",
      "tags": "Polygon#region region",
      "summary": "",
      "description": "Get region for polybooljs plugin, can be also be used for GeoJson Return a double level array ([[x, y], [x, y], ...])"
    },
    "Polygon.html#points": {
      "id": "Polygon.html#points",
      "kind": "member",
      "title": "points",
      "longname": "Polygon#points",
      "name": "points",
      "tags": "Polygon#points points",
      "summary": "",
      "description": "Get points of the Polygon"
    },
    "Polygon.html#lines": {
      "id": "Polygon.html#lines",
      "kind": "member",
      "title": "lines",
      "longname": "Polygon#lines",
      "name": "lines",
      "tags": "Polygon#lines lines",
      "summary": "",
      "description": "Get lines of the Polygon"
    },
    "Polygon.html#area": {
      "id": "Polygon.html#area",
      "kind": "member",
      "title": "area",
      "longname": "Polygon#area",
      "name": "area",
      "tags": "Polygon#area area",
      "summary": "",
      "description": "Get area of the Polygon"
    },
    "Polygon.html#pointIsInside": {
      "id": "Polygon.html#pointIsInside",
      "kind": "function",
      "title": "pointIsInside( point ) → {boolean}",
      "longname": "Polygon#pointIsInside",
      "name": "pointIsInside",
      "tags": "Polygon#pointIsInside pointIsInside",
      "summary": "",
      "description": "Wrapper for checking if point is inside a polygon"
    },
    "Polygon.html#pointIsInsidePolygon": {
      "id": "Polygon.html#pointIsInsidePolygon",
      "kind": "function",
      "title": "pointIsInsidePolygon( point ) → {boolean}",
      "longname": "Polygon#pointIsInsidePolygon",
      "name": "pointIsInsidePolygon",
      "tags": "Polygon#pointIsInsidePolygon pointIsInsidePolygon",
      "summary": "",
      "description": "Checking if point is inside a polygon"
    },
    "Polygon.html#setChildren": {
      "id": "Polygon.html#setChildren",
      "kind": "function",
      "title": "setChildren( polygons ) → {Polygon}",
      "longname": "Polygon#setChildren",
      "name": "setChildren",
      "tags": "Polygon#setChildren setChildren",
      "summary": "",
      "description": "Setting all children polygons (for holes)"
    },
    "Polygon.html#addChild": {
      "id": "Polygon.html#addChild",
      "kind": "function",
      "title": "addChild( polygon ) → {Polygon}",
      "longname": "Polygon#addChild",
      "name": "addChild",
      "tags": "Polygon#addChild addChild",
      "summary": "",
      "description": "Adding a child polygon (for hole)"
    },
    "Polygon.html#setVertexes": {
      "id": "Polygon.html#setVertexes",
      "kind": "function",
      "title": "setVertexes( vertices ) → {Polygon}",
      "longname": "Polygon#setVertexes",
      "name": "setVertexes",
      "tags": "Polygon#setVertexes setVertexes",
      "summary": "",
      "description": "Setting vertices of the polygon"
    },
    "Polygon.html#addVertex": {
      "id": "Polygon.html#addVertex",
      "kind": "function",
      "title": "addVertex( vertice ) → {Polygon}",
      "longname": "Polygon#addVertex",
      "name": "addVertex",
      "tags": "Polygon#addVertex addVertex",
      "summary": "",
      "description": "Add a new vertices to the end"
    },
    "Polygon.html#colliding": {
      "id": "Polygon.html#colliding",
      "kind": "function",
      "title": "colliding( polygon ) → {Boolean}",
      "longname": "Polygon#colliding",
      "name": "colliding",
      "tags": "Polygon#colliding colliding",
      "summary": "",
      "description": "Is the current polygon colliding with the given polygon"
    },
    "Polygon.html#intersect": {
      "id": "Polygon.html#intersect",
      "kind": "function",
      "title": "intersect( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon#intersect",
      "name": "intersect",
      "tags": "Polygon#intersect intersect",
      "summary": "",
      "description": "Intersect boolean operation on this polygon with the given polygon"
    },
    "Polygon.html#difference": {
      "id": "Polygon.html#difference",
      "kind": "function",
      "title": "difference( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon#difference",
      "name": "difference",
      "tags": "Polygon#difference difference",
      "summary": "",
      "description": "Difference boolean operation on this polygon with the given polygon"
    },
    "Polygon.html#union": {
      "id": "Polygon.html#union",
      "kind": "function",
      "title": "union( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon#union",
      "name": "union",
      "tags": "Polygon#union union",
      "summary": "",
      "description": "Union boolean operation on this polygon with the given polygon"
    },
    "Polygon.html#xor": {
      "id": "Polygon.html#xor",
      "kind": "function",
      "title": "xor( polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon#xor",
      "name": "xor",
      "tags": "Polygon#xor xor",
      "summary": "",
      "description": "Xor boolean operation on this polygon with the given polygon"
    },
    "Polygon.html#.Colliding": {
      "id": "Polygon.html#.Colliding",
      "kind": "function",
      "title": "&lt;static&gt; Colliding( p1, p2 ) → {Boolean}",
      "longname": "Polygon.Colliding",
      "name": "Colliding",
      "tags": "Polygon.Colliding Colliding",
      "summary": "",
      "description": "Is the p1 polygon colliding with the p2 polygon"
    },
    "Polygon.html#.FromRegion": {
      "id": "Polygon.html#.FromRegion",
      "kind": "function",
      "title": "&lt;static&gt; FromRegion( region ) → {Polygon}",
      "longname": "Polygon.FromRegion",
      "name": "FromRegion",
      "tags": "Polygon.FromRegion FromRegion",
      "summary": "",
      "description": "Convert region to polygon"
    },
    "Polygon.html#.Intersect": {
      "id": "Polygon.html#.Intersect",
      "kind": "function",
      "title": "&lt;static&gt; Intersect( polygon, polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon.Intersect",
      "name": "Intersect",
      "tags": "Polygon.Intersect Intersect",
      "summary": "",
      "description": "Intersect boolean operation on the p1 polygon with the p2 polygon"
    },
    "Polygon.html#.Union": {
      "id": "Polygon.html#.Union",
      "kind": "function",
      "title": "&lt;static&gt; Union( polygon, polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon.Union",
      "name": "Union",
      "tags": "Polygon.Union Union",
      "summary": "",
      "description": "Union boolean operation on the p1 polygon with the p2 polygon"
    },
    "Polygon.html#.Difference": {
      "id": "Polygon.html#.Difference",
      "kind": "function",
      "title": "&lt;static&gt; Difference( polygon, polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon.Difference",
      "name": "Difference",
      "tags": "Polygon.Difference Difference",
      "summary": "",
      "description": "Difference boolean operation on the p1 polygon with the p2 polygon"
    },
    "Polygon.html#.Xor": {
      "id": "Polygon.html#.Xor",
      "kind": "function",
      "title": "&lt;static&gt; Xor( polygon, polygon ) → {Array.&lt;Polygon&gt;}",
      "longname": "Polygon.Xor",
      "name": "Xor",
      "tags": "Polygon.Xor Xor",
      "summary": "",
      "description": "Xor boolean operation on the p1 polygon with the p2 polygon"
    },
    "Vector2.html": {
      "id": "Vector2.html",
      "kind": "class",
      "title": "Vector2",
      "longname": "Vector2",
      "name": "Vector2",
      "tags": "Vector2",
      "summary": "",
      "description": "Vector2 Class",
      "body": ""
    },
    "Vector2.html#approximated": {
      "id": "Vector2.html#approximated",
      "kind": "member",
      "title": "&lt;readonly&gt; approximated :Vector2",
      "longname": "Vector2#approximated",
      "name": "approximated",
      "tags": "Vector2#approximated approximated",
      "summary": "",
      "description": "Approximated value of the Vector2 (used to remove duplicates)"
    },
    "Vector2.html#normalized": {
      "id": "Vector2.html#normalized",
      "kind": "member",
      "title": "&lt;readonly&gt; normalized :Vector2",
      "longname": "Vector2#normalized",
      "name": "normalized",
      "tags": "Vector2#normalized normalized",
      "summary": "",
      "description": "Normalized Vector2"
    },
    "Vector2.html#norm": {
      "id": "Vector2.html#norm",
      "kind": "member",
      "title": "&lt;readonly&gt; norm :Vector2",
      "longname": "Vector2#norm",
      "name": "norm",
      "tags": "Vector2#norm norm",
      "summary": "",
      "description": "Alias of normalized"
    },
    "Vector2.html#magnitude": {
      "id": "Vector2.html#magnitude",
      "kind": "member",
      "title": "&lt;readonly&gt; magnitude :Number",
      "longname": "Vector2#magnitude",
      "name": "magnitude",
      "tags": "Vector2#magnitude magnitude",
      "summary": "",
      "description": "Magnitude of the Vector2"
    },
    "Vector2.html#clone": {
      "id": "Vector2.html#clone",
      "kind": "member",
      "title": "&lt;readonly&gt; clone :Vector2",
      "longname": "Vector2#clone",
      "name": "clone",
      "tags": "Vector2#clone clone",
      "summary": "",
      "description": "A clone of the Vector2"
    },
    "Vector2.html#equalsX": {
      "id": "Vector2.html#equalsX",
      "kind": "function",
      "title": "equalsX( v ) → {Boolean}",
      "longname": "Vector2#equalsX",
      "name": "equalsX",
      "tags": "Vector2#equalsX equalsX",
      "summary": "",
      "description": "Test if the x value of the Vector2 is equal to an other"
    },
    "Vector2.html#equalsY": {
      "id": "Vector2.html#equalsY",
      "kind": "function",
      "title": "equalsY( v ) → {Boolean}",
      "longname": "Vector2#equalsY",
      "name": "equalsY",
      "tags": "Vector2#equalsY equalsY",
      "summary": "",
      "description": "Test if the y value of the Vector2 is equal to an other"
    },
    "Vector2.html#isInside": {
      "id": "Vector2.html#isInside",
      "kind": "function",
      "title": "isInside( polygon ) → {Boolean}",
      "longname": "Vector2#isInside",
      "name": "isInside",
      "tags": "Vector2#isInside isInside",
      "summary": "",
      "description": "Test if the current Vector2 is inside a polygon"
    },
    "Vector2.html#approximate": {
      "id": "Vector2.html#approximate",
      "kind": "function",
      "title": "approximate()",
      "longname": "Vector2#approximate",
      "name": "approximate",
      "tags": "Vector2#approximate approximate",
      "summary": "",
      "description": ""
    },
    "Vector2.html#toString": {
      "id": "Vector2.html#toString",
      "kind": "function",
      "title": "toString() → {String}",
      "longname": "Vector2#toString",
      "name": "toString",
      "tags": "Vector2#toString toString",
      "summary": "",
      "description": "Getting JSON string version of the Vector2"
    },
    "Vector2.html#.Distance": {
      "id": "Vector2.html#.Distance",
      "kind": "function",
      "title": "&lt;static&gt; Distance( v1, v2 ) → {Number}",
      "longname": "Vector2.Distance",
      "name": "Distance",
      "tags": "Vector2.Distance Distance",
      "summary": "",
      "description": "Getting the distance between two Vector2"
    },
    "Vector2.html#.Max": {
      "id": "Vector2.html#.Max",
      "kind": "function",
      "title": "&lt;static&gt; Max( v1, v2 ) → {Vector2}",
      "longname": "Vector2.Max",
      "name": "Max",
      "tags": "Vector2.Max Max",
      "summary": "",
      "description": "Getting the max values from two Vector2"
    },
    "Vector2.html#.Min": {
      "id": "Vector2.html#.Min",
      "kind": "function",
      "title": "&lt;static&gt; Min( v1, v2 ) → {Vector2}",
      "longname": "Vector2.Min",
      "name": "Min",
      "tags": "Vector2.Min Min",
      "summary": "",
      "description": "Getting the min values from two Vector2"
    },
    "Vector2.html#.Lerp": {
      "id": "Vector2.html#.Lerp",
      "kind": "function",
      "title": "&lt;static&gt; Lerp( v1, v2, t ) → {Vector2}",
      "longname": "Vector2.Lerp",
      "name": "Lerp",
      "tags": "Vector2.Lerp Lerp",
      "summary": "",
      "description": "Getting a Lerp Vector2 from v1 to v2 with t time"
    },
    "Vector2.html#.LerpUnclamped": {
      "id": "Vector2.html#.LerpUnclamped",
      "kind": "function",
      "title": "&lt;static&gt; LerpUnclamped( v1, v2, t ) → {Vector2}",
      "longname": "Vector2.LerpUnclamped",
      "name": "LerpUnclamped",
      "tags": "Vector2.LerpUnclamped LerpUnclamped",
      "summary": "",
      "description": "Getting a Lerp Vector2 from v1 to v2 with t time (Unclamped version)"
    },
    "Vector2.html#.IsVector2Like": {
      "id": "Vector2.html#.IsVector2Like",
      "kind": "function",
      "title": "&lt;static&gt; IsVector2Like( subject ) → {Vector2|false}",
      "longname": "Vector2.IsVector2Like",
      "name": "IsVector2Like",
      "tags": "Vector2.IsVector2Like IsVector2Like",
      "summary": "",
      "description": "Test if the passed element is a Vector2 like and return Vector2 corresponding, or false"
    },
    "Vector2.html#.Zero": {
      "id": "Vector2.html#.Zero",
      "kind": "function",
      "title": "&lt;static&gt; Zero() → {Vector2}",
      "longname": "Vector2.Zero",
      "name": "Zero",
      "tags": "Vector2.Zero Zero",
      "summary": "",
      "description": "A zero Vector2"
    },
    "Vector2.html#.Top": {
      "id": "Vector2.html#.Top",
      "kind": "function",
      "title": "&lt;static&gt; Top() → {Vector2}",
      "longname": "Vector2.Top",
      "name": "Top",
      "tags": "Vector2.Top Top",
      "summary": "",
      "description": "A top Vector2"
    },
    "Vector2.html#.Left": {
      "id": "Vector2.html#.Left",
      "kind": "function",
      "title": "&lt;static&gt; Left() → {Vector2}",
      "longname": "Vector2.Left",
      "name": "Left",
      "tags": "Vector2.Left Left",
      "summary": "",
      "description": "A left Vector2"
    },
    "Vector2.html#.Bottom": {
      "id": "Vector2.html#.Bottom",
      "kind": "function",
      "title": "&lt;static&gt; Bottom() → {Vector2}",
      "longname": "Vector2.Bottom",
      "name": "Bottom",
      "tags": "Vector2.Bottom Bottom",
      "summary": "",
      "description": "A bottom Vector2"
    },
    "Vector2.html#.Right": {
      "id": "Vector2.html#.Right",
      "kind": "function",
      "title": "&lt;static&gt; Right() → {Vector2}",
      "longname": "Vector2.Right",
      "name": "Right",
      "tags": "Vector2.Right Right",
      "summary": "",
      "description": "A right Vector2"
    },
    "Vector2.html#floor": {
      "id": "Vector2.html#floor",
      "kind": "function",
      "title": "floor( v ) → {Vector2}",
      "longname": "Vector2#floor",
      "name": "floor",
      "tags": "Vector2#floor floor",
      "summary": "",
      "description": "Flooring the Vector2"
    },
    "Vector2.html#floorX": {
      "id": "Vector2.html#floorX",
      "kind": "function",
      "title": "floorX( [ v ] ) → {Vector2}",
      "longname": "Vector2#floorX",
      "name": "floorX",
      "tags": "Vector2#floorX floorX",
      "summary": "",
      "description": "Flooring the x value of the Vector2"
    },
    "Vector2.html#floorY": {
      "id": "Vector2.html#floorY",
      "kind": "function",
      "title": "floorY( [ v ] ) → {Vector2}",
      "longname": "Vector2#floorY",
      "name": "floorY",
      "tags": "Vector2#floorY floorY",
      "summary": "",
      "description": "Flooring the y value of the Vector2"
    },
    "Vector2.html#ceil": {
      "id": "Vector2.html#ceil",
      "kind": "function",
      "title": "ceil( [ v ] ) → {Vector2}",
      "longname": "Vector2#ceil",
      "name": "ceil",
      "tags": "Vector2#ceil ceil",
      "summary": "",
      "description": "Ceiling the Vector2"
    },
    "Vector2.html#ceilX": {
      "id": "Vector2.html#ceilX",
      "kind": "function",
      "title": "ceilX( [ v ] ) → {Vector2}",
      "longname": "Vector2#ceilX",
      "name": "ceilX",
      "tags": "Vector2#ceilX ceilX",
      "summary": "",
      "description": "Ceiling the x value of the Vector2"
    },
    "Vector2.html#ceilY": {
      "id": "Vector2.html#ceilY",
      "kind": "function",
      "title": "ceilY( [ v ] ) → {Vector2}",
      "longname": "Vector2#ceilY",
      "name": "ceilY",
      "tags": "Vector2#ceilY ceilY",
      "summary": "",
      "description": "Ceiling the y value of the Vector2"
    },
    "Vector2.html#round": {
      "id": "Vector2.html#round",
      "kind": "function",
      "title": "round( [ v ] ) → {Vector2}",
      "longname": "Vector2#round",
      "name": "round",
      "tags": "Vector2#round round",
      "summary": "",
      "description": "Rounding the Vector2"
    },
    "Vector2.html#roundX": {
      "id": "Vector2.html#roundX",
      "kind": "function",
      "title": "roundX( [ v ] ) → {Vector2}",
      "longname": "Vector2#roundX",
      "name": "roundX",
      "tags": "Vector2#roundX roundX",
      "summary": "",
      "description": "Rounding the x value of the Vector2"
    },
    "Vector2.html#roundY": {
      "id": "Vector2.html#roundY",
      "kind": "function",
      "title": "roundY( [ v ] ) → {Vector2}",
      "longname": "Vector2#roundY",
      "name": "roundY",
      "tags": "Vector2#roundY roundY",
      "summary": "",
      "description": "Rounding the y value of the Vector2"
    },
    "Vector2.html#set": {
      "id": "Vector2.html#set",
      "kind": "function",
      "title": "set( [ p1 [, p2 ] ] ) → {Vector2}",
      "longname": "Vector2#set",
      "name": "set",
      "tags": "Vector2#set set",
      "summary": "",
      "description": "Setting the value of the Vector2"
    },
    "Vector2.html#setX": {
      "id": "Vector2.html#setX",
      "kind": "function",
      "title": "setX( v ) → {Vector2}",
      "longname": "Vector2#setX",
      "name": "setX",
      "tags": "Vector2#setX setX",
      "summary": "",
      "description": "Setting the x value of the Vector2"
    },
    "Vector2.html#setY": {
      "id": "Vector2.html#setY",
      "kind": "function",
      "title": "setY( v ) → {Vector2}",
      "longname": "Vector2#setY",
      "name": "setY",
      "tags": "Vector2#setY setY",
      "summary": "",
      "description": "Setting the y value of the Vector2"
    },
    "Vector2.html#add": {
      "id": "Vector2.html#add",
      "kind": "function",
      "title": "add( [ p1 [, p2 ] ] ) → {Vector2}",
      "longname": "Vector2#add",
      "name": "add",
      "tags": "Vector2#add add",
      "summary": "",
      "description": "Adding values to the the Vector2"
    },
    "Vector2.html#addX": {
      "id": "Vector2.html#addX",
      "kind": "function",
      "title": "addX( v ) → {Vector2}",
      "longname": "Vector2#addX",
      "name": "addX",
      "tags": "Vector2#addX addX",
      "summary": "",
      "description": "Adding v to x value of the Vector2"
    },
    "Vector2.html#addY": {
      "id": "Vector2.html#addY",
      "kind": "function",
      "title": "addY( v ) → {Vector2}",
      "longname": "Vector2#addY",
      "name": "addY",
      "tags": "Vector2#addY addY",
      "summary": "",
      "description": "Adding v to y value of the Vector2"
    },
    "Vector2.html#substract": {
      "id": "Vector2.html#substract",
      "kind": "function",
      "title": "substract( [ p1 [, p2 ] ] ) → {Vector2}",
      "longname": "Vector2#substract",
      "name": "substract",
      "tags": "Vector2#substract substract",
      "summary": "",
      "description": "Substracting values to the the Vector2"
    },
    "Vector2.html#substractX": {
      "id": "Vector2.html#substractX",
      "kind": "function",
      "title": "substractX( v ) → {Vector2}",
      "longname": "Vector2#substractX",
      "name": "substractX",
      "tags": "Vector2#substractX substractX",
      "summary": "",
      "description": "Substracting v to x value of the Vector2"
    },
    "Vector2.html#substractY": {
      "id": "Vector2.html#substractY",
      "kind": "function",
      "title": "substractY( v ) → {Vector2}",
      "longname": "Vector2#substractY",
      "name": "substractY",
      "tags": "Vector2#substractY substractY",
      "summary": "",
      "description": "Substracting v to x value of the Vector2"
    },
    "Vector2.html#multiply": {
      "id": "Vector2.html#multiply",
      "kind": "function",
      "title": "multiply( [ p1 [, p2 ] ] ) → {Vector2}",
      "longname": "Vector2#multiply",
      "name": "multiply",
      "tags": "Vector2#multiply multiply",
      "summary": "",
      "description": "Multiply values to the the Vector2"
    },
    "Vector2.html#multiplyX": {
      "id": "Vector2.html#multiplyX",
      "kind": "function",
      "title": "multiplyX( v ) → {Vector2}",
      "longname": "Vector2#multiplyX",
      "name": "multiplyX",
      "tags": "Vector2#multiplyX multiplyX",
      "summary": "",
      "description": "Multiply x value of the Vector2 by v"
    },
    "Vector2.html#multiplyY": {
      "id": "Vector2.html#multiplyY",
      "kind": "function",
      "title": "multiplyY( v ) → {Vector2}",
      "longname": "Vector2#multiplyY",
      "name": "multiplyY",
      "tags": "Vector2#multiplyY multiplyY",
      "summary": "",
      "description": "Multiply y value of the Vector2 by v"
    },
    "Vector2.html#divide": {
      "id": "Vector2.html#divide",
      "kind": "function",
      "title": "divide( p1, p2 ) → {Vector2}",
      "longname": "Vector2#divide",
      "name": "divide",
      "tags": "Vector2#divide divide",
      "summary": "",
      "description": "Dividing values to the the Vector2"
    },
    "Vector2.html#divideX": {
      "id": "Vector2.html#divideX",
      "kind": "function",
      "title": "divideX( v ) → {Vector2}",
      "longname": "Vector2#divideX",
      "name": "divideX",
      "tags": "Vector2#divideX divideX",
      "summary": "",
      "description": "Divinding x value of the Vector2 by v"
    },
    "Vector2.html#divideY": {
      "id": "Vector2.html#divideY",
      "kind": "function",
      "title": "divideY( v ) → {Vector2}",
      "longname": "Vector2#divideY",
      "name": "divideY",
      "tags": "Vector2#divideY divideY",
      "summary": "",
      "description": "Divinding x value of the Vector2 by v"
    },
    "Vector2.html#invert": {
      "id": "Vector2.html#invert",
      "kind": "function",
      "title": "invert() → {Vector2}",
      "longname": "Vector2#invert",
      "name": "invert",
      "tags": "Vector2#invert invert",
      "summary": "",
      "description": "Inverting the Vector2"
    },
    "Vector2.html#invertX": {
      "id": "Vector2.html#invertX",
      "kind": "function",
      "title": "invertX() → {Vector2}",
      "longname": "Vector2#invertX",
      "name": "invertX",
      "tags": "Vector2#invertX invertX",
      "summary": "",
      "description": "Inverting the x value of the Vector2"
    },
    "Vector2.html#invertY": {
      "id": "Vector2.html#invertY",
      "kind": "function",
      "title": "invertY() → {Vector2}",
      "longname": "Vector2#invertY",
      "name": "invertY",
      "tags": "Vector2#invertY invertY",
      "summary": "",
      "description": "Inverting the y value of the Vector2"
    },
    "Vector2.html#rotate": {
      "id": "Vector2.html#rotate",
      "kind": "function",
      "title": "rotate( angle ) → {Vector2}",
      "longname": "Vector2#rotate",
      "name": "rotate",
      "tags": "Vector2#rotate rotate",
      "summary": "",
      "description": "Rotate the Vector2 arround zero by angle"
    },
    "Vector2.html#equals": {
      "id": "Vector2.html#equals",
      "kind": "function",
      "title": "equals( [ p1 [, p2 ] ] ) → {Boolean}",
      "longname": "Vector2#equals",
      "name": "equals",
      "tags": "Vector2#equals equals",
      "summary": "",
      "description": "Test if the Vector2 is equal to an other"
    }
  }
};
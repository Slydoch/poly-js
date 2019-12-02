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
        "Curve.html": [
          "base",
          "class",
          "curv",
          "lt;abstract&gt"
        ],
        "Curve.html#next": [
          "curve#next",
          "element",
          "member",
          "next",
          "set",
          "vector2"
        ],
        "Curve.html#prev": [
          "curve#prev",
          "element",
          "member",
          "prev",
          "previou",
          "set",
          "vector2"
        ],
        "Curve.html#points": [
          "along",
          "array.&lt;vector2&gt",
          "count",
          "curv",
          "curve#point",
          "depend",
          "member",
          "point",
          "segmentscount"
        ],
        "Curve.html#isCurve": [
          "boolean",
          "curv",
          "curve#iscurv",
          "differenci",
          "iscurv",
          "lt;readonly&gt",
          "member",
          "over",
          "system",
          "us",
          "vector2"
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
        "Line.html#alongPoint": [
          "alongpoint",
          "end",
          "function",
          "lerpvalu",
          "line",
          "line#alongpoint",
          "point",
          "start"
        ],
        "Line.html#alongPointUnclamped": [
          "alongpointunclamp",
          "end",
          "function",
          "lerpvalu",
          "line",
          "line#alongpointunclamp",
          "point",
          "start",
          "unclamp",
          "version"
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
        "BezierCurve.html": [
          "beziercurv",
          "class"
        ],
        "BezierCurve.html#first": [
          "beziercurve#first",
          "curv",
          "first",
          "member",
          "point",
          "vector2"
        ],
        "BezierCurve.html#last": [
          "beziercurve#last",
          "curv",
          "last",
          "member",
          "point",
          "vector2"
        ],
        "BezierCurve.html#controllers": [
          "array.&lt;vector2&gt",
          "beziercurve#control",
          "control",
          "curv",
          "member"
        ],
        "BezierCurve.html#segmentsCount": [
          "beziercurve#segmentscount",
          "calc",
          "count",
          "curv",
          "display",
          "line",
          "member",
          "number",
          "segment",
          "segmentscount"
        ],
        "Polygon.html": [
          "class",
          "polygon"
        ],
        "Polygon.html#region": [
          "array",
          "array.&lt;array&gt",
          "doubl",
          "geojson",
          "level",
          "lt;readonly&gt",
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
          "array.&lt;vector2&gt",
          "lt;readonly&gt",
          "member",
          "point",
          "polygon",
          "polygon#point"
        ],
        "Polygon.html#lines": [
          "array.&lt;line&gt",
          "line",
          "lt;readonly&gt",
          "member",
          "polygon",
          "polygon#lin"
        ],
        "Polygon.html#area": [
          "area",
          "lt;readonly&gt",
          "member",
          "number",
          "polygon",
          "polygon#area"
        ],
        "Polygon.html#isConvex": [
          "boolean",
          "convex",
          "isconvex",
          "lt;readonly&gt",
          "member",
          "polygon",
          "polygon#isconvex"
        ],
        "Polygon.html#isConcave": [
          "boolean",
          "concav",
          "isconcav",
          "lt;readonly&gt",
          "member",
          "polygon",
          "polygon#isconcav"
        ],
        "Polygon.html#hull": [
          "convert",
          "convex",
          "current",
          "hull",
          "lt;readonly&gt",
          "member",
          "polygon",
          "polygon#hul"
        ],
        "Polygon.html#convex": [
          "alia",
          "convex",
          "hull",
          "lt;readonly&gt",
          "member",
          "polygon",
          "polygon#convex"
        ],
        "Polygon.html#clone": [
          "clon",
          "clone",
          "current",
          "lt;readonly&gt",
          "member",
          "modifi",
          "polygon",
          "polygon#clon",
          "useful"
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
        "Polygon.html#setElements": [
          "element",
          "function",
          "polygon",
          "polygon#setel",
          "set",
          "setel",
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
        "Polygon.html#addElement": [
          "add",
          "addel",
          "element",
          "end",
          "function",
          "new",
          "polygon",
          "polygon#addel",
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
        "Polygon.html#moveBy": [
          "function",
          "move",
          "movebi",
          "polygon",
          "polygon#movebi",
          "valu",
          "vector2",
          "vertic"
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
          "array.&lt;array&gt",
          "circle#region",
          "doubl",
          "geojson",
          "level",
          "lt;readonly&gt",
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
          "array.&lt;vector2&gt",
          "circle#point",
          "lt;readonly&gt",
          "member",
          "point",
          "polygon"
        ],
        "Circle.html#lines": [
          "array.&lt;line&gt",
          "circle#lin",
          "line",
          "lt;readonly&gt",
          "member",
          "polygon"
        ],
        "Circle.html#area": [
          "area",
          "circle#area",
          "lt;readonly&gt",
          "member",
          "number",
          "polygon"
        ],
        "Circle.html#isConvex": [
          "boolean",
          "circle#isconvex",
          "convex",
          "isconvex",
          "lt;readonly&gt",
          "member",
          "polygon"
        ],
        "Circle.html#isConcave": [
          "boolean",
          "circle#isconcav",
          "concav",
          "isconcav",
          "lt;readonly&gt",
          "member",
          "polygon"
        ],
        "Circle.html#hull": [
          "circle#hul",
          "convert",
          "convex",
          "current",
          "hull",
          "lt;readonly&gt",
          "member",
          "polygon"
        ],
        "Circle.html#convex": [
          "alia",
          "circle#convex",
          "convex",
          "hull",
          "lt;readonly&gt",
          "member",
          "polygon"
        ],
        "Circle.html#clone": [
          "circle#clon",
          "clon",
          "clone",
          "current",
          "lt;readonly&gt",
          "member",
          "modifi",
          "polygon",
          "useful"
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
        "Circle.html#setElements": [
          "circle#setel",
          "element",
          "function",
          "polygon",
          "set",
          "setel",
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
        "Circle.html#addElement": [
          "add",
          "addel",
          "circle#addel",
          "element",
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
        "Circle.html#moveBy": [
          "circle#movebi",
          "function",
          "move",
          "movebi",
          "polygon",
          "valu",
          "vector2",
          "vertic"
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
          "array.&lt;array&gt",
          "doubl",
          "geojson",
          "level",
          "lt;readonly&gt",
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
          "array.&lt;vector2&gt",
          "lt;readonly&gt",
          "member",
          "point",
          "polygon",
          "rect#point"
        ],
        "Rect.html#lines": [
          "array.&lt;line&gt",
          "line",
          "lt;readonly&gt",
          "member",
          "polygon",
          "rect#lin"
        ],
        "Rect.html#area": [
          "area",
          "lt;readonly&gt",
          "member",
          "number",
          "polygon",
          "rect#area"
        ],
        "Rect.html#isConvex": [
          "boolean",
          "convex",
          "isconvex",
          "lt;readonly&gt",
          "member",
          "polygon",
          "rect#isconvex"
        ],
        "Rect.html#isConcave": [
          "boolean",
          "concav",
          "isconcav",
          "lt;readonly&gt",
          "member",
          "polygon",
          "rect#isconcav"
        ],
        "Rect.html#hull": [
          "convert",
          "convex",
          "current",
          "hull",
          "lt;readonly&gt",
          "member",
          "polygon",
          "rect#hul"
        ],
        "Rect.html#convex": [
          "alia",
          "convex",
          "hull",
          "lt;readonly&gt",
          "member",
          "polygon",
          "rect#convex"
        ],
        "Rect.html#clone": [
          "clon",
          "clone",
          "current",
          "lt;readonly&gt",
          "member",
          "modifi",
          "polygon",
          "rect#clon",
          "useful"
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
        "Rect.html#setElements": [
          "element",
          "function",
          "polygon",
          "rect#setel",
          "set",
          "setel",
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
          "point",
          "polygon",
          "rect",
          "rect.box"
        ],
        "Rect.html#addElement": [
          "add",
          "addel",
          "element",
          "end",
          "function",
          "new",
          "polygon",
          "rect#addel",
          "vertic"
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
        "Rect.html#moveBy": [
          "function",
          "move",
          "movebi",
          "polygon",
          "rect#movebi",
          "valu",
          "vector2",
          "vertic"
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
        ]
      },
      "length": 156
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
                            "Polygon.html#intersect": {
                              "ref": "Polygon.html#intersect",
                              "tf": 691.6666666666667
                            },
                            "Polygon.html#.Intersect": {
                              "ref": "Polygon.html#.Intersect",
                              "tf": 677.1428571428571
                            },
                            "Circle.html#intersect": {
                              "ref": "Circle.html#intersect",
                              "tf": 691.6666666666667
                            },
                            "Rect.html#intersect": {
                              "ref": "Rect.html#intersect",
                              "tf": 691.6666666666667
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
                    "Polygon.html#pointIsInside": {
                      "ref": "Polygon.html#pointIsInside",
                      "tf": 10
                    },
                    "Polygon.html#pointIsInsidePolygon": {
                      "ref": "Polygon.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
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
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Curve.html#isCurve": {
                        "ref": "Curve.html#isCurve",
                        "tf": 683.3333333333334
                      }
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "n": {
                  "docs": {},
                  "v": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "x": {
                        "docs": {
                          "Polygon.html#isConvex": {
                            "ref": "Polygon.html#isConvex",
                            "tf": 683.3333333333334
                          },
                          "Circle.html#isConvex": {
                            "ref": "Circle.html#isConvex",
                            "tf": 683.3333333333334
                          },
                          "Rect.html#isConvex": {
                            "ref": "Rect.html#isConvex",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  },
                  "c": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "v": {
                        "docs": {
                          "Polygon.html#isConcave": {
                            "ref": "Polygon.html#isConcave",
                            "tf": 683.3333333333334
                          },
                          "Circle.html#isConcave": {
                            "ref": "Circle.html#isConcave",
                            "tf": 683.3333333333334
                          },
                          "Rect.html#isConcave": {
                            "ref": "Rect.html#isConcave",
                            "tf": 683.3333333333334
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
                "docs": {
                  "Curve.html#isCurve": {
                    "ref": "Curve.html#isCurve",
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
              "Vector2.html#equals": {
                "ref": "Vector2.html#equals",
                "tf": 25
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
              "Vector2.html#equals": {
                "ref": "Vector2.html#equals",
                "tf": 25
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
                        "Polygon.html#isConvex": {
                          "ref": "Polygon.html#isConvex",
                          "tf": 25
                        },
                        "Polygon.html#isConcave": {
                          "ref": "Polygon.html#isConcave",
                          "tf": 25
                        },
                        "Polygon.html#hull": {
                          "ref": "Polygon.html#hull",
                          "tf": 47.61904761904761
                        },
                        "Polygon.html#convex": {
                          "ref": "Polygon.html#convex",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#clone": {
                          "ref": "Polygon.html#clone",
                          "tf": 47.61904761904761
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
                        "Polygon.html#setElements": {
                          "ref": "Polygon.html#setElements",
                          "tf": 49.99999999999999
                        },
                        "Polygon.html#addVertex": {
                          "ref": "Polygon.html#addVertex",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#addElement": {
                          "ref": "Polygon.html#addElement",
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
                        "Polygon.html#moveBy": {
                          "ref": "Polygon.html#moveBy",
                          "tf": 12.5
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
                        "Circle.html#isConvex": {
                          "ref": "Circle.html#isConvex",
                          "tf": 25
                        },
                        "Circle.html#isConcave": {
                          "ref": "Circle.html#isConcave",
                          "tf": 25
                        },
                        "Circle.html#hull": {
                          "ref": "Circle.html#hull",
                          "tf": 47.61904761904761
                        },
                        "Circle.html#convex": {
                          "ref": "Circle.html#convex",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#clone": {
                          "ref": "Circle.html#clone",
                          "tf": 47.61904761904761
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
                        "Circle.html#setElements": {
                          "ref": "Circle.html#setElements",
                          "tf": 49.99999999999999
                        },
                        "Circle.html#addVertex": {
                          "ref": "Circle.html#addVertex",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#addElement": {
                          "ref": "Circle.html#addElement",
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
                        "Circle.html#moveBy": {
                          "ref": "Circle.html#moveBy",
                          "tf": 12.5
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
                        "Rect.html#isConvex": {
                          "ref": "Rect.html#isConvex",
                          "tf": 25
                        },
                        "Rect.html#isConcave": {
                          "ref": "Rect.html#isConcave",
                          "tf": 25
                        },
                        "Rect.html#hull": {
                          "ref": "Rect.html#hull",
                          "tf": 47.61904761904761
                        },
                        "Rect.html#convex": {
                          "ref": "Rect.html#convex",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#clone": {
                          "ref": "Rect.html#clone",
                          "tf": 47.61904761904761
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
                        "Rect.html#setElements": {
                          "ref": "Rect.html#setElements",
                          "tf": 49.99999999999999
                        },
                        "Rect.html#addVertex": {
                          "ref": "Rect.html#addVertex",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#.Box": {
                          "ref": "Rect.html#.Box",
                          "tf": 10
                        },
                        "Rect.html#addElement": {
                          "ref": "Rect.html#addElement",
                          "tf": 33.33333333333333
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
                        "Rect.html#moveBy": {
                          "ref": "Rect.html#moveBy",
                          "tf": 12.5
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
                              },
                              "e": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Polygon.html#addElement": {
                                      "ref": "Polygon.html#addElement",
                                      "tf": 1150
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
                            "c": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "v": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "x": {
                                        "docs": {
                                          "Polygon.html#isConvex": {
                                            "ref": "Polygon.html#isConvex",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "v": {
                                        "docs": {
                                          "Polygon.html#isConcave": {
                                            "ref": "Polygon.html#isConcave",
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
                        "h": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "Polygon.html#hull": {
                                  "ref": "Polygon.html#hull",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "v": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "x": {
                                    "docs": {
                                      "Polygon.html#convex": {
                                        "ref": "Polygon.html#convex",
                                        "tf": 1150
                                      }
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
                                      "Polygon.html#colliding": {
                                        "ref": "Polygon.html#colliding",
                                        "tf": 1150
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
                              "n": {
                                "docs": {
                                  "Polygon.html#clone": {
                                    "ref": "Polygon.html#clone",
                                    "tf": 1150
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
                              },
                              "e": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Polygon.html#setElements": {
                                      "ref": "Polygon.html#setElements",
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
                        },
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Polygon.html#moveBy": {
                                        "ref": "Polygon.html#moveBy",
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
                            "Polygon.html#region": {
                              "ref": "Polygon.html#region",
                              "tf": 3.8461538461538463
                            },
                            "Circle.html#region": {
                              "ref": "Circle.html#region",
                              "tf": 3.8461538461538463
                            },
                            "Rect.html#region": {
                              "ref": "Rect.html#region",
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
                    "Curve.html#next": {
                      "ref": "Curve.html#next",
                      "tf": 25
                    },
                    "Curve.html#prev": {
                      "ref": "Curve.html#prev",
                      "tf": 25
                    },
                    "Curve.html#points": {
                      "ref": "Curve.html#points",
                      "tf": 708.3333333333334
                    },
                    "Line.html#alongPoint": {
                      "ref": "Line.html#alongPoint",
                      "tf": 10
                    },
                    "Line.html#alongPointUnclamped": {
                      "ref": "Line.html#alongPointUnclamped",
                      "tf": 7.142857142857142
                    },
                    "BezierCurve.html#first": {
                      "ref": "BezierCurve.html#first",
                      "tf": 16.666666666666664
                    },
                    "BezierCurve.html#last": {
                      "ref": "BezierCurve.html#last",
                      "tf": 16.666666666666664
                    },
                    "Polygon.html#points": {
                      "ref": "Polygon.html#points",
                      "tf": 708.3333333333334
                    },
                    "Polygon.html#pointIsInside": {
                      "ref": "Polygon.html#pointIsInside",
                      "tf": 43.33333333333333
                    },
                    "Polygon.html#pointIsInsidePolygon": {
                      "ref": "Polygon.html#pointIsInsidePolygon",
                      "tf": 45.83333333333333
                    },
                    "Circle.html#points": {
                      "ref": "Circle.html#points",
                      "tf": 708.3333333333334
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
                      "tf": 708.3333333333334
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
                    "Rect.html#.Box": {
                      "ref": "Rect.html#.Box",
                      "tf": 10
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
                                    "tf": 683.3333333333334
                                  },
                                  "Circle.html#pointIsInside": {
                                    "ref": "Circle.html#pointIsInside",
                                    "tf": 683.3333333333334
                                  },
                                  "Rect.html#pointIsInside": {
                                    "ref": "Rect.html#pointIsInside",
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
                                                  "Polygon.html#pointIsInsidePolygon": {
                                                    "ref": "Polygon.html#pointIsInsidePolygon",
                                                    "tf": 683.3333333333334
                                                  },
                                                  "Circle.html#pointIsInsidePolygon": {
                                                    "ref": "Circle.html#pointIsInsidePolygon",
                                                    "tf": 683.3333333333334
                                                  },
                                                  "Rect.html#pointIsInsidePolygon": {
                                                    "ref": "Rect.html#pointIsInsidePolygon",
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
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "v": {
                "docs": {
                  "Curve.html#prev": {
                    "ref": "Curve.html#prev",
                    "tf": 700
                  }
                },
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "u": {
                      "docs": {
                        "Curve.html#prev": {
                          "ref": "Curve.html#prev",
                          "tf": 16.666666666666664
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
            "u": {
              "docs": {},
              "g": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
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
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 3.8461538461538463
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
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
                      "Polygon.html#region": {
                        "ref": "Polygon.html#region",
                        "tf": 687.1794871794872
                      },
                      "Polygon.html#.FromRegion": {
                        "ref": "Polygon.html#.FromRegion",
                        "tf": 41.666666666666664
                      },
                      "Circle.html#region": {
                        "ref": "Circle.html#region",
                        "tf": 687.1794871794872
                      },
                      "Rect.html#region": {
                        "ref": "Rect.html#region",
                        "tf": 687.1794871794872
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
                        },
                        "e": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Rect.html#setElements": {
                                "ref": "Rect.html#setElements",
                                "tf": 1150
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
                        },
                        "e": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Rect.html#addElement": {
                                "ref": "Rect.html#addElement",
                                "tf": 1150
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
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "x": {
                                  "docs": {
                                    "Rect.html#isConvex": {
                                      "ref": "Rect.html#isConvex",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            },
                            "c": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "v": {
                                  "docs": {
                                    "Rect.html#isConcave": {
                                      "ref": "Rect.html#isConcave",
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
                  "h": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "Rect.html#hull": {
                            "ref": "Rect.html#hull",
                            "tf": 1150
                          }
                        }
                      }
                    }
                  },
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "v": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "x": {
                              "docs": {
                                "Rect.html#convex": {
                                  "ref": "Rect.html#convex",
                                  "tf": 1150
                                }
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
                                "Rect.html#colliding": {
                                  "ref": "Rect.html#colliding",
                                  "tf": 1150
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
                        "n": {
                          "docs": {
                            "Rect.html#clone": {
                              "ref": "Rect.html#clone",
                              "tf": 1150
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
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "v": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "Rect.html#moveBy": {
                                  "ref": "Rect.html#moveBy",
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
          "o": {
            "docs": {},
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
            },
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
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Curve.html#prev": {
                  "ref": "Curve.html#prev",
                  "tf": 16.666666666666664
                },
                "Curve.html#next": {
                  "ref": "Curve.html#next",
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
                "Polygon.html#setElements": {
                  "ref": "Polygon.html#setElements",
                  "tf": 16.666666666666664
                },
                "Circle.html#setChildren": {
                  "ref": "Circle.html#setChildren",
                  "tf": 12.5
                },
                "Circle.html#setVertexes": {
                  "ref": "Circle.html#setVertexes",
                  "tf": 16.666666666666664
                },
                "Circle.html#setElements": {
                  "ref": "Circle.html#setElements",
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
                "Rect.html#setElements": {
                  "ref": "Rect.html#setElements",
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
                                "Polygon.html#setChildren": {
                                  "ref": "Polygon.html#setChildren",
                                  "tf": 683.3333333333334
                                },
                                "Circle.html#setChildren": {
                                  "ref": "Circle.html#setChildren",
                                  "tf": 683.3333333333334
                                },
                                "Rect.html#setChildren": {
                                  "ref": "Rect.html#setChildren",
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
                            "Polygon.html#setVertexes": {
                              "ref": "Polygon.html#setVertexes",
                              "tf": 683.3333333333334
                            },
                            "Circle.html#setVertexes": {
                              "ref": "Circle.html#setVertexes",
                              "tf": 683.3333333333334
                            },
                            "Rect.html#setVertexes": {
                              "ref": "Rect.html#setVertexes",
                              "tf": 683.3333333333334
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
                "l": {
                  "docs": {
                    "Polygon.html#setElements": {
                      "ref": "Polygon.html#setElements",
                      "tf": 683.3333333333334
                    },
                    "Circle.html#setElements": {
                      "ref": "Circle.html#setElements",
                      "tf": 683.3333333333334
                    },
                    "Rect.html#setElements": {
                      "ref": "Rect.html#setElements",
                      "tf": 683.3333333333334
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
            },
            "g": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "BezierCurve.html#segmentsCount": {
                          "ref": "BezierCurve.html#segmentsCount",
                          "tf": 8.333333333333332
                        }
                      },
                      "s": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "Curve.html#points": {
                                      "ref": "Curve.html#points",
                                      "tf": 8.333333333333332
                                    },
                                    "BezierCurve.html#segmentsCount": {
                                      "ref": "BezierCurve.html#segmentsCount",
                                      "tf": 700
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
          "y": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Curve.html#isCurve": {
                        "ref": "Curve.html#isCurve",
                        "tf": 7.142857142857142
                      }
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
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "Line.html#alongPoint": {
                      "ref": "Line.html#alongPoint",
                      "tf": 10
                    },
                    "Line.html#alongPointUnclamped": {
                      "ref": "Line.html#alongPointUnclamped",
                      "tf": 7.142857142857142
                    },
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
                    "Polygon.html#region": {
                      "ref": "Polygon.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Circle.html#region": {
                      "ref": "Circle.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Rect.html#region": {
                      "ref": "Rect.html#region",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Curve.html#points": {
                        "ref": "Curve.html#points",
                        "tf": 8.333333333333332
                      }
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
                      "Polygon.html#difference": {
                        "ref": "Polygon.html#difference",
                        "tf": 691.6666666666667
                      },
                      "Polygon.html#.Difference": {
                        "ref": "Polygon.html#.Difference",
                        "tf": 677.1428571428571
                      },
                      "Circle.html#difference": {
                        "ref": "Circle.html#difference",
                        "tf": 691.6666666666667
                      },
                      "Rect.html#difference": {
                        "ref": "Rect.html#difference",
                        "tf": 691.6666666666667
                      }
                    },
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "Curve.html#isCurve": {
                                "ref": "Curve.html#isCurve",
                                "tf": 7.142857142857142
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
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "BezierCurve.html#segmentsCount": {
                          "ref": "BezierCurve.html#segmentsCount",
                          "tf": 8.333333333333332
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
                        "Polygon.html#region": {
                          "ref": "Polygon.html#region",
                          "tf": 3.8461538461538463
                        },
                        "Circle.html#region": {
                          "ref": "Circle.html#region",
                          "tf": 3.8461538461538463
                        },
                        "Rect.html#region": {
                          "ref": "Rect.html#region",
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
                    },
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
                    "Curve.html": {
                      "ref": "Curve.html",
                      "tf": 122.5
                    },
                    "Line.html": {
                      "ref": "Line.html",
                      "tf": 135
                    },
                    "BezierCurve.html": {
                      "ref": "BezierCurve.html",
                      "tf": 135
                    },
                    "Polygon.html": {
                      "ref": "Polygon.html",
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
                "docs": {
                  "Polygon.html#clone": {
                    "ref": "Polygon.html#clone",
                    "tf": 7.142857142857142
                  },
                  "Circle.html#clone": {
                    "ref": "Circle.html#clone",
                    "tf": 7.142857142857142
                  },
                  "Rect.html#clone": {
                    "ref": "Rect.html#clone",
                    "tf": 7.142857142857142
                  }
                },
                "e": {
                  "docs": {
                    "Polygon.html#clone": {
                      "ref": "Polygon.html#clone",
                      "tf": 683.3333333333334
                    },
                    "Circle.html#clone": {
                      "ref": "Circle.html#clone",
                      "tf": 683.3333333333334
                    },
                    "Rect.html#clone": {
                      "ref": "Rect.html#clone",
                      "tf": 683.3333333333334
                    },
                    "Vector2.html#clone": {
                      "ref": "Vector2.html#clone",
                      "tf": 708.3333333333334
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
              "v": {
                "docs": {
                  "Curve.html": {
                    "ref": "Curve.html",
                    "tf": 1875
                  },
                  "Curve.html#points": {
                    "ref": "Curve.html#points",
                    "tf": 8.333333333333332
                  },
                  "Curve.html#isCurve": {
                    "ref": "Curve.html#isCurve",
                    "tf": 14.285714285714285
                  },
                  "BezierCurve.html#first": {
                    "ref": "BezierCurve.html#first",
                    "tf": 16.666666666666664
                  },
                  "BezierCurve.html#last": {
                    "ref": "BezierCurve.html#last",
                    "tf": 16.666666666666664
                  },
                  "BezierCurve.html#controllers": {
                    "ref": "BezierCurve.html#controllers",
                    "tf": 25
                  },
                  "BezierCurve.html#segmentsCount": {
                    "ref": "BezierCurve.html#segmentsCount",
                    "tf": 8.333333333333332
                  }
                },
                "e": {
                  "docs": {},
                  "#": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "x": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Curve.html#next": {
                                "ref": "Curve.html#next",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "v": {
                            "docs": {
                              "Curve.html#prev": {
                                "ref": "Curve.html#prev",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Curve.html#points": {
                                  "ref": "Curve.html#points",
                                  "tf": 1150
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
                        "c": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "v": {
                                "docs": {
                                  "Curve.html#isCurve": {
                                    "ref": "Curve.html#isCurve",
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
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Polygon.html#hull": {
                          "ref": "Polygon.html#hull",
                          "tf": 7.142857142857142
                        },
                        "Polygon.html#clone": {
                          "ref": "Polygon.html#clone",
                          "tf": 14.285714285714285
                        },
                        "Polygon.html#colliding": {
                          "ref": "Polygon.html#colliding",
                          "tf": 10
                        },
                        "Circle.html#hull": {
                          "ref": "Circle.html#hull",
                          "tf": 7.142857142857142
                        },
                        "Circle.html#clone": {
                          "ref": "Circle.html#clone",
                          "tf": 14.285714285714285
                        },
                        "Circle.html#colliding": {
                          "ref": "Circle.html#colliding",
                          "tf": 10
                        },
                        "Rect.html#hull": {
                          "ref": "Rect.html#hull",
                          "tf": 7.142857142857142
                        },
                        "Rect.html#clone": {
                          "ref": "Rect.html#clone",
                          "tf": 14.285714285714285
                        },
                        "Rect.html#colliding": {
                          "ref": "Rect.html#colliding",
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
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Curve.html#points": {
                      "ref": "Curve.html#points",
                      "tf": 8.333333333333332
                    },
                    "BezierCurve.html#segmentsCount": {
                      "ref": "BezierCurve.html#segmentsCount",
                      "tf": 8.333333333333332
                    },
                    "Circle.html#sides": {
                      "ref": "Circle.html#sides",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "BezierCurve.html#controllers": {
                          "ref": "BezierCurve.html#controllers",
                          "tf": 725
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
                  "x": {
                    "docs": {
                      "Polygon.html#isConvex": {
                        "ref": "Polygon.html#isConvex",
                        "tf": 25
                      },
                      "Polygon.html#hull": {
                        "ref": "Polygon.html#hull",
                        "tf": 7.142857142857142
                      },
                      "Polygon.html#convex": {
                        "ref": "Polygon.html#convex",
                        "tf": 683.3333333333334
                      },
                      "Circle.html#isConvex": {
                        "ref": "Circle.html#isConvex",
                        "tf": 25
                      },
                      "Circle.html#hull": {
                        "ref": "Circle.html#hull",
                        "tf": 7.142857142857142
                      },
                      "Circle.html#convex": {
                        "ref": "Circle.html#convex",
                        "tf": 683.3333333333334
                      },
                      "Rect.html#isConvex": {
                        "ref": "Rect.html#isConvex",
                        "tf": 25
                      },
                      "Rect.html#hull": {
                        "ref": "Rect.html#hull",
                        "tf": 7.142857142857142
                      },
                      "Rect.html#convex": {
                        "ref": "Rect.html#convex",
                        "tf": 683.3333333333334
                      }
                    }
                  },
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Polygon.html#hull": {
                          "ref": "Polygon.html#hull",
                          "tf": 14.285714285714285
                        },
                        "Polygon.html#.FromRegion": {
                          "ref": "Polygon.html#.FromRegion",
                          "tf": 16.666666666666664
                        },
                        "Circle.html#hull": {
                          "ref": "Circle.html#hull",
                          "tf": 14.285714285714285
                        },
                        "Rect.html#hull": {
                          "ref": "Rect.html#hull",
                          "tf": 14.285714285714285
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "a": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Polygon.html#isConcave": {
                        "ref": "Polygon.html#isConcave",
                        "tf": 25
                      },
                      "Circle.html#isConcave": {
                        "ref": "Circle.html#isConcave",
                        "tf": 25
                      },
                      "Rect.html#isConcave": {
                        "ref": "Rect.html#isConcave",
                        "tf": 25
                      }
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
                      "Polygon.html#colliding": {
                        "ref": "Polygon.html#colliding",
                        "tf": 693.3333333333334
                      },
                      "Polygon.html#.Colliding": {
                        "ref": "Polygon.html#.Colliding",
                        "tf": 680
                      },
                      "Circle.html#colliding": {
                        "ref": "Circle.html#colliding",
                        "tf": 693.3333333333334
                      },
                      "Rect.html#colliding": {
                        "ref": "Rect.html#colliding",
                        "tf": 693.3333333333334
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
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "c": {
                "docs": {
                  "BezierCurve.html#segmentsCount": {
                    "ref": "BezierCurve.html#segmentsCount",
                    "tf": 8.333333333333332
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
                    "Polygon.html#pointIsInside": {
                      "ref": "Polygon.html#pointIsInside",
                      "tf": 10
                    },
                    "Polygon.html#pointIsInsidePolygon": {
                      "ref": "Polygon.html#pointIsInsidePolygon",
                      "tf": 12.5
                    },
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
                    "Polygon.html#addChild": {
                      "ref": "Polygon.html#addChild",
                      "tf": 12.5
                    },
                    "Circle.html#addChild": {
                      "ref": "Circle.html#addChild",
                      "tf": 12.5
                    },
                    "Rect.html#addChild": {
                      "ref": "Rect.html#addChild",
                      "tf": 12.5
                    }
                  },
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Polygon.html#setChildren": {
                            "ref": "Polygon.html#setChildren",
                            "tf": 12.5
                          },
                          "Circle.html#setChildren": {
                            "ref": "Circle.html#setChildren",
                            "tf": 12.5
                          },
                          "Rect.html#setChildren": {
                            "ref": "Rect.html#setChildren",
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
                            },
                            "e": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "Circle.html#setElements": {
                                    "ref": "Circle.html#setElements",
                                    "tf": 1150
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
                          "n": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "x": {
                                  "docs": {
                                    "Circle.html#convex": {
                                      "ref": "Circle.html#convex",
                                      "tf": 1150
                                    }
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
                                      "tf": 1150
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
                            "n": {
                              "docs": {
                                "Circle.html#clone": {
                                  "ref": "Circle.html#clone",
                                  "tf": 1150
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
                            },
                            "e": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "Circle.html#addElement": {
                                    "ref": "Circle.html#addElement",
                                    "tf": 1150
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
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {
                                        "Circle.html#isConvex": {
                                          "ref": "Circle.html#isConvex",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                },
                                "c": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "v": {
                                      "docs": {
                                        "Circle.html#isConcave": {
                                          "ref": "Circle.html#isConcave",
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
                      "h": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Circle.html#hull": {
                                "ref": "Circle.html#hull",
                                "tf": 1150
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
                      },
                      "m": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "v": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Circle.html#moveBy": {
                                      "ref": "Circle.html#moveBy",
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
                  "Line.html#alongPoint": {
                    "ref": "Line.html#alongPoint",
                    "tf": 10
                  },
                  "Line.html#alongPointUnclamped": {
                    "ref": "Line.html#alongPointUnclamped",
                    "tf": 7.142857142857142
                  },
                  "Line.html#.Intersect": {
                    "ref": "Line.html#.Intersect",
                    "tf": 14.285714285714285
                  },
                  "BezierCurve.html#segmentsCount": {
                    "ref": "BezierCurve.html#segmentsCount",
                    "tf": 8.333333333333332
                  },
                  "Polygon.html#lines": {
                    "ref": "Polygon.html#lines",
                    "tf": 708.3333333333334
                  },
                  "Circle.html#lines": {
                    "ref": "Circle.html#lines",
                    "tf": 708.3333333333334
                  },
                  "Rect.html#lines": {
                    "ref": "Rect.html#lines",
                    "tf": 708.3333333333334
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
                  },
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "g": {
                            "docs": {},
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
                                        "Line.html#alongPoint": {
                                          "ref": "Line.html#alongPoint",
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
                                                      "Line.html#alongPointUnclamped": {
                                                        "ref": "Line.html#alongPointUnclamped",
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
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "a": {
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
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Curve.html": {
                                        "ref": "Curve.html",
                                        "tf": 50
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
                                      "Curve.html#isCurve": {
                                        "ref": "Curve.html#isCurve",
                                        "tf": 33.33333333333333
                                      },
                                      "Line.html#length": {
                                        "ref": "Line.html#length",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#region": {
                                        "ref": "Polygon.html#region",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#points": {
                                        "ref": "Polygon.html#points",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#lines": {
                                        "ref": "Polygon.html#lines",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#area": {
                                        "ref": "Polygon.html#area",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#isConvex": {
                                        "ref": "Polygon.html#isConvex",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#isConcave": {
                                        "ref": "Polygon.html#isConcave",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#hull": {
                                        "ref": "Polygon.html#hull",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#convex": {
                                        "ref": "Polygon.html#convex",
                                        "tf": 33.33333333333333
                                      },
                                      "Polygon.html#clone": {
                                        "ref": "Polygon.html#clone",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#region": {
                                        "ref": "Circle.html#region",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#points": {
                                        "ref": "Circle.html#points",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#lines": {
                                        "ref": "Circle.html#lines",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#area": {
                                        "ref": "Circle.html#area",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#isConvex": {
                                        "ref": "Circle.html#isConvex",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#isConcave": {
                                        "ref": "Circle.html#isConcave",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#hull": {
                                        "ref": "Circle.html#hull",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#convex": {
                                        "ref": "Circle.html#convex",
                                        "tf": 33.33333333333333
                                      },
                                      "Circle.html#clone": {
                                        "ref": "Circle.html#clone",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#region": {
                                        "ref": "Rect.html#region",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#points": {
                                        "ref": "Rect.html#points",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#lines": {
                                        "ref": "Rect.html#lines",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#area": {
                                        "ref": "Rect.html#area",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#isConvex": {
                                        "ref": "Rect.html#isConvex",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#isConcave": {
                                        "ref": "Rect.html#isConcave",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#hull": {
                                        "ref": "Rect.html#hull",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#convex": {
                                        "ref": "Rect.html#convex",
                                        "tf": 33.33333333333333
                                      },
                                      "Rect.html#clone": {
                                        "ref": "Rect.html#clone",
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
                                  "Rect.html#.Box": {
                                    "ref": "Rect.html#.Box",
                                    "tf": 25
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
                "v": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Line.html#alongPoint": {
                            "ref": "Line.html#alongPoint",
                            "tf": 60
                          },
                          "Line.html#alongPointUnclamped": {
                            "ref": "Line.html#alongPointUnclamped",
                            "tf": 57.14285714285714
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
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "Polygon.html#region": {
                      "ref": "Polygon.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Circle.html#region": {
                      "ref": "Circle.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Rect.html#region": {
                      "ref": "Rect.html#region",
                      "tf": 3.8461538461538463
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
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "BezierCurve.html#last": {
                    "ref": "BezierCurve.html#last",
                    "tf": 716.6666666666666
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "Curve.html": {
                    "ref": "Curve.html",
                    "tf": 12.5
                  }
                }
              }
            }
          },
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
                        "Curve.html#isCurve": {
                          "ref": "Curve.html#isCurve",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#isConvex": {
                          "ref": "Polygon.html#isConvex",
                          "tf": 33.33333333333333
                        },
                        "Polygon.html#isConcave": {
                          "ref": "Polygon.html#isConcave",
                          "tf": 33.33333333333333
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
                        "Circle.html#isConvex": {
                          "ref": "Circle.html#isConvex",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#isConcave": {
                          "ref": "Circle.html#isConcave",
                          "tf": 33.33333333333333
                        },
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
                        "Rect.html#isConvex": {
                          "ref": "Rect.html#isConvex",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#isConcave": {
                          "ref": "Rect.html#isConcave",
                          "tf": 33.33333333333333
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
                        "Vector2.html#equals": {
                          "ref": "Vector2.html#equals",
                          "tf": 25
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
                  "tf": 685
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
            "z": {
              "docs": {},
              "i": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "v": {
                            "docs": {
                              "BezierCurve.html": {
                                "ref": "BezierCurve.html",
                                "tf": 1925
                              }
                            },
                            "e": {
                              "docs": {},
                              "#": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "BezierCurve.html#first": {
                                              "ref": "BezierCurve.html#first",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "l": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "BezierCurve.html#last": {
                                            "ref": "BezierCurve.html#last",
                                            "tf": 1150
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
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "BezierCurve.html#controllers": {
                                                  "ref": "BezierCurve.html#controllers",
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
                                "s": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "BezierCurve.html#segmentsCount": {
                                                              "ref": "BezierCurve.html#segmentsCount",
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
                  }
                }
              }
            },
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
                      "Curve.html#next": {
                        "ref": "Curve.html#next",
                        "tf": 110
                      },
                      "Curve.html#prev": {
                        "ref": "Curve.html#prev",
                        "tf": 110
                      },
                      "Curve.html#points": {
                        "ref": "Curve.html#points",
                        "tf": 110
                      },
                      "Curve.html#isCurve": {
                        "ref": "Curve.html#isCurve",
                        "tf": 110
                      },
                      "Line.html#length": {
                        "ref": "Line.html#length",
                        "tf": 110
                      },
                      "BezierCurve.html#first": {
                        "ref": "BezierCurve.html#first",
                        "tf": 110
                      },
                      "BezierCurve.html#last": {
                        "ref": "BezierCurve.html#last",
                        "tf": 110
                      },
                      "BezierCurve.html#controllers": {
                        "ref": "BezierCurve.html#controllers",
                        "tf": 110
                      },
                      "BezierCurve.html#segmentsCount": {
                        "ref": "BezierCurve.html#segmentsCount",
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
                      "Polygon.html#isConvex": {
                        "ref": "Polygon.html#isConvex",
                        "tf": 110
                      },
                      "Polygon.html#isConcave": {
                        "ref": "Polygon.html#isConcave",
                        "tf": 110
                      },
                      "Polygon.html#hull": {
                        "ref": "Polygon.html#hull",
                        "tf": 110
                      },
                      "Polygon.html#convex": {
                        "ref": "Polygon.html#convex",
                        "tf": 110
                      },
                      "Polygon.html#clone": {
                        "ref": "Polygon.html#clone",
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
                      "Circle.html#isConvex": {
                        "ref": "Circle.html#isConvex",
                        "tf": 110
                      },
                      "Circle.html#isConcave": {
                        "ref": "Circle.html#isConcave",
                        "tf": 110
                      },
                      "Circle.html#hull": {
                        "ref": "Circle.html#hull",
                        "tf": 110
                      },
                      "Circle.html#convex": {
                        "ref": "Circle.html#convex",
                        "tf": 110
                      },
                      "Circle.html#clone": {
                        "ref": "Circle.html#clone",
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
                      "Rect.html#isConvex": {
                        "ref": "Rect.html#isConvex",
                        "tf": 110
                      },
                      "Rect.html#isConcave": {
                        "ref": "Rect.html#isConcave",
                        "tf": 110
                      },
                      "Rect.html#hull": {
                        "ref": "Rect.html#hull",
                        "tf": 110
                      },
                      "Rect.html#convex": {
                        "ref": "Rect.html#convex",
                        "tf": 110
                      },
                      "Rect.html#clone": {
                        "ref": "Rect.html#clone",
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
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "f": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Polygon.html#clone": {
                        "ref": "Polygon.html#clone",
                        "tf": 7.142857142857142
                      },
                      "Circle.html#clone": {
                        "ref": "Circle.html#clone",
                        "tf": 7.142857142857142
                      },
                      "Rect.html#clone": {
                        "ref": "Rect.html#clone",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Polygon.html#moveBy": {
                    "ref": "Polygon.html#moveBy",
                    "tf": 12.5
                  },
                  "Circle.html#moveBy": {
                    "ref": "Circle.html#moveBy",
                    "tf": 12.5
                  },
                  "Rect.html#moveBy": {
                    "ref": "Rect.html#moveBy",
                    "tf": 12.5
                  }
                },
                "b": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Polygon.html#moveBy": {
                        "ref": "Polygon.html#moveBy",
                        "tf": 683.3333333333334
                      },
                      "Circle.html#moveBy": {
                        "ref": "Circle.html#moveBy",
                        "tf": 683.3333333333334
                      },
                      "Rect.html#moveBy": {
                        "ref": "Rect.html#moveBy",
                        "tf": 683.3333333333334
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
          "e": {
            "docs": {},
            "x": {
              "docs": {},
              "t": {
                "docs": {
                  "Curve.html#next": {
                    "ref": "Curve.html#next",
                    "tf": 716.6666666666666
                  }
                }
              }
            },
            "w": {
              "docs": {
                "Polygon.html#addVertex": {
                  "ref": "Polygon.html#addVertex",
                  "tf": 12.5
                },
                "Polygon.html#addElement": {
                  "ref": "Polygon.html#addElement",
                  "tf": 12.5
                },
                "Circle.html#addVertex": {
                  "ref": "Circle.html#addVertex",
                  "tf": 12.5
                },
                "Circle.html#addElement": {
                  "ref": "Circle.html#addElement",
                  "tf": 12.5
                },
                "Rect.html#addVertex": {
                  "ref": "Rect.html#addVertex",
                  "tf": 12.5
                },
                "Rect.html#addElement": {
                  "ref": "Rect.html#addElement",
                  "tf": 12.5
                }
              }
            }
          },
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
                      "BezierCurve.html#segmentsCount": {
                        "ref": "BezierCurve.html#segmentsCount",
                        "tf": 50
                      },
                      "Polygon.html#area": {
                        "ref": "Polygon.html#area",
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
                      "Circle.html#area": {
                        "ref": "Circle.html#area",
                        "tf": 33.33333333333333
                      },
                      "Rect.html#area": {
                        "ref": "Rect.html#area",
                        "tf": 33.33333333333333
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
                        "Curve.html#next": {
                          "ref": "Curve.html#next",
                          "tf": 50
                        },
                        "Curve.html#prev": {
                          "ref": "Curve.html#prev",
                          "tf": 50
                        },
                        "Curve.html#isCurve": {
                          "ref": "Curve.html#isCurve",
                          "tf": 7.142857142857142
                        },
                        "BezierCurve.html#first": {
                          "ref": "BezierCurve.html#first",
                          "tf": 50
                        },
                        "BezierCurve.html#last": {
                          "ref": "BezierCurve.html#last",
                          "tf": 50
                        },
                        "Polygon.html#moveBy": {
                          "ref": "Polygon.html#moveBy",
                          "tf": 45.83333333333333
                        },
                        "Circle.html#center": {
                          "ref": "Circle.html#center",
                          "tf": 50
                        },
                        "Circle.html#moveBy": {
                          "ref": "Circle.html#moveBy",
                          "tf": 45.83333333333333
                        },
                        "Rect.html#position": {
                          "ref": "Rect.html#position",
                          "tf": 50
                        },
                        "Rect.html#size": {
                          "ref": "Rect.html#size",
                          "tf": 50
                        },
                        "Rect.html#moveBy": {
                          "ref": "Rect.html#moveBy",
                          "tf": 45.83333333333333
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
                        "Vector2.html#rotate": {
                          "ref": "Vector2.html#rotate",
                          "tf": 43.33333333333333
                        },
                        "Vector2.html#equals": {
                          "ref": "Vector2.html#equals",
                          "tf": 16.666666666666664
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
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Vector2.html#rotate": {
                                  "ref": "Vector2.html#rotate",
                                  "tf": 1150
                                }
                              }
                            },
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
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Line.html#alongPointUnclamped": {
                          "ref": "Line.html#alongPointUnclamped",
                          "tf": 7.142857142857142
                        },
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
              },
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Polygon.html#setVertexes": {
                        "ref": "Polygon.html#setVertexes",
                        "tf": 49.99999999999999
                      },
                      "Polygon.html#setElements": {
                        "ref": "Polygon.html#setElements",
                        "tf": 33.33333333333333
                      },
                      "Polygon.html#addVertex": {
                        "ref": "Polygon.html#addVertex",
                        "tf": 45.83333333333333
                      },
                      "Polygon.html#addElement": {
                        "ref": "Polygon.html#addElement",
                        "tf": 12.5
                      },
                      "Polygon.html#moveBy": {
                        "ref": "Polygon.html#moveBy",
                        "tf": 12.5
                      },
                      "Circle.html#setVertexes": {
                        "ref": "Circle.html#setVertexes",
                        "tf": 49.99999999999999
                      },
                      "Circle.html#setElements": {
                        "ref": "Circle.html#setElements",
                        "tf": 33.33333333333333
                      },
                      "Circle.html#addVertex": {
                        "ref": "Circle.html#addVertex",
                        "tf": 45.83333333333333
                      },
                      "Circle.html#addElement": {
                        "ref": "Circle.html#addElement",
                        "tf": 12.5
                      },
                      "Circle.html#moveBy": {
                        "ref": "Circle.html#moveBy",
                        "tf": 12.5
                      },
                      "Rect.html#setVertexes": {
                        "ref": "Rect.html#setVertexes",
                        "tf": 49.99999999999999
                      },
                      "Rect.html#setElements": {
                        "ref": "Rect.html#setElements",
                        "tf": 33.33333333333333
                      },
                      "Rect.html#addVertex": {
                        "ref": "Rect.html#addVertex",
                        "tf": 45.83333333333333
                      },
                      "Rect.html#addElement": {
                        "ref": "Rect.html#addElement",
                        "tf": 12.5
                      },
                      "Rect.html#moveBy": {
                        "ref": "Rect.html#moveBy",
                        "tf": 12.5
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
                  "Polygon.html#moveBy": {
                    "ref": "Polygon.html#moveBy",
                    "tf": 33.33333333333333
                  },
                  "Circle.html#moveBy": {
                    "ref": "Circle.html#moveBy",
                    "tf": 33.33333333333333
                  },
                  "Rect.html#moveBy": {
                    "ref": "Rect.html#moveBy",
                    "tf": 33.33333333333333
                  },
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
        "e": {
          "docs": {},
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
                        "Curve.html#prev": {
                          "ref": "Curve.html#prev",
                          "tf": 16.666666666666664
                        },
                        "Curve.html#next": {
                          "ref": "Curve.html#next",
                          "tf": 16.666666666666664
                        },
                        "Polygon.html#setElements": {
                          "ref": "Polygon.html#setElements",
                          "tf": 16.666666666666664
                        },
                        "Polygon.html#addElement": {
                          "ref": "Polygon.html#addElement",
                          "tf": 33.33333333333333
                        },
                        "Circle.html#setElements": {
                          "ref": "Circle.html#setElements",
                          "tf": 16.666666666666664
                        },
                        "Circle.html#addElement": {
                          "ref": "Circle.html#addElement",
                          "tf": 33.33333333333333
                        },
                        "Rect.html#setElements": {
                          "ref": "Rect.html#setElements",
                          "tf": 16.666666666666664
                        },
                        "Rect.html#addElement": {
                          "ref": "Rect.html#addElement",
                          "tf": 33.33333333333333
                        },
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
          },
          "n": {
            "docs": {},
            "d": {
              "docs": {
                "Line.html#alongPoint": {
                  "ref": "Line.html#alongPoint",
                  "tf": 10
                },
                "Line.html#alongPointUnclamped": {
                  "ref": "Line.html#alongPointUnclamped",
                  "tf": 7.142857142857142
                },
                "Polygon.html#addVertex": {
                  "ref": "Polygon.html#addVertex",
                  "tf": 12.5
                },
                "Polygon.html#addElement": {
                  "ref": "Polygon.html#addElement",
                  "tf": 12.5
                },
                "Circle.html#addVertex": {
                  "ref": "Circle.html#addVertex",
                  "tf": 12.5
                },
                "Circle.html#addElement": {
                  "ref": "Circle.html#addElement",
                  "tf": 12.5
                },
                "Rect.html#addVertex": {
                  "ref": "Rect.html#addVertex",
                  "tf": 12.5
                },
                "Rect.html#addElement": {
                  "ref": "Rect.html#addElement",
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
                    "Vector2.html#equals": {
                      "ref": "Vector2.html#equals",
                      "tf": 691.6666666666666
                    },
                    "Vector2.html#equalsX": {
                      "ref": "Vector2.html#equalsX",
                      "tf": 10
                    },
                    "Vector2.html#equalsY": {
                      "ref": "Vector2.html#equalsY",
                      "tf": 10
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
          }
        },
        "a": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "g": {
                  "docs": {
                    "Curve.html#points": {
                      "ref": "Curve.html#points",
                      "tf": 8.333333333333332
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
                              "Line.html#alongPoint": {
                                "ref": "Line.html#alongPoint",
                                "tf": 700
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
                                            "Line.html#alongPointUnclamped": {
                                              "ref": "Line.html#alongPointUnclamped",
                                              "tf": 700
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
            "i": {
              "docs": {},
              "a": {
                "docs": {
                  "Polygon.html#convex": {
                    "ref": "Polygon.html#convex",
                    "tf": 25
                  },
                  "Circle.html#convex": {
                    "ref": "Circle.html#convex",
                    "tf": 25
                  },
                  "Rect.html#convex": {
                    "ref": "Rect.html#convex",
                    "tf": 25
                  },
                  "Vector2.html#norm": {
                    "ref": "Vector2.html#norm",
                    "tf": 25
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Polygon.html#region": {
                      "ref": "Polygon.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Circle.html#region": {
                      "ref": "Circle.html#region",
                      "tf": 3.8461538461538463
                    },
                    "Rect.html#region": {
                      "ref": "Rect.html#region",
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
                                          "&": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "Curve.html#points": {
                                                    "ref": "Curve.html#points",
                                                    "tf": 50
                                                  },
                                                  "BezierCurve.html#controllers": {
                                                    "ref": "BezierCurve.html#controllers",
                                                    "tf": 50
                                                  },
                                                  "Polygon.html#points": {
                                                    "ref": "Polygon.html#points",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Circle.html#points": {
                                                    "ref": "Circle.html#points",
                                                    "tf": 33.33333333333333
                                                  },
                                                  "Rect.html#points": {
                                                    "ref": "Rect.html#points",
                                                    "tf": 33.33333333333333
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
                                      "docs": {},
                                      "&": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "Polygon.html#region": {
                                                "ref": "Polygon.html#region",
                                                "tf": 33.33333333333333
                                              },
                                              "Circle.html#region": {
                                                "ref": "Circle.html#region",
                                                "tf": 33.33333333333333
                                              },
                                              "Rect.html#region": {
                                                "ref": "Rect.html#region",
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
                            },
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "&": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Polygon.html#lines": {
                                              "ref": "Polygon.html#lines",
                                              "tf": 33.33333333333333
                                            },
                                            "Circle.html#lines": {
                                              "ref": "Circle.html#lines",
                                              "tf": 33.33333333333333
                                            },
                                            "Rect.html#lines": {
                                              "ref": "Rect.html#lines",
                                              "tf": 33.33333333333333
                                            }
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
                                                  },
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
                  "Polygon.html#area": {
                    "ref": "Polygon.html#area",
                    "tf": 708.3333333333334
                  },
                  "Circle.html#area": {
                    "ref": "Circle.html#area",
                    "tf": 708.3333333333334
                  },
                  "Rect.html#area": {
                    "ref": "Rect.html#area",
                    "tf": 708.3333333333334
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
                        "tf": 20
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "Polygon.html#addChild": {
                "ref": "Polygon.html#addChild",
                "tf": 12.5
              },
              "Circle.html#addChild": {
                "ref": "Circle.html#addChild",
                "tf": 12.5
              },
              "Rect.html#addChild": {
                "ref": "Rect.html#addChild",
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
                "Polygon.html#addVertex": {
                  "ref": "Polygon.html#addVertex",
                  "tf": 12.5
                },
                "Polygon.html#addElement": {
                  "ref": "Polygon.html#addElement",
                  "tf": 12.5
                },
                "Circle.html#addVertex": {
                  "ref": "Circle.html#addVertex",
                  "tf": 12.5
                },
                "Circle.html#addElement": {
                  "ref": "Circle.html#addElement",
                  "tf": 12.5
                },
                "Rect.html#addVertex": {
                  "ref": "Rect.html#addVertex",
                  "tf": 12.5
                },
                "Rect.html#addElement": {
                  "ref": "Rect.html#addElement",
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
                          "Polygon.html#addChild": {
                            "ref": "Polygon.html#addChild",
                            "tf": 683.3333333333334
                          },
                          "Circle.html#addChild": {
                            "ref": "Circle.html#addChild",
                            "tf": 683.3333333333334
                          },
                          "Rect.html#addChild": {
                            "ref": "Rect.html#addChild",
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
                            "Polygon.html#addVertex": {
                              "ref": "Polygon.html#addVertex",
                              "tf": 683.3333333333334
                            },
                            "Circle.html#addVertex": {
                              "ref": "Circle.html#addVertex",
                              "tf": 683.3333333333334
                            },
                            "Rect.html#addVertex": {
                              "ref": "Rect.html#addVertex",
                              "tf": 683.3333333333334
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
                "l": {
                  "docs": {
                    "Polygon.html#addElement": {
                      "ref": "Polygon.html#addElement",
                      "tf": 683.3333333333334
                    },
                    "Circle.html#addElement": {
                      "ref": "Circle.html#addElement",
                      "tf": 683.3333333333334
                    },
                    "Rect.html#addElement": {
                      "ref": "Rect.html#addElement",
                      "tf": 683.3333333333334
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
              "Curve.html#isCurve": {
                "ref": "Curve.html#isCurve",
                "tf": 7.142857142857142
              },
              "Polygon.html#region": {
                "ref": "Polygon.html#region",
                "tf": 3.8461538461538463
              },
              "Circle.html#region": {
                "ref": "Circle.html#region",
                "tf": 3.8461538461538463
              },
              "Rect.html#region": {
                "ref": "Rect.html#region",
                "tf": 3.8461538461538463
              },
              "Vector2.html#approximated": {
                "ref": "Vector2.html#approximated",
                "tf": 8.333333333333332
              }
            },
            "e": {
              "docs": {},
              "f": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Polygon.html#clone": {
                        "ref": "Polygon.html#clone",
                        "tf": 7.142857142857142
                      },
                      "Circle.html#clone": {
                        "ref": "Circle.html#clone",
                        "tf": 7.142857142857142
                      },
                      "Rect.html#clone": {
                        "ref": "Rect.html#clone",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            }
          },
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
                        "Line.html#alongPointUnclamped": {
                          "ref": "Line.html#alongPointUnclamped",
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
              }
            },
            "i": {
              "docs": {},
              "o": {
                "docs": {},
                "n": {
                  "docs": {
                    "Polygon.html#union": {
                      "ref": "Polygon.html#union",
                      "tf": 691.6666666666667
                    },
                    "Polygon.html#.Union": {
                      "ref": "Polygon.html#.Union",
                      "tf": 677.1428571428571
                    },
                    "Circle.html#union": {
                      "ref": "Circle.html#union",
                      "tf": 691.6666666666667
                    },
                    "Rect.html#union": {
                      "ref": "Rect.html#union",
                      "tf": 691.6666666666667
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
                          "Line.html#alongPoint": {
                            "ref": "Line.html#alongPoint",
                            "tf": 110
                          },
                          "Line.html#alongPointUnclamped": {
                            "ref": "Line.html#alongPointUnclamped",
                            "tf": 110
                          },
                          "Line.html#.Intersect": {
                            "ref": "Line.html#.Intersect",
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
                          "Polygon.html#setElements": {
                            "ref": "Polygon.html#setElements",
                            "tf": 110
                          },
                          "Polygon.html#addVertex": {
                            "ref": "Polygon.html#addVertex",
                            "tf": 110
                          },
                          "Polygon.html#addElement": {
                            "ref": "Polygon.html#addElement",
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
                          "Polygon.html#moveBy": {
                            "ref": "Polygon.html#moveBy",
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
                          "Circle.html#setElements": {
                            "ref": "Circle.html#setElements",
                            "tf": 110
                          },
                          "Circle.html#addVertex": {
                            "ref": "Circle.html#addVertex",
                            "tf": 110
                          },
                          "Circle.html#addElement": {
                            "ref": "Circle.html#addElement",
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
                          "Circle.html#moveBy": {
                            "ref": "Circle.html#moveBy",
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
                          "Rect.html#setElements": {
                            "ref": "Rect.html#setElements",
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
                          "Rect.html#addElement": {
                            "ref": "Rect.html#addElement",
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
                          "Rect.html#moveBy": {
                            "ref": "Rect.html#moveBy",
                            "tf": 110
                          },
                          "Vector2.html#rotate": {
                            "ref": "Vector2.html#rotate",
                            "tf": 110
                          },
                          "Vector2.html#equals": {
                            "ref": "Vector2.html#equals",
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
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "BezierCurve.html#first": {
                      "ref": "BezierCurve.html#first",
                      "tf": 716.6666666666666
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
                  "Vector2.html#equals": {
                    "ref": "Vector2.html#equals",
                    "tf": 16.666666666666664
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
                  "Vector2.html#.IsVector2Like": {
                    "ref": "Vector2.html#.IsVector2Like",
                    "tf": 6.25
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
        "x": {
          "docs": {
            "Polygon.html#region": {
              "ref": "Polygon.html#region",
              "tf": 7.6923076923076925
            },
            "Circle.html#region": {
              "ref": "Circle.html#region",
              "tf": 7.6923076923076925
            },
            "Rect.html#region": {
              "ref": "Rect.html#region",
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
                "Polygon.html#xor": {
                  "ref": "Polygon.html#xor",
                  "tf": 691.6666666666667
                },
                "Polygon.html#.Xor": {
                  "ref": "Polygon.html#.Xor",
                  "tf": 677.1428571428571
                },
                "Circle.html#xor": {
                  "ref": "Circle.html#xor",
                  "tf": 691.6666666666667
                },
                "Rect.html#xor": {
                  "ref": "Rect.html#xor",
                  "tf": 691.6666666666667
                }
              }
            }
          }
        },
        "y": {
          "docs": {
            "Polygon.html#region": {
              "ref": "Polygon.html#region",
              "tf": 7.6923076923076925
            },
            "Circle.html#region": {
              "ref": "Circle.html#region",
              "tf": 7.6923076923076925
            },
            "Rect.html#region": {
              "ref": "Rect.html#region",
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
        "h": {
          "docs": {},
          "u": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "Polygon.html#hull": {
                    "ref": "Polygon.html#hull",
                    "tf": 690.4761904761905
                  },
                  "Polygon.html#convex": {
                    "ref": "Polygon.html#convex",
                    "tf": 25
                  },
                  "Circle.html#hull": {
                    "ref": "Circle.html#hull",
                    "tf": 690.4761904761905
                  },
                  "Circle.html#convex": {
                    "ref": "Circle.html#convex",
                    "tf": 25
                  },
                  "Rect.html#hull": {
                    "ref": "Rect.html#hull",
                    "tf": 690.4761904761905
                  },
                  "Rect.html#convex": {
                    "ref": "Rect.html#convex",
                    "tf": 25
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "Polygon.html#setChildren": {
                    "ref": "Polygon.html#setChildren",
                    "tf": 12.5
                  },
                  "Polygon.html#addChild": {
                    "ref": "Polygon.html#addChild",
                    "tf": 12.5
                  },
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
                        "Polygon.html#pointIsInside": {
                          "ref": "Polygon.html#pointIsInside",
                          "tf": 10
                        },
                        "Circle.html#pointIsInside": {
                          "ref": "Circle.html#pointIsInside",
                          "tf": 10
                        },
                        "Rect.html#pointIsInside": {
                          "ref": "Rect.html#pointIsInside",
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
        "z": {
          "docs": {},
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {
                  "Vector2.html#rotate": {
                    "ref": "Vector2.html#rotate",
                    "tf": 10
                  },
                  "Vector2.html#.Zero": {
                    "ref": "Vector2.html#.Zero",
                    "tf": 708.3333333333334
                  }
                }
              }
            }
          }
        }
      },
      "length": 1159
    },
    "corpusTokens": [
      "ad",
      "add",
      "addchild",
      "addel",
      "addi",
      "addvertex",
      "addx",
      "alia",
      "along",
      "alongpoint",
      "alongpointunclamp",
      "angl",
      "approxim",
      "area",
      "around",
      "array",
      "array.&lt;array&gt",
      "array.&lt;line&gt",
      "array.&lt;polygon&gt",
      "array.&lt;vector2&gt",
      "arround",
      "base",
      "between",
      "beziercurv",
      "beziercurve#control",
      "beziercurve#first",
      "beziercurve#last",
      "beziercurve#segmentscount",
      "boolean",
      "bottom",
      "box",
      "calc",
      "ceil",
      "ceili",
      "ceilx",
      "center",
      "check",
      "child",
      "children",
      "circl",
      "circle#addchild",
      "circle#addel",
      "circle#addvertex",
      "circle#area",
      "circle#cent",
      "circle#clon",
      "circle#collid",
      "circle#convex",
      "circle#differ",
      "circle#hul",
      "circle#intersect",
      "circle#isconcav",
      "circle#isconvex",
      "circle#lin",
      "circle#movebi",
      "circle#point",
      "circle#pointisinsid",
      "circle#pointisinsidecircl",
      "circle#pointisinsidepolygon",
      "circle#radiu",
      "circle#region",
      "circle#setchildren",
      "circle#setel",
      "circle#setvertex",
      "circle#sid",
      "circle#union",
      "circle#xor",
      "class",
      "clon",
      "clone",
      "collid",
      "concav",
      "control",
      "convert",
      "convex",
      "correspond",
      "count",
      "current",
      "curv",
      "curve#iscurv",
      "curve#next",
      "curve#point",
      "curve#prev",
      "depend",
      "differ",
      "differenci",
      "display",
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
      "first",
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
      "hull",
      "index",
      "insid",
      "intersect",
      "invert",
      "inverti",
      "invertx",
      "isconcav",
      "isconvex",
      "iscurv",
      "isinsid",
      "isvector2lik",
      "js",
      "json",
      "l1",
      "l2",
      "last",
      "left",
      "length",
      "lerp",
      "lerpunclamp",
      "lerpvalu",
      "level",
      "line",
      "line#alongpoint",
      "line#alongpointunclamp",
      "line#intersect",
      "line#length",
      "line.intersect",
      "list",
      "list:class",
      "lt;abstract&gt",
      "lt;readonly&gt",
      "lt;static&gt",
      "magnitud",
      "max",
      "member",
      "min",
      "modifi",
      "move",
      "movebi",
      "multipli",
      "multiplyi",
      "multiplyx",
      "new",
      "next",
      "norm",
      "normal",
      "number",
      "on",
      "oper",
      "over",
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
      "polygon#addel",
      "polygon#addvertex",
      "polygon#area",
      "polygon#clon",
      "polygon#collid",
      "polygon#convex",
      "polygon#differ",
      "polygon#hul",
      "polygon#intersect",
      "polygon#isconcav",
      "polygon#isconvex",
      "polygon#lin",
      "polygon#movebi",
      "polygon#point",
      "polygon#pointisinsid",
      "polygon#pointisinsidepolygon",
      "polygon#region",
      "polygon#setchildren",
      "polygon#setel",
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
      "prev",
      "previou",
      "radiu",
      "readm",
      "rect",
      "rect#addchild",
      "rect#addel",
      "rect#addvertex",
      "rect#area",
      "rect#clon",
      "rect#collid",
      "rect#convex",
      "rect#differ",
      "rect#hul",
      "rect#intersect",
      "rect#isconcav",
      "rect#isconvex",
      "rect#lin",
      "rect#movebi",
      "rect#point",
      "rect#pointisinsid",
      "rect#pointisinsidepolygon",
      "rect#pointisinsiderect",
      "rect#posit",
      "rect#region",
      "rect#setchildren",
      "rect#setel",
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
      "segment",
      "segmentscount",
      "set",
      "setchildren",
      "setel",
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
      "system",
      "t",
      "test",
      "time",
      "top",
      "tostr",
      "two",
      "unclamp",
      "union",
      "us",
      "useful",
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
    "Curve.html": {
      "id": "Curve.html",
      "kind": "class",
      "title": "&lt;abstract&gt; Curve",
      "longname": "Curve",
      "name": "Curve",
      "tags": "Curve",
      "summary": "",
      "description": "Curve class, base of all curves",
      "body": ""
    },
    "Curve.html#next": {
      "id": "Curve.html#next",
      "kind": "member",
      "title": "next :Vector2",
      "longname": "Curve#next",
      "name": "next",
      "tags": "Curve#next next",
      "summary": "",
      "description": "Set the next element"
    },
    "Curve.html#prev": {
      "id": "Curve.html#prev",
      "kind": "member",
      "title": "prev :Vector2",
      "longname": "Curve#prev",
      "name": "prev",
      "tags": "Curve#prev prev",
      "summary": "",
      "description": "Set the previous element"
    },
    "Curve.html#points": {
      "id": "Curve.html#points",
      "kind": "member",
      "title": "points :Array.&lt;Vector2&gt;",
      "longname": "Curve#points",
      "name": "points",
      "tags": "Curve#points points",
      "summary": "",
      "description": "Points along the curves, count depending on segmentsCount"
    },
    "Curve.html#isCurve": {
      "id": "Curve.html#isCurve",
      "kind": "member",
      "title": "&lt;readonly&gt; isCurve :Boolean",
      "longname": "Curve#isCurve",
      "name": "isCurve",
      "tags": "Curve#isCurve isCurve",
      "summary": "",
      "description": "Is a curve ? Use by the system to differenciate Vector2 over curve"
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
    "Line.html#alongPoint": {
      "id": "Line.html#alongPoint",
      "kind": "function",
      "title": "alongPoint( lerpValue )",
      "longname": "Line#alongPoint",
      "name": "alongPoint",
      "tags": "Line#alongPoint alongPoint",
      "summary": "",
      "description": "Get a point on the line from start to end at lerpValue"
    },
    "Line.html#alongPointUnclamped": {
      "id": "Line.html#alongPointUnclamped",
      "kind": "function",
      "title": "alongPointUnclamped( lerpValue )",
      "longname": "Line#alongPointUnclamped",
      "name": "alongPointUnclamped",
      "tags": "Line#alongPointUnclamped alongPointUnclamped",
      "summary": "",
      "description": "Get a point on the line from start to end at lerpValue (Unclamped version)"
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
    "BezierCurve.html": {
      "id": "BezierCurve.html",
      "kind": "class",
      "title": "BezierCurve",
      "longname": "BezierCurve",
      "name": "BezierCurve",
      "tags": "BezierCurve",
      "summary": "",
      "description": "BezierCurve Class",
      "body": ""
    },
    "BezierCurve.html#first": {
      "id": "BezierCurve.html#first",
      "kind": "member",
      "title": "first :Vector2",
      "longname": "BezierCurve#first",
      "name": "first",
      "tags": "BezierCurve#first first",
      "summary": "",
      "description": "The first point of the curve"
    },
    "BezierCurve.html#last": {
      "id": "BezierCurve.html#last",
      "kind": "member",
      "title": "last :Vector2",
      "longname": "BezierCurve#last",
      "name": "last",
      "tags": "BezierCurve#last last",
      "summary": "",
      "description": "The last point of the curve"
    },
    "BezierCurve.html#controllers": {
      "id": "BezierCurve.html#controllers",
      "kind": "member",
      "title": "controllers :Array.&lt;Vector2&gt;",
      "longname": "BezierCurve#controllers",
      "name": "controllers",
      "tags": "BezierCurve#controllers controllers",
      "summary": "",
      "description": "Controllers of the curve"
    },
    "BezierCurve.html#segmentsCount": {
      "id": "BezierCurve.html#segmentsCount",
      "kind": "member",
      "title": "segmentsCount :Number",
      "longname": "BezierCurve#segmentsCount",
      "name": "segmentsCount",
      "tags": "BezierCurve#segmentsCount segmentsCount",
      "summary": "",
      "description": "Segment count for the curve calc (for line display)"
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
      "title": "&lt;readonly&gt; region :Array.&lt;Array&gt;",
      "longname": "Polygon#region",
      "name": "region",
      "tags": "Polygon#region region",
      "summary": "",
      "description": "Get region for polybooljs plugin, can be also be used for GeoJson. Return a double level array ([[x, y], [x, y], ...])"
    },
    "Polygon.html#points": {
      "id": "Polygon.html#points",
      "kind": "member",
      "title": "&lt;readonly&gt; points :Array.&lt;Vector2&gt;",
      "longname": "Polygon#points",
      "name": "points",
      "tags": "Polygon#points points",
      "summary": "",
      "description": "Get points of the Polygon"
    },
    "Polygon.html#lines": {
      "id": "Polygon.html#lines",
      "kind": "member",
      "title": "&lt;readonly&gt; lines :Array.&lt;Line&gt;",
      "longname": "Polygon#lines",
      "name": "lines",
      "tags": "Polygon#lines lines",
      "summary": "",
      "description": "Get lines of the Polygon"
    },
    "Polygon.html#area": {
      "id": "Polygon.html#area",
      "kind": "member",
      "title": "&lt;readonly&gt; area :Number",
      "longname": "Polygon#area",
      "name": "area",
      "tags": "Polygon#area area",
      "summary": "",
      "description": "Get area of the Polygon"
    },
    "Polygon.html#isConvex": {
      "id": "Polygon.html#isConvex",
      "kind": "member",
      "title": "&lt;readonly&gt; isConvex :Boolean",
      "longname": "Polygon#isConvex",
      "name": "isConvex",
      "tags": "Polygon#isConvex isConvex",
      "summary": "",
      "description": "Did the polygon is convex"
    },
    "Polygon.html#isConcave": {
      "id": "Polygon.html#isConcave",
      "kind": "member",
      "title": "&lt;readonly&gt; isConcave :Boolean",
      "longname": "Polygon#isConcave",
      "name": "isConcave",
      "tags": "Polygon#isConcave isConcave",
      "summary": "",
      "description": "Did the polygon is concave"
    },
    "Polygon.html#hull": {
      "id": "Polygon.html#hull",
      "kind": "member",
      "title": "&lt;readonly&gt; hull :Polygon",
      "longname": "Polygon#hull",
      "name": "hull",
      "tags": "Polygon#hull hull",
      "summary": "",
      "description": "Convert the current polygon to a hull polygon (convert to convex)"
    },
    "Polygon.html#convex": {
      "id": "Polygon.html#convex",
      "kind": "member",
      "title": "&lt;readonly&gt; convex :Polygon",
      "longname": "Polygon#convex",
      "name": "convex",
      "tags": "Polygon#convex convex",
      "summary": "",
      "description": "Alias of hull"
    },
    "Polygon.html#clone": {
      "id": "Polygon.html#clone",
      "kind": "member",
      "title": "&lt;readonly&gt; clone :Polygon",
      "longname": "Polygon#clone",
      "name": "clone",
      "tags": "Polygon#clone clone",
      "summary": "",
      "description": "Clonning the current polygon, usefull to not modify the current polygon"
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
    "Polygon.html#setElements": {
      "id": "Polygon.html#setElements",
      "kind": "function",
      "title": "setElements( vertices ) → {Polygon}",
      "longname": "Polygon#setElements",
      "name": "setElements",
      "tags": "Polygon#setElements setElements",
      "summary": "",
      "description": "Setting elements of the polygon"
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
    "Polygon.html#addElement": {
      "id": "Polygon.html#addElement",
      "kind": "function",
      "title": "addElement( element ) → {Polygon}",
      "longname": "Polygon#addElement",
      "name": "addElement",
      "tags": "Polygon#addElement addElement",
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
    "Polygon.html#moveBy": {
      "id": "Polygon.html#moveBy",
      "kind": "function",
      "title": "moveBy( value ) → {Vector2}",
      "longname": "Polygon#moveBy",
      "name": "moveBy",
      "tags": "Polygon#moveBy moveBy",
      "summary": "",
      "description": "Move all vertices of the polygon by a Vector2"
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
      "title": "&lt;readonly&gt; region :Array.&lt;Array&gt;",
      "longname": "Circle#region",
      "name": "region",
      "tags": "Circle#region region",
      "summary": "",
      "description": "Get region for polybooljs plugin, can be also be used for GeoJson. Return a double level array ([[x, y], [x, y], ...])"
    },
    "Circle.html#points": {
      "id": "Circle.html#points",
      "kind": "member",
      "title": "&lt;readonly&gt; points :Array.&lt;Vector2&gt;",
      "longname": "Circle#points",
      "name": "points",
      "tags": "Circle#points points",
      "summary": "",
      "description": "Get points of the Polygon"
    },
    "Circle.html#lines": {
      "id": "Circle.html#lines",
      "kind": "member",
      "title": "&lt;readonly&gt; lines :Array.&lt;Line&gt;",
      "longname": "Circle#lines",
      "name": "lines",
      "tags": "Circle#lines lines",
      "summary": "",
      "description": "Get lines of the Polygon"
    },
    "Circle.html#area": {
      "id": "Circle.html#area",
      "kind": "member",
      "title": "&lt;readonly&gt; area :Number",
      "longname": "Circle#area",
      "name": "area",
      "tags": "Circle#area area",
      "summary": "",
      "description": "Get area of the Polygon"
    },
    "Circle.html#isConvex": {
      "id": "Circle.html#isConvex",
      "kind": "member",
      "title": "&lt;readonly&gt; isConvex :Boolean",
      "longname": "Circle#isConvex",
      "name": "isConvex",
      "tags": "Circle#isConvex isConvex",
      "summary": "",
      "description": "Did the polygon is convex"
    },
    "Circle.html#isConcave": {
      "id": "Circle.html#isConcave",
      "kind": "member",
      "title": "&lt;readonly&gt; isConcave :Boolean",
      "longname": "Circle#isConcave",
      "name": "isConcave",
      "tags": "Circle#isConcave isConcave",
      "summary": "",
      "description": "Did the polygon is concave"
    },
    "Circle.html#hull": {
      "id": "Circle.html#hull",
      "kind": "member",
      "title": "&lt;readonly&gt; hull :Polygon",
      "longname": "Circle#hull",
      "name": "hull",
      "tags": "Circle#hull hull",
      "summary": "",
      "description": "Convert the current polygon to a hull polygon (convert to convex)"
    },
    "Circle.html#convex": {
      "id": "Circle.html#convex",
      "kind": "member",
      "title": "&lt;readonly&gt; convex :Polygon",
      "longname": "Circle#convex",
      "name": "convex",
      "tags": "Circle#convex convex",
      "summary": "",
      "description": "Alias of hull"
    },
    "Circle.html#clone": {
      "id": "Circle.html#clone",
      "kind": "member",
      "title": "&lt;readonly&gt; clone :Polygon",
      "longname": "Circle#clone",
      "name": "clone",
      "tags": "Circle#clone clone",
      "summary": "",
      "description": "Clonning the current polygon, usefull to not modify the current polygon"
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
    "Circle.html#setElements": {
      "id": "Circle.html#setElements",
      "kind": "function",
      "title": "setElements( vertices ) → {Polygon}",
      "longname": "Circle#setElements",
      "name": "setElements",
      "tags": "Circle#setElements setElements",
      "summary": "",
      "description": "Setting elements of the polygon"
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
    "Circle.html#addElement": {
      "id": "Circle.html#addElement",
      "kind": "function",
      "title": "addElement( element ) → {Polygon}",
      "longname": "Circle#addElement",
      "name": "addElement",
      "tags": "Circle#addElement addElement",
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
    "Circle.html#moveBy": {
      "id": "Circle.html#moveBy",
      "kind": "function",
      "title": "moveBy( value ) → {Vector2}",
      "longname": "Circle#moveBy",
      "name": "moveBy",
      "tags": "Circle#moveBy moveBy",
      "summary": "",
      "description": "Move all vertices of the polygon by a Vector2"
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
      "title": "&lt;readonly&gt; region :Array.&lt;Array&gt;",
      "longname": "Rect#region",
      "name": "region",
      "tags": "Rect#region region",
      "summary": "",
      "description": "Get region for polybooljs plugin, can be also be used for GeoJson. Return a double level array ([[x, y], [x, y], ...])"
    },
    "Rect.html#points": {
      "id": "Rect.html#points",
      "kind": "member",
      "title": "&lt;readonly&gt; points :Array.&lt;Vector2&gt;",
      "longname": "Rect#points",
      "name": "points",
      "tags": "Rect#points points",
      "summary": "",
      "description": "Get points of the Polygon"
    },
    "Rect.html#lines": {
      "id": "Rect.html#lines",
      "kind": "member",
      "title": "&lt;readonly&gt; lines :Array.&lt;Line&gt;",
      "longname": "Rect#lines",
      "name": "lines",
      "tags": "Rect#lines lines",
      "summary": "",
      "description": "Get lines of the Polygon"
    },
    "Rect.html#area": {
      "id": "Rect.html#area",
      "kind": "member",
      "title": "&lt;readonly&gt; area :Number",
      "longname": "Rect#area",
      "name": "area",
      "tags": "Rect#area area",
      "summary": "",
      "description": "Get area of the Polygon"
    },
    "Rect.html#isConvex": {
      "id": "Rect.html#isConvex",
      "kind": "member",
      "title": "&lt;readonly&gt; isConvex :Boolean",
      "longname": "Rect#isConvex",
      "name": "isConvex",
      "tags": "Rect#isConvex isConvex",
      "summary": "",
      "description": "Did the polygon is convex"
    },
    "Rect.html#isConcave": {
      "id": "Rect.html#isConcave",
      "kind": "member",
      "title": "&lt;readonly&gt; isConcave :Boolean",
      "longname": "Rect#isConcave",
      "name": "isConcave",
      "tags": "Rect#isConcave isConcave",
      "summary": "",
      "description": "Did the polygon is concave"
    },
    "Rect.html#hull": {
      "id": "Rect.html#hull",
      "kind": "member",
      "title": "&lt;readonly&gt; hull :Polygon",
      "longname": "Rect#hull",
      "name": "hull",
      "tags": "Rect#hull hull",
      "summary": "",
      "description": "Convert the current polygon to a hull polygon (convert to convex)"
    },
    "Rect.html#convex": {
      "id": "Rect.html#convex",
      "kind": "member",
      "title": "&lt;readonly&gt; convex :Polygon",
      "longname": "Rect#convex",
      "name": "convex",
      "tags": "Rect#convex convex",
      "summary": "",
      "description": "Alias of hull"
    },
    "Rect.html#clone": {
      "id": "Rect.html#clone",
      "kind": "member",
      "title": "&lt;readonly&gt; clone :Polygon",
      "longname": "Rect#clone",
      "name": "clone",
      "tags": "Rect#clone clone",
      "summary": "",
      "description": "Clonning the current polygon, usefull to not modify the current polygon"
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
    "Rect.html#setElements": {
      "id": "Rect.html#setElements",
      "kind": "function",
      "title": "setElements( vertices ) → {Polygon}",
      "longname": "Rect#setElements",
      "name": "setElements",
      "tags": "Rect#setElements setElements",
      "summary": "",
      "description": "Setting elements of the polygon"
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
      "description": "Get the box around a polygon or around points"
    },
    "Rect.html#addElement": {
      "id": "Rect.html#addElement",
      "kind": "function",
      "title": "addElement( element ) → {Polygon}",
      "longname": "Rect#addElement",
      "name": "addElement",
      "tags": "Rect#addElement addElement",
      "summary": "",
      "description": "Add a new vertices to the end"
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
    "Rect.html#moveBy": {
      "id": "Rect.html#moveBy",
      "kind": "function",
      "title": "moveBy( value ) → {Vector2}",
      "longname": "Rect#moveBy",
      "name": "moveBy",
      "tags": "Rect#moveBy moveBy",
      "summary": "",
      "description": "Move all vertices of the polygon by a Vector2"
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
    }
  }
};
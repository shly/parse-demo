console.log("*******");
!(function () {
  var t = {
      1804: function (t, e, n) {
        "use strict";
        var r = n(5618),
          o = n(7205),
          u = n(7191),
          i = n(5516),
          s = n(9981);
        (t.exports = function (t, e) {
          var n, o, l, c, a;
          return (
            arguments.length < 2 || "string" != typeof t
              ? ((c = e), (e = t), (t = null))
              : (c = arguments[2]),
            r(t)
              ? ((n = s.call(t, "c")),
                (o = s.call(t, "e")),
                (l = s.call(t, "w")))
              : ((n = l = !0), (o = !1)),
            (a = { value: e, configurable: n, enumerable: o, writable: l }),
            c ? u(i(c), a) : a
          );
        }).gs = function (t, e, n) {
          var l, c, a, f;
          return (
            "string" != typeof t
              ? ((a = n), (n = e), (e = t), (t = null))
              : (a = arguments[3]),
            r(e)
              ? o(e)
                ? r(n)
                  ? o(n) || ((a = n), (n = void 0))
                  : (n = void 0)
                : ((a = e), (e = n = void 0))
              : (e = void 0),
            r(t)
              ? ((l = s.call(t, "c")), (c = s.call(t, "e")))
              : ((l = !0), (c = !1)),
            (f = { get: e, set: n, configurable: l, enumerable: c }),
            a ? u(i(a), f) : f
          );
        };
      },
      2041: function (t, e, n) {
        "use strict";
        var r = n(9980),
          o = n(3902),
          u = n(2745),
          i = Array.prototype.indexOf,
          s = Object.prototype.hasOwnProperty,
          l = Math.abs,
          c = Math.floor;
        t.exports = function (t) {
          var e, n, a, f;
          if (!r(t)) return i.apply(this, arguments);
          for (
            n = o(u(this).length),
              a = arguments[1],
              e = a = isNaN(a) ? 0 : a >= 0 ? c(a) : o(this.length) - c(l(a));
            e < n;
            ++e
          )
            if (s.call(this, e) && ((f = this[e]), r(f))) return e;
          return -1;
        };
      },
      4616: function (t, e, n) {
        "use strict";
        t.exports = n(7379)() ? Array.from : n(2669);
      },
      7379: function (t) {
        "use strict";
        t.exports = function () {
          var t,
            e,
            n = Array.from;
          return (
            "function" == typeof n &&
            ((e = n((t = ["raz", "dwa"]))),
            Boolean(e && e !== t && "dwa" === e[1]))
          );
        };
      },
      2669: function (t, e, n) {
        "use strict";
        var r = n(8641).iterator,
          o = n(6766),
          u = n(1216),
          i = n(3902),
          s = n(1290),
          l = n(2745),
          c = n(6914),
          a = n(4349),
          f = Array.isArray,
          p = Function.prototype.call,
          h = { configurable: !0, enumerable: !0, writable: !0, value: null },
          d = Object.defineProperty;
        t.exports = function (t) {
          var e,
            n,
            v,
            x,
            y,
            m,
            P,
            b,
            g,
            A,
            _ = arguments[1],
            C = arguments[2];
          if (
            ((t = Object(l(t))),
            c(_) && s(_),
            this && this !== Array && u(this))
          )
            e = this;
          else {
            if (!_) {
              if (o(t))
                return 1 !== (y = t.length)
                  ? Array.apply(null, t)
                  : (((x = new Array(1))[0] = t[0]), x);
              if (f(t)) {
                for (x = new Array((y = t.length)), n = 0; n < y; ++n)
                  x[n] = t[n];
                return x;
              }
            }
            x = [];
          }
          if (!f(t))
            if (void 0 !== (g = t[r])) {
              for (
                P = s(g).call(t), e && (x = new e()), b = P.next(), n = 0;
                !b.done;

              )
                (A = _ ? p.call(_, C, b.value, n) : b.value),
                  e ? ((h.value = A), d(x, n, h)) : (x[n] = A),
                  (b = P.next()),
                  ++n;
              y = n;
            } else if (a(t)) {
              for (y = t.length, e && (x = new e()), n = 0, v = 0; n < y; ++n)
                (A = t[n]),
                  n + 1 < y &&
                    (m = A.charCodeAt(0)) >= 55296 &&
                    m <= 56319 &&
                    (A += t[++n]),
                  (A = _ ? p.call(_, C, A, v) : A),
                  e ? ((h.value = A), d(x, v, h)) : (x[v] = A),
                  ++v;
              y = v;
            }
          if (void 0 === y)
            for (y = i(t.length), e && (x = new e(y)), n = 0; n < y; ++n)
              (A = _ ? p.call(_, C, t[n], n) : t[n]),
                e ? ((h.value = A), d(x, n, h)) : (x[n] = A);
          return e && ((h.value = null), (x.length = y)), x;
        };
      },
      5083: function (t, e, n) {
        "use strict";
        var r = n(4616),
          o = Array.isArray;
        t.exports = function (t) {
          return o(t) ? t : r(t);
        };
      },
      6380: function (t, e, n) {
        "use strict";
        var r = n(7191),
          o = n(6191),
          u = n(6914),
          i = Error.captureStackTrace;
        t.exports = function (e) {
          var n = new Error(e),
            s = arguments[1],
            l = arguments[2];
          return (
            u(l) || (o(s) && ((l = s), (s = null))),
            u(l) && r(n, l),
            u(s) && (n.code = s),
            i && i(n, t.exports),
            n
          );
        };
      },
      1381: function (t, e, n) {
        "use strict";
        var r,
          o,
          u,
          i,
          s,
          l = n(3902),
          c = function (t, e) {
            return e;
          };
        try {
          Object.defineProperty(c, "length", {
            configurable: !0,
            writable: !1,
            enumerable: !1,
            value: 1,
          });
        } catch (t) {}
        1 === c.length
          ? ((r = { configurable: !0, writable: !1, enumerable: !1 }),
            (o = Object.defineProperty),
            (t.exports = function (t, e) {
              return (
                (e = l(e)),
                t.length === e ? t : ((r.value = e), o(t, "length", r))
              );
            }))
          : ((i = n(1726)),
            (s = []),
            (u = function (t) {
              var e,
                n = 0;
              if (s[t]) return s[t];
              for (e = []; t--; ) e.push("a" + (++n).toString(36));
              return new Function(
                "fn",
                "return function (" +
                  e.join(", ") +
                  ") { return fn.apply(this, arguments); };"
              );
            }),
            (t.exports = function (t, e) {
              var n;
              if (((e = l(e)), t.length === e)) return t;
              n = u(e)(t);
              try {
                i(n, t);
              } catch (t) {}
              return n;
            }));
      },
      6766: function (t) {
        "use strict";
        var e = Object.prototype.toString,
          n = e.call(
            (function () {
              return arguments;
            })()
          );
        t.exports = function (t) {
          return e.call(t) === n;
        };
      },
      1216: function (t) {
        "use strict";
        var e = Object.prototype.toString,
          n = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function (t) {
          return "function" == typeof t && n(e.call(t));
        };
      },
      430: function (t) {
        "use strict";
        t.exports = function () {};
      },
      5875: function (t, e, n) {
        "use strict";
        t.exports = n(5448)() ? Math.sign : n(4592);
      },
      5448: function (t) {
        "use strict";
        t.exports = function () {
          var t = Math.sign;
          return "function" == typeof t && 1 === t(10) && -1 === t(-20);
        };
      },
      4592: function (t) {
        "use strict";
        t.exports = function (t) {
          return (t = Number(t)), isNaN(t) || 0 === t ? t : t > 0 ? 1 : -1;
        };
      },
      9980: function (t, e, n) {
        "use strict";
        t.exports = n(9496)() ? Number.isNaN : n(4517);
      },
      9496: function (t) {
        "use strict";
        t.exports = function () {
          var t = Number.isNaN;
          return "function" == typeof t && !t({}) && t(NaN) && !t(34);
        };
      },
      4517: function (t) {
        "use strict";
        t.exports = function (t) {
          return t != t;
        };
      },
      3478: function (t, e, n) {
        "use strict";
        var r = n(5875),
          o = Math.abs,
          u = Math.floor;
        t.exports = function (t) {
          return isNaN(t)
            ? 0
            : 0 !== (t = Number(t)) && isFinite(t)
            ? r(t) * u(o(t))
            : t;
        };
      },
      3902: function (t, e, n) {
        "use strict";
        var r = n(3478),
          o = Math.max;
        t.exports = function (t) {
          return o(0, r(t));
        };
      },
      4214: function (t, e, n) {
        "use strict";
        var r = n(1290),
          o = n(2745),
          u = Function.prototype.bind,
          i = Function.prototype.call,
          s = Object.keys,
          l = Object.prototype.propertyIsEnumerable;
        t.exports = function (t, e) {
          return function (n, c) {
            var a,
              f = arguments[2],
              p = arguments[3];
            return (
              (n = Object(o(n))),
              r(c),
              (a = s(n)),
              p && a.sort("function" == typeof p ? u.call(p, n) : void 0),
              "function" != typeof t && (t = a[t]),
              i.call(t, a, function (t, r) {
                return l.call(n, t) ? i.call(c, f, n[t], t, n, r) : e;
              })
            );
          };
        };
      },
      7191: function (t, e, n) {
        "use strict";
        t.exports = n(6560)() ? Object.assign : n(7346);
      },
      6560: function (t) {
        "use strict";
        t.exports = function () {
          var t,
            e = Object.assign;
          return (
            "function" == typeof e &&
            (e((t = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
            t.foo + t.bar + t.trzy === "razdwatrzy")
          );
        };
      },
      7346: function (t, e, n) {
        "use strict";
        var r = n(5103),
          o = n(2745),
          u = Math.max;
        t.exports = function (t, e) {
          var n,
            i,
            s,
            l = u(arguments.length, 2);
          for (
            t = Object(o(t)),
              s = function (r) {
                try {
                  t[r] = e[r];
                } catch (t) {
                  n || (n = t);
                }
              },
              i = 1;
            i < l;
            ++i
          )
            r((e = arguments[i])).forEach(s);
          if (void 0 !== n) throw n;
          return t;
        };
      },
      7031: function (t, e, n) {
        "use strict";
        t.exports = n(4214)("forEach");
      },
      6458: function (t) {
        "use strict";
        t.exports = function (t) {
          return "function" == typeof t;
        };
      },
      6191: function (t, e, n) {
        "use strict";
        var r = n(6914),
          o = { function: !0, object: !0 };
        t.exports = function (t) {
          return (r(t) && o[typeof t]) || !1;
        };
      },
      6914: function (t, e, n) {
        "use strict";
        var r = n(430)();
        t.exports = function (t) {
          return t !== r && null !== t;
        };
      },
      5103: function (t, e, n) {
        "use strict";
        t.exports = n(7446)() ? Object.keys : n(6137);
      },
      7446: function (t) {
        "use strict";
        t.exports = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch (t) {
            return !1;
          }
        };
      },
      6137: function (t, e, n) {
        "use strict";
        var r = n(6914),
          o = Object.keys;
        t.exports = function (t) {
          return o(r(t) ? Object(t) : t);
        };
      },
      1465: function (t, e, n) {
        "use strict";
        var r = n(1290),
          o = n(7031),
          u = Function.prototype.call;
        t.exports = function (t, e) {
          var n = {},
            i = arguments[2];
          return (
            r(e),
            o(t, function (t, r, o, s) {
              n[r] = u.call(e, i, t, r, o, s);
            }),
            n
          );
        };
      },
      1726: function (t, e, n) {
        "use strict";
        var r = n(2745),
          o = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          i = Object.getOwnPropertyNames,
          s = Object.getOwnPropertySymbols;
        t.exports = function (t, e) {
          var n,
            l = Object(r(e));
          if (
            ((t = Object(r(t))),
            i(l).forEach(function (r) {
              try {
                o(t, r, u(e, r));
              } catch (t) {
                n = t;
              }
            }),
            "function" == typeof s &&
              s(l).forEach(function (r) {
                try {
                  o(t, r, u(e, r));
                } catch (t) {
                  n = t;
                }
              }),
            void 0 !== n)
          )
            throw n;
          return t;
        };
      },
      5516: function (t, e, n) {
        "use strict";
        var r = n(6914),
          o = Array.prototype.forEach,
          u = Object.create,
          i = function (t, e) {
            var n;
            for (n in t) e[n] = t[n];
          };
        t.exports = function (t) {
          var e = u(null);
          return (
            o.call(arguments, function (t) {
              r(t) && i(Object(t), e);
            }),
            e
          );
        };
      },
      9474: function (t) {
        "use strict";
        var e = Array.prototype.forEach,
          n = Object.create;
        t.exports = function (t) {
          var r = n(null);
          return (
            e.call(arguments, function (t) {
              r[t] = !0;
            }),
            r
          );
        };
      },
      1290: function (t) {
        "use strict";
        t.exports = function (t) {
          if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
          return t;
        };
      },
      2745: function (t, e, n) {
        "use strict";
        var r = n(6914);
        t.exports = function (t) {
          if (!r(t)) throw new TypeError("Cannot use null or undefined");
          return t;
        };
      },
      8494: function (t, e, n) {
        "use strict";
        var r = n(2745),
          o = n(8553);
        t.exports = function (t) {
          return o(r(t));
        };
      },
      8553: function (t, e, n) {
        "use strict";
        var r = n(6458);
        t.exports = function (t) {
          try {
            return t && r(t.toString) ? t.toString() : String(t);
          } catch (t) {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      },
      3947: function (t, e, n) {
        "use strict";
        var r = n(6458);
        t.exports = function (t) {
          try {
            return t && r(t.toString) ? t.toString() : String(t);
          } catch (t) {
            return "<Non-coercible to string value>";
          }
        };
      },
      9981: function (t, e, n) {
        "use strict";
        t.exports = n(3591)() ? String.prototype.contains : n(6042);
      },
      3591: function (t) {
        "use strict";
        var e = "razdwatrzy";
        t.exports = function () {
          return (
            "function" == typeof e.contains &&
            !0 === e.contains("dwa") &&
            !1 === e.contains("foo")
          );
        };
      },
      6042: function (t) {
        "use strict";
        var e = String.prototype.indexOf;
        t.exports = function (t) {
          return e.call(this, t, arguments[1]) > -1;
        };
      },
      4349: function (t) {
        "use strict";
        var e = Object.prototype.toString,
          n = e.call("");
        t.exports = function (t) {
          return (
            "string" == typeof t ||
            (t &&
              "object" == typeof t &&
              (t instanceof String || e.call(t) === n)) ||
            !1
          );
        };
      },
      8979: function (t, e, n) {
        "use strict";
        var r = n(3947),
          o = /[\n\r\u2028\u2029]/g;
        t.exports = function (t) {
          var e = r(t);
          return (
            e.length > 100 && (e = e.slice(0, 99) + "…"),
            e.replace(o, function (t) {
              return JSON.stringify(t).slice(1, -1);
            })
          );
        };
      },
      8641: function (t, e, n) {
        "use strict";
        t.exports = n(8821)() ? n(7933).Symbol : n(5127);
      },
      8821: function (t, e, n) {
        "use strict";
        var r = n(7933),
          o = { object: !0, symbol: !0 };
        t.exports = function () {
          var t,
            e = r.Symbol;
          if ("function" != typeof e) return !1;
          t = e("test symbol");
          try {
            String(t);
          } catch (t) {
            return !1;
          }
          return (
            !!o[typeof e.iterator] &&
            !!o[typeof e.toPrimitive] &&
            !!o[typeof e.toStringTag]
          );
        };
      },
      5386: function (t) {
        "use strict";
        t.exports = function (t) {
          return (
            !!t &&
            ("symbol" == typeof t ||
              (!!t.constructor &&
                "Symbol" === t.constructor.name &&
                "Symbol" === t[t.constructor.toStringTag]))
          );
        };
      },
      7451: function (t, e, n) {
        "use strict";
        var r = n(1804),
          o = Object.create,
          u = Object.defineProperty,
          i = Object.prototype,
          s = o(null);
        t.exports = function (t) {
          for (var e, n, o = 0; s[t + (o || "")]; ) ++o;
          return (
            (s[(t += o || "")] = !0),
            u(
              i,
              (e = "@@" + t),
              r.gs(null, function (t) {
                n || ((n = !0), u(this, e, r(t)), (n = !1));
              })
            ),
            e
          );
        };
      },
      7628: function (t, e, n) {
        "use strict";
        var r = n(1804),
          o = n(7933).Symbol;
        t.exports = function (t) {
          return Object.defineProperties(t, {
            hasInstance: r("", (o && o.hasInstance) || t("hasInstance")),
            isConcatSpreadable: r(
              "",
              (o && o.isConcatSpreadable) || t("isConcatSpreadable")
            ),
            iterator: r("", (o && o.iterator) || t("iterator")),
            match: r("", (o && o.match) || t("match")),
            replace: r("", (o && o.replace) || t("replace")),
            search: r("", (o && o.search) || t("search")),
            species: r("", (o && o.species) || t("species")),
            split: r("", (o && o.split) || t("split")),
            toPrimitive: r("", (o && o.toPrimitive) || t("toPrimitive")),
            toStringTag: r("", (o && o.toStringTag) || t("toStringTag")),
            unscopables: r("", (o && o.unscopables) || t("unscopables")),
          });
        };
      },
      277: function (t, e, n) {
        "use strict";
        var r = n(1804),
          o = n(8541),
          u = Object.create(null);
        t.exports = function (t) {
          return Object.defineProperties(t, {
            for: r(function (e) {
              return u[e] ? u[e] : (u[e] = t(String(e)));
            }),
            keyFor: r(function (t) {
              var e;
              for (e in (o(t), u)) if (u[e] === t) return e;
            }),
          });
        };
      },
      5127: function (t, e, n) {
        "use strict";
        var r,
          o,
          u,
          i = n(1804),
          s = n(8541),
          l = n(7933).Symbol,
          c = n(7451),
          a = n(7628),
          f = n(277),
          p = Object.create,
          h = Object.defineProperties,
          d = Object.defineProperty;
        if ("function" == typeof l)
          try {
            String(l()), (u = !0);
          } catch (t) {}
        else l = null;
        (o = function (t) {
          if (this instanceof o)
            throw new TypeError("Symbol is not a constructor");
          return r(t);
        }),
          (t.exports = r =
            function t(e) {
              var n;
              if (this instanceof t)
                throw new TypeError("Symbol is not a constructor");
              return u
                ? l(e)
                : ((n = p(o.prototype)),
                  (e = void 0 === e ? "" : String(e)),
                  h(n, { __description__: i("", e), __name__: i("", c(e)) }));
            }),
          a(r),
          f(r),
          h(o.prototype, {
            constructor: i(r),
            toString: i("", function () {
              return this.__name__;
            }),
          }),
          h(r.prototype, {
            toString: i(function () {
              return "Symbol (" + s(this).__description__ + ")";
            }),
            valueOf: i(function () {
              return s(this);
            }),
          }),
          d(
            r.prototype,
            r.toPrimitive,
            i("", function () {
              var t = s(this);
              return "symbol" == typeof t ? t : t.toString();
            })
          ),
          d(r.prototype, r.toStringTag, i("c", "Symbol")),
          d(o.prototype, r.toStringTag, i("c", r.prototype[r.toStringTag])),
          d(o.prototype, r.toPrimitive, i("c", r.prototype[r.toPrimitive]));
      },
      8541: function (t, e, n) {
        "use strict";
        var r = n(5386);
        t.exports = function (t) {
          if (!r(t)) throw new TypeError(t + " is not a symbol");
          return t;
        };
      },
      8370: function (t, e, n) {
        "use strict";
        var r,
          o,
          u,
          i,
          s,
          l,
          c,
          a = n(1804),
          f = n(1290),
          p = Function.prototype.apply,
          h = Function.prototype.call,
          d = Object.create,
          v = Object.defineProperty,
          x = Object.defineProperties,
          y = Object.prototype.hasOwnProperty,
          m = { configurable: !0, enumerable: !1, writable: !0 };
        (o = function (t, e) {
          var n, o;
          return (
            f(e),
            (o = this),
            r.call(
              this,
              t,
              (n = function () {
                u.call(o, t, n), p.call(e, this, arguments);
              })
            ),
            (n.__eeOnceListener__ = e),
            this
          );
        }),
          (s = {
            on: (r = function (t, e) {
              var n;
              return (
                f(e),
                y.call(this, "__ee__")
                  ? (n = this.__ee__)
                  : ((n = m.value = d(null)),
                    v(this, "__ee__", m),
                    (m.value = null)),
                n[t]
                  ? "object" == typeof n[t]
                    ? n[t].push(e)
                    : (n[t] = [n[t], e])
                  : (n[t] = e),
                this
              );
            }),
            once: o,
            off: (u = function (t, e) {
              var n, r, o, u;
              if ((f(e), !y.call(this, "__ee__"))) return this;
              if (!(n = this.__ee__)[t]) return this;
              if ("object" == typeof (r = n[t]))
                for (u = 0; (o = r[u]); ++u)
                  (o !== e && o.__eeOnceListener__ !== e) ||
                    (2 === r.length ? (n[t] = r[u ? 0 : 1]) : r.splice(u, 1));
              else (r !== e && r.__eeOnceListener__ !== e) || delete n[t];
              return this;
            }),
            emit: (i = function (t) {
              var e, n, r, o, u;
              if (y.call(this, "__ee__") && (o = this.__ee__[t]))
                if ("object" == typeof o) {
                  for (
                    n = arguments.length, u = new Array(n - 1), e = 1;
                    e < n;
                    ++e
                  )
                    u[e - 1] = arguments[e];
                  for (o = o.slice(), e = 0; (r = o[e]); ++e)
                    p.call(r, this, u);
                } else
                  switch (arguments.length) {
                    case 1:
                      h.call(o, this);
                      break;
                    case 2:
                      h.call(o, this, arguments[1]);
                      break;
                    case 3:
                      h.call(o, this, arguments[1], arguments[2]);
                      break;
                    default:
                      for (
                        n = arguments.length, u = new Array(n - 1), e = 1;
                        e < n;
                        ++e
                      )
                        u[e - 1] = arguments[e];
                      p.call(o, this, u);
                  }
            }),
          }),
          (l = { on: a(r), once: a(o), off: a(u), emit: a(i) }),
          (c = x({}, l)),
          (t.exports = e =
            function (t) {
              return null == t ? d(c) : x(Object(t), l);
            }),
          (e.methods = s);
      },
      7145: function (t) {
        var e = function () {
          if ("object" == typeof self && self) return self;
          if ("object" == typeof window && window) return window;
          throw new Error("Unable to resolve global `this`");
        };
        t.exports = (function () {
          if (this) return this;
          try {
            Object.defineProperty(Object.prototype, "__global__", {
              get: function () {
                return this;
              },
              configurable: !0,
            });
          } catch (t) {
            return e();
          }
          try {
            return __global__ || e();
          } finally {
            delete Object.prototype.__global__;
          }
        })();
      },
      7933: function (t, e, n) {
        "use strict";
        t.exports = n(6344)() ? globalThis : n(7145);
      },
      6344: function (t) {
        "use strict";
        t.exports = function () {
          return (
            "object" == typeof globalThis &&
            !!globalThis &&
            globalThis.Array === Array
          );
        };
      },
      6141: function (t) {
        function e(t) {
          return (
            !!t &&
            ("object" == typeof t || "function" == typeof t) &&
            "function" == typeof t.then
          );
        }
        (t.exports = e), (t.exports.default = e);
      },
      3390: function (t, e, n) {
        "use strict";
        var r = n(3902),
          o = Object.create,
          u = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e,
            n = 0,
            i = 1,
            s = o(null),
            l = o(null),
            c = 0;
          return (
            (t = r(t)),
            {
              hit: function (r) {
                var o = l[r],
                  a = ++c;
                if (((s[a] = r), (l[r] = a), !o)) {
                  if (++n <= t) return;
                  return (r = s[i]), e(r), r;
                }
                if ((delete s[o], i === o)) for (; !u.call(s, ++i); ) continue;
              },
              delete: (e = function (t) {
                var e = l[t];
                if (e && (delete s[e], delete l[t], --n, i === e)) {
                  if (!n) return (c = 0), void (i = 1);
                  for (; !u.call(s, ++i); ) continue;
                }
              }),
              clear: function () {
                (n = 0), (i = 1), (s = o(null)), (l = o(null)), (c = 0);
              },
            }
          );
        };
      },
      4758: function (t, e, n) {
        "use strict";
        var r = n(4616),
          o = n(1465),
          u = n(1726),
          i = n(1381),
          s = n(7473),
          l = Array.prototype.slice,
          c = Function.prototype.apply,
          a = Object.create;
        n(3992).async = function (t, e) {
          var n,
            f,
            p,
            h = a(null),
            d = a(null),
            v = e.memoized,
            x = e.original;
          e.memoized = i(function (t) {
            var e = arguments,
              r = e[e.length - 1];
            return (
              "function" == typeof r && ((n = r), (e = l.call(e, 0, -1))),
              v.apply((f = this), (p = e))
            );
          }, v);
          try {
            u(e.memoized, v);
          } catch (t) {}
          e.on("get", function (t) {
            var r, o, u;
            if (n) {
              if (h[t])
                return (
                  "function" == typeof h[t] ? (h[t] = [h[t], n]) : h[t].push(n),
                  void (n = null)
                );
              (r = n),
                (o = f),
                (u = p),
                (n = f = p = null),
                s(function () {
                  var i;
                  hasOwnProperty.call(d, t)
                    ? ((i = d[t]),
                      e.emit("getasync", t, u, o),
                      c.call(r, i.context, i.args))
                    : ((n = r), (f = o), (p = u), v.apply(o, u));
                });
            }
          }),
            (e.original = function () {
              var t, o, u, i;
              return n
                ? ((t = r(arguments)),
                  (o = function t(n) {
                    var o,
                      u,
                      l = t.id;
                    if (null != l) {
                      if ((delete t.id, (o = h[l]), delete h[l], o))
                        return (
                          (u = r(arguments)),
                          e.has(l) &&
                            (n
                              ? e.delete(l)
                              : ((d[l] = { context: this, args: u }),
                                e.emit(
                                  "setasync",
                                  l,
                                  "function" == typeof o ? 1 : o.length
                                ))),
                          "function" == typeof o
                            ? (i = c.call(o, this, u))
                            : o.forEach(function (t) {
                                i = c.call(t, this, u);
                              }, this),
                          i
                        );
                    } else s(c.bind(t, this, arguments));
                  }),
                  (u = n),
                  (n = f = p = null),
                  t.push(o),
                  (i = c.call(x, this, t)),
                  (o.cb = u),
                  (n = o),
                  i)
                : c.call(x, this, arguments);
            }),
            e.on("set", function (t) {
              n
                ? (h[t]
                    ? "function" == typeof h[t]
                      ? (h[t] = [h[t], n.cb])
                      : h[t].push(n.cb)
                    : (h[t] = n.cb),
                  delete n.cb,
                  (n.id = t),
                  (n = null))
                : e.delete(t);
            }),
            e.on("delete", function (t) {
              var n;
              hasOwnProperty.call(h, t) ||
                (d[t] &&
                  ((n = d[t]),
                  delete d[t],
                  e.emit("deleteasync", t, l.call(n.args, 1))));
            }),
            e.on("clear", function () {
              var t = d;
              (d = a(null)),
                e.emit(
                  "clearasync",
                  o(t, function (t) {
                    return l.call(t.args, 1);
                  })
                );
            });
        };
      },
      5545: function (t, e, n) {
        "use strict";
        var r = n(1290),
          o = n(7031),
          u = n(3992),
          i = Function.prototype.apply;
        u.dispose = function (t, e, n) {
          var s;
          if ((r(t), (n.async && u.async) || (n.promise && u.promise)))
            return (
              e.on(
                "deleteasync",
                (s = function (e, n) {
                  i.call(t, null, n);
                })
              ),
              void e.on("clearasync", function (t) {
                o(t, function (t, e) {
                  s(e, t);
                });
              })
            );
          e.on(
            "delete",
            (s = function (e, n) {
              t(n);
            })
          ),
            e.on("clear", function (t) {
              o(t, function (t, e) {
                s(e, t);
              });
            });
        };
      },
      9333: function (t, e, n) {
        "use strict";
        var r = n(4616),
          o = n(7031),
          u = n(7473),
          i = n(6141),
          s = n(4284),
          l = n(3992),
          c = Function.prototype,
          a = Math.max,
          f = Math.min,
          p = Object.create;
        l.maxAge = function (t, e, n) {
          var h, d, v, x;
          (t = s(t)) &&
            ((h = p(null)),
            (d =
              (n.async && l.async) || (n.promise && l.promise) ? "async" : ""),
            e.on("set" + d, function (n) {
              (h[n] = setTimeout(function () {
                e.delete(n);
              }, t)),
                "function" == typeof h[n].unref && h[n].unref(),
                x &&
                  (x[n] && "nextTick" !== x[n] && clearTimeout(x[n]),
                  (x[n] = setTimeout(function () {
                    delete x[n];
                  }, v)),
                  "function" == typeof x[n].unref && x[n].unref());
            }),
            e.on("delete" + d, function (t) {
              clearTimeout(h[t]),
                delete h[t],
                x && ("nextTick" !== x[t] && clearTimeout(x[t]), delete x[t]);
            }),
            n.preFetch &&
              (v =
                !0 === n.preFetch || isNaN(n.preFetch)
                  ? 0.333
                  : a(f(Number(n.preFetch), 1), 0)) &&
              ((x = {}),
              (v = (1 - v) * t),
              e.on("get" + d, function (t, o, s) {
                x[t] ||
                  ((x[t] = "nextTick"),
                  u(function () {
                    var u;
                    "nextTick" === x[t] &&
                      (delete x[t],
                      e.delete(t),
                      n.async && (o = r(o)).push(c),
                      (u = e.memoized.apply(s, o)),
                      n.promise &&
                        i(u) &&
                        ("function" == typeof u.done
                          ? u.done(c, c)
                          : u.then(c, c)));
                  }));
              })),
            e.on("clear" + d, function () {
              o(h, function (t) {
                clearTimeout(t);
              }),
                (h = {}),
                x &&
                  (o(x, function (t) {
                    "nextTick" !== t && clearTimeout(t);
                  }),
                  (x = {}));
            }));
        };
      },
      3896: function (t, e, n) {
        "use strict";
        var r = n(3902),
          o = n(3390),
          u = n(3992);
        u.max = function (t, e, n) {
          var i, s, l;
          (t = r(t)) &&
            ((s = o(t)),
            (i =
              (n.async && u.async) || (n.promise && u.promise) ? "async" : ""),
            e.on(
              "set" + i,
              (l = function (t) {
                void 0 !== (t = s.hit(t)) && e.delete(t);
              })
            ),
            e.on("get" + i, l),
            e.on("delete" + i, s.delete),
            e.on("clear" + i, s.clear));
        };
      },
      3217: function (t, e, n) {
        "use strict";
        var r = n(1465),
          o = n(9474),
          u = n(8494),
          i = n(8979),
          s = n(6141),
          l = n(7473),
          c = Object.create,
          a = o("then", "then:finally", "done", "done:finally");
        n(3992).promise = function (t, e) {
          var n = c(null),
            o = c(null),
            f = c(null);
          if (!0 === t) t = null;
          else if (((t = u(t)), !a[t]))
            throw new TypeError("'" + i(t) + "' is not valid promise mode");
          e.on("set", function (r, u, i) {
            var c = !1;
            if (!s(i)) return (o[r] = i), void e.emit("setasync", r, 1);
            (n[r] = 1), (f[r] = i);
            var a = function (t) {
                var u = n[r];
                if (c)
                  throw new Error(
                    "Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead."
                  );
                u && (delete n[r], (o[r] = t), e.emit("setasync", r, u));
              },
              p = function () {
                (c = !0), n[r] && (delete n[r], delete f[r], e.delete(r));
              },
              h = t;
            if ((h || (h = "then"), "then" === h)) {
              var d = function () {
                l(p);
              };
              "function" ==
                typeof (i = i.then(function (t) {
                  l(a.bind(this, t));
                }, d)).finally && i.finally(d);
            } else if ("done" === h) {
              if ("function" != typeof i.done)
                throw new Error(
                  "Memoizee error: Retrieved promise does not implement 'done' in 'done' mode"
                );
              i.done(a, p);
            } else if ("done:finally" === h) {
              if ("function" != typeof i.done)
                throw new Error(
                  "Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode"
                );
              if ("function" != typeof i.finally)
                throw new Error(
                  "Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode"
                );
              i.done(a), i.finally(p);
            }
          }),
            e.on("get", function (t, r, o) {
              var u;
              if (n[t]) ++n[t];
              else {
                u = f[t];
                var i = function () {
                  e.emit("getasync", t, r, o);
                };
                s(u)
                  ? "function" == typeof u.done
                    ? u.done(i)
                    : u.then(function () {
                        l(i);
                      })
                  : i();
              }
            }),
            e.on("delete", function (t) {
              if ((delete f[t], n[t])) delete n[t];
              else if (hasOwnProperty.call(o, t)) {
                var r = o[t];
                delete o[t], e.emit("deleteasync", t, [r]);
              }
            }),
            e.on("clear", function () {
              var t = o;
              (o = c(null)),
                (n = c(null)),
                (f = c(null)),
                e.emit(
                  "clearasync",
                  r(t, function (t) {
                    return [t];
                  })
                );
            });
        };
      },
      9425: function (t, e, n) {
        "use strict";
        var r = n(1804),
          o = n(3992),
          u = Object.create,
          i = Object.defineProperties;
        o.refCounter = function (t, e, n) {
          var s, l;
          (s = u(null)),
            (l =
              (n.async && o.async) || (n.promise && o.promise) ? "async" : ""),
            e.on("set" + l, function (t, e) {
              s[t] = e || 1;
            }),
            e.on("get" + l, function (t) {
              ++s[t];
            }),
            e.on("delete" + l, function (t) {
              delete s[t];
            }),
            e.on("clear" + l, function () {
              s = {};
            }),
            i(e.memoized, {
              deleteRef: r(function () {
                var t = e.get(arguments);
                return null === t
                  ? null
                  : s[t]
                  ? !--s[t] && (e.delete(t), !0)
                  : null;
              }),
              getRefCount: r(function () {
                var t = e.get(arguments);
                return null === t ? 0 : s[t] ? s[t] : 0;
              }),
            });
        };
      },
      4156: function (t, e, n) {
        "use strict";
        var r = n(5516),
          o = n(5149),
          u = n(5730);
        t.exports = function (t) {
          var e,
            i = r(arguments[1]);
          return (
            i.normalizer ||
              (0 !== (e = i.length = o(i.length, t.length, i.async)) &&
                (i.primitive
                  ? !1 === e
                    ? (i.normalizer = n(6289))
                    : e > 1 && (i.normalizer = n(5398)(e))
                  : (i.normalizer =
                      !1 === e
                        ? n(7996)()
                        : 1 === e
                        ? n(9009)()
                        : n(1070)(e)))),
            i.async && n(4758),
            i.promise && n(3217),
            i.dispose && n(5545),
            i.maxAge && n(9333),
            i.max && n(3896),
            i.refCounter && n(9425),
            u(t, i)
          );
        };
      },
      5340: function (t, e, n) {
        "use strict";
        var r = n(6380),
          o = n(1381),
          u = n(1804),
          i = n(8370).methods,
          s = n(1923),
          l = n(8544),
          c = Function.prototype.apply,
          a = Function.prototype.call,
          f = Object.create,
          p = Object.defineProperties,
          h = i.on,
          d = i.emit;
        t.exports = function (t, e, n) {
          var i,
            v,
            x,
            y,
            m,
            P,
            b,
            g,
            A,
            _,
            C,
            w,
            O,
            j,
            k,
            S = f(null);
          return (
            (v = !1 !== e ? e : isNaN(t.length) ? 1 : t.length),
            n.normalizer &&
              ((_ = l(n.normalizer)),
              (x = _.get),
              (y = _.set),
              (m = _.delete),
              (P = _.clear)),
            null != n.resolvers && (k = s(n.resolvers)),
            (j = x
              ? o(function (e) {
                  var n,
                    o,
                    u = arguments;
                  if (
                    (k && (u = k(u)),
                    null !== (n = x(u)) && hasOwnProperty.call(S, n))
                  )
                    return C && i.emit("get", n, u, this), S[n];
                  if (
                    ((o =
                      1 === u.length
                        ? a.call(t, this, u[0])
                        : c.call(t, this, u)),
                    null === n)
                  ) {
                    if (null !== (n = x(u)))
                      throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    n = y(u);
                  } else if (hasOwnProperty.call(S, n)) throw r("Circular invocation", "CIRCULAR_INVOCATION");
                  return (S[n] = o), w && i.emit("set", n, null, o), o;
                }, v)
              : 0 === e
              ? function () {
                  var e;
                  if (hasOwnProperty.call(S, "data"))
                    return C && i.emit("get", "data", arguments, this), S.data;
                  if (
                    ((e = arguments.length
                      ? c.call(t, this, arguments)
                      : a.call(t, this)),
                    hasOwnProperty.call(S, "data"))
                  )
                    throw r("Circular invocation", "CIRCULAR_INVOCATION");
                  return (S.data = e), w && i.emit("set", "data", null, e), e;
                }
              : function (e) {
                  var n,
                    o,
                    u = arguments;
                  if (
                    (k && (u = k(arguments)),
                    (o = String(u[0])),
                    hasOwnProperty.call(S, o))
                  )
                    return C && i.emit("get", o, u, this), S[o];
                  if (
                    ((n =
                      1 === u.length
                        ? a.call(t, this, u[0])
                        : c.call(t, this, u)),
                    hasOwnProperty.call(S, o))
                  )
                    throw r("Circular invocation", "CIRCULAR_INVOCATION");
                  return (S[o] = n), w && i.emit("set", o, null, n), n;
                }),
            (i = {
              original: t,
              memoized: j,
              profileName: n.profileName,
              get: function (t) {
                return k && (t = k(t)), x ? x(t) : String(t[0]);
              },
              has: function (t) {
                return hasOwnProperty.call(S, t);
              },
              delete: function (t) {
                var e;
                hasOwnProperty.call(S, t) &&
                  (m && m(t),
                  (e = S[t]),
                  delete S[t],
                  O && i.emit("delete", t, e));
              },
              clear: function () {
                var t = S;
                P && P(), (S = f(null)), i.emit("clear", t);
              },
              on: function (t, e) {
                return (
                  "get" === t
                    ? (C = !0)
                    : "set" === t
                    ? (w = !0)
                    : "delete" === t && (O = !0),
                  h.call(this, t, e)
                );
              },
              emit: d,
              updateEnv: function () {
                t = i.original;
              },
            }),
            (b = x
              ? o(function (t) {
                  var e,
                    n = arguments;
                  k && (n = k(n)), null !== (e = x(n)) && i.delete(e);
                }, v)
              : 0 === e
              ? function () {
                  return i.delete("data");
                }
              : function (t) {
                  return k && (t = k(arguments)[0]), i.delete(t);
                }),
            (g = o(function () {
              var t,
                n = arguments;
              return 0 === e
                ? S.data
                : (k && (n = k(n)), (t = x ? x(n) : String(n[0])), S[t]);
            })),
            (A = o(function () {
              var t,
                n = arguments;
              return 0 === e
                ? i.has("data")
                : (k && (n = k(n)),
                  null !== (t = x ? x(n) : String(n[0])) && i.has(t));
            })),
            p(j, {
              __memoized__: u(!0),
              delete: u(b),
              clear: u(i.clear),
              _get: u(g),
              _has: u(A),
            }),
            i
          );
        };
      },
      3992: function () {},
      5149: function (t, e, n) {
        "use strict";
        var r = n(3902);
        t.exports = function (t, e, n) {
          var o;
          return isNaN(t)
            ? (o = e) >= 0
              ? n && o
                ? o - 1
                : o
              : 1
            : !1 !== t && r(t);
        };
      },
      8544: function (t, e, n) {
        "use strict";
        var r = n(1290);
        t.exports = function (t) {
          var e;
          return "function" == typeof t
            ? { set: t, get: t }
            : ((e = { get: r(t.get) }),
              void 0 !== t.set
                ? ((e.set = r(t.set)),
                  t.delete && (e.delete = r(t.delete)),
                  t.clear && (e.clear = r(t.clear)),
                  e)
                : ((e.set = e.get), e));
        };
      },
      1923: function (t, e, n) {
        "use strict";
        var r,
          o = n(5083),
          u = n(6914),
          i = n(1290),
          s = Array.prototype.slice;
        (r = function (t) {
          return this.map(function (e, n) {
            return e ? e(t[n]) : t[n];
          }).concat(s.call(t, this.length));
        }),
          (t.exports = function (t) {
            return (
              (t = o(t)).forEach(function (t) {
                u(t) && i(t);
              }),
              r.bind(t)
            );
          });
      },
      9009: function (t, e, n) {
        "use strict";
        var r = n(2041);
        t.exports = function () {
          var t = 0,
            e = [],
            n = [];
          return {
            get: function (t) {
              var o = r.call(e, t[0]);
              return -1 === o ? null : n[o];
            },
            set: function (r) {
              return e.push(r[0]), n.push(++t), t;
            },
            delete: function (t) {
              var o = r.call(n, t);
              -1 !== o && (e.splice(o, 1), n.splice(o, 1));
            },
            clear: function () {
              (e = []), (n = []);
            },
          };
        };
      },
      1070: function (t, e, n) {
        "use strict";
        var r = n(2041),
          o = Object.create;
        t.exports = function (t) {
          var e = 0,
            n = [[], []],
            u = o(null);
          return {
            get: function (e) {
              for (var o, u = 0, i = n; u < t - 1; ) {
                if (-1 === (o = r.call(i[0], e[u]))) return null;
                (i = i[1][o]), ++u;
              }
              return -1 === (o = r.call(i[0], e[u])) ? null : i[1][o] || null;
            },
            set: function (o) {
              for (var i, s = 0, l = n; s < t - 1; )
                -1 === (i = r.call(l[0], o[s])) &&
                  ((i = l[0].push(o[s]) - 1), l[1].push([[], []])),
                  (l = l[1][i]),
                  ++s;
              return (
                -1 === (i = r.call(l[0], o[s])) && (i = l[0].push(o[s]) - 1),
                (l[1][i] = ++e),
                (u[e] = o),
                e
              );
            },
            delete: function (e) {
              for (var o, i = 0, s = n, l = [], c = u[e]; i < t - 1; ) {
                if (-1 === (o = r.call(s[0], c[i]))) return;
                l.push(s, o), (s = s[1][o]), ++i;
              }
              if (-1 !== (o = r.call(s[0], c[i]))) {
                for (
                  e = s[1][o], s[0].splice(o, 1), s[1].splice(o, 1);
                  !s[0].length && l.length;

                )
                  (o = l.pop()),
                    (s = l.pop())[0].splice(o, 1),
                    s[1].splice(o, 1);
                delete u[e];
              }
            },
            clear: function () {
              (n = [[], []]), (u = o(null));
            },
          };
        };
      },
      5398: function (t) {
        "use strict";
        t.exports = function (t) {
          return t
            ? function (e) {
                for (var n = String(e[0]), r = 0, o = t; --o; )
                  n += "" + e[++r];
                return n;
              }
            : function () {
                return "";
              };
        };
      },
      7996: function (t, e, n) {
        "use strict";
        var r = n(2041),
          o = Object.create;
        t.exports = function () {
          var t = 0,
            e = [],
            n = o(null);
          return {
            get: function (t) {
              var n,
                o = 0,
                u = e,
                i = t.length;
              if (0 === i) return u[i] || null;
              if ((u = u[i])) {
                for (; o < i - 1; ) {
                  if (-1 === (n = r.call(u[0], t[o]))) return null;
                  (u = u[1][n]), ++o;
                }
                return -1 === (n = r.call(u[0], t[o])) ? null : u[1][n] || null;
              }
              return null;
            },
            set: function (o) {
              var u,
                i = 0,
                s = e,
                l = o.length;
              if (0 === l) s[l] = ++t;
              else {
                for (s[l] || (s[l] = [[], []]), s = s[l]; i < l - 1; )
                  -1 === (u = r.call(s[0], o[i])) &&
                    ((u = s[0].push(o[i]) - 1), s[1].push([[], []])),
                    (s = s[1][u]),
                    ++i;
                -1 === (u = r.call(s[0], o[i])) && (u = s[0].push(o[i]) - 1),
                  (s[1][u] = ++t);
              }
              return (n[t] = o), t;
            },
            delete: function (t) {
              var o,
                u = 0,
                i = e,
                s = n[t],
                l = s.length,
                c = [];
              if (0 === l) delete i[l];
              else if ((i = i[l])) {
                for (; u < l - 1; ) {
                  if (-1 === (o = r.call(i[0], s[u]))) return;
                  c.push(i, o), (i = i[1][o]), ++u;
                }
                if (-1 === (o = r.call(i[0], s[u]))) return;
                for (
                  t = i[1][o], i[0].splice(o, 1), i[1].splice(o, 1);
                  !i[0].length && c.length;

                )
                  (o = c.pop()),
                    (i = c.pop())[0].splice(o, 1),
                    i[1].splice(o, 1);
              }
              delete n[t];
            },
            clear: function () {
              (e = []), (n = o(null));
            },
          };
        };
      },
      6289: function (t) {
        "use strict";
        t.exports = function (t) {
          var e,
            n,
            r = t.length;
          if (!r) return "";
          for (e = String(t[(n = 0)]); --r; ) e += "" + t[++n];
          return e;
        };
      },
      5730: function (t, e, n) {
        "use strict";
        var r = n(1290),
          o = n(7031),
          u = n(3992),
          i = n(5340),
          s = n(5149);
        t.exports = function t(e) {
          var n, l, c;
          if ((r(e), (n = Object(arguments[1])).async && n.promise))
            throw new Error(
              "Options 'async' and 'promise' cannot be used together"
            );
          return hasOwnProperty.call(e, "__memoized__") && !n.force
            ? e
            : ((l = s(n.length, e.length, n.async && u.async)),
              (c = i(e, l, n)),
              o(u, function (t, e) {
                n[e] && t(n[e], c, n);
              }),
              t.__profiler__ && t.__profiler__(c),
              c.updateEnv(),
              c.memoized);
        };
      },
      7473: function (t) {
        "use strict";
        var e = function (t) {
            if ("function" != typeof t)
              throw new TypeError(t + " is not a function");
            return t;
          },
          n = function (t) {
            var n,
              r,
              o = document.createTextNode(""),
              u = 0;
            return (
              new t(function () {
                var t;
                if (n) r && (n = r.concat(n));
                else {
                  if (!r) return;
                  n = r;
                }
                if (((r = n), (n = null), "function" == typeof r))
                  return (t = r), (r = null), void t();
                for (o.data = u = ++u % 2; r; )
                  (t = r.shift()), r.length || (r = null), t();
              }).observe(o, { characterData: !0 }),
              function (t) {
                e(t),
                  n
                    ? "function" == typeof n
                      ? (n = [n, t])
                      : n.push(t)
                    : ((n = t), (o.data = u = ++u % 2));
              }
            );
          };
        t.exports = (function () {
          if (
            "object" == typeof process &&
            process &&
            "function" == typeof process.nextTick
          )
            return process.nextTick;
          if ("function" == typeof queueMicrotask)
            return function (t) {
              queueMicrotask(e(t));
            };
          if ("object" == typeof document && document) {
            if ("function" == typeof MutationObserver)
              return n(MutationObserver);
            if ("function" == typeof WebKitMutationObserver)
              return n(WebKitMutationObserver);
          }
          return "function" == typeof setImmediate
            ? function (t) {
                setImmediate(e(t));
              }
            : "function" == typeof setTimeout || "object" == typeof setTimeout
            ? function (t) {
                setTimeout(e(t), 0);
              }
            : null;
        })();
      },
      6148: function (t) {
        "use strict";
        function e(t, n, r, o) {
          (this.message = t),
            (this.expected = n),
            (this.found = r),
            (this.location = o),
            (this.name = "SyntaxError"),
            "function" == typeof Error.captureStackTrace &&
              Error.captureStackTrace(this, e);
        }
        !(function (t, e) {
          function n() {
            this.constructor = t;
          }
          (n.prototype = e.prototype), (t.prototype = new n());
        })(e, Error),
          (e.buildMessage = function (t, e) {
            var n = {
              literal: function (t) {
                return '"' + o(t.text) + '"';
              },
              class: function (t) {
                var e,
                  n = "";
                for (e = 0; e < t.parts.length; e++)
                  n +=
                    t.parts[e] instanceof Array
                      ? u(t.parts[e][0]) + "-" + u(t.parts[e][1])
                      : u(t.parts[e]);
                return "[" + (t.inverted ? "^" : "") + n + "]";
              },
              any: function (t) {
                return "any character";
              },
              end: function (t) {
                return "end of input";
              },
              other: function (t) {
                return t.description;
              },
            };
            function r(t) {
              return t.charCodeAt(0).toString(16).toUpperCase();
            }
            function o(t) {
              return t
                .replace(/\\/g, "\\\\")
                .replace(/"/g, '\\"')
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, function (t) {
                  return "\\x0" + r(t);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                  return "\\x" + r(t);
                });
            }
            function u(t) {
              return t
                .replace(/\\/g, "\\\\")
                .replace(/\]/g, "\\]")
                .replace(/\^/g, "\\^")
                .replace(/-/g, "\\-")
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, function (t) {
                  return "\\x0" + r(t);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                  return "\\x" + r(t);
                });
            }
            return (
              "Expected " +
              (function (t) {
                var e,
                  r,
                  o,
                  u = new Array(t.length);
                for (e = 0; e < t.length; e++)
                  u[e] = ((o = t[e]), n[o.type](o));
                if ((u.sort(), u.length > 0)) {
                  for (e = 1, r = 1; e < u.length; e++)
                    u[e - 1] !== u[e] && ((u[r] = u[e]), r++);
                  u.length = r;
                }
                switch (u.length) {
                  case 1:
                    return u[0];
                  case 2:
                    return u[0] + " or " + u[1];
                  default:
                    return (
                      u.slice(0, -1).join(", ") + ", or " + u[u.length - 1]
                    );
                }
              })(t) +
              " but " +
              (function (t) {
                return t ? '"' + o(t) + '"' : "end of input";
              })(e) +
              " found."
            );
          }),
          (t.exports = {
            SyntaxError: e,
            parse: function (t, n) {
              n = void 0 !== n ? n : {};
              var r,
                o = {},
                u = { start: Fe },
                i = Fe,
                s = function () {
                  return {
                    column: ke().start.column - 1,
                    line: ke().start.line,
                  };
                },
                l = "=",
                c = Se("=", !1),
                a = ">",
                f = Se(">", !1),
                p = function (t, e) {
                  return Xn("keyword", t, e);
                },
                h = Se("nop", !1),
                d = "return",
                v = Se("return", !1),
                x = "break",
                y = Se("break", !1),
                m = "continue",
                P = Se("continue", !1),
                b = "loop",
                g = Se("loop", !1),
                A = "goto",
                _ = Se("goto", !1),
                C = "join",
                w = Se("join", !1),
                O = "call",
                j = Se("call", !1),
                k = Se("try", !1),
                S = "catch",
                T = Se("catch", !1),
                E = "block",
                N = Se("block", !1),
                z = "while",
                F = Se("while", !1),
                M = Se("do", !1),
                R = Se("for", !1),
                I = "match",
                L = Se("match", !1),
                U = "switch",
                q = Se("switch", !1),
                D = "case",
                V = Se("case", !1),
                J = "branch",
                K = Se("branch", !1),
                W = Se("if", !1),
                $ = "else",
                B = Se("else", !1),
                H = "function",
                Z = Se("function", !1),
                G = "macro",
                Q = Se("macro", !1),
                X = ";",
                Y = Se(";", !1),
                tt = Se(",", !1),
                et = /^[\n]/,
                nt = Te(["\n"], !1, !1),
                rt = /^[^\t\n\r :;[\],()\\]/,
                ot = Te(
                  [
                    "\t",
                    "\n",
                    "\r",
                    " ",
                    ":",
                    ";",
                    "[",
                    "]",
                    ",",
                    "(",
                    ")",
                    "\\",
                  ],
                  !0,
                  !1
                ),
                ut = ":",
                it = Se(":", !1),
                st = function (t, e, n) {
                  return n;
                },
                lt = "**",
                ct = Se("**", !1),
                at = function (t) {
                  return t.join("");
                },
                ft = "*",
                pt = Se("*", !1),
                ht = "`",
                dt = Se("`", !1),
                vt = /^[^\\(){};*` ]/,
                xt = Te(["\\", "(", ")", "{", "}", ";", "*", "`", " "], !0, !1),
                yt = "\\",
                mt = Se("\\", !1),
                Pt = "(",
                bt = Se("(", !1),
                gt = ")",
                At = Se(")", !1),
                _t = "{",
                Ct = Se("{", !1),
                wt = "}",
                Ot = Se("}", !1),
                jt = /^[^[\];]/,
                kt = Te(["[", "]", ";"], !0, !1),
                St = "[",
                Tt = Se("[", !1),
                Et = "]",
                Nt = Se("]", !1),
                zt = /^[^\\;{}:]/,
                Ft = Te(["\\", ";", "{", "}", ":"], !0, !1),
                Mt = "default",
                Rt = Se("default", !1),
                It = /^[^\\;=>{}]/,
                Lt = Te(["\\", ";", "=", ">", "{", "}"], !0, !1),
                Ut = function (t, e) {
                  return e;
                },
                qt = /^[\S\s]/,
                Dt = Te([], !0, !1),
                Vt = /^[^() ]/,
                Jt = Te(["(", ")", " "], !0, !1),
                Kt = "<",
                Wt = Se("<", !1),
                $t = Se("#", !1),
                Bt = Se("//", !1),
                Ht = Se("/*", !1),
                Zt = "*/",
                Gt = Se("*/", !1),
                Qt = function (t, e, n) {
                  return n;
                },
                Xt = { type: "any" },
                Yt = /^[\t ]/,
                te = Te(["\t", " "], !1, !1),
                ee = /^[^\n]/,
                ne = Te(["\n"], !0, !1),
                re = /^[\t\n\r ]/,
                oe = Te(["\t", "\n", "\r", " "], !1, !1),
                ue = /^[ \t]/,
                ie = Te([" ", "\t"], !1, !1),
                se = /^[^(]/,
                le = Te(["("], !0, !1),
                ce = function (t, e) {
                  Xn("one_star", t, e);
                },
                ae = function (t, e) {
                  Xn("two_star", t, e);
                },
                fe = function (t, e) {
                  return Xn("grave", t, e), "`";
                },
                pe = /^[^<>\\;{}[\]*`\n\t ]/,
                he = Te(
                  [
                    "<",
                    ">",
                    "\\",
                    ";",
                    "{",
                    "}",
                    "[",
                    "]",
                    "*",
                    "`",
                    "\n",
                    "\t",
                    " ",
                  ],
                  !0,
                  !1
                ),
                de = function (t) {
                  return t.join("");
                },
                ve = Se("\\\\", !1),
                xe = Se("/", !1),
                ye = /^[\n\r\u2028\u2029]/,
                me = Te(["\n", "\r", "\u2028", "\u2029"], !1, !1),
                Pe = /^[^\n\r\u2028\u2029]/,
                be = Te(["\n", "\r", "\u2028", "\u2029"], !0, !1),
                ge = 0,
                Ae = 0,
                _e = [{ line: 1, column: 1 }],
                Ce = 0,
                we = [],
                Oe = 0,
                je = {};
              if ("startRule" in n) {
                if (!(n.startRule in u))
                  throw new Error(
                    "Can't start parsing from rule \"" + n.startRule + '".'
                  );
                i = u[n.startRule];
              }
              function ke() {
                return Ne(Ae, ge);
              }
              function Se(t, e) {
                return { type: "literal", text: t, ignoreCase: e };
              }
              function Te(t, e, n) {
                return { type: "class", parts: t, inverted: e, ignoreCase: n };
              }
              function Ee(e) {
                var n,
                  r = _e[e];
                if (r) return r;
                for (n = e - 1; !_e[n]; ) n--;
                for (r = { line: (r = _e[n]).line, column: r.column }; n < e; )
                  10 === t.charCodeAt(n)
                    ? (r.line++, (r.column = 1))
                    : r.column++,
                    n++;
                return (_e[e] = r), r;
              }
              function Ne(t, e) {
                var n = Ee(t),
                  r = Ee(e);
                return {
                  start: { offset: t, line: n.line, column: n.column },
                  end: { offset: e, line: r.line, column: r.column },
                };
              }
              function ze(t) {
                ge < Ce || (ge > Ce && ((Ce = ge), (we = [])), we.push(t));
              }
              function Fe() {
                var e,
                  r,
                  u = 125 * ge + 0,
                  i = je[u];
                return i
                  ? ((ge = i.nextPos), i.result)
                  : ((e = ge),
                    (Ae = ge),
                    (Gn = t.split(/\n/)),
                    void 0 !== o &&
                    (r = (function () {
                      var t,
                        e,
                        n,
                        r = 125 * ge + 1,
                        u = je[r];
                      if (u) return (ge = u.nextPos), u.result;
                      if (((t = ge), wn() !== o)) {
                        for (e = [], (n = hn()) === o && (n = pn()); n !== o; )
                          e.push(n), (n = hn()) === o && (n = pn());
                        e !== o
                          ? ((Ae = t),
                            (t = {
                              instructions: e.filter(function (t) {
                                return !!t;
                              }),
                            }))
                          : ((ge = t), (t = o));
                      } else (ge = t), (t = o);
                      return (je[r] = { nextPos: ge, result: t }), t;
                    })()) !== o
                      ? ((Ae = e),
                        (e = (function (t) {
                          if (
                            ($n.forEach(function (t) {
                              Hn[t.value] || (t.type += ".invalid");
                            }),
                            Bn.forEach(function (t) {
                              Zn[t.value] || (t.type += ".invalid");
                            }),
                            n.doTokens)
                          ) {
                            var e = [];
                            Wn.forEach(function (t) {
                              e = e.concat(t);
                            }),
                              (t.tokens = (function (t) {
                                var e = {};
                                t.forEach(function (t) {
                                  if (t.to && t.from) {
                                    t.line = t.from.line;
                                    for (
                                      var n = t.from.column,
                                        r = t.to.column,
                                        o = t.from.line;
                                      o <= t.to.line;
                                      ++o
                                    ) {
                                      o < t.to.line &&
                                        t.from.line != t.to.line &&
                                        (r = Gn[o - 1].length),
                                        o > t.from.line &&
                                          ((n = 0),
                                          o == t.to.line && (r = t.to.column));
                                      var u = { type: t.type };
                                      (u.from = n),
                                        (u.to = r),
                                        (u.value = Gn[o - 1].substring(
                                          u.from,
                                          u.to
                                        )),
                                        e[o - 1] || (e[o - 1] = []),
                                        e[o - 1].push(u);
                                    }
                                  }
                                }),
                                  Object.keys(e).forEach(function (t) {
                                    e[t] = e[t].sort(function (t, e) {
                                      return t.from - e.from;
                                    });
                                    for (
                                      var n = [], r = e[t].length, o = 0;
                                      o < r - 1;
                                      ++o
                                    ) {
                                      var u = e[t][o],
                                        i = e[t][o + 1];
                                      u.from == i.from ||
                                        u.to > i.from ||
                                        n.push(u);
                                    }
                                    r && n.push(e[t][r - 1]), (e[t] = n);
                                  });
                                var n = 0;
                                Gn = Gn.map(function (t) {
                                  var r = (function (t, e, n) {
                                    e = e.map(function (e) {
                                      return {
                                        from: e.from,
                                        to: e.to,
                                        type: e.type,
                                        value: t.substring(e.from, e.to),
                                      };
                                    });
                                    for (var r = -1, o = 0; o < e.length; ++o)
                                      if (e[o].from > r) {
                                        var u = {
                                          from: r + 1,
                                          to: e[o].from,
                                          type: "text",
                                        };
                                        (u.value = t.substring(u.from, u.to)),
                                          (r = e[o].to - 1),
                                          u.to > 0 && (e.splice(o, 0, u), o++);
                                      }
                                    return (
                                      r < t.length &&
                                        (((u = {
                                          from: r + 1,
                                          to: t.length,
                                          type: "text",
                                        }).value = t.substring(u.from, u.to)),
                                        e.push(u)),
                                      e.filter(function (t) {
                                        return t.from != t.to;
                                      })
                                    );
                                  })(t, e[n] ? e[n] : []);
                                  return n++, r;
                                });
                                for (var r = [], o = 0; o < Gn.length; ++o)
                                  r[o] = Gn[o];
                                return r;
                              })(e));
                          }
                          return (
                            (t.comments = Qn.sort(
                              (t, e) =>
                                t.from.line - e.from.line ||
                                t.from.column - e.from.column
                            )),
                            t
                          );
                        })(r)))
                      : ((ge = e), (e = o)),
                    (je[u] = { nextPos: ge, result: e }),
                    e);
              }
              function Me() {
                var t,
                  e,
                  n = 125 * ge + 2,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : ((t = ge),
                    (e = "") !== o && ((Ae = t), (e = s())),
                    (t = e),
                    (je[n] = { nextPos: ge, result: t }),
                    t);
              }
              function Re() {
                var t,
                  e,
                  n = 125 * ge + 3,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : ((t = ge),
                    (e = "") !== o && ((Ae = t), (e = s())),
                    (t = e),
                    (je[n] = { nextPos: ge, result: t }),
                    t);
              }
              function Ie() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 15,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (t.substr(ge, 5) === z
                          ? ((r = z), (ge += 5))
                          : ((r = o), 0 === Oe && ze(F)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = p(n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function Le() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 26,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (59 === t.charCodeAt(ge)
                          ? ((r = X), ge++)
                          : ((r = o), 0 === Oe && ze(Y)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = void Xn("semicolon", n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function Ue() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 27,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (44 === t.charCodeAt(ge)
                          ? ((r = ","), ge++)
                          : ((r = o), 0 === Oe && ze(tt)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = void Xn("comma", n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function qe() {
                var e,
                  n,
                  r,
                  u = 125 * ge + 30,
                  i = je[u];
                return i
                  ? ((ge = i.nextPos), i.result)
                  : ((e = ge),
                    (function () {
                      var e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 6,
                        s = je[i];
                      return s
                        ? ((ge = s.nextPos), s.result)
                        : ((e = ge),
                          (n = Me()) !== o
                            ? (t.substr(ge, 6) === d
                                ? ((r = d), (ge += 6))
                                : ((r = o), 0 === Oe && ze(v)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e), (e = n = void Xn("keyword", n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          (je[i] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    (function () {
                      var e,
                        n,
                        r,
                        u = 125 * ge + 100,
                        i = je[u];
                      if (i) return (ge = i.nextPos), i.result;
                      for (
                        e = ge,
                          n = [],
                          (r = Pn()) === o &&
                            (r = bn()) === o &&
                            (Yt.test(t.charAt(ge))
                              ? ((r = t.charAt(ge)), ge++)
                              : ((r = o), 0 === Oe && ze(te)),
                            r === o && (r = _n()));
                        r !== o;

                      )
                        n.push(r),
                          (r = Pn()) === o &&
                            (r = bn()) === o &&
                            (Yt.test(t.charAt(ge))
                              ? ((r = t.charAt(ge)), ge++)
                              : ((r = o), 0 === Oe && ze(te)),
                            r === o && (r = _n()));
                      return (
                        n !== o && ((Ae = e), (n = void 0)),
                        (e = n),
                        (je[u] = { nextPos: ge, result: e }),
                        e
                      );
                    })() !== o
                      ? ((n = yn()) === o && (n = null),
                        n !== o && wn() !== o
                          ? ((r = Le()) === o && (r = null),
                            r !== o
                              ? ((Ae = e), (e = { return: { expression: n } }))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[u] = { nextPos: ge, result: e }),
                    e);
              }
              function De() {
                var e,
                  n = 125 * ge + 33,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : (rt.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(ot)),
                    (je[n] = { nextPos: ge, result: e }),
                    e);
              }
              function Ve() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 35,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                if (((t = ge), Me() !== o)) {
                  if (((e = []), (n = De()) !== o))
                    for (; n !== o; ) e.push(n), (n = De());
                  else e = o;
                  e !== o && (n = Re()) !== o
                    ? ((Ae = t), (t = e.join("").trim()))
                    : ((ge = t), (t = o));
                } else (ge = t), (t = o);
                return (je[r] = { nextPos: ge, result: t }), t;
              }
              function Je() {
                var t,
                  e,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c = 125 * ge + 37,
                  a = je[c];
                return a
                  ? ((ge = a.nextPos), a.result)
                  : ((t = ge),
                    (e = Me()) !== o && (r = Ve()) !== o && (u = Re()) !== o
                      ? ((Ae = t),
                        (i = e),
                        (s = r),
                        (l = u),
                        n.doTokens && Bn.push(Xn("branch_reference", i, l, s)),
                        (t = e = s))
                      : ((ge = t), (t = o)),
                    (je[c] = { nextPos: ge, result: t }),
                    t);
              }
              function Ke() {
                var t,
                  e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l = 125 * ge + 45,
                  c = je[l];
                return c
                  ? ((ge = c.nextPos), c.result)
                  : ((t = ge),
                    (e = ge),
                    (n = He()) === o && (n = null),
                    n !== o && (r = un()) !== o
                      ? ((u = Ke()) === o && (u = null),
                        u !== o
                          ? ((i = sn()) === o && (i = null),
                            i !== o
                              ? ((s = He()) === o && (s = null),
                                s !== o
                                  ? (e = n = [n, r, u, i, s])
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    e !== o && ((Ae = t), (e = e.join(""))),
                    (t = e) === o &&
                      ((t = ge),
                      (e = He()) !== o && ((Ae = t), (e = e)),
                      (t = e)),
                    (je[l] = { nextPos: ge, result: t }),
                    t);
              }
              function We() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 46,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                if (((t = ge), (e = []), (n = Ge()) !== o))
                  for (; n !== o; ) e.push(n), (n = Ge());
                else e = o;
                return (
                  e !== o && ((Ae = t), (e = e.join(""))),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function $e() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 47,
                  l = je[s];
                if (l) return (ge = l.nextPos), l.result;
                if (
                  ((e = ge),
                  (n = []),
                  (r = ge),
                  (u = ge),
                  Oe++,
                  t.substr(ge, 2) === lt
                    ? ((i = lt), (ge += 2))
                    : ((i = o), 0 === Oe && ze(ct)),
                  Oe--,
                  i === o ? (u = void 0) : ((ge = u), (u = o)),
                  u !== o && (i = Ge()) !== o
                    ? ((Ae = r), (r = u = i))
                    : ((ge = r), (r = o)),
                  r !== o)
                )
                  for (; r !== o; )
                    n.push(r),
                      (r = ge),
                      (u = ge),
                      Oe++,
                      t.substr(ge, 2) === lt
                        ? ((i = lt), (ge += 2))
                        : ((i = o), 0 === Oe && ze(ct)),
                      Oe--,
                      i === o ? (u = void 0) : ((ge = u), (u = o)),
                      u !== o && (i = Ge()) !== o
                        ? ((Ae = r), (r = u = i))
                        : ((ge = r), (r = o));
                else n = o;
                return (
                  n !== o && ((Ae = e), (n = at(n))),
                  (e = n),
                  (je[s] = { nextPos: ge, result: e }),
                  e
                );
              }
              function Be() {
                var t,
                  e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 48,
                  l = je[s];
                return l
                  ? ((ge = l.nextPos), l.result)
                  : ((t = ge),
                    (e = Me()) !== o && (n = $e()) !== o && (r = Re()) !== o
                      ? ((Ae = t),
                        (i = n),
                        Xn("condition_text.bold", e, r),
                        (t = e = i))
                      : ((ge = t), (t = o)),
                    t === o &&
                      ((t = ge),
                      (e = Nn()) !== o &&
                      (n = Me()) !== o &&
                      (r = $e()) !== o &&
                      (u = Re()) !== o &&
                      zn() !== o
                        ? ((Ae = t),
                          (t = e =
                            (function (t, e, n) {
                              return (
                                Xn("condition_text.bold.italic", t, n),
                                "*" + e + "*"
                              );
                            })(n, r, u)))
                        : ((ge = t), (t = o))),
                    (je[s] = { nextPos: ge, result: t }),
                    t);
              }
              function He() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c = 125 * ge + 49,
                  a = je[c];
                if (a) return (ge = a.nextPos), a.result;
                if (
                  ((e = ge),
                  (n = Me()) !== o && (r = We()) !== o && (u = Re()) !== o
                    ? ((Ae = e),
                      (l = r),
                      Xn("condition_text", n, u),
                      (e = n = l))
                    : ((ge = e), (e = o)),
                  e === o)
                ) {
                  if (((e = ge), (n = Rn()) !== o))
                    if ((r = Me()) !== o) {
                      if (
                        ((u = []),
                        42 === t.charCodeAt(ge)
                          ? ((i = ft), ge++)
                          : ((i = o), 0 === Oe && ze(pt)),
                        i === o && (i = We()),
                        i !== o)
                      )
                        for (; i !== o; )
                          u.push(i),
                            42 === t.charCodeAt(ge)
                              ? ((i = ft), ge++)
                              : ((i = o), 0 === Oe && ze(pt)),
                            i === o && (i = We());
                      else u = o;
                      u !== o && (i = Re()) !== o
                        ? ((s = In()) === o && (s = null),
                          s !== o
                            ? ((Ae = e),
                              (e = n =
                                (function (t, e, n) {
                                  return (
                                    Xn("condition_text.code", t, n),
                                    "`" + e.join("") + "`"
                                  );
                                })(r, u, i)))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o));
                    } else (ge = e), (e = o);
                  else (ge = e), (e = o);
                  if (e === o) {
                    if (((e = ge), (n = Fn()) !== o))
                      if ((r = Me()) !== o) {
                        if (((u = []), (i = Be()) !== o))
                          for (; i !== o; ) u.push(i), (i = Be());
                        else u = o;
                        u !== o && (i = Re()) !== o && (s = Mn()) !== o
                          ? ((Ae = e),
                            (e = n =
                              (function (t, e, n) {
                                return "**" + e.join("") + "**";
                              })(0, u)))
                          : ((ge = e), (e = o));
                      } else (ge = e), (e = o);
                    else (ge = e), (e = o);
                    e === o &&
                      ((e = ge),
                      (n = Nn()) !== o &&
                      (r = Me()) !== o &&
                      (u = He()) !== o &&
                      (i = Re()) !== o &&
                      (s = zn()) !== o
                        ? ((Ae = e),
                          (e = n =
                            (function (t, e, n) {
                              return (
                                Xn("condition_text.italic", t, n), "*" + e + "*"
                              );
                            })(r, u, i)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        (n = Me()) !== o
                          ? (42 === t.charCodeAt(ge)
                              ? ((r = ft), ge++)
                              : ((r = o), 0 === Oe && ze(pt)),
                            r !== o && (u = Re()) !== o
                              ? ((Ae = e),
                                Xn("condition_text", n, u),
                                (e = n = "*"))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          (n = Me()) !== o
                            ? (96 === t.charCodeAt(ge)
                                ? ((r = ht), ge++)
                                : ((r = o), 0 === Oe && ze(dt)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e),
                                  (e = n =
                                    (function (t, e) {
                                      return Xn("condition_text", t, e), "`";
                                    })(n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)))));
                  }
                }
                return (je[c] = { nextPos: ge, result: e }), e;
              }
              function Ze() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 50,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                for (t = ge, e = [], n = Ke(); n !== o; ) e.push(n), (n = Ke());
                return (
                  e !== o && ((Ae = t), (e = e.join(""))),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function Ge() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 51,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : (vt.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(xt)),
                    e === o &&
                      ((e = ge),
                      (n = (function () {
                        var t,
                          e,
                          n,
                          r = 125 * ge + 105,
                          u = je[r];
                        if (u) return (ge = u.nextPos), u.result;
                        if (((t = ge), (e = []), (n = Cn()) !== o))
                          for (; n !== o; ) e.push(n), (n = Cn());
                        else e = o;
                        return (
                          e !== o && ((Ae = t), (e = e.join(""))),
                          (t = e),
                          (je[r] = { nextPos: ge, result: t }),
                          t
                        );
                      })()) !== o
                        ? ((r = ge),
                          Oe++,
                          (u = Ke()),
                          Oe--,
                          u !== o ? ((ge = r), (r = void 0)) : (r = o),
                          r !== o
                            ? ((Ae = e), (e = n = n))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        92 === t.charCodeAt(ge)
                          ? ((n = yt), ge++)
                          : ((n = o), 0 === Oe && ze(mt)),
                        n !== o
                          ? (96 === t.charCodeAt(ge)
                              ? ((r = ht), ge++)
                              : ((r = o), 0 === Oe && ze(dt)),
                            r !== o
                              ? ((Ae = e), (e = n = "`"))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          92 === t.charCodeAt(ge)
                            ? ((n = yt), ge++)
                            : ((n = o), 0 === Oe && ze(mt)),
                          n !== o
                            ? (42 === t.charCodeAt(ge)
                                ? ((r = ft), ge++)
                                : ((r = o), 0 === Oe && ze(pt)),
                              r !== o
                                ? ((Ae = e), (e = n = "*"))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          e === o &&
                            ((e = ge),
                            92 === t.charCodeAt(ge)
                              ? ((n = yt), ge++)
                              : ((n = o), 0 === Oe && ze(mt)),
                            n !== o
                              ? (40 === t.charCodeAt(ge)
                                  ? ((r = Pt), ge++)
                                  : ((r = o), 0 === Oe && ze(bt)),
                                r !== o
                                  ? ((Ae = e), (e = n = "("))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)),
                            e === o &&
                              ((e = ge),
                              92 === t.charCodeAt(ge)
                                ? ((n = yt), ge++)
                                : ((n = o), 0 === Oe && ze(mt)),
                              n !== o
                                ? (41 === t.charCodeAt(ge)
                                    ? ((r = gt), ge++)
                                    : ((r = o), 0 === Oe && ze(At)),
                                  r !== o
                                    ? ((Ae = e), (e = n = ")"))
                                    : ((ge = e), (e = o)))
                                : ((ge = e), (e = o)),
                              e === o &&
                                ((e = ge),
                                92 === t.charCodeAt(ge)
                                  ? ((n = yt), ge++)
                                  : ((n = o), 0 === Oe && ze(mt)),
                                n !== o
                                  ? (59 === t.charCodeAt(ge)
                                      ? ((r = X), ge++)
                                      : ((r = o), 0 === Oe && ze(Y)),
                                    r !== o
                                      ? ((Ae = e), (e = n = ";"))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                e === o &&
                                  ((e = ge),
                                  92 === t.charCodeAt(ge)
                                    ? ((n = yt), ge++)
                                    : ((n = o), 0 === Oe && ze(mt)),
                                  n !== o
                                    ? (123 === t.charCodeAt(ge)
                                        ? ((r = _t), ge++)
                                        : ((r = o), 0 === Oe && ze(Ct)),
                                      r !== o
                                        ? ((Ae = e), (e = n = "{"))
                                        : ((ge = e), (e = o)))
                                    : ((ge = e), (e = o)),
                                  e === o &&
                                    ((e = ge),
                                    92 === t.charCodeAt(ge)
                                      ? ((n = yt), ge++)
                                      : ((n = o), 0 === Oe && ze(mt)),
                                    n !== o
                                      ? (125 === t.charCodeAt(ge)
                                          ? ((r = wt), ge++)
                                          : ((r = o), 0 === Oe && ze(Ot)),
                                        r !== o
                                          ? ((Ae = e), (e = n = "}"))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)),
                                    e === o &&
                                      ((e = ge),
                                      92 === t.charCodeAt(ge)
                                        ? ((n = yt), ge++)
                                        : ((n = o), 0 === Oe && ze(mt)),
                                      n !== o
                                        ? (92 === t.charCodeAt(ge)
                                            ? ((r = yt), ge++)
                                            : ((r = o), 0 === Oe && ze(mt)),
                                          r !== o
                                            ? ((Ae = e), (e = n = "\\"))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      e === o &&
                                        ((e = ge),
                                        92 === t.charCodeAt(ge)
                                          ? ((n = yt), ge++)
                                          : ((n = o), 0 === Oe && ze(mt)),
                                        n !== o && ((Ae = e), (n = "\\")),
                                        (e = n))))))))))),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function Qe() {
                var e,
                  n,
                  r,
                  u = 125 * ge + 53,
                  i = je[u];
                return i
                  ? ((ge = i.nextPos), i.result)
                  : (jt.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(kt)),
                    e === o &&
                      ((e = ge),
                      92 === t.charCodeAt(ge)
                        ? ((n = yt), ge++)
                        : ((n = o), 0 === Oe && ze(mt)),
                      n !== o
                        ? (91 === t.charCodeAt(ge)
                            ? ((r = St), ge++)
                            : ((r = o), 0 === Oe && ze(Tt)),
                          r !== o
                            ? ((Ae = e), (e = n = "["))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        92 === t.charCodeAt(ge)
                          ? ((n = yt), ge++)
                          : ((n = o), 0 === Oe && ze(mt)),
                        n !== o
                          ? (93 === t.charCodeAt(ge)
                              ? ((r = Et), ge++)
                              : ((r = o), 0 === Oe && ze(Nt)),
                            r !== o
                              ? ((Ae = e), (e = n = "]"))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          92 === t.charCodeAt(ge)
                            ? ((n = yt), ge++)
                            : ((n = o), 0 === Oe && ze(mt)),
                          n !== o
                            ? (59 === t.charCodeAt(ge)
                                ? ((r = X), ge++)
                                : ((r = o), 0 === Oe && ze(Y)),
                              r !== o
                                ? ((Ae = e), (e = n = ";"))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          e === o &&
                            ((e = ge),
                            92 === t.charCodeAt(ge)
                              ? ((n = yt), ge++)
                              : ((n = o), 0 === Oe && ze(mt)),
                            n !== o
                              ? (92 === t.charCodeAt(ge)
                                  ? ((r = yt), ge++)
                                  : ((r = o), 0 === Oe && ze(mt)),
                                r !== o
                                  ? ((Ae = e), (e = n = "\\"))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)),
                            e === o &&
                              ((e = ge),
                              92 === t.charCodeAt(ge)
                                ? ((n = yt), ge++)
                                : ((n = o), 0 === Oe && ze(mt)),
                              n !== o && ((Ae = e), (n = "\\")),
                              (e = n)))))),
                    (je[u] = { nextPos: ge, result: e }),
                    e);
              }
              function Xe() {
                var e,
                  n,
                  r,
                  u = 125 * ge + 55,
                  i = je[u];
                return i
                  ? ((ge = i.nextPos), i.result)
                  : (zt.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(Ft)),
                    e === o &&
                      ((e = ge),
                      92 === t.charCodeAt(ge)
                        ? ((n = yt), ge++)
                        : ((n = o), 0 === Oe && ze(mt)),
                      n !== o
                        ? (59 === t.charCodeAt(ge)
                            ? ((r = X), ge++)
                            : ((r = o), 0 === Oe && ze(Y)),
                          r !== o
                            ? ((Ae = e), (e = n = ";"))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        92 === t.charCodeAt(ge)
                          ? ((n = yt), ge++)
                          : ((n = o), 0 === Oe && ze(mt)),
                        n !== o
                          ? (123 === t.charCodeAt(ge)
                              ? ((r = _t), ge++)
                              : ((r = o), 0 === Oe && ze(Ct)),
                            r !== o
                              ? ((Ae = e), (e = n = "{"))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          92 === t.charCodeAt(ge)
                            ? ((n = yt), ge++)
                            : ((n = o), 0 === Oe && ze(mt)),
                          n !== o
                            ? (125 === t.charCodeAt(ge)
                                ? ((r = wt), ge++)
                                : ((r = o), 0 === Oe && ze(Ot)),
                              r !== o
                                ? ((Ae = e), (e = n = "}"))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          e === o &&
                            ((e = ge),
                            92 === t.charCodeAt(ge)
                              ? ((n = yt), ge++)
                              : ((n = o), 0 === Oe && ze(mt)),
                            n !== o
                              ? (92 === t.charCodeAt(ge)
                                  ? ((r = yt), ge++)
                                  : ((r = o), 0 === Oe && ze(mt)),
                                r !== o
                                  ? ((Ae = e), (e = n = "\\"))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)),
                            e === o &&
                              ((e = ge),
                              92 === t.charCodeAt(ge)
                                ? ((n = yt), ge++)
                                : ((n = o), 0 === Oe && ze(mt)),
                              n !== o && ((Ae = e), (n = "\\")),
                              (e = n)))))),
                    (je[u] = { nextPos: ge, result: e }),
                    e);
              }
              function Ye() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c,
                  a,
                  f,
                  h = 125 * ge + 57,
                  d = je[h];
                return d
                  ? ((ge = d.nextPos), d.result)
                  : ((e = ge),
                    (n = Me()) !== o &&
                    wn() !== o &&
                    (function () {
                      var e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 20,
                        s = je[i];
                      return s
                        ? ((ge = s.nextPos), s.result)
                        : ((e = ge),
                          (n = Me()) !== o
                            ? (t.substr(ge, 4) === D
                                ? ((r = D), (ge += 4))
                                : ((r = o), 0 === Oe && ze(V)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e), (e = n = p(n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          (je[i] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    On() !== o &&
                    (r = Me()) !== o &&
                    (u = (function () {
                      var t,
                        e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 54,
                        s = je[i];
                      if (s) return (ge = s.nextPos), s.result;
                      if (((t = ge), (e = Me()) !== o)) {
                        if (((n = []), (r = Xe()) !== o))
                          for (; r !== o; ) n.push(r), (r = Xe());
                        else n = o;
                        n !== o && (r = Re()) !== o
                          ? ((Ae = t),
                            (u = n),
                            Xn("case_keyword", e, r),
                            (t = e = u.join("").trim()))
                          : ((ge = t), (t = o));
                      } else (ge = t), (t = o);
                      return (je[i] = { nextPos: ge, result: t }), t;
                    })()) !== o &&
                    (i = Re()) !== o
                      ? (58 === t.charCodeAt(ge)
                          ? ((s = ut), ge++)
                          : ((s = o), 0 === Oe && ze(it)),
                        s !== o && (l = Re()) !== o
                          ? ((Ae = e),
                            (c = n),
                            (a = u),
                            (f = l),
                            Xn("case_label", r, i),
                            (e = n =
                              { case_label: { highlight: Yn(c, f), text: a } }))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[h] = { nextPos: ge, result: e }),
                    e);
              }
              function tn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 58,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : (It.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(Lt)),
                    e === o &&
                      ((e = ge),
                      (n = ge),
                      Oe++,
                      61 === t.charCodeAt(ge)
                        ? ((r = l), ge++)
                        : ((r = o), 0 === Oe && ze(c)),
                      Oe--,
                      r !== o ? ((ge = n), (n = void 0)) : (n = o),
                      n !== o
                        ? (92 === t.charCodeAt(ge)
                            ? ((r = yt), ge++)
                            : ((r = o), 0 === Oe && ze(mt)),
                          r !== o
                            ? (62 === t.charCodeAt(ge)
                                ? ((u = a), ge++)
                                : ((u = o), 0 === Oe && ze(f)),
                              u !== o
                                ? ((Ae = e), (e = n = ">"))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        (n = ge),
                        Oe++,
                        61 === t.charCodeAt(ge)
                          ? ((r = l), ge++)
                          : ((r = o), 0 === Oe && ze(c)),
                        Oe--,
                        r === o ? (n = void 0) : ((ge = n), (n = o)),
                        n !== o
                          ? (62 === t.charCodeAt(ge)
                              ? ((r = a), ge++)
                              : ((r = o), 0 === Oe && ze(f)),
                            r !== o
                              ? ((Ae = e), (e = n = ">"))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          92 === t.charCodeAt(ge)
                            ? ((n = yt), ge++)
                            : ((n = o), 0 === Oe && ze(mt)),
                          n !== o
                            ? (59 === t.charCodeAt(ge)
                                ? ((r = X), ge++)
                                : ((r = o), 0 === Oe && ze(Y)),
                              r !== o
                                ? ((Ae = e), (e = n = ";"))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          e === o &&
                            ((e = ge),
                            92 === t.charCodeAt(ge)
                              ? ((n = yt), ge++)
                              : ((n = o), 0 === Oe && ze(mt)),
                            n !== o
                              ? (123 === t.charCodeAt(ge)
                                  ? ((r = _t), ge++)
                                  : ((r = o), 0 === Oe && ze(Ct)),
                                r !== o
                                  ? ((Ae = e), (e = n = "{"))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)),
                            e === o &&
                              ((e = ge),
                              92 === t.charCodeAt(ge)
                                ? ((n = yt), ge++)
                                : ((n = o), 0 === Oe && ze(mt)),
                              n !== o
                                ? (125 === t.charCodeAt(ge)
                                    ? ((r = wt), ge++)
                                    : ((r = o), 0 === Oe && ze(Ot)),
                                  r !== o
                                    ? ((Ae = e), (e = n = "}"))
                                    : ((ge = e), (e = o)))
                                : ((ge = e), (e = o)),
                              e === o &&
                                ((e = ge),
                                92 === t.charCodeAt(ge)
                                  ? ((n = yt), ge++)
                                  : ((n = o), 0 === Oe && ze(mt)),
                                n !== o
                                  ? (92 === t.charCodeAt(ge)
                                      ? ((r = yt), ge++)
                                      : ((r = o), 0 === Oe && ze(mt)),
                                    r !== o
                                      ? ((Ae = e), (e = n = "\\"))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                e === o &&
                                  ((e = ge),
                                  61 === t.charCodeAt(ge)
                                    ? ((n = l), ge++)
                                    : ((n = o), 0 === Oe && ze(c)),
                                  n !== o
                                    ? ((r = ge),
                                      Oe++,
                                      62 === t.charCodeAt(ge)
                                        ? ((u = a), ge++)
                                        : ((u = o), 0 === Oe && ze(f)),
                                      Oe--,
                                      u === o
                                        ? (r = void 0)
                                        : ((ge = r), (r = o)),
                                      r !== o
                                        ? ((Ae = e), (e = n = "="))
                                        : ((ge = e), (e = o)))
                                    : ((ge = e), (e = o)),
                                  e === o &&
                                    ((e = ge),
                                    92 === t.charCodeAt(ge)
                                      ? ((n = yt), ge++)
                                      : ((n = o), 0 === Oe && ze(mt)),
                                    n !== o && ((Ae = e), (n = "\\")),
                                    (e = n))))))))),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function en() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  h,
                  d = 125 * ge + 60,
                  v = je[d];
                return v
                  ? ((ge = v.nextPos), v.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? ((r = (function () {
                          var t,
                            e,
                            n,
                            r,
                            u,
                            i = 125 * ge + 59,
                            s = je[i];
                          if (s) return (ge = s.nextPos), s.result;
                          if (((t = ge), (e = Me()) !== o)) {
                            if (((n = []), (r = tn()) !== o))
                              for (; r !== o; ) n.push(r), (r = tn());
                            else n = o;
                            n !== o && (r = Re()) !== o
                              ? ((Ae = t),
                                (u = n),
                                Xn("case_label", e, r),
                                (t = e = u.join("").trim()))
                              : ((ge = t), (t = o));
                          } else (ge = t), (t = o);
                          return (je[i] = { nextPos: ge, result: t }), t;
                        })()) === o && (r = null),
                        r !== o &&
                        wn() !== o &&
                        (function () {
                          var e,
                            n,
                            r,
                            u,
                            i,
                            s = 125 * ge + 4,
                            h = je[s];
                          return h
                            ? ((ge = h.nextPos), h.result)
                            : ((e = ge),
                              (n = Me()) !== o
                                ? (61 === t.charCodeAt(ge)
                                    ? ((r = l), ge++)
                                    : ((r = o), 0 === Oe && ze(c)),
                                  r !== o
                                    ? (62 === t.charCodeAt(ge)
                                        ? ((u = a), ge++)
                                        : ((u = o), 0 === Oe && ze(f)),
                                      u !== o && (i = Re()) !== o
                                        ? ((Ae = e), (e = n = p(n, i)))
                                        : ((ge = e), (e = o)))
                                    : ((ge = e), (e = o)))
                                : ((ge = e), (e = o)),
                              (je[s] = { nextPos: ge, result: e }),
                              e);
                        })() !== o &&
                        (u = Re()) !== o &&
                        wn() !== o &&
                        (i = hn()) !== o
                          ? ((Ae = e),
                            (s = r),
                            (h = i),
                            (e = n =
                              {
                                decision: {
                                  highlight: Yn(n, u),
                                  text: s,
                                  instruction: h,
                                },
                              }))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[d] = { nextPos: ge, result: e }),
                    e);
              }
              function nn() {
                var e,
                  n,
                  r = 125 * ge + 61,
                  u = je[r];
                return u
                  ? ((ge = u.nextPos), u.result)
                  : ((e = ge),
                    (n = Ye()) === o &&
                      (n = (function () {
                        var e,
                          n,
                          r,
                          u,
                          i,
                          s,
                          l,
                          c,
                          a,
                          f = 125 * ge + 56,
                          p = je[f];
                        return p
                          ? ((ge = p.nextPos), p.result)
                          : ((e = ge),
                            (n = Me()) !== o && wn() !== o && (r = Me()) !== o
                              ? (t.substr(ge, 7) === Mt
                                  ? ((u = Mt), (ge += 7))
                                  : ((u = o), 0 === Oe && ze(Rt)),
                                u !== o && (i = Re()) !== o
                                  ? (58 === t.charCodeAt(ge)
                                      ? ((s = ut), ge++)
                                      : ((s = o), 0 === Oe && ze(it)),
                                    s !== o && (l = Re()) !== o
                                      ? ((Ae = e),
                                        (c = n),
                                        (a = l),
                                        Xn("case_label", r, i),
                                        (e = n =
                                          {
                                            case_label: {
                                              highlight: Yn(c, a),
                                              text: "",
                                            },
                                          }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)),
                            (je[f] = { nextPos: ge, result: e }),
                            e);
                      })()),
                    n !== o && ((Ae = e), (n = n)),
                    (e = n) === o &&
                      ((e = ge),
                      (n = en()) !== o && ((Ae = e), (n = n)),
                      (e = n) === o &&
                        ((e = ge),
                        (n = hn()) !== o && ((Ae = e), (n = n)),
                        (e = n))),
                    (je[r] = { nextPos: ge, result: e }),
                    e);
              }
              function rn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 62,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (123 === t.charCodeAt(ge)
                          ? ((r = _t), ge++)
                          : ((r = o), 0 === Oe && ze(Ct)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e),
                            (e = n = void Xn("paren.lparen.curly", n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function on() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 63,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (125 === t.charCodeAt(ge)
                          ? ((r = wt), ge++)
                          : ((r = o), 0 === Oe && ze(Ot)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e),
                            (e = n = void Xn("paren.rparen.curly", n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function un() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 64,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (40 === t.charCodeAt(ge)
                          ? ((r = Pt), ge++)
                          : ((r = o), 0 === Oe && ze(bt)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e),
                            Xn("paren.lparen.parenthesis", n, u),
                            (e = n = "("))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function sn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 65,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (41 === t.charCodeAt(ge)
                          ? ((r = gt), ge++)
                          : ((r = o), 0 === Oe && ze(At)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e),
                            Xn("paren.rparen.parenthesis", n, u),
                            (e = n = ")"))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function ln() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c,
                  a = 125 * ge + 68,
                  f = je[a];
                if (f) return (ge = f.nextPos), f.result;
                if (
                  ((e = ge),
                  (function () {
                    var e,
                      n,
                      r,
                      u,
                      i = 125 * ge + 13,
                      s = je[i];
                    return s
                      ? ((ge = s.nextPos), s.result)
                      : ((e = ge),
                        (n = Me()) !== o
                          ? (t.substr(ge, 5) === S
                              ? ((r = S), (ge += 5))
                              : ((r = o), 0 === Oe && ze(T)),
                            r !== o && (u = Re()) !== o
                              ? ((Ae = e), (e = n = p(n, u)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        (je[i] = { nextPos: ge, result: e }),
                        e);
                  })() !== o)
                )
                  if (
                    ((n = ge),
                    (r = wn()) !== o && (u = un()) !== o && (i = wn()) !== o
                      ? (n = r = [r, u, i])
                      : ((ge = n), (n = o)),
                    n === o && (n = On()),
                    n !== o)
                  )
                    if ((r = Me()) !== o)
                      if (((u = Ze()) === o && (u = null), u !== o))
                        if ((i = Re()) !== o)
                          if (wn() !== o)
                            if (((s = sn()) === o && (s = null), s !== o))
                              if (wn() !== o)
                                if (rn() !== o)
                                  if (wn() !== o) {
                                    for (l = [], c = hn(); c !== o; )
                                      l.push(c), (c = hn());
                                    l !== o
                                      ? ((c = on()) === o && (c = null),
                                        c !== o
                                          ? ((Ae = e),
                                            (e = { text: u, instructions: l }))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o));
                                  } else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            else (ge = e), (e = o);
                          else (ge = e), (e = o);
                        else (ge = e), (e = o);
                      else (ge = e), (e = o);
                    else (ge = e), (e = o);
                  else (ge = e), (e = o);
                else (ge = e), (e = o);
                return (je[a] = { nextPos: ge, result: e }), e;
              }
              function cn() {
                var t,
                  e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 70,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((t = ge),
                    (e = Me()) !== o && (n = We()) !== o && (r = Re()) !== o
                      ? ((Ae = t), (u = n), Xn("expression", e, r), (t = e = u))
                      : ((ge = t), (t = o)),
                    (je[i] = { nextPos: ge, result: t }),
                    t);
              }
              function an() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 71,
                  u = je[r];
                return u
                  ? ((ge = u.nextPos), u.result)
                  : ((t = ge),
                    un() !== o && (e = Ze()) !== o
                      ? ((n = sn()) === o && (n = null),
                        n !== o ? ((Ae = t), (t = e)) : ((ge = t), (t = o)))
                      : ((ge = t), (t = o)),
                    (je[r] = { nextPos: ge, result: t }),
                    t);
              }
              function fn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 76,
                  l = je[s];
                if (l) return (ge = l.nextPos), l.result;
                if (
                  ((e = ge),
                  (function () {
                    var e,
                      n,
                      r,
                      u,
                      i = 125 * ge + 21,
                      s = je[i];
                    return s
                      ? ((ge = s.nextPos), s.result)
                      : ((e = ge),
                        (n = Me()) !== o
                          ? (t.substr(ge, 6) === J
                              ? ((r = J), (ge += 6))
                              : ((r = o), 0 === Oe && ze(K)),
                            r !== o && (u = Re()) !== o
                              ? ((Ae = e), (e = n = p(n, u)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        (je[i] = { nextPos: ge, result: e }),
                        e);
                  })() !== o)
                )
                  if (wn() !== o)
                    if (
                      ((n = (function () {
                        var t,
                          e,
                          n,
                          r,
                          u,
                          i,
                          s,
                          l,
                          c,
                          a = 125 * ge + 75,
                          f = je[a];
                        return f
                          ? ((ge = f.nextPos), f.result)
                          : ((t = ge),
                            (e = ge),
                            (n = wn()) !== o &&
                            (r = un()) !== o &&
                            (u = wn()) !== o
                              ? (e = n = [n, r, u])
                              : ((ge = e), (e = o)),
                            e === o && (e = On()),
                            e !== o && (n = Me()) !== o
                              ? ((r = Je()) === o && (r = null),
                                r !== o && (u = Re()) !== o && wn() !== o
                                  ? ((i = sn()) === o && (i = null),
                                    i !== o
                                      ? ((Ae = t),
                                        (s = n),
                                        (c = u),
                                        (l = r) && (Zn[l] = { from: s, to: c }),
                                        (t = e = l))
                                      : ((ge = t), (t = o)))
                                  : ((ge = t), (t = o)))
                              : ((ge = t), (t = o)),
                            (je[a] = { nextPos: ge, result: t }),
                            t);
                      })()) === o && (n = null),
                      n !== o)
                    )
                      if (wn() !== o)
                        if (((r = Sn()) === o && (r = null), r !== o))
                          if (wn() !== o)
                            if (rn() !== o)
                              if (wn() !== o) {
                                for (u = [], i = hn(); i !== o; )
                                  u.push(i), (i = hn());
                                u !== o
                                  ? ((i = on()) === o && (i = null),
                                    i !== o
                                      ? ((Ae = e),
                                        (e = {
                                          branch_block: {
                                            branch_name: n,
                                            yield: r || void 0,
                                            instructions: u,
                                          },
                                        }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o));
                              } else (ge = e), (e = o);
                            else (ge = e), (e = o);
                          else (ge = e), (e = o);
                        else (ge = e), (e = o);
                      else (ge = e), (e = o);
                    else (ge = e), (e = o);
                  else (ge = e), (e = o);
                else (ge = e), (e = o);
                return (je[s] = { nextPos: ge, result: e }), e;
              }
              function pn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 78,
                  l = je[s];
                return l
                  ? ((ge = l.nextPos), l.result)
                  : ((e = ge),
                    (n = Me()) !== o &&
                    (function () {
                      var e,
                        n = 125 * ge + 77,
                        r = je[n];
                      return r
                        ? ((ge = r.nextPos), r.result)
                        : (qt.test(t.charAt(ge))
                            ? ((e = t.charAt(ge)), ge++)
                            : ((e = o), 0 === Oe && ze(Dt)),
                          (je[n] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    (r = Re()) !== o
                      ? ((Ae = e),
                        Xn("invalid", (u = n), (i = r)),
                        (e = n = void Xn("parse_error", u, i)))
                      : ((ge = e), (e = o)),
                    (je[s] = { nextPos: ge, result: e }),
                    e);
              }
              function hn() {
                var e,
                  r,
                  u = 125 * ge + 79,
                  i = je[u];
                return i
                  ? ((ge = i.nextPos), i.result)
                  : ((e = ge),
                    wn() !== o
                      ? ((r = bn()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c = 125 * ge + 98,
                              a = je[c];
                            if (a) return (ge = a.nextPos), a.result;
                            if (((e = ge), (n = Me()) !== o))
                              if (
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 14,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 5) === E
                                            ? ((r = E), (ge += 5))
                                            : ((r = o), 0 === Oe && ze(N)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o
                              )
                                if (wn() !== o)
                                  if (((r = En()) === o && (r = null), r !== o))
                                    if ((u = Re()) !== o)
                                      if ((i = wn()) !== o)
                                        if (rn() !== o)
                                          if (wn() !== o) {
                                            for (s = [], l = hn(); l !== o; )
                                              s.push(l), (l = hn());
                                            s !== o
                                              ? ((l = on()) === o && (l = null),
                                                l !== o
                                                  ? ((Ae = e),
                                                    (e = n =
                                                      {
                                                        block: {
                                                          instructions: s,
                                                        },
                                                        name: r,
                                                        from: n,
                                                        to: u,
                                                      }))
                                                  : ((ge = e), (e = o)))
                                              : ((ge = e), (e = o));
                                          } else (ge = e), (e = o);
                                        else (ge = e), (e = o);
                                      else (ge = e), (e = o);
                                    else (ge = e), (e = o);
                                  else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            else (ge = e), (e = o);
                            if (e === o)
                              if (((e = ge), (n = An()) !== o))
                                if (wn() !== o)
                                  if (rn() !== o)
                                    if ((r = wn()) !== o) {
                                      for (u = [], i = hn(); i !== o; )
                                        u.push(i), (i = hn());
                                      u !== o
                                        ? ((i = on()) === o && (i = null),
                                          i !== o
                                            ? ((Ae = e),
                                              (e = n =
                                                (function (t, e) {
                                                  const {
                                                    name: n,
                                                    from: r,
                                                    to: o,
                                                  } = t;
                                                  return {
                                                    block: { instructions: e },
                                                    name: n,
                                                    from: r,
                                                    to: o,
                                                    createInRoot: !0,
                                                  };
                                                })(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o));
                                    } else (ge = e), (e = o);
                                  else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            return (je[c] = { nextPos: ge, result: e }), e;
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l = 125 * ge + 39,
                              c = je[l];
                            return c
                              ? ((ge = c.nextPos), c.result)
                              : ((e = ge),
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 10,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 4) === C
                                            ? ((r = C), (ge += 4))
                                            : ((r = o), 0 === Oe && ze(w)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o
                                  ? ((n = ge),
                                    (r = wn()) !== o &&
                                    (u = un()) !== o &&
                                    (i = wn()) !== o
                                      ? (n = r = [r, u, i])
                                      : ((ge = n), (n = o)),
                                    n === o && (n = On()),
                                    n !== o &&
                                    (r = (function () {
                                      var t,
                                        e,
                                        n,
                                        r,
                                        u,
                                        i = 125 * ge + 38,
                                        s = je[i];
                                      if (s) return (ge = s.nextPos), s.result;
                                      if (
                                        ((t = ge),
                                        (e = []),
                                        (n = ge),
                                        wn() !== o &&
                                        (r = Je()) !== o &&
                                        wn() !== o
                                          ? ((u = Ue()) === o && (u = On()),
                                            u === o && (u = null),
                                            u !== o
                                              ? ((Ae = n), (n = r))
                                              : ((ge = n), (n = o)))
                                          : ((ge = n), (n = o)),
                                        n !== o)
                                      )
                                        for (; n !== o; )
                                          e.push(n),
                                            (n = ge),
                                            wn() !== o &&
                                            (r = Je()) !== o &&
                                            wn() !== o
                                              ? ((u = Ue()) === o && (u = On()),
                                                u === o && (u = null),
                                                u !== o
                                                  ? ((Ae = n), (n = r))
                                                  : ((ge = n), (n = o)))
                                              : ((ge = n), (n = o));
                                      else e = o;
                                      return (
                                        e !== o && ((Ae = t), (e = e)),
                                        (t = e),
                                        (je[i] = { nextPos: ge, result: t }),
                                        t
                                      );
                                    })()) !== o &&
                                    (u = wn()) !== o
                                      ? ((i = sn()) === o && (i = null),
                                        i !== o && wn() !== o
                                          ? ((s = Le()) === o && (s = null),
                                            s !== o
                                              ? ((Ae = e),
                                                (e = {
                                                  join: { branch_names: r },
                                                }))
                                              : ((ge = e), (e = o)))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[l] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r = 125 * ge + 29,
                              u = je[r];
                            return u
                              ? ((ge = u.nextPos), u.result)
                              : ((e = ge),
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 5,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? ("nop" === t.substr(ge, 3)
                                            ? ((r = "nop"), (ge += 3))
                                            : ((r = o), 0 === Oe && ze(h)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o && wn() !== o
                                  ? ((n = Le()) === o && (n = null),
                                    n !== o
                                      ? ((Ae = e), (e = { nop: {} }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[r] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = qe()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r = 125 * ge + 31,
                              u = je[r];
                            return u
                              ? ((ge = u.nextPos), u.result)
                              : ((e = ge),
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 7,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 5) === x
                                            ? ((r = x), (ge += 5))
                                            : ((r = o), 0 === Oe && ze(y)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o && wn() !== o
                                  ? ((n = Le()) === o && (n = null),
                                    n !== o
                                      ? ((Ae = e), (e = { break: {} }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[r] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r = 125 * ge + 32,
                              u = je[r];
                            return u
                              ? ((ge = u.nextPos), u.result)
                              : ((e = ge),
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 8,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 8) === m
                                            ? ((r = m), (ge += 8))
                                            : ((r = o), 0 === Oe && ze(P)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o && wn() !== o
                                  ? ((n = Le()) === o && (n = null),
                                    n !== o
                                      ? ((Ae = e), (e = { continue: {} }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[r] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f,
                              h,
                              d = 125 * ge + 34,
                              v = je[d];
                            return v
                              ? ((ge = v.nextPos), v.result)
                              : ((e = ge),
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 9,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 4) === b
                                            ? ((r = b), (ge += 4))
                                            : ((r = o), 0 === Oe && ze(g)),
                                          r === o &&
                                            (t.substr(ge, 4) === A
                                              ? ((r = A), (ge += 4))
                                              : ((r = o), 0 === Oe && ze(_))),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o &&
                                wn() !== o &&
                                (r = Me()) !== o &&
                                (u = Ve()) !== o &&
                                (i = Re()) !== o
                                  ? ((s = Sn()) === o && (s = null),
                                    s !== o && wn() !== o
                                      ? ((l = Le()) === o && (l = null),
                                        l !== o
                                          ? ((Ae = e),
                                            (c = r),
                                            (a = u),
                                            (f = i),
                                            (h = s),
                                            n.doTokens &&
                                              $n.push(
                                                Xn("label_reference", c, f, a)
                                              ),
                                            (e = {
                                              loop: { label: a, yield: h },
                                            }))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[d] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a = 125 * ge + 36,
                              f = je[a];
                            return f
                              ? ((ge = f.nextPos), f.result)
                              : ((e = ge),
                                (n = Me()) !== o && (r = Ve()) !== o
                                  ? (58 === t.charCodeAt(ge)
                                      ? ((u = ut), ge++)
                                      : ((u = o), 0 === Oe && ze(it)),
                                    u !== o && (i = Re()) !== o
                                      ? ((Ae = e),
                                        (l = r),
                                        Xn("jump_label", (s = n), (c = i)),
                                        (Hn[l] = { from: s, to: c }),
                                        (e = n =
                                          {
                                            label_decl: {
                                              label: l,
                                              highlight: Yn(s, c),
                                            },
                                          }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[a] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u = 125 * ge + 90,
                              i = je[u];
                            return i
                              ? ((ge = i.nextPos), i.result)
                              : ((e = ge),
                                (n = (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i,
                                    s,
                                    l,
                                    c,
                                    a,
                                    f,
                                    h = 125 * ge + 92,
                                    d = je[h];
                                  return d
                                    ? ((ge = d.nextPos), d.result)
                                    : ((e = ge),
                                      (n = An()) === o && (n = null),
                                      n !== o &&
                                      wn() !== o &&
                                      (r = Me()) !== o &&
                                      (function () {
                                        var e,
                                          n,
                                          r,
                                          u,
                                          i = 125 * ge + 22,
                                          s = je[i];
                                        return s
                                          ? ((ge = s.nextPos), s.result)
                                          : ((e = ge),
                                            (n = Me()) !== o
                                              ? ("if" === t.substr(ge, 2)
                                                  ? ((r = "if"), (ge += 2))
                                                  : ((r = o),
                                                    0 === Oe && ze(W)),
                                                r !== o && (u = Re()) !== o
                                                  ? ((Ae = e),
                                                    (e = n = p(n, u)))
                                                  : ((ge = e), (e = o)))
                                              : ((ge = e), (e = o)),
                                            (je[i] = {
                                              nextPos: ge,
                                              result: e,
                                            }),
                                            e);
                                      })() !== o
                                        ? ((u = ge),
                                          (i = wn()) !== o &&
                                          (s = un()) !== o &&
                                          (l = wn()) !== o
                                            ? (u = i = [i, s, l])
                                            : ((ge = u), (u = o)),
                                          u === o && (u = On()),
                                          u !== o &&
                                          (i = mn()) !== o &&
                                          (s = wn()) !== o
                                            ? ((l = sn()) === o && (l = null),
                                              l !== o
                                                ? ((c = Sn()) === o &&
                                                    (c = null),
                                                  c !== o &&
                                                  wn() !== o &&
                                                  (a = Re()) !== o
                                                    ? ((f = hn()) === o &&
                                                        (f = null),
                                                      f !== o
                                                        ? ((Ae = e),
                                                          (e = n =
                                                            (function (
                                                              t,
                                                              e,
                                                              n,
                                                              r,
                                                              o,
                                                              u,
                                                              i
                                                            ) {
                                                              const {
                                                                text: s,
                                                                from: l,
                                                                to: c,
                                                                link: a,
                                                                linkPosition: f,
                                                              } = r;
                                                              return {
                                                                block: t,
                                                                highlight: Yn(
                                                                  e,
                                                                  u
                                                                ),
                                                                to: c,
                                                                from: l,
                                                                text: s,
                                                                link: a,
                                                                linkPosition: f,
                                                                instruction:
                                                                  i || void 0,
                                                                yield:
                                                                  o || void 0,
                                                              };
                                                            })(
                                                              n,
                                                              r,
                                                              0,
                                                              i,
                                                              c,
                                                              a,
                                                              f
                                                            )))
                                                        : ((ge = e), (e = o)))
                                                    : ((ge = e), (e = o)))
                                                : ((ge = e), (e = o)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[h] = { nextPos: ge, result: e }),
                                      e);
                                })()) !== o
                                  ? ((r = (function () {
                                      var e,
                                        n,
                                        r,
                                        u,
                                        i,
                                        s,
                                        l,
                                        c = 125 * ge + 93,
                                        a = je[c];
                                      return a
                                        ? ((ge = a.nextPos), a.result)
                                        : ((e = ge),
                                          (n = Me()) !== o &&
                                          (function () {
                                            var e,
                                              n,
                                              r,
                                              u,
                                              i = 125 * ge + 23,
                                              s = je[i];
                                            return s
                                              ? ((ge = s.nextPos), s.result)
                                              : ((e = ge),
                                                (n = Me()) !== o
                                                  ? (t.substr(ge, 4) === $
                                                      ? ((r = $), (ge += 4))
                                                      : ((r = o),
                                                        0 === Oe && ze(B)),
                                                    r !== o && (u = Re()) !== o
                                                      ? ((Ae = e),
                                                        (e = n = p(n, u)))
                                                      : ((ge = e), (e = o)))
                                                  : ((ge = e), (e = o)),
                                                (je[i] = {
                                                  nextPos: ge,
                                                  result: e,
                                                }),
                                                e);
                                          })() !== o
                                            ? ((r = Sn()) === o && (r = null),
                                              r !== o &&
                                              wn() !== o &&
                                              (u = Re()) !== o
                                                ? ((i = hn()) === o &&
                                                    (i = null),
                                                  i !== o
                                                    ? ((Ae = e),
                                                      (s = r),
                                                      (l = i),
                                                      (e = n =
                                                        {
                                                          highlight: Yn(n, u),
                                                          instruction: l,
                                                          yield: s || void 0,
                                                        }))
                                                    : ((ge = e), (e = o)))
                                                : ((ge = e), (e = o)))
                                            : ((ge = e), (e = o)),
                                          (je[c] = { nextPos: ge, result: e }),
                                          e);
                                    })()) === o && (r = null),
                                    r !== o
                                      ? ((Ae = e),
                                        (e = n =
                                          {
                                            ifs_chain: {
                                              else_block: r,
                                              if_block: n,
                                            },
                                          }))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[u] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var t,
                              e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f = 125 * ge + 42,
                              p = je[f];
                            return p
                              ? ((ge = p.nextPos), p.result)
                              : ((t = ge),
                                (e = An()) === o && (e = null),
                                e !== o &&
                                wn() !== o &&
                                (n = Me()) !== o &&
                                Ie() !== o
                                  ? ((r = ge),
                                    (u = wn()) !== o &&
                                    (i = un()) !== o &&
                                    (s = wn()) !== o
                                      ? (r = u = [u, i, s])
                                      : ((ge = r), (r = o)),
                                    r === o && (r = On()),
                                    r !== o &&
                                    (u = mn()) !== o &&
                                    (i = wn()) !== o
                                      ? ((s = sn()) === o && (s = null),
                                        s !== o
                                          ? ((l = Sn()) === o && (l = null),
                                            l !== o &&
                                            wn() !== o &&
                                            (c = Re()) !== o &&
                                            (a = hn()) !== o
                                              ? ((Ae = t),
                                                (t = e =
                                                  (function (t, e, n, r, o, u) {
                                                    const {
                                                      text: i,
                                                      from: s,
                                                      to: l,
                                                      link: c,
                                                      linkPosition: a,
                                                    } = n;
                                                    return {
                                                      while_loop: {
                                                        highlight: Yn(e, o),
                                                        to: l,
                                                        from: s,
                                                        link: c,
                                                        linkPosition: a,
                                                        text: i,
                                                        instruction: u,
                                                        yield: r || void 0,
                                                        block: t,
                                                      },
                                                    };
                                                  })(e, n, u, l, c, a)))
                                              : ((ge = t), (t = o)))
                                          : ((ge = t), (t = o)))
                                      : ((ge = t), (t = o)))
                                  : ((ge = t), (t = o)),
                                (je[f] = { nextPos: ge, result: t }),
                                t);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f,
                              h,
                              d,
                              v,
                              x,
                              y,
                              m,
                              P,
                              b,
                              g,
                              A,
                              _,
                              C,
                              w,
                              O,
                              j,
                              k = 125 * ge + 41,
                              S = je[k];
                            return S
                              ? ((ge = S.nextPos), S.result)
                              : ((e = ge),
                                (n = An()) === o && (n = null),
                                n !== o &&
                                wn() !== o &&
                                (r = Me()) !== o &&
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 17,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? ("for" === t.substr(ge, 3)
                                            ? ((r = "for"), (ge += 3))
                                            : ((r = o), 0 === Oe && ze(R)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o
                                  ? ((u = ge),
                                    (i = wn()) !== o &&
                                    (s = un()) !== o &&
                                    (l = wn()) !== o
                                      ? (u = i = [i, s, l])
                                      : ((ge = u), (u = o)),
                                    u === o && (u = On()),
                                    u !== o &&
                                    (i = mn()) !== o &&
                                    (s = wn()) !== o &&
                                    (l = Re()) !== o
                                      ? ((c = Le()) === o && (c = null),
                                        c !== o &&
                                        (a = Me()) !== o &&
                                        wn() !== o &&
                                        (f = mn()) !== o &&
                                        wn() !== o &&
                                        (h = Re()) !== o
                                          ? ((d = Le()) === o && (d = null),
                                            d !== o &&
                                            wn() !== o &&
                                            (v = mn()) !== o &&
                                            wn() !== o
                                              ? ((x = sn()) === o && (x = null),
                                                x !== o
                                                  ? ((y = Sn()) === o &&
                                                      (y = null),
                                                    y !== o
                                                      ? ((m = hn()) === o &&
                                                          (m = null),
                                                        m !== o
                                                          ? ((Ae = e),
                                                            (P = n),
                                                            (b = r),
                                                            (g = i),
                                                            (A = l),
                                                            (_ = a),
                                                            (C = f),
                                                            (w = h),
                                                            (O = y),
                                                            (j = m),
                                                            (e = n =
                                                              {
                                                                for_loop: {
                                                                  iteration: v,
                                                                  init: {
                                                                    ...g,
                                                                    highlight:
                                                                      Yn(b, A),
                                                                  },
                                                                  condition: {
                                                                    ...C,
                                                                    highlight:
                                                                      Yn(_, w),
                                                                  },
                                                                  instruction:
                                                                    j,
                                                                  yield:
                                                                    O || void 0,
                                                                  block: P,
                                                                },
                                                              }))
                                                          : ((ge = e), (e = o)))
                                                      : ((ge = e), (e = o)))
                                                  : ((ge = e), (e = o)))
                                              : ((ge = e), (e = o)))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[k] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f,
                              h,
                              d,
                              v,
                              x,
                              y,
                              m = 125 * ge + 74,
                              P = je[m];
                            if (P) return (ge = P.nextPos), P.result;
                            if (
                              ((e = ge),
                              (n = An()) === o && (n = null),
                              n !== o)
                            )
                              if (wn() !== o)
                                if ((r = Me()) !== o)
                                  if (
                                    ((u = (function () {
                                      var e,
                                        n,
                                        r,
                                        u,
                                        i = 125 * ge + 18,
                                        s = je[i];
                                      return s
                                        ? ((ge = s.nextPos), s.result)
                                        : ((e = ge),
                                          (n = Me()) !== o
                                            ? (t.substr(ge, 5) === I
                                                ? ((r = I), (ge += 5))
                                                : ((r = o), 0 === Oe && ze(L)),
                                              r !== o && (u = Re()) !== o
                                                ? ((Ae = e), (e = n = p(n, u)))
                                                : ((ge = e), (e = o)))
                                            : ((ge = e), (e = o)),
                                          (je[i] = { nextPos: ge, result: e }),
                                          e);
                                    })()) === o &&
                                      (u = (function () {
                                        var e,
                                          n,
                                          r,
                                          u,
                                          i = 125 * ge + 19,
                                          s = je[i];
                                        return s
                                          ? ((ge = s.nextPos), s.result)
                                          : ((e = ge),
                                            (n = Me()) !== o
                                              ? (t.substr(ge, 6) === U
                                                  ? ((r = U), (ge += 6))
                                                  : ((r = o),
                                                    0 === Oe && ze(q)),
                                                r !== o && (u = Re()) !== o
                                                  ? ((Ae = e),
                                                    (e = n = p(n, u)))
                                                  : ((ge = e), (e = o)))
                                              : ((ge = e), (e = o)),
                                            (je[i] = {
                                              nextPos: ge,
                                              result: e,
                                            }),
                                            e);
                                      })()),
                                    u !== o)
                                  )
                                    if (
                                      ((i = ge),
                                      (s = wn()) !== o &&
                                      (l = un()) !== o &&
                                      (c = wn()) !== o
                                        ? (i = s = [s, l, c])
                                        : ((ge = i), (i = o)),
                                      i === o && (i = On()),
                                      i !== o)
                                    )
                                      if ((s = mn()) !== o)
                                        if ((l = wn()) !== o)
                                          if (
                                            ((c = sn()) === o && (c = null),
                                            c !== o)
                                          )
                                            if (wn() !== o)
                                              if (rn() !== o)
                                                if (wn() !== o)
                                                  if ((a = Re()) !== o) {
                                                    for (
                                                      f = [], h = nn();
                                                      h !== o;

                                                    )
                                                      f.push(h), (h = nn());
                                                    f !== o && (h = wn()) !== o
                                                      ? ((d = on()) === o &&
                                                          (d = null),
                                                        d !== o && wn() !== o
                                                          ? ((Ae = e),
                                                            (v = n),
                                                            (x = s),
                                                            (y = f),
                                                            (e = n =
                                                              {
                                                                switch_block: {
                                                                  highlight: Yn(
                                                                    r,
                                                                    a
                                                                  ),
                                                                  instructions:
                                                                    y,
                                                                  ...x,
                                                                  block: v,
                                                                },
                                                              }))
                                                          : ((ge = e), (e = o)))
                                                      : ((ge = e), (e = o));
                                                  } else (ge = e), (e = o);
                                                else (ge = e), (e = o);
                                              else (ge = e), (e = o);
                                            else (ge = e), (e = o);
                                          else (ge = e), (e = o);
                                        else (ge = e), (e = o);
                                      else (ge = e), (e = o);
                                    else (ge = e), (e = o);
                                  else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            else (ge = e), (e = o);
                            return (je[m] = { nextPos: ge, result: e }), e;
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f,
                              h,
                              d,
                              v,
                              x,
                              y,
                              m,
                              P,
                              b = 125 * ge + 44,
                              g = je[b];
                            return g
                              ? ((ge = g.nextPos), g.result)
                              : ((e = ge),
                                (n = Me()) !== o &&
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 16,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? ("do" === t.substr(ge, 2)
                                            ? ((r = "do"), (ge += 2))
                                            : ((r = o), 0 === Oe && ze(M)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o &&
                                wn() !== o &&
                                (r = Re()) !== o
                                  ? ((u = ge),
                                    (i = hn()) === o && (i = null),
                                    i !== o && (s = wn()) !== o
                                      ? ((Ae = u), (u = i = st(0, 0, i)))
                                      : ((ge = u), (u = o)),
                                    u === o &&
                                      ((u = ge),
                                      (i = On()) !== o
                                        ? ((s = hn()) === o && (s = null),
                                          s !== o
                                            ? ((Ae = u), (u = i = st(0, 0, s)))
                                            : ((ge = u), (u = o)))
                                        : ((ge = u), (u = o))),
                                    u !== o &&
                                    (i = Me()) !== o &&
                                    (s = wn()) !== o &&
                                    Ie() !== o
                                      ? ((l = ge),
                                        (c = wn()) !== o &&
                                        (a = un()) !== o &&
                                        (f = wn()) !== o
                                          ? (l = c = [c, a, f])
                                          : ((ge = l), (l = o)),
                                        l === o && (l = On()),
                                        l !== o &&
                                        (c = mn()) !== o &&
                                        (a = wn()) !== o
                                          ? ((f = sn()) === o && (f = null),
                                            f !== o
                                              ? ((h = Sn()) === o && (h = null),
                                                h !== o &&
                                                wn() !== o &&
                                                (d = Re()) !== o
                                                  ? ((Ae = e),
                                                    (v = u),
                                                    (x = i),
                                                    (y = c),
                                                    (m = h),
                                                    (P = d),
                                                    (e = n =
                                                      {
                                                        dowhile_loop: {
                                                          doHighlight: Yn(n, r),
                                                          highlight: Yn(x, P),
                                                          ...y,
                                                          instruction: v,
                                                          yield: m || void 0,
                                                        },
                                                      }))
                                                  : ((ge = e), (e = o)))
                                              : ((ge = e), (e = o)))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[b] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f,
                              h,
                              d,
                              v,
                              x,
                              y = 125 * ge + 72,
                              m = je[y];
                            if (m) return (ge = m.nextPos), m.result;
                            if (((e = ge), (n = Me()) !== o))
                              if (
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 24,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 8) === H
                                            ? ((r = H), (ge += 8))
                                            : ((r = o), 0 === Oe && ze(Z)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o
                              )
                                if (wn() !== o)
                                  if ((r = Me()) !== o)
                                    if ((u = cn()) !== o)
                                      if (
                                        ((i = an()) === o && (i = null),
                                        i !== o)
                                      )
                                        if ((s = Re()) !== o)
                                          if (wn() !== o)
                                            if (rn() !== o)
                                              if (wn() !== o)
                                                if ((l = Re()) !== o) {
                                                  for (
                                                    c = [], a = hn();
                                                    a !== o;

                                                  )
                                                    c.push(a), (a = hn());
                                                  c !== o
                                                    ? ((a = on()) === o &&
                                                        (a = null),
                                                      a !== o
                                                        ? ((Ae = e),
                                                          (f = r),
                                                          (h = u),
                                                          (d = i),
                                                          (v = s),
                                                          (x = c),
                                                          (e = n =
                                                            {
                                                              function_block: {
                                                                highlight: Yn(
                                                                  n,
                                                                  l
                                                                ),
                                                                from: f,
                                                                name: h,
                                                                instructions: x,
                                                                args: d,
                                                                to: v,
                                                              },
                                                            }))
                                                        : ((ge = e), (e = o)))
                                                    : ((ge = e), (e = o));
                                                } else (ge = e), (e = o);
                                              else (ge = e), (e = o);
                                            else (ge = e), (e = o);
                                          else (ge = e), (e = o);
                                        else (ge = e), (e = o);
                                      else (ge = e), (e = o);
                                    else (ge = e), (e = o);
                                  else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            else (ge = e), (e = o);
                            return (je[y] = { nextPos: ge, result: e }), e;
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c = 125 * ge + 73,
                              a = je[c];
                            if (a) return (ge = a.nextPos), a.result;
                            if (
                              ((e = ge),
                              (function () {
                                var e,
                                  n,
                                  r,
                                  u,
                                  i = 125 * ge + 25,
                                  s = je[i];
                                return s
                                  ? ((ge = s.nextPos), s.result)
                                  : ((e = ge),
                                    (n = Me()) !== o
                                      ? (t.substr(ge, 5) === G
                                          ? ((r = G), (ge += 5))
                                          : ((r = o), 0 === Oe && ze(Q)),
                                        r !== o && (u = Re()) !== o
                                          ? ((Ae = e), (e = n = p(n, u)))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)),
                                    (je[i] = { nextPos: ge, result: e }),
                                    e);
                              })() !== o)
                            )
                              if (wn() !== o)
                                if ((n = Me()) !== o)
                                  if ((r = cn()) !== o)
                                    if (
                                      ((u = an()) === o && (u = null), u !== o)
                                    )
                                      if ((i = Re()) !== o)
                                        if (wn() !== o)
                                          if (rn() !== o)
                                            if (wn() !== o) {
                                              for (s = [], l = hn(); l !== o; )
                                                s.push(l), (l = hn());
                                              s !== o
                                                ? ((l = on()) === o &&
                                                    (l = null),
                                                  l !== o
                                                    ? ((Ae = e),
                                                      (e = {
                                                        macro_block: {
                                                          from: n,
                                                          name: r,
                                                          instructions: s,
                                                          to: i,
                                                        },
                                                      }))
                                                    : ((ge = e), (e = o)))
                                                : ((ge = e), (e = o));
                                            } else (ge = e), (e = o);
                                          else (ge = e), (e = o);
                                        else (ge = e), (e = o);
                                      else (ge = e), (e = o);
                                    else (ge = e), (e = o);
                                  else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            else (ge = e), (e = o);
                            return (je[c] = { nextPos: ge, result: e }), e;
                          })()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l = 125 * ge + 69,
                              c = je[l];
                            if (c) return (ge = c.nextPos), c.result;
                            if (
                              ((e = ge),
                              (function () {
                                var e,
                                  n,
                                  r,
                                  u,
                                  i = 125 * ge + 12,
                                  s = je[i];
                                return s
                                  ? ((ge = s.nextPos), s.result)
                                  : ((e = ge),
                                    (n = Me()) !== o
                                      ? ("try" === t.substr(ge, 3)
                                          ? ((r = "try"), (ge += 3))
                                          : ((r = o), 0 === Oe && ze(k)),
                                        r !== o && (u = Re()) !== o
                                          ? ((Ae = e), (e = n = p(n, u)))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)),
                                    (je[i] = { nextPos: ge, result: e }),
                                    e);
                              })() !== o)
                            )
                              if (wn() !== o)
                                if (rn() !== o)
                                  if (wn() !== o) {
                                    for (n = [], r = hn(); r !== o; )
                                      n.push(r), (r = hn());
                                    if (n !== o)
                                      if ((r = on()) !== o) {
                                        for (
                                          u = [],
                                            i = ge,
                                            wn() !== o && (s = ln()) !== o
                                              ? ((Ae = i), (i = Ut(0, s)))
                                              : ((ge = i), (i = o));
                                          i !== o;

                                        )
                                          u.push(i),
                                            (i = ge),
                                            wn() !== o && (s = ln()) !== o
                                              ? ((Ae = i), (i = Ut(0, s)))
                                              : ((ge = i), (i = o));
                                        u !== o
                                          ? ((Ae = e),
                                            (e = {
                                              try_catch: {
                                                catch_statements: u,
                                                instructions: n,
                                              },
                                            }))
                                          : ((ge = e), (e = o));
                                      } else (ge = e), (e = o);
                                    else (ge = e), (e = o);
                                  } else (ge = e), (e = o);
                                else (ge = e), (e = o);
                              else (ge = e), (e = o);
                            else (ge = e), (e = o);
                            return (je[l] = { nextPos: ge, result: e }), e;
                          })()) === o &&
                          (r = fn()) === o &&
                          (r = (function () {
                            var e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a,
                              f,
                              h,
                              d,
                              v = 125 * ge + 40,
                              x = je[v];
                            return x
                              ? ((ge = x.nextPos), x.result)
                              : ((e = ge),
                                (n = Me()) !== o &&
                                (function () {
                                  var e,
                                    n,
                                    r,
                                    u,
                                    i = 125 * ge + 11,
                                    s = je[i];
                                  return s
                                    ? ((ge = s.nextPos), s.result)
                                    : ((e = ge),
                                      (n = Me()) !== o
                                        ? (t.substr(ge, 4) === O
                                            ? ((r = O), (ge += 4))
                                            : ((r = o), 0 === Oe && ze(j)),
                                          r !== o && (u = Re()) !== o
                                            ? ((Ae = e), (e = n = p(n, u)))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      (je[i] = { nextPos: ge, result: e }),
                                      e);
                                })() !== o &&
                                wn() !== o &&
                                (r = Me()) !== o &&
                                (u = cn()) !== o &&
                                (i = Re()) !== o
                                  ? ((s = an()) === o && (s = null),
                                    s !== o && wn() !== o && (l = Re()) !== o
                                      ? ((c = Le()) === o && (c = null),
                                        c !== o
                                          ? ((Ae = e),
                                            (a = r),
                                            (f = u),
                                            (h = i),
                                            (d = s),
                                            (e = n =
                                              {
                                                call: {
                                                  highlight: Yn(n, l),
                                                  from: a,
                                                  text: f,
                                                  args: d,
                                                  to: h,
                                                },
                                              }))
                                          : ((ge = e), (e = o)))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                (je[v] = { nextPos: ge, result: e }),
                                e);
                          })()) === o &&
                          (r = (function () {
                            var t,
                              e,
                              n,
                              r,
                              u,
                              i,
                              s,
                              l,
                              c,
                              a = 125 * ge + 43,
                              f = je[a];
                            if (f) return (ge = f.nextPos), f.result;
                            if (((t = ge), (e = Me()) !== o))
                              if (wn() !== o)
                                if (rn() !== o)
                                  if ((n = Re()) !== o)
                                    if (wn() !== o) {
                                      for (r = [], u = hn(); u !== o; )
                                        r.push(u), (u = hn());
                                      r !== o && (u = Me()) !== o && wn() !== o
                                        ? ((i = on()) === o && (i = null),
                                          i !== o && (s = Re()) !== o
                                            ? ((Ae = t),
                                              (l = u),
                                              (c = s),
                                              (t = e =
                                                {
                                                  instructions: r,
                                                  highlight: Yn(e, n),
                                                  highlightEnd: Yn(l, c),
                                                }))
                                            : ((ge = t), (t = o)))
                                        : ((ge = t), (t = o));
                                    } else (ge = t), (t = o);
                                  else (ge = t), (t = o);
                                else (ge = t), (t = o);
                              else (ge = t), (t = o);
                            else (ge = t), (t = o);
                            return (je[a] = { nextPos: ge, result: t }), t;
                          })()) === o &&
                          (r = yn()) === o &&
                          (r = (function () {
                            var t,
                              e = 125 * ge + 80,
                              n = je[e];
                            return n
                              ? ((ge = n.nextPos), n.result)
                              : ((t = ge),
                                wn() !== o && Le() !== o
                                  ? ((Ae = t), (t = void 0))
                                  : ((ge = t), (t = o)),
                                (je[e] = { nextPos: ge, result: t }),
                                t);
                          })()),
                        r !== o && wn() !== o
                          ? ((Ae = e), (e = r))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[u] = { nextPos: ge, result: e }),
                    e);
              }
              function dn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c,
                  a = 125 * ge + 81,
                  f = je[a];
                if (f) return (ge = f.nextPos), f.result;
                if (
                  ((e = ge),
                  (n = []),
                  Vt.test(t.charAt(ge))
                    ? ((r = t.charAt(ge)), ge++)
                    : ((r = o), 0 === Oe && ze(Jt)),
                  r !== o)
                )
                  for (; r !== o; )
                    n.push(r),
                      Vt.test(t.charAt(ge))
                        ? ((r = t.charAt(ge)), ge++)
                        : ((r = o), 0 === Oe && ze(Jt));
                else n = o;
                return (
                  n !== o
                    ? ((r = ge),
                      40 === t.charCodeAt(ge)
                        ? ((u = Pt), ge++)
                        : ((u = o), 0 === Oe && ze(bt)),
                      u !== o && (i = dn()) !== o
                        ? (41 === t.charCodeAt(ge)
                            ? ((s = gt), ge++)
                            : ((s = o), 0 === Oe && ze(At)),
                          s !== o
                            ? ((Ae = r), (r = u = `(${i})`))
                            : ((ge = r), (r = o)))
                        : ((ge = r), (r = o)),
                      r === o && (r = null),
                      r !== o
                        ? ((u = dn()) === o && (u = null),
                          u !== o
                            ? ((Ae = e),
                              (l = r),
                              (c = u),
                              (e = n = n.join("") + (l || "") + (c || "")))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)))
                    : ((ge = e), (e = o)),
                  (je[a] = { nextPos: ge, result: e }),
                  e
                );
              }
              function vn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c,
                  a = 125 * ge + 86,
                  f = je[a];
                return f
                  ? ((ge = f.nextPos), f.result)
                  : ((e = ge),
                    (function () {
                      var e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 82,
                        s = je[i];
                      return s
                        ? ((ge = s.nextPos), s.result)
                        : ((e = ge),
                          (n = Me()) !== o
                            ? (91 === t.charCodeAt(ge)
                                ? ((r = St), ge++)
                                : ((r = o), 0 === Oe && ze(Tt)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e),
                                  (e = n = void Xn("link_bracket.close", n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          (je[i] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    wn() !== o &&
                    (n = Me()) !== o &&
                    (r = En()) !== o &&
                    (u = Re()) !== o &&
                    wn() !== o &&
                    (function () {
                      var e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 83,
                        s = je[i];
                      return s
                        ? ((ge = s.nextPos), s.result)
                        : ((e = ge),
                          (n = Me()) !== o
                            ? (93 === t.charCodeAt(ge)
                                ? ((r = Et), ge++)
                                : ((r = o), 0 === Oe && ze(Nt)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e),
                                  (e = n = void Xn("link_bracket.open", n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          (je[i] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    wn() !== o &&
                    (function () {
                      var e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 84,
                        s = je[i];
                      return s
                        ? ((ge = s.nextPos), s.result)
                        : ((e = ge),
                          (n = Me()) !== o
                            ? (40 === t.charCodeAt(ge)
                                ? ((r = Pt), ge++)
                                : ((r = o), 0 === Oe && ze(bt)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e),
                                  (e = n = void Xn("link_paren.open", n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          (je[i] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    wn() !== o &&
                    (i = Me()) !== o
                      ? ((s = dn()) === o && (s = null),
                        s !== o &&
                        (l = Re()) !== o &&
                        wn() !== o &&
                        (function () {
                          var e,
                            n,
                            r,
                            u,
                            i = 125 * ge + 85,
                            s = je[i];
                          return s
                            ? ((ge = s.nextPos), s.result)
                            : ((e = ge),
                              (n = Me()) !== o
                                ? (41 === t.charCodeAt(ge)
                                    ? ((r = gt), ge++)
                                    : ((r = o), 0 === Oe && ze(At)),
                                  r !== o && (u = Re()) !== o
                                    ? ((Ae = e),
                                      (e = n =
                                        void Xn("link_paren.close", n, u)))
                                    : ((ge = e), (e = o)))
                                : ((ge = e), (e = o)),
                              (je[i] = { nextPos: ge, result: e }),
                              e);
                        })() !== o
                          ? ((c = Sn()) === o && (c = null),
                            c !== o
                              ? ((Ae = e),
                                (e = (function (t, e, n, r, o, u, i) {
                                  const s = {
                                    to: n,
                                    text: e,
                                    from: t,
                                    yield: i || void 0,
                                    linkPosition: o && { from: r, to: u },
                                    link: o,
                                  };
                                  return (
                                    o && Xn("link", r, u), { expression: s }
                                  );
                                })(n, r, u, i, s, l, c)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[a] = { nextPos: ge, result: e }),
                    e);
              }
              function xn() {
                var t,
                  e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 88,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((t = ge),
                    (e = Me()) !== o
                      ? ((n = vn()) === o &&
                          (n = (function () {
                            var t,
                              e,
                              n,
                              r,
                              u,
                              i,
                              s = 125 * ge + 87,
                              l = je[s];
                            return l
                              ? ((ge = l.nextPos), l.result)
                              : ((t = ge),
                                (e = Me()) !== o &&
                                (n = En()) !== o &&
                                (r = Re()) !== o
                                  ? ((u = Sn()) === o && (u = null),
                                    u !== o && wn() !== o
                                      ? ((i = Le()) === o && (i = null),
                                        i !== o
                                          ? ((Ae = t),
                                            (t = e =
                                              {
                                                expression: {
                                                  to: r,
                                                  text: n,
                                                  from: e,
                                                  yield: u || void 0,
                                                },
                                              }))
                                          : ((ge = t), (t = o)))
                                      : ((ge = t), (t = o)))
                                  : ((ge = t), (t = o)),
                                (je[s] = { nextPos: ge, result: t }),
                                t);
                          })()),
                        n !== o && wn() !== o
                          ? ((r = Le()) === o && (r = null),
                            r !== o && (u = Re()) !== o
                              ? ((Ae = t),
                                (t = e =
                                  (function (t, e, n) {
                                    const { expression: r } = e;
                                    return {
                                      expression: { ...r, highlight: Yn(t, n) },
                                    };
                                  })(e, n, u)))
                              : ((ge = t), (t = o)))
                          : ((ge = t), (t = o)))
                      : ((ge = t), (t = o)),
                    (je[i] = { nextPos: ge, result: t }),
                    t);
              }
              function yn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c = 125 * ge + 89,
                  p = je[c];
                return p
                  ? ((ge = p.nextPos), p.result)
                  : ((e = ge),
                    (n = An()) === o && (n = null),
                    n !== o && (r = wn()) !== o && (u = xn()) !== o
                      ? ((Ae = e),
                        (e = n =
                          (function (t, e) {
                            const { expression: n, link: r } = e;
                            return { expression: { ...n, block: t }, link: r };
                          })(n, u)))
                      : ((ge = e), (e = o)),
                    e === o &&
                      ((e = ge),
                      (n = Me()) !== o
                        ? (60 === t.charCodeAt(ge)
                            ? ((r = Kt), ge++)
                            : ((r = o), 0 === Oe && ze(Wt)),
                          r !== o &&
                          (u = wn()) !== o &&
                          (i = xn()) !== o &&
                          wn() !== o
                            ? (62 === t.charCodeAt(ge)
                                ? ((s = a), ge++)
                                : ((s = o), 0 === Oe && ze(f)),
                              s !== o && (l = Re()) !== o
                                ? ((Ae = e),
                                  (e = n =
                                    (function (t, e, n) {
                                      const { expression: r, link: o } = e;
                                      return (
                                        (function (t, e, n, r) {
                                          const o = JSON.stringify({
                                            type: "constant.bold",
                                            from: e,
                                            to: n,
                                            value: void 0,
                                          });
                                          Wn[e.line] &&
                                            (Wn[e.line] = Wn[e.line].filter(
                                              (t) => JSON.stringify(t) !== o
                                            ));
                                        })(0, t, n),
                                        {
                                          expression: { ...r, from: t, to: n },
                                          link: o,
                                        }
                                      );
                                    })(n, i, l)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o))),
                    (je[c] = { nextPos: ge, result: e }),
                    e);
              }
              function mn() {
                var t,
                  e,
                  n,
                  r,
                  u = 125 * ge + 91,
                  i = je[u];
                return i
                  ? ((ge = i.nextPos), i.result)
                  : ((t = ge),
                    (e = vn()) !== o &&
                      ((Ae = t),
                      (e = (function (t) {
                        const {
                          expression: {
                            text: e,
                            from: n,
                            to: r,
                            link: o,
                            linkPosition: u,
                          },
                        } = t;
                        return {
                          from: n,
                          text: e,
                          link: o,
                          to: r,
                          linkPosition: u,
                        };
                      })(e))),
                    (t = e) === o &&
                      ((t = ge),
                      (e = Me()) !== o
                        ? ((n = Ze()) === o && (n = null),
                          n !== o && (r = Re()) !== o && wn() !== o
                            ? ((Ae = t), (t = e = { from: e, text: n, to: r }))
                            : ((ge = t), (t = o)))
                        : ((ge = t), (t = o))),
                    (je[u] = { nextPos: ge, result: t }),
                    t);
              }
              function Pn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l = 125 * ge + 94,
                  c = je[l];
                return c
                  ? ((ge = c.nextPos), c.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (35 === t.charCodeAt(ge)
                          ? ((r = "#"), ge++)
                          : ((r = o), 0 === Oe && ze($t)),
                        r !== o &&
                        kn() !== o &&
                        Me() !== o &&
                        Jn() !== o &&
                        (u = Re()) !== o
                          ? ((i = ge),
                            Oe++,
                            (s = Vn()) === o && (s = null),
                            Oe--,
                            s !== o ? ((ge = i), (i = void 0)) : (i = o),
                            i !== o
                              ? ((Ae = e), (e = n = void Xn("comment", n, u)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[l] = { nextPos: ge, result: e }),
                    e);
              }
              function bn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c,
                  a,
                  f = 125 * ge + 95,
                  p = je[f];
                if (p) return (ge = p.nextPos), p.result;
                if (
                  ((e = ge),
                  (n = Me()) !== o
                    ? ("//" === t.substr(ge, 2)
                        ? ((r = "//"), (ge += 2))
                        : ((r = o), 0 === Oe && ze(Bt)),
                      r !== o &&
                      kn() !== o &&
                      (u = Me()) !== o &&
                      (i = Jn()) !== o &&
                      (s = Re()) !== o
                        ? ((l = ge),
                          Oe++,
                          (c = Vn()) === o && (c = null),
                          Oe--,
                          c !== o ? ((ge = l), (l = void 0)) : (l = o),
                          l !== o
                            ? ((Ae = e),
                              (e = n =
                                (function (t, e, n, r) {
                                  Xn("note", t, r);
                                  var o = { to: r, text: n, from: e };
                                  return Qn.push(o), { comment: o };
                                })(n, u, i, s)))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)))
                    : ((ge = e), (e = o)),
                  e === o)
                )
                  if (((e = ge), (n = Me()) !== o))
                    if (
                      ("/*" === t.substr(ge, 2)
                        ? ((r = "/*"), (ge += 2))
                        : ((r = o), 0 === Oe && ze(Ht)),
                      r !== o)
                    )
                      if (wn() !== o)
                        if ((u = Me()) !== o) {
                          for (
                            i = [],
                              s = ge,
                              l = ge,
                              Oe++,
                              t.substr(ge, 2) === Zt
                                ? ((c = Zt), (ge += 2))
                                : ((c = o), 0 === Oe && ze(Gt)),
                              Oe--,
                              c === o ? (l = void 0) : ((ge = l), (l = o)),
                              l !== o && (c = gn()) !== o
                                ? ((Ae = s), (s = l = Qt(0, 0, c)))
                                : ((ge = s), (s = o));
                            s !== o;

                          )
                            i.push(s),
                              (s = ge),
                              (l = ge),
                              Oe++,
                              t.substr(ge, 2) === Zt
                                ? ((c = Zt), (ge += 2))
                                : ((c = o), 0 === Oe && ze(Gt)),
                              Oe--,
                              c === o ? (l = void 0) : ((ge = l), (l = o)),
                              l !== o && (c = gn()) !== o
                                ? ((Ae = s), (s = l = Qt(0, 0, c)))
                                : ((ge = s), (s = o));
                          i !== o && (s = Re()) !== o && (l = wn()) !== o
                            ? (t.substr(ge, 2) === Zt
                                ? ((c = Zt), (ge += 2))
                                : ((c = o), 0 === Oe && ze(Gt)),
                              c !== o && (a = Re()) !== o
                                ? ((Ae = e),
                                  (e = n =
                                    (function (t, e, n, r, o) {
                                      Xn("note", t, o);
                                      var u = {
                                        to: r,
                                        text: n.join("").trim(),
                                        from: e,
                                      };
                                      return Qn.push(u), { comment: u };
                                    })(n, u, i, s, a)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o));
                        } else (ge = e), (e = o);
                      else (ge = e), (e = o);
                    else (ge = e), (e = o);
                  else (ge = e), (e = o);
                return (je[f] = { nextPos: ge, result: e }), e;
              }
              function gn() {
                var e,
                  n = 125 * ge + 96,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : (t.length > ge
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(Xt)),
                    (je[n] = { nextPos: ge, result: e }),
                    e);
              }
              function An() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c,
                  p,
                  h = 125 * ge + 97,
                  d = je[h];
                return d
                  ? ((ge = d.nextPos), d.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (60 === t.charCodeAt(ge)
                          ? ((r = Kt), ge++)
                          : ((r = o), 0 === Oe && ze(Wt)),
                        r !== o && wn() !== o
                          ? ((u = En()) === o && (u = null),
                            u !== o && wn() !== o
                              ? (62 === t.charCodeAt(ge)
                                  ? ((i = a), ge++)
                                  : ((i = o), 0 === Oe && ze(f)),
                                i !== o && (s = Re()) !== o
                                  ? ((Ae = e),
                                    (c = u),
                                    Xn("constant.bold", (l = n), (p = s)),
                                    (e = n = { name: c, from: l, to: p }))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[h] = { nextPos: ge, result: e }),
                    e);
              }
              function _n() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 101,
                  l = je[s];
                return l
                  ? ((ge = l.nextPos), l.result)
                  : ((e = ge),
                    (n = ge),
                    Oe++,
                    ee.test(t.charAt(ge))
                      ? ((r = t.charAt(ge)), ge++)
                      : ((r = o), 0 === Oe && ze(ne)),
                    Oe--,
                    r !== o ? ((ge = n), (n = void 0)) : (n = o),
                    n !== o && (r = kn()) !== o
                      ? (et.test(t.charAt(ge))
                          ? ((u = t.charAt(ge)), ge++)
                          : ((u = o), 0 === Oe && ze(nt)),
                        u !== o
                          ? ((Ae = e), (e = n = "\n"))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    e === o &&
                      ((e = ge),
                      et.test(t.charAt(ge))
                        ? ((n = t.charAt(ge)), ge++)
                        : ((n = o), 0 === Oe && ze(nt)),
                      n !== o && (r = kn()) !== o
                        ? ((u = ge),
                          Oe++,
                          ee.test(t.charAt(ge))
                            ? ((i = t.charAt(ge)), ge++)
                            : ((i = o), 0 === Oe && ze(ne)),
                          Oe--,
                          i !== o ? ((ge = u), (u = void 0)) : (u = o),
                          u !== o
                            ? ((Ae = e), (e = n = "\n"))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o))),
                    (je[s] = { nextPos: ge, result: e }),
                    e);
              }
              function Cn() {
                var e,
                  n = 125 * ge + 102,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : (re.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(oe)),
                    (je[n] = { nextPos: ge, result: e }),
                    e);
              }
              function wn() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 103,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                for (
                  t = ge,
                    e = [],
                    (n = Pn()) === o && (n = bn()) === o && (n = Cn());
                  n !== o;

                )
                  e.push(n), (n = Pn()) === o && (n = bn()) === o && (n = Cn());
                return (
                  e !== o && ((Ae = t), (e = void 0)),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function On() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 104,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                if (
                  ((t = ge),
                  (e = []),
                  (n = Pn()) === o && (n = bn()) === o && (n = Cn()),
                  n !== o)
                )
                  for (; n !== o; )
                    e.push(n),
                      (n = Pn()) === o && (n = bn()) === o && (n = Cn());
                else e = o;
                return (
                  e !== o && ((Ae = t), (e = void 0)),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function jn() {
                var e,
                  n,
                  r,
                  u = 125 * ge + 106,
                  i = je[u];
                if (i) return (ge = i.nextPos), i.result;
                if (
                  ((e = ge),
                  (n = []),
                  ue.test(t.charAt(ge))
                    ? ((r = t.charAt(ge)), ge++)
                    : ((r = o), 0 === Oe && ze(ie)),
                  r === o && (r = _n()),
                  r !== o)
                )
                  for (; r !== o; )
                    n.push(r),
                      ue.test(t.charAt(ge))
                        ? ((r = t.charAt(ge)), ge++)
                        : ((r = o), 0 === Oe && ze(ie)),
                      r === o && (r = _n());
                else n = o;
                return (
                  n !== o && ((Ae = e), (n = n.join(""))),
                  (e = n),
                  (je[u] = { nextPos: ge, result: e }),
                  e
                );
              }
              function kn() {
                var e,
                  n,
                  r,
                  u = 125 * ge + 107,
                  i = je[u];
                if (i) return (ge = i.nextPos), i.result;
                for (
                  e = ge,
                    n = [],
                    ue.test(t.charAt(ge))
                      ? ((r = t.charAt(ge)), ge++)
                      : ((r = o), 0 === Oe && ze(ie));
                  r !== o;

                )
                  n.push(r),
                    ue.test(t.charAt(ge))
                      ? ((r = t.charAt(ge)), ge++)
                      : ((r = o), 0 === Oe && ze(ie));
                return (
                  n !== o && ((Ae = e), (n = void 0)),
                  (e = n),
                  (je[u] = { nextPos: ge, result: e }),
                  e
                );
              }
              function Sn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 109,
                  l = je[s];
                return l
                  ? ((ge = l.nextPos), l.result)
                  : ((e = ge),
                    wn() !== o &&
                    (function () {
                      var e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 66,
                        s = je[i];
                      return s
                        ? ((ge = s.nextPos), s.result)
                        : ((e = ge),
                          (n = Me()) !== o
                            ? (91 === t.charCodeAt(ge)
                                ? ((r = St), ge++)
                                : ((r = o), 0 === Oe && ze(Tt)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e),
                                  (e = n =
                                    void Xn("paren.lparen.bracket", n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          (je[i] = { nextPos: ge, result: e }),
                          e);
                    })() !== o &&
                    wn() !== o &&
                    (n = (function () {
                      var t,
                        e,
                        n,
                        r,
                        u,
                        i = 125 * ge + 52,
                        s = je[i];
                      if (s) return (ge = s.nextPos), s.result;
                      if (((t = ge), (e = Me()) !== o)) {
                        for (n = [], r = Qe(); r !== o; ) n.push(r), (r = Qe());
                        n !== o && (r = Re()) !== o
                          ? ((Ae = t),
                            (u = n),
                            Xn("yield_text", e, r),
                            (t = e = u.join("").trim()))
                          : ((ge = t), (t = o));
                      } else (ge = t), (t = o);
                      return (je[i] = { nextPos: ge, result: t }), t;
                    })()) !== o &&
                    wn() !== o
                      ? ((r = (function () {
                          var e,
                            n,
                            r,
                            u,
                            i = 125 * ge + 67,
                            s = je[i];
                          return s
                            ? ((ge = s.nextPos), s.result)
                            : ((e = ge),
                              (n = Me()) !== o
                                ? (93 === t.charCodeAt(ge)
                                    ? ((r = Et), ge++)
                                    : ((r = o), 0 === Oe && ze(Nt)),
                                  r !== o && (u = Re()) !== o
                                    ? ((Ae = e),
                                      (e = n =
                                        void Xn("paren.rparen.bracket", n, u)))
                                    : ((ge = e), (e = o)))
                                : ((ge = e), (e = o)),
                              (je[i] = { nextPos: ge, result: e }),
                              e);
                        })()) === o && (r = null),
                        r !== o && kn() !== o
                          ? ((u = ge),
                            Oe++,
                            se.test(t.charAt(ge))
                              ? ((i = t.charAt(ge)), ge++)
                              : ((i = o), 0 === Oe && ze(le)),
                            Oe--,
                            i !== o ? ((ge = u), (u = void 0)) : (u = o),
                            u !== o ? ((Ae = e), (e = n)) : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[s] = { nextPos: ge, result: e }),
                    e);
              }
              function Tn() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 110,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                if (((t = ge), (e = []), (n = Dn()) !== o))
                  for (; n !== o; ) e.push(n), (n = Dn());
                else e = o;
                return (
                  e !== o && ((Ae = t), (e = at(e))),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function En() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 111,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                if (((t = ge), (e = []), (n = qn()) !== o))
                  for (; n !== o; ) e.push(n), (n = qn());
                else e = o;
                return (
                  e !== o && ((Ae = t), (e = e.join(""))),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function Nn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 112,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (42 === t.charCodeAt(ge)
                          ? ((r = ft), ge++)
                          : ((r = o), 0 === Oe && ze(pt)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = ce(n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function zn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 113,
                  l = je[s];
                return l
                  ? ((ge = l.nextPos), l.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? ((r = ge),
                        Oe++,
                        t.substr(ge, 2) === lt
                          ? ((u = lt), (ge += 2))
                          : ((u = o), 0 === Oe && ze(ct)),
                        Oe--,
                        u === o ? (r = void 0) : ((ge = r), (r = o)),
                        r !== o
                          ? (42 === t.charCodeAt(ge)
                              ? ((u = ft), ge++)
                              : ((u = o), 0 === Oe && ze(pt)),
                            u !== o && (i = Re()) !== o
                              ? ((Ae = e), (e = n = ce(n, i)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[s] = { nextPos: ge, result: e }),
                    e);
              }
              function Fn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 114,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (t.substr(ge, 2) === lt
                          ? ((r = lt), (ge += 2))
                          : ((r = o), 0 === Oe && ze(ct)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = ae(n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function Mn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 115,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (t.substr(ge, 2) === lt
                          ? ((r = lt), (ge += 2))
                          : ((r = o), 0 === Oe && ze(ct)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = ae(n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function Rn() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 116,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (96 === t.charCodeAt(ge)
                          ? ((r = ht), ge++)
                          : ((r = o), 0 === Oe && ze(dt)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = fe(n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function In() {
                var e,
                  n,
                  r,
                  u,
                  i = 125 * ge + 117,
                  s = je[i];
                return s
                  ? ((ge = s.nextPos), s.result)
                  : ((e = ge),
                    (n = Me()) !== o
                      ? (96 === t.charCodeAt(ge)
                          ? ((r = ht), ge++)
                          : ((r = o), 0 === Oe && ze(dt)),
                        r !== o && (u = Re()) !== o
                          ? ((Ae = e), (e = n = fe(n, u)))
                          : ((ge = e), (e = o)))
                      : ((ge = e), (e = o)),
                    (je[i] = { nextPos: ge, result: e }),
                    e);
              }
              function Ln() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 118,
                  l = je[s];
                if (l) return (ge = l.nextPos), l.result;
                if (
                  ((e = ge),
                  (n = []),
                  (r = ge),
                  (u = ge),
                  Oe++,
                  t.substr(ge, 2) === lt
                    ? ((i = lt), (ge += 2))
                    : ((i = o), 0 === Oe && ze(ct)),
                  Oe--,
                  i === o ? (u = void 0) : ((ge = u), (u = o)),
                  u !== o && (i = Dn()) !== o
                    ? ((Ae = r), (r = u = i))
                    : ((ge = r), (r = o)),
                  r !== o)
                )
                  for (; r !== o; )
                    n.push(r),
                      (r = ge),
                      (u = ge),
                      Oe++,
                      t.substr(ge, 2) === lt
                        ? ((i = lt), (ge += 2))
                        : ((i = o), 0 === Oe && ze(ct)),
                      Oe--,
                      i === o ? (u = void 0) : ((ge = u), (u = o)),
                      u !== o && (i = Dn()) !== o
                        ? ((Ae = r), (r = u = i))
                        : ((ge = r), (r = o));
                else n = o;
                return (
                  n !== o && ((Ae = e), (n = at(n))),
                  (e = n),
                  (je[s] = { nextPos: ge, result: e }),
                  e
                );
              }
              function Un() {
                var t,
                  e,
                  n,
                  r,
                  u,
                  i,
                  s = 125 * ge + 119,
                  l = je[s];
                return l
                  ? ((ge = l.nextPos), l.result)
                  : ((t = ge),
                    (e = Me()) !== o && (n = Ln()) !== o && (r = Re()) !== o
                      ? ((Ae = t),
                        (i = n),
                        Xn("expression.bold", e, r),
                        (t = e = i))
                      : ((ge = t), (t = o)),
                    t === o &&
                      ((t = ge),
                      (e = Nn()) !== o &&
                      (n = Me()) !== o &&
                      (r = Ln()) !== o &&
                      (u = Re()) !== o &&
                      zn() !== o
                        ? ((Ae = t),
                          (t = e =
                            (function (t, e, n) {
                              return (
                                Xn("expression.bold.italic", t, n),
                                "*" + e + "*"
                              );
                            })(n, r, u)))
                        : ((ge = t), (t = o))),
                    (je[s] = { nextPos: ge, result: t }),
                    t);
              }
              function qn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l,
                  c = 125 * ge + 120,
                  a = je[c];
                if (a) return (ge = a.nextPos), a.result;
                if (
                  ((e = ge),
                  (n = Me()) !== o && (r = Tn()) !== o && (u = Re()) !== o
                    ? ((Ae = e), (l = r), Xn("expression", n, u), (e = n = l))
                    : ((ge = e), (e = o)),
                  e === o)
                ) {
                  if (((e = ge), (n = Rn()) !== o))
                    if ((r = Me()) !== o) {
                      if (
                        ((u = []),
                        42 === t.charCodeAt(ge)
                          ? ((i = ft), ge++)
                          : ((i = o), 0 === Oe && ze(pt)),
                        i === o &&
                          (91 === t.charCodeAt(ge)
                            ? ((i = St), ge++)
                            : ((i = o), 0 === Oe && ze(Tt)),
                          i === o &&
                            (93 === t.charCodeAt(ge)
                              ? ((i = Et), ge++)
                              : ((i = o), 0 === Oe && ze(Nt)),
                            i === o &&
                              (59 === t.charCodeAt(ge)
                                ? ((i = X), ge++)
                                : ((i = o), 0 === Oe && ze(Y)),
                              i === o && (i = Tn())))),
                        i !== o)
                      )
                        for (; i !== o; )
                          u.push(i),
                            42 === t.charCodeAt(ge)
                              ? ((i = ft), ge++)
                              : ((i = o), 0 === Oe && ze(pt)),
                            i === o &&
                              (91 === t.charCodeAt(ge)
                                ? ((i = St), ge++)
                                : ((i = o), 0 === Oe && ze(Tt)),
                              i === o &&
                                (93 === t.charCodeAt(ge)
                                  ? ((i = Et), ge++)
                                  : ((i = o), 0 === Oe && ze(Nt)),
                                i === o &&
                                  (59 === t.charCodeAt(ge)
                                    ? ((i = X), ge++)
                                    : ((i = o), 0 === Oe && ze(Y)),
                                  i === o && (i = Tn()))));
                      else u = o;
                      u !== o && (i = Re()) !== o
                        ? ((s = In()) === o && (s = null),
                          s !== o
                            ? ((Ae = e),
                              (e = n =
                                (function (t, e, n) {
                                  return (
                                    Xn("code", t, n), "`" + e.join("") + "`"
                                  );
                                })(r, u, i)))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o));
                    } else (ge = e), (e = o);
                  else (ge = e), (e = o);
                  if (e === o) {
                    if (((e = ge), (n = Fn()) !== o))
                      if ((r = Me()) !== o) {
                        if (((u = []), (i = Un()) !== o))
                          for (; i !== o; ) u.push(i), (i = Un());
                        else u = o;
                        u !== o && (i = Re()) !== o
                          ? ((s = Mn()) === o && (s = null),
                            s !== o
                              ? ((Ae = e),
                                (e = n =
                                  (function (t, e, n) {
                                    return "**" + e.join("") + "**";
                                  })(0, u)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o));
                      } else (ge = e), (e = o);
                    else (ge = e), (e = o);
                    e === o &&
                      ((e = ge),
                      (n = Nn()) !== o &&
                      (r = Me()) !== o &&
                      (u = qn()) !== o &&
                      (i = Re()) !== o
                        ? ((s = zn()) === o && (s = null),
                          s !== o
                            ? ((Ae = e),
                              (e = n =
                                (function (t, e, n) {
                                  return (
                                    Xn("expression.italic", t, n), "*" + e + "*"
                                  );
                                })(r, u, i)))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        (n = Me()) !== o
                          ? (42 === t.charCodeAt(ge)
                              ? ((r = ft), ge++)
                              : ((r = o), 0 === Oe && ze(pt)),
                            r !== o && (u = Re()) !== o
                              ? ((Ae = e),
                                Xn("expression", n, u),
                                (e = n = "*"))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          (n = Me()) !== o
                            ? (96 === t.charCodeAt(ge)
                                ? ((r = ht), ge++)
                                : ((r = o), 0 === Oe && ze(dt)),
                              r !== o && (u = Re()) !== o
                                ? ((Ae = e),
                                  (e = n =
                                    (function (t, e) {
                                      return Xn("expression", t, e), "`";
                                    })(n, u)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)))));
                  }
                }
                return (je[c] = { nextPos: ge, result: e }), e;
              }
              function Dn() {
                var e,
                  n,
                  r,
                  u,
                  i,
                  s,
                  l = 125 * ge + 121,
                  c = je[l];
                return c
                  ? ((ge = c.nextPos), c.result)
                  : (pe.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(he)),
                    e === o &&
                      ((e = ge),
                      (n = jn()) !== o
                        ? ((r = ge),
                          Oe++,
                          (u = qn()),
                          Oe--,
                          u !== o ? ((ge = r), (r = void 0)) : (r = o),
                          r !== o
                            ? ((Ae = e), (e = n = n))
                            : ((ge = e), (e = o)))
                        : ((ge = e), (e = o)),
                      e === o &&
                        ((e = ge),
                        (n = ge),
                        91 === t.charCodeAt(ge)
                          ? ((r = St), ge++)
                          : ((r = o), 0 === Oe && ze(Tt)),
                        r !== o && (u = En()) !== o
                          ? (93 === t.charCodeAt(ge)
                              ? ((i = Et), ge++)
                              : ((i = o), 0 === Oe && ze(Nt)),
                            i !== o ? (n = r = [r, u, i]) : ((ge = n), (n = o)))
                          : ((ge = n), (n = o)),
                        n !== o
                          ? ((r = ge),
                            Oe++,
                            (u = En()) === o &&
                              ((u = ge),
                              (i = jn()) === o && (i = null),
                              i !== o
                                ? (91 === t.charCodeAt(ge)
                                    ? ((s = St), ge++)
                                    : ((s = o), 0 === Oe && ze(Tt)),
                                  s !== o
                                    ? (u = i = [i, s])
                                    : ((ge = u), (u = o)))
                                : ((ge = u), (u = o))),
                            Oe--,
                            u !== o ? ((ge = r), (r = void 0)) : (r = o),
                            r !== o
                              ? ((Ae = e), (e = n = de(n)))
                              : ((ge = e), (e = o)))
                          : ((ge = e), (e = o)),
                        e === o &&
                          ((e = ge),
                          (n = ge),
                          60 === t.charCodeAt(ge)
                            ? ((r = Kt), ge++)
                            : ((r = o), 0 === Oe && ze(Wt)),
                          r !== o && (u = En()) !== o
                            ? (62 === t.charCodeAt(ge)
                                ? ((i = a), ge++)
                                : ((i = o), 0 === Oe && ze(f)),
                              i !== o
                                ? (n = r = [r, u, i])
                                : ((ge = n), (n = o)))
                            : ((ge = n), (n = o)),
                          n !== o
                            ? ((r = ge),
                              Oe++,
                              (u = En()) === o &&
                                ((u = ge),
                                (i = jn()) === o && (i = null),
                                i !== o
                                  ? (91 === t.charCodeAt(ge)
                                      ? ((s = St), ge++)
                                      : ((s = o), 0 === Oe && ze(Tt)),
                                    s !== o
                                      ? (u = i = [i, s])
                                      : ((ge = u), (u = o)))
                                  : ((ge = u), (u = o))),
                              Oe--,
                              u !== o ? ((ge = r), (r = void 0)) : (r = o),
                              r !== o
                                ? ((Ae = e), (e = n = de(n)))
                                : ((ge = e), (e = o)))
                            : ((ge = e), (e = o)),
                          e === o &&
                            ((e = ge),
                            92 === t.charCodeAt(ge)
                              ? ((n = yt), ge++)
                              : ((n = o), 0 === Oe && ze(mt)),
                            n !== o
                              ? (59 === t.charCodeAt(ge)
                                  ? ((r = X), ge++)
                                  : ((r = o), 0 === Oe && ze(Y)),
                                r !== o
                                  ? ((Ae = e), (e = n = ";"))
                                  : ((ge = e), (e = o)))
                              : ((ge = e), (e = o)),
                            e === o &&
                              ((e = ge),
                              92 === t.charCodeAt(ge)
                                ? ((n = yt), ge++)
                                : ((n = o), 0 === Oe && ze(mt)),
                              n !== o
                                ? (58 === t.charCodeAt(ge)
                                    ? ((r = ut), ge++)
                                    : ((r = o), 0 === Oe && ze(it)),
                                  r !== o
                                    ? ((Ae = e), (e = n = ":"))
                                    : ((ge = e), (e = o)))
                                : ((ge = e), (e = o)),
                              e === o &&
                                ((e = ge),
                                92 === t.charCodeAt(ge)
                                  ? ((n = yt), ge++)
                                  : ((n = o), 0 === Oe && ze(mt)),
                                n !== o
                                  ? (123 === t.charCodeAt(ge)
                                      ? ((r = _t), ge++)
                                      : ((r = o), 0 === Oe && ze(Ct)),
                                    r !== o
                                      ? ((Ae = e), (e = n = "{"))
                                      : ((ge = e), (e = o)))
                                  : ((ge = e), (e = o)),
                                e === o &&
                                  ((e = ge),
                                  92 === t.charCodeAt(ge)
                                    ? ((n = yt), ge++)
                                    : ((n = o), 0 === Oe && ze(mt)),
                                  n !== o
                                    ? (125 === t.charCodeAt(ge)
                                        ? ((r = wt), ge++)
                                        : ((r = o), 0 === Oe && ze(Ot)),
                                      r !== o
                                        ? ((Ae = e), (e = n = "}"))
                                        : ((ge = e), (e = o)))
                                    : ((ge = e), (e = o)),
                                  e === o &&
                                    ((e = ge),
                                    "\\\\" === t.substr(ge, 2)
                                      ? ((n = "\\\\"), (ge += 2))
                                      : ((n = o), 0 === Oe && ze(ve)),
                                    n !== o && ((Ae = e), (n = "\\")),
                                    (e = n) === o &&
                                      ((e = ge),
                                      92 === t.charCodeAt(ge)
                                        ? ((n = yt), ge++)
                                        : ((n = o), 0 === Oe && ze(mt)),
                                      n !== o
                                        ? (47 === t.charCodeAt(ge)
                                            ? ((r = "/"), ge++)
                                            : ((r = o), 0 === Oe && ze(xe)),
                                          r !== o
                                            ? ((Ae = e), (e = n = "/"))
                                            : ((ge = e), (e = o)))
                                        : ((ge = e), (e = o)),
                                      e === o &&
                                        ((e = ge),
                                        92 === t.charCodeAt(ge)
                                          ? ((n = yt), ge++)
                                          : ((n = o), 0 === Oe && ze(mt)),
                                        n !== o
                                          ? (42 === t.charCodeAt(ge)
                                              ? ((r = ft), ge++)
                                              : ((r = o), 0 === Oe && ze(pt)),
                                            r !== o
                                              ? ((Ae = e), (e = n = "*"))
                                              : ((ge = e), (e = o)))
                                          : ((ge = e), (e = o)),
                                        e === o &&
                                          ((e = ge),
                                          92 === t.charCodeAt(ge)
                                            ? ((n = yt), ge++)
                                            : ((n = o), 0 === Oe && ze(mt)),
                                          n !== o
                                            ? (96 === t.charCodeAt(ge)
                                                ? ((r = ht), ge++)
                                                : ((r = o), 0 === Oe && ze(dt)),
                                              r !== o
                                                ? ((Ae = e), (e = n = "`"))
                                                : ((ge = e), (e = o)))
                                            : ((ge = e), (e = o)),
                                          e === o &&
                                            ((e = ge),
                                            92 === t.charCodeAt(ge)
                                              ? ((n = yt), ge++)
                                              : ((n = o), 0 === Oe && ze(mt)),
                                            n !== o
                                              ? (91 === t.charCodeAt(ge)
                                                  ? ((r = St), ge++)
                                                  : ((r = o),
                                                    0 === Oe && ze(Tt)),
                                                r !== o
                                                  ? ((Ae = e), (e = n = "["))
                                                  : ((ge = e), (e = o)))
                                              : ((ge = e), (e = o)),
                                            e === o &&
                                              ((e = ge),
                                              92 === t.charCodeAt(ge)
                                                ? ((n = yt), ge++)
                                                : ((n = o), 0 === Oe && ze(mt)),
                                              n !== o
                                                ? (93 === t.charCodeAt(ge)
                                                    ? ((r = Et), ge++)
                                                    : ((r = o),
                                                      0 === Oe && ze(Nt)),
                                                  r !== o
                                                    ? ((Ae = e), (e = n = "]"))
                                                    : ((ge = e), (e = o)))
                                                : ((ge = e), (e = o)),
                                              e === o &&
                                                ((e = ge),
                                                92 === t.charCodeAt(ge)
                                                  ? ((n = yt), ge++)
                                                  : ((n = o),
                                                    0 === Oe && ze(mt)),
                                                n !== o
                                                  ? (60 === t.charCodeAt(ge)
                                                      ? ((r = Kt), ge++)
                                                      : ((r = o),
                                                        0 === Oe && ze(Wt)),
                                                    r !== o
                                                      ? ((Ae = e),
                                                        (e = n = ">"))
                                                      : ((ge = e), (e = o)))
                                                  : ((ge = e), (e = o)),
                                                e === o &&
                                                  ((e = ge),
                                                  92 === t.charCodeAt(ge)
                                                    ? ((n = yt), ge++)
                                                    : ((n = o),
                                                      0 === Oe && ze(mt)),
                                                  n !== o
                                                    ? (60 === t.charCodeAt(ge)
                                                        ? ((r = Kt), ge++)
                                                        : ((r = o),
                                                          0 === Oe && ze(Wt)),
                                                      r !== o
                                                        ? ((Ae = e),
                                                          (e = n = ">"))
                                                        : ((ge = e), (e = o)))
                                                    : ((ge = e), (e = o)),
                                                  e === o &&
                                                    ((e = ge),
                                                    92 === t.charCodeAt(ge)
                                                      ? ((n = yt), ge++)
                                                      : ((n = o),
                                                        0 === Oe && ze(mt)),
                                                    n !== o &&
                                                      ((Ae = e), (n = "\\")),
                                                    (e = n))))))))))))))))),
                    (je[l] = { nextPos: ge, result: e }),
                    e);
              }
              function Vn() {
                var e,
                  n = 125 * ge + 122,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : (ye.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(me)),
                    (je[n] = { nextPos: ge, result: e }),
                    e);
              }
              function Jn() {
                var t,
                  e,
                  n,
                  r = 125 * ge + 123,
                  u = je[r];
                if (u) return (ge = u.nextPos), u.result;
                for (t = ge, e = [], n = Kn(); n !== o; ) e.push(n), (n = Kn());
                return (
                  e !== o && ((Ae = t), (e = e.join("").trim())),
                  (t = e),
                  (je[r] = { nextPos: ge, result: t }),
                  t
                );
              }
              function Kn() {
                var e,
                  n = 125 * ge + 124,
                  r = je[n];
                return r
                  ? ((ge = r.nextPos), r.result)
                  : (Pe.test(t.charAt(ge))
                      ? ((e = t.charAt(ge)), ge++)
                      : ((e = o), 0 === Oe && ze(be)),
                    (je[n] = { nextPos: ge, result: e }),
                    e);
              }
              var Wn = [],
                $n = [],
                Bn = [],
                Hn = {},
                Zn = {},
                Gn = [],
                Qn = [];
              function Xn(t, e, r, o) {
                if (n.doTokens) {
                  Wn[e.line] || (Wn[e.line] = []),
                    (Wn[e.line] = Wn[e.line].filter(function (t) {
                      return (
                        (t.from.column < e.column && t.to.column <= e.column) ||
                        (t.from.column >= r.column && t.to.column > r.column)
                      );
                    }));
                  var u = { type: t, from: e, to: r, value: o };
                  return Wn[e.line].push(u), u;
                }
              }
              function Yn(t, e) {
                return { from: t, to: e, type: "highlight" };
              }
              if ((r = i()) !== o && ge === t.length) return r;
              throw (
                (r !== o && ge < t.length && ze({ type: "end" }),
                (function (t, n, r) {
                  return new e(e.buildMessage(t, n), t, n, r);
                })(
                  we,
                  Ce < t.length ? t.charAt(Ce) : null,
                  Ce < t.length ? Ne(Ce, Ce + 1) : Ne(Ce, Ce)
                ))
              );
            },
          });
      },
      5506: function (t) {
        "use strict";
        t.exports = 2147483647;
      },
      4284: function (t, e, n) {
        "use strict";
        var r = n(3902),
          o = n(5506);
        t.exports = function (t) {
          if ((t = r(t)) > o)
            throw new TypeError(t + " exceeds maximum possible timeout");
          return t;
        };
      },
      372: function (t, e, n) {
        "use strict";
        var r = n(6060);
        t.exports = function (t) {
          if ("function" != typeof t) return !1;
          if (!hasOwnProperty.call(t, "length")) return !1;
          try {
            if ("number" != typeof t.length) return !1;
            if ("function" != typeof t.call) return !1;
            if ("function" != typeof t.apply) return !1;
          } catch (t) {
            return !1;
          }
          return !r(t);
        };
      },
      3940: function (t, e, n) {
        "use strict";
        var r = n(5618),
          o = { object: !0, function: !0, undefined: !0 };
        t.exports = function (t) {
          return !!r(t) && hasOwnProperty.call(o, typeof t);
        };
      },
      7205: function (t, e, n) {
        "use strict";
        var r = n(372),
          o = /^\s*class[\s{/}]/,
          u = Function.prototype.toString;
        t.exports = function (t) {
          return !!r(t) && !o.test(u.call(t));
        };
      },
      6060: function (t, e, n) {
        "use strict";
        var r = n(3940);
        t.exports = function (t) {
          if (!r(t)) return !1;
          try {
            return !!t.constructor && t.constructor.prototype === t;
          } catch (t) {
            return !1;
          }
        };
      },
      5618: function (t) {
        "use strict";
        t.exports = function (t) {
          return null != t;
        };
      },
      3666: function (t, e, n) {
        "use strict";
        var r = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function (e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            };
          })(),
          o = function t(e, n, r) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === o) {
              var u = Object.getPrototypeOf(e);
              return null === u ? void 0 : t(u, n, r);
            }
            if ("value" in o) return o.value;
            var i = o.get;
            return void 0 !== i ? i.call(r) : void 0;
          },
          u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
        function i(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
          return Array.from(t);
        }
        function s(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        }
        var c = n(7197),
          a = "main",
          f = function t(e, n) {
            s(this, t), (this.payload = e), (this.transferable = n);
          };
        (t.exports = function (t) {
          var e,
            n,
            p,
            h =
              ((p = t),
              (n = a) in (e = {})
                ? Object.defineProperty(e, n, {
                    value: p,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e.main = p),
              e),
            d = self.postMessage.bind(self),
            v = new ((function (t) {
              function e() {
                return (
                  s(this, e),
                  l(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                r(e, [
                  {
                    key: "emit",
                    value: function (t) {
                      for (
                        var e = arguments.length,
                          n = Array(e > 1 ? e - 1 : 0),
                          r = 1;
                        r < e;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      return d({ eventName: t, args: n }), this;
                    },
                  },
                  {
                    key: "emitLocally",
                    value: function (t) {
                      for (
                        var n,
                          r = arguments.length,
                          u = Array(r > 1 ? r - 1 : 0),
                          i = 1;
                        i < r;
                        i++
                      )
                        u[i - 1] = arguments[i];
                      (n = o(
                        e.prototype.__proto__ ||
                          Object.getPrototypeOf(e.prototype),
                        "emit",
                        this
                      )).call.apply(n, [this, t].concat(u));
                    },
                  },
                  {
                    key: "operation",
                    value: function (t, e) {
                      return (h[t] = e), this;
                    },
                  },
                ]),
                e
              );
            })(c))(),
            x = function (t, e, n) {
              var r,
                o = function (e) {
                  e && e instanceof f
                    ? m(t, 1, e.payload, e.transferable)
                    : m(t, 1, e);
                },
                i = function (e) {
                  m(t, 0, { message: e.message, stack: e.stack });
                };
              try {
                var s = y(t, e, n);
                "object" === (void 0 === (r = s) ? "undefined" : u(r)) &&
                "function" == typeof r.then &&
                "function" == typeof r.catch
                  ? s.then(o).catch(i)
                  : o(s);
              } catch (t) {
                i(t);
              }
            },
            y = function (t, e, n) {
              var r = h[n || a];
              if (!r) throw new Error("Not found handler for this request");
              return r(e, P.bind(null, t));
            },
            m = function (t, e, n) {
              var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : [];
              d([0, t, e, n], r);
            },
            P = function (t, e, n) {
              if (!e) throw new Error("eventName is required");
              if ("string" != typeof e)
                throw new Error("eventName should be string");
              d([1, t, e, n]);
            };
          return (
            self.addEventListener("message", function (t) {
              var e = t.data;
              Array.isArray(e)
                ? x.apply(void 0, i(e))
                : e &&
                  e.eventName &&
                  v.emitLocally.apply(v, [e.eventName].concat(i(e.args)));
            }),
            v
          );
        }),
          (t.exports.TransferableResponse = f);
      },
      7197: function (t) {
        "use strict";
        var e = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function (e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            };
          })(),
          n = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                Object.defineProperty(this, "__listeners", {
                  value: {},
                  enumerable: !1,
                  writable: !1,
                });
            }
            return (
              e(t, [
                {
                  key: "emit",
                  value: function (t) {
                    if (!this.__listeners[t]) return this;
                    for (
                      var e = arguments.length,
                        n = Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    var o = !0,
                      u = !1,
                      i = void 0;
                    try {
                      for (
                        var s, l = this.__listeners[t][Symbol.iterator]();
                        !(o = (s = l.next()).done);
                        o = !0
                      ) {
                        var c = s.value;
                        c.apply(void 0, n);
                      }
                    } catch (t) {
                      (u = !0), (i = t);
                    } finally {
                      try {
                        !o && l.return && l.return();
                      } finally {
                        if (u) throw i;
                      }
                    }
                    return this;
                  },
                },
                {
                  key: "once",
                  value: function (t, e) {
                    var n = this;
                    return this.on(t, function r() {
                      n.off(t, r), e.apply(void 0, arguments);
                    });
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    return (
                      this.__listeners[t] || (this.__listeners[t] = []),
                      this.__listeners[t].push(e),
                      this
                    );
                  },
                },
                {
                  key: "off",
                  value: function (t, e) {
                    return (
                      (this.__listeners[t] = e
                        ? this.__listeners[t].filter(function (t) {
                            return t !== e;
                          })
                        : []),
                      this
                    );
                  },
                },
              ]),
              t
            );
          })();
        t.exports = n;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var u = (e[r] = { exports: {} });
    return t[r](u, u.exports, n), u.exports;
  }
  !(function () {
    const t = n(3666),
      e = n(6148),
      r = n(4156)(
        function (t) {
          return e.parse(t, { doTokens: !0 });
        },
        { primitive: !0, maxAge: 6e4, max: 50 }
      );
    t()
      .operation("parse", (t) => {
        try {
          return r(t);
        } catch (t) {
          throw (console.error("err", t), t);
        }
      })
      .operation("registerPort", (t) => {
        t.onmessage = function (e) {
          const [n, o] = e.data,
            u = r(o);
          console.log("*&&&&&&&&", data);
          t.postMessage([0, n, 1, u]);
        };
      });
  })();
})();

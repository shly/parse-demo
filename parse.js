function parse(t, n) {
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
}
module.exports = parse
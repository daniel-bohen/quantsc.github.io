/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-hashchange-history-hsla-multiplebgs-rgba-textshadow-domprefixes-hasevent-prefixed-prefixes-setclasses !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, s, a, i;
    for (var u in b)
      if (b.hasOwnProperty(u)) {
        if (
          ((e = []),
          (t = b[u]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++)
          (a = e[s]),
            (i = a.split(".")),
            1 === i.length
              ? (Modernizr[i[0]] = o)
              : (!Modernizr[i[0]] ||
                  Modernizr[i[0]] instanceof Boolean ||
                  (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                (Modernizr[i[0]][i[1]] = o)),
            y.push((o ? "" : "no-") + i.join("-"));
      }
  }
  function s(e) {
    var t = S.className,
      n = Modernizr._config.classPrefix || "";
    if ((w && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      w ? (S.className.baseVal = t) : (S.className = t));
  }
  function a() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : w
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function i(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function u(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function l(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function d(e, t, n) {
    var o;
    for (var s in e)
      if (e[s] in t)
        return n === !1
          ? e[s]
          : ((o = t[e[s]]), r(o, "function") ? l(o, n || t) : o);
    return !1;
  }
  function f() {
    var e = t.body;
    return e || ((e = a(w ? "svg" : "body")), (e.fake = !0)), e;
  }
  function c(e, n, r, o) {
    var s,
      i,
      u,
      l,
      d = "modernizr",
      c = a("div"),
      p = f();
    if (parseInt(r, 10))
      for (; r--; )
        (u = a("div")), (u.id = o ? o[r] : d + (r + 1)), c.appendChild(u);
    return (
      (s = a("style")),
      (s.type = "text/css"),
      (s.id = "s" + d),
      (p.fake ? p : c).appendChild(s),
      p.appendChild(c),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(t.createTextNode(e)),
      (c.id = d),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (l = S.style.overflow),
        (S.style.overflow = "hidden"),
        S.appendChild(p)),
      (i = n(c, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (S.style.overflow = l), S.offsetHeight)
        : c.parentNode.removeChild(c),
      !!i
    );
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function g(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var s = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (s) {
        var a = s.error ? "error" : "log";
        s[a].call(
          s,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function m(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(p(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var s = []; o--; ) s.push("(" + p(t[o]) + ":" + r + ")");
      return (
        (s = s.join(" or ")),
        c(
          "@supports (" + s + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == g(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function h(e, t, o, s) {
    function l() {
      f && (delete L.style, delete L.modElem);
    }
    if (((s = r(s, "undefined") ? !1 : s), !r(o, "undefined"))) {
      var d = m(e, o);
      if (!r(d, "undefined")) return d;
    }
    for (
      var f, c, p, g, h, v = ["modernizr", "tspan", "samp"];
      !L.style && v.length;

    )
      (f = !0), (L.modElem = a(v.shift())), (L.style = L.modElem.style);
    for (p = e.length, c = 0; p > c; c++)
      if (
        ((g = e[c]),
        (h = L.style[g]),
        u(g, "-") && (g = i(g)),
        L.style[g] !== n)
      ) {
        if (s || r(o, "undefined")) return l(), "pfx" == t ? g : !0;
        try {
          L.style[g] = o;
        } catch (x) {}
        if (L.style[g] != h) return l(), "pfx" == t ? g : !0;
      }
    return l(), !1;
  }
  function v(e, t, n, o, s) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      i = (e + " " + E.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? h(i, t, o, s)
      : ((i = (e + " " + _.join(a + " ") + a).split(" ")), d(i, t, n));
  }
  function x(e, t, r) {
    return v(e, n, n, t, r);
  }
  var y = [],
    b = [],
    C = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        b.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        b.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = C),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("applicationcache", "applicationCache" in e),
    Modernizr.addTest("history", function () {
      var t = navigator.userAgent;
      return (-1 === t.indexOf("Android 2.") &&
        -1 === t.indexOf("Android 4.0")) ||
        -1 === t.indexOf("Mobile Safari") ||
        -1 !== t.indexOf("Chrome") ||
        -1 !== t.indexOf("Windows Phone") ||
        "file:" === location.protocol
        ? e.history && "pushState" in e.history
        : !1;
    });
  var T = C._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  C._prefixes = T;
  var S = t.documentElement,
    w = "svg" === S.nodeName.toLowerCase(),
    k = "Moz O ms Webkit",
    _ = C._config.usePrefixes ? k.toLowerCase().split(" ") : [];
  C._domPrefixes = _;
  var z = (function () {
    function e(e, t) {
      var o;
      return e
        ? ((t && "string" != typeof t) || (t = a(t || "div")),
          (e = "on" + e),
          (o = e in t),
          !o &&
            r &&
            (t.setAttribute || (t = a("div")),
            t.setAttribute(e, ""),
            (o = "function" == typeof t[e]),
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
          o)
        : !1;
    }
    var r = !("onblur" in t.documentElement);
    return e;
  })();
  (C.hasEvent = z),
    Modernizr.addTest("hashchange", function () {
      return z("hashchange", e) === !1
        ? !1
        : t.documentMode === n || t.documentMode > 7;
    }),
    Modernizr.addTest("canvas", function () {
      var e = a("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("canvastext", function () {
      return Modernizr.canvas === !1
        ? !1
        : "function" == typeof a("canvas").getContext("2d").fillText;
    }),
    Modernizr.addTest("cssgradients", function () {
      for (
        var e,
          t = "background-image:",
          n = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
          r = "",
          o = 0,
          s = T.length - 1;
        s > o;
        o++
      )
        (e = 0 === o ? "to " : ""),
          (r += t + T[o] + "linear-gradient(" + e + "left top, #9f9, white);");
      Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
      var i = a("a"),
        u = i.style;
      return (u.cssText = r), ("" + u.backgroundImage).indexOf("gradient") > -1;
    }),
    Modernizr.addTest("multiplebgs", function () {
      var e = a("a").style;
      return (
        (e.cssText =
          "background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(e.background)
      );
    }),
    Modernizr.addTest("rgba", function () {
      var e = a("a").style;
      return (
        (e.cssText = "background-color:rgba(150,255,150,.5)"),
        ("" + e.backgroundColor).indexOf("rgba") > -1
      );
    }),
    Modernizr.addTest("hsla", function () {
      var e = a("a").style;
      return (
        (e.cssText = "background-color:hsla(120,40%,100%,.5)"),
        u(e.backgroundColor, "rgba") || u(e.backgroundColor, "hsla")
      );
    });
  var A = "CSS" in e && "supports" in e.CSS,
    R = "supportsCSS" in e;
  Modernizr.addTest("supports", A || R);
  var E = C._config.usePrefixes ? k.split(" ") : [];
  C._cssomPrefixes = E;
  var O = function (t) {
    var r,
      o = T.length,
      s = e.CSSRule;
    if ("undefined" == typeof s) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in s)
    )
      return "@" + t;
    for (var a = 0; o > a; a++) {
      var i = T[a],
        u = i.toUpperCase() + "_" + r;
      if (u in s) return "@-" + i.toLowerCase() + "-" + t;
    }
    return !1;
  };
  C.atRule = O;
  var P = (C.testStyles = c),
    N = (function () {
      var e = navigator.userAgent,
        t = e.match(/w(eb)?osbrowser/gi),
        n =
          e.match(/windows phone/gi) &&
          e.match(/iemobile\/([0-9])+/gi) &&
          parseFloat(RegExp.$1) >= 9;
      return t || n;
    })();
  N
    ? Modernizr.addTest("fontface", !1)
    : P('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
        var r = t.getElementById("smodernizr"),
          o = r.sheet || r.styleSheet,
          s = o
            ? o.cssRules && o.cssRules[0]
              ? o.cssRules[0].cssText
              : o.cssText || ""
            : "",
          a = /src/i.test(s) && 0 === s.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", a);
      }),
    P(
      '#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',
      function (e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 6);
      }
    );
  var B = { elem: a("modernizr") };
  Modernizr._q.push(function () {
    delete B.elem;
  });
  var L = { style: B.elem.style };
  Modernizr._q.unshift(function () {
    delete L.style;
  }),
    (C.testAllProps = v);
  C.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@")
      ? O(e)
      : (-1 != e.indexOf("-") && (e = i(e)), t ? v(e, t, n) : v(e, "pfx"));
  };
  (C.testAllProps = x),
    Modernizr.addTest("backgroundsize", x("backgroundSize", "100%", !0)),
    Modernizr.addTest("cssanimations", x("animationName", "a", !0)),
    Modernizr.addTest("borderradius", x("borderRadius", "0px", !0)),
    Modernizr.addTest("borderimage", x("borderImage", "url() 1", !0)),
    Modernizr.addTest("boxshadow", x("boxShadow", "1px 1px", !0)),
    (function () {
      Modernizr.addTest("csscolumns", function () {
        var e = !1,
          t = x("columnCount");
        try {
          (e = !!t), e && (e = new Boolean(e));
        } catch (n) {}
        return e;
      });
      for (
        var e,
          t,
          n = [
            "Width",
            "Span",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "BreakBefore",
            "BreakAfter",
            "BreakInside",
          ],
          r = 0;
        r < n.length;
        r++
      )
        (e = n[r].toLowerCase()),
          (t = x("column" + n[r])),
          ("breakbefore" === e || "breakafter" === e || "breakinside" == e) &&
            (t = t || x(n[r])),
          Modernizr.addTest("csscolumns." + e, t);
    })(),
    Modernizr.addTest("flexbox", x("flexBasis", "1px", !0)),
    Modernizr.addTest("cssreflections", x("boxReflect", "above", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        x("transform", "scale(1)", !0)
      );
    }),
    Modernizr.addTest("csstransforms3d", function () {
      return !!x("perspective", "1px", !0);
    }),
    Modernizr.addTest("csstransitions", x("transition", "all", !0));
  var j = (C.testProp = function (e, t, r) {
    return h([e], n, t, r);
  });
  Modernizr.addTest("textshadow", j("textShadow", "1px 1px")),
    o(),
    s(y),
    delete C.addTest,
    delete C.addAsyncTest;
  for (var I = 0; I < Modernizr._q.length; I++) Modernizr._q[I]();
  e.Modernizr = Modernizr;
})(window, document);

;(this.webpackJsonpsite = this.webpackJsonpsite || []).push([
    [0],
    {
        14: function (e, t, n) {},
        35: function (e) {
            e.exports = JSON.parse(
                '{"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#be5e36"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3367165327817598,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":7,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}'
            )
        },
        59: function (e, t, n) {
            e.exports = n(88)
        },
        64: function (e, t, n) {},
        65: function (e, t, n) {},
        70: function (e, t, n) {},
        81: function (e, t, n) {},
        82: function (e, t, n) {},
        83: function (e, t, n) {},
        84: function (e, t, n) {},
        85: function (e, t, n) {},
        88: function (e, t, n) {
            "use strict"
            n.r(t)
            var a = n(0),
                i = n.n(a),
                r = n(19),
                o = n.n(r),
                c = (n(64), n(58)),
                l = n(4),
                s = n(7),
                m = n(5),
                d = n(8),
                u = (n(14), n(42), n(91)),
                p = n(92)
            n(65)
            function f() {
                return i.a.createElement(
                    u.a,
                    {
                        fixed: "top",
                        variant: "dark",
                        collapseOnSelect: !0,
                        expand: "lg",
                        className: "Navbar sticky",
                    },
                    i.a.createElement(
                        u.a.Brand,
                        { href: "#home" },
                        i.a.createElement("img", {
                            src: "/favicon.png",
                            width: "25",
                            height: "25",
                            className: "d-inline-block align-center",
                            alt: "React Bootstrap logo",
                        })
                    ),
                    i.a.createElement(u.a.Toggle, {
                        "aria-controls": "responsive-navbar-nav",
                    }),
                    i.a.createElement(
                        u.a.Collapse,
                        {
                            id: "responsive-navbar-nav",
                            className: "Navbar-Collapsed",
                        },
                        i.a.createElement(
                            p.a,
                            { className: "mr-auto" },
                            i.a.createElement(p.a.Link, { href: "#home" }, "WELCOME")
                        ),
                        i.a.createElement(
                            p.a,
                            null,
                            i.a.createElement(p.a.Link, { href: "#about" }, "ABOUT"),
                            i.a.createElement(
                                p.a.Link,
                                { href: "#projects" },
                                "PROJECTS"
                            )
                        )
                    )
                )
            }
            n(70)
            var b = n(36),
                h = n(21),
                E = n(18),
                g = n(54),
                w = (function (e) {
                    function t(e) {
                        var n
                        return (
                            Object(l.a)(this, t),
                            ((n = Object(s.a)(
                                this,
                                Object(m.a)(t).call(this, e)
                            )).render = function () {
                                return i.a.createElement(
                                    "a",
                                    { target: "_blank", href: n.props.link },
                                    i.a.createElement(
                                        "div",
                                        { className: "icon" },
                                        i.a.createElement(g.a, {
                                            icon: n.props.icon,
                                            style: { color: "black", fontSize: 35 },
                                        })
                                    )
                                )
                            }),
                            n
                        )
                    }
                    return Object(d.a)(t, e), t
                })(a.Component),
                v = (function (e) {
                    function t(e) {
                        var n
                        return (
                            Object(l.a)(this, t),
                            ((n = Object(s.a)(
                                this,
                                Object(m.a)(t).call(this, e)
                            )).renderDesc = function () {
                                return n.props.mobile
                                    ? i.a.createElement(
                                          "div",
                                          {
                                              style: { zIndex: 2 },
                                              className: "landing-description",
                                          },
                                          i.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "landing-description-text landing-description-text-expansion",
                                              },
                                              i.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "row-flex row-left-center",
                                                  },
                                                  i.a.createElement("img", {
                                                      src: "/me.png",
                                                      resizeMode: "contain",
                                                      className:
                                                          "landing-image-small",
                                                      alt: "logo",
                                                  }),
                                                  i.a.createElement(
                                                      "h1",
                                                      {
                                                          style: {
                                                              fontSize: 48,
                                                              padding: 20,
                                                              textAlign: "left",
                                                          },
                                                      },
                                                      "Maya Saringan"
                                                  )
                                              ),
                                              i.a.createElement(
                                                  "p",
                                                  {
                                                      style: {
                                                          display: "flex",
                                                          flexDirection: "row",
                                                          justifyContent:
                                                              "flex-start",
                                                          alignItems: "center",
                                                          fontSize: 15,
                                                          padding: 5,
                                                          borderColor: "grey",
                                                          borderStyle: "dashed",
                                                          borderWidth: 0,
                                                          borderTopWidth: 1,
                                                      },
                                                  },
                                                  i.a.createElement("img", {
                                                      src: "/youi-logo.png",
                                                      className: "company-logo",
                                                      alt: "logo",
                                                  }),
                                                  "Software Developer"
                                              ),
                                              i.a.createElement(
                                                  "div",
                                                  {
                                                      className: "row-flex ",
                                                      style: {
                                                          width: "100%",
                                                          justifyContent:
                                                              "space-between",
                                                      },
                                                  },
                                                  i.a.createElement(
                                                      b.Link,
                                                      {
                                                          to: "about",
                                                          smooth: !0,
                                                          duration: 500,
                                                      },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "button" },
                                                          "About me"
                                                      )
                                                  ),
                                                  i.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "row-flex super-center",
                                                          style: {
                                                              flexWrap: "wrap",
                                                          },
                                                      },
                                                      i.a.createElement(w, {
                                                          icon: E.b,
                                                          link:
                                                              "https://www.linkedin.com/in/msaringan/",
                                                      }),
                                                      i.a.createElement(w, {
                                                          icon: E.a,
                                                          link:
                                                              "https://github.com/MayaSaringan",
                                                      }),
                                                      i.a.createElement(w, {
                                                          icon: h.a,
                                                          link:
                                                              "mailto:contact@mayasaringan.me",
                                                      })
                                                  )
                                              )
                                          )
                                      )
                                    : i.a.createElement(
                                          "div",
                                          {
                                              style: { zIndex: 2 },
                                              className: "landing-description",
                                          },
                                          i.a.createElement("img", {
                                              src: "/me.png",
                                              resizeMode: "contain",
                                              className: "landing-image",
                                              alt: "logo",
                                          }),
                                          i.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "landing-description-text",
                                              },
                                              i.a.createElement(
                                                  "h1",
                                                  {
                                                      style: {
                                                          alignSelf: "flex-start",
                                                          fontSize: 48,
                                                      },
                                                  },
                                                  "Maya Saringan"
                                              ),
                                              i.a.createElement(
                                                  "p",
                                                  {
                                                      style: {
                                                          display: "flex",
                                                          flexDirection: "row",
                                                          justifyContent:
                                                              "flex-start",
                                                          alignItems: "center",
                                                          fontSize: 15,
                                                          padding: 5,
                                                          borderColor: "grey",
                                                          borderStyle: "dashed",
                                                          borderWidth: 0,
                                                          borderTopWidth: 1,
                                                      },
                                                  },
                                                  i.a.createElement("img", {
                                                      src: "/youi-logo.png",
                                                      className: "company-logo",
                                                      alt: "logo",
                                                  }),
                                                  "Software Developer"
                                              ),
                                              i.a.createElement(
                                                  "div",
                                                  {
                                                      className: "row-flex ",
                                                      style: {
                                                          width: "100%",
                                                          justifyContent:
                                                              "space-between",
                                                      },
                                                  },
                                                  i.a.createElement(
                                                      b.Link,
                                                      {
                                                          to: "about",
                                                          smooth: !0,
                                                          duration: 500,
                                                      },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "button" },
                                                          "About me"
                                                      )
                                                  ),
                                                  i.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "row-flex super-center",
                                                      },
                                                      i.a.createElement(w, {
                                                          icon: E.b,
                                                          link:
                                                              "https://www.linkedin.com/in/msaringan/",
                                                      }),
                                                      i.a.createElement(w, {
                                                          icon: E.a,
                                                          link:
                                                              "https://github.com/MayaSaringan",
                                                      }),
                                                      i.a.createElement(w, {
                                                          icon: h.a,
                                                          link:
                                                              "mailto:contact@mayasaringan.me",
                                                      })
                                                  )
                                              )
                                          )
                                      )
                            }),
                            (n.render = function () {
                                return i.a.createElement(
                                    "header",
                                    { className: "App-header", id: "home" },
                                    n.renderDesc()
                                )
                            }),
                            n
                        )
                    }
                    return Object(d.a)(t, e), t
                })(a.Component),
                y =
                    (n(81),
                    (function (e) {
                        function t(e) {
                            var n
                            return (
                                Object(l.a)(this, t),
                                ((n = Object(s.a)(
                                    this,
                                    Object(m.a)(t).call(this, e)
                                )).render = function () {
                                    return i.a.createElement(
                                        "div",
                                        { className: "section about ", id: "about" },
                                        i.a.createElement(
                                            "div",
                                            { className: "container" },
                                            i.a.createElement(
                                                "div",
                                                { className: "row" },
                                                i.a.createElement(
                                                    "div",
                                                    {
                                                        className: "col",
                                                        style: {
                                                            minWidth: 400,
                                                            padding: 20,
                                                        },
                                                    },
                                                    i.a.createElement("img", {
                                                        src: "/kidme.jpeg",
                                                        style: {
                                                            width: "100%",
                                                            maxWidth: 450,
                                                        },
                                                    })
                                                ),
                                                i.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "col about-description",
                                                    },
                                                    i.a.createElement(
                                                        "h2",
                                                        null,
                                                        "About"
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Software Developer at You.i TV! Graduated from Carleton University with a Bachelors in Computer Science. In my free time, you'll usually find me playing games, or watching Netflix."
                                                    ),
                                                    i.a.createElement(
                                                        "a",
                                                        {
                                                            target: "_blank",
                                                            href:
                                                                "https://mayasaringan.me/resume/resume.pdf",
                                                        },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "button" },
                                                            "Resume"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                }),
                                n
                            )
                        }
                        return Object(d.a)(t, e), t
                    })(a.Component)),
                j =
                    (n(82),
                    n(83),
                    (function (e) {
                        function t(e) {
                            var n
                            return (
                                Object(l.a)(this, t),
                                ((n = Object(s.a)(
                                    this,
                                    Object(m.a)(t).call(this, e)
                                )).render = function () {
                                    return i.a.createElement(
                                        "a",
                                        { href: n.props.link },
                                        i.a.createElement("img", {
                                            src: n.props.src,
                                            className: "project-tile",
                                        })
                                    )
                                }),
                                n
                            )
                        }
                        return Object(d.a)(t, e), t
                    })(a.Component)),
                O = (function (e) {
                    function t(e) {
                        var n
                        return (
                            Object(l.a)(this, t),
                            ((n = Object(s.a)(
                                this,
                                Object(m.a)(t).call(this, e)
                            )).render = function () {
                                return i.a.createElement(
                                    "div",
                                    {
                                        className: "section projects ",
                                        id: "projects",
                                    },
                                    i.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "projects-container justify-content-center",
                                        },
                                        i.a.createElement("h2", null, "PROJECTS"),
                                        i.a.createElement(
                                            "div",
                                            { className: "project-tiles" },
                                            i.a.createElement(j, {
                                                src: "/browserbuddies.png",
                                                link:
                                                    "https://devpost.com/software/browser-buddies",
                                            }),
                                            i.a.createElement(j, {
                                                src: "/batterymanager.png",
                                            }),
                                            i.a.createElement(j, {
                                                src: "/passwordgenerator.png",
                                            })
                                        )
                                    )
                                )
                            }),
                            n
                        )
                    }
                    return Object(d.a)(t, e), t
                })(a.Component),
                N =
                    (n(84),
                    a.Component,
                    n(85),
                    (function (e) {
                        function t(e) {
                            var n
                            return (
                                Object(l.a)(this, t),
                                ((n = Object(s.a)(
                                    this,
                                    Object(m.a)(t).call(this, e)
                                )).render = function () {
                                    return i.a.createElement(
                                        "div",
                                        { className: " footer", id: "footer" },
                                        i.a.createElement(
                                            "div",
                                            { className: "row-flex super-center" },
                                            i.a.createElement(w, {
                                                icon: E.b,
                                                link:
                                                    "https://www.linkedin.com/in/msaringan/",
                                            }),
                                            i.a.createElement(w, {
                                                icon: E.a,
                                                link:
                                                    "https://github.com/MayaSaringan",
                                            }),
                                            i.a.createElement(w, {
                                                icon: h.a,
                                                link:
                                                    "mailto:contact@mayasaringan.me",
                                            })
                                        )
                                    )
                                }),
                                n
                            )
                        }
                        return Object(d.a)(t, e), t
                    })(a.Component)),
                k = n(34),
                x = n.n(k),
                S = n(35),
                W =
                    (n(46),
                    (function (e) {
                        function t() {
                            var e
                            return (
                                Object(l.a)(this, t),
                                ((e = Object(s.a)(
                                    this,
                                    Object(m.a)(t).call(this)
                                )).componentDidMount = function () {
                                    e.updateWindowDimensions(),
                                        window.addEventListener(
                                            "resize",
                                            e.updateWindowDimensions
                                        )
                                }),
                                (e.componentWillUnmount = function () {
                                    window.removeEventListener(
                                        "resize",
                                        e.updateWindowDimensions
                                    )
                                }),
                                (e.updateWindowDimensions = function () {
                                    window.innerWidth < 900 && !e.state.mobile
                                        ? e.setState({ mobile: !0 })
                                        : window.innerWidth >= 900 &&
                                          e.state.mobile &&
                                          e.setState({ mobile: !1 })
                                }),
                                (e.render = function () {
                                    return i.a.createElement(
                                        "div",
                                        { className: "App" },
                                        i.a.createElement(x.a, {
                                            className: "particles",
                                            height: "100vh",
                                            width: "100%",
                                            params: Object(c.a)({}, S),
                                        }),
                                        i.a.createElement(f, null),
                                        i.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    width: "100%",
                                                    zIndex: 10,
                                                },
                                            },
                                            i.a.createElement(v, {
                                                mobile: e.state.mobile,
                                            }),
                                            i.a.createElement(y, null),
                                            i.a.createElement(O, null),
                                            i.a.createElement(N, null)
                                        )
                                    )
                                }),
                                (e.state = { mobile: !1, topOffset: 0 }),
                                "undefined" !== typeof window &&
                                    ((window.onscroll = function () {
                                        return e.setState({
                                            topOffset: window.pageYOffset,
                                        })
                                    }),
                                    e.updateWindowDimensions()),
                                e
                            )
                        }
                        return Object(d.a)(t, e), t
                    })(a.Component)),
                C = (function (e) {
                    function t() {
                        var e
                        return (
                            Object(l.a)(this, t),
                            ((e = Object(s.a)(
                                this,
                                Object(m.a)(t).call(this)
                            )).componentDidMount = function () {
                                e.updateWindowDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        e.updateWindowDimensions
                                    )
                            }),
                            (e.componentWillUnmount = function () {
                                window.removeEventListener(
                                    "resize",
                                    e.updateWindowDimensions
                                )
                            }),
                            (e.updateWindowDimensions = function () {
                                window.innerWidth < 900 && !e.state.mobile
                                    ? e.setState({ mobile: !0 })
                                    : window.innerWidth >= 900 &&
                                      e.state.mobile &&
                                      e.setState({ mobile: !1 })
                            }),
                            (e.render = function () {
                                return i.a.createElement(
                                    "div",
                                    { className: "App" },
                                    i.a.createElement("h2", null, "WIP")
                                )
                            }),
                            (e.state = { mobile: !1, topOffset: 0 }),
                            "undefined" !== typeof window &&
                                ((window.onscroll = function () {
                                    return e.setState({
                                        topOffset: window.pageYOffset,
                                    })
                                }),
                                e.updateWindowDimensions()),
                            e
                        )
                    }
                    return Object(d.a)(t, e), t
                })(a.Component),
                D = n(55),
                z = n(16)
            o.a.render(
                i.a.createElement(
                    D.a,
                    null,
                    i.a.createElement(
                        z.c,
                        null,
                        i.a.createElement(z.a, {
                            exact: !0,
                            path: "/",
                            component: W,
                        }),
                        i.a.createElement(z.a, {
                            exact: !0,
                            path: "/blogs",
                            component: C,
                        })
                    )
                ),
                document.getElementById("root")
            )
        },
    },
    [[59, 1, 2]],
])
//# sourceMappingURL=main.56bb53f3.chunk.js.map
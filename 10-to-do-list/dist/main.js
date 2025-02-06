(() => {
	"use strict";
	var e = {
			208: (e, t, n) => {
				n.d(t, { A: () => d });
				var r = n(601),
					o = n.n(r),
					a = n(314),
					c = n.n(a)()(o());
				c.push([
					e.id,
					"table,\ntd{\n    border:1px solid black;\n    border-collapse: collapse;\n}\n\ntd{\n    padding:5px 10px;\n}\n\ntable{\n    margin-bottom: 40px;\n}\n\n.currentDate{\n    font-size: 50px;\n}\n\ncaption{\n    font-size: 30px;\n    margin-bottom: 10px;\n}\n\nbutton{\n    font-size: 20px;\n    margin-bottom: 20px;\n}\n\n.notUrgent {\n    background-color: lightgreen;\n}\n\n.quiteUrgent{\n    background-color: orange;\n}\n\n.veryUrgent{\n    background-color: lightcoral;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n",
					"",
				]);
				const d = c;
			},
			314: (e) => {
				e.exports = function (e) {
					var t = [];
					return (
						(t.toString = function () {
							return this.map(function (t) {
								var n = "",
									r = void 0 !== t[5];
								return (
									t[4] && (n += "@supports (".concat(t[4], ") {")),
									t[2] && (n += "@media ".concat(t[2], " {")),
									r &&
										(n += "@layer".concat(
											t[5].length > 0 ? " ".concat(t[5]) : "",
											" {"
										)),
									(n += e(t)),
									r && (n += "}"),
									t[2] && (n += "}"),
									t[4] && (n += "}"),
									n
								);
							}).join("");
						}),
						(t.i = function (e, n, r, o, a) {
							"string" == typeof e && (e = [[null, e, void 0]]);
							var c = {};
							if (r)
								for (var d = 0; d < this.length; d++) {
									var i = this[d][0];
									null != i && (c[i] = !0);
								}
							for (var l = 0; l < e.length; l++) {
								var u = [].concat(e[l]);
								(r && c[u[0]]) ||
									(void 0 !== a &&
										(void 0 === u[5] ||
											(u[1] = "@layer"
												.concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
												.concat(u[1], "}")),
										(u[5] = a)),
									n &&
										(u[2]
											? ((u[1] = "@media "
													.concat(u[2], " {")
													.concat(u[1], "}")),
											  (u[2] = n))
											: (u[2] = n)),
									o &&
										(u[4]
											? ((u[1] = "@supports ("
													.concat(u[4], ") {")
													.concat(u[1], "}")),
											  (u[4] = o))
											: (u[4] = "".concat(o))),
									t.push(u));
							}
						}),
						t
					);
				};
			},
			601: (e) => {
				e.exports = function (e) {
					return e[1];
				};
			},
			72: (e) => {
				var t = [];
				function n(e) {
					for (var n = -1, r = 0; r < t.length; r++)
						if (t[r].identifier === e) {
							n = r;
							break;
						}
					return n;
				}
				function r(e, r) {
					for (var a = {}, c = [], d = 0; d < e.length; d++) {
						var i = e[d],
							l = r.base ? i[0] + r.base : i[0],
							u = a[l] || 0,
							s = "".concat(l, " ").concat(u);
						a[l] = u + 1;
						var p = n(s),
							m = {
								css: i[1],
								media: i[2],
								sourceMap: i[3],
								supports: i[4],
								layer: i[5],
							};
						if (-1 !== p) t[p].references++, t[p].updater(m);
						else {
							var h = o(m, r);
							(r.byIndex = d),
								t.splice(d, 0, { identifier: s, updater: h, references: 1 });
						}
						c.push(s);
					}
					return c;
				}
				function o(e, t) {
					var n = t.domAPI(t);
					return (
						n.update(e),
						function (t) {
							if (t) {
								if (
									t.css === e.css &&
									t.media === e.media &&
									t.sourceMap === e.sourceMap &&
									t.supports === e.supports &&
									t.layer === e.layer
								)
									return;
								n.update((e = t));
							} else n.remove();
						}
					);
				}
				e.exports = function (e, o) {
					var a = r((e = e || []), (o = o || {}));
					return function (e) {
						e = e || [];
						for (var c = 0; c < a.length; c++) {
							var d = n(a[c]);
							t[d].references--;
						}
						for (var i = r(e, o), l = 0; l < a.length; l++) {
							var u = n(a[l]);
							0 === t[u].references && (t[u].updater(), t.splice(u, 1));
						}
						a = i;
					};
				};
			},
			659: (e) => {
				var t = {};
				e.exports = function (e, n) {
					var r = (function (e) {
						if (void 0 === t[e]) {
							var n = document.querySelector(e);
							if (
								window.HTMLIFrameElement &&
								n instanceof window.HTMLIFrameElement
							)
								try {
									n = n.contentDocument.head;
								} catch (e) {
									n = null;
								}
							t[e] = n;
						}
						return t[e];
					})(e);
					if (!r)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					r.appendChild(n);
				};
			},
			540: (e) => {
				e.exports = function (e) {
					var t = document.createElement("style");
					return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
				};
			},
			56: (e, t, n) => {
				e.exports = function (e) {
					var t = n.nc;
					t && e.setAttribute("nonce", t);
				};
			},
			825: (e) => {
				e.exports = function (e) {
					if ("undefined" == typeof document)
						return { update: function () {}, remove: function () {} };
					var t = e.insertStyleElement(e);
					return {
						update: function (n) {
							!(function (e, t, n) {
								var r = "";
								n.supports && (r += "@supports (".concat(n.supports, ") {")),
									n.media && (r += "@media ".concat(n.media, " {"));
								var o = void 0 !== n.layer;
								o &&
									(r += "@layer".concat(
										n.layer.length > 0 ? " ".concat(n.layer) : "",
										" {"
									)),
									(r += n.css),
									o && (r += "}"),
									n.media && (r += "}"),
									n.supports && (r += "}");
								var a = n.sourceMap;
								a &&
									"undefined" != typeof btoa &&
									(r +=
										"\n/*# sourceMappingURL=data:application/json;base64,".concat(
											btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
											" */"
										)),
									t.styleTagTransform(r, e, t.options);
							})(t, e, n);
						},
						remove: function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(t);
						},
					};
				};
			},
			113: (e) => {
				e.exports = function (e, t) {
					if (t.styleSheet) t.styleSheet.cssText = e;
					else {
						for (; t.firstChild; ) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(e));
					}
				};
			},
		},
		t = {};
	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var a = (t[r] = { id: r, exports: {} });
		return e[r](a, a.exports, n), a.exports;
	}
	(n.n = (e) => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, { a: t }), t;
	}),
		(n.d = (e, t) => {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(n.nc = void 0);
	var r = n(72),
		o = n.n(r),
		a = n(825),
		c = n.n(a),
		d = n(659),
		i = n.n(d),
		l = n(56),
		u = n.n(l),
		s = n(540),
		p = n.n(s),
		m = n(113),
		h = n.n(m),
		y = n(208),
		f = {};
	(f.styleTagTransform = h()),
		(f.setAttributes = u()),
		(f.insert = i().bind(null, "head")),
		(f.domAPI = c()),
		(f.insertStyleElement = p()),
		o()(y.A, f),
		y.A && y.A.locals && y.A.locals;
	const v = function (e, t, n) {
			(this.task = e), (this.date = t), (this.priority = n);
		},
		g = (e) => {
			b.splice(e, 1), E();
		},
		C = () => {
			document.querySelector(".completed").innerHTML = "";
			for (let e = 0; e < x.length; e++) {
				const t = document.createElement("tr");
				"Not urgent" == x[e][0].priority
					? t.classList.add("notUrgent")
					: "Quite urgent" == x[e][0].priority
					? t.classList.add("quiteUrgent")
					: "Very urgent" == x[e][0].priority && t.classList.add("veryUrgent");
				const n = document.createElement("td");
				(n.textContent = `${e + 1}`), t.appendChild(n);
				const r = document.createElement("td");
				(r.textContent = `${x[e][0].task}`), t.appendChild(r);
				const o = document.createElement("td");
				(o.textContent = `${x[e][0].date}`), t.appendChild(o);
				const a = document.createElement("td");
				(a.textContent = `${x[e][0].priority}`), t.appendChild(a);
				const c = document.createElement("td");
				(c.textContent = "X"),
					c.addEventListener("click", () => {
						var t;
						(t = e), x.splice(t, 1), C();
					}),
					t.appendChild(c),
					document.querySelector(".completed").appendChild(t);
			}
		},
		x = [],
		E = () => {
			document.querySelector("tbody").innerHTML = "";
			for (let e = 0; e < b.length; e++) {
				const t = document.createElement("tr");
				"Not urgent" == b[e].priority
					? t.classList.add("notUrgent")
					: "Quite urgent" == b[e].priority
					? t.classList.add("quiteUrgent")
					: t.classList.add("veryUrgent");
				const n = document.createElement("td");
				(n.textContent = `${e + 1}`), t.appendChild(n);
				const r = document.createElement("td");
				(r.textContent = `${b[e].task}`), t.appendChild(r);
				const o = document.createElement("td");
				(o.textContent = `${b[e].date}`), t.appendChild(o);
				const a = document.createElement("td");
				(a.textContent = `${b[e].priority}`), t.appendChild(a);
				const c = document.createElement("td"),
					d = new Date(),
					i = new Date(`${b[e].date}`),
					l = Math.ceil((i - d) / 864e5);
				(c.textContent =
					0 == l ? "Due today" : l < 0 ? "Task overdue!!!" : `${l}`),
					t.appendChild(c);
				const u = document.createElement("td"),
					s = document.createElement("input");
				(s.type = "checkbox"),
					s.addEventListener("change", () => {
						let t = b.slice();
						t.splice(0, e), t.splice(1), x.push(t), g(e), C();
					}),
					u.appendChild(s),
					t.appendChild(u);
				const p = document.createElement("td");
				(p.textContent = "X"),
					p.addEventListener("click", () => {
						g(e);
					}),
					t.appendChild(p),
					document.querySelector(".toDo").appendChild(t);
			}
		},
		b = [];
	(() => {
		const e = new Date();
		let t;
		"1" == e.getDay()
			? (t = "Monday")
			: "2" == e.getDay()
			? (t = "Tuesday")
			: "3" == e.getDay()
			? (t = "Wednesday")
			: "4" == e.getDay()
			? (t = "Thursday")
			: "5" == e.getDay()
			? (t = "Friday")
			: "6" == e.getDay()
			? (t = "Saturday")
			: "7" == e.getDay() && (t = "Sunday");
		const n = e.getDate(),
			r = e.getMonth() + 1,
			o = e.getFullYear();
		document.querySelector(
			".currentDate"
		).textContent = `Today's day and date: ${t}, ${n}-${r}-${o}`;
	})(),
		(() => {
			const e = document.createElement("button");
			document.querySelector(".buttonDiv").appendChild(e),
				(e.textContent = "Add task"),
				e.addEventListener("click", () => {
					(() => {
						const e = document.querySelector("dialog");
						e.innerHTML = "";
						const t = document.createElement("form"),
							n = document.createElement("div"),
							r = document.createElement("label");
						r.textContent = "Task: ";
						const o = document.createElement("input");
						(o.id = "taskInput"),
							(r.htmlFor = "taskInput"),
							o.setAttribute("required", ""),
							n.appendChild(r),
							n.appendChild(o);
						const a = document.createElement("div"),
							c = document.createElement("label");
						c.textContent = "Due date: ";
						const d = document.createElement("input");
						(d.id = "dueDateInput"),
							(c.htmlFor = "dueDateInput"),
							(d.type = "date"),
							d.setAttribute("required", ""),
							a.appendChild(c),
							a.appendChild(d);
						const i = document.createElement("div"),
							l = document.createElement("label");
						l.textContent = "Priority: ";
						const u = document.createElement("select");
						(u.id = "prioritySelect"), (l.htmlFor = "prioritySelect");
						const s = document.createElement("option");
						(s.textContent = "Not urgent"), u.appendChild(s);
						const p = document.createElement("option");
						(p.textContent = "Quite urgent"), u.appendChild(p);
						const m = document.createElement("option");
						(m.textContent = "Very urgent"),
							u.appendChild(m),
							i.appendChild(l),
							i.appendChild(u);
						const h = document.createElement("div"),
							y = document.createElement("input");
						(y.type = "submit"),
							(y.value = "Confirm"),
							y.addEventListener("click", () => {
								event.preventDefault(),
									(() => {
										if (
											"" == document.querySelector("#taskInput").value ||
											"" == document.querySelector("#dueDateInput").value
										)
											return;
										const e = new v(
											document.querySelector("#taskInput").value,
											document.querySelector("#dueDateInput").value,
											document.querySelector("#prioritySelect").value
										);
										b.push(e),
											E(),
											document.querySelector("form").reset(),
											document.querySelector("dialog").close();
									})();
							}),
							h.appendChild(y),
							t.appendChild(n),
							t.appendChild(a),
							t.appendChild(i),
							t.appendChild(y),
							e.appendChild(t),
							e.showModal();
					})();
				});
		})();
})();

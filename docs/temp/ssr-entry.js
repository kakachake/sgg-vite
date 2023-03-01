"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const React = require("react");
const jsxRuntime = require("react/jsx-runtime");
const server = require("react-dom/server");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
const jsxRuntime__namespace = /* @__PURE__ */ _interopNamespace(jsxRuntime);
const routes = [];
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }
}
function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}
const validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
/* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
const Fragment = jsxRuntime__namespace.Fragment;
const jsx = jsxRuntime__namespace.jsx;
const jsxs = jsxRuntime__namespace.jsxs;
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React__namespace;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React__namespace) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
      }
    }
  }
  const value = getSnapshot();
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React__namespace ? ((module2) => module2.useSyncExternalStore)(React__namespace) : shim;
const DataStaticRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataStaticRouterContext.displayName = "DataStaticRouterContext";
}
const DataRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /* @__PURE__ */ React__namespace.createContext({
  outlet: null,
  matches: []
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}
function useRoutes(routes2, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    "useRoutes() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let dataRouterStateContext = React__namespace.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = React__namespace.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (process.env.NODE_ENV !== "production") {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ jsx(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      },
      children: renderedMatches
    });
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h2", {
      children: "Unhandled Thrown Error!"
    }), /* @__PURE__ */ jsx("h3", {
      style: {
        fontStyle: "italic"
      },
      children: message
    }), stack ? /* @__PURE__ */ jsx("pre", {
      style: preStyles,
      children: stack
    }) : null, /* @__PURE__ */ jsx("p", {
      children: "\u{1F4BF} Hey developer \u{1F44B}"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["You can provide a way better UX than this when your app throws errors by providing your own\xA0", /* @__PURE__ */ jsx("code", {
        style: codeStyles,
        children: "errorElement"
      }), " props on\xA0", /* @__PURE__ */ jsx("code", {
        style: codeStyles,
        children: "<Route>"
      })]
    })]
  });
}
class RenderErrorBoundary extends React__namespace.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ jsx(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataStaticRouterContext = React__namespace.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ jsx(RouteContext.Provider, {
    value: routeContext,
    children
  });
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find a matching route for the current errors: " + errors) : invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ jsx(DefaultErrorElement, {}) : null;
    let getChildren = () => /* @__PURE__ */ jsx(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index + 1))
      },
      children: error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet
    });
    return dataRouterState && (match.route.errorElement || index === 0) ? /* @__PURE__ */ jsx(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.";
}
function useDataRouterState(hookName) {
  let state = React__namespace.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return state;
}
function useRouteError() {
  var _state$errors;
  let error = React__namespace.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let route = React__namespace.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, "useRouteError must be used inside a RouteContext") : invariant(false) : void 0;
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, 'useRouteError can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  process.env.NODE_ENV !== "production" ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ jsx(NavigationContext.Provider, {
    value: navigationContext,
    children: /* @__PURE__ */ jsx(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    })
  });
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
const Content = () => {
  const routesElement = useRoutes(routes);
  return routesElement;
};
const DataContext = React.createContext({});
const usePageData = () => React.useContext(DataContext);
const check = "_check_13y5y_17";
const icon = "_icon_13y5y_29";
const dark = "_dark_13y5y_38";
const sun = "_sun_13y5y_43";
const moon = "_moon_13y5y_47";
const styles$6 = {
  "switch": "_switch_13y5y_1",
  check,
  icon,
  dark,
  sun,
  moon
};
const APPEARANCE_KEY = "appearance";
const setClassList = (isDark) => {
  const classList = document.documentElement.classList;
  if (isDark) {
    classList.add("dark");
    localStorage.setItem(APPEARANCE_KEY, "dark");
  } else {
    classList.remove("dark");
    localStorage.setItem(APPEARANCE_KEY, "light");
  }
};
const updateAppearance = () => {
  const isDark = localStorage.getItem(APPEARANCE_KEY);
  setClassList(isDark === "dark");
  window.addEventListener("storage", updateAppearance);
};
if (typeof window !== void 0 && typeof localStorage !== "undefined") {
  updateAppearance();
}
const toggle = () => {
  const classList = document.documentElement.classList;
  const isDark = classList.contains("dark") ? "dark" : "light";
  setClassList(isDark !== "dark");
};
function Switch(props) {
  return /* @__PURE__ */ jsx("button", {
    className: `${styles$6.switch} ${props.className}`,
    type: "button",
    role: "switch",
    ...props.onClick ? {
      onClick: props.onClick
    } : {},
    children: /* @__PURE__ */ jsx("span", {
      className: styles$6.check,
      children: /* @__PURE__ */ jsx("span", {
        className: styles$6.icon,
        children: props.children
      })
    })
  });
}
function SwitchAppearance() {
  return /* @__PURE__ */ jsx(Switch, {
    onClick: toggle,
    children: /* @__PURE__ */ jsx("div", {
      className: styles$6.sun
    })
  });
}
const link$1 = "_link_158tj_1";
const nav = "_nav_158tj_22";
const styles$5 = {
  link: link$1,
  "social-link-icon": "_social-link-icon_158tj_12",
  nav
};
function MenuItem(props) {
  return /* @__PURE__ */ jsx("div", {
    className: "text-sm font-medium mx-3",
    children: /* @__PURE__ */ jsx("a", {
      href: props.link,
      className: styles$5.link,
      children: props.text
    })
  });
}
function Nav() {
  var _a;
  const {
    siteData: siteData2
  } = usePageData();
  const nav2 = ((_a = siteData2 == null ? void 0 : siteData2.themeConfig) == null ? void 0 : _a.nav) || [];
  return /* @__PURE__ */ jsx("header", {
    fixed: "~",
    pos: "t-0 l-0",
    w: "full",
    z: "10",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      items: "center",
      justify: "between",
      className: `h-14 divider-bottom ${styles$5.nav}`,
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("a", {
          href: "/",
          className: "w-full h-full text-1rem font-semibold flex items-center",
          hover: "opacity-60",
          children: "Island.js"
        })
      }), /* @__PURE__ */ jsxs("div", {
        flex: "~",
        children: [/* @__PURE__ */ jsx("div", {
          flex: "~",
          children: nav2.map((item) => {
            return /* @__PURE__ */ jsx(MenuItem, {
              ...item
            }, item.text);
          })
        }), /* @__PURE__ */ jsx("div", {
          before: "menu-item-before",
          flex: "~",
          children: /* @__PURE__ */ jsx(SwitchAppearance, {})
        }), /* @__PURE__ */ jsx("div", {
          flex: "~",
          before: "menu-item-before",
          children: /* @__PURE__ */ jsx("a", {
            href: "/",
            className: styles$5["social-link-icon"],
            children: /* @__PURE__ */ jsx("div", {
              className: "i-carbon-logo-github w-5 h-5 fill-current"
            })
          })
        })]
      })]
    })
  });
}
const base = "";
const vars = "";
const __uno = "";
const doc = "";
function HomeFeature(props) {
  const {
    features
  } = props;
  return /* @__PURE__ */ jsx("div", {
    className: "max-w-1152px",
    m: "auto",
    flex: "~ wrap",
    justify: "between",
    children: features.map((feature) => {
      const {
        icon: icon2,
        title: title2,
        details
      } = feature;
      return /* @__PURE__ */ jsx("div", {
        border: "rounded-md",
        p: "r-4 b-4",
        w: "1/3",
        children: /* @__PURE__ */ jsxs("article", {
          bg: "bg-soft",
          border: "~ bg-soft solid rounded-xl",
          p: "6",
          h: "full",
          children: [/* @__PURE__ */ jsx("div", {
            bg: "gray-light-4 dark:bg-white",
            border: "rounded-md",
            className: "mb-5 w-12 h-12 text-3xl flex-center",
            children: icon2
          }), /* @__PURE__ */ jsx("h2", {
            font: "bold",
            children: title2
          }), /* @__PURE__ */ jsx("p", {
            text: "sm text-2",
            font: "medium",
            className: "pt-2 leading-6",
            children: details
          })]
        })
      }, title2);
    })
  });
}
const clip = "_clip_zensi_1";
const styles$4 = {
  clip
};
const link = "_link_r3fql_1";
const styles$3 = {
  link
};
const EXTERNAL_URL_RE = /^(https?)/;
function Link(props) {
  const {
    href,
    children,
    className
  } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const target = isExternal ? "_blank" : "";
  const rel = isExternal ? "noopener noreferrer" : "";
  return /* @__PURE__ */ jsx("a", {
    href,
    target,
    rel,
    className: `${styles$3.link} ${className}`,
    children
  });
}
const button = "_button_ldbgj_1";
const medium = "_medium_ldbgj_13";
const big = "_big_ldbgj_20";
const brand = "_brand_ldbgj_41";
const alt = "_alt_ldbgj_60";
const styles$2 = {
  button,
  medium,
  big,
  brand,
  alt
};
function Button(props) {
  const {
    size = "big",
    theme = "brand",
    text,
    href = "/",
    external = false,
    className
  } = props;
  let type = null;
  if (props.type === "button") {
    type = "button";
  } else if (props.type === "a") {
    type = external ? "a" : Link;
  }
  return React__default.default.createElement(type != null ? type : "a", {
    href,
    className: `${styles$2.button} ${styles$2[theme]} ${styles$2[size]} ${className}`
  }, text);
}
function HomeHero(props) {
  const {
    hero
  } = props;
  return /* @__PURE__ */ jsx("div", {
    m: "auto",
    p: "t-20 x-16 b-16",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      className: "max-w-1152px",
      m: "auto",
      children: [/* @__PURE__ */ jsxs("div", {
        text: "left",
        flex: "~ col",
        className: "max-w-592px",
        children: [/* @__PURE__ */ jsx("h1", {
          font: "bold",
          text: "6xl",
          className: "max-w-576px",
          children: /* @__PURE__ */ jsx("span", {
            className: styles$4.clip,
            children: hero.name
          })
        }), /* @__PURE__ */ jsx("p", {
          text: "6xl",
          font: "bold",
          className: "max-w-576px",
          children: hero.text
        }), /* @__PURE__ */ jsx("p", {
          p: "t-3",
          text: "2xl text-2",
          font: "medium",
          className: "whitespace-pre-wrap max-w-576px",
          children: hero.tagline
        }), /* @__PURE__ */ jsx("div", {
          flex: "~ wrap",
          justify: "start",
          p: "t-8",
          children: hero.actions.map((action) => {
            return /* @__PURE__ */ jsx("div", {
              p: "1",
              children: /* @__PURE__ */ jsx(Button, {
                type: "a",
                text: action.text,
                href: action.link,
                theme: action.theme
              })
            }, action.link);
          })
        })]
      }), hero.image && /* @__PURE__ */ jsx("div", {
        w: "max-96",
        h: "max-96",
        flex: "center",
        m: "auto",
        children: /* @__PURE__ */ jsx("img", {
          src: hero.image.src,
          alt: hero.image.alt ? hero.image.alt : hero.name
        })
      })]
    })
  });
}
function HomeLayout() {
  const {
    frontmatter
  } = usePageData();
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HomeHero, {
      hero: frontmatter.hero
    }), /* @__PURE__ */ jsx(HomeFeature, {
      features: frontmatter.features
    })]
  });
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
const now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const NAV_HEIGHT = 56;
function scrollToTarget(target, isSmooth) {
  if (!target)
    return;
  console.log("scrollToTarget", target, isSmooth);
  const targetPadding = parseInt(window.getComputedStyle(target).paddingTop);
  const targetTop = window.scrollY + target.getBoundingClientRect().top + targetPadding - NAV_HEIGHT;
  console.log("scrollToTarget", target, isSmooth);
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? "smooth" : "auto"
  });
}
function bindingAsideScroll() {
  console.log("bind");
  const marker = document.getElementById("aside-marker");
  const aside = document.getElementById("aside-container");
  const headers = Array.from((aside == null ? void 0 : aside.getElementsByTagName("a")) || []).map(
    (item) => decodeURIComponent(item.hash)
  );
  if (!aside) {
    return;
  }
  const activate = (links, index) => {
    if (links[index]) {
      const id = links[index].getAttribute("href");
      const tocIndex = headers.findIndex((item) => item === id);
      const currentLink = aside == null ? void 0 : aside.querySelector(
        `a[href="${id}"]`
      );
      if (currentLink) {
        marker.style.top = `${33 + tocIndex * 28}px`;
        marker.style.opacity = "1";
      }
    }
  };
  const setActiveLink = () => {
    const links = Array.from(
      document.querySelectorAll(".island-doc .header-anchor")
    ).filter((element) => {
      var _a;
      return ((_a = element.parentElement) == null ? void 0 : _a.tagName) !== "H1";
    });
    const isBottom = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
    if (isBottom) {
      activate(links, links.length - 1);
      return;
    }
    for (let i = 0; i < links.length; i++) {
      const currentAnchor = links[i];
      const nextAnchor = links[i + 1];
      const scrollTop = Math.ceil(window.scrollY) + NAV_HEIGHT;
      const currentAnchorTop = currentAnchor.parentElement.offsetTop;
      if (!nextAnchor) {
        activate(links, i);
        break;
      }
      if (i === 0 && scrollTop < currentAnchorTop || scrollTop === 0) {
        activate(links, 0);
        break;
      }
      const nextAnchorTop = nextAnchor.parentElement.offsetTop;
      if (scrollTop >= currentAnchorTop && scrollTop < nextAnchorTop) {
        activate(links, i);
        break;
      }
    }
  };
  const throttleSetActiveLink = throttle(setActiveLink, 100);
  window.addEventListener("scroll", throttleSetActiveLink);
  return () => {
    window.removeEventListener("scroll", throttleSetActiveLink);
  };
}
function useHeaders(initHeaders) {
  const [headers, setHeaders] = React.useState(initHeaders);
  React.useEffect(() => {
  });
  return headers;
}
function Aside(props) {
  const {
    toc = []
  } = props;
  const headers = useHeaders(toc);
  const hasOutline = toc.length > 0;
  React.useEffect(() => {
    const unbind = bindingAsideScroll();
    return () => {
      unbind();
    };
  }, []);
  const markerRef = React.useRef(null);
  function renderHeader(header) {
    const {
      id,
      text,
      depth
    } = header;
    return /* @__PURE__ */ jsx("li", {
      className: "block leading-7 text-text-2 hover:text-text-1",
      transition: "color duration-300",
      style: {
        paddingLeft: (depth - 2) * 12
      },
      children: /* @__PURE__ */ jsx("a", {
        href: `#${id}`,
        onClick: (e) => {
          e.preventDefault();
          const target = document.getElementById(header.id);
          scrollToTarget(target, true);
        },
        children: text
      })
    }, id);
  }
  return /* @__PURE__ */ jsx("div", {
    flex: "~ col 1",
    style: {
      width: "var(--island-aside-width)"
    },
    children: /* @__PURE__ */ jsx("div", {
      children: hasOutline && /* @__PURE__ */ jsxs("div", {
        id: "aside-container",
        className: "relative divider-left pl-4 text-13px font-medium",
        children: [/* @__PURE__ */ jsx("div", {
          ref: markerRef,
          id: "aside-marker",
          className: "absolute top-33px opacity-0 w-1px h-18px bg-brand",
          style: {
            left: "-1px",
            transition: "top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s"
          }
        }), /* @__PURE__ */ jsx("div", {
          "leading-7": "~",
          text: "13px",
          font: "semibold",
          children: "ON THIS PAGE"
        }), /* @__PURE__ */ jsx("nav", {
          children: /* @__PURE__ */ jsx("ul", {
            relative: "~",
            children: headers.map(renderHeader)
          })
        })]
      })
    })
  });
}
function usePrevNextPage() {
  var _a;
  const { pathname } = useLocation();
  const { siteData: siteData2 } = usePageData();
  const siderbar = ((_a = siteData2.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const flattenSidebar = [];
  Object.keys(siderbar).forEach((item) => {
    const siderbarItem = siderbar[item] || [];
    siderbarItem.forEach((group) => {
      flattenSidebar.push(...group.items);
    });
  });
  const idx = flattenSidebar.findIndex((item) => {
    return pathname === item.link;
  });
  console.log(flattenSidebar);
  return {
    prevPage: flattenSidebar[idx - 1] || null,
    nextPage: flattenSidebar[idx + 1] || null
  };
}
const prev = "_prev_6xv5j_1";
const next = "_next_6xv5j_2";
const title = "_title_6xv5j_20";
const desc = "_desc_6xv5j_29";
const styles$1 = {
  prev,
  next,
  "pager-link": "_pager-link_6xv5j_6",
  title,
  desc
};
function DocFooter() {
  const {
    prevPage,
    nextPage
  } = usePrevNextPage();
  return /* @__PURE__ */ jsx("footer", {
    mt: "8",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      gap: "2",
      "divider-top": "~",
      pt: "6",
      children: [/* @__PURE__ */ jsx("div", {
        flex: "~ col",
        className: styles$1.prev,
        children: prevPage && /* @__PURE__ */ jsxs("a", {
          href: prevPage.link,
          className: styles$1["pager-link"],
          children: [/* @__PURE__ */ jsx("span", {
            className: styles$1.desc,
            children: "\u4E0A\u4E00\u9875"
          }), /* @__PURE__ */ jsx("span", {
            className: styles$1.title,
            children: prevPage.text
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        flex: "~ col",
        className: styles$1.next,
        children: nextPage && /* @__PURE__ */ jsxs("a", {
          href: nextPage.link,
          className: `${styles$1["pager-link"]} ${styles$1.next}`,
          children: [/* @__PURE__ */ jsx("span", {
            className: styles$1.desc,
            children: "\u4E0B\u4E00\u9875"
          }), /* @__PURE__ */ jsx("span", {
            className: styles$1.title,
            children: nextPage.text
          })]
        })
      })]
    })
  });
}
const sidebar = "_sidebar_16h0y_1";
const styles = {
  sidebar
};
function Sidebar(props) {
  const {
    sidebarData,
    pathname
  } = props;
  const renderGroupItem = (item) => {
    const {
      text,
      link: link2
    } = item;
    const active = pathname === link2;
    return /* @__PURE__ */ jsx("div", {
      ml: "5",
      children: /* @__PURE__ */ jsx("div", {
        p: "1",
        text: "sm",
        "font-medium": "~",
        className: `${active ? "text-brand" : "text-text-2"}
        `,
        children: /* @__PURE__ */ jsx(Link, {
          href: item.link,
          children: text
        })
      })
    });
  };
  const renderGroup = (group) => {
    const {
      text,
      items
    } = group;
    return /* @__PURE__ */ jsxs("section", {
      block: "~",
      "not-first": "divider-top mt-4",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("h2", {
          m: "t-3 b-2",
          text: "1rem text-1",
          font: "bold",
          children: text
        })
      }), /* @__PURE__ */ jsx("div", {
        mb: "1",
        children: items.map((item) => {
          return /* @__PURE__ */ jsx("div", {
            children: renderGroupItem(item)
          }, item.link);
        })
      })]
    }, text);
  };
  return /* @__PURE__ */ jsx("aside", {
    className: styles.sidebar,
    children: /* @__PURE__ */ jsx("nav", {
      children: sidebarData.map((group) => {
        return renderGroup(group);
      })
    })
  });
}
const content = "_content_1d34c_1";
const style = {
  content,
  "doc-content": "_doc-content_1d34c_8",
  "aside-container": "_aside-container_1d34c_14"
};
function DocLayout() {
  var _a;
  const {
    siteData: siteData2,
    toc
  } = usePageData();
  const {
    pathname
  } = useLocation();
  const siderbar = ((_a = siteData2.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const matchedSidebarKey = Object.keys(siderbar).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });
  const mathedSidebar = siderbar[matchedSidebarKey] || [];
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Sidebar, {
      sidebarData: mathedSidebar,
      pathname
    }), /* @__PURE__ */ jsxs("div", {
      className: style.content,
      flex: "~",
      children: [/* @__PURE__ */ jsxs("div", {
        className: style["doc-content"],
        children: [/* @__PURE__ */ jsx("div", {
          className: "island-doc",
          children: /* @__PURE__ */ jsx(Content, {})
        }), /* @__PURE__ */ jsx(DocFooter, {})]
      }), /* @__PURE__ */ jsx("div", {
        className: style["aside-container"],
        children: /* @__PURE__ */ jsx(Aside, {
          toc
        })
      })]
    })]
  });
}
function Layout() {
  const pageData = usePageData();
  const {
    pageType
  } = pageData;
  console.log(pageData);
  const getContent = () => {
    if (pageType === "home") {
      return /* @__PURE__ */ jsx(HomeLayout, {});
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsx(DocLayout, {});
    } else {
      return /* @__PURE__ */ jsx("div", {
        children: "404"
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx("section", {
      style: {
        paddingTop: "var(--island-nav-height)"
      },
      children: getContent()
    })]
  });
}
const siteData = { "title": "123", "description": "121152", "themeConfig": { "nav": [{ "text": "\u4E3B\u9875", "link": "/" }, { "text": "\u6307\u5357", "link": "/guide" }], "sidebar": { "/guide": [{ "text": "\u6559\u7A0B", "items": [{ "text": "\u5FEB\u901F\u4E0A\u624B", "link": "/guide/a" }, { "text": "\u5982\u4F55\u5B89\u88C5", "link": "/guide/b" }, { "text": "\u6CE8\u610F\u4E8B\u9879", "link": "/guide/c" }] }, { "text": "\u6559\u7A0B2", "items": [{ "text": "\u5FEB\u901F\u4E0A\u624B", "link": "/guide/a" }, { "text": "\u5982\u4F55\u5B89\u88C5", "link": "/guide/b" }] }] } }, "vite": {} };
async function initPageData(routePath) {
  var _a, _b;
  const matched = matchRoutes(routes, routePath);
  if (matched) {
    const route = matched[0].route;
    const moduleInfo = await route.preload();
    return {
      pageType: (_b = (_a = moduleInfo.frontmatter) == null ? void 0 : _a.pageType) != null ? _b : "doc",
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc
    };
  }
  return {
    pageType: "404",
    siteData,
    pagePath: routePath
  };
}
function App() {
  return /* @__PURE__ */ jsx(Layout, {});
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state || null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ jsx(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
async function render(pagePath) {
  const pageData = await initPageData(pagePath);
  return server.renderToString(/* @__PURE__ */ jsx(DataContext.Provider, {
    value: pageData,
    children: /* @__PURE__ */ jsx(StaticRouter, {
      location: pagePath,
      children: /* @__PURE__ */ jsx(App, {})
    })
  }));
}
exports.render = render;
exports.routes = routes;

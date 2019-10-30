/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "./" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@shopify/dates/dist/apply-time-zone-offset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_time_zone_offset_1 = __webpack_require__("./node_modules/@shopify/dates/dist/get-time-zone-offset.js");
function applyTimeZoneOffset(date, timeZone1, timeZone2) {
    var initialOffset = get_time_zone_offset_1.getTimeZoneOffset(date, timeZone1, timeZone2);
    var adjustedDate = new Date(date.valueOf() - initialOffset * 60 * 1000);
    var targetOffset = get_time_zone_offset_1.getTimeZoneOffset(adjustedDate, timeZone1, timeZone2);
    var offsetDiff = targetOffset - initialOffset;
    return new Date(adjustedDate.valueOf() - offsetDiff * 60 * 1000);
}
exports.applyTimeZoneOffset = applyTimeZoneOffset;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/constants/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["Second"] = 1000] = "Second";
    TimeUnit[TimeUnit["Minute"] = 60000] = "Minute";
    TimeUnit[TimeUnit["Hour"] = 3600000] = "Hour";
    TimeUnit[TimeUnit["Day"] = 86400000] = "Day";
    TimeUnit[TimeUnit["Week"] = 604800000] = "Week";
    TimeUnit[TimeUnit["Year"] = 31536000000] = "Year";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/deprecated-timezones.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecatedTimezones = {
    'America/Indiana': 'America/Indiana/Indianapolis',
    'America/Argentina': 'America/Argentina/Buenos_Aires',
    'Asia/Chongqing': 'Asia/Shanghai',
    'Asia/Istanbul': 'Europe/Istanbul',
    'Australia/ACT': 'Australia/Sydney',
    'Australia/LHI': 'Australia/Lord_Howe',
    'Australia/North': 'Australia/Darwin',
    'Australia/NSW': 'Australia/Sydney',
    'Australia/Queensland': 'Australia/Brisbane',
    'Australia/South': 'Australia/Adelaide',
    'Australia/Tasmania': 'Australia/Hobart',
    'Australia/Victoria': 'Australia/Melbourne',
    'Australia/West': 'Australia/Perth',
    'Brazil/Acre': 'America/Rio_Branco',
    'Brazil/DeNoronha': 'America/Noronha',
    'Brazil/East': 'America/Sao_Paulo',
    'Brazil/West': 'America/Manaus',
    'Canada/Atlantic': 'America/Halifax',
    'Canada/Central': 'America/Winnipeg',
    'Canada/Eastern': 'America/Toronto',
    'Canada/Mountain': 'America/Edmonton',
    'Canada/Newfoundland': 'America/St_Johns',
    'Canada/Pacific': 'America/Vancouver',
    'Canada/Saskatchewan': 'America/Regina',
    'Canada/Yukon': 'America/Whitehorse',
    'Chile/Continental': 'America/Santiago',
    'Chile/EasterIsland': 'Pacific/Easter',
    Cuba: 'America/Havana',
    Egypt: 'Africa/Cairo',
    Eire: 'Europe/Dublin',
    'Etc/Greenwich': 'Etc/GMT',
    'Etc/UCT': 'UTC',
    'Etc/Universal': 'UTC',
    'Etc/Zulu': 'UTC',
    GB: 'Europe/London',
    'GB-Eire': 'Europe/London',
    'GMT+0': 'Etc/GMT',
    GMT0: 'Etc/GMT',
    'GMT−0': 'Etc/GMT',
    Greenwich: 'Etc/GMT',
    Hongkong: 'Asia/Hong_Kong',
    Iceland: 'Atlantic/Reykjavik',
    Iran: 'Asia/Tehran',
    Israel: 'Asia/Jerusalem',
    Jamaica: 'America/Jamaica',
    Japan: 'Asia/Tokyo',
    Kwajalein: 'Pacific/Kwajalein',
    Libya: 'Africa/Tripoli',
    'Mexico/BajaNorte': 'America/Tijuana',
    'Mexico/BajaSur': 'America/Mazatlan',
    'Mexico/General': 'America/Mexico_City',
    Navajo: 'America/Denver',
    NZ: 'Pacific/Auckland',
    'NZ-CHAT': 'Pacific/Chatham',
    Poland: 'Europe/Warsaw',
    Portugal: 'Europe/Lisbon',
    PRC: 'Asia/Shanghai',
    ROC: 'Asia/Taipei',
    ROK: 'Asia/Seoul',
    Singapore: 'Asia/Singapore',
    Turkey: 'Europe/Istanbul',
    UCT: 'UTC',
    Universal: 'UTC',
    'US/Alaska': 'America/Anchorage',
    'US/Aleutian': 'America/Adak',
    'US/Arizona': 'America/Phoenix',
    'US/Central': 'America/Chicago',
    'US/Eastern': 'America/New_York',
    'US/East-Indiana': 'America/Indiana/Indianapolis',
    'US/Hawaii': 'Pacific/Honolulu',
    'US/Indiana-Starke': 'America/Indiana/Knox',
    'US/Michigan': 'America/Detroit',
    'US/Mountain': 'America/Denver',
    'US/Pacific': 'America/Los_Angeles',
    'US/Pacific-New': 'America/Los_Angeles',
    'US/Samoa': 'Pacific/Pago_Pago',
    'W-SU': 'Europe/Moscow',
    Zulu: 'UTC',
};


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/get-date-time-parts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var decorators_1 = __webpack_require__("./node_modules/@shopify/decorators/dist/index.js");
var formatDate_1 = __webpack_require__("./node_modules/@shopify/dates/dist/utilities/formatDate.js");
var sanitise_date_string_1 = __webpack_require__("./node_modules/@shopify/dates/dist/sanitise-date-string.js");
var TWO_DIGIT_REGEX = /(\d{2})/;
function getDateTimeParts(date, timeZone) {
    return {
        year: function () { return DateTimeParts.getYear(date, timeZone); },
        month: function () { return DateTimeParts.getMonth(date, timeZone); },
        day: function () { return DateTimeParts.getDay(date, timeZone); },
        weekday: function () { return DateTimeParts.getWeekday(date, timeZone); },
        hour: function () { return DateTimeParts.getHour(date, timeZone); },
        minute: function () { return DateTimeParts.getMinute(date, timeZone); },
        second: function () { return DateTimeParts.getSecond(date, timeZone); },
    };
}
exports.getDateTimeParts = getDateTimeParts;
function dateTimeCacheKey(unit) {
    return function (date, timeZone) {
        return unit + "-" + date.toString() + "-" + timeZone;
    };
}
var Weekday;
(function (Weekday) {
    Weekday["Monday"] = "Monday";
    Weekday["Tuesday"] = "Tuesday";
    Weekday["Wednesday"] = "Wednesday";
    Weekday["Thursday"] = "Thursday";
    Weekday["Friday"] = "Friday";
    Weekday["Saturday"] = "Saturday";
    Weekday["Sunday"] = "Sunday";
})(Weekday || (Weekday = {}));
var weekdays = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
};
function isWeekday(weekday) {
    return Object.keys(weekdays).some(function (key) { return key === weekday; });
}
function assertNever(message) {
    throw new Error(message);
}
function getWeekdayValue(weekday) {
    if (!isWeekday(weekday)) {
        return assertNever("Unexpected weekday: " + weekday);
    }
    return weekdays[weekday];
}
// eslint-disable-next-line shopify/no-fully-static-classes
var DateTimeParts = /** @class */ (function () {
    function DateTimeParts() {
    }
    DateTimeParts.getYear = function (date, timeZone) {
        if (isNaN(date.valueOf())) {
            throw new Error("Unable to parse date: " + date + " for timezone: " + timeZone);
        }
        var yearString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            year: 'numeric',
        });
        var sanitisedYearString = sanitise_date_string_1.sanitiseDateString(yearString);
        var year = parseInt(sanitisedYearString, 10);
        if (isNaN(year)) {
            throw new Error("Unable to parse year: '" + yearString + "'");
        }
        return year;
    };
    DateTimeParts.getMonth = function (date, timeZone) {
        var monthString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            month: 'numeric',
        });
        var sanitisedMonthString = sanitise_date_string_1.sanitiseDateString(monthString);
        var month = parseInt(sanitisedMonthString, 10);
        if (isNaN(month)) {
            throw new Error("Unable to parse month: '" + monthString + "'");
        }
        return month;
    };
    DateTimeParts.getDay = function (date, timeZone) {
        var dayString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            day: 'numeric',
        });
        var sanitisedDayString = sanitise_date_string_1.sanitiseDateString(dayString);
        var day = parseInt(sanitisedDayString, 10);
        if (isNaN(day)) {
            throw new Error("Unable to parse day: '" + dayString + "'");
        }
        return day;
    };
    DateTimeParts.getWeekday = function (date, timeZone) {
        var weekdayString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            weekday: 'long',
        });
        var sanitisedWeekdayString = sanitise_date_string_1.sanitiseDateString(weekdayString);
        return getWeekdayValue(sanitisedWeekdayString);
    };
    DateTimeParts.getHour = function (date, timeZone) {
        var hourString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            hour12: false,
            hour: 'numeric',
        });
        var hour = parseInt(hourString, 10);
        if (isNaN(hour)) {
            hour = DateTimeParts.getTimePartsFallback(date, timeZone).hour;
        }
        return hour;
    };
    DateTimeParts.getMinute = function (date, timeZone) {
        var minuteString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            minute: 'numeric',
        });
        var minute = parseInt(minuteString, 10);
        if (isNaN(minute)) {
            minute = DateTimeParts.getTimePartsFallback(date, timeZone).minute;
        }
        return minute;
    };
    DateTimeParts.getSecond = function (date, timeZone) {
        var secondString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            second: 'numeric',
        });
        var second = parseInt(secondString, 10);
        if (isNaN(second)) {
            second = DateTimeParts.getTimePartsFallback(date, timeZone).second;
        }
        return second;
    };
    DateTimeParts.getTimePartsFallback = function (date, timeZone) {
        var timeString = formatDate_1.formatDate(date, 'en', {
            timeZone: timeZone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        // In Microsoft Edge, Intl.DateTimeFormat returns invisible characters around the individual numbers
        var _a = tslib_1.__read(timeString.split(':'), 3), dirtyHour = _a[0], dirtyMinute = _a[1], dirtySecond = _a[2];
        var rawHour = new RegExp(TWO_DIGIT_REGEX).exec(dirtyHour);
        var rawMinute = new RegExp(TWO_DIGIT_REGEX).exec(dirtyMinute);
        var rawSecond = new RegExp(TWO_DIGIT_REGEX).exec(dirtySecond);
        if (rawHour != null && rawMinute != null && rawSecond != null) {
            var hour = parseInt(rawHour[1], 10);
            var minute = parseInt(rawMinute[1], 10);
            var second = parseInt(rawSecond[1], 10);
            return {
                hour: hour,
                minute: minute,
                second: second,
            };
        }
        throw new Error("Unable to parse timeString: '" + timeString + "'");
    };
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('year'))
    ], DateTimeParts, "getYear", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('month'))
    ], DateTimeParts, "getMonth", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('day'))
    ], DateTimeParts, "getDay", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('weekday'))
    ], DateTimeParts, "getWeekday", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('hour'))
    ], DateTimeParts, "getHour", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('minute'))
    ], DateTimeParts, "getMinute", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('second'))
    ], DateTimeParts, "getSecond", null);
    tslib_1.__decorate([
        decorators_1.memoize(dateTimeCacheKey('timePartsFallback'))
    ], DateTimeParts, "getTimePartsFallback", null);
    return DateTimeParts;
}());


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/get-time-zone-offset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_date_time_parts_1 = __webpack_require__("./node_modules/@shopify/dates/dist/get-date-time-parts.js");
function getTimeZoneOffset(date, timeZone1, timeZone2) {
    if (date === void 0) { date = new Date(); }
    var date1 = constructZonedDateFromParts(date, timeZone1);
    var date2 = constructZonedDateFromParts(date, timeZone2);
    return (date1.valueOf() - date2.valueOf()) / (1000 * 60);
}
exports.getTimeZoneOffset = getTimeZoneOffset;
function constructZonedDateFromParts(date, timeZone) {
    var _a = get_date_time_parts_1.getDateTimeParts(date, timeZone), year = _a.year, month = _a.month, day = _a.day, hour = _a.hour, minute = _a.minute, second = _a.second;
    return new Date(Date.UTC(year(), month() - 1, day(), hour(), minute(), second()));
}


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/apply-time-zone-offset.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/constants/index.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/get-date-time-parts.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/get-time-zone-offset.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-future-date.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-less-than-one-day-ago.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-less-than-one-hour-ago.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-less-than-one-minute-ago.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-less-than-one-week-ago.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-less-than-one-year-ago.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-same-day.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-same-month.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-same-year.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-today.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-yesterday.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/is-tomorrow.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/parse-date-string.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/parse-date-string-parts.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/sanitise-date-string.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/unapply-time-zone-offset.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/dates/dist/map-deprecated-timezones.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-future-date.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFutureDate(date, now) {
    if (now === void 0) { now = new Date(); }
    return now < date;
}
exports.isFutureDate = isFutureDate;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-less-than-one-day-ago.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_future_date_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-future-date.js");
var constants_1 = __webpack_require__("./node_modules/@shopify/dates/dist/constants/index.js");
function isLessThanOneDayAgo(date, now) {
    if (now === void 0) { now = new Date(); }
    return (!is_future_date_1.isFutureDate(date, now) && now.getTime() - date.getTime() < constants_1.TimeUnit.Day);
}
exports.isLessThanOneDayAgo = isLessThanOneDayAgo;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-less-than-one-hour-ago.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_future_date_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-future-date.js");
var constants_1 = __webpack_require__("./node_modules/@shopify/dates/dist/constants/index.js");
function isLessThanOneHourAgo(date, now) {
    if (now === void 0) { now = new Date(); }
    return (!is_future_date_1.isFutureDate(date, now) && now.getTime() - date.getTime() < constants_1.TimeUnit.Hour);
}
exports.isLessThanOneHourAgo = isLessThanOneHourAgo;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-less-than-one-minute-ago.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_future_date_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-future-date.js");
var constants_1 = __webpack_require__("./node_modules/@shopify/dates/dist/constants/index.js");
function isLessThanOneMinuteAgo(date, now) {
    if (now === void 0) { now = new Date(); }
    return (!is_future_date_1.isFutureDate(date, now) && now.getTime() - date.getTime() < constants_1.TimeUnit.Minute);
}
exports.isLessThanOneMinuteAgo = isLessThanOneMinuteAgo;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-less-than-one-week-ago.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_future_date_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-future-date.js");
var constants_1 = __webpack_require__("./node_modules/@shopify/dates/dist/constants/index.js");
function isLessThanOneWeekAgo(date, now) {
    if (now === void 0) { now = new Date(); }
    return (!is_future_date_1.isFutureDate(date, now) && now.getTime() - date.getTime() < constants_1.TimeUnit.Week);
}
exports.isLessThanOneWeekAgo = isLessThanOneWeekAgo;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-less-than-one-year-ago.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_future_date_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-future-date.js");
var constants_1 = __webpack_require__("./node_modules/@shopify/dates/dist/constants/index.js");
function isLessThanOneYearAgo(date, now) {
    if (now === void 0) { now = new Date(); }
    return (!is_future_date_1.isFutureDate(date, now) && now.getTime() - date.getTime() < constants_1.TimeUnit.Year);
}
exports.isLessThanOneYearAgo = isLessThanOneYearAgo;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-same-day.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_date_time_parts_1 = __webpack_require__("./node_modules/@shopify/dates/dist/get-date-time-parts.js");
var is_same_month_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-same-month.js");
function isSameDay(date1, date2, timeZone) {
    var day1 = get_date_time_parts_1.getDateTimeParts(date1, timeZone).day;
    var day2 = get_date_time_parts_1.getDateTimeParts(date2, timeZone).day;
    return is_same_month_1.isSameMonth(date1, date2, timeZone) && day1() === day2();
}
exports.isSameDay = isSameDay;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-same-month.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_date_time_parts_1 = __webpack_require__("./node_modules/@shopify/dates/dist/get-date-time-parts.js");
var is_same_year_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-same-year.js");
function isSameMonth(date1, date2, timeZone) {
    var month1 = get_date_time_parts_1.getDateTimeParts(date1, timeZone).month;
    var month2 = get_date_time_parts_1.getDateTimeParts(date2, timeZone).month;
    return is_same_year_1.isSameYear(date1, date2, timeZone) && month1() === month2();
}
exports.isSameMonth = isSameMonth;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-same-year.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_date_time_parts_1 = __webpack_require__("./node_modules/@shopify/dates/dist/get-date-time-parts.js");
function isSameYear(date1, date2, timeZone) {
    var year1 = get_date_time_parts_1.getDateTimeParts(date1, timeZone).year;
    var year2 = get_date_time_parts_1.getDateTimeParts(date2, timeZone).year;
    return year1() === year2();
}
exports.isSameYear = isSameYear;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-today.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_same_day_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-same-day.js");
function isToday(date, timeZone) {
    return is_same_day_1.isSameDay(date, new Date(), timeZone);
}
exports.isToday = isToday;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-tomorrow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_same_day_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-same-day.js");
function isTomorrow(date, timeZone) {
    var now = new Date();
    var tomorrow = new Date(now.valueOf() + 24 * 60 * 60 * 1000);
    return is_same_day_1.isSameDay(date, tomorrow, timeZone);
}
exports.isTomorrow = isTomorrow;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/is-yesterday.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_same_day_1 = __webpack_require__("./node_modules/@shopify/dates/dist/is-same-day.js");
function isYesterday(date, timeZone) {
    var now = new Date();
    var yesterday = new Date(now.valueOf() - 24 * 60 * 60 * 1000);
    return is_same_day_1.isSameDay(date, yesterday, timeZone);
}
exports.isYesterday = isYesterday;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/map-deprecated-timezones.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deprecated_timezones_1 = __webpack_require__("./node_modules/@shopify/dates/dist/deprecated-timezones.js");
function mapDeprecatedTimezones(timezone) {
    if (Object.keys(deprecated_timezones_1.deprecatedTimezones).some(function (key) { return key === timezone; })) {
        return deprecated_timezones_1.deprecatedTimezones[timezone];
    }
    else {
        return timezone;
    }
}
exports.mapDeprecatedTimezones = mapDeprecatedTimezones;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/parse-date-string-parts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/**
 * Allowed date string formats
 * yyyy-mm-dd
 * yyyy-mm-ddThh:mm:ss.fff
 * yyyy-mm-ddThh:mm:ss.fff+hh:mm
 * yyyy-mm-ddThh:mm:ss.fff-hh:mm
 * yyyy-mm-ddThh:mm:ss.fffZ
 */
var DATE_TIME_PARTS_REGEX = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?(?:(Z|(?:(\+|-)(\d{2}):(\d{2}))))?)?$/;
function parseDateStringParts(dateString) {
    var dateTimeParts = new RegExp(DATE_TIME_PARTS_REGEX).exec(dateString);
    if (dateTimeParts == null) {
        return null;
    }
    // slice the first regex part (the full match) off
    var _a = tslib_1.__read(Array.from(dateTimeParts).slice(1), 11), year = _a[0], month = _a[1], day = _a[2], hour = _a[3], minute = _a[4], second = _a[5], millisecond = _a[6], timeZoneOffset = _a[7], sign = _a[8], timeZoneHour = _a[9], timeZoneMinute = _a[10];
    return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        timeZoneOffset: timeZoneOffset,
        sign: sign,
        timeZoneHour: timeZoneHour,
        timeZoneMinute: timeZoneMinute,
    };
}
exports.parseDateStringParts = parseDateStringParts;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/parse-date-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var apply_time_zone_offset_1 = __webpack_require__("./node_modules/@shopify/dates/dist/apply-time-zone-offset.js");
var parse_date_string_parts_1 = __webpack_require__("./node_modules/@shopify/dates/dist/parse-date-string-parts.js");
function parseDateString(dateString, timeZone) {
    var dateTimeParts = parse_date_string_parts_1.parseDateStringParts(dateString);
    if (dateTimeParts == null) {
        return null;
    }
    var rawYear = dateTimeParts.year, rawMonth = dateTimeParts.month, rawDay = dateTimeParts.day, rawHour = dateTimeParts.hour, rawMinute = dateTimeParts.minute, rawSecond = dateTimeParts.second, rawMillisecond = dateTimeParts.millisecond, timeZoneOffset = dateTimeParts.timeZoneOffset, sign = dateTimeParts.sign, rawTimeZoneHour = dateTimeParts.timeZoneHour, rawTimeZoneMinute = dateTimeParts.timeZoneMinute;
    var year = parseInt(rawYear, 10);
    var month = parseInt(rawMonth, 10);
    var day = parseInt(rawDay, 10);
    var hour = rawHour == null ? 0 : parseInt(rawHour, 10);
    var minute = rawMinute == null ? 0 : parseInt(rawMinute, 10);
    var second = rawSecond == null ? 0 : parseInt(rawSecond, 10);
    var millisecond = rawMillisecond == null ? 0 : parseInt(rawMillisecond, 10);
    var timeZoneHour = rawTimeZoneHour == null ? 0 : parseInt(rawTimeZoneHour, 10);
    var timeZoneMinute = rawTimeZoneMinute == null ? 0 : parseInt(rawTimeZoneMinute, 10);
    var utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, second, millisecond));
    if (timeZoneOffset === 'Z') {
        return utcDate;
    }
    if (sign == null) {
        return apply_time_zone_offset_1.applyTimeZoneOffset(utcDate, timeZone, 'UTC');
    }
    switch (sign) {
        case '+':
            utcDate.setHours(utcDate.getHours() - timeZoneHour);
            utcDate.setMinutes(utcDate.getMinutes() - timeZoneMinute);
            return utcDate;
        case '-':
            utcDate.setHours(utcDate.getHours() + timeZoneHour);
            utcDate.setMinutes(utcDate.getMinutes() + timeZoneMinute);
            return utcDate;
        default:
            return null;
    }
}
exports.parseDateString = parseDateString;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/sanitise-date-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In Microsoft Edge, Intl.DateTimeFormat returns invisible characters
 * around the individual numbers.
 */
function sanitiseDateString(string) {
    return string.replace(String.fromCharCode(8206), '');
}
exports.sanitiseDateString = sanitiseDateString;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/unapply-time-zone-offset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_time_zone_offset_1 = __webpack_require__("./node_modules/@shopify/dates/dist/get-time-zone-offset.js");
function unapplyTimeZoneOffset(date, timeZone1, timeZone2) {
    var timeZoneOffset = get_time_zone_offset_1.getTimeZoneOffset(date, timeZone1, timeZone2);
    return new Date(date.valueOf() + timeZoneOffset * 60 * 1000);
}
exports.unapplyTimeZoneOffset = unapplyTimeZoneOffset;


/***/ }),

/***/ "./node_modules/@shopify/dates/dist/utilities/formatDate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var function_enhancers_1 = __webpack_require__("./node_modules/@shopify/function-enhancers/dist/index.js");
var memoizedGetDateTimeFormat = function_enhancers_1.memoize(getDateTimeFormat, dateTimeFormatCacheKey);
function formatDate(date, locales, options) {
    if (options === void 0) { options = {}; }
    // Etc/GMT+12 is not supported in most browsers and there is no equivalent fallback
    if (options.timeZone != null && options.timeZone === 'Etc/GMT+12') {
        var adjustedDate = new Date(date.valueOf() - 12 * 60 * 60 * 1000);
        return memoizedGetDateTimeFormat(locales, tslib_1.__assign({}, options, { timeZone: 'UTC' })).format(adjustedDate);
    }
    return memoizedGetDateTimeFormat(locales, options).format(date);
}
exports.formatDate = formatDate;
function getDateTimeFormat(locales, options) {
    return Intl.DateTimeFormat(locales, options);
}
function dateTimeFormatCacheKey(locales, options) {
    return locales + "-" + JSON.stringify(options);
}


/***/ }),

/***/ "./node_modules/@shopify/decorators/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__("./node_modules/@shopify/decorators/dist/memoize.js");
exports.memoize = memoize_1.default;


/***/ }),

/***/ "./node_modules/@shopify/decorators/dist/memoize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var function_enhancers_1 = __webpack_require__("./node_modules/@shopify/function-enhancers/dist/index.js");
function memoize(resolver) {
    return function (_target, propertyKey, descriptor) {
        var method = descriptor.value;
        if (!method || !(method instanceof Function)) {
            return descriptor;
        }
        return {
            get: function get() {
                var newDescriptor = {
                    configurable: true,
                    value: function_enhancers_1.memoize(method, resolver),
                };
                Object.defineProperty(this, propertyKey, newDescriptor);
                return newDescriptor.value;
            },
        };
    };
}
exports.default = memoize;


/***/ }),

/***/ "./node_modules/@shopify/function-enhancers/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = __webpack_require__("./node_modules/@shopify/function-enhancers/dist/memoize.js");
exports.memoize = memoize_1.default;


/***/ }),

/***/ "./node_modules/@shopify/function-enhancers/dist/memoize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
exports.MAX_MAP_ENTRIES = 50;
function memoize(method, resolver) {
    var weakMapCache = new WeakMap();
    var mapCache = new Map();
    var mapKeys = [];
    return function memoized() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof window === 'undefined') {
            return method.apply(this, args);
        }
        var useWeakMap = args.length === 1 && typeof args[0] === 'object' && !resolver;
        var key;
        if (useWeakMap) {
            key = args[0];
        }
        else if (resolver && resolver instanceof Function) {
            key = resolver.apply(void 0, tslib_1.__spread(args));
        }
        else {
            key = args[0];
        }
        var cache = useWeakMap ? weakMapCache : mapCache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = method.apply(this, args);
        if (useWeakMap) {
            weakMapCache.set(key, result);
        }
        else {
            mapCache.set(key, result);
            mapKeys.push(key);
            if (mapCache.size > exports.MAX_MAP_ENTRIES) {
                var oldestKey = mapKeys[0];
                mapCache.delete(oldestKey);
                mapKeys.shift();
            }
        }
        return result;
    };
}
exports.default = memoize;


/***/ }),

/***/ "./node_modules/@shopify/i18n/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/i18n/dist/locale.js"), exports);
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/i18n/dist/pseudotranslate.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/i18n/dist/locale.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function regionFromLocale(locale) {
    var code = locale.split('-')[1];
    return code && code.toUpperCase();
}
exports.regionFromLocale = regionFromLocale;
function languageFromLocale(locale) {
    return locale.split('-')[0].toLowerCase();
}
exports.languageFromLocale = languageFromLocale;


/***/ }),

/***/ "./node_modules/@shopify/i18n/dist/pseudotranslate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var locale_1 = __webpack_require__("./node_modules/@shopify/i18n/dist/locale.js");
var LETTERS = new Map([
    ['a', 'α'],
    ['b', 'ḅ'],
    ['c', 'ͼ'],
    ['d', 'ḍ'],
    ['e', 'ḛ'],
    ['f', 'ϝ'],
    ['g', 'ḡ'],
    ['h', 'ḥ'],
    ['i', 'ḭ'],
    ['j', 'ĵ'],
    ['k', 'ḳ'],
    ['l', 'ḽ'],
    ['m', 'ṃ'],
    ['n', 'ṇ'],
    ['o', 'ṓ'],
    ['p', 'ṗ'],
    ['q', 'ʠ'],
    ['r', 'ṛ'],
    ['s', 'ṡ'],
    ['t', 'ṭ'],
    ['u', 'ṵ'],
    ['v', 'ṽ'],
    ['w', 'ẁ'],
    ['x', 'ẋ'],
    ['y', 'ẏ'],
    ['z', 'ẓ'],
    ['A', 'Ḁ'],
    ['B', 'Ḃ'],
    ['C', 'Ḉ'],
    ['D', 'Ḍ'],
    ['E', 'Ḛ'],
    ['F', 'Ḟ'],
    ['G', 'Ḡ'],
    ['H', 'Ḥ'],
    ['I', 'Ḭ'],
    ['J', 'Ĵ'],
    ['K', 'Ḱ'],
    ['L', 'Ḻ'],
    ['M', 'Ṁ'],
    ['N', 'Ṅ'],
    ['O', 'Ṏ'],
    ['P', 'Ṕ'],
    ['Q', 'Ǫ'],
    ['R', 'Ṛ'],
    ['S', 'Ṣ'],
    ['T', 'Ṫ'],
    ['U', 'Ṳ'],
    ['V', 'Ṿ'],
    ['W', 'Ŵ'],
    ['X', 'Ẋ'],
    ['Y', 'Ŷ'],
    ['Z', 'Ż'],
]);
var DEFAULT_RATIO = 1.15;
var LOCALE_RATIOS = new Map([
    ['zh', 0.5],
    ['ja', 0.5],
    ['ko', 0.8],
    ['fr', 1.3],
    ['it', 1.3],
    ['de', 1.5],
    ['nl', 1.5],
]);
function sizeRatio(_a) {
    var locale = _a.to;
    if (locale == null) {
        return DEFAULT_RATIO;
    }
    return (LOCALE_RATIOS.get(locale) ||
        LOCALE_RATIOS.get(locale_1.languageFromLocale(locale)) ||
        DEFAULT_RATIO);
}
exports.sizeRatio = sizeRatio;
function pseudotranslate(string, _a) {
    var _b = _a === void 0 ? {} : _a, delimiter = _b.delimiter, _c = _b.startDelimiter, startDelimiter = _c === void 0 ? delimiter : _c, _d = _b.endDelimiter, endDelimiter = _d === void 0 ? delimiter : _d, prepend = _b.prepend, append = _b.append, toLocale = _b.toLocale;
    var parts = createParts(string, { startDelimiter: startDelimiter, endDelimiter: endDelimiter });
    var adjustableCharacters = parts.reduce(function (sum, part) {
        return typeof part === 'string' ? sum + countAdjustableCharacters(part) : sum;
    }, 0);
    var charactersToAdjust = Math.ceil(adjustableCharacters * sizeRatio({ to: toLocale })) -
        adjustableCharacters;
    var adjustEvery = adjustableCharacters / Math.abs(charactersToAdjust);
    var adjustAt = adjustEvery;
    var adjustableCharacterIndex = -1;
    var pseudotranslated = parts.reduce(function (pseudotranslated, part) {
        var pseudotranslatedPart = typeof part === 'string'
            ? tslib_1.__spread(part).map(function (character) {
                var isAdjustable = isAdjustableCharacter(character);
                if (isAdjustable) {
                    adjustableCharacterIndex++;
                }
                var newCharacter = LETTERS.get(character) || character;
                var shouldAdjust = isAdjustable &&
                    adjustableCharacterIndex + 1 === Math.floor(adjustAt);
                if (shouldAdjust) {
                    adjustAt += adjustEvery;
                    return charactersToAdjust < 0 ? '' : newCharacter.repeat(2);
                }
                else {
                    return newCharacter;
                }
            })
                .join('')
            : part[0];
        return pseudotranslated + pseudotranslatedPart;
    }, '');
    return "" + (prepend || '') + pseudotranslated + (append || '');
}
exports.pseudotranslate = pseudotranslate;
function isAdjustableCharacter(character) {
    return LETTERS.has(character);
}
function countAdjustableCharacters(string) {
    return tslib_1.__spread(string).filter(isAdjustableCharacter).length;
}
function createParts(string, _a) {
    var startDelimiter = _a.startDelimiter, endDelimiter = _a.endDelimiter;
    var delimiterRegex = startDelimiter && endDelimiter
        ? createDelimiterRegex(startDelimiter, endDelimiter)
        : undefined;
    var lastTokenEndIndex = 0;
    var parts = [];
    if (delimiterRegex) {
        var token = delimiterRegex.exec(string);
        while (token) {
            parts.push(string.substring(lastTokenEndIndex, token.index));
            parts.push(token);
            lastTokenEndIndex = token.index + token[0].length;
            token = delimiterRegex.exec(string);
        }
    }
    else {
        parts.push(string);
    }
    return parts;
}
function createDelimiterRegex(startDelimiter, endDelimiter) {
    if (startDelimiter.length === 1 && endDelimiter.length === 1) {
        return new RegExp("\\" + startDelimiter + "[^\\" + endDelimiter + "]*\\" + endDelimiter, 'g');
    }
    var escapedStart = tslib_1.__spread(startDelimiter).map(function (character) { return "\\" + character; })
        .join('');
    var escapedEnd = tslib_1.__spread(endDelimiter).map(function (character) { return "\\" + character; })
        .join('');
    return new RegExp(escapedStart + ".*?" + escapedEnd, 'g');
}


/***/ }),

/***/ "./node_modules/@shopify/react-hooks/dist/hooks/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lazy_ref_1 = __webpack_require__("./node_modules/@shopify/react-hooks/dist/hooks/lazy-ref.js");
exports.useLazyRef = lazy_ref_1.useLazyRef;
var timeout_1 = __webpack_require__("./node_modules/@shopify/react-hooks/dist/hooks/timeout.js");
exports.useTimeout = timeout_1.default;
var on_value_change_1 = __webpack_require__("./node_modules/@shopify/react-hooks/dist/hooks/on-value-change.js");
exports.useOnValueChange = on_value_change_1.default;
var mounted_ref_1 = __webpack_require__("./node_modules/@shopify/react-hooks/dist/hooks/mounted-ref.js");
exports.useMountedRef = mounted_ref_1.useMountedRef;


/***/ }),

/***/ "./node_modules/@shopify/react-hooks/dist/hooks/lazy-ref.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__("./node_modules/react/index.js");
var UNSET = Symbol('unset');
function useLazyRef(getValue) {
    var ref = react_1.useRef(UNSET);
    if (ref.current === UNSET) {
        ref.current = getValue();
    }
    return ref;
}
exports.useLazyRef = useLazyRef;


/***/ }),

/***/ "./node_modules/@shopify/react-hooks/dist/hooks/mounted-ref.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__("./node_modules/react/index.js");
function useMountedRef() {
    var mounted = react_1.useRef(true);
    react_1.useEffect(function () {
        return function () {
            mounted.current = false;
        };
    }, []);
    return mounted;
}
exports.useMountedRef = useMountedRef;


/***/ }),

/***/ "./node_modules/@shopify/react-hooks/dist/hooks/on-value-change.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react/index.js"));
function useOnValueChange(value, onChange) {
    var tracked = react_1.default.useRef(value);
    var oldValue = tracked.current;
    if (value !== oldValue) {
        tracked.current = value;
        onChange(value, oldValue);
    }
}
exports.default = useOnValueChange;


/***/ }),

/***/ "./node_modules/@shopify/react-hooks/dist/hooks/timeout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react/index.js"));
function useTimeout(callback, delay) {
    react_1.default.useEffect(function () {
        var id = setTimeout(callback, delay);
        return function () { return clearTimeout(id); };
    }, [callback, delay]);
}
exports.default = useTimeout;


/***/ }),

/***/ "./node_modules/@shopify/react-hooks/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__("./node_modules/@shopify/react-hooks/dist/hooks/index.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/constants/currency-decimal-places.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_DECIMAL_PLACES = 2;
exports.default = new Map([
    ['AED', 2],
    ['AFN', 2],
    ['ALL', 2],
    ['AMD', 2],
    ['ANG', 2],
    ['AOA', 2],
    ['ARS', 2],
    ['AUD', 2],
    ['AWG', 2],
    ['AZN', 2],
    ['BAM', 2],
    ['BBD', 2],
    ['BDT', 2],
    ['BGN', 2],
    ['BHD', 3],
    ['BIF', 0],
    ['BMD', 2],
    ['BND', 2],
    ['BOB', 2],
    ['BRL', 2],
    ['BSD', 2],
    ['BTN', 2],
    ['BWP', 2],
    ['BYN', 2],
    ['BYR', 0],
    ['BZD', 2],
    ['CAD', 2],
    ['CDF', 2],
    ['CHF', 2],
    ['CLF', 4],
    ['CLP', 0],
    ['CNY', 2],
    ['COP', 2],
    ['CRC', 2],
    ['CUC', 2],
    ['CUP', 2],
    ['CVE', 2],
    ['CZK', 2],
    ['DJF', 0],
    ['DKK', 2],
    ['DOP', 2],
    ['DZD', 2],
    ['EGP', 2],
    ['ERN', 2],
    ['ETB', 2],
    ['EUR', 2],
    ['FJD', 2],
    ['FKP', 2],
    ['GBP', 2],
    ['GEL', 2],
    ['GHS', 2],
    ['GIP', 2],
    ['GMD', 2],
    ['GNF', 0],
    ['GTQ', 2],
    ['GYD', 2],
    ['HKD', 2],
    ['HNL', 2],
    ['HRK', 2],
    ['HTG', 2],
    ['HUF', 0],
    ['IDR', 2],
    ['ILS', 2],
    ['INR', 2],
    ['IQD', 3],
    ['IRR', 2],
    ['ISK', 0],
    ['JMD', 2],
    ['JOD', 3],
    ['JPY', 0],
    ['KES', 2],
    ['KGS', 2],
    ['KHR', 2],
    ['KMF', 0],
    ['KPW', 2],
    ['KRW', 0],
    ['KWD', 3],
    ['KYD', 2],
    ['KZT', 2],
    ['LAK', 2],
    ['LBP', 2],
    ['LKR', 2],
    ['LRD', 2],
    ['LSL', 2],
    ['LTL', 2],
    ['LVL', 2],
    ['LYD', 3],
    ['MAD', 2],
    ['MDL', 2],
    ['MGA', 5],
    ['MKD', 2],
    ['MMK', 2],
    ['MNT', 2],
    ['MOP', 2],
    ['MRO', 5],
    ['MUR', 2],
    ['MVR', 2],
    ['MWK', 2],
    ['MXN', 2],
    ['MYR', 2],
    ['MZN', 2],
    ['NAD', 2],
    ['NGN', 2],
    ['NIO', 2],
    ['NOK', 2],
    ['NPR', 2],
    ['NZD', 2],
    ['OMR', 3],
    ['PAB', 2],
    ['PEN', 2],
    ['PGK', 2],
    ['PHP', 2],
    ['PKR', 2],
    ['PLN', 2],
    ['PYG', 0],
    ['QAR', 2],
    ['RON', 2],
    ['RSD', 2],
    ['RUB', 2],
    ['RWF', 0],
    ['SAR', 2],
    ['SBD', 2],
    ['SCR', 2],
    ['SDG', 2],
    ['SEK', 2],
    ['SGD', 2],
    ['SHP', 2],
    ['SKK', 2],
    ['SLL', 2],
    ['SOS', 2],
    ['SRD', 2],
    ['SSP', 2],
    ['STD', 2],
    ['SVC', 2],
    ['SYP', 2],
    ['SZL', 2],
    ['THB', 2],
    ['TJS', 2],
    ['TMT', 2],
    ['TND', 3],
    ['TOP', 2],
    ['TRY', 2],
    ['TTD', 2],
    ['TWD', 2],
    ['TZS', 2],
    ['UAH', 2],
    ['UGX', 0],
    ['USD', 2],
    ['UYU', 2],
    ['UZS', 2],
    ['VEF', 2],
    ['VND', 0],
    ['VUV', 0],
    ['WST', 2],
    ['XAF', 0],
    ['XAG', 0],
    ['XAU', 0],
    ['XBA', 0],
    ['XBB', 0],
    ['XBC', 0],
    ['XBD', 0],
    ['XCD', 2],
    ['XDR', 0],
    ['XOF', 0],
    ['XPD', 0],
    ['XPF', 0],
    ['XPT', 0],
    ['XTS', 0],
    ['YER', 2],
    ['ZAR', 2],
    ['ZMK', 2],
    ['ZMW', 2],
]);


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/constants/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var DateStyle;
(function (DateStyle) {
    DateStyle["Long"] = "Long";
    DateStyle["Short"] = "Short";
    DateStyle["Humanize"] = "Humanize";
    DateStyle["Time"] = "Time";
})(DateStyle = exports.DateStyle || (exports.DateStyle = {}));
exports.dateStyle = (_a = {},
    _a[DateStyle.Long] = {
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    },
    _a[DateStyle.Short] = {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    },
    _a[DateStyle.Humanize] = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    },
    _a[DateStyle.Time] = {
        hour: '2-digit',
        minute: '2-digit',
    },
    _a);
var Weekday;
(function (Weekday) {
    Weekday["Sunday"] = "sunday";
    Weekday["Monday"] = "monday";
    Weekday["Tuesday"] = "tuesday";
    Weekday["Wednesday"] = "wednesday";
    Weekday["Thursday"] = "thursday";
    Weekday["Friday"] = "friday";
    Weekday["Saturday"] = "saturday";
})(Weekday = exports.Weekday || (exports.Weekday = {}));
exports.DEFAULT_WEEK_START_DAY = Weekday.Sunday;
exports.WEEK_START_DAYS = new Map([
    // Saturday
    ['AE', Weekday.Saturday],
    ['AF', Weekday.Saturday],
    ['BH', Weekday.Saturday],
    ['DZ', Weekday.Saturday],
    ['EG', Weekday.Saturday],
    ['IQ', Weekday.Saturday],
    ['IR', Weekday.Saturday],
    ['JO', Weekday.Saturday],
    ['KW', Weekday.Saturday],
    ['LY', Weekday.Saturday],
    ['OM', Weekday.Saturday],
    ['QA', Weekday.Saturday],
    ['SA', Weekday.Saturday],
    ['SY', Weekday.Saturday],
    ['YE', Weekday.Saturday],
    // Sunday
    ['AR', Weekday.Sunday],
    ['BO', Weekday.Sunday],
    ['BR', Weekday.Sunday],
    ['BZ', Weekday.Sunday],
    ['CA', Weekday.Sunday],
    ['CL', Weekday.Sunday],
    ['CO', Weekday.Sunday],
    ['CR', Weekday.Sunday],
    ['DO', Weekday.Sunday],
    ['EC', Weekday.Sunday],
    ['GT', Weekday.Sunday],
    ['HK', Weekday.Sunday],
    ['HN', Weekday.Sunday],
    ['IL', Weekday.Sunday],
    ['JM', Weekday.Sunday],
    ['JP', Weekday.Sunday],
    ['KE', Weekday.Sunday],
    ['KR', Weekday.Sunday],
    ['MO', Weekday.Sunday],
    ['MX', Weekday.Sunday],
    ['NI', Weekday.Sunday],
    ['PA', Weekday.Sunday],
    ['PE', Weekday.Sunday],
    ['PH', Weekday.Sunday],
    ['SG', Weekday.Sunday],
    ['SV', Weekday.Sunday],
    ['TW', Weekday.Sunday],
    ['US', Weekday.Sunday],
    ['VE', Weekday.Sunday],
    ['ZA', Weekday.Sunday],
    ['ZW', Weekday.Sunday],
    // Monday
    ['AD', Weekday.Monday],
    ['AL', Weekday.Monday],
    ['AM', Weekday.Monday],
    ['AU', Weekday.Monday],
    ['AZ', Weekday.Monday],
    ['BE', Weekday.Monday],
    ['BG', Weekday.Monday],
    ['BN', Weekday.Monday],
    ['BY', Weekday.Monday],
    ['CH', Weekday.Monday],
    ['CN', Weekday.Monday],
    ['CZ', Weekday.Monday],
    ['DE', Weekday.Monday],
    ['DK', Weekday.Monday],
    ['EE', Weekday.Monday],
    ['ES', Weekday.Monday],
    ['FI', Weekday.Monday],
    ['FR', Weekday.Monday],
    ['GB', Weekday.Monday],
    ['GE', Weekday.Monday],
    ['GF', Weekday.Monday],
    ['GR', Weekday.Monday],
    ['HR', Weekday.Monday],
    ['HU', Weekday.Monday],
    ['ID', Weekday.Monday],
    ['IE', Weekday.Monday],
    ['IN', Weekday.Monday],
    ['IS', Weekday.Monday],
    ['IT', Weekday.Monday],
    ['KG', Weekday.Monday],
    ['KZ', Weekday.Monday],
    ['LB', Weekday.Monday],
    ['LT', Weekday.Monday],
    ['LU', Weekday.Monday],
    ['LV', Weekday.Monday],
    ['MA', Weekday.Monday],
    ['MC', Weekday.Monday],
    ['MK', Weekday.Monday],
    ['MN', Weekday.Monday],
    ['MY', Weekday.Monday],
    ['NL', Weekday.Monday],
    ['NO', Weekday.Monday],
    ['NZ', Weekday.Monday],
    ['PK', Weekday.Monday],
    ['PL', Weekday.Monday],
    ['PT', Weekday.Monday],
    ['PY', Weekday.Monday],
    ['RO', Weekday.Monday],
    ['RS', Weekday.Monday],
    ['RU', Weekday.Monday],
    ['SE', Weekday.Monday],
    ['SK', Weekday.Monday],
    ['TH', Weekday.Monday],
    ['TN', Weekday.Monday],
    ['TR', Weekday.Monday],
    ['UA', Weekday.Monday],
    ['UY', Weekday.Monday],
    ['UZ', Weekday.Monday],
    ['VN', Weekday.Monday],
    ['XK', Weekday.Monday],
]);
/* eslint-disable line-comment-position */
// See https://en.wikipedia.org/wiki/Right-to-left
exports.RTL_LANGUAGES = [
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi',
];
/* eslint-enable */
var currency_decimal_places_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/constants/currency-decimal-places.js");
exports.currencyDecimalPlaces = currency_decimal_places_1.default;
exports.DEFAULT_DECIMAL_PLACES = currency_decimal_places_1.DEFAULT_DECIMAL_PLACES;
exports.CUSTOM_NAME_FORMATTERS = new Map([
    [
        'ja',
        function (firstName, lastName, full) {
            return full ? "" + lastName + firstName : lastName + "\u69D8";
        },
    ],
    [
        'zh-CN',
        function (firstName, lastName, full) {
            return full ? "" + lastName + firstName : lastName;
        },
    ],
    [
        'zh-TW',
        function (firstName, lastName, full) {
            return full ? "" + lastName + firstName : lastName;
        },
    ],
]);


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/context.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react/index.js"));
exports.I18nContext = react_1.default.createContext(null);
exports.I18nIdsContext = react_1.default.createContext([]);
exports.I18nParentContext = react_1.default.createContext(null);


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/currencyCode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["Usd"] = "USD";
    CurrencyCode["Eur"] = "EUR";
    CurrencyCode["Gbp"] = "GBP";
    CurrencyCode["Cad"] = "CAD";
    CurrencyCode["Afn"] = "AFN";
    CurrencyCode["All"] = "ALL";
    CurrencyCode["Dzd"] = "DZD";
    CurrencyCode["Aoa"] = "AOA";
    CurrencyCode["Ars"] = "ARS";
    CurrencyCode["Amd"] = "AMD";
    CurrencyCode["Awg"] = "AWG";
    CurrencyCode["Aud"] = "AUD";
    CurrencyCode["Bbd"] = "BBD";
    CurrencyCode["Azn"] = "AZN";
    CurrencyCode["Bdt"] = "BDT";
    CurrencyCode["Bsd"] = "BSD";
    CurrencyCode["Bhd"] = "BHD";
    CurrencyCode["Bif"] = "BIF";
    CurrencyCode["Byr"] = "BYR";
    CurrencyCode["Bzd"] = "BZD";
    CurrencyCode["Btn"] = "BTN";
    CurrencyCode["Bam"] = "BAM";
    CurrencyCode["Brl"] = "BRL";
    CurrencyCode["Bob"] = "BOB";
    CurrencyCode["Bwp"] = "BWP";
    CurrencyCode["Bnd"] = "BND";
    CurrencyCode["Bgn"] = "BGN";
    CurrencyCode["Mmk"] = "MMK";
    CurrencyCode["Khr"] = "KHR";
    CurrencyCode["Cve"] = "CVE";
    CurrencyCode["Kyd"] = "KYD";
    CurrencyCode["Xaf"] = "XAF";
    CurrencyCode["Clp"] = "CLP";
    CurrencyCode["Cny"] = "CNY";
    CurrencyCode["Cop"] = "COP";
    CurrencyCode["Kmf"] = "KMF";
    CurrencyCode["Cdf"] = "CDF";
    CurrencyCode["Crc"] = "CRC";
    CurrencyCode["Hrk"] = "HRK";
    CurrencyCode["Czk"] = "CZK";
    CurrencyCode["Dkk"] = "DKK";
    CurrencyCode["Dop"] = "DOP";
    CurrencyCode["Xcd"] = "XCD";
    CurrencyCode["Egp"] = "EGP";
    CurrencyCode["Etb"] = "ETB";
    CurrencyCode["Xpf"] = "XPF";
    CurrencyCode["Fjd"] = "FJD";
    CurrencyCode["Gmd"] = "GMD";
    CurrencyCode["Ghs"] = "GHS";
    CurrencyCode["Gtq"] = "GTQ";
    CurrencyCode["Gyd"] = "GYD";
    CurrencyCode["Gel"] = "GEL";
    CurrencyCode["Htg"] = "HTG";
    CurrencyCode["Hnl"] = "HNL";
    CurrencyCode["Hkd"] = "HKD";
    CurrencyCode["Huf"] = "HUF";
    CurrencyCode["Isk"] = "ISK";
    CurrencyCode["Inr"] = "INR";
    CurrencyCode["Idr"] = "IDR";
    CurrencyCode["Ils"] = "ILS";
    CurrencyCode["Iqd"] = "IQD";
    CurrencyCode["Jmd"] = "JMD";
    CurrencyCode["Jpy"] = "JPY";
    CurrencyCode["Jep"] = "JEP";
    CurrencyCode["Jod"] = "JOD";
    CurrencyCode["Kzt"] = "KZT";
    CurrencyCode["Kes"] = "KES";
    CurrencyCode["Kwd"] = "KWD";
    CurrencyCode["Kgs"] = "KGS";
    CurrencyCode["Lak"] = "LAK";
    CurrencyCode["Lvl"] = "LVL";
    CurrencyCode["Lbp"] = "LBP";
    CurrencyCode["Lsl"] = "LSL";
    CurrencyCode["Lrd"] = "LRD";
    CurrencyCode["Ltl"] = "LTL";
    CurrencyCode["Mga"] = "MGA";
    CurrencyCode["Mkd"] = "MKD";
    CurrencyCode["Mop"] = "MOP";
    CurrencyCode["Mwk"] = "MWK";
    CurrencyCode["Mvr"] = "MVR";
    CurrencyCode["Mxn"] = "MXN";
    CurrencyCode["Myr"] = "MYR";
    CurrencyCode["Mur"] = "MUR";
    CurrencyCode["Mdl"] = "MDL";
    CurrencyCode["Mad"] = "MAD";
    CurrencyCode["Mnt"] = "MNT";
    CurrencyCode["Mzn"] = "MZN";
    CurrencyCode["Nad"] = "NAD";
    CurrencyCode["Npr"] = "NPR";
    CurrencyCode["Ang"] = "ANG";
    CurrencyCode["Nzd"] = "NZD";
    CurrencyCode["Nio"] = "NIO";
    CurrencyCode["Ngn"] = "NGN";
    CurrencyCode["Nok"] = "NOK";
    CurrencyCode["Omr"] = "OMR";
    CurrencyCode["Pkr"] = "PKR";
    CurrencyCode["Pgk"] = "PGK";
    CurrencyCode["Pyg"] = "PYG";
    CurrencyCode["Pen"] = "PEN";
    CurrencyCode["Php"] = "PHP";
    CurrencyCode["Pln"] = "PLN";
    CurrencyCode["Qar"] = "QAR";
    CurrencyCode["Ron"] = "RON";
    CurrencyCode["Rub"] = "RUB";
    CurrencyCode["Rwf"] = "RWF";
    CurrencyCode["Wst"] = "WST";
    CurrencyCode["Sar"] = "SAR";
    CurrencyCode["Std"] = "STD";
    CurrencyCode["Rsd"] = "RSD";
    CurrencyCode["Scr"] = "SCR";
    CurrencyCode["Sgd"] = "SGD";
    CurrencyCode["Sdg"] = "SDG";
    CurrencyCode["Syp"] = "SYP";
    CurrencyCode["Zar"] = "ZAR";
    CurrencyCode["Krw"] = "KRW";
    CurrencyCode["Ssp"] = "SSP";
    CurrencyCode["Sbd"] = "SBD";
    CurrencyCode["Lkr"] = "LKR";
    CurrencyCode["Srd"] = "SRD";
    CurrencyCode["Szl"] = "SZL";
    CurrencyCode["Sek"] = "SEK";
    CurrencyCode["Chf"] = "CHF";
    CurrencyCode["Twd"] = "TWD";
    CurrencyCode["Thb"] = "THB";
    CurrencyCode["Tzs"] = "TZS";
    CurrencyCode["Ttd"] = "TTD";
    CurrencyCode["Tnd"] = "TND";
    CurrencyCode["Try"] = "TRY";
    CurrencyCode["Tmt"] = "TMT";
    CurrencyCode["Ugx"] = "UGX";
    CurrencyCode["Uah"] = "UAH";
    CurrencyCode["Aed"] = "AED";
    CurrencyCode["Uyu"] = "UYU";
    CurrencyCode["Uzs"] = "UZS";
    CurrencyCode["Vuv"] = "VUV";
    CurrencyCode["Vef"] = "VEF";
    CurrencyCode["Vnd"] = "VND";
    CurrencyCode["Xof"] = "XOF";
    CurrencyCode["Yer"] = "YER";
    CurrencyCode["Zmw"] = "ZMW";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/decorator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react/index.js"));
var hoist_non_react_statics_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));
var hooks_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/hooks.js");
function withI18n(i18nOptions) {
    return function (WrappedComponent) {
        function WithTranslations(props) {
            var _a = tslib_1.__read(hooks_1.useI18n(i18nOptions), 2), i18n = _a[0], ShareTranslations = _a[1];
            return (react_1.default.createElement(ShareTranslations, null,
                react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, props, { i18n: i18n }))));
        }
        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        WithTranslations.displayName = "withI18n(" + wrappedComponentName + ")";
        return hoist_non_react_statics_1.default(WithTranslations, WrappedComponent);
    };
}
exports.withI18n = withI18n;


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/errors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var MissingTranslationError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingTranslationError, _super);
    function MissingTranslationError(key) {
        return _super.call(this, "Missing translation for key: " + key) || this;
    }
    return MissingTranslationError;
}(Error));
exports.MissingTranslationError = MissingTranslationError;
var MissingReplacementError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingReplacementError, _super);
    function MissingReplacementError(replacement, replacements) {
        if (replacements === void 0) { replacements = {}; }
        var _this = this;
        var errorMessage = '';
        var replacementKeys = Object.keys(replacements);
        if (replacementKeys.length < 1) {
            errorMessage = "No replacement found for key '" + replacement + "' (and no replacements were passed in).";
        }
        else {
            errorMessage = "No replacement found for key '" + replacement + "'. The following replacements were passed: " + replacementKeys
                .map(function (key) { return "'" + key + "'"; })
                .join(', ');
        }
        _this = _super.call(this, errorMessage) || this;
        return _this;
    }
    return MissingReplacementError;
}(Error));
exports.MissingReplacementError = MissingReplacementError;
var MissingCurrencyCodeError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingCurrencyCodeError, _super);
    function MissingCurrencyCodeError(additionalMessage) {
        if (additionalMessage === void 0) { additionalMessage = ''; }
        var _this = this;
        var baseErrorMessage = 'No currency code provided.';
        _this = _super.call(this, additionalMessage === ''
            ? baseErrorMessage
            : baseErrorMessage + " " + additionalMessage) || this;
        return _this;
    }
    return MissingCurrencyCodeError;
}(Error));
exports.MissingCurrencyCodeError = MissingCurrencyCodeError;
var MissingCountryError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingCountryError, _super);
    function MissingCountryError(additionalMessage) {
        if (additionalMessage === void 0) { additionalMessage = ''; }
        var _this = this;
        var baseErrorMessage = 'No country code provided.';
        _this = _super.call(this, additionalMessage === ''
            ? baseErrorMessage
            : baseErrorMessage + " " + additionalMessage) || this;
        return _this;
    }
    return MissingCountryError;
}(Error));
exports.MissingCountryError = MissingCountryError;


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/hooks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react/index.js"));
var react_hooks_1 = __webpack_require__("./node_modules/@shopify/react-hooks/dist/index.js");
var i18n_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/i18n.js");
var context_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/context.js");
function useI18n(options) {
    var manager = react_1.default.useContext(context_1.I18nContext);
    if (manager == null) {
        throw new Error('Missing i18n manager. Make sure to use an <I18nContext.Provider /> somewhere in your React tree.');
    }
    var registerOptions = react_1.default.useRef(options);
    if (shouldRegister(registerOptions.current) !== shouldRegister(options)) {
        throw new Error('You switched between providing registration options and not providing them, which is not supported.');
    }
    // Yes, this would usually be dangerous. But just above this line, we check to make
    // sure that they never switch from the case where `options == null` to `options != null`,
    // so we know that a given use of this hook will only ever hit one of these two cases.
    /* eslint-disable react-hooks/rules-of-hooks */
    if (options == null) {
        return useSimpleI18n(manager);
    }
    else {
        return useComplexI18n(options, manager);
    }
    /* eslint-enable react-hooks/rules-of-hooks */
}
exports.useI18n = useI18n;
function useComplexI18n(_a, manager) {
    var id = _a.id, fallback = _a.fallback, translations = _a.translations;
    var managerRef = react_1.default.useRef(null);
    var unsubscribeRef = react_1.default.useRef(noop);
    var parentIds = react_1.default.useContext(context_1.I18nIdsContext);
    // Parent IDs can only change when a parent gets added/ removed,
    // which would cause the component using `useI18n` to unmount.
    // We also don't support the `id` changing between renders. For these
    // reasons, it's safe to just store the IDs once and never let them change.
    var ids = react_hooks_1.useLazyRef(function () { return (id ? tslib_1.__spread([id], parentIds) : parentIds); });
    // When the manager changes, we need to do the following IMMEDIATELY (i.e.,
    // not in a useEffect callback):
    //
    // 1. Register the component’s translations. This ensures that the first render gets
    //    the synchronous translations, if available.
    // 2. Unsubscribe from changes to a previous manager.
    // 3. Subscribe to changes from the new manager. This ensures that if the subscription
    //    is updated between render and `useEffect`, the state update is not lost.
    if (manager !== managerRef.current) {
        managerRef.current = manager;
        unsubscribeRef.current();
        unsubscribeRef.current = manager.subscribe(ids.current, function (_a, details) {
            var translations = _a.translations, loading = _a.loading;
            var newI18n = new i18n_1.I18n(translations, tslib_1.__assign({}, details, { loading: loading }));
            i18nRef.current = newI18n;
            setI18n(newI18n);
        });
        if (id && (translations || fallback)) {
            manager.register({ id: id, translations: translations, fallback: fallback });
        }
    }
    var _b = tslib_1.__read(react_1.default.useState(function () {
        var managerState = manager.state(ids.current);
        var translations = managerState.translations, loading = managerState.loading;
        return new i18n_1.I18n(translations, tslib_1.__assign({}, manager.details, { loading: loading }));
    }), 2), i18n = _b[0], setI18n = _b[1];
    var i18nRef = react_1.default.useRef(i18n);
    react_1.default.useEffect(function () {
        return unsubscribeRef.current;
    }, []);
    // We use refs in this component so that it never changes. If this component
    // is regenerated, it will unmount the entire tree of the previous component,
    // which is usually not desirable. Technically, this does leave surface area
    // for a bug to sneak in: if the component that renders this does so inside
    // a component that blocks the update from passing down, nothing will force
    // this component to re-render, so no descendants will get the new ids/ i18n
    // value. Because we don't actually have any such cases, we're OK with this
    // for now.
    var shareTranslationsComponent = react_hooks_1.useLazyRef(function () {
        return function ShareTranslations(_a) {
            var children = _a.children;
            return (react_1.default.createElement(context_1.I18nIdsContext.Provider, { value: ids.current },
                react_1.default.createElement(context_1.I18nParentContext.Provider, { value: i18nRef.current }, children)));
        };
    });
    return [i18n, shareTranslationsComponent.current];
}
function useSimpleI18n(manager) {
    var i18n = react_1.default.useContext(context_1.I18nParentContext) || new i18n_1.I18n([], manager.details);
    return [i18n, IdentityComponent];
}
function IdentityComponent(_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null, children);
}
function shouldRegister(_a) {
    var _b = _a === void 0 ? {} : _a, fallback = _b.fallback, translations = _b.translations;
    return fallback != null || translations != null;
}
function noop() { }


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/i18n.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var dates_1 = __webpack_require__("./node_modules/@shopify/dates/dist/index.js");
var function_enhancers_1 = __webpack_require__("./node_modules/@shopify/function-enhancers/dist/index.js");
var decorators_1 = __webpack_require__("./node_modules/@shopify/decorators/dist/index.js");
var i18n_1 = __webpack_require__("./node_modules/@shopify/i18n/dist/index.js");
var types_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/types.js");
var constants_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/constants/index.js");
var errors_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/errors.js");
var utilities_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/utilities/index.js");
// Used for currecies that don't use fractional units (eg. JPY)
var DECIMAL_NOT_SUPPORTED = 'N/A';
var PERIOD = '.';
var DECIMAL_VALUE_FOR_CURRENCIES_WITHOUT_DECIMALS = '00';
var memoizedDateTimeFormatter = function_enhancers_1.memoize(dateTimeFormatter, function (locale, options) {
    if (options === void 0) { options = {}; }
    return "" + locale + JSON.stringify(options);
});
var I18n = /** @class */ (function () {
    function I18n(translations, _a) {
        var locale = _a.locale, currency = _a.currency, timezone = _a.timezone, country = _a.country, _b = _a.pseudolocalize, pseudolocalize = _b === void 0 ? false : _b, onError = _a.onError, loading = _a.loading;
        var _this = this;
        this.translations = translations;
        this.getCurrencySymbol = function (currencyCode) {
            var currency = currencyCode || _this.defaultCurrency;
            if (currency == null) {
                throw new errors_1.MissingCurrencyCodeError('formatCurrency cannot be called without a currency code.');
            }
            return _this.getCurrencySymbolLocalized(_this.locale, currency);
        };
        this.locale = locale;
        this.defaultCountry = country;
        this.defaultCurrency = currency;
        this.defaultTimezone = timezone;
        this.pseudolocalize = pseudolocalize;
        this.onError = onError || defaultOnError;
        this.loading = loading || false;
    }
    Object.defineProperty(I18n.prototype, "language", {
        get: function () {
            return i18n_1.languageFromLocale(this.locale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18n.prototype, "region", {
        get: function () {
            return i18n_1.regionFromLocale(this.locale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18n.prototype, "countryCode", {
        /**
         * @deprecated Use I18n#region instead.
         */
        get: function () {
            return i18n_1.regionFromLocale(this.locale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18n.prototype, "languageDirection", {
        get: function () {
            return constants_1.RTL_LANGUAGES.includes(this.language)
                ? types_1.LanguageDirection.Rtl
                : types_1.LanguageDirection.Ltr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18n.prototype, "isRtlLanguage", {
        get: function () {
            return this.languageDirection === types_1.LanguageDirection.Rtl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18n.prototype, "isLtrLanguage", {
        get: function () {
            return this.languageDirection === types_1.LanguageDirection.Ltr;
        },
        enumerable: true,
        configurable: true
    });
    I18n.prototype.translate = function (id, optionsOrReplacements, replacements) {
        var pseudolocalize = this.pseudolocalize;
        var normalizedOptions;
        if (optionsOrReplacements == null) {
            normalizedOptions = { pseudotranslate: pseudolocalize };
        }
        else if (isTranslateOptions(optionsOrReplacements)) {
            normalizedOptions = tslib_1.__assign({}, optionsOrReplacements, { replacements: replacements, pseudotranslate: pseudolocalize });
        }
        else {
            normalizedOptions = {
                replacements: optionsOrReplacements,
                pseudotranslate: pseudolocalize,
            };
        }
        try {
            return utilities_1.translate(id, normalizedOptions, this.translations, this.locale);
        }
        catch (error) {
            this.onError(error);
            return '';
        }
    };
    I18n.prototype.getTranslationTree = function (id, replacements) {
        try {
            if (!replacements) {
                return utilities_1.getTranslationTree(id, this.translations, this.locale);
            }
            return utilities_1.getTranslationTree(id, this.translations, this.locale, replacements);
        }
        catch (error) {
            this.onError(error);
            return '';
        }
    };
    I18n.prototype.translationKeyExists = function (id) {
        try {
            this.translate(id);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    I18n.prototype.formatNumber = function (amount, _a) {
        if (_a === void 0) { _a = {}; }
        var as = _a.as, precision = _a.precision, options = tslib_1.__rest(_a, ["as", "precision"]);
        var _b = this, locale = _b.locale, currency = _b.defaultCurrency;
        if (as === 'currency' && currency == null && options.currency == null) {
            this.onError(new errors_1.MissingCurrencyCodeError("formatNumber(amount, {as: 'currency'}) cannot be called without a currency code."));
            return '';
        }
        return utilities_1.memoizedNumberFormatter(locale, tslib_1.__assign({ style: as, maximumFractionDigits: precision, currency: currency }, options)).format(amount);
    };
    I18n.prototype.unformatNumber = function (input) {
        var decimalSymbol = this.numberDecimalSymbol();
        var normalizedValue = normalizedNumber(input, decimalSymbol);
        return normalizedValue === '' ? '' : parseFloat(normalizedValue).toString();
    };
    I18n.prototype.formatCurrency = function (amount, _a) {
        if (_a === void 0) { _a = {}; }
        var form = _a.form, options = tslib_1.__rest(_a, ["form"]);
        if (form === 'explicit') {
            return this.formatCurrencyExplicit(amount, options);
        }
        else if (form === 'short') {
            return this.formatCurrencyShort(amount, options);
        }
        return this.formatNumber(amount, tslib_1.__assign({ as: 'currency' }, options));
    };
    I18n.prototype.unformatCurrency = function (input, currencyCode) {
        // This decimal symbol will always be '.' regardless of the locale
        // since it's our internal representation of the string
        var decimalSymbol = this.currencyDecimalSymbol(currencyCode);
        var expectedDecimalSymbol = decimalSymbol === DECIMAL_NOT_SUPPORTED ? PERIOD : decimalSymbol;
        var normalizedValue = normalizedNumber(input, expectedDecimalSymbol);
        if (normalizedValue === '') {
            return '';
        }
        if (decimalSymbol === DECIMAL_NOT_SUPPORTED) {
            var roundedAmount = parseFloat(normalizedValue).toFixed(0);
            return roundedAmount + "." + DECIMAL_VALUE_FOR_CURRENCIES_WITHOUT_DECIMALS;
        }
        var decimalPlaces = constants_1.currencyDecimalPlaces.get(currencyCode.toUpperCase()) ||
            constants_1.DEFAULT_DECIMAL_PLACES;
        return parseFloat(normalizedValue).toFixed(decimalPlaces);
    };
    I18n.prototype.formatPercentage = function (amount, options) {
        if (options === void 0) { options = {}; }
        return this.formatNumber(amount, tslib_1.__assign({ as: 'percent' }, options));
    };
    I18n.prototype.formatDate = function (date, options) {
        if (options === void 0) { options = {}; }
        var _a = this, locale = _a.locale, defaultTimezone = _a.defaultTimezone;
        var _b = options.timeZone, timeZone = _b === void 0 ? defaultTimezone : _b;
        // Etc/GMT+12 is not supported in most browsers and there is no equivalent fallback
        if (timeZone === 'Etc/GMT+12') {
            var adjustedDate = new Date(date.valueOf() - 12 * 60 * 60 * 1000);
            return this.formatDate(adjustedDate, tslib_1.__assign({}, options, { timeZone: 'UTC' }));
        }
        var _c = options || {}, _d = _c.style, style = _d === void 0 ? undefined : _d, formatOptions = tslib_1.__rest(_c, ["style"]);
        if (style) {
            return style === constants_1.DateStyle.Humanize
                ? this.humanizeDate(date, formatOptions)
                : this.formatDate(date, tslib_1.__assign({}, formatOptions, constants_1.dateStyle[style]));
        }
        return memoizedDateTimeFormatter(locale, tslib_1.__assign({ timeZone: timeZone }, formatOptions)).format(date);
    };
    I18n.prototype.ordinal = function (amount) {
        var locale = this.locale;
        var group = utilities_1.memoizedPluralRules(locale, { type: 'ordinal' }).select(amount);
        return this.translate(group, { scope: 'ordinal' }, { amount: amount });
    };
    I18n.prototype.weekStartDay = function (argCountry) {
        var country = argCountry || this.defaultCountry;
        if (!country) {
            throw new errors_1.MissingCountryError('weekStartDay() cannot be called without a country code.');
        }
        return constants_1.WEEK_START_DAYS.get(country) || constants_1.DEFAULT_WEEK_START_DAY;
    };
    I18n.prototype.getCurrencySymbolLocalized = function (locale, currency) {
        return utilities_1.getCurrencySymbol(locale, { currency: currency });
    };
    I18n.prototype.formatName = function (firstName, lastName, options) {
        if (!firstName) {
            return lastName || '';
        }
        if (!lastName) {
            return firstName;
        }
        var isFullName = Boolean(options && options.full);
        var customNameFormatter = constants_1.CUSTOM_NAME_FORMATTERS.get(this.locale) ||
            constants_1.CUSTOM_NAME_FORMATTERS.get(this.language);
        if (customNameFormatter) {
            return customNameFormatter(firstName, lastName, isFullName);
        }
        if (isFullName) {
            return firstName + " " + lastName;
        }
        return firstName;
    };
    I18n.prototype.formatCurrencyExplicit = function (amount, options) {
        if (options === void 0) { options = {}; }
        var value = this.formatCurrencyShort(amount, options);
        var isoCode = options.currency || this.defaultCurrency || '';
        if (value.includes(isoCode)) {
            return value;
        }
        return value + " " + isoCode;
    };
    I18n.prototype.formatCurrencyShort = function (amount, options) {
        if (options === void 0) { options = {}; }
        var locale = this.locale;
        var shortSymbol = this.getShortCurrencySymbol(options.currency);
        var adjustedPrecision = options.precision;
        if (adjustedPrecision === undefined) {
            var currency = options.currency || this.defaultCurrency || '';
            adjustedPrecision = constants_1.currencyDecimalPlaces.get(currency.toUpperCase());
        }
        var formattedAmount = utilities_1.memoizedNumberFormatter(locale, tslib_1.__assign({ style: 'decimal', minimumFractionDigits: adjustedPrecision, maximumFractionDigits: adjustedPrecision }, options)).format(amount);
        return shortSymbol.prefixed
            ? "" + shortSymbol.symbol + formattedAmount
            : "" + formattedAmount + shortSymbol.symbol;
    };
    // Intl.NumberFormat sometimes annotates the "currency symbol" with a country code.
    // For example, in locale 'fr-FR', 'USD' is given the "symbol" of " $US".
    // This method strips out the country-code annotation, if there is one.
    // (So, for 'fr-FR' and 'USD', the return value would be " $").
    //
    // For other currencies, e.g. CHF and OMR, the "symbol" is the ISO currency code.
    // In those cases, we return the full currency code without stripping the country.
    I18n.prototype.getShortCurrencySymbol = function (currencyCode) {
        if (currencyCode === void 0) { currencyCode = this.defaultCurrency || ''; }
        var currency = currencyCode || this.defaultCurrency || '';
        var regionCode = currency.substring(0, 2);
        var info = this.getCurrencySymbol(currency);
        var shortSymbol = info.symbol.replace(regionCode, '');
        var alphabeticCharacters = /[A-Za-zÀ-ÖØ-öø-ÿĀ-ɏḂ-ỳ]/;
        return shortSymbol.match(alphabeticCharacters)
            ? info
            : { symbol: shortSymbol, prefixed: info.prefixed };
    };
    I18n.prototype.humanizeDate = function (date, options) {
        if (dates_1.isLessThanOneMinuteAgo(date)) {
            return this.translate('date.humanize.lessThanOneMinuteAgo');
        }
        if (dates_1.isLessThanOneHourAgo(date)) {
            var now = new Date();
            var minutes = Math.floor((now.getTime() - date.getTime()) / dates_1.TimeUnit.Minute);
            return this.translate('date.humanize.lessThanOneHourAgo', {
                count: minutes,
            });
        }
        var time = this.formatDate(date, tslib_1.__assign({}, options, { hour: 'numeric', minute: '2-digit' })).toLocaleLowerCase();
        if (dates_1.isToday(date)) {
            return time;
        }
        if (dates_1.isYesterday(date)) {
            return this.translate('date.humanize.yesterday', { time: time });
        }
        if (dates_1.isLessThanOneWeekAgo(date)) {
            var weekday = this.formatDate(date, tslib_1.__assign({}, options, { weekday: 'long' }));
            return this.translate('date.humanize.lessThanOneWeekAgo', {
                weekday: weekday,
                time: time,
            });
        }
        if (dates_1.isLessThanOneYearAgo(date)) {
            var monthDay = this.formatDate(date, tslib_1.__assign({}, options, { month: 'short', day: 'numeric' }));
            return this.translate('date.humanize.lessThanOneYearAgo', {
                date: monthDay,
                time: time,
            });
        }
        return this.formatDate(date, tslib_1.__assign({}, options, { style: constants_1.DateStyle.Short }));
    };
    I18n.prototype.currencyDecimalSymbol = function (currencyCode) {
        var digitOrSpace = /\s|\d/g;
        var symbol = this.getCurrencySymbolLocalized(this.locale, currencyCode).symbol;
        var templatedInput = 1;
        var decimal = this.formatCurrency(templatedInput, {
            currency: currencyCode,
        })
            .replace(symbol, '')
            .replace(digitOrSpace, '');
        return decimal.length === 0 ? DECIMAL_NOT_SUPPORTED : decimal;
    };
    I18n.prototype.numberDecimalSymbol = function () {
        return this.formatNumber(1.1, {
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
        })[1];
    };
    tslib_1.__decorate([
        decorators_1.memoize(function (currency, locale) { return "" + locale + currency; })
    ], I18n.prototype, "getCurrencySymbolLocalized", null);
    return I18n;
}());
exports.I18n = I18n;
function normalizedNumber(input, expectedDecimal) {
    var nonDigits = /\D/g;
    // For locales that use non-period symbols as the decimal symbol, users may still input a period
    // and expect it to be treated as the decimal symbol for their locale.
    var hasExpectedDecimalSymbol = input.lastIndexOf(expectedDecimal) !== -1;
    var hasPeriodAsDecimal = input.lastIndexOf(PERIOD) !== -1;
    var usesPeriodDecimal = !hasExpectedDecimalSymbol && hasPeriodAsDecimal;
    var decimalSymbolToUse = usesPeriodDecimal ? PERIOD : expectedDecimal;
    var lastDecimalIndex = input.lastIndexOf(decimalSymbolToUse);
    var integerValue = input
        .substring(0, lastDecimalIndex)
        .replace(nonDigits, '');
    var decimalValue = input
        .substring(lastDecimalIndex + 1)
        .replace(nonDigits, '');
    var normalizedDecimal = lastDecimalIndex === -1 ? '' : PERIOD;
    var normalizedValue = "" + integerValue + normalizedDecimal + decimalValue;
    return normalizedValue === '' || normalizedValue === PERIOD
        ? ''
        : normalizedValue;
}
function isTranslateOptions(object) {
    return 'scope' in object;
}
function defaultOnError(error) {
    throw error;
}
function dateTimeFormatter(locale, options) {
    if (options === void 0) { options = {}; }
    return new Intl.DateTimeFormat(locale, options);
}


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var manager_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/manager.js");
exports.I18nManager = manager_1.I18nManager;
var context_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/context.js");
exports.I18nContext = context_1.I18nContext;
var i18n_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/i18n.js");
exports.I18n = i18n_1.I18n;
var hooks_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/hooks.js");
exports.useI18n = hooks_1.useI18n;
var decorator_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/decorator.js");
exports.withI18n = decorator_1.withI18n;
var utilities_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/utilities/index.js");
exports.translate = utilities_1.translate;
var types_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/types.js");
exports.LanguageDirection = types_1.LanguageDirection;
exports.CurrencyCode = types_1.CurrencyCode;
var constants_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/constants/index.js");
exports.currencyDecimalPlaces = constants_1.currencyDecimalPlaces;
exports.DEFAULT_DECIMAL_PLACES = constants_1.DEFAULT_DECIMAL_PLACES;
exports.DateStyle = constants_1.DateStyle;
exports.Weekday = constants_1.Weekday;


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var I18nManager = /** @class */ (function () {
    function I18nManager(details, initialTranslations) {
        var e_1, _a;
        if (initialTranslations === void 0) { initialTranslations = {}; }
        this.details = details;
        this.translationGetters = new Map();
        this.fallbacks = new Map();
        this.translations = new Map();
        this.asyncTranslationIds = new Set();
        this.subscriptions = new Map();
        this.translationPromises = new Map();
        this.idsToUpdate = new Set();
        try {
            for (var _b = tslib_1.__values(Object.entries(initialTranslations)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), id = _d[0], translation = _d[1];
                this.translations.set(id, translation);
                this.asyncTranslationIds.add(id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(I18nManager.prototype, "loading", {
        get: function () {
            return this.translationPromises.size > 0;
        },
        enumerable: true,
        configurable: true
    });
    I18nManager.prototype.resolve = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(tslib_1.__spread(this.translationPromises.values()))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    I18nManager.prototype.extract = function () {
        var _this = this;
        return tslib_1.__spread(this.asyncTranslationIds).reduce(function (extracted, id) {
            var _a;
            return (tslib_1.__assign({}, extracted, (_a = {}, _a[id] = _this.translations.get(id), _a)));
        }, {});
    };
    I18nManager.prototype.register = function (_a) {
        var id = _a.id, translations = _a.translations, fallback = _a.fallback;
        if (!this.fallbacks.has(id)) {
            this.fallbacks.set(id, fallback);
        }
        if (this.details.fallbackLocale != null && fallback != null) {
            var translationId = getTranslationId(id, this.details.fallbackLocale);
            if (!this.translations.has(translationId)) {
                this.translations.set(translationId, fallback);
            }
        }
        if (this.translationGetters.has(id)) {
            return;
        }
        var translationGetter = translations
            ? normalizeTranslationGetter(translations)
            : noop;
        this.setTranslations(id, translationGetter);
    };
    I18nManager.prototype.state = function (ids) {
        var _this = this;
        var _a = this.details, locale = _a.locale, fallbackLocale = _a.fallbackLocale;
        var possibleLocales = getPossibleLocales(locale);
        var omitFallbacks = fallbackLocale != null && possibleLocales.includes(fallbackLocale);
        var loading = false;
        var hasUnresolvedTranslations = false;
        var translations = ids.reduce(function (otherTranslations, id) {
            var e_2, _a;
            var translationsForId = [];
            try {
                for (var possibleLocales_1 = tslib_1.__values(possibleLocales), possibleLocales_1_1 = possibleLocales_1.next(); !possibleLocales_1_1.done; possibleLocales_1_1 = possibleLocales_1.next()) {
                    var locale_1 = possibleLocales_1_1.value;
                    var translationId = getTranslationId(id, locale_1);
                    var translation = _this.translations.get(translationId);
                    if (translation == null) {
                        if (_this.translationPromises.has(translationId)) {
                            hasUnresolvedTranslations = true;
                        }
                    }
                    else {
                        translationsForId.push(translation);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (possibleLocales_1_1 && !possibleLocales_1_1.done && (_a = possibleLocales_1.return)) _a.call(possibleLocales_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (translationsForId.length === 0 && hasUnresolvedTranslations) {
                loading = true;
            }
            if (!omitFallbacks) {
                var fallback = _this.fallbacks.get(id);
                if (fallback != null) {
                    translationsForId.push(fallback);
                }
            }
            return tslib_1.__spread(otherTranslations, translationsForId);
        }, []);
        return { loading: loading, translations: translations };
    };
    I18nManager.prototype.subscribe = function (ids, subscriber) {
        var _this = this;
        this.subscriptions.set(subscriber, ids);
        return function () {
            _this.subscriptions.delete(subscriber);
        };
    };
    I18nManager.prototype.update = function (details) {
        var e_3, _a, e_4, _b;
        this.details = details;
        try {
            for (var _c = tslib_1.__values(this.translationGetters), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = tslib_1.__read(_d.value, 2), id = _e[0], translationGetter = _e[1];
                this.setTranslations(id, translationGetter);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _f = tslib_1.__values(this.subscriptions), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = tslib_1.__read(_g.value, 2), subscriber = _h[0], ids = _h[1];
                subscriber(this.state(ids), this.details);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    I18nManager.prototype.setTranslations = function (id, translationGetter) {
        var _this = this;
        var e_5, _a;
        this.translationGetters.set(id, translationGetter);
        var _loop_1 = function (locale) {
            var translationId = getTranslationId(id, locale);
            if (this_1.translations.has(translationId)) {
                return "continue";
            }
            var translations = translationGetter(locale);
            if (isPromise(translations)) {
                var promise = translations
                    .then(function (result) {
                    _this.translationPromises.delete(translationId);
                    _this.translations.set(translationId, result);
                    _this.asyncTranslationIds.add(translationId);
                    if (result != null) {
                        _this.updateSubscribersForId(id);
                    }
                })
                    .catch(function () {
                    _this.translationPromises.delete(translationId);
                    _this.translations.set(translationId, undefined);
                    _this.asyncTranslationIds.add(translationId);
                });
                this_1.translationPromises.set(translationId, promise);
            }
            else {
                this_1.translations.set(translationId, translations);
            }
        };
        var this_1 = this;
        try {
            for (var _b = tslib_1.__values(getPossibleLocales(this.details.locale)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var locale = _c.value;
                _loop_1(locale);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    I18nManager.prototype.updateSubscribersForId = function (id) {
        var _this = this;
        this.idsToUpdate.add(id);
        if (this.enqueuedUpdate != null) {
            return;
        }
        var isBrowser = typeof window !== 'undefined';
        var enqueue = isBrowser ? window.requestAnimationFrame : setImmediate;
        this.enqueuedUpdate = enqueue(function () {
            var e_6, _a;
            delete _this.enqueuedUpdate;
            var idsToUpdate = tslib_1.__spread(_this.idsToUpdate);
            _this.idsToUpdate.clear();
            try {
                for (var _b = tslib_1.__values(_this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 2), subscriber = _d[0], ids = _d[1];
                    if (ids.some(function (id) { return idsToUpdate.includes(id); })) {
                        subscriber(_this.state(ids), _this.details);
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        });
    };
    return I18nManager;
}());
exports.I18nManager = I18nManager;
function getPossibleLocales(locale) {
    var split = locale.split('-');
    return split.length > 1
        ? [split[0] + "-" + split[1].toUpperCase(), split[0]]
        : [locale];
}
function isPromise(maybePromise) {
    return maybePromise != null && maybePromise.then != null;
}
function getTranslationId(id, locale) {
    return id + "__" + locale;
}
function noop() {
    return undefined;
}
function normalizeTranslationGetter(translations) {
    return typeof translations === 'function'
        ? translations
        : function (locale) { return translations[locale]; };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/types.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LanguageDirection;
(function (LanguageDirection) {
    LanguageDirection[LanguageDirection["Rtl"] = 0] = "Rtl";
    LanguageDirection[LanguageDirection["Ltr"] = 1] = "Ltr";
})(LanguageDirection = exports.LanguageDirection || (exports.LanguageDirection = {}));
var currencyCode_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/currencyCode.js");
exports.CurrencyCode = currencyCode_1.CurrencyCode;


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/utilities/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var money_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/utilities/money.js");
exports.getCurrencySymbol = money_1.getCurrencySymbol;
var noop_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/utilities/noop.js");
exports.noop = noop_1.noop;
var translate_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/utilities/translate.js");
exports.PSEUDOTRANSLATE_OPTIONS = translate_1.PSEUDOTRANSLATE_OPTIONS;
exports.translate = translate_1.translate;
exports.getTranslationTree = translate_1.getTranslationTree;
exports.memoizedNumberFormatter = translate_1.memoizedNumberFormatter;
exports.memoizedPluralRules = translate_1.memoizedPluralRules;


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/utilities/money.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
function getCurrencySymbol(locale, options) {
    var delimiters = ',.';
    var directionControlCharacters = new RegExp("[\u200E\u200F]", 'u');
    var numReg = new RegExp("0[" + delimiters + "]*0*");
    var currencyStringRaw = formatCurrency(0, locale, options);
    var currencyString = currencyStringRaw.replace(directionControlCharacters, '');
    var matchResult = currencyString.match(numReg);
    if (!matchResult) {
        throw new Error("Number input in locale " + locale + " is currently not supported.");
    }
    var formattedAmount = matchResult[0];
    var _a = tslib_1.__read(currencyString.split(formattedAmount), 2), currencyPrefix = _a[0], currencySuffix = _a[1];
    var elements = {
        symbol: currencyPrefix || currencySuffix,
        prefixed: currencyPrefix !== '',
    };
    return elements;
}
exports.getCurrencySymbol = getCurrencySymbol;
function formatCurrency(amount, locale, options) {
    return new Intl.NumberFormat(locale, tslib_1.__assign({ style: 'currency' }, options)).format(amount);
}


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/utilities/noop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;


/***/ }),

/***/ "./node_modules/@shopify/react-i18n/dist/utilities/translate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react/index.js"));
var function_enhancers_1 = __webpack_require__("./node_modules/@shopify/function-enhancers/dist/index.js");
var i18n_1 = __webpack_require__("./node_modules/@shopify/i18n/dist/index.js");
var errors_1 = __webpack_require__("./node_modules/@shopify/react-i18n/dist/errors.js");
var REPLACE_REGEX = /{([^}]*)}/g;
var MISSING_TRANSLATION = Symbol('Missing translation');
var PLURALIZATION_KEY_NAME = 'count';
var SEPARATOR = '.';
exports.PSEUDOTRANSLATE_OPTIONS = {
    startDelimiter: '{',
    endDelimiter: '}',
    prepend: '[!!',
    append: '!!]',
};
function numberFormatter(locale, options) {
    if (options === void 0) { options = {}; }
    return new Intl.NumberFormat(locale, options);
}
exports.memoizedNumberFormatter = function_enhancers_1.memoize(numberFormatter, function (locale, options) {
    if (options === void 0) { options = {}; }
    return "" + locale + JSON.stringify(options);
});
function pluralRules(locale, options) {
    if (options === void 0) { options = {}; }
    return new Intl.PluralRules(locale, options);
}
exports.memoizedPluralRules = function_enhancers_1.memoize(pluralRules, function (locale, options) {
    if (options === void 0) { options = {}; }
    return "" + locale + JSON.stringify(options);
});
function getTranslationTree(id, translations, locale, replacements) {
    var e_1, _a, e_2, _b;
    var normalizedTranslations = Array.isArray(translations)
        ? translations
        : [translations];
    var result;
    try {
        for (var normalizedTranslations_1 = tslib_1.__values(normalizedTranslations), normalizedTranslations_1_1 = normalizedTranslations_1.next(); !normalizedTranslations_1_1.done; normalizedTranslations_1_1 = normalizedTranslations_1.next()) {
            var translationDictionary = normalizedTranslations_1_1.value;
            result = translationDictionary;
            try {
                for (var _c = tslib_1.__values(id.split(SEPARATOR)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var part = _d.value;
                    result = result[part];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (result) {
                if (replacements) {
                    return typeof result === 'string'
                        ? updateStringWithReplacements(result, replacements)
                        : updateTreeWithReplacements(result, locale, replacements);
                }
                return result;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (normalizedTranslations_1_1 && !normalizedTranslations_1_1.done && (_a = normalizedTranslations_1.return)) _a.call(normalizedTranslations_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    throw new errors_1.MissingTranslationError(id);
}
exports.getTranslationTree = getTranslationTree;
function translate(id, options, translations, locale) {
    var e_3, _a;
    var scope = options.scope, replacements = options.replacements, pseudotranslate = options.pseudotranslate;
    var normalizedTranslations = Array.isArray(translations)
        ? translations
        : [translations];
    var normalizedId = normalizeIdentifier(id, scope);
    try {
        for (var normalizedTranslations_2 = tslib_1.__values(normalizedTranslations), normalizedTranslations_2_1 = normalizedTranslations_2.next(); !normalizedTranslations_2_1.done; normalizedTranslations_2_1 = normalizedTranslations_2.next()) {
            var translationDictionary = normalizedTranslations_2_1.value;
            var result = translateWithDictionary(normalizedId, translationDictionary, locale, replacements, { pseudotranslate: pseudotranslate });
            if (result !== MISSING_TRANSLATION) {
                return result;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (normalizedTranslations_2_1 && !normalizedTranslations_2_1.done && (_a = normalizedTranslations_2.return)) _a.call(normalizedTranslations_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
    throw new errors_1.MissingTranslationError(id);
}
exports.translate = translate;
function translateWithDictionary(id, translations, locale, replacements, _a) {
    var _b = (_a === void 0 ? {} : _a).pseudotranslate, pseudotranslate = _b === void 0 ? false : _b;
    var e_4, _c;
    var result = translations;
    try {
        for (var _d = tslib_1.__values(id.split(SEPARATOR)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var part = _e.value;
            if (result == null || typeof result !== 'object') {
                return MISSING_TRANSLATION;
            }
            result = result[part];
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
        }
        finally { if (e_4) throw e_4.error; }
    }
    var additionalReplacements = {};
    if (typeof result === 'object' &&
        replacements != null &&
        Object.prototype.hasOwnProperty.call(replacements, PLURALIZATION_KEY_NAME)) {
        var count = replacements[PLURALIZATION_KEY_NAME];
        if (typeof count === 'number') {
            var group = exports.memoizedPluralRules(locale).select(count);
            result = result[group];
            additionalReplacements[PLURALIZATION_KEY_NAME] = exports.memoizedNumberFormatter(locale).format(count);
        }
    }
    var processedString = typeof result === 'string' && pseudotranslate
        ? i18n_1.pseudotranslate(result, tslib_1.__assign({}, exports.PSEUDOTRANSLATE_OPTIONS, { toLocale: typeof pseudotranslate === 'boolean' ? undefined : pseudotranslate }))
        : result;
    if (typeof processedString === 'string') {
        return updateStringWithReplacements(processedString, tslib_1.__assign({}, replacements, additionalReplacements));
    }
    else {
        return MISSING_TRANSLATION;
    }
}
function updateStringWithReplacements(str, replacements) {
    if (replacements === void 0) { replacements = {}; }
    var replaceFinder = /([^{]*)({([^}]*)})?/g;
    var allReplacementsArePrimitives = Object.keys(replacements).every(function (key) { return typeof replacements[key] !== 'object'; });
    if (allReplacementsArePrimitives) {
        return str.replace(REPLACE_REGEX, function (match) {
            var replacement = match.substring(1, match.length - 1);
            if (!Object.prototype.hasOwnProperty.call(replacements, replacement)) {
                throw new errors_1.MissingReplacementError(replacement, replacements);
            }
            return replacements[replacement];
        });
    }
    else {
        var pieces = [];
        var match = replaceFinder.exec(str);
        var matchIndex = 0;
        while (match) {
            var regularText = match[1];
            var replacement = match[3];
            if (match.index >= str.length) {
                break;
            }
            if (regularText) {
                pieces.push(regularText);
            }
            if (replacement) {
                if (!Object.prototype.hasOwnProperty.call(replacements, replacement)) {
                    throw new errors_1.MissingReplacementError(replacement, replacements);
                }
                matchIndex += 1;
                var finalReplacement = react_1.default.isValidElement(replacements[replacement])
                    ? react_1.default.cloneElement(replacements[replacement], { key: matchIndex })
                    : replacements[replacement];
                pieces.push(finalReplacement);
            }
            match = replaceFinder.exec(str);
        }
        replaceFinder.lastIndex = 0;
        return pieces;
    }
}
function normalizeIdentifier(id, scope) {
    if (scope == null) {
        return id;
    }
    return "" + (typeof scope === 'string' ? scope : scope.join(SEPARATOR)) + SEPARATOR + id;
}
function updateTreeWithReplacements(translationTree, locale, replacements) {
    if (Object.prototype.hasOwnProperty.call(replacements, PLURALIZATION_KEY_NAME)) {
        var count = replacements[PLURALIZATION_KEY_NAME];
        if (typeof count === 'number') {
            var group = exports.memoizedPluralRules(locale).select(count);
            if (typeof translationTree[group] === 'string') {
                return updateStringWithReplacements(translationTree[group], tslib_1.__assign({}, replacements, { PLURALIZATION_KEY_NAME: exports.memoizedNumberFormatter(locale).format(count) }));
            }
        }
    }
    return Object.keys(translationTree).reduce(function (acc, key) {
        var _a;
        return (tslib_1.__assign({}, acc, (_a = {}, _a[key] = typeof translationTree[key] === 'string'
            ? updateStringWithReplacements(translationTree[key], replacements)
            : updateTreeWithReplacements(translationTree[key], locale, replacements), _a)));
    }, {});
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__("./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__("./node_modules/object-assign/index.js"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.11.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),

/***/ "./node_modules/react/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/foo/translations/en.json
var en = __webpack_require__("./src/components/foo/translations/en.json");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@shopify/react-i18n/dist/index.js
var dist = __webpack_require__("./node_modules/@shopify/react-i18n/dist/index.js");

// CONCATENATED MODULE: ./src/components/foo/Foo.tsx



function Foo() {
  const [i18n] = Object(dist["useI18n"])({
    id: 'Foo_1fp4l',
    fallback: en,

    translations(locale) {
      const translations = ["fr"];

      if (translations.indexOf(locale) < 0) {
        return;
      }

      return (async () => {
        const dictionary = await __webpack_require__("./src/components/foo/translations lazy-once recursive ^\\.\\/.*\\.json$")(`./${locale}.json`);
        return dictionary && dictionary.default;
      })();
    }

  });
  return react_default.a.createElement("div", null, "Hello world: $", i18n.translate('lol'));
}
// CONCATENATED MODULE: ./src/app.ts

console.log(Foo);

/***/ }),

/***/ "./src/components/foo/translations lazy-once recursive ^\\.\\/.*\\.json$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": "./src/components/foo/translations/en.json",
	"./fr.json": "./src/components/foo/translations/fr.json"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(function(id) {
		return __webpack_require__.t(id, 3);;
	});
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/* lazy-once context | Foo_1fp4l-i18n */ "Foo_1fp4l-i18n").then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "./src/components/foo/translations lazy-once recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/components/foo/translations/en.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"lol\":\"lolzors\"}");

/***/ })

/******/ });
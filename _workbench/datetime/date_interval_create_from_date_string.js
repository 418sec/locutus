function date_interval_create_from_date_string (time) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: date_interval_create_from_date_string('+1 day');
    // *     returns 1: {}

    // Fix: need to check the example above


    // Is iteratable with foreach in PHP; this class is just put here for convenience, as there is no PHP function that returns it; it is just placed here as a related class, but to use it, one must take it out of this function
    // see http://en.wikipedia.org/wiki/ISO_8601#Durations
    function DatePeriod (start, interval, recurrences, options) { // DateTime, DateInterval, int, int
        // or start, interval, end, options
        // or isostr, options
        if (options) { // the only optional part in all 3 constructor forms
        }
    }
    DatePeriod.EXCLUDE_START_DATE = 1;



    function DateInterval (interval_spec) { // string in http://en.wikipedia.org/wiki/ISO_8601#Time_intervals format
        
        return false; // On failure
    }
    DateInterval.prototype = {
        constructor: DateInterval,
        format : function () { // As with date?
            return '';
        }
    };
    DateInterval.createFromDateString = function (time){ // string (date string with relative parts)
        return new DateInterval(time); // ????
    };

    return new DateInterval(time);
}
;(function ($, window, document, undefined) {

    // Today, Yesterday, & MM-DD-YYYY special date formats
    var d = new Date();

    // Date.now() is GMT. So are the stamps we will be comparing to 'today'.
    // Modulus by ms in 1 day finds ms since midnight, which we subtract to find current day's beginning boundary (midnight).
    // However we want time from midnight in CURRENT TIMEZONE to show user their correct day.
    // Note: getTimezoneOffset gets offset in minutes, e.g. GMT-4 returns 240, so we multiply to get milliseconds.
    var today = Date.now() - (Date.now()-d.getTimezoneOffset()*60*1000) %(60*60*24*1000);
    var yesterday = today - 60*60*24*1000; // -1 day in milliseconds

    var hobsonsTime = function (date) {
        var meridiem = 'am',
            hour = date.getHours();

        if (hour > 12) {
            hour = hour - 12;
            meridiem = 'pm';
        }
        else if (hour == 12) {
            meridiem = 'pm';
        }
        else if (hour < 1) {
            hour = 12;
        }

        var min = ('0'+date.getMinutes()).slice(-2);

        return hour+':'+min+' '+meridiem;
    };

    // Single discussion
    // Today/Yesterday at Time, else 'MM-DD-YYYY at Time am/pm'
    var discussionHandler = function (i, val) {
        var stamp = Date.parse(val.getAttribute('datetime')),
            dp = new Date(stamp);

        if (stamp > today) {
            $(this).text('Today at '+hobsonsTime(dp));
        }
        else if (stamp > yesterday) {
            $(this).text('Yesterday at '+hobsonsTime(dp));
        }
        else {
            var ddate = ('0'+(dp.getMonth()+1)).slice(-2)+'-'+('0'+dp.getDate()).slice(-2)+'-'+dp.getFullYear();
            $(this).text(ddate+' at '+hobsonsTime(dp));
        }
    };

    // Discussion lists
    // Today/Yesterday at Time, else default
    var discussionListHandler = function (i, val) {
        var stamp = Date.parse(val.getAttribute('datetime')),
            dp = new Date(stamp);

        if (stamp > today) {
            $(this).text('Today at '+hobsonsTime(dp));
        }
        else if (stamp > yesterday) {
            $(this).text('Yesterday at '+hobsonsTime(dp));
        }
    };

    $(document).on('ready ajaxSuccess', function () {
        $.each($('.Discussion .DateCreated time'), discussionHandler);
        $.each($('.DiscussionsTable time'), discussionListHandler);
    });

})(window.jQuery, window, document);

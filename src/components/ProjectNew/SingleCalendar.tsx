import React, { useState } from "react";
// import { DayPickerSingleDateController } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
// import moment from "moment";
// import "moment/locale/ko";
import styled from "styled-components";

const SingleCalendar = () => {
    // const [date, setDate] = useState(moment("2023-02-23"));
    // const [focused, setFocused] = useState(true);

    // const onDateChange = (date: any) => setDate(date);
    // const onFocusChange = () => setFocused(true);
    // moment.locale("ko");

    return (
        <div>
            {/* <Calendar
                onDateChange={onDateChange}
                onFocusChange={onFocusChange}
                focused={focused}
                date={date}
                initialVisibleMonth={() => moment("2023-02-23")}
            /> */}
        </div>
    );
};

// const Calendar = styled(DayPickerSingleDateController)`
//     .DayPickerKeyboardShortcuts_buttonReset {
//         display: none;
//     }
// `;

export default SingleCalendar;

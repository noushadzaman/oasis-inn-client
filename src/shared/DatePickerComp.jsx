// import React from "react";
// import {
//   RangeDatePicker,
//   SingleDatePicker
// } from "react-google-flight-datepicker";
// import "react-google-flight-datepicker/dist/main.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = () => {

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    console.log(startDate);
    console.log(endDate);


    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />

            {/* <div className="App">
      <h1>react-google-flight-datepicker</h1>
      <h2>Install</h2>
      <pre>
        npm install react-google-flight-datepicker
        <br />
        <br />
        yarn add react-google-flight-datepicker
      </pre>
      <h2>RangeDatePicker</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
      />
      <br />
      <h2>SingleDatePicker</h2>
      <SingleDatePicker startDate={new Date(2020, 0, 15)} />
      <h2>RangeDatePicker with startDate and endDate</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 1)}
        endDate={new Date(2020, 1, 1)}
      />
      <br />
      <h2>RangeDatePicker with minDate and maxDate</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 8)}
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2020, 1, 5)}
      />
      <br />
      <h2>RangeDatePicker with custom date format</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        dateFormat="D"
      />
      <h2>RangeDatePicker with custom month format</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        monthFormat="MMMM"
      />
      <br />

      <h2>Disabled RangeDatePicker</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        disabled
      />
      <br />

      <h2>Custom placeholder</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        startDatePlaceholder="From"
        endDatePlaceholder="To"
      />
      <br />

      <h2>Highlight today</h2>
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
        startDatePlaceholder="From"
        endDatePlaceholder="To"
        highlightToday
      />
      <br />
    </div> */}

        </div>
    );

};

export default DatePickerComp;

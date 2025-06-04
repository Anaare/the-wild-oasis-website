// app/_components/DateSelector.jsx
"use client";

import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const { regularPrice } = cabin;
  const { discount } = cabin;
  const { numNights } = cabin;
  const { cabinPrice } = cabin;

  const { minBookingLength } = settings;
  const { maxBookingLength } = settings;

  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      {" "}
      {/* Changed back to flex-col */}
      {/* Calendar section */}
      <div className="flex justify-center">
        {" "}
        {/* This flex container ensures calendars are side-by-side */}
        <DayPicker
          mode="range"
          min={minBookingLength + 1}
          max={maxBookingLength}
          onSelect={setRange}
          selected={range}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={2}
          classNames={{
            months: "flex gap-4", // Keep side-by-side layout for months
            caption_label: "text-base font-medium",
          }}
        />
      </div>
      {/* Summary section - now on a new line below the calendars */}
      <div className="flex flex-wrap items-center justify-between px-8 bg-accent-500 text-primary-800 min-h-[72px] gap-4 w-full">
        <div className="flex flex-wrap items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>

          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold whitespace-nowrap"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { fetchAPI, submitAPI } from "../../Functions";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState({
    message: "",
    success: false,
  });
  const reserveTable = async () => {
    if (!selectedTime) {
      setMessage({
        message: "select time !!!",
        success: false,
      });
    } else {
      const result = submitAPI(time);
      if (result) {
        let filtered = time.filter((t) => {
          return t != selectedTime;
        });
        setTime([...filtered]);
        setSelectedTime("");
        setMessage({
          message: "Success",
          success: true,
        });
      }
    }
    setTimeout(function () {
      setMessage({
        message: "",
        success: true,
      });
    }, 2000);
  };
  useEffect(() => {
    const times = fetchAPI(date);
    setTime([...times]);
  }, [date]);

  return (
    <div className="mt-5">
      {message.message && (
        <div
          style={{
            position: "fixed",
            zIndex: 20,
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "1222",
          }}
        >
          <div
            className={`alert ${
              message.success ? "alert-primary" : "alert-danger"
            }`}
            role="alert"
          >
            {message.message}
          </div>
        </div>
      )}

      <h3 className="mb-5">Book Your Table Now</h3>
      <div className="row">
        <div className="col-lg-4 d-flex align-items-center justify-content-center mt-3">
          <div>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <Select
            value={{ value: selectedTime, label: selectedTime }}
            options={time.map((t) => {
              return { value: t, label: t };
            })}
            onChange={(value) => setSelectedTime(value.value)}
          />
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center mt-3">
          <div>
            <div className="btn btn-sm btn-primary" onClick={reserveTable}>
              Reserve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

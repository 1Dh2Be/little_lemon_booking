//css imports
import "./BookingPage.css"
import "react-datepicker/dist/react-datepicker.css";

//library/component imports
import { Field, Form, Formik } from 'formik'
import DatePicker from "react-datepicker";
import * as Yup from 'yup';
import { useState } from "react";
import { fetchAPI, submitAPI } from "../api/BookingApi.js";

//icon imports
import { FaUser } from "react-icons/fa";
import { IoMdWine } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";


export default function BookingForm() {

    const [availableTimes, setAvailableTimes] = useState([]);

    const initialValues = {
        date: new Date(),
        time: "",
        guests: 1,
        occasion: "",
    }

    const validationSchema = Yup.object({
        date: Yup.date().required('Date is required'),
        time: Yup.string().required('Time is required'),
        guests: Yup.number()
            .positive()
            .required('Number of guests is required')
            .min(1, 'Minimum 1 guest')
            .max(10, 'Maximum 10 guests'),
        occasion: Yup.string().oneOf(['birthday', 'anniversary']).required('Occasion is required')
    })

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const formData = {...values};

        const succes = submitAPI(formData)

        if (succes) {
            alert('Reservation submitted successfully!');
            resetForm();
        } else {
            alert('Failed to submit reservation. Please try again.');
        }

        setSubmitting(false)
    };

    return (
        <div className='booking-container' role="main" aria-label="Reservation form section">
            <div className='reservation-form'>
                <h2 id="reservation-title">Make a reservation</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({values, errors, touched, setFieldValue}) => (
                        <Form aria-labelledby="reservation-title">
                            <div className='form-group'>
                                <label htmlFor='date'>Date</label>
                                <div className="input-container">
                                    <DatePicker
                                        id="date"
                                        selected={values.date}
                                        onChange={date => {
                                            setFieldValue('date', date)
                                            setFieldValue('time', '')
                                            const times = fetchAPI(date)
                                            setAvailableTimes(times)
                                        }}
                                        dateFormat="MMMM d, yyyy"
                                        minDate={new Date()}
                                        aria-label="Select date"
                                        aria-required="true"
                                        aria-invalid={errors.date && touched.date ? "true" : "false"}
                                    />
                                    <span className="input-icon">
                                        <BsCalendarDateFill />
                                    </span>
                                </div>
                                {errors.date && touched.date && (
                                    <div className="error" role="alert" aria-live="polite">{errors.date}</div>
                                )}
                            </div>

                            <div className='form-group'>
                                <label htmlFor='time'>Time</label>
                                <div className="input-container">
                                    <Field
                                        as="select"
                                        id="time"
                                        name="time"
                                        aria-label="Select time"
                                        aria-required="true"
                                        aria-invalid={errors.time && touched.time ? "true" : "false"}
                                    >
                                        <option value="">Select Time</option>
                                        {availableTimes.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </Field>
                                    <span className="input-icon">
                                        <IoTime />
                                    </span>
                                </div>
                                {errors.time && touched.time && (
                                    <div className="error" role="alert" aria-live="polite">{errors.time}</div>
                                )}
                            </div>

                            <div className="formik-fields">
                                <div className="form-group">
                                    <div className="nbr-guests-input">
                                        <label htmlFor="guests">Guests</label>
                                        <div className="input-container">
                                            <Field
                                                id="guests"
                                                type="number"
                                                name="guests"
                                                min="1"
                                                max="10"
                                                aria-label="Number of guests"
                                                aria-required="true"
                                                aria-invalid={errors.guests && touched.guests ? "true" : "false"}
                                                aria-describedby={errors.guests ? "guests-error" : undefined}
                                            />
                                            <span className="input-icon">
                                                <FaUser />
                                            </span>
                                        </div>
                                        {errors.guests && touched.guests && (
                                            <div id="guests-error" className="error" role="alert" aria-live="polite">
                                                {errors.guests}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="occasion-input">
                                        <label htmlFor="occasion">Occasion</label>
                                        <div className="input-container">
                                            <Field
                                                as="select"
                                                id="occasion"
                                                name="occasion"
                                                aria-label="Select occasion"
                                                aria-required="true"
                                                aria-invalid={errors.occasion && touched.occasion ? "true" : "false"}
                                                aria-describedby={errors.occasion ? "occasion-error" : undefined}
                                            >
                                                <option value="">Select an occasion</option>
                                                <option value="birthday">Birthday</option>
                                                <option value="anniversary">Anniversary</option>
                                            </Field>
                                            <span className="input-icon">
                                                <IoMdWine />
                                            </span>
                                        </div>
                                        {errors.occasion && touched.occasion && (
                                            <div id="occasion-error" className="error" role="alert" aria-live="polite">
                                                {errors.occasion}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <button
                                className="submit-btn"
                                type="submit"
                                aria-label="Submit reservation form"
                            >
                                Submit Reservation
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
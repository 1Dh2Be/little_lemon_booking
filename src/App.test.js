import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/booking-form/BookingForm'

describe('BookingForm', () => {

  test('renders the "Make a reservation" heading', () => {
    render(<BookingForm />);
    const text = screen.getByText("Make a reservation");
    expect(text).toBeInTheDocument();
  });


  test('date picker shows the correct date format when selected', () => {

    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Date');

    const testDate = new Date('2024-12-14');

    fireEvent.change(dateInput, { target: { value: testDate } });

    expect(dateInput.value).toBe('December 14, 2024');
  });
});
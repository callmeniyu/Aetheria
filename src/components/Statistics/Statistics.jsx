import React, { useEffect } from 'react';
import './Statistics.css';

const Statistics = () => {
  useEffect(() => {
    const allValues = document.querySelectorAll(".value");

    allValues.forEach((singleValue) => {
      const startValue = 0;
      const endValue = parseInt(singleValue.getAttribute("data-value"), 10);
      const duration = Math.floor(2000 / endValue);

      // Initialize the value and set up the interval
      singleValue.textContent = startValue;

      const counter = setInterval(() => {
        const currentValue = parseInt(singleValue.textContent, 10);
        if (currentValue < endValue) {
          singleValue.textContent = currentValue + 1;
        } else {
          clearInterval(counter);
          singleValue.textContent = endValue; // Ensure it ends exactly at the target value
        }
      }, duration);
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className='statistics'>
      <section className='container'>
        <div className='cart-row1'>
          <div className='carts project'>
            <h1 className='number'><span className='value' data-value='15'>0</span>+</h1>
            <p className='detail'>Andi</p>
          </div>
          <div className='carts members'>
            <h1 className='number'><span className='value' data-value='15'>0</span>+</h1>
            <p className='detail'>Andi</p>
          </div>
          <div className='carts event'>
            <h1 className='number'><span className='value' data-value='17'>0</span>+</h1>
            <p className='detail'>Andi</p>
          </div>
        </div>
        <div className='cart-row2'>
          <div className='carts latest'>
            <h1 className='number'><span className='value' data-value='15'>0</span>+</h1>
            <p className='detail'>Andi</p>
          </div>
          <div className='carts organizer'>
            <h1 className='number'><span className='value' data-value='15'>0</span>+</h1>
            <p className='detail'>Organizer</p>
          </div>
          <div className='carts donations'>
            <h1 className='number'><span className='value' data-value='15'>0</span>+</h1>
            <p className='detail'>Donations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;

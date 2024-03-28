// DateSlider.js

import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useTranslation } from 'react-i18next';

const DateSlider = ({ onDateChange, onFilterChange }) => {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState({
    startDate: undefined,
    endDate: undefined,
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
    onDateChange(ranges.selection.startDate, ranges.selection.endDate);
    onFilterChange(ranges.selection.startDate, ranges.selection.endDate);
  };

  const handleClearFilter = () => {
    setDateRange({
      startDate: undefined,
      endDate: undefined,
      key: 'selection',
    });
    onDateChange(null, null);
    onFilterChange(null, null);
  };

  return (
    <>
      <h5>{t('Filter bookings by date')}</h5>
      <DateRangePicker ranges={[dateRange]} onChange={handleSelect} className="mb-4 datetable" />
      <button className="btn btn-hotel" onClick={handleClearFilter}>
        {t('Clear Filter')}
      </button>
    </>
  );
};

export default DateSlider;
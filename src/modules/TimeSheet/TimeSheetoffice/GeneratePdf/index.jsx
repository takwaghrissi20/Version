import React from 'react';
import { Button } from 'antd';
import { FiDownload } from 'react-icons/fi';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const MyComponent = () => {
  const token = localStorage.getItem("token");
  const handleGeneratePDF = async () => {
    try {
      // Fetch data from the API
      const response = await axios.get(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);
      const employees = response.data;

      // Create a new jsPDF instance with landscape orientation
      const doc = new jsPDF('landscape');

      // Get the current year and month
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1; // Months are zero-based

      // Generate an array of all dates in the current month
      const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
      const dates = Array.from({ length: daysInMonth }, (_, i) => `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`);

      // Prepare table header
      const tableHeaders = ['Employee Name', 'Position', 'GetsID', ...dates];

      // Prepare table data
      const tableData = employees.map(employee => {
        const { name, position, getsId, officepointages } = employee;

        // Create a row with the employee's name, position, getsId, and empty pointage fields
        const row = Array(daysInMonth + 3).fill('');
        row[0] = name;
        row[1] = position;
        row[2] = getsId;

        // Fill in the pointages for the current month
        officepointages.forEach(pointage => {
          if (pointage.date.startsWith(`${currentYear}-${String(currentMonth).padStart(2, '0')}`)) {
            const day = parseInt(pointage.date.split('-')[2], 10);
            row[day + 2] = pointage.pointage;
          }
        });

        return row;
      });

      // Adjust font size to fit content on one page
      const fontSize = 5; // Adjust as needed
      doc.setFontSize(fontSize);

      // Add title to PDF
      doc.text(`Employee Pointages for ${now.toLocaleString('default', { month: 'long' })} ${currentYear}`, 14, 22);

      // Add table to PDF
      doc.autoTable({
        head: [tableHeaders],
        body: tableData,
        startY: 30,
        styles: {
          fontSize,
          cellPadding: 1,
          halign: 'center',
          valign: 'middle',
        },
        theme: 'grid',
        columnStyles: {
          0: { cellWidth: 30 }, // Employee Name column width
          1: { cellWidth: 20 }, // Position column width
          2: { cellWidth: 20 }, // GetsID column width
          // Adjust other column widths as needed
        },
      });

      // Save the PDF
      doc.save(`Employee_Pointages_${now.toLocaleString('default', { month: 'long' })}_${currentYear}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>
      <Button onClick={handleGeneratePDF} className='downloadbutton'>
        <FiDownload /> Download pdf
      </Button>
    </div>
  );
};

export default MyComponent;

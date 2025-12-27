import React from 'react';

export const dataLine = {
    labels: ['Jan', 'Far', 'Mar', 'Apr', 'Mey', 'Jun'],
    datasets: [
      {
        label: '(Sales)',
        data: [12, 19, 3, 5, 2, 3], 
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };
 export const dataBar = {
   labels: ['Product A', 'Product B','Product C','Product D'],
   datasets: [
      {
        label:'Quantity',
        data:[12,19,3,5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
   ],

  };


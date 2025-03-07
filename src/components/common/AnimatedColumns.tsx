import React, { useEffect, useState } from 'react';

const colors = ['#E42C64', '#03A9F1', '#09F9BF', '#837DFF', '#6B7280'];
const totalHeight = 220;
const columnWidth = 20;
const columnGap = 10; // Reduced for better spacing

const getRandomHeights = (): number[] => {
  const heights: number[] = [];
  let remainingHeight = totalHeight;
  for (let i = 0; i < colors.length - 1; i++) {
    const height = Math.floor(Math.random() * (remainingHeight / (colors.length - i)));
    heights.push(height);
    remainingHeight -= height;
  }
  heights.push(remainingHeight);
  return heights;
};

const AnimatedColumns: React.FC = () => {
  const [columns, setColumns] = useState<number[][]>([]);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const newColumns: number[][] = [];
    for (let i = 0; i < 12; i++) {
      newColumns.push(getRandomHeights());
    }
    setColumns(newColumns);
    
    // Trigger animation after component mounts
    setTimeout(() => setAnimate(true), 100);
    
    // Set up interval to update columns every 3 seconds
    const interval = setInterval(() => {
      const updatedColumns: number[][] = [];
      for (let i = 0; i < 12; i++) {
        updatedColumns.push(getRandomHeights());
      }
      setColumns(updatedColumns);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-end space-x-2" style={{ height: totalHeight }}>
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col-reverse" style={{ width: columnWidth }}>
          {column.map((height: number, colorIndex: number) => (
            <div
              key={colorIndex}
              style={{
                height: animate ? `${height}px` : '0px',
                backgroundColor: colors[colorIndex],
                width: '100%',
                transition: 'height 1s ease-in-out',
                opacity: 0.6, // Set opacity to 60%
                borderRadius: colorIndex === colors.length - 1 ? '4px 4px 0 0' : '0' // Apply rounded borders to the last color
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedColumns;
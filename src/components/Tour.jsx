import React, { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

function Tour({ startTour }) {
  useEffect(() => {
    if (startTour) {
      const tour = introJs();
      tour.setOptions({
        steps: [
          {
            element: '#button1',
            intro: 'これはボタン1です。',
            position: 'right',
          },
          {
            element: '#button2',
            intro: 'これはボタン2です。',
            position: 'bottom',
          },
          {
            element: '#button3',
            intro: 'これはボタン3です。',
            position: 'left',
          },
        ],
        showProgress: true,
        showBullets: false,
        exitOnEsc: true,
        exitOnOverlayClick: true,
      });

      tour.start();
    }
  }, [startTour]);

  return (
    <button onClick={startTour}>チュートリアルを開始</button>
  );
}

export default Tour;

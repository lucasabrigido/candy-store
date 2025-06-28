import Image from 'next/image';
import React from 'react';

import candy1 from '@assets/images/candy1.png';
import candy2 from '@assets/images/candy2.png';
import candy3 from '@assets/images/candy3.png';

import diego from '@assets/images/diego.jpg';
import felipe from '@assets/images/felipe.jpg';
import raw from '@assets/images/raw.jpg';

import jm from '@assets/images/jm.jpg';
import nize from '@assets/images/nize.jpg';
import eugein from '@assets/images/eugein.jpg';

const mapCandys = {
    candy1,
    candy2,
    candy3,
    diego,
    felipe,
    raw,
    jm,
    nize,
    eugein,
}

const Candy = ({ x, y, type = 'candy' }) => {
  return (
    <div
      className={`candy ${type}`}
      style={{
        left: x,
        top: y,
      }}
    >
        <Image alt={type} src={mapCandys[type]}/>
    </div>
  );
};

export default Candy;

import Image from 'next/image';
import React from 'react';
import cup from '@assets/images/cup.png';

const Cup = ({ x, type = 'cup' }) => {
    return (
        <div className="cup" style={{ left: x }}>
            <Image alt={type} src={cup} />
        </div>
    )
};

export default Cup;

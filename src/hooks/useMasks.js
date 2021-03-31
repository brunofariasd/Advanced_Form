import React from 'react';

function useMasks(masks) {

    function mask(event) {
        const { name, value } = event.target;
        return masks[name](value);
    }
    
    return mask
}

export default useMasks

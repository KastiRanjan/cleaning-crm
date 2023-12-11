import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { AccordionContent } from '../../../../registry/new-york/ui/accordion';

export default createBoard({
    name: 'AccordionContent',
    Board: () => <AccordionContent />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 500
    }
});

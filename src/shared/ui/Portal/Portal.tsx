import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
    const {
        children,
        element,
    } = props;

    return createPortal(children, element);
};

Portal.defaultProps = {
    element: document.body,
};

export default Portal;

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

const INITIAL_ELEMENT: HTMLElement = document.body;

export const Portal = ({ children, element = INITIAL_ELEMENT }: IPortalProps) => createPortal(children, element);

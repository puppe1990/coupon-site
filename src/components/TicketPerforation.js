import React from 'react';
import { cn } from '../lib/utils';

const TicketPerforation = ({ className, children }) => (
  <div className={cn('ticket-perforation ticket-stub', className)}>
    <span className="ticket-notch ticket-notch-left" />
    <span className="ticket-notch ticket-notch-right" />
    {children}
  </div>
);

export default TicketPerforation;

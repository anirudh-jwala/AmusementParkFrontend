import { Activity } from './activity';

export interface Ticket {
  ticketId: number;
  bill: string;
  date: string;
  activities: Activity[];
}

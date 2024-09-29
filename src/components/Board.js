import React from 'react';
import TicketCard from './TicketCard';
import addIcon from '../images/add.svg';
import menuIcon from '../images/3 dot menu.svg';
import inProgressIcon from '../images/in-progress.svg';
import toDoIcon from '../images/To-do.svg';
import backLogIcon from '../images/Backlog.svg';
import doneIcon from '../images/Done.svg';
import cancelIcon from '../images/Cancelled.svg'
import userIcon from '../images/user.svg';
import urgentIcon from '../images/SVG - Urgent Priority colour.svg';
import highIcon from '../images/Img - High Priority.svg';
import mediumIcon from '../images/Img - Medium Priority.svg';
import lowIcon from '../images/Img - Low Priority.svg';
import noPriorityIcon from '../images/No-priority.svg';

const Board = ({ tickets, groupBy }) => {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = groupBy === 'status' ? ticket.status :
      groupBy === 'user' ? ticket.userId :
      ticket.priority;

    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  // Add empty groups for 'Done' and 'Cancelled' when grouped by status
  if (groupBy === 'status') {
    if (!groupedTickets['Done']) groupedTickets['Done'] = [];
    if (!groupedTickets['Cancelled']) groupedTickets['Cancelled'] = [];
  }

  const renderStatusIcon = (group) => {
    switch (group) {
      case 'In progress':
        return <img src={inProgressIcon} alt="In Progress" className="status-icon" />;
      case 'Todo':
        return <img src={toDoIcon} alt="To Do" className="status-icon" />;
      case 'Backlog':
        return <img src={backLogIcon} alt="Backlog" className="status-icon" />;
      case '4':
        return <span><img src={urgentIcon} alt="Urgent" className="priority-icon" /> Urgent </span>;
      case '3':
        return <span><img src={highIcon} alt="High Priority" className="priority-icon" /> High </span>;
      case '2':
        return <span><img src={mediumIcon} alt="Medium Priority" className="priority-icon" /> Medium </span>;
      case '1':
        return <span><img src={lowIcon} alt="Low Priority" className="priority-icon" /> Low</span>;
      case '0':
        return <span><img src={noPriorityIcon} alt="No Priority" className="priority-icon" /> No priority </span>;
      case 'Done':
        return <span><img src={doneIcon} alt="Done" className="status-icon" /></span>;
      case 'Cancelled':
        return <span><img src={cancelIcon} alt="Cancelled" className="status-icon" /></span>;
      case 'usr-1':
      case 'usr-2':
      case 'usr-3':
      case 'usr-4':
      case 'usr-5':
      case 'usr-6':
      case 'usr-7':
      case 'usr-8':
      case 'usr-9':
        return <img src={userIcon} alt="" className="user-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="group-column">
          <div className="group-header">
            <div className="group-info">
              {renderStatusIcon(group)}
              <span className="group-name">{group}</span>
              <span className="group-count">{groupedTickets[group].length}</span>
            </div>
            <div className="group-actions">
              <img src={addIcon} alt="add" className="action-icon" />
              <img src={menuIcon} alt="menu" className="action-icon" />
            </div>
          </div>
          <div className="ticket-list">
            {groupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
  
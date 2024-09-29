import React from 'react';
import './TicketCard.css'; // Style the card in a separate file

// Import status and priority icons
import inProgressIcon from '../images/in-progress.svg';
import toDoIcon from '../images/To-do.svg';
import backLogIcon from '../images/Backlog.svg';
import doneIcon from '../images/Done.svg';
import cancelIcon from '../images/Cancelled.svg'
import urgentIcon from '../images/SVG - Urgent Priority colour.svg'; 
import highIcon from '../images/Img - High Priority.svg'; 
import mediumIcon from '../images/Img - Medium Priority.svg'; 
import lowIcon from '../images/Img - Low Priority.svg'; 
import noPriorityIcon from '../images/No-priority.svg'; 

const TicketCard = ({ ticket }) => {
  
  // Function to render status icon
  const renderStatusIcon = (status) => {
    switch (status) {
      case 'In progress':
        return <img src={inProgressIcon} alt="In Progress" className="status-icon" />;
      case 'Todo':
        return <img src={toDoIcon} alt="To Do" className="status-icon" />;
      case 'Backlog':
        return <img src={backLogIcon} alt="Backlog" className="status-icon" />;
      case 'Done':
        return <img src={doneIcon} alt="Done" className="status-icon" />;
      case 'Canceled':
        return <img src={cancelIcon} alt="Done" className="status-icon" />;
      default:
        return null;
    }
  };

  // Function to render priority icon
  const renderPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <img src={urgentIcon} alt="Urgent Priority" className="priority-icon" />;
      case 3:
        return <img src={highIcon} alt="High Priority" className="priority-icon" />;
      case 2:
        return <img src={mediumIcon} alt="Medium Priority" className="priority-icon" />;
      case 1:
        return <img src={lowIcon} alt="Low Priority" className="priority-icon" />;
      case 0:
        return <img src={noPriorityIcon} alt="No Priority" className="priority-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="ticket-card">
      <span className="ticket-id">{ticket.id}</span>

      <div className="ticket-status">
        {renderStatusIcon(ticket.status)}
        <span className="ticket-title">{ticket.title}</span>
      </div>

      <div className="ticket-info">
        <div className="ticket-priority">
          <div className="priority-icon-box">
            {renderPriorityIcon(ticket.priority)}
          </div>
          <div className="priority-text-box">
            <span>{ticket.tag.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

const groupByFunc = (tasks, option) => {
  if (!tasks || !option) {
    return null;
  }

  const groupedData = {};
  // Defines a helper function processTicket that takes a key and a valueFn, 
  //iterates through tasks.tickets, uses valueFn to determine the value for the 
  //specified key from the ticket, and creates an array in groupedData for each unique keyValue, pushing the current ticket into that array.
  const processTicket = (key, valueFn) => {
    tasks.tickets.forEach((ticket) => {
      const keyValue = valueFn(ticket);
      if (!groupedData[keyValue]) {
        groupedData[keyValue] = [];
      }
      groupedData[keyValue].push(ticket);
    });
  };

  //Checks the option and invokes processTicket 
  //with the corresponding key and valueFn; for 'status', it extracts the status property, 
  //for 'user', it finds the user in tasks.users based on the userId property, and for 'priority', 
  //it extracts the priority property from each ticket.
  if (option === 'status') {
    processTicket('status', (ticket) => ticket.status);
  } else if (option === 'user') {
    processTicket('userId', (ticket) => {
      const user = tasks.users.find((user) => user.id === ticket.userId);
      return user ? user.id : null;
    });
  } else if (option === 'priority') {
    processTicket('priority', (ticket) => ticket.priority);
  }

  return groupedData;
};

export { groupByFunc };

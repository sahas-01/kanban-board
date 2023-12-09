const orderByFunc = (groupedData, groupingOption, sortingOption) => {
  if (sortingOption === 'title') {
    return Object.fromEntries(
      Object.entries(groupedData).map(([key, userTickets]) => [
        key,
        [...userTickets].sort((a, b) => a.title.localeCompare(b.title))
      ])
    );
  } else if (sortingOption === 'priority' && groupingOption === 'priority') {
    return groupedData;
  } else {
    return Object.fromEntries(
      Object.entries(groupedData).map(([key, userTickets]) => [
        key,
        [...userTickets].sort((a, b) => b.priority - a.priority)
      ])
    );
  }
};

export { orderByFunc };

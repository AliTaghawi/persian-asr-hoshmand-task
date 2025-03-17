export const sortUsers = (state) => {
  const compare = (a, b) => {
    if (a[state.sortBy] < b[state.sortBy]) {
      return -1;
    }
    if (a[state.sortBy] > b[state.sortBy]) {
      return 1;
    }
    return 0;
  };

  if (typeof state.sortBy === "string") {
    state.revers
      ? state.displayData.sort((a, b) => compare(b, a))
      : state.displayData.sort((a, b) => compare(a, b));
  }
  state.revers
    ? state.displayData.sort((a, b) => a[state.sortBy] - b[state.sortBy])
    : state.displayData.sort((a, b) => b[state.sortBy] - a[state.sortBy]);
};

export const filterUsers = (state, searchText) => {
  state.displayData = state.initialData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
  );
};

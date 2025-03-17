export const sortUsers = (state) => {
  state.revers
  ? state.displayData.sort((a, b) => b[state.sortBy] - a[state.sortBy])
  : state.displayData.sort((a, b) => a[state.sortBy] - b[state.sortBy]);
}

export const filterUsers = (state, searchText) => {
  state.displayData = state.initialData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
  );
}
// LandingPage.js
import React, { Component } from 'react';

class LandingPage extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1', category: 'Category A', date: '2024-06-01' },
      { id: 2, name: 'Item 2', category: 'Category B', date: '2024-06-02' },
      { id: 3, name: 'Item 3', category: 'Category A', date: '2024-06-03' },
      // Add more items as needed
    ],
    filteredItems: [],
    sortBy: null,
    sortAsc: true,
    newItem: { id: '', name: '', category: '', date: '' },
    isEditing: false,
    editedItem: null
  };

  // Filter items based on user input
  handleFilter = (e) => {
    const { items } = this.state;
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
    );
    this.setState({ filteredItems });
  };

  // Sort items based on selected field and order
  handleSort = (field) => {
    const { items, sortAsc } = this.state;
    const sortedItems = items.sort((a, b) => {
      if (a[field] < b[field]) return sortAsc ? -1 : 1;
      if (a[field] > b[field]) return sortAsc ? 1 : -1;
      return 0;
    });
    this.setState({ items: sortedItems, sortAsc: !sortAsc });
  };

  // CRUD Operations

  // Insert (Create) new item
  handleAddItem = () => {
    const { newItem, items } = this.state;
    // Add validation if needed
    this.setState({ items: [...items, newItem], newItem: { id: '', name: '', category: '', date: '' } });
  };

  // Update item
  handleEditItem = (id) => {
    const { items } = this.state;
    const editedItem = items.find(item => item.id === id);
    this.setState({ editedItem, isEditing: true });
  };

  // Save edited item
  handleSaveEdit = () => {
    const { editedItem, items } = this.state;
    // Update item in items array
    const updatedItems = items.map(item => (item.id === editedItem.id ? editedItem : item));
    this.setState({ items: updatedItems, editedItem: null, isEditing: false });
  };

  // Delete item
  handleDeleteItem = (id) => {
    const { items } = this.state;
    // Remove item from items array
    const updatedItems = items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  };

  // Cancel edit
  handleCancelEdit = () => {
    this.setState({ editedItem: null, isEditing: false });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { items, filteredItems, sortBy, sortAsc, newItem, isEditing, editedItem } = this.state;
    const displayedItems = filteredItems.length ? filteredItems : items;

    return (
      <div>
        <h2>Landing Page</h2>
        <input type="text" placeholder="Search..." onChange={this.handleFilter} />
        <table>
          <thead>
            <tr>
              <th onClick={() => this.handleSort('id')}>ID {sortBy === 'id' && (sortAsc ? '▲' : '▼')}</th>
              <th onClick={() => this.handleSort('name')}>Name {sortBy === 'name' && (sortAsc ? '▲' : '▼')}</th>
              <th onClick={() => this.handleSort('category')}>Category {sortBy === 'category' && (sortAsc ? '▲' : '▼')}</th>
              <th onClick={() => this.handleSort('date')}>Date {sortBy === 'date' && (sortAsc ? '▲' : '▼')}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={() => this.handleEditItem(item.id)}>Edit</button>
                  <button onClick={() => this.handleDeleteItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add new item form */}
        {isEditing ? (
          <div>
            <h3>Edit Item</h3>
            {/* Render edit form */}
          </div>
        ) : (
          <div>
            <h3>Add New Item</h3>
            {/* Render add form */}
            <button onClick={this.handleAddItem}>Add</button>
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;

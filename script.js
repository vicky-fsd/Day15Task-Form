document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userTableBody = document.getElementById('userTableBody');
  
    userForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.getElementById('gender').value;
      const foodOptions = document.querySelectorAll('input[type="checkbox"]:checked');
      const selectedFoods = [...foodOptions].map(foodOption => foodOption.value);
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;
  
      // Append values to the table
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${selectedFoods.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;
      userTableBody.appendChild(newRow);
  
      // Clear the form fields
      userForm.reset();
    });
  });
  
new DataTable('#example');

// document.querySelectorAll('td').forEach(td => {
//     const text = td.textContent.trim();
    
//     if (text.startsWith('https://')) {
//       td.innerHTML = `<a class="test" href="${text}" target="__blank"> Website </a>`;
//     }
//     if (text.startsWith('https://x.com')) {
//         td.innerHTML = `<a class="test" href="${text}" target="__blank"> Links </a>`;
//       }
//   });




// Link URL TASK function
function updateActionLinks() {
  const rows = document.querySelectorAll('table tbody tr'); // Select all rows in the table body

  rows.forEach(row => {
    const actionCell = row.cells[4]; // Target the 4th column (index 4)
    if (!actionCell) return; // Skip if the 4th column doesn't exist

    const text = actionCell.textContent.trim(); // Get the text content of the cell

    // Check if the cell contains a valid URL
    if (isValidURL(text)) {
      const anchor = document.createElement('a');
      anchor.classList.add('links');
      anchor.href = text;
      anchor.target = '_blank'; // Open the link in a new tab
      anchor.innerHTML = 'Links <i class="bx bx-link-external"></i>';

      // Replace the content of the cell with the anchor tag
      actionCell.innerHTML = ''; // Clear the existing content
      actionCell.appendChild(anchor); // Append the anchor tag
    }
  });
}

// Helper function to check if a string is a valid URL
function isValidURL(str) {
  try {
    new URL(str); // Use the URL constructor for validation
    return true;
  } catch (e) {
    return false;
  }
}

// Initial run to apply the links
updateActionLinks();

// If you're dynamically loading more rows, call the function again after the rows are added
document.addEventListener('DOMContentLoaded', () => {
  // Example: Listen for changes in the table (e.g., after loading more rows)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        updateActionLinks(); // Re-run the function if new rows are added
      }
    });
  });

  // Observe the table body for changes
  const tableBody = document.querySelector('table tbody');
  if (tableBody) {
    observer.observe(tableBody, { childList: true });
  }
});




// Function to update the Action column for all rows
function updateActionColumn() {
    // Select all rows in the table body (tbody)
    const rows = document.querySelectorAll('tbody tr');
  
    rows.forEach(row => {
      const actionCell = row.cells[6]; // The "Action" column (index 6)
      let link = actionCell.textContent.trim(); // Get the URL from the cell
  
      // If the link is invalid or empty, replace it with the default URL
      if (!link || !isValidURL(link)) {
        link = 'https://x.com/prolinkmoon'; // Default URL
      }
  
      // Extract the username from the URL (e.g., https://x.com/prolinkmoon -> prolinkmoon)
      const username = extractUsernameFromURL(link);
  
      // Create a new anchor element with the username
      const anchor = document.createElement('a');
      anchor.classList.add('class-added-by');
      anchor.href = link; // Use the full URL as the href
      anchor.target = '_blank'; // Open the link in a new tab
      anchor.textContent = `@${username}`; // Display the username with '@'
  
      // Replace the content of the "Action" cell with the anchor tag
      actionCell.innerHTML = ''; // Clear the existing content
      actionCell.appendChild(anchor); // Append the anchor tag
    });
  }
  
  // Helper function to check if the string is a valid URL
  function isValidURL(str) {
    const pattern = new RegExp('^(https?://)?([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,3}(/[^\\s]*)?$');
    return pattern.test(str);
  }
  
  // Function to extract the username from the URL
  function extractUsernameFromURL(url) {
    const regex = /https:\/\/(x\.com|twitter\.com)\/([^\/]+)/; // Match both x.com and twitter.com
    const match = url.match(regex);
    return match ? match[2] : ''; // Return the username part (match[2] for the username)
  }
  
  // Initial run to apply the links
updateActionColumn();
  
  // Assuming you have a dropdown or button that loads more rows
  document.querySelector('#dt-length-0').addEventListener('click', () => {
    // Your code for loading more rows here (or it can be dynamically added)
    
    // After new rows are added, update the Action column again
    updateActionColumn();
  });


































  $(document).ready(function() {
    // Initialize DataTable
    var table = $('#example').DataTable();

    // After the table is initialized and rendered, update images
    table.on('draw', function() {
        // Loop through each row of the table
        $('#example tbody tr').each(function() {
            // Get the URL from the first column
            const imgUrl = $(this).find('td').eq(0).text().trim();  // First column contains image URL

            // Check if the URL is valid
            if (imgUrl && imgUrl.startsWith('http')) {
                // Create an image element
                const img = $('<img>', {
                    src: imgUrl,
                    width: 42,
                    height: 42
                });

                // Replace the URL with the image
                $(this).find('td').eq(0).empty().append(img);  // Empty and append the image in the first column
            }
        });
    });

    // Trigger the 'draw' event to ensure any initial rows are updated
    table.draw();
});









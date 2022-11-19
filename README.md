# Project REST-rant

REST-rant is an app where users can review restaurants.

## Routes
<table>
  <thead>
    <th>Method</th>
    <th>Path</th>
    <th>Purpose</th>
  </thead>
  <tr>
    <td>GET</td>
    <td>/</td>
    <td>Home page</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/places</td>
    <td>Places index page</td>
  </tr
    
  <tr>
    <td>POST</td>
    <td>/places</td>
    <td>Create new place</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/places/new</td>
    <td>Form page for creating a new place</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/places/:id</td>
    <td>Details about a particular place</td>
  </tr>
  
  <tr>
    <td>PUT</td>
    <td>/places/:id</td>
    <td>Update a particular place</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/places/:id/edit</td>
    <td>Form page for editing an existing place</td>
  </tr>
  
  <tr>
    <td>DELETE</td>
    <td>/places/:id</td>
    <td>Delete a particular place</td>
  </tr>
  
  <tr>
    <td>POST</td>
    <td>/places/:id/rant</td>
    <td>Create a rant (comment) about a particular place</td>
  </tr>
  
  <tr>
    <td>DELETE</td>
    <td>/places/:id/rant/:rantId</td>
    <td>Delete a rant (comment) about a particular place</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>*</td>
    <td>404 page (matches any route not defined above)</td>
  </tr>
  </table>

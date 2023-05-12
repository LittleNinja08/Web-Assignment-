

 

function mySubmit() {
  alert("Thank you ! we will contact you shortly.")
 
}

const form = document.querySelector("form");

// Add event listener to the form submit button
form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
 // get the attraction chosent 
  const attraction = attraction.parse(document.getElementById("attractions").value)
   alert("Thank you ! we will contact you shortly.")
   // Get the values of the ticket inputs
  const adultTickets = parseInt(document.getElementById("adult").value);
  const childTickets = parseInt(document.getElementById("child").value);
  const seniorTickets = parseInt(document.getElementById("senior").value);

  // Calculate the total cost of tickets
  const totalCostA = (adultTickets * 13) + (childTickets * 8) + (seniorTickets * 10);

  const hotel =hotel.parse(document.getElementById("hotels").value)

  const adultTicketsH = parseInt(document.getElementById("adultH").value);
  const childTicketsH = parseInt(document.getElementById("childH").value);
  const seniorTicketsH = parseInt(document.getElementById("seniorH").value);

  const totalHotel = (adultTicketsH +1) + (childTicketsH +1) + (seniorTicketsH +1);
  // Get the user's personal information
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Display the total cost and personal information in an alert
  alert(`Total Cost for ${attraction}: $${totalCostA}\n\n Hotel:${hotel} \n Number of guests:${totalHotel}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
 
  // Reset the form inputs
  form.reset();
});
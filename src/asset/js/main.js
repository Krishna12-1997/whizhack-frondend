

function toggleContent(contentType) {
    const element = document.querySelector(".nav_header_content.active");
if (element) {
  element.classList.remove("active");
}

    // Remove the "active" class from all elements
    const allContentElements = document.querySelectorAll(".nav_header_content");
    allContentElements.forEach((contentElement) => {
      contentElement.classList.remove("active");
    });
  
    // Add the "active" class to the clicked element
    const clickedElement = document.querySelector(`.nav_header_content.${contentType}`);
    clickedElement.classList.add("active");
  
    // Update the content in the right column based on the clicked element
    const rightColumnContent = document.querySelector(".nav_right .content_solution");
    rightColumnContent.innerHTML = getContentForType(contentType);
  }
  
  // Define a function to return content based on the clicked type
  function getContentForType(contentType) {
    switch (contentType) {
      case "threatIntelligence":
        return `
          <div style="color: #1D1D1D; font-family: Montserrat; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">
            Threat Intelligence
          </div>
          <div style="color: #656565; font-family: Montserrat; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
            Content for Threat Intelligence
          </div>
        `;
      case "cyberRange":
        return `
          <div style="color: #1D1D1D; font-family: Montserrat; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">
            Cyber Range
          </div>
          <div style="color: #656565; font-family: Montserrat; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
            Content for Cyber Range
          </div>
        `;
      case "xdr":
        return `
          <div style="color: #1D1D1D; font-family: Montserrat; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;">
            XDR
          </div>
          <div style="color: #656565; font-family: Montserrat; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
            Content for XDR
          </div>
        `;
      default:
        return "";
    }
  }
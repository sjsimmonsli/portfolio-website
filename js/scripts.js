/* JS here */
console.log("Welcome to Sudie's Portfolio Site!")

$(document).ready(function () {
  $('.project-preview').on('click', function () {
    $(this).siblings('.project-details').slideToggle()
  })
})

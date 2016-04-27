$('.submit').click(function() {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'MANDRILL_API_KEY_GOES_HERE',
      'message': {
        'from_email': 'FROM_EMAIL_GOES_HERE',
        'to': [{
            'email': $('.email').val(), // get email from form
            'name': $('.name').val(), // get name from form
            'type': 'to'
          }
          /*, {
                        'email': 'RECIPIENT_NO_2@EMAIL.HERE',
                        'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
                        'type': 'to'
                      }*/
        ],
        // optional merge variables. must also be setup on the list management side of mandrill
        'merge_vars': [{
          'rcpt': $('.email').val(),
          'vars': [{
            'name': 'COOLFRIEND',
            "content": 'Mike'
          }, {
            'name': 'YEARS',
            'content': '27'
          }]
        }],
        'autotext': 'true',
        'subject': 'EMAIL_SUBJECT_GOES_HERE',
        'html': "Hey *|COOLFRIEND|*, we've been friends for *|YEARS|*.", // example of how to use the merge tags
        'track_opens': true,
        'track_clicks': true,
      }
    }
  }).done(function(response) {
    console.log(response); // if you're into that sorta thing
  });
});

// Credits: https://medium.com/@mariusc23/send-an-email-using-only-javascript-b53319616782#.x58kwlal8


// meta
var getUrl = window.location.host;
if (window.location.host != "s.codepen.io") {
  document.querySelector(".meta").style.display = "none";
}
var data = [{	student_name: 'Sanny Lin',
				profile_photo: 'assets/images/0.jpg',
				subject: 'Frontend Foundation 6 - HTML & CSS: Basic Structure discussion',
				message: 'Ah... so it all depends on what the method is returning. And I realized that join() doesn\'t change the array, I would need to save it as a string.',
				age: '12 Oct'
			},
			{	student_name: 'Joey Kirk',
				profile_photo: 'assets/images/1.jpg',
				subject: 'true and false in JavaScript',
				message: 'Here\'s a good article covering truthy and falsey values in JavaScript',
				age: '5d'
			},
			{	student_name: 'Sanny Lin',
				profile_photo: 'assets/images/0.jpg',
				subject: 'Frontend Foundation 4 - GitHub',
				message: 'Updated Submission',
				age: '3d'
			},
			{
				student_name: 'Courtland Alves',
				profile_photo: 'assets/images/2.jpg',
				subject: 'Introducing myself',
				message: 'Hi mentor! I just enrolled in Bloc. I can\'t wait to start learning design and frontend.',
				age: '2h'
			}];


//Write your code here

var removeEntry = function() {
	var $totalMessages = $('#total-messages')
	var currentCount = $totalMessages.text();

	$('#message-' + $(this).data().id).remove();
	$totalMessages.text(currentCount - 1);
}

$(document).ready(function() {
	// Set total messages
	$("#total-messages").text(data.length)

	// Display each message
	for (var i = 0; i < data.length; i++) {
		var template = `
		<tr class="message-row" id="message-` + i + `">
			<td class="from-thumb">
				<img src="` + data[i].profile_photo + `" class="thumb">
				</td>
				<td class="from-text">
					` + data[i].student_name + `
				</td>
				<td class="preview">
					<div class="title">` + data[i].subject + `</div>
					<div class="subtitle">` + data[i].message + `</div>
				</td>
				<td class="footer-text">
					` + data[i].age + `
				</td>
				<td class="footer-close">
					<i class="fa fa-times" aria-hidden="true" id="close-` + i + `" data-id="` + i + `"></i>
				</td>
			</tr>
		`;

		$(".message").append(template);
		$("#close-" + i).click(removeEntry);
	}

	$(".dismiss-all").click(function() {
		$(".message").text("")
		$("#total-messages").text("0")
	});

})

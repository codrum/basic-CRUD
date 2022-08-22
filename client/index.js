const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

const handleFetchData = () => {
	let response = []
	var settings = {
		url: 'http://localhost:8080/event',
		method: 'GET',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
	}

	$.ajax(settings).done(function (data) {
		for (let event of data) {
			let dateObj = new Date(event.date)
			var month = monthNames[dateObj.getUTCMonth()]
			var day = dateObj.getUTCDate()
			var year = dateObj.getUTCFullYear()
			$('.leftsidecards')
				.append(`<div class="card eventcard col-xs-12 col-md-6 col-xl-3" id=${event._id}>
			<div class="card-body d-flex flex-column">
			  <h5 class="card-title">${event.title}</h5>
			  <p class="card-text">${event.description}</p>
			  <div class="mt-auto">
			  <span class="card-link">$${event.costInDollars}</span>
			  <span class="card-link">${month} ${day}, ${year}</span>
			  <br/>
			  <a class="delete-button">
			  <i class="bi bi-trash" style="float: right;"></i>
			  </a>
			  <a class="edit-button" >
			  <i class="bi bi-pencil" style="float: right; padding-right: 8px;"></i>
			  </a>
			  </div>
			</div>
		  </div>`)
			response.push(event)
		}
	})
	return response
}

const handleEditData = (idToEdit) => {
	let requestType
	idToEdit ? (requestType = 'PUT') : (requestType = 'POST')
	let title = $('#inputTitle').val()
	let description = $('#inputDescription').val()
	let costInDollars = $('#inputCostInDollars').val()
	let date = $('#inputDate').val()
	date = new Date(date).toISOString()
	var settings = {
		url: idToEdit
			? `http://localhost:8080/event/${idToEdit}`
			: `http://localhost:8080/event`,
		method: requestType,
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			title: title,
			description: description,
			costInDollars: costInDollars,
			date: date,
		}),
	}

	$.ajax(settings)
		.done(function (response) {
			console.log(response)
		})
		.fail(function () {
			alert('error')
		})
}

const handleDeleteData = (idToDelete) => {
	var settings = {
		url: `http://localhost:8080/event/${idToDelete}`,
		method: 'DELETE',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
	}

	$.ajax(settings)
		.done(function (response) {
			window.location.reload()
		})
		.fail(function () {
			alert('error')
		})
}

$(function () {
	let editMode = false
	let idToEdit
	let data = handleFetchData()
	$('#save').click(function () {
		if (editMode) {
			console.log('edit mode')
			handleEditData(idToEdit)
		} else {
			console.log('not edit mode')
			handleEditData()
		}
	})
	$(this).on('click', '.edit-button', function () {
		editMode = true
		console.log(editMode)
		idToEdit = $(this).parent().parent().parent().attr('id')
		for (let event of data) {
			if (event._id === idToEdit) {
				$('#inputTitle').val(event.title)
				$('#inputDescription').val(event.description)
				$('#inputCostInDollars').val(event.costInDollars)
				$('#inputDate').val(event.date.substring(0, 10))
			}
		}
	})
	$(this).on('click', '.delete-button', function () {
		let confirmed = confirm('You are about to delete this element')
		let idToDelete = $(this).parent().parent().parent().attr('id')
		console.log(idToDelete)
		if (confirmed === true) handleDeleteData(idToDelete)
	})
})

var service_checked_all = false

var service_check_all_button = document.querySelector('.service__checkbox-a__input')
var service_target_checkboxes = document.querySelectorAll('.service__checkbox__input')

service_target_checkboxes.forEach(function (checkbox) {
	checkbox.addEventListener('change', function () {
		var unchecked = Array.prototype.slice
			.call(service_target_checkboxes)
			.filter(checkbox => !checkbox.checked)

		if (unchecked.length) {
			service_checked_all = false
			service_check_all_button.checked = false
		} else {
			service_checked_all = true
			service_check_all_button.checked = true
		}
	})
})

if (service_check_all_button) {
	service_check_all_button.addEventListener('click', function () {
		service_checked_all = !service_checked_all
		service_target_checkboxes.forEach(function (checkbox) {
			checkbox.checked = service_checked_all
		})
	})
}

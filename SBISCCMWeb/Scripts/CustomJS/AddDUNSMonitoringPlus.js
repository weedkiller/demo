﻿function loadAddDUNSMonitoringPlus() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function () { input.classList.add('has-focus'); });
        input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
    });
}
$(".AddDUNSMonitoringPlusFileBrowser").change(function () {
    if ($('.AddDUNSMonitoringPlusFileBrowser').val() != "") {
        var fileExtension = ['txt'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            parent.ShowMessageNotification("success", "Only formats allowed are : " + fileExtension.join(', '), false, false);
            $('.AddDUNSMonitoringPlusFileBrowser').val("");
        }
    }
});
// script.js
$(document).ready(function() {
    $('.placeholder-card').show();
    $('#fetchButton').click(function() {
        $('#loadingSpinner').show();
        $('.profile-card').hide();
        $('.placeholder-card').hide();
        $.ajax({
            url: '/fetch_user',
            method: 'GET',
            success: function(data) {
                const user = data.results[0];
                $('#userImage').attr('src', user.picture.large);
                $('#userName').text(`${user.name.title} ${user.name.first} ${user.name.last}`);
                $('#userEmail').text(`Email: ${user.email}`);
                $('#userLocation').text(`Location: ${user.location.city}, ${user.location.country}`);
                $('#userPhone').text(`Phone: ${user.phone}`);
                $('#userCell').text(`Cell: ${user.cell}`);
                $('#userDOB').text(`DOB: ${new Date(user.dob.date).toLocaleDateString()} (Age: ${user.dob.age})`);
                $('#userNationality').text(`Nationality: ${user.nat}`);
                $('#loadingSpinner').hide();
                $('.profile-card').show();
            },
            error: function() {
                $('#loadingSpinner').hide();
                $('.placeholder-card').show();
            }
        });
    });
});
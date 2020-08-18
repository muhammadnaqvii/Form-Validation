$(function() {
	$('#estate-cb-solid').click(estateSolid);
	$('#estate-cb-percentage').click(estatePercentage);
	$('#6-cb-solid').click(sixSolid);
	$('#6-cb-percentage').click(sixPercentage);
	$('#7-cb-solid').click(sevenSolid);
	$('#7-cb-percentage').click(sevenPercentage);
	$('#8-cb-solid').click(eightSolid);
	$('#8-cb-percentage').click(eightPercentage);
	$('#9-cb-solid').click(nineFlat);
	$('#9-cb-percentage').click(ninePer);
	$('#14-cb-solid').click(fourteenSolid);
	$('#14-cb-percentage').click(fourteenPercentage);
	$('#16-cb-solid').click(sixteenSolid);
	$('#16-cb-percentage').click(sixteenPercentage);
});

function estateSolid() {
	$('#estate-txt-solid').prop('disabled', false);
	$('#estate-txt-percentage').val('');
	$('#estate-txt-percentage').prop('disabled', true);
	$('#estate-cb-percentage').prop('checked', false);
}

function estatePercentage() {
	$('#estate-txt-solid').val('');
	$('#estate-txt-solid').prop('disabled', true);
	$('#estate-txt-percentage').prop('disabled', false);
	$('#estate-cb-solid').prop('checked', false);
}

function sixSolid() {
	$('#6-txt-solid').prop('disabled', false);
	$('#6-txt-percentage').val('');
	$('#6-txt-percentage').prop('disabled', true);
	$('#6-cb-percentage').prop('checked', false);
}

function sixPercentage() {
	$('#6-txt-solid').val('');
	$('#6-txt-solid').prop('disabled', true);
	$('#6-txt-percentage').prop('disabled', false);
	$('#6-cb-solid').prop('checked', false);
}

function sevenSolid() {
	$('#7-txt-solid').prop('disabled', false);
	$('#7-txt-percentage').val('');
	$('#7-txt-percentage').prop('disabled', true);
	$('#7-cb-percentage').prop('checked', false);
}

function sevenPercentage() {
	$('#7-txt-solid').val('');
	$('#7-txt-solid').prop('disabled', true);
	$('#7-txt-percentage').prop('disabled', false);
	$('#7-cb-solid').prop('checked', false);
}

function eightSolid() {
	$('#8-txt-solid').prop('disabled', false);
	$('#8-txt-percentage').val('');
	$('#8-txt-percentage').prop('disabled', true);
	$('#8-cb-percentage').prop('checked', false);
}

function eightPercentage() {
	$('#8-txt-solid').val('');
	$('#8-txt-solid').prop('disabled', true);
	$('#8-txt-percentage').prop('disabled', false);
	$('#8-cb-solid').prop('checked', false);
}

function nineFlat() {
	$('#9-txt-solid').prop('disabled', false);
	$('#9-txt-percentage').val('');
	$('#9-txt-percentage').prop('disabled', true);
	$('#9-cb-percentage').prop('checked', false);
}

function ninePer() {
	$('#9-txt-solid').val('');
	$('#9-txt-solid').prop('disabled', true);
	$('#9-txt-percentage').prop('disabled', false);
	$('#9-cb-solid').prop('checked', false);
}

function fourteenSolid() {
	$('#14-txt-solid').prop('disabled', false);
	$('#14-txt-percentage').val('');
	$('#14-txt-percentage').prop('disabled', true);
	$('#14-cb-percentage').prop('checked', false);
}

function fourteenPercentage() {
	$('#14-txt-solid').val('');
	$('#14-txt-solid').prop('disabled', true);
	$('#14-txt-percentage').prop('disabled', false);
	$('#14-cb-solid').prop('checked', false);
}

function sixteenSolid() {
	$('#16-txt-solid').prop('disabled', false);
	$('#16-txt-percentage').val('');
	$('#16-txt-percentage').prop('disabled', true);
	$('#16-cb-percentage').prop('checked', false);
}

function sixteenPercentage() {
	$('#16-txt-solid').val('');
	$('#16-txt-solid').prop('disabled', true);
	$('#16-txt-percentage').prop('disabled', false);
	$('#16-cb-solid').prop('checked', false);
}

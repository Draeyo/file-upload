$("input[type='file']").click(function () {
		$("input[id='file']").click();
});

$("input[id='file']").change(function (e) {
		var $this = $(this);
		$this.next().html($this.val().split('\\').pop());
});

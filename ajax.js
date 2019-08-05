 $(document).ready(function () {
	 console.log('start');
        $.ajax({
            type: "GET",
            url: "https://img.ignio.com/r/export/utf/xml/daily/com.xml",
            cache: false,
            dataType: "xml",
            success: function(xml) {
               console.log(xml)
            }
        });
		console.log('finish');
    });
$(document).ready(function() {
		
	//회원가입 버튼 클릭할때 이벤트 처리 부분
	$("form").submit(function() {
		
		// $.trim(문자열)는 문자열의 앞, 뒤 공백을 제거합니다.
		if ($.trim($("#id").val()) == ""){
			alert("ID를 입력하세요");
			$("#id").focus();
			return false;
		}
		
		if ($.trim($("#pass").val()) == ""){
			alert("비밀번호를 입력하세요");
			$("#pass").focus();
			return false;
		}
		
		if ($.trim($("#jumin1").val()) == ""){
			alert("주민번호 앞자리를 입력하세요");
			$("#jumin1").focus();
			return false;
		}
		
		if ($.trim($("#jumin1").val()).leangth != 6){
			alert("주민번호 앞자리 6자리를 입력하세요");
			$("#jumin1").val("").focus();
			return false;
		}
		
		if ($.trim($("#jumin2").val()) == ""){
			alert("주민번호 뒷자리를 입력하세요");
			$("#jumin2").focus();
			return false;
		}
		
		if ($.trim($("#jumin2").val()).leangth != 7){
			alert("주민번호 뒷자리 7자리를 입력하세요");
			$("#jumin2").val("").focus();
			return false;
		}
		
		if ($.trim($("#email").val()) == ""){
			alert("E-Mail주소를 입력 하세요");
			$("#email").focus();
			return false;
		}
		
		if ($.trim($("#domain").val()) == ""){
			alert("도메인 주소를 입력 하세요");
			$("#domain").focus();
			return false;
		}
		
		if ($.trim($("#domain").val()) == ""){
			alert("도메인 주소를 입력 하세요");
			$("#domain").focus();
			return false;
		}
		
		/*
		 var cnt =$('intput:radio:checked').length;
		 if(cnt==0){
			alert("성별을 선택하세요")
			return false;
		}
		*/
		
		var cnt =$('intput:checkbox:checked').length;
		if (cnt < 2) {
			alert("취미는 2개이상 선택하세요");
			return false;
		}
		
		if ($.trim($("#post1").val()) == ""){
			alert("우편번호를 입력 하세요");
			$("#post1").focus();
			return false;
		}
		
		if (!$.isNumeric($("#post1").val())){
			alert("우편번호는 숫자만 입력 가능 합니다.");
			$("#post1").val("").focus();
			return false;
		}
		
		if ($.trim($("#intro").val()) == ""){
			alert("자기소개를 입력 하세요");
			$("#intro").focus();
			return false;
		}
		
	});// submit() end
	
	});
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Delivery Management System</title>
<!-- Bootstrap core CSS -->
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">

<!-- Custom styles for this template -->
<link href="${pageContext.request.contextPath}/resources/css/signin.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/jquery-ui.min.css"
	rel="stylesheet">
<link href="${pageContext.request.contextPath}/resources/css/theme.css"
	rel="stylesheet">

<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/jquery-3.1.0.min.js"></script>

<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/jquery-ui.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/jquery.tablesorter.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/dataTables.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/main.js"></script>

</head>
<body>
	<div id="loginDiv">
		<div>
		Login as Admin to manage the details <br> <br>
		<form action="LoginController" method="post">
			<div style="margin-bottom: 5px;">
				Username <input type="text" name="username">
			</div>
			<div>
				Password <input type="password" name="password">
			</div>
			<input type="submit" value="Login" id="loginBtn"
				class="btn btn-xs btn-primary" style="margin-top: 10px;">
		</form>
		</div>
		<div id="updatePasswordDiv" class="hide">
		Update Your Password <br> <br>
		<form action="changePasswordController" method="post">
			<div style="margin-bottom: 5px;">
				Enter Old Password <input type="password" name="oldPassword">
			</div>
			<div style="margin-bottom: 5px;">
				Enter New Password <input type="password" name="oldPassword">
			</div>
			<div>
				Enter New Password Again <input type="password" name="newPassword">
			</div>
			<input type="submit" value="Login" id="changePasswordButton"
				class="btn btn-xs btn-primary" style="margin-top: 10px;">
		</form>
	</div>
	<a href="#" id="updatePassword">Update Password</a>
	<a href="#">Update Password</a>
	</div>
	
</body>

</html>
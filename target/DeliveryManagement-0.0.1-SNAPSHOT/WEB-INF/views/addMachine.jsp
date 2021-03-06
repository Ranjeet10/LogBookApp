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
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

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
	src="${pageContext.request.contextPath}/resources/js/main.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/jquery-ui.min.js"></script>

</head>
<body>

	<div>
		<div class="container">
			<div class="row">
				<div></div><a class="myFont-text navbar-brand" href="/DeliveryManagement"
				style="color: blue;">Delivery Management System</a></div>
				<div><h3 style="margin-top: 0px;">Add Machine</h3></div>
				<span style="color:red;padding:5px;" id="msg"></span>
				<table>
					<!-- <tr>
						<td>Enter Machine Id:</td>
						<td><input id="add_machine_id" name="add_machine_id" /></td>
					</tr> -->
					<tr>
						<td>Enter Machine Name:</td>
						<td><input id="add_machine_name" name="add_machine_name" /></td>
					</tr>
					<tr>
						<td></td>
						<td><input style="margin-top: 10px;" type="submit"
							class="btn btn-xs btn-primary pull-right" id="add_machine_details"
							value="Add Machine"></td>
					</tr>
				</table>
				<span style="color:green;padding:5px;" id="savingMsg"></span>
			</div>
		</div>
</body>
</html>

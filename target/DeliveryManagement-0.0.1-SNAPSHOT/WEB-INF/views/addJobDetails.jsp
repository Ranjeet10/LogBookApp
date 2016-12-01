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

	<!-- <div class="container">
		<div class="navbar-header">
			<a class="myFont-text navbar-brand" href="/DeliveryManagement"
				style="color: blue;">Delivery Management System</a>
		</div>
	</div> -->

	<div>
		<div class="container">
			<div class="row">
				<div></div><a class="myFont-text navbar-brand" href="/DeliveryManagement"
				style="color: blue;">Delivery Management System</a></div>
				<div><h3 style="margin-top: 0px;">Job Detail Information</h3></div>
					<span style="color: red; padding: 5px;" id="msg"></span>
					<table>
						<tr>
						<td>Today is:</td>
						<td id="today_date"></td>
						</tr>
						<!-- <tr>
						<td>Enter your Employee Id:</td>
						<td><input id="empId_add_job" name="empId" /></td>
						</tr> -->
						<tr>
							<td>Employee:</td>
							<td ><select id="employee_select" style="width:100%;">
									<option value="-1">--Select Employee--</option>
									<c:forEach items="${employees}" var="employee">
										<option value="${employee.id}">${employee.employeeId}  (${employee.firstName} ${employee.lastName})</option>
									</c:forEach>
							</select></td>
						</tr>
						<tr>
							<td>Machine:</td>
							<td ><select id="machine_select" style="width:100%;">
									<option value="-1">--Select Machine--</option>
									<c:forEach items="${machines}" var="machine">
										<option value="${machine.id}">${machine.machineName}</option>
									</c:forEach>
							</select></td>
						</tr>
						<tr><td>Part Number:</td><td><input id="partNumber" name="partNumber"/></td></tr>
						<tr><td>Details:</td><td><textarea id="details" name="details"></textarea></td></tr>
						<tr><td>Quantity:</td><td><input id="quantity" name="quantity"/></td></tr>
						<tr><td>Production Order Number:</td><td><input id="orderNo" name="orderNo"/></td></tr>
						<tr><td>Working Hours:</td></tr>
						<tr>
						<td>General Shift</td>
						<td><input type="radio" name="shift" value="8" CHECKED /></td>
						</tr>
						<tr>
						<td>General + Second</td>
						<td><input type="radio" name="shift" value="16" /></td>
						</tr>
						<tr>
						<td>General + Night</td>
						<td><input type="radio" name="shift" value="16" /></td>
						</tr>
						<tr>
						<td>Second + Night</td>
						<td><input type="radio" name="shift" value="16" /></td>
						</tr>
						<tr>
						<td>Second Shift</td>
						<td><input type="radio" name="shift" value="8" /></td>
						</tr>
						<tr>
						<td>Others(Specify in hrs:)</td>
						<td><input type="radio" name="shift" value="" id="others" /><input id="others_input" class="hide" type="text" name="shift" /></td>
						</tr>
						<tr>
						<td>BreakDown if any(Specify in hrs:)</td>
						<td><input type="text" name="breakDown" id="breakDown" /></td>
						</tr>
						<tr>
						<td>Remarks:</td>
						<td><textarea name="remarks" id="remarks"></textarea></td>
						</tr>
						<tr>
						    <td><input type="submit" class="btn btn-xs btn-primary pull-left" id="save_details"value="Save Details"></td>
							<td>
							<button type="button" class="btn btn-xs btn-success btn-block pull-right" style="width: 77px;" onclick="window.location.href='/DeliveryManagement'">Cancel</button></td>
						</tr>
					</table>
			</div>
			<span style="color: green; padding: 5px;" id="successMsg"></span>

		</div>
</body>
</html>

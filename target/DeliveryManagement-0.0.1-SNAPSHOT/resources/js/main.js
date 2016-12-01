$(document)
		.ready(
				function() {

					/*
					 * $(function() { var userId = $("#loggedInUser").val();
					 * if(userId== null || userId== ""){
					 * $("#getHotelBookingForm").removeAttr("href").click(function(){
					 * $("#login_Message").html("Please Sign In if already
					 * registered or Sign Up to proceed with booking hotel.");
					 * $("#login_Message").css("display","block");
					 * $("#login_Message").css("color","red"); }); } });
					 * 
					 * function validateLogin(){ var userId =
					 * $("#loggedInUser").val(); if(userId== null || userId==
					 * ""){ $("#login_Message").html("Please Sign In if already
					 * registered or Sign Up to proceed with booking hotel.");
					 * $("#login_Message").css("display","block");
					 * $("#login_Message").css("color","red"); return false;
					 * }else{ return true; } }
					 */

					/*
					 * $(document).on("change","#user_select",function(e) {
					 * //$('#hotel_select').find('option').remove().end().append('<option
					 * selected="selected" value="-1">--Select Hotel--</option>');
					 * //$('#hotel_select').find('option').attr("selected","selected");
					 * var empId = $( "#user_select option:selected"
					 * ).attr("value"); var empName = $( "#user_select
					 * option:selected" ).html(); var emp ={}; emp["cityName"] =
					 * empName; emp["cityId"] = empId; if(cityId != -1){
					 * $.ajax({ type : "POST", url : "getJobDetailsByEmp", data :
					 * JSON.stringify(city), contentType: "application/json",
					 * dataType: "json", success:function(data, textStatus,
					 * jqXHR) { console.log(data); if(data != null){
					 * $.each(data, function(key, value) { //
					 * $('#hotel_select').append($('<option>', { // value:
					 * value.hotelId, // text : value.hotelName // }));
					 * console.log(value.jobId); }); } }, error:function(jqXHR,
					 * textStatus, erroThrown){ alert("Something went wrong, not
					 * able to fetch hotels"); } }); } });
					 */

					$(function() {

						$('#filter_action').hide();
						$('input[name=shift]').click(function() {
							if ($(this).is(':checked') && $(this).val() == "") {
								$("#others").addClass("hide");
								$("#others_input").removeClass("hide");
							}
						});
						var d = new Date();
						var curr_date = d.getDate();
						var curr_month = d.getMonth() + 1; // Months are zero
						// based
						var curr_year = d.getFullYear();
						var today_date = (curr_year + "-" + curr_month + "-" + curr_date);

						$("#today_date").html(today_date);

						$(".datepicker").datepicker({});
						$("#format").change(
								function() {
									$("#datepicker").datepicker("option",
											"dateFormat", $(this).val());
								});
					});

					// $(document).on("change","#fetchHotels",function(e) {
					// var cityId = $( "#fetchHotels option:selected"
					// ).attr("value");
					// var cityName = $( "#fetchHotels option:selected"
					// ).html();
					// var city ={};
					// city ["cityName"] = cityName;
					// city ["cityId"] = cityId;
					// $("#hotelDetailsTable").html("");
					// if(cityId != -1){
					// $.ajax({
					// type : "POST",
					// url : "fetchLowestPricedHotels",
					// data : JSON.stringify(city),
					// contentType: "application/json",
					// dataType: "json",
					// success:function(response, textStatus, jqXHR) {
					// console.log(response);
					// if(response != null){
					// var data = "<thead><tr><th
					// style='width:65%;'>Hotel</th><th>Tariff Per
					// Day</th></tr></thead><tbody>";
					// $.each(response, function(key, value) {
					// data = data + "<tr><td>" + value.hotelName + "</td><td>"
					// + value.tariffPerDay + "</td></tr>";
					// });
					// data = data + "</tbody>"
					// $("#hotelDetailsTable").append(data);
					// }
					// },
					// error:function(jqXHR, textStatus, erroThrown){
					// alert("Something went wrong, not able to fetch hotels");
					// }
					// });
					// }
					// });

					$(document).on("click", "#get_emp_details", function(e) {

						var employee = {};
						var empId = $('#empId_info').val();
						employee["empId"] = empId;

						if (true) {
							getJobDetailsAsPerEmployee();

							/*
							 * $ .ajax({ type : "POST", url :
							 * "getEmployeeDetails", data : JSON
							 * .stringify(employee), contentType :
							 * "application/json; charset=utf-8", dataType :
							 * "json", success : function( response, textStatus,
							 * jqXHR) { if (response != null) { console
							 * .log(response); $("#empDetails") .html( ""); var
							 * data = "<b>Hello, </b>"; data = data + "<i>" +
							 * response.firstName + " " + response.lastName + "</i>";
							 * $("#empDetails") .append( data);
							 * 
							 * getJobDetailsAsPerEmployee(response.id); } },
							 * error : function(jqXHR, textStatus, erroThrown) {
							 * alert("Snot able to fetch employee details"); }
							 * });
							 */
						}
					});

					function getJobDetailsAsPerEmployee() {

						$("#empDetails").html("");
						var empId = $('#empId_info').val();
						var employee = {};
						var isValid = true;
						$("#msg").html("");
						$("#savingMsg").html("");

						if (empId == "") {
							$("#msg").html("Please provide Employee Id");
							isValid = false;
							return;
						} else if (isNaN(empId)) {
							$("#msg").html("Employee Id should be a number");
							isValid = false;
							return;
						} else if (parseInt(empId) < 0) {
							$("#msg").html("Employee Id cannot be negative");
							isValid = false;
							return;
						}
						if (isValid) {
							employee["partNumber"] = empId;
							$
									.ajax({
										type : "POST",
										url : "getJobDetailsByPartNumber",
										data : JSON.stringify(employee),
										contentType : "application/json; charset=utf-8",
										dataType : "json",
										success : function(response,
												textStatus, jqXHR) {
											if (response != null) {
												console.log(response);
												$('#filter_action').show();
												$("#msg").html("");
												var data = "<div style='padding: 10px 0px 5px 0px;'><b>Job Details</b></div>";
												data = data
														+ "<table border='1'><thead><tr><th style='text-align: center;padding: 5px;'>Part Number</th><th style='text-align: center;padding: 5px;'>Employee</th><th style='text-align: center;padding: 5px;'>Machine</th><th style='text-align: center;padding: 5px;'>Details</th><th style='text-align: center;padding: 5px;'>Quantity</th><th style='text-align: center;padding: 5px;'>Order Number</th><th style='text-align: center;padding: 5px;'>Working Hours</th><th style='text-align: center;padding: 5px;'>BreakDown</th><th style='text-align: center;padding: 5px;'>Remarks</th><th style='text-align: center;padding: 5px;'>Delivered Date</th></tr></thead><tbody>";
												$
														.each(
																response,
																function(key,
																		value) {
																	data = data
																			+ "<tr><td style='text-align: center;padding: 5px;'>"
																			+ value.partNumber
																			+ "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.plannedQuantity
																			// +
																			// "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.launchedQuantity
																			// +
																			// "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.deliveredQuantity
																			// +
																			// "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.employee.firstName
																			+ " "
																			+ value.employee.lastName
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.machine.machineName
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.details
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.qunatity
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.productionOrderNumber
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.workingHours
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.breakdownHours
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.remarks
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.savedDate
																			+ "</td>"
																			+ "</tr>";
																});
												data = data
														+ "</tbody></table>";
												$("#empDetails").append(data);
											}
										},
										error : function(jqXHR, textStatus,
												erroThrown) {
											alert("Not able to fetch job details");
										}
									});
						}

					}

					$(document)
							.on(
									"click",
									"#add_emp_details",
									function(e) {
										var empId = $('#add_emp_id').val();
										var firstName = $('#add_emp_first_name')
												.val();
										var lastName = $('#add_emp_last_name')
												.val();
										var employeeDetails = {};
										var isValid = true;
										$("#msg").html("");
										$("#savingMsg").html("");

										if (empId == "") {
											$("#msg")
													.html(
															"Please provide employee Id");
											isValid = false;
											return;
										} else if (isNaN(empId)) {
											$("#msg")
													.html(
															"Employee Id should be a number");
											isValid = false;
											return;
										} else if (parseInt(empId) < 0) {
											$("#msg")
													.html(
															"Employee Id cannot be negative");
											isValid = false;
											return;
										}
										if (firstName == "") {
											$("#msg")
													.html(
															"Please provide First Name");
											isValid = false;
											return;
										} else if (!isNaN(firstName)) {
											$("#msg")
													.html(
															"First Name should be a string");
											isValid = false;
											return;
										}
										if (lastName == "") {
											$("#msg").html(
													"Please provide Last Name");
											isValid = false;
											return;
										} else if (!isNaN(lastName)) {
											$("#msg")
													.html(
															"Last Name should be a string");
											isValid = false;
											return;
										}

										if (isValid) {
											employeeDetails["empId"] = empId;
											employeeDetails["firstName"] = firstName;
											employeeDetails["lastName"] = lastName;

											$
													.ajax({
														type : "POST",
														url : "saveEmployeeDetails",
														data : JSON
																.stringify(employeeDetails),
														contentType : "application/json; charset=utf-8",
														success : function(
																data,
																textStatus,
																jqXHR) {
															if (data == null
																	|| data == "") {
																var savingMsg = "Error saving employee details";
																$("#savingMsg")
																		.html(
																				savingMsg);
															} else {
																var savingMsg = "Employee Details saved successfully ";
																$("#msg").html(
																		"");
																$("#savingMsg")
																		.html(
																				savingMsg);
															}

														},
														error : function(jqXHR,
																textStatus,
																erroThrown) {
															alert("Something went wrong, not able to book rooms");
														}
													});
										}
									});

					$(document)
							.on(
									"click",
									"#save_details",
									function(e) {
										// var empId = $("#loggedInUser").val();
										// var empId =
										// $('#empId_add_job').val();
										$("#msg").html("");
										$("#savingMsg").html("");
										var partNumber = $('#partNumber').val();
										/*
										 * var plannedQauntity = $(
										 * '#plannedQauntity').val(); var
										 * launchedQuantity = $(
										 * '#launchedQuantity').val(); var
										 * deliveredQuantity = $(
										 * '#deliveredQuantity').val();
										 */
										var details = $('#details').val();
										var quantity = $('#quantity').val();
										var orderNo = $('#orderNo').val();
										var workingHours = $(
												"input[name='shift']:checked")
												.val();
										if (workingHours == "") {
											workingHours = $("#others_input")
													.val();
										}
										var breakDown = $('#breakDown').val();
										var remarks = $('#remarks').val();
										var empId = $(
												"#employee_select option:selected")
												.val();
										var machineId = $(
												"#machine_select option:selected")
												.val();
										var savedDate = $("#today_date").html();
										// var partNumber = "213141431";
										var jobDetails = {};

										var isValid = true;
										if (empId == -1) {
											$("#msg")
													.html(
															"Please select an employee");
											isValid = false;
											return;
										}
										if (machineId == -1) {
											$("#msg").html(
													"Please select a machine");
											isValid = false;
											return;
										}

										// if (checkInDate == "") {
										// $("#checkIn_Date_err").html("Value
										// provided for check in date is
										// incomplete.");
										// $("#checkIn_Date_err").css("display","block");
										// isValid = false;
										// }

										//
										if (partNumber == "") {
											$("#msg")
													.html(
															"Please provide part Number");
											isValid = false;
											return;
										} else if (isNaN(partNumber)) {
											$("#msg")
													.html(
															"Part Number should be a number");
											isValid = false;
											return;
										} else if (parseInt(partNumber) < 0) {
											$("#msg")
													.html(
															"Part Number cannot be negative");
											isValid = false;
											return;
										}

										if (details == "") {
											details = "";
										}

										if (quantity == "") {
											$("#msg").html(
													"Please provide quantity");
											isValid = false;
											return;
										} else if (isNaN(quantity)) {
											$("#msg")
													.html(
															"Quantity should be a number");
											isValid = false;
											return;
										} else if (parseInt(quantity) < 0) {
											$("#msg")
													.html(
															"Quantity cannot be negative");
											isValid = false;
											return;
										}

										if (workingHours == "") {
											$("#msg")
													.html(
															"Please provide Working hours");
											isValid = false;
											return;
										} else if (isNaN(workingHours)) {
											$("#msg")
													.html(
															"Working hours should be a number");
											isValid = false;
											return;
										} else if (parseInt(workingHours) < 0) {
											$("#msg")
													.html(
															"Working hours should be greater than 0");
											isValid = false;
											return;
										}

										if (orderNo == "") {
											$("#msg").html(
													"Please provide order No.");
											isValid = false;
											return;
										} else if (isNaN(orderNo)) {
											$("#msg")
													.html(
															"Order No. should be a number");
											isValid = false;
											return;
										} else if (parseInt(orderNo) < 0) {
											$("#msg")
													.html(
															"Order number cannot be negative");
											isValid = false;
											return;
										}

										if (breakDown == "") {
											breakDown = "0";
										}
										if (isNaN(breakDown)) {
											$("#msg")
													.html(
															"Break down hours should be a number");
											isValid = false;
											return;
										} else if (parseInt(breakDown) < 0) {
											$("#msg")
													.html(
															"Break down hours should be greater than 0");
											isValid = false;
											return;
										}

										if (remarks == "") {
											remarks = "";
										}

										if (isValid) {
											/*
											 * if
											 * ($('input[name=shift]:checked')
											 * .val() == "") {
											 * $("#others").addClass("hide");
											 * $("#others_input").removeClass(
											 * "hide"); }
											 */

											jobDetails["empId"] = empId;
											jobDetails["partNumber"] = partNumber;
											jobDetails["savedDate"] = savedDate;
											/*
											 * jobDetails["plannedQauntity"] =
											 * plannedQauntity;
											 * jobDetails["launchedQuantity"] =
											 * launchedQuantity;
											 * jobDetails["deliveredQuantity"] =
											 * deliveredQuantity;
											 */
											jobDetails["details"] = details;
											jobDetails["quantity"] = quantity;
											jobDetails["orderNo"] = orderNo;
											jobDetails["workingHours"] = workingHours;
											jobDetails["breakDown"] = breakDown;
											jobDetails["remarks"] = remarks;
											jobDetails["machineId"] = machineId;
											// jobDetails["cityName"] =
											// cityName;
											// jobDetails["hotelId"] = hotelId;
											// jobDetails["checkInDate"] =
											// checkInDate;
											// bookingDetails["checkOutDate"] =
											// checkOutDate;
											// bookingDetails["numberOfRooms"] =
											// numberOfRooms;

											$
													.ajax({
														type : "POST",
														url : "saveJobDetails",
														data : JSON
																.stringify(jobDetails),
														contentType : "application/json; charset=utf-8",
														success : function(
																data,
																textStatus,
																jqXHR) {
															var bookingMsg = "Details saved successfully ";
															$("#msg").html("");
															$("#successMsg")
																	.html(
																			bookingMsg);
														},
														error : function(jqXHR,
																textStatus,
																erroThrown) {
															alert("Something went wrong, not able to save details");
														}
													});
										}
									});

					$(document).on("click", "#filterJobDetails", function(e) {
						getFilteredJobDetailsByDate();
					});

					function getFilteredJobDetailsByDate() {

						$("#empDetails").html("");
						var isValid = true;
						var filteringDetails = {};
						// var empId = $('#empId_info').val();
						var machineId = $(
								"#machine_get_details option:selected").val();

						var fromDate = $('#from_date').val();
						var toDate = $('#to_date').val();
						$("#msg").html("");
						$("#savingMsg").html("");

						if (machineId == -1) {
							$("#msg").html("Please select a machine");
							isValid = false;
							return;
						}

						/*
						 * if (empId == "") { $("#msg").html("Please provide
						 * Employee Id"); isValid = false; return; } else if
						 * (isNaN(empId)) { $("#msg").html("Employee Id should
						 * be a number"); isValid = false; return; } else if
						 * (parseInt(empId) < 0) { $("#msg").html("Employee Id
						 * cannot be negative"); isValid = false; return; }
						 */

						if (fromDate == "") {
							$("#msg").html("Please provide from date");
							isValid = false;
							return;
						}
						if (toDate == "") {
							$("#msg").html("Please provide To date");
							isValid = false;
							return;
						}

						if (isValid) {

							// filteringDetails["id"] = String(empId);
							filteringDetails["machineId"] = String(machineId);
							filteringDetails["fromDate"] = String(fromDate);
							filteringDetails["toDate"] = String(toDate);

							$
									.ajax({
										type : "POST",
										// url : "getFilteredJobDetails",
										url : "getFilteredJobDetailsByMachine",
										data : JSON.stringify(filteringDetails),
										contentType : "application/json; charset=utf-8",
										dataType : "json",
										success : function(response,
												textStatus, jqXHR) {
											if (response != null) {
												console.log(response);
												$('#filter_action').show();
												$("#empDetails").html("");
												var data = "<div style='padding: 10px 0px 5px 0px;'><b>Job Details</b></div>";
												data = data
														+ "<table border='1'><thead><tr><th style='text-align: center;padding: 5px;'>Part Number</th><th style='text-align: center;padding: 5px;'>Employee</th><th style='text-align: center;padding: 5px;'>Machine</th><th style='text-align: center;padding: 5px;'>Details</th><th style='text-align: center;padding: 5px;'>Quantity</th><th style='text-align: center;padding: 5px;'>Order Number</th><th style='text-align: center;padding: 5px;'>Working Hours</th><th style='text-align: center;padding: 5px;'>BreakDown</th><th style='text-align: center;padding: 5px;'>Remarks</th><th style='text-align: center;padding: 5px;'>Delivered Date</th></tr></thead><tbody>";
												$
														.each(
																response,
																function(key,
																		value) {
																	data = data
																			+ "<tr><td style='text-align: center;padding: 5px;'>"
																			+ value.partNumber
																			+ "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.plannedQuantity
																			// +
																			// "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.launchedQuantity
																			// +
																			// "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.deliveredQuantity
																			// +
																			// "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.employee.firstName
																			+ " "
																			+ value.employee.lastName
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.machine.machineName
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.details
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.qunatity
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.productionOrderNumber
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.workingHours
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.breakdownHours
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.remarks
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.savedDate
																			+ "</td>"
																			+ "</tr>";
																});
												data = data
														+ "</tbody></table>";
												$("#empDetails").append(data);
											}
										},
										error : function(jqXHR, textStatus,
												erroThrown) {
											alert("Not able to fetch job details");
										}
									});
						}

					}

					$(document)
							.on(
									"click",
									"#add_machine_details",
									function(e) {
										/*
										 * var machineId = $('#add_machine_id')
										 * .val();
										 */
										var machineName = $('#add_machine_name')
												.val();
										var machineDetails = {};
										var isValid = true;
										$("#msg").html("");
										$("#savingMsg").html("");

										if (machineName == "") {
											$("#msg")
													.html(
															"Please provide Machine Name");
											isValid = false;
											return;
										} else if (!isNaN(machineName)) {
											$("#msg")
													.html(
															"Machine Name should be a string");
											isValid = false;
											return;
										}
										if (isValid) {
											// machineDetails["machineId"] =
											// machineId;
											machineDetails["machineName"] = machineName;

											$
													.ajax({
														type : "POST",
														url : "saveMachineDetails",
														data : JSON
																.stringify(machineDetails),
														contentType : "application/json; charset=utf-8",
														success : function(
																data,
																textStatus,
																jqXHR) {
															if (data == null
																	|| data == "") {
																var savingMsg = "Error saving mahine details";
																$("#savingMsg")
																		.html(
																				savingMsg);
															} else {
																var savingMsg = "Machine details saved successfully";
																$("#savingMsg")
																		.html(
																				savingMsg);
															}

														},
														error : function(jqXHR,
																textStatus,
																erroThrown) {
															alert("Something went wrong, not able to book rooms");
														}
													});
										}
									});

					$(document).on("click", "#getJobDetailsByMachine",
							function(e) {
								getAllJobDetailsByMachine();
							});

					function getAllJobDetailsByMachine() {

						$("#empDetails").html("");
						// var machineName = $('#machine_name').val();
						var machineId = $(
								"#machine_get_details option:selected").val();
						var machine = {};
						var isValid = true;
						$("#msg").html("");
						$("#savingMsg").html("");
						if (machineId == -1) {
							$("#msg").html("Please select a machine");
							isValid = false;
							return;
						}

						// if (machineName == "") {
						// $("#msg").html("Please provide Machine Name");
						// isValid = false;
						// return;
						// } else if (!isNaN(machineName)) {
						// $("#msg").html("Machine Name cannot be a number");
						// isValid = false;
						// return;
						// }
						if (isValid) {
							machine["machineId"] = machineId;
							$
									.ajax({
										type : "POST",
										url : "getJobDetailsByMachineId",
										data : JSON.stringify(machine),
										contentType : "application/json; charset=utf-8",
										dataType : "json",
										success : function(response,
												textStatus, jqXHR) {
											if (response != null) {
												console.log(response);
												$('#filter_action').show();
												$("#msg").html("");
												var data = "<div style='padding: 10px 0px 5px 0px;'><b>Job Details</b></div>";
												data = data
														+ "<table border='1'><thead><tr><th style='text-align: center;padding: 5px;'>Part Number</th><th style='text-align: center;padding: 5px;'>Employee</th><th style='text-align: center;padding: 5px;'>Machine</th><th style='text-align: center;padding: 5px;'>Details</th><th style='text-align: center;padding: 5px;'>Quantity</th><th style='text-align: center;padding: 5px;'>Order Number</th><th style='text-align: center;padding: 5px;'>Working Hours</th><th style='text-align: center;padding: 5px;'>BreakDown</th><th style='text-align: center;padding: 5px;'>Remarks</th><th style='text-align: center;padding: 5px;'>Delivered Date</th></tr></thead><tbody>";
												$
														.each(
																response,
																function(key,
																		value) {
																	data = data
																			+ "<tr><td style='text-align: center;padding: 5px;'>"
																			+ value.partNumber
																			+ "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.plannedQuantity
																			// +
																			// "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.launchedQuantity
																			// +
																			// "</td>"
																			// +
																			// "<td
																			// style='text-align:
																			// center;padding:
																			// 5px;'>"
																			// +
																			// value.deliveredQuantity
																			// +
																			// "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.employee.firstName
																			+ " "
																			+ value.employee.lastName
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.machine.machineName
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.details
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.qunatity
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.productionOrderNumber
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.workingHours
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.breakdownHours
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.remarks
																			+ "</td>"
																			+ "<td style='text-align: center;padding: 5px;'>"
																			+ value.savedDate
																			+ "</td>"
																			+ "</tr>";
																});
												data = data
														+ "</tbody></table>";
												$("#empDetails").append(data);
											}
										},
										error : function(jqXHR, textStatus,
												erroThrown) {
											alert("Not able to fetch job details");
										}
									});
						}

					}

				});

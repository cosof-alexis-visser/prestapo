<!DOCTYPE html>
<html>
<head>
	<title>PrEsTaPo::Sistema de gestión de prestamos</title>
	<link rel="stylesheet" type="text/css" href="../librerias/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../librerias/css/base.css">
</head>
<body>
	<div class="container mt-3">
		<h4>Registro del Solicitante</h4>
		<hr>
		<div class="col-md-8 offset-md-2">
			<form action="../controlador/proceso.php" method="post" class="mt-5">
				<fieldset>
					<legend>Datos del solicitante</legend>
					<div class="form-group row">
						<label class="lbl col-md-3">RUT <small style="color:red;vertical-align: top">(*)</small></label>
						<div class="col-md-6">
							<input type="text" id="txt_solicitante" name="txt_solicitante" placeholder="Ingrese RUT sin puntos ni guion" class="form-control">
						</div>
					</div>
					<!---------------------------------------- Aqui comienza la seccion de registro de datos del solicitante ------------------------------>
					<section id="div_solicitante">
						<div class="form-group row">
							<label class="lbl col-md-3">Nombres <small style="color:red ;vertical-align: top">(*)</small></label>
							<div class="col-md-9">
								<input type="text" id="txt_nombre" name="txt_nombre" placeholder="Ingrese primer y segundo nombre" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="lbl col-md-3">Apellidos <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-9">
								<input type="text" id="txt_apellido" name="txt_apellido" placeholder="Ingrese primer y segundo apellido" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="lbl col-md-3">Teléfono <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-3">
								<input type="text" id="nr_telefono" name="nr_telefono" placeholder="Sólo números" class="form-control">
							</div>
							<label class="lbl col-md-2">Email <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-4">
								<input type="text" id="txt_email" name="txt_email" placeholder="@" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="lbl col-md-3">Cargo <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-8">
								<select id="cbx_cargo" class="form-control">
									<option value="">Seleccione</option>
									<!-- Aquí se construirán las opciones dinámicas-->
								</select>
							</div>
						</div>
						<div class="form-group row">
							<label class="lbl col-md-3">Jefe directo <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-8">
								<select id="cbx_jefe_directo" class="form-control">
									<option value="">Seleccione</option>
									<!-- Aquí se construirán las opciones dinámicas-->
								</select>
							</div>
						</div>
						<div class="form-group row justify-content-md-end p-3">
							<button class="btn btn-success">Registrar</button>
						</div>
					</section>
				</fieldset>				
			</form>
		</div>
	</div>
</body>
</html>
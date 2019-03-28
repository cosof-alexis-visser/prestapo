<!DOCTYPE html>
<html>
<head>
	<title>PrEsTaPo::Sistema de gestión de prestamos</title>
	<link rel="stylesheet" type="text/css" href="../librerias/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../librerias/css/base.css">
</head>
<body>
	<div class="container mt-3">
		<h4>Solicitud de Prestamos</h4>
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
				</fieldset>
				<!---------------------------------------- Aqui comienza la seccion de prestamo ------------------------------>
				<section id="div_prestamo" style="display: block">
					<fieldset>
						<legend>Datos del préstamo</legend>
						<div class="form-group row">
							<label class="lbl col-md-3">Desde <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-4">
								<input type="date" id="fc_prestamo" name="fc_prestamo" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="lbl col-md-3">Hasta <small style="color:red;vertical-align: top">(*)</small></label>
							<div class="col-md-4">
								<input type="date" id="fc_devolucion" name="fc_devolucion" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="lbl col-md-3">Motivo <small style="vertical-align: top">(Opcional)</small></label>
							<div class="col-md-9">
								<textarea  id="txt_motivo" name="txt_motivo" rows="6" class="form-control" style="resize: none" placeholder="Razón del préstamo"></textarea>
							</div>
						</div>						
					</fieldset>
				</section>
				<div class="form-group row justify-content-md-end p-3">
					<button class="btn btn-warning">Siguiente</button>
				</div>
			</form>
		</div>
	</div>
</body>
</html>
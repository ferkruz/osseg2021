
function LoginAfiPres() {
    
        
        return(
            <>
<div className="container">              
<div className="wrap-appointment d-md-flex">
        <div className="col-md-8 bg-primary p-5 heading-section heading-section-white shadow p-3 mb-5 bg-white">
            <span className="subheading"></span>
            <h2 className="mb-6">Exclusivo AFILIADOS</h2>
            <form action="#" className="appointment">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="form-group">
                    <input type="text" className="form-control" placeholder="Número"/>
                </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="select-wrap">
                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                <select name="" id="" className="form-control">
                                    <option value="">Tipo Documento</option>
                                    <option value="">D.N.I</option>
                                    <option value="">C.E</option>
                                    <option value="">L.C</option>
                                    <option value="">L.E</option>
                                    <option value="">Pasaporte</option>
                                    <option value="">Certificado de Migraciones</option>
                                </select>
                                
                            </div>
                </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="form-group">
                    <input type="submit" value="Ingresar" className="btn btn-secondary py-3 px-4"/>
                </div>
                        </div>
                </div>
        </form>
        </div>
        <div className="col-md-4 bg-white text-center p-5 shadow p-3 mb-5 bg-white">
            <div className="desc border-bottom pb-4">
                <h2>Línea de Orientación al Afiliado</h2>
            </div>
                <div className="desc pt-4 ">
                    <h3 className="heading">0800-777-67734</h3>
                    <span className="phone">HORARIO 10 A 18HS</span>
                </div>	
        </div>
</div>	
<div className="wrap-appointment d-md-flex">
			<div className="col-md-8 bg-primary p-5 heading-section heading-section-white shadow p-3 mb-5 bg-white">
				<span className="subheading"></span>
				<h2 className="mb-6">Exclusivo PRESTADORES</h2>
				<form action="#" className="appointment">
					<div className="row justify-content-center">
							<div className="col-md-6">
								<div className="form-group">
					  <input type="text" className="form-control" placeholder="Número Prestador"/>
					</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
					  <input type="text" className="form-control" placeholder="Password"/>
					</div>
							</div>
							
							<div className="col-md-6">
								<div className="form-group">
					  <input type="submit" value="Ingresar" className="btn btn-secondary py-3 px-4"/>
					</div>
							</div>
					</div>
				</form>
			</div>
			<div className="col-md-4 bg-white text-center p-5 shadow p-3 mb-5 bg-white">
				<div className="desc border-bottom pb-4">
					<h2>Cobranzas a Empresas</h2>
				</div>
					<div className="desc pt-4 ">
						<h3 className="heading">116155-7941</h3>
						<span className="overlay">COBRANZASEMPRESAS@OSSEG.ORG.AR</span>
					</div>	
			</div>
</div>
</div>  
            </>
        );
}
export default LoginAfiPres
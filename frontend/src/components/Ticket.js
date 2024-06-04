import React from 'react';
import '../Styles/FormSolicitud.css';
import '../Styles/boton1.css';


function Ticket() {
  return (       
                <div className='form-solicitud'>
                        <div className='form-box-h3'>
                            <h3 >Solicitud de Mesa de Ayuda</h3>   
                        </div>
                        <div className='form-box'> 
                            <div className='form-box-order'>
                                <div className='container-label-input'>
                                    <label className='label-box'>Número de Solicitud</label>
                                    <input className='input-box'></input>
                                </div>
                                <div className='container-label-input'>
                                    <label className='label-box'>Fecha Ingreso</label>
                                    <input className='input-box'></input>
                                </div>
                            </div>
                            <div className='form-box-order'>
                                <div className='container-label-input'>
                                    <label className='label-box'>Solicitante Nombre</label>
                                    <input className='input-box'></input>
                                </div>
                                <div className='container-label-input'>
                                    <label className='label-box'>Correo Electrónico</label>
                                    <input className='input-box'></input>
                                </div>
                            </div>
                       
                        </div>
                    <div className='form-box-h3'>
                         <h3 >Detalle Solicitud</h3>
                    </div>
                    <div className='form-box2' >
                        <div className='form-box-order2' >
                            <div className='container-label-input'>
                                <label className='label-box' >Empresa*</label>
                                <select className='input-box2'>
                                <option disabled selected hidden></option>
                                <option>AEROCARDAL</option>
                                <option>FBO</option>
                                </select>
                        </div> 
                        </div>
                        <div className='form-box-order2'>
                        <div className='container-label-input'>
                            <label className='label-box'>Área*</label>
                            <select className='input-box2'>
                            <option disabled selected hidden></option>
                            <option>Seleccione una opción</option>
                            </select>
                        </div>
                        </div>
                        <div className='form-box-order2'>
                        <div className='container-label-input'>
                            <label className='label-box'>Motivo*</label>
                            <select className='input-box2'>
                            <option disabled selected hidden></option>
                            <option>Seleccione una opción</option>
                            </select>
                        </div>
                        </div>
                        <div className='form-box-order2'>
                        <div className='container-label-input'>
                            <label className='label-box'>Submotivo*</label>
                            <select className='input-box2'>
                            <option disabled selected hidden></option>
                            <option>Seleccione una opción</option>
                            
                            </select>
                        </div>
                        </div>
                        <div className='form-box-order2'>
                            <div className='container-label-input' >
                                <label className='label-box'>Observación*</label>
                                <textarea className='input-box2'>
                                </textarea>
                            </div>
                        
                        </div>
                        
                    
                        <div className='container-btn' >
                            <button className='btn success'>
                            Enviar
                            </button>
                            <button className='btn primary'>
                            Volver
                            </button>
                        </div>
                    </div>
                </div>
          
  );
}
export default Ticket;
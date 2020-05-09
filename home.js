import React, { Component, Fragment } from 'react';

// Import Components in a Page
import Calendari from '../components/Calendari';
import Usersform from '../components/Usersform';
import Perfil from '../components/Perfil';
import Video from '../components/Video';

class home extends Component {
	state = {
		form: {
			nombre: 'David',
			apellido: 'Lechuga Huerta',
			empresa: 'Developer jr',
			edad: '25',
			emails: 'lechugateca@hotmail.com',
			tipo: 'Unam'
		}
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	render() {
		const margen = {
			marginTop: '50px'
		};
		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6" style={margen}>
							<Calendari />
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6" style={margen}>
							<Usersform onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
					<div className="row">
						<div className="col-12" style={margen}>
							<Perfil
								nombre={this.state.form.nombre}
								apellido={this.state.form.apellido}
								emails={this.state.form.emails}
								empresa={this.state.form.empresa}
								edad={this.state.form.edad}
								tipo={this.state.form.tipo}
							/>

							<Video />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default home;

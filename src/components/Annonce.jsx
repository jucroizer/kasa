import '../styles/Annonce.css'

function LogementItem({ cover, title}) {
	return (
		<li className='logement-item item'>
			<img className='logement-item-cover' src={cover} alt={`${title} cover`} />
			<div className='cover-gradient'></div>
			<p className='logement-item-title'>{title}</p>
		</li>
	)
}

export default LogementItem
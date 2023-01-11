// import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import fondAcceuil from '../assets/fondAcceuil.png'

function Home() {

	return (
		<div>
			<Banner />
            <div>
                <img src={fondAcceuil}  alt='décoration de la page d accueil'></img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
			{/* <div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer /> */}
		</div>
	)
}

export default Home

// Mettre en composant
// Footer, Header, Caroussel, 
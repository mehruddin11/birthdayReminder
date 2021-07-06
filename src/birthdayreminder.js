import {useState} from 'react';
import data from './data'
import List from './list'
const Birthdayreminder =() =>{
	const [name, setName] =useState(data)
	return (
		<main>


		<section className ='container'>
		<h3 
		style= {{textDecoration:'underline',cursor:'pointer'}} 
		>Ui Design</h3>

		<h3> {name.length} birthday Today</h3>
		{
			name.map((person)=> {
				return <List {...person} key ={person.id}/>
			})

		}
		<button onClick= {() => setName([])}> Clear All</button>
		</section>
		</main>
		)
}
export default Birthdayreminder;
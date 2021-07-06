const List = ({name, age,img}) => {
	return (
		<article className ='person'>

		<img src= {img} alt = {name} />
		<div>
		<h4>{name}</h4>
		<p> {age}</p>
		</div>
		</article>

		)
}
export default List;
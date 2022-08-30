import styles from './recipeCard.module.css'


const RecipeCard = ({soupe}) => {
    const { title } = soupe.fields


  return (
    <div>{title}</div>
  )
}

export default RecipeCard
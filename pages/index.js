import { createClient } from 'contentful';
import RecipeCard from '../components/RecipeCard';

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })


  const res = await client.getEntries({
    content_type:'recipe'
  })

  return {
    props: {
      recipes: res.items
    }
  }
}

export default function Recipes({ recipes }){
  return (
    <div className="grid  md:grid-cols-2 
    xl:grid-cols-2 2xl:grid-cols-4 pb-32" >
     
       {recipes.map(recipe=>(
          <RecipeCard 
              key={recipe.sys.id} 
              recipe={recipe}
               />
       ))}
    </div>
  )
}



import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })

  export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type:'recipe'
    })


    const paths = res.items.map(item =>{
        return {
            params: {slug: item.fields.slug}
        }
    })

    return {
        //this is the same to paths: paths
        paths,
        fallback: false
    }
  }

  export async function getStaticProps({params}){
      const {items} = await client.getEntries({
          content_type: 'recipe',
          'fields.slug': params.slug
      })

      return {
          props: { recipe: items[0]}
      }
  }

export default function RecipeDetails({ recipe}) {

    const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields

    return (
        <div className=" pl-10 flex flex-col mx-20 my-20">
           <Image
             className="rounded-lg  max-w-screen-md"
             src={"https:" + featuredImage.fields.file.url}
             width={featuredImage.fields.file.details.image.width}
             height={featuredImage.fields.file.details.image.height}
             />
             <h2 className="font-extrabold text-xl pt-5 pb-5"> {title} </h2>

             <div className="info">
                 <p className="pt-1 pb-1">Take about {cookingTime} mins to cook. </p>
                 <h3 className="pt-1 pb-1">Ingredients:</h3>
                 {ingredients.map(ing => (
                     <span key={ing}>{ing}{", "}</span>
                 ))}
             </div>
             <div className="">
                    <h3 className="pt-5 pb-5 text-lg font-extrabold">Method:</h3>
                    <div className="pb-32" >{documentToReactComponents(method)}</div>
             </div>

        </div>
    )
}


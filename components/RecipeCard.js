import Image from 'next/image';
import Link from 'next/link';

function RecipeCard({recipe}) {
    const { title,slug,cookingTime,thumbnail} = recipe.fields
    return (
     
        <div className="mx-auto card pr-5 pb-3">
            <Image 
               
               className="rounded-md"
               width={thumbnail.fields.file.details.image.width}
               height={thumbnail.fields.file.details.image.height}
               
               src={'https:' + thumbnail.fields.file.url}
            />
             <div className="blackContent bg-black p-2 mb-1 text-white text-sm flex flex-col items-center">
               <p className=""> {title}</p>
               <p className=" text-xs">Takes approx {cookingTime} mins to make</p>
               <Link href={'/recipes/' + slug}>
               <a className="w-20 bg-red-600 h-6 m-2 flex items-center justify-around">
                   Cook this!
                </a>
                </Link>
            </div>
        </div>
       




    )
}

export default RecipeCard

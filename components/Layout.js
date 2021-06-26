import Link from 'next/link';
function Layout({ children }) {
    return (
        <div className=" flex flex-col  justify-center">
            <header className=" ">
                <Link href="/">
                    <a>
                        <h1 className="mt-10 flex flex-col items-center">
                            <span className="text-3xl">JUST ADD</span>
                            <span className="text-6xl font-extrabold">MARMITE</span>
                            
                        </h1>
                        <h2 className="justify-center flex mb-10">SPREAD THE JOY</h2>
                    </a>
                </Link>
            </header>
            <div className=" mx-auto flex-grow">
              {children}
                
            </div>
            <footer className="bg-black h-20 inset-x-0 bottom-0 text-white items-center 
                 fixed flex  justify-center">
                <p>Copyright 2021 Just Add Marmite</p>
            </footer>
        </div>
    )
}

export default Layout;

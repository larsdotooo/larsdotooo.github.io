import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Meine Projekte",
    description: "Hier findest du alle verrückten Dinge, die ich in letzter Zeit ausprobiert habe!",
  }

export default function Projekte() {
  
    return <>
    
    <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
        <div className='flex w-full'>
        <h2 className='w-full font-bold text-3xl lg:text-4xl text-dark dark:text-light pr-8'>
            Meine Projekte
        </h2>
        
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-16 mt-16'>

        <article className='col-span-1 row-span-1 relative'>
            <div className='group flex flex-col items-center text-dark dark:text-light'>
                <Link href='/gedanken' className='h-full rounded-xl overflow-hidden'>
                  <Image src="/michael-daniels-ylUGx4g6eHk-unsplash.jpg"
                  alt='picture by michael daniels'
                  width={800}
                  height={600}
                  className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all
                  ease duration-300'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>

                <div className='flex flex-col w-full mt-4'>
                  <Link href='/gedanken' className='inline-block my-1'>
                    <h2 className='font-semibolds text-2xl'>
                        <span className='bg-gradient-to-r from-orange-300/70 to-orange-300/70 dark:from-orange-400/50 dark:to-orange-400/50 bg-[length:0px_6px]
                        group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                        Jonglage & Shows
                        </span>
                    </h2>
                  </Link>
                  <span className='text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base'>
                  2015 - heute
                  </span>
                </div>
            </div>
          </article>

          <article className='col-span-1 row-span-1 relative'>
            <div className='group flex flex-col items-center text-dark dark:text-light'>
                <Link href='/gedanken' className='h-full rounded-xl overflow-hidden'>
                  <Image src="/michael-daniels-ylUGx4g6eHk-unsplash.jpg"
                  alt='picture by michael daniels'
                  width={800}
                  height={600}
                  className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all
                  ease duration-300'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>

                <div className='flex flex-col w-full mt-4'>
                  <Link href='/gedanken' className='inline-block my-1'>
                    <h2 className='font-semibolds text-2xl'>
                        <span className='bg-gradient-to-r from-orange-300/70 to-orange-300/70 dark:from-orange-400/50 dark:to-orange-400/50 bg-[length:0px_6px]
                        group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                        Investment GmbH
                        </span>
                    </h2>
                  </Link>
                  <span className='text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base'>
                  2021 - heute
                  </span>
                </div>
            </div>
          </article>

          <article className='col-span-1 row-span-1 relative'>
            <div className='group flex flex-col items-center text-dark dark:text-light'>
                <Link href='/gedanken' className='h-full rounded-xl overflow-hidden'>
                  <Image src="/michael-daniels-ylUGx4g6eHk-unsplash.jpg"
                  alt='picture by michael daniels'
                  width={800}
                  height={600}
                  className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all
                  ease duration-300'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>

                <div className='flex flex-col w-full mt-4'>
                  <Link href='/gedanken' className='inline-block my-1'>
                    <h2 className='font-semibolds text-2xl'>
                        <span className='bg-gradient-to-r from-orange-300/70 to-orange-300/70 dark:from-orange-400/50 dark:to-orange-400/50 bg-[length:0px_6px]
                        group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                        Fernstudium
                        </span>
                    </h2>
                  </Link>
                  <span className='text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base'>
                  2020 - 2023
                  </span>
                </div>
            </div>
          </article>

          <article className='col-span-1 row-span-1 relative'>
            <div className='group flex flex-col items-center text-dark dark:text-light'>
                <Link href='/gedanken' className='h-full rounded-xl overflow-hidden'>
                  <Image src="/michael-daniels-ylUGx4g6eHk-unsplash.jpg"
                  alt='picture by michael daniels'
                  width={800}
                  height={600}
                  className='aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all
                  ease duration-300'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>

                <div className='flex flex-col w-full mt-4'>
                  <Link href='/gedanken' className='inline-block my-1'>
                    <h2 className='font-semibolds text-2xl'>
                        <span className='bg-gradient-to-r from-orange-300/70 to-orange-300/70 dark:from-orange-400/50 dark:to-orange-400/50 bg-[length:0px_6px]
                        group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                        Auto fahren
                        </span>
                    </h2>
                  </Link>
                  <span className='text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base'>
                  2023 - 2024
                  </span>
                </div>
            </div>
          </article>

          

          

        </div>
    </section>
    
    
    </>
}

import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className='flex items-center flex-col my-10 mb-40'>
        <h1 className="text-[3rem] font-bold text-[#143C54]">Teams</h1>
        <h3 className="font-normal text-sm">Hover to see details</h3>
        <div className='mt-10 grid lg:grid-cols-3 grid-cols-1 gap-[2rem] px-[2rem] m-auto w-fit max-w-[80rem]'>
            <div className="group w-full relative h-[18rem] overflow-hidden max-w-sm bg-white transition-all ease-in-out duration-125 rounded-lg shadow ">
                <Image width={100} height={100} className="mt-6 m-auto -z-1 absolute h-40 group-hover:scale-[4] origin-center align-center w-full transition-[inherit]" src="/Blobs/Blob-Blue.svg" alt="Blue blob bacground image"></Image>
                <div className="h-40 relative mt-6 group-hover:translate-y-[-25%] transition-[inherit]">
                    <Image width={100} height={100} className="mx-auto w-10 rounded-t-lg align-center h-40 " src="/Icons/Software-Icon.svg" alt="Blue code icon"></Image>
                </div>
                <div className="px-5 h-fit group-hover:translate-y-[-75%]  transition-[inherit] duration-225 relative z-10 my-8">
                    <a href="#">
                        <h5 className="text-center text-xl font-semibold tracking-tight text-[#143C54]">SOFTWARE</h5>
                    </a>
                    <p className="text-center px-6 text-md font-normal opacity-0 mt-4 transition-[inherit] group-hover:opacity-100">Develop and implement the software and programming needed to operate the drone.</p>
                </div>
            </div>
            <div className="group w-full relative h-[18rem] overflow-hidden max-w-sm bg-white transition-all ease-in-out duration-125 rounded-lg shadow ">
                <Image width={100} height={100} className="mt-6 m-auto -z-1 absolute h-40 group-hover:scale-[4] origin-center align-center w-full transition-[inherit]" src="/Blobs/Blob-Orange.svg" alt="Orange bacground image"></Image>
                <div className="h-40 relative mt-6 group-hover:translate-y-[-25%] transition-[inherit]">
                    <Image width={100} height={100} className="mx-auto w-10 rounded-t-lg align-center h-40 " src="/Icons/Fabrication-Icon.svg" alt="Orange tools icon"></Image>
                </div>
                <div className="px-5 h-fit group-hover:translate-y-[-75%]  transition-[inherit] duration-225 relative z-10 my-8">
                    <a href="#">
                        <h5 className="text-center text-xl font-semibold tracking-tight text-[#143C54]">SOFTWARE</h5>
                    </a>
                    <p className="text-center px-6 text-md font-normal opacity-0 mt-4 transition-[inherit] group-hover:opacity-100">Develop and implement the software and programming needed to operate the drone.</p>
                </div>
            </div>
            <div className="group w-full relative h-[18rem] overflow-hidden max-w-sm bg-white transition-all ease-in-out duration-125 rounded-lg shadow ">
                <Image width={100} height={100} className="mt-6 m-auto -z-1 absolute h-40 group-hover:scale-[4] origin-center align-center w-full transition-[inherit]" src="/Blobs/Blob-Purple.svg" alt="Purple blob background image"></Image>
                <div className="h-40 relative mt-6 group-hover:translate-y-[-25%] transition-[inherit]">
                    <Image width={100} height={100} className="mx-auto w-10 rounded-t-lg align-center h-40 " src="/Icons/CAD-Icon.svg" alt="Purple 3d cube icon"></Image>
                </div>
                <div className="px-5 h-fit group-hover:translate-y-[-75%]  transition-[inherit] duration-225 relative z-10 my-8">
                    <a href="#">
                        <h5 className="text-center text-xl font-semibold tracking-tight text-[#143C54]">SOFTWARE</h5>
                    </a>
                    <p className="text-center px-6 text-md font-normal opacity-0 mt-4 transition-[inherit] group-hover:opacity-100">Develop and implement the software and programming needed to operate the drone.</p>
                </div>
            </div>
        </div>
        
        
    </section>
  )
};


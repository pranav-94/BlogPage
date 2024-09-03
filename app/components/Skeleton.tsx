
const Skeleton = ()=>{

    return(
       <div className="h-[480px] flex flex-col justify-center">
            <SkeletonComp/>
            <SkeletonComp/>
            <SkeletonComp/>
       </div>
    )

}

    const SkeletonComp = ()=>{
        return(
            <div className="w-[100%] flex flex-col items-center mt-4">
<div role="status" className="md:w-[60%] w-[80%] animate-pulse">
    <div className="flex items-center">
    <div className="h-[50px] bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] mb-4 mr-3"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] mb-2.5"></div>
    </div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
    <span className="sr-only">Loading...</span>
</div>
            </div>
        )
    }

export default Skeleton